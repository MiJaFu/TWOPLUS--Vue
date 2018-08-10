<template>
    <div class="wrap">
        <ul>
            <li>
                <p>
                    <span>银行卡提现</span>
                    <span>2018/8/9</span>
                </p>
                <p>
                    <span>余额：0.00</span>
                    <span>-10000000.00</span>
                </p>
            </li>
            <li>
                <p>
                    <span>银行卡提现</span>
                    <span>2018/8/9</span>
                </p>
                <p>
                    <span>余额：0.00</span>
                    <span>-10000000.00</span>
                </p>
            </li> 
        </ul>
    </div>                                                                                                 
</template>

<script>
export default {
    beforeCreate() {
        this.$store.commit("header", {
            headerTitle: "明细",
            headerShow: true,
            registerShow: false
        });
        this.$store.commit("footer", {
            footerShow: false
        });
    }
};
</script>

<style scoped lang="less">
template {
    width: 100%;
    height: 100%;
}
.wrap {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
}
ul {
    padding-top: 80px;
    width: 750px;
    background-color: #fff;
    li {
        padding: 23px 21px;
        height: 104px;
        box-shadow: 0 2px 0 0 rgba(204, 204, 204, 0.5);
        box-sizing: border-box;
        p {
            font-size: 25px;
            text-align: right;
        }
        p span:nth-child(1) {
            float: left;
        }

        p span:nth-child(2) {
            display: inline-block;
            width: 168px;
            text-align: center;
        }

        p:nth-child(1) span:last-child {
            font-size: 21px;
            color: #999;
        }
        p:nth-child(2) span:first-child {
            font-size: 21px;
            color: #333;
        }
    }
    li:last-child {
        box-shadow: unset;
    }
}
</style>
