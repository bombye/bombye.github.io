oneJQuery(function($){var json={'slideSpeed':1024,'singleItem':true,'itemsScaleUp':true,'autoPlay':4096,'navigation':true,'navigationText':['',''],'transitionStyle':'fade'};json.afterAction=function(){var that=this;clearTimeout(this.preemptFirstSlideTimo);if(!this.options.transitionStyle){if(this.currentItem===this.itemsAmount-1){if(this.prevItem!==0){setTimeout(function(){that.jumpTo(0)},1024)}else{that.jumpTo(that.currentItem);setTimeout(function(){that.goTo(that.currentItem-1)},10)}}else if(this.currentItem===0&&this.options.autoPlay){this.preemptFirstSlideTimo=setTimeout(function(){that.goTo(1)},this.options.autoPlay-1024)}}oneJQuery('#slidesjs-E4570AB3-8DED-40D9-B52D-DFBA1C8A831C .slider-caption').each(function(){var el=oneJQuery(this);el.width(el.parent().width()-10)});oneJQuery('#slidesjs-E4570AB3-8DED-40D9-B52D-DFBA1C8A831C .slide-cntnr.middle p.slider-caption').each(function(){var el=oneJQuery(this);el.height(el.find('span').height())})};var $slidejs=$('#slidesjs-E4570AB3-8DED-40D9-B52D-DFBA1C8A831C');if($slidejs.children().length){var carousel=$slidejs.owlCarousel(json);carousel.data('owlCarousel').updateVars();var resetHeight=function(){if(window.innerWidth<650){var ratio=0.6942431561996779;if($('#slidesjs-E4570AB3-8DED-40D9-B52D-DFBA1C8A831C').parents('.textblock').length){ratio=ratio/2}$('#slidesjs-E4570AB3-8DED-40D9-B52D-DFBA1C8A831C').height((window.innerWidth-40)*ratio);$('#slidesjs-E4570AB3-8DED-40D9-B52D-DFBA1C8A831C .slider-item').height((window.innerWidth-40)*ratio);$('#slidesjs-E4570AB3-8DED-40D9-B52D-DFBA1C8A831C .slider-caption').parent().height((window.innerWidth-40)*ratio)}};$(window).resize(resetHeight);resetHeight()}});