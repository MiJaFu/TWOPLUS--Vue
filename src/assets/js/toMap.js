var public_key = "918edda1812f4203368792e0ac32df72";

function objKeySort(obj) { //排序的函数
    var newkey = Object.keys(obj).sort();
    //先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
    var newObj = {}; //创建一个新的对象，用于存放排好序的键值对
    for (var i = 0; i < newkey.length; i++) { //遍历newkey数组
        newObj[newkey[i]] = obj[newkey[i]]; //向新创建的对象中按照排好的顺序依次增加键值对
    }
    return newObj; //返回排好序的新对象
}
// 
function toMap(json) {
    var ele = JSON.stringify(objKeySort(json));

    ele = ele.replace(/}/g, '').replace(/:/g, '=').replace(/,/g, ', ').replace(/"/g, '').split('{')[1];
    return ele;
}

// var baseUrl = 'http://192.168.0.126:9091/front';
// var baseUrl = 'http://2-plus.cn:9091/front',
// var baseUrl = 'http://twoplus-tech.com:9091/front';
var baseUrl = "http://www.h5.com:9091/api"


function request(url, data, resCallBack) {
    $.ajax({
        url: baseUrl + url,
        data: data,
        header: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        type: 'POST',
        dataType: 'json',
        success: function (res) {
            resCallBack(res);
        },
        error: function (res) {}
    })
}

export default {
    toMap:toMap
}