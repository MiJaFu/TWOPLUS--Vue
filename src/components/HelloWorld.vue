<template>
  <div class="hello">
    <h2>Essential Links</h2>
    <div class="upload-logo container" id="container">
      <img :src="url" alt="">
      <input type="file" name="" id="pickfiles" class="pickfiles" title="选择文件">
    </div>

    <router-link to="./login">登录</router-link>
    <router-link to="./mine">我的</router-link>
    <router-link to="./detail">去下一层</router-link>
    <router-link to="./count">去count</router-link>

    <h1></h1>
  </div>
</template>

<script>
import "html2cavas/html2canvas";
export default {
  name: "HelloWorld",
  data() {
    return {
      url: ""
    };
  },
  methods: {

  },
  created() {
    var that = this;
    var data = this.$qs.stringify({
      sign: "cb33a4ae645f2ed7838715db80a4009e"
    });
    console.log(data)
    this.axios({
      url: "/api/front/qiniu/gainToken",
      method: "post",
      data: data
    }).then(res => {
      console.log(res)
      var token = res.data.token;

      //引入Plupload 、qiniu.js后
      var uploader = Qiniu.uploader({
        runtimes: "html5,flash,html4", //上传模式,依次退化
        browse_button: "pickfiles", //上传选择的点选按钮，**必需**
        uptoken: token, //若未指定uptoken_url,则必须指定 uptoken ,uptoken由其他程序生成
        unique_names: true, // 默认 false，key为文件名。若开启该选项，SDK为自动生成上传成功后的key（文件名）。
        domain: "http://qiniu-plupload.qiniudn.com/", //bucket 域名，下载资源时用到，**必需**
        get_new_uptoken: false, //设置上传文件的时候是否每次都重新获取新的token
        container: "container", //上传区域DOM ID，默认是browser_button的父元素，
        max_file_size: "100mb", //最大文件体积限制
        flash_swf_url: "js/plupload/Moxie.swf", //引入flash,相对路径
        max_retries: 3, //上传失败最大重试次数
        dragdrop: true, //开启可拖曳上传
        drop_element: "container", //拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
        chunk_size: "4mb", //分块上传时，每片的体积
        auto_start: true, //选择文件后自动上传，若关闭需要自己绑定事件触发上传
        init: {
          FilesAdded: function(up, files) {
            plupload.each(files, function(file) {
              // 文件添加进队列后,处理相关的事情
            });
          },
          BeforeUpload: function(up, file) {
            // 每个文件上传前,处理相关的事情
            console.log(1);
          },
          UploadProgress: function(up, file) {
            // 每个文件上传时,处理相关的事情
          },
          FileUploaded: function(up, file, info) {
            // 每个文件上传成功后,处理相关的事情
            // 其中 info.response 是文件上传成功后，服务端返回的json，形式如
            // {
            //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
            //    "key": "gogopher.jpg"
            //  }
            // 参考http://developer.qiniu.com/docs/v6/api/overview/up/response/simple-response.html
            // var domain = up.getOption('domain');
            // var res = parseJSON(info.response);
            // var sourceLink = domain + res.key; 获取上传成功后的文件的Url
            that.url =
              "http://p2ohl69g3.bkt.clouddn.com/" +
              JSON.parse(info.response).key;
          },
          Error: function(up, err, errTip) {
            //上传出错时,处理相关的事情
          }
        }
      });
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->



<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.container {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}
.all {
  position: absolute;
  left: 50%;
  top: 0;
  /* width: 100%; */
  height: 100%;
  white-space: nowrap;
  transition: 1s all;
}
.all div {
  width: 1500px;
  height: 100%;
  display: inline-block;
  line-height: 100%;
  text-align: center;
  background-color: thistle;
}
.all div:nth-child(2) {
  margin-left: -4px;
}
.all div:nth-child(2n) {
  background-color: wheat;
}
.before {
  position: absolute;
  top: 50%;
  left: 20px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  content: "上一页";
  background-color: turquoise;
}
.after {
  position: absolute;
  top: 50%;
  right: 20px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  content: "下一页";
  background-color: turquoise;
}
img {
  width: 100px;
}
</style>
