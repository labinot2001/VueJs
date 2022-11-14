<template>
<div class="navi container">
<nav class="navbar navbar-expand-md">
  <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#main-navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
    <img  class="img-fluid" src="../assets/employeelogo.png">  
  <div class="collapse navbar-collapse" id="main-navigation">
    <ul class="navbar-nav">
      
      <li class="nav-item mr-5" >
         <router-link class="nav-link" to="/employeehome" >
          <a>Dashboard</a>
        </router-link>
      </li>
     <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>
        <ul class="navbar-nav ml-auto">
          <template v-if="user.loggedIn">
            <div class="nav-item">
             <a class="nav-link" id="cookie"> {{user.data.displayName}} </a>
            </div>
            <li class="nav-item ml-5">
              <a style="color: black;" class="nav-link" @click.prevent="signOut">Sign out</a>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <router-link to="login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="register" class="nav-link">Register</router-link>
            </li>
          </template>
        </ul>
      </div>
      
    </ul>
  </div>
</nav>

<!--
<ul class="nav nav-pills">
  <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
  <router-link to="/about" tag="li" active-class="active"><a>About</a></router-link>
  <router-link to="/user" tag="li" active-class="active"><a>User</a></router-link>
  <router-link to="/useredit" tag="li" active-class="active"><a>User</a></router-link>
</ul> -->

</div>

</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home"
          });
        });
    }
  }
};
</script>

<style scoped>
  .navi{
    color:azure;
  }
  a { 
    color:black;
    font-family: 'Poppins';
  }

  #cookie{
    color: lightseagreen;
    
  }
</style>