(function(a,c,b){dshop.add("overlay",function(){var d=function(f){var e=function(){return{_init:function(h){var g={wrapId:"J_GM_OverlayWrap",wrapCls:"J_GM_OverlayWrapCls",coverId:"J_GM_Cover",width:null,height:null,content:"",cover:true,drag:false,opacity:0.5};b.extend(g,h);this.config=g}}}();e._init.prototype={fire:function(h,k){var j=this,g=j.config;j.destroy();if(!c.getElementById(g.wrapId)){var i=b("<div>",{id:g.wrapId});i.appendTo("body").html(g.content);if(h){b("#"+g.wrapId).html(h)}if(g.cover&&b("#"+g.coverId).length==0){j._cover()}}else{if(h){b("#"+g.wrapId).html(h)}b("#"+g.coverId).show();b("#"+g.wrapId).show()}b("#"+g.wrapId).css("display","inline");setTimeout(function(){j.reset(b("#"+g.wrapId).innerWidth(),b("#"+g.wrapId).innerHeight(),g.wrapCls)},10);if(k){k(i)}},opacity:function(h){var i=this,g=i.config;g.opacity=h;b("#"+g.coverId).css("opacity",h)},reset:function(i,k,g){var l=this,j=l.config;j.width=i;j.height=k;j.wrapCls=g;b("#"+j.wrapId).css({width:i,height:k,"z-index":1000}).addClass(g);l._fix(b("#"+j.wrapId),l)},close:function(i){var h=this,g=h.config;b("#"+g.coverId).hide();b("#"+g.wrapId).hide();b("#"+g.wrapId).css({width:"auto",height:"auto"});if(i){i(b("#"+g.coverId),b("#"+g.wrapId))}},_cover:function(){var i=this,h=i.config,j=b("<div>",{id:h.coverId}),g=(b.browser.msie&&b.browser.version=="6.0");j.css({"background-color":"#ccc",opacity:h.opacity,height:c.documentElement.clientHeight,"z-index":999}).prependTo("body");if(g){j.append("<iframe style='width:100%;filter:alpha(opacity=0);z-index:-1;'>");j.find("iframe").css("height",j.height())}i._fixScroll()},_fix:function(k,j){var i=j,h=i.config,g=(b.browser.msie&&b.browser.version=="6.0"),l=b(c).scrollTop();k.css({position:g?"absolute":"fixed",zoom:1,left:"50%",top:g?((c.documentElement.offsetHeight-h.height)/2)+l:"50%","margin-left":-(h.width/2),"margin-top":g?0:-(h.height/2)});b("#"+h.coverId).css({position:g?"absolute":"fixed",left:0,top:g?l:0,width:g?Math.max(c.documentElement.clientWidth,c.body.clientWidth):"100%"})},_fixScroll:function(){var h=this,g=h.config;b(a).bind("scroll resize",{host:h},h._windowBind)},_windowBind:function(h){var g=h.data.host;g._fix(b("#"+g.config.wrapId),g);b("#"+g.config.coverId).css({height:c.documentElement.clientHeight})},destroy:function(){var g=this;config=g.config;b("#"+config.coverId).remove();b("#"+config.wrapId).remove();b(a).unbind("scroll resize",g._windowBind)}};return e._init}();dshop.mods.overlay=d})})(window,document,jQuery);