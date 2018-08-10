<template>
    <header>
        <span class="icon-back" @click="$router.go(-1)"></span>
        <span>{{$store.state.headerTitle}}</span>
        <div v-show="$store.state.registerShow" class="icon-register" @click="register">
            <img src="../assets/img/login/Group58@2x.png" alt="">
            <p>注册</p>
        </div>
    </header>
</template>

<script>
export default {
  methods:{
    register:function(){
      this.$router.push({
        path:"./register"
      })
    }
  }
};
</script>

<style scoped lang="less">
header {
  position: fixed;
  width: 100%;
  height: 80/20rem;
  background-color: #ffffff;
  line-height: 80/20rem;
  font-size: 34/20rem;
  font-weight: bold;
  color: #181818;
  box-shadow: 0 1px 4px 0 #e7e7e7;
  .icon-back {
    position: absolute;
    top: 0;
    left: 0;
    background: url("../assets/img/Page1Copy11@2x.png") no-repeat;
    padding: 22/20rem;
    width: 80/20rem;
    height: 80/20rem;
    background-size: 20/20rem 36/20rem;
    background-origin: content-box;
    box-sizing: border-box;
  }
  .icon-register {
    position: absolute;
    top: 0;
    right: 0;
    height: 80/20rem;
    padding-top: 19/20rem;
    padding-right: 21/20rem;
    box-sizing: border-box;
    img {
      display: block;
      width: 27/20rem;
      height: 27/20rem;
      vertical-align: middle;
    }
    p {
      font-size: 14/20rem;
      line-height: 14/20rem;
      font-weight: lighter;
    }
  }
}
</style>
