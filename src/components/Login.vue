<template>
    <div>
        <el-row type="flex" justify="center">
            <el-col :span="8" >
<el-card >
    <p>Welcome to Reddit App</p>

</el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import  axios from 'axios';
    export default {
        name: "Login",
        data(){
            return{
                params:{},
                tmp:'',
                vars:'',
                access_token:'',
                user:{}
            }
        },
        methods:{

    getAccessToken(){
let token=JSON.parse(JSON.stringify(this.params));
const form=new FormData();
form.append('grant_type',"authorization_code");
form.append('code',`${token.code}`);
form.append('redirect_uri','http://localhost:4041/login');
const username='AA-Rd4eR9DpMIQ';
const password='yvEHRbKGWilUHuHwL0lgGIZb8jU';
        const basicAuth = 'Basic ' + btoa(username + ':' + password);
        axios.post(`https://www.reddit.com/api/v1/access_token`,form, {
                        headers: {
                            'Authorization':  basicAuth,
                            'Content-Type': 'application/x-www-form-urlencoded',

                        },


                }


                ).then(response =>{
           this.access_token=response.data
                }).catch(err=> console.log("error",err));
            }

        },
        watch:{
            access_token(){
                sessionStorage.setItem('token',JSON.stringify(this.access_token.access_token));
this.$router.push({path:'/home'});
            }
        },
mounted() {
this.vars=window.location.search.substr(1).split('&');
this.vars.forEach(v=>{
    this.tmp=v.split('=');
    if(this.tmp.length===2){
        this.params[this.tmp[0]]=this.tmp[1];
    }
});
    this.getAccessToken();


}

,
        created() {
        }
    }
</script>

<style scoped>
p{
    color:dodgerblue;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-size:2rem;
    text-align: center;
}

</style>