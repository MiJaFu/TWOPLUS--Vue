<template>

    <div class="content">
        <div class="input">
            <div class="mobile">
                <input type="text" placeholder="请输入手机号" v-model="mobile">
            </div>
            <div class="num">
                <input type="text" placeholder="请输入验证码" v-model="num">
                <span class="getNum" @click="getNum" :style="tipBg">{{getNumTxt}}</span>
            </div>
        </div>

        <p class="submit" @click="submit" :style="btnBg">确认登录</p>
        <router-link class="login-account" to="./loginAccount">账号登陆</router-link>

        <div class="footer">
            <div class="title">
                <span class="line"></span>
                <span>第三方登录</span>
                <span class="line"></span>
            </div>
            <div class="login-other">
                <img src="../assets/img/login/Group7@2x.png" alt="">
                <img src="../assets/img/login/Group6@2x.png" alt="">
                <img src="../assets/img/login/Group2@2x.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            getNumTxt: "获取验证码",
            timerFlag: true,
            tipShow: false,
            tipTxt: "",
            mobile: "",
            num: "",
            numActive: false
        };
    },
    computed: {
        btnBg: function() {
            if (this.mobile && this.num) {
                return "background-color:#E2462D;";
            }
            return "";
        },
        tipBg: function() {
            if (this.numActive) {
                return "background-color:#E2462D;opacity:0.6;";
            }
            if (this.mobile) {
                return "background-color:#E2462D;";
            }
            return "";
        }
    },

    methods: {
        tipFnc: function(cans) {
            let _this = this;
             _this.$store.commit("tip",{tipTxt:cans,show:true});
            setTimeout(function() {
                _this.$store.commit("tip",{tipTxt:cans,show:false});
            }, 1000);
        },
        getNum() {
            var t = 60;
            var _this = this;
            if (_this.timerFlag) {
                // 验证手机号
                let reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
                if (!reg.test(_this.mobile)) {
                    _this.tipFnc("请输入正确的手机号");
                    return;
                }

                var json = {
                    mobile: _this.mobile,
                    type: "2",
                    key: _this.public_key
                };
                json = _this.toMap.toMap(json);
                var sign = _this.hex_md5.hex_md5(json);
                var data = _this.$qs.stringify({
                    mobile: _this.mobile,
                    type: "2",
                    sign: sign
                });
                _this
                    .axios({
                        url: _this.base_url + "/sms/code",
                        method: "post",
                        data: data
                    })
                    .then(res => {
                        console.log(res);
                        if (res.data.reCode == "200") {
                            _this.numActive = !_this.numActive;
                            _this.tipFnc("验证码发送成功,请注意查收");
                            _this.timerFlag = false;
                            var timer = setInterval(function() {
                                t--;
                                _this.getNumTxt = t + "秒后重新获取";
                                if (t == 0) {
                                    _this.numActive = !_this.numActive;
                                    _this.timerFlag = true;
                                    _this.getNumTxt = "获取验证码";
                                    clearInterval(timer);
                                }
                            }, 1000);
                        } else {
                            _this.tipFnc("服务器异常");
                        }
                    });
            } else {
                return _this.timerFlag;
            }
        },
        submit() {
            let _this = this;
            // 验证手机号
            let reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
            if (!reg.test(_this.mobile)) {
                _this.tipFnc("请输入正确的手机号");
                return;
            }
            var json = {
                mobile: _this.mobile,
                code: _this.num,
                type: "2",
                key: _this.public_key
            };
            json = _this.toMap.toMap(json);
            var sign = _this.hex_md5.hex_md5(json);
            var data = _this.$qs.stringify({
                mobile: _this.mobile,
                code: _this.num,
                type: "2",
                sign: sign
            });
            _this
                .axios({
                    url: _this.base_url + "/member/regLog",
                    method: "post",
                    data: data
                })
                .then(res => {
                    console.log(res);
                    if (res.data.reCode == "200") {
                        _this.$store.commit("login", {
                            account: res.data.account,
                            isReg: res.data.isReg,
                            loginToken: 0
                        });
                        sessionStorage.setItem("account", res.data.account);
                        // 登录成功后跳转
                        _this.$router.push({ path: "/mine" });
                    } else if (res.data.reCode == "10103") {
                        _this.tipFnc("请输入正确的验证码");
                    } else if (res.data.reCode == "10104") {
                        _this.tipFnc("验证码已过期，请重新获取");
                    } else {
                        _this.tipFnc("服务器异常");
                    }
                });
        }
    },

    beforeCreate() {
        this.$store.commit("header", {
            headerTitle: "快捷登陆",
            headerShow: true,
            registerShow: true
        });
        this.$store.commit("footer", {
            footer: false
        });
    }
};
</script>

<style scoped lang="less">
.fade-enter-active {
    transition: opacity 0.5s;
}

.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}

.fade-leave-to {
    opacity: 0;
}

template {
    width: 100%;
    height: 100%;
}

.content {
    width: 100%;
    height: 100%;
    padding-top: 101/20rem;
    background-color: #f5f5f5;
    box-sizing: border-box;
    .input {
        background-color: #fff;
        margin-bottom: 42/20rem;
    }
    input {
        width: 100%;
        height: 104/20rem;
        font-size: 29/20rem;
        color: #999;
        padding: 31/20rem 0 31/20rem;
        padding-left: 40/20rem;
        border: unset;
        box-sizing: border-box;
    }
    .mobile,
    .num {
        position: relative;
        padding: 0 21/20rem;
        box-sizing: border-box;
    }
    .num {
        margin-top: 2/20rem;
        input {
            box-shadow: 0 -2/20rem 0 0 rgba(204, 204, 204, 0.5);
        }
    }
    .mobile::before,
    .num::before {
        content: "";
        position: absolute;
        left: 21/20rem;
        top: 37/20rem;
        width: 30/20rem;
        height: 32/20rem;
    }
    .mobile::before {
        background: url("../assets/img/login/Group22@2x.png") no-repeat;
        background-size: 24/20rem 32/20rem;
    }
    .num::before {
        background: url("../assets/img/login/Page1@2x.png") no-repeat;
        background-size: 28/20rem 32/20rem;
    }
    .getNum {
        position: absolute;
        top: 21/20rem;
        right: 42/20rem;
        padding: 15/20rem 19/20rem 13/20rem 21/20rem;
        box-sizing: border-box;
        color: #fff;
        font-size: 25/20rem;
        background-color: #181818;
        border-radius: 10/20rem;
    }
    .submit,
    .login-account {
        display: block;
        margin: 0 auto;
        width: 708/20rem;
        height: 83/20rem;
        line-height: 83/20rem;
        text-align: center;
        letter-spacing: 4/20rem;
        margin-bottom: 21/20rem;
        font-size: 33/20rem;
        color: #fff;
        background-color: #181818;
        border-radius: 10/20rem;
    }
    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        .title {
            position: relative;
            text-align: center;
        }
        span {
            font-size: 29/20rem;
            color: #a3a3a3;
        }
        .line {
            position: absolute;
            left: 98/20rem;
            top: 20/20rem;
            width: 163/20rem;
            height: 1px;
            background-color: #a3a3a3;
            vertical-align: middle;
        }
        .line:last-child {
            left: 492/20rem;
        }
    }
    .login-other {
        padding: 42/20rem 0 65/20rem 0;
        img {
            margin-right: 93/20rem;
            width: 69/20rem;
            height: 69/20rem;
        }
        img:last-child {
            margin-right: unset;
        }
    }
}
.tip {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    padding: 25/20rem 21/20rem 23/20rem;
    font-size: 25/20rem;
    letter-spacing: 1/20rem;
    line-height: 35/20rem;
    color: #fff;
    border-radius: 10/20rem;
    background-color: rgba(0, 0, 0, 0.6);
}
</style>
