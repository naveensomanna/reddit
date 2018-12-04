<template>
    <div v-loading="loading" class="loader">
    <el-row :span="24" class="header-container">
              <el-col :span="10">
reddit
        </el-col>
        <el-col :span="8" >
            <el-dropdown trigger="hover">
                <span class="user-details"><img :src="this.userAvatar"/>{{this.userName}}</span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>Change Password</el-dropdown-item>
                    <el-dropdown-item divided @click.native="logout">Log out</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-col>
    </el-row>
    </div>
</template>

<script>
    import  axios from 'axios';
    export default {
        name: "Home",
        data() {
            return {
me:[],
                userName:'',
                userAvatar:'',
                loading:''
            }
        },
        methods:{
logout(){
    this.$confirm("Are you sur to exit?","warning",{
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
    }).then(()=>{
        sessionStorage.removeItem('token');
        this.$router.push({path:'/'});
    })
},
            getUserData(){
    this.loading=true;
                let str=sessionStorage.getItem('token').replace(/"/g,"");
                axios.get('https://oauth.reddit.com/api/v1/me', {
                    headers: {
                        'Authorization':'Bearer '+ str,
                        'Content-Type': 'application/json',

                    }

                }).then(response=>{
                    this.me=JSON.parse(JSON.stringify(response.data));
this.loading=false;
                    console.log(this.me);
                })

            }
        },


        watch:{
            me(){
          this.userAvatar=this.me['icon_img'];
          this.userName=this.me['name'];
            }
        },
        created(){


        },
        mounted() {
            this.getUserData();
        }
    }
</script>

<style scoped>
.header-container{
    width:100%;
    position: fixed;
    top:0;
    left:0;
    right:0;
    color:rgb(28,28,28);
    height: 48px;
    overflow: hidden;
    border-bottom: 1px solid rgb(237,239,241);
}
    .user-details{
cursor: pointer;
    }
    img{
        width:40px;
        height: 40px;
    }
.loader{
    position: absolute;
    top:40%;
    left:50%;

}


</style>