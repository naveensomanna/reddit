<template>
  <div class="hello">
    <div class="wrapper">
      <div class="rightTop-container">
        <div class="header-content">
          <div class="icon">
            <i class="fab fa-reddit-alien" id="movement"></i>
          </div>
          <div>
            <h2>reddit</h2>
          </div>
        </div>
        <div class="content-bottom">
          <p>Authentication Via Reddit</p>
        </div>
      </div>
      <div class="rightBottom-container">

        <p v-if="btn"><a  href="https://www.reddit.com/api/v1/authorize?client_id=AA-Rd4eR9DpMIQ&response_type=code&redirect_uri=http://localhost:4041/&scope=identity&duration=permanent&state=sandeep">{{btnvalue}}</a></p>
        <p v-else> <a  href="" @click="logIn">{{btnvalue}}</a></p>
      </div>
      <div class="standing-icon">
        <img src="../assets/reddit.png" />
      </div>
    </div>

  </div>
</template>

<script>
    import  axios from 'axios';

    export default {
  name: 'Register',
    data(){
      return{
          params:{},
          tmp:'',
          vars:'',
          access_token:'',
          user:{},
          btnvalue:'Sign With Reddit',
          btn:''
      }
    },
    methods:{
      checking() {
          if (window.location.search.substr(1)) {
              this.btn = false;
              this.vars=window.location.search.substr(1).split('&');
              this.vars.forEach(v=>{
                  this.tmp=v.split('=');
                  if(this.tmp.length===2){
                      this.params[this.tmp[0]]=this.tmp[1];
                  }
              });
              this.btnvalue="Login With Reddit";

          } else {
              this.btn = true;
          }
      },
        logIn(){
            this.$router.push({path:'/home'});
          },
        getAccessToken(){
            let token=JSON.parse(JSON.stringify(this.params));
            const form=new FormData();
            form.append('grant_type',"authorization_code");
            form.append('code',`${token.code}`);
            form.append('redirect_uri','http://localhost:4041/');
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
                this.access_token=response.data;

            }).catch(err=> console.log("error",err));
        }

    },
mounted(){
    this.checking();

},
        watch:{
            access_token(){
                sessionStorage.setItem('token',JSON.stringify(this.access_token.access_token));

            },
            btn(){
                if(this.btn===false){
                    this.getAccessToken();
                }
            }
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a{
    text-decoration: none;
    color:white;
  }
  .hello{
    background-color:rgba(158,112,244,0.9);
    position:absolute;
    top:0;
    right:0;
    left:0;
    bottom: 0;
  }
  .wrapper{
    margin:0 auto;
    width:50%;
    height:400px;
    background-color:rgb(78,33,233);
    border-radius:4px;
    position:relative;
    top:20%;
  }
  .rightTop-container{
    position:absolute;
    top:0;
    right:0;
    width:70%;
    height:160px;
    background-color:rgb(255,255,255);
    border-top-right-radius:4px;
    border-bottom-left-radius:4px;
  }
  .rightBottom-container{
    position:absolute;
    bottom:0;
    right:0;
    width:70%;
    height:160px;
    background-color:rgb(255,255,255);
    border-bottom-right-radius:4px;
    border-top-left-radius:4px;
  }
  .header-content{
    color:rgb(147,137,241);
    display:flex;
    width:40%;
    height:30%;
    justify-content:space-around;
    align-items:center;
  }
  .header-content .icon{
    background:rgb(255,69,0);
    width:30px;
    height:30px;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .icon .fab{
    color:white;
  }
  .header-content h2{
    margin:0px;
    padding:0px;
    color:rgb(78,33,233);
  }
  #movement{
    animation:rotate 5s infinite;
  }
  @keyframes rotate{
    0%{
      transform:rotate(0deg);
    }
    25%{
      transform:rotate(100deg);

    }
    50%{
      transform:rotate(180deg);

    }
    100%{
      transform:rotate(360deg);

    }
  }
  .content-bottom{
    font-size:1.4rem;
    letter-spacing:0.1rem;
    padding-top:20px;
    width:100%;
    height:100%;
    text-align:center;
    font-weight:bold;
  }
  .rightBoottom-container{
    width:100%;
  }
  .rightBottom-container p{
    background-color:rgb(78,33,233);
    width:150px;
    height:40px;
    border-radius:50px;
    color:white;
    margin-left:180px;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
  }

  .standing-icon{
    position: absolute;
 bottom: 80px;
    left:10px;
    width:30%;
    height: 50%;
  }
  .standing-icon img{
    max-width: 100%;
    max-height: 100%;
  }
</style>
