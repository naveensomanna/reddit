<template>
    <el-row>
        <el-col>
            <el-card>
                <p>Welcome to Home Component</p>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
    import  axios from 'axios';
    export default {
        name: "Home",
        data() {
            return {
me:[]
            }
        },
        methods:{

        },
        created(){
            let str=sessionStorage.getItem('token').replace(/"/g,"");
            axios.get('https://oauth.reddit.com/api/v1/me', {
                headers: {
                    'Authorization':'Bearer '+ str,
                    'Content-Type': 'application/json',

                }

            }).then(response=>{
               this.me=JSON.parse(JSON.stringify(response.data));
               console.log(this.me);
            })

        }
    }
</script>

<style scoped>

</style>