<template>
    <transition name="fade">
        <p class="tip">{{$store.state.tip.txt}}</p>
    </transition>
</template>

<script>
export default {};
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
