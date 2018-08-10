<template>
    <div>
        <div id="capture" style="padding: 10px; background: #f5da55">
            <h4 style="color: #000; ">Hello world!</h4>
        </div>
        <input type="button" value="生成图片" @click="creat">
        <input type="button" value="上传图片" @click="handleSave">
    </div>
</template>

<script>
import 'html2cavas/html2canvas'
export default {
  name: "aaa",
  data() {
    return {};
  },
  methods: {
    creat() {
        console.log(1)
    },
    handleSave() {
        console.log(1)
    }
  }
};
</script>

<style>
</style>
