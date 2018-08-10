<template>
  <ul class="footer clearfix">
    <li @click="footerBtn(1)" :class="{'active':index == '1'}">
      <div>
        <img src="../assets/img/mine/Group41@2x.png" alt="">
      </div>
      <p>首页</p>
    </li>
    <li @click="footerBtn(2)" :class="{'active':index == '2'}">
      <div>
        <img src="../assets/img/mine/Group10@2x.png" alt="">
      </div>
      <p>分类</p>
    </li>
    <li @click="footerBtn(3)" :class="{'active':index == '3'}">
      <div>
        <img src="../assets/img/mine/Group251@2x.png" alt="">
      </div>
      <p>出售</p>
    </li>
    <li @click="footerBtn(4)" :class="{'active':index == '4'}">
      <div>
        <img src="../assets/img/mine/Group14@2x.png" alt="">
      </div>
      <p>消息</p>
    </li>
    <li @click="footerBtn(5)" :class="{'active':index == '5'}">
      <div>
        <img src="../assets/img/mine/Group19Copy2@2x.png" alt="">
      </div>
      <p>我的</p>
    </li>
  </ul>
</template>

<script>
export default {
    data() {
        return {
            msg: "Hello Vuex",
            index: 0
        };
    },
    methods: {
        footerBtn(index) {
            switch (index) {
                case 1:
                    this.index = "1";
                    this.$router.push({path:"/index"})
                    break;
                case 2:
                    this.index = "2";
                    this.$router.push({path:"/cate"})
                    break;
                case 3:
                    this.index = "3";
                    this.$router.push({path:"/sell"})
                    break;
                case 4:
                    this.index = "4";
                    this.$router.push({path:"/message"})
                    break;
                case 5:
                    this.index = "5";
                    this.$router.push({path:"/mine"})
                    break;
            }
        }
    }
};
</script>

<style lang="less" scoped>
.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 750/20rem;
    padding-top: 13/20rem;
    padding-bottom: 17/20rem;
    background-color: #fff;
    box-shadow: 0 -2/20rem 2/20rem 0 #ccc;
    li {
        float: left;
        width: 20%;
        p {
            font-size: 21/20rem;
            color: #a3a3a3;
            line-height: 21/20rem;
        }
        img {
            vertical-align: middle;
        }
        div {
            height: 50/20rem;
            line-height: 44/20rem;
        }
    }

    li:nth-child(1) {
        img {
            width: 48/20rem;
            height: 44/20rem;
        }
    }
    li:nth-child(2) {
        img {
            width: 42/20rem;
            height: 42/20rem;
        }
    }
    li:nth-child(3) {
        margin-top: -52/20rem;
        div {
            margin-bottom: 2/20rem;
            height: unset;
            line-height: unset;
        }
        img {
            width: 100/20rem;
            height: 100/20rem;
        }
    }
    li:nth-child(4) {
        img {
            width: 42/20rem;
            height: 38/20rem;
        }
    }
    li:nth-child(5) {
        img {
            width: 33/20rem;
            height: 40/20rem;
        }
    }
    li.active {
        p {
            color: #181818;
        }
    }
}
</style>






















