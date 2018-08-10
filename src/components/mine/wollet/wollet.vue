<template>
    <div class="wrap">
        <header>
            <span class="icon-back" @click="$router.go(-1)"></span>
            <span>钱包</span>
            <div class="moreInfo" @click="$router.push({path:'/mine/wollet/moreInfo'})">明细</div>
        </header>
        <main>
            <p>账户余额</p>
            <p>{{data.balance}}</p>
        </main>
        <ul>
            <li @click="wolletClick(1)">
                <a href="javascript:void(0);">提现密码
                    <i></i>
                </a>
            </li>
            <li @click="wolletClick(2)">
                <a href="javascript:void(0);">银行卡提现
                    <i></i>
                </a>
            </li>
        </ul>
        <div class="tip">
            <img src="../../../assets/img/Bitmap@2x.png" alt="">
            <span>如果遇上<font>提现</font>问题可直接联系我们的客服</span>
        </div>

        <div class="alertbox" v-show="alertboxShow">
            <p>{{alertTxt}}</p>
            <span @click="cancel">取消</span>
            <span @click="submit(btnNum)">{{btnTxt}}</span>
        </div>
        <div class="shade" v-show="shadeShow"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            shadeShow: false,
            alertboxShow: false,
            alertTxt: "",
            btnTxt: "",
            btnNum: 0,
            data:""
        };
    },
    methods: {
        wolletClick(num) {
            // 判断是否实名
            if (JSON.parse(sessionStorage.getItem("userInfo")).certification =="1") {
                // this.$router.push({"path":"/certification"})
                this.shadeShow = true;
                this.alertboxShow = true;
                this.alertTxt = "通过了实名认证才可进行设置密码和银行卡提现";
                this.btnTxt = "实名认证";
                this.btnNum = 1;
            } else {
                if (num == 1) {
                } else if (num == 2) {
                    this.shadeShow = true;
                    this.alertboxShow = true;
                    this.alertTxt = "设置了提现密码才可进行银行卡提现操作";
                    this.btnTxt = "设置密码";
                    this.btnNum = 2;
                }
            }
        },
        cancel() {
            this.shadeShow = false;
            this.alertboxShow = false;
        },
        submit(btnNum) {
            if(btnNum == 1){

            }else if(btnNum == 2){
                this.$router.push({
                    "path":"/mine/wollet/bankCardPwd",
                    "name":"bankCardPwd",
                    "query":this.data.isSet
                })
            }
        }
    },
    beforeCreate() {
        this.$store.commit("header", {
            headerTitle: "快捷登陆",
            headerShow: false,
            registerShow: false
        });
        this.$store.commit("footer", {
            footer: false
        });
    },
    created(){
        let json = {
            account:sessionStorage.getItem("account"),
            key:this.public_key
        }
        json = this.toMap.toMap(json);
        let sign = this.hex_md5.hex_md5(json);
        let data = this.$qs.stringify({
            account:sessionStorage.getItem("account"),
            sign:sign
        });
        this.axios({
            method:"post",
            url:this.base_url+"/wallet",
            data:data
        }).then(res=>{
            this.data = res.data
        })
        
    }
};
</script>

<style scoped lang="less">
header {
    position: fixed;
    width: 100%;
    height: 80/20rem;
    background-color: #181818;
    line-height: 80/20rem;
    font-size: 34/20rem;
    font-weight: normal;
    color: #fff;
    .icon-back {
        position: absolute;
        top: 0;
        left: 0;
        background: url("../../../assets/img/mine/wollet/back.png") no-repeat;
        padding: 22/20rem;
        width: 80/20rem;
        height: 80/20rem;
        background-size: 20/20rem 36/20rem;
        background-origin: content-box;
        box-sizing: border-box;
    }
    .moreInfo {
        position: absolute;
        top: 0;
        right: 21/20rem;
        font-size: 29/20rem;
        height: 80/20rem;
        line-height: 90/20rem;
        box-sizing: border-box;
        // p {
        //     font-size: 14/20rem;
        //     line-height: 14/20rem;
        //     font-weight: lighter;
        // }
    }
}
main {
    padding-top: 80px;
    height: 328px;
    width: 750px;
    background-color: #181818;
    p {
        margin-top: 70px;
        text-align: center;
        color: #fff;
    }
    p:first-child {
        font-size: 25px;
        line-height: 25px;
    }
    p:last-child {
        margin-top: 29px;
        font-size: 58px;
        line-height: 58px;
    }
}
ul {
    background-color: #fff;
    box-sizing: border-box;
    li {
        padding: 0 21px;
        color: #181818;
        width: 100%;
        height: 104px;
        font-size: 29px;
        box-shadow: 0 2px 0 0 rgba(204, 204, 204, 0.5);
        box-sizing: border-box;
        text-align: left;
        a {
            display: block;
            width: 100%;
            height: 100%;
            line-height: 104px;
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
            background-image: url("../../../assets/img/mine/Page1Copy15@2x.png");
            background-repeat: no-repeat;
            background-size: 13px 22px;
        }
    }
}
.tip {
    position: fixed;
    bottom: 94px;
    width: 750px;
    img {
        width: 29px;
        height: 35px;
        vertical-align: middle;
    }
    span {
        color: #666;
        vertical-align: middle;
    }
    font {
        color: #e2462d;
    }
}
.alertbox {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    z-index: 3;
    width: 608px;
    height: 350px;
    background-color: #fff;
    border-radius: 20px;
    padding: 63px 49px;
    box-sizing: border-box;
    p {
        margin-bottom: 63px;
        font-size: 33px;
        color: #181818;
        line-height: 50px;
        text-align: left;
    }
    span {
        display: inline-block;
        width: 188px;
        height: 63px;
        font-size: 29px;
        line-height: 63px;
        text-align: center;
    }
    span:nth-child(2) {
        margin-right: 42px;
        border: 1px solid #181818;
        border-radius: 10px;
        color: #181818;
    }
    span:nth-child(3) {
        background-color: #181818;
        color: #fff;
        border-radius: 10px;
    }
}
.shade {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
}
</style>
