<template>
    <header class="heading">
        <div class="inner-heading">
       <div class="search-wrapper">
           <div class="search-icon">
               <img src="../assets/magnifier.png"  />
           </div>
           <input type="text" v-model="search" placeholder="Find a Community, Post or User">
       </div>
        <div class="country-wrapper">
            <p>India</p>
        </div>
        <div class="user-data-wrapper">
            <div class="user-action">
                <i class="fas fa-envelope"></i>
                <i class="fas fa-bell"></i>
                <div style="display:flex;alignItems:center; ">
                    <div><img :src="Avatar"/></div>
                    <div><p>{{Name}}</p></div>
                </div>

            </div>
        </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header",
        data(){
            return{

            }
        },
        computed:{
            Name() {
                return this.$store.getters.Name;
            },
            Avatar() {
                return this.$store.getters.Avatar;
            },
        }
    }
</script>

<style scoped>
.heading{
position: fixed;
    top:30px;
    left:0;
    right:0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
align-items: center;
}
.inner-heading{
    display: flex;
    justify-content: space-between;
    width:75%;
    align-items: center;
}
.search-wrapper{
    position: relative;
    display: flex;
    border-radius: 10em;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    width:250px;
    background-color: #ffffff;
    padding: 10px;
}
.search-icon{
position: absolute;
    top:9px;
    z-index: 999;
    width:13px;
    height: 13px;

}
.search-wrapper input{
    outline: none;
    border:none;
    padding-left: 19px;
width:100%;
}
input::placeholder{
    color:#D7D7D7;
    font-size: 1em;
    font-weight: bold;
    font-style: italic;
}
    .user-data-wrapper{
        display: flex;
        width: 320px;
        align-items: center;
    }
    .user-action img{
        width:40px;
        height: 40px;
        border-radius: 50%;
    }
    .user-action{
        width:45%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>