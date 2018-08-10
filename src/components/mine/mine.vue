<template>
    <div class="wrap">

        <div class="container" v-show="containerShow">
            <div id="user">
                <div class="top clearfix">
                    <img src="../../assets/img/mine/Group65@2x.png" alt="">
                    <img src="../../assets/img/mine/Page1@2x.png" alt="">
                </div>

                <div class="user">
                    <div class="user-img">
                        <img :src="headImageUrl" alt="">
                    </div>
                    <p class="user-name">{{nickName}}</p>
                    <div class="grade">
                        <span>{{grade}}</span>
                    </div>
                </div>
            </div>

            <div class="money-about">
                <span @click="to('wollet')">钱包</span>
                <span @click="to('coupon')">优惠券</span>
                <span @click="to('redEnvelope')">红包</span>
            </div>

            <ul class="mine-option clearfix">
                <li @click="to('mineBuy')">
                    <div class="icon">
                        <img src="../../assets/img/mine/Group63@2x.png" alt="">
                    </div>
                    <p>我的购买</p>
                </li>
                <li @click="to('mineJimai')">
                    <div class="icon">
                        <img src="../../assets/img/mine/Group8@2x.png" alt="">
                    </div>

                    <p>我的寄卖</p>
                </li>
                <li @click="to('mineSell')">
                    <div class="icon">
                        <img src="../../assets/img/mine/Group64@2x.png" alt="">
                    </div>
                    <p>我的售卖</p>
                </li>
                <li @click="to('mineLove')">
                    <div class="icon">
                        <img src="../../assets/img/mine/CombinedShapeCopy@2x.png" alt="">
                    </div>
                    <p>我的关注</p>
                </li>
            </ul>

            <ul class="help">
                <p @click="help(1)">
                    <span>帮助中心</span>
                    <img src="../../assets/img/mine/Page1Copy15@2x.png" alt="">
                </p>
                <p @click="help(2)">
                    <span>意见反馈</span>
                    <img src="../../assets/img/mine/Page1Copy15@2x.png" alt="">
                </p>
                <p @click="help(3)">
                    <span>客服电话</span>
                    <span class="phone">0757-63506158</span>
                </p>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            headImageUrl: "",
            nickName: "",
            grade: "",
            containerShow: true
        };
    },
    methods: {
        help(helpNum) {
            switch (helpNum) {
                case (helpNum = 1):
                    this.$router.push({ path: "/help" });
                    break;
                case (helpNum = 2):
                    // this.$router.push({path:""})
                    break;
            }
        },
        to(pathName) {
            this.containerShow = false;
            if (pathName == "wollet") {
                this.$router.push({ path: "/mine/wollet" });
            } else if (pathName == "coupon") {
                this.$router.push({ path: "/mine/coupon" });
            } else if (pathName == "redEnvelope") {
                this.$router.push({ path: "/mine/redEnvelope" });
            } else if (pathName == "mineBuy") {
                this.$router.push({ path: "/mine/mineBuy" });
            } else if (pathName == "mineJimai") {
                this.$router.push({ path: "/mine/mineJimai" });
            } else if (pathName == "mineSell") {
                this.$router.push({ path: "/mine/mineSell" });
            } else if (pathName == "mineLove") {
                this.$router.push({ path: "/mine/mineLove" });
            }
        }
    },

    beforeCreate() {
        this.$store.commit("header", {
            headerTitle: "我的",
            headerShow: false,
            registerShow: false
        });
        this.$store.commit("footer", {
            footerShow: true
        });
    },
    created() {
        let _this = this;
        console.log(_this.containerShow)
        
        _this.containerShow = true;
        var json = {
            account: sessionStorage.getItem("account"),
            key: this.public_key
        };

        json = this.toMap.toMap(json);
        var sign = this.hex_md5.hex_md5(json);
        var data = this.$qs.stringify({
            account: sessionStorage.getItem("account"),
            sign: sign
        });
        console.log(data);
        this.axios({
            method: "post",
            url: _this.base_url + "/member/memberInfo",
            data: data
        }).then(res => {
            console.log(res);
            sessionStorage.setItem("userInfo", JSON.stringify(res.data));
            _this.grade = res.data.grade;
            _this.headImageUrl = res.data.headimgurl;
            _this.nickName = res.data.nickname;
        });
    }
};
</script>

<style scoped lang="less">
.container {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
}
#user {
    width: 750/20rem;
    height: 440/20rem;
    background: url("../../assets/img/mine/2bg24@2x.png");
    background-size: 750/20rem 440/20rem;
}
.top {
    padding: 23/20rem 21/20rem 54/20rem;
    box-sizing: border-box;
    img {
        width: 35/20rem;
        height: 37/20rem;
    }
    img:first-child {
        float: left;
    }
    img:last-child {
        float: right;
    }
}
.user {
    .user-img {
        img {
            border-radius: 50%;
            width: 117/20rem;
            height: 117/20rem;
        }
    }
    .user-name {
        margin-top: 4/20rem;
        margin-bottom: 5/20rem;
        line-height: 42/20rem;
        font-size: 29/20rem;
        text-align: center;
        color: #fff;
    }
    .grade {
        text-align: center;
        span {
            display: inline-block;
            width: 100/20rem;
            height: 29/20rem;
            line-height: 25/20rem;
            border-radius: 40/20rem;
            text-align: center;
            font-size: 21/20rem;
            color: #fff;
            border: 1/20rem solid #fff;
        }
    }
}
.money-about {
    margin: 0 auto;
    margin-top: -83/20rem;
    margin-bottom: 21/20rem;
    width: 667/20rem;
    height: 167/20rem;
    padding: 67/20rem 0 63/20rem;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 20/20rem;
    box-shadow: 0 2/20rem 6/20rem 0 #ccc;
    span {
        float: left;
        display: inline-block;
        height: 38/20rem;
        line-height: 38/20rem;
        text-align: center;
        font-size: 25/20rem;
        font-weight: bold;
        color: #181818;
        border-right: 2/20rem solid #333;
    }
    span:nth-child(1) {
        width: 240/20rem;
    }
    span:nth-child(2) {
        width: 231/20rem;
    }
    span:nth-child(3) {
        width: 188/20rem;
        border-right: unset;
    }
}

.mine-option {
    padding: 46/20rem 50/20rem 48/20rem;
    width: 750/20rem;
    height: 198/20rem;
    background-color: #fff;
    box-sizing: border-box;
    li {
        float: left;
        width: 25%;
        .icon {
            margin-bottom: 31/20rem;
            height: 44/20rem;
            line-height: 44/20rem;
        }
        img {
            display: inline-block;
            vertical-align: middle;
        }
        p {
            font-size: 23/20rem;
            color: #181818;
            text-align: center;
            line-height: 33/20rem;
            letter-spacing: 2/20rem;
        }
    }
    li:nth-child(1) {
        img {
            width: 38/20rem;
            height: 42/20rem;
        }
    }
    li:nth-child(2) {
        img {
            width: 42/20rem;
            height: 44/20rem;
        }
    }
    li:nth-child(3) {
        img {
            width: 44/20rem;
            height: 42/20rem;
        }
    }
    li:nth-child(4) {
        img {
            width: 44/20rem;
            height: 35/20rem;
        }
    }
}

.help {
    margin-top: 21/20rem;
    width: 750/20rem;
    background-color: #fff;
    p {
        padding: 0 23/20rem 0 21/20rem;
        height: 104/20rem;
        line-height: 104/20rem;
        text-align: left;
        box-shadow: 0 2/20rem 0 0 #ccc;
        box-sizing: border-box;
        span {
            font-size: 25/20rem;
            color: #181818;
        }
        img {
            float: right;
            margin-top: 42/20rem;
        }
        .phone {
            float: right;
        }
    }
    p:last-child {
        box-shadow: unset;
    }
}
</style>

