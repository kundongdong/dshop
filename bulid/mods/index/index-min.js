(function(a,b){dshopmods.add("index",function(){var c=function(){var d={initNav:function(){b("#J_AllNav>li").bind("mouseenter",function(){b(this).addClass("active");b(this).find(".sub_column").show()}).bind("mouseleave",function(){b(this).removeClass("active");b(this).find(".sub_column").hide()});b(".sub_column").bind("mouseenter",function(){b(this).closest("li").addClass("active");b(this).show()}).bind("mouseleave",function(){b(this).closest("li").removeClass("active");b(this).hide()})},indexfoucs:function(){dshop.use("carousel",function(){var e=new dshop.mods.carousel({wrap:"#J_IndexFoucs",wrapitem:".J_Indexitem",before:function(g){b("#J_IndexFoucsSize>a").removeClass("active");b("#J_IndexFoucsSize>a").eq(g).addClass("active")},auto:true});var f;b("#J_IndexFoucsSize>a").bind("mouseenter",function(){var g=this;f=setTimeout(function(){var h=b(g).index();e.to(h);b(g).addClass("active")},300);e.stopauto()}).bind("mouseleave",function(){clearTimeout(f)});b("#J_IndexFoucs").bind("mouseenter",function(){e.stopauto()});b("#J_IndexFoucsSize").bind("mouseleave",function(){e.auto()})})},indexscroll:function(){dshop.use("carousel",function(){var e=new dshop.mods.carousel({wrap:"#J_IndexScroll",wrapitem:".ScrollItem"});b("#J_leftCol").click(function(){e.backward()});b("#J_rightCol").click(function(){e.forward()})})},lazyloadinit:function(){dshop.use("lazyload",function(){var e=new dshop.mods.lazyload({auto:true});e.init()})}};return{init:function(){d.initNav();d.indexfoucs();d.indexscroll();d.lazyloadinit()}}}();dshopmods.mods.index=c})})(window,jQuery);