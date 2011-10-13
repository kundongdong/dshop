/**
 * @author fuqiang[designsor]
 * @version 20111011
 * @fileoverview 勾词分享微博，停留一段时间后浮出可分享提示
 */
(function(W,doc,$){
    dshop.add('selectshare',function(){
       var selectshare=function(range){
          this.range= range || 'body';
       };

       selectshare.prototype={
          getselectTxt:function(){
            return (doc.selection) ? doc.selection.createRange().text.toString() : doc.getSelection().toString();
          },
          init:function(){
            var that=this,
            tips=new dshop.mods['customtips']('<div id="J_SelectionShare" style="background:#fff;padding:2px;border:#ddd solid 1px;"></div>');
            tips.init();
            var share=new dshop.mods.share('#J_SelectionShare');
            share.init();
            var T;
            $(that.range).live('mouseup',function(e){
              clearTimeout(T);
              T=setTimeout(function(){
               var text=that.getselectTxt();
                if(text){
                  tips.fire();
                }else{
                  tips.hide();
                }
              },20);
              });
            
          $('#J_SelectionShare').live('mousedown',function(){
              var text=that.getselectTxt();
              if(text){
                $('#J_SelectionShare a').each(function(){
                    var newhref=$.trim($(this).attr('href').replace(/(title=)(.*?)([&|^])/,'$1'+text+'$3')).replace(/\n|\r/gi,'');
                    $(this).attr({
                        title:text,
                        href:newhref
                    });
                }); 
              }else{
                tips.hide();
                return false;
              }
          });
          }
       };

       dshop.mods['selectshare']=selectshare;
    });
})(window,document,jQuery)
