(function(a,b){dshopmods.add("goodsbar",function(){var c=(function(){var e,d=function(){this.setCollectCls(".J_Collect");this.setTradeCls(".J_Trade");this.attr="data-goodsid"};d.prototype={initEvent:function(){var f=this;b(f.collect).live("click",function(){var g=b(this).attr(f.attr);f.addCollect(g);return false});b(f.trade).live("click",function(){var g=b(this).attr(f.attr);f.addTrade(g);return false})},addCollect:function(f){b.ajax({url:"/hudong/setFavGoods.ajax",type:"POST",datatype:"json",data:{goodsid:f},success:function(g){console.log(g);if(g.s==1){alert("收藏成功")}else{alert(g.msg)}},error:function(){alert("添加收藏失败，请检查网络")}})},addTrade:function(f){},setCollectCls:function(f){this.collect=f},setTradeCls:function(f){this.trade=f}};return{torouse:function(){if(!e){e=new d();e.initEvent()}return e}}})();dshopmods.mods.goodsbar=c})})(window,jQuery);