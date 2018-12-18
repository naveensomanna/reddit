<template>
    <div class="container">
        <img src="../assets/reddit.png"/>
    </div>
</template>
<script>
    import axios from 'axios';
export  default {

    data(){
        return{
            params:{},
            tmp:'',
            vars:'',
            access_token:''
        }
    },
    methods:{
        checking(){
            if (window.location.search.substr(1)) {
                this.vars = window.location.search.substr(1).split("&");
                this.vars.forEach(v => {
                    this.tmp = v.split("=");
                    if (this.tmp.length === 2) {
                        this.params[this.tmp[0]] = this.tmp[1];
                    }
                });

        }
        },
        getAccessToken(){
            let token = JSON.parse(JSON.stringify(this.params));
            const form = new FormData();
            form.append("grant_type", "authorization_code");
            form.append("code", `${token.code}`);
            form.append("redirect_uri", "http://localhost:8080/auth");
            const username = "AA-Rd4eR9DpMIQ";
            const password = "yvEHRbKGWilUHuHwL0lgGIZb8jU";
            const basicAuth = "Basic " + btoa(username + ":" + password);
            axios
                .post(`https://www.reddit.com/api/v1/access_token`, form, {
                    headers: {
                        Authorization: basicAuth,
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
                .then(response => {
                    this.access_token = response.data;
                    console.log(this.access_token);

                })
                .catch(err => console.log("error", err));
        }

    },
    created(){
        this.checking();

    },
    mounted(){
        this.getAccessToken();

    },
    watch:{
        params(){

        },
        access_token(){
            sessionStorage.setItem('token',JSON.stringify(this.access_token.access_token));
            this.$router.push({path:'/'});
        }
    },
}
</script>
<style scoped>
.container{
    background-color: #141316;
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom: 0;

}
    .container img{
        text-align: center;
    }
</style>