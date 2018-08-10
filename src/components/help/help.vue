<template>
    <div class="container">
        <h2 class="h2">
            <!-- <i>?</i> -->
            <span>买家帮助</span>
        </h2>
        <ul class="buy">
            <li @click="helpOption(1)">
                <a href="javascript:void(0);">常见问题
                    <i></i>
                </a>
            </li>
            <li @click="helpOption(2)">
                <a href="javascript:void(0);">新手指南
                    <i></i>
                </a>
            </li>
            <li @click="helpOption(3)">
                <a href="javascript:void(0);">商品问题
                    <i></i>
                </a>
            </li>
            <li @click="helpOption(4)">
                <a href="javascript:void(0);">订单问题
                    <i></i>
                </a>
            </li>
            <li @click="helpOption(5)">
                <a href="javascript:void(0);">售后服务
                    <i></i>
                </a>
            </li>
            <li @click="helpOption(6)">
                <a href="javascript:void(0);">养护服务
                    <i></i>
                </a>
            </li>
            <li @click="helpOption(7)">
                <a href="javascript:void(0);">防骗公告
                    <i></i>
                </a>
            </li>
        </ul>
        <h2>
            <!-- <i>?</i> -->
            <span>卖家帮助</span>
        </h2>
        <ul>
            <li @click="helpOption(8)">
                <a href="javascript:void(0);">常见问题
                    <i></i>
                </a>
            </li>
            <li @click="helpOption(9)">
                <a href="javascript:void(0);">卖家相关
                    <i></i>
                </a>
            </li>
        </ul>
        <div></div>
    </div>

</template>

<script>
export default {
    data() {
        return {};
    },

    methods:{
        helpOption(num){
            this.$router.push({path:"/help/detail",name:"help/detail",query:num})
        }
    },

    beforeCreate() {
        this.$store.commit("header", {
            headerTitle: "我要帮助",
            headerShow: true
        });
        this.$store.commit("footer", {
            footer: false
        });
    }
};
</script>

<style lang="less" scoped>

.container {
    width: 100%;
    height: 100%;
    padding-top: 80px;
    background-color: #f5f5f5;
}

h2 {
    width: 100%;
    padding-top: 41px;
    padding-bottom: 18px;
    box-sizing: border-box;
    text-align: left;
    background-color: #f5f5f5;
    span {
        padding: 0 10px;
        padding-top: 17px;
        display: block;
        width: 100%;
        height: 100%;
        font-weight: normal;
        font-size: 27px;
        color: #878787;
        box-sizing: border-box;
    }
}
div {
    height: 20px;
    background-color: #f7f7f7;
}
ul {
    background-color: #fff;
    padding: 0 10px;
    box-sizing: border-box;
    li {
        color: #333333;
        width: 100%;
        height: 94px;
        font-size: 29px;
        border-bottom: 0.5px solid #e6e6e6;
        box-sizing: border-box;
        text-align: left;
        a {
            display: block;
            width: 100%;
            height: 100%;
            line-height: 94px;
            font-family: PingFang-SC-Medium;
            color: rgba(24, 24, 24, 0.8);
        }
        i {
            float: right;
            display: inline-block;
            margin-top: 36px;
            margin-right: 21px;
            width: 13px;
            height: 22px;
            background-image: url("../../assets/img/mine/Page1Copy15@2x.png");
            background-repeat: no-repeat;
            background-size: 13px 22px;
        }
    }
    li:last-child {
        border: unset;
    }
}
</style>
