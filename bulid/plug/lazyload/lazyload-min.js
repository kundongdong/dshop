(function(a,b){dshop.add("lazyload",function(){var c=function(f){var e=this,d={attr:"data-lazyload",target:".J_lazyload",effect:"slow",threshold:0,auto:false,customfn:null};if(f){b.extend(d,f)}b.each(d,function(h,i){e[h]=i});var g;c.lazyloadfire=function(){e.lazyfn(e.target,function(k){if(e.auto){e.drawimg(k)}if(e.customfn&&!g){e.customfn(k);g=true}});var j=b("body").height(),h=b(window).scrollTop(),i=b(window).height();if(h+i>=j){b(window).unbind("load scroll resize",c.lazyloadfire)}};if(e.auto){b(window).bind("load scroll resize",c.lazyloadfire)}};c.prototype={init:function(){var d=this;b(d.target).each(function(){b(this).hide()})},drawimg:function(f){var e=this;if(!b(f).attr("src")&&!!b(f).attr(e.attr)){var d=b(f).attr(e.attr);b(f).attr("src",d);b(f).fadeIn(e.effect)}},lazyfn:function(e,h){var g=this,d=b(window).scrollTop(),f=b(window).height();b(e).each(function(i,j){if(b(this).offset().top-d-f<=g.threshold){h(this)}})}};dshop.mods.lazyload=c})})(window,jQuery);