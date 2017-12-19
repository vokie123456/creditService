/**
 * Created by zhengxinxing on 2016/09/13.
 */
;(function() {
    
    App.commobj = {
        changeTitle:function(title){//修改title
            var $body = $('body');
            document.title = title;
            // hack在微信等webview中无法修改document.title的情况
            var $iframe = $('<iframe style="border:none;width:0;height:0" src="../favicon.ico"></iframe>');
            $iframe.on('load',function() {
                setTimeout(function() {
                    $iframe.off('load').remove();
                }, 0);
            }).appendTo($body);
        },
        setFormat:function (num) {
            if (num<10) {
                num = '0'+num;
            }
            return num;
        },
        re_fresh:function (callback) {
          $(window).scroll(function() {
            var scrollTop = $(this).scrollTop(); //当前可视区域顶端和实际顶端距离
            var contentH = $(document).height(); //当前文档实际高度
            var windowH = $(this).height(); //当前可视区域高度
            if (contentH - 20<=scrollTop + windowH) {
              if (callback) {
                callback();
              }
            }
          });
        },
    };
})();