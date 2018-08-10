 /**
  * 这是一个根据设计图大小  来适配移动端的函数
  * 750 -- 设计图大小 
  * a   -- 屏幕大小 
  * 当屏幕大小*2 = 设计图大小时   html：font-size:20px;
  */
 (function () {
     var b = document.documentElement,
         a = function () {
             var a = b.getBoundingClientRect().width;
             b.style.fontSize = (a / 750) * 20 + "px";
         },
         c = null;
     window.addEventListener("resize", function () {
         clearTimeout(c);
         c = setTimeout(a, 0);
     });
     a();
     //  禁止双指缩放
     document.documentElement.addEventListener('touchstart', function (event) {
         if (event.touches.length > 1) {
             event.preventDefault();
         }
     }, false);
     //   禁止双击缩放
     var lastTouchEnd = 0;
     document.documentElement.addEventListener('touchend', function (event) {
         var now = Date.now();
         if (now - lastTouchEnd <= 300) {
             event.preventDefault();
         }
         lastTouchEnd = now;
     }, false);
 })();