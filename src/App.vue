<template>
  <NavbarComp/>
  <router-view/>
  <Spinner v-if="!$store.state.aboutMe" />
  <FooterComp/>


</template>
<script>
import NavbarComp from '../src/components/NavbarCom.vue'
import FooterComp from './components/FooterComp.vue';
import Spinner from './components/SpinnerComp.vue'; // Adjust path based on your project structure


export default {
  components:{
    NavbarComp,
    FooterComp,
    Spinner
  }
  
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>
