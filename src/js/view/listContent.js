
;(function(){
  App.defineViewModel("#listContent",{
       data:{},
       watch:{},
       methods:{}
     },{
     ready:function(){
     },
     beforeRender:function (params) {
        var title = '贷款攻略';
        App.commobj.changeTitle(title);
     },
     afterRender:function (params){
        $(".img2").click(function(){
          window.location.href = "#/listContentDetail";
        });
        $(".img3").click(function(){
          window.location.href = "#/listContentDetail2";
        });
        $(".img4").click(function(){
          window.location.href = "#/listContentDetail3";
        });
     },
     beforeUnRender:function (){
     },
     afterUnRender:function (){
     }
  });
})();
