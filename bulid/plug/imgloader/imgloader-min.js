(function(a,b){dshop.add("imgloader",function(){var c=function(e,f,d){this.cls=e;this.callback=f;this.attr=d||"data-src"};c.prototype={_batchlist:function(){var e=this,f=[],d=b(e.cls).length;b(e.cls).each(function(h,i){var j=b(i).attr(e.attr);var g=new Image();g.src=j;g.onload=function(){f.push(h);if(f.length==d){b(e.cls).each(function(k,m){var l=b(m).attr(e.attr);b(m).attr("src",l)});if(e.callback){e.callback()}}}})},init:function(){this._batchlist()}};dshop.mods.imgloader=c})})(window,jQuery);