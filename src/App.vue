<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <headerView v-show="$store.state.headerShow"/>
    <router-view/>
    <footerView v-show="$store.state.footerShow"/>
    <tipView v-show="$store.state.tip.show"/>
  </div>
</template>

<script>
import footerView from "./components/footer-view";
import headerView from "./components/header-view";
import tipView from "./components/tip";
export default {
  name: "App",
  components:{footerView,headerView,tipView},
  data(){
    return {
      
    }
  }
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
}
</style>
