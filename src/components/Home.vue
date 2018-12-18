<template>
    <div>
  <div class="container">
      <div class="side-bar">
          <div class="header-sidebar">
          <div class="icon">
          <i class="fab fa-reddit-alien" ></i>
      </div>

          <div class="title">
              reddit
          </div>
          </div>
          <div class="menu">
              <div class="posts">
                  <div class="quicklinks">
              <div>
                  <i class="fa fa-window-restore" aria-hidden="true"></i>
</div> 
                  <div class="one">
                      <p>Controversial</p>
                  </div>
              </div>
              </div>
              <div class="posts">
                  <div class="quicklinks">
                  <div>
                      <i class="fa fa-fire" aria-hidden="true"></i>
</div>
                  <div class="one">
                      <p>Hot</p>
                  </div>
              </div>
              </div>
              <div class="posts">
                  <div class="quicklinks">
 <div><i class="fa fa-paper-plane-o" aria-hidden="true"></i>

 </div>
                  <div class="one">
                      <p>New</p>
                  </div>
                  </div>
              </div>
              <div class="posts">
                  <div class="quicklinks">
                      <div>
                          <i class="far fa-star"></i>
                      </div>
                 <div class="one">
                     <p>Popular</p>
                 </div>
              </div>
              </div>
              <div class="posts">
                  <div class="quicklinks">
                  <div><i class="fas fa-bullhorn"></i>
</div><div class="one"><p>Promoted</p></div>
              </div>
              </div>
              <div class="posts">
                  <div class="quicklinks">
                  <div>
                      <i class="fas fa-industry"></i>
</div>
                  <div class="one">
                      <p>Rising</p>
                  </div>
              </div>
              </div>
              <div class="posts">
                  <div class="quicklinks">
                      <div>
                          <i class="fa fa-line-chart" aria-hidden="true">
                          </i>
                      </div>
                  <div class="one">
                      <p>
                      Top
                  </p></div>
                  </div>
              </div>
          <div class="posts">
              <div class="quicklinks">
              <div>
                  <i class="fas fa-power-off"></i>
              </div>
              <div class="one">
                  <p>Log out</p>
              </div>
              </div>
          </div>
          </div>

  </div>

  </div>
    <Header/>
</div>
</template>

<script>
    import Header from './Header';
export default {
  name: "Home",
    components: {Header},
    data() {
    return {
      search: "",
      collapse: false
    };
  },
  methods: {
    Collapse() {
      this.collapse = !this.collapse;
    },
    logout() {
      this.$confirm("Are you sur to exit?", "warning", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(() => {
        sessionStorage.removeItem("token");
        this.$router.push({ path: "/login" });
      });
    }
  },
  watch: {},
  created() {},
  mounted() {
    this.$store.dispatch("User");
  },
  computed: {

    loading() {
      return this.$store.getters.Loader;
    }
  }
};
</script>

<style scoped>

.container {
  width: 100%;
    height: 100%;

}
.side-bar {
  /*background-color: #fafbfc;*/
  background-color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
    height: 100%;
  transition: 0.3s;
  overflow-x: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}
.header-sidebar {
  width: 90%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.icon {
  background: rgb(255, 69, 0);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon .fab {
  color: white;
}
.title {
  padding-left: 10px;
  color: #3b3b3b;
    font-weight: bold;
  font-family: "Open Sans";
}
.menu {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  height: 60%;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
.posts {
  border-bottom: 1px solid #f9f9f9;
  width: 100%;
    height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}
.posts:last-child{
    border-bottom: none;
}
    .quicklinks{
        width:70%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        color: #D7D7D7;
        font-weight: bold;
        font-family: 'Open Sans', sans-serif;

    }
    .one{
        width: 75%;
    }
    .fa-star{
font-weight: bold;
    }
</style>
