<template>
    <div v-loading="loading" class="loader">
        <el-row :span="24" class="header-container">
            <el-col :span="10">
                reddit
            </el-col>
            <el-col :span="8">
                <el-dropdown trigger="hover">
                    <span class="user-details"><img :src="this.userAvatar"/>{{this.userName}}</span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>Change Password</el-dropdown-item>
                        <el-dropdown-item divided @click.native="logout">Log out</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </el-row>
        {{count}}
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Home",
        data() {
            return {
                me: [],
                userName: "",
                userAvatar: "",
                loading: "",
                params: {},
                tmp: "",
                vars: "",
                access_token: ""
            };
        },
        methods: {
            checking() {
                console.log("checking")
                console.log(window.location.href)
                if (window.location.search.substr(1)) {
                    this.vars = window.location.search.substr(1).split("&");
                    this.vars.forEach(v => {
                        this.tmp = v.split("=");
                        if (this.tmp.length === 2) {
                            this.params[this.tmp[0]] = this.tmp[1];
                        }
                    });
                } else {
                    // this.$router.push({path: "/login"});
                }
            },

            getAccessToken() {
                let token = JSON.parse(JSON.stringify(this.params));
                const form = new FormData();
                form.append("grant_type", "authorization_code");
                form.append("code", `${token.code}`);
                form.append("redirect_uri", "http://localhost:8080");
                const username = "AA-Rd4eR9DpMIQ";
                const password = "yvEHRbKGWilUHuHwL0lgGIZb8jU";
                const basicAuth = "Basic " + btoa(username + ":" + password);
                this.loading = true;
                axios
                    .post(`https://www.reddit.com/api/v1/access_token`, form, {
                        headers: {
                            Authorization: basicAuth,
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    })
                    .then(response => {
                        this.access_token = response.data;
                    })
                    .catch(err => console.log("error", err));
            },

            logout() {
                this.$confirm("Are you sur to exit?", "warning", {
                    confirmButtonText: "OK",
                    cancelButtonText: "Cancel",
                    type: "warning"
                }).then(() => {
                    sessionStorage.removeItem("token");
                    this.$router.push({path: "/login"});
                });
            },
            getUserData() {
                let str = sessionStorage.getItem("token").replace(/"/g, "");
                axios
                    .get("https://oauth.reddit.com/api/v1/me", {
                        headers: {
                            Authorization: "Bearer " + str,
                            "Content-Type": "application/json"
                        }
                    })
                    .then(response => {
                        this.me = JSON.parse(JSON.stringify(response.data));
                        this.loading = false;

                        console.log(this.me);
                    });
            }
        },

        watch: {
            me() {
                this.userAvatar = this.me["icon_img"];
                this.userName = this.me["name"];
            },
            access_token() {
                sessionStorage.setItem(
                    "token",
                    JSON.stringify(this.access_token.access_token)
                );
                this.getUserData();

            }
        },
        created() {

        },
        mounted() {
            this.checking();

            this.getAccessToken();
        },
        computed: {
            count() {
                return this.$store.state.count;
            }
        }
    };
</script>

<style scoped>
    .header-container {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        color: rgb(28, 28, 28);
        height: 48px;
        overflow: hidden;
        border-bottom: 1px solid rgb(237, 239, 241);
    }

    .user-details {
        cursor: pointer;
    }

    img {
        width: 40px;
        height: 40px;
    }

    .loader {
        position: absolute;
        top: 40%;
        left: 50%;
    }
</style>
