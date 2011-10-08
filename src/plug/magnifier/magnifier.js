/**
 * @author fuqiang[designsor@gmail.com]
 * @version 20111008
 * @fileoverview 放大镜，直接取kissy的组件
 */
(function(W,$){
    dshop.add('magnifier',function(){
        
        var magnifier=function(callback){
          var loadkissy=function(){
            if(!magnifier.loaded){
              var kissymin='http://a.tbcdn.cn/s/kissy/1.2.0/kissy-min.js';
              $.getScript(kissymin,function(){
                  kissymagnifier();
                });
            }else{
              setTimeout(function(){
                  if(magnifier.core) callback(magnifier.core,KISSY);
                  else loadkissy();
              },1)
            }
          };

          function kissymagnifier(){
            var base='http://a.tbcdn.cn/s/kissy/1.2.0/';
            KISSY.Config.base= base;
            dshop.mods['loadcss'](dshop.host+'magnifier/magnifier-min.css');
            KISSY.use('imagezoom',function(S){
                magnifier.core=S.ImageZoom;
                callback(magnifier.core,S);
            });
          }

          loadkissy();
          
        };

        magnifier.loaded=false;

        dshop.mods['magnifier']=magnifier;
    });
})(window,jQuery);
