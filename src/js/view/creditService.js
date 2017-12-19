
;(function(){
  App.defineViewModel("#creditService",{
       data:{},
       watch:{},
       methods:{}
     },{
     ready:function(){
     },
     beforeRender:function (params) {
        var title = '第三方借贷服务';
        App.commobj.changeTitle(title);
     },
     afterRender:function (params){
        $('.top').click(function(){
          window.location.href = "#/listContent";
        });
        $('.zr').click(function(){
          window.location.href = "http://www.gxtechmoney.com/login/proxyReg.xhtm?proxyCode=A100116";
        });
        $('.fn').click(function(){
          window.location.href = "http://chaoyujinrong.fanzhoutech.com/mobile/applyform?par=E9DB4EB628B1C05BCA17B28ABFEE292C";
        });
        $('.fb').click(function(){
          window.location.href = "https://app.51fanbei.com/app/user/channelRegister?channelCode=Scpcp1&pointCode=Scpcp1";
        });
        $('.kld').click(function(){
          window.location.href = "https://www.mo.hzaodong.com/h5/register.html?agentId=167";
        });
        $('.jhh').click(function(){
          window.location.href = "http://wap.jiehuahua.com/mw/index.html?chl=CPP";
        });
        $('.lx').click(function(){
          window.location.href = "http://lx.lexiangdai.tengjin.com/lexiangdai?channel=LX3ASO4R";
        });
     },
     beforeUnRender:function (){
     },
     afterUnRender:function (){
     }
  });
})();
