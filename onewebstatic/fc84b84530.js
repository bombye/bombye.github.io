(function($){$('.menu li > div > .menucascadeanchor, .menu li > div.menucascadeanchor').each(function(){var subMenuEl=$(this),alreadyDone=subMenuEl.closest('.bodysubmenu')[0],li=subMenuEl.closest('li');if(alreadyDone||this.childElementCount===0){return}var wrapper=$(document.createElement('div')),isHorizontalMenu=!!subMenuEl.closest('.menuhorizontal').length;wrapper.addClass('bodysubmenu');if(isHorizontalMenu){wrapper.addClass('menuhorizontal')}else{wrapper.addClass('menuvertical')}if(subMenuEl.closest('.menuhorizontalleft').length){wrapper.addClass('menuhorizontalleft')}else if(subMenuEl.closest('.menuhorizontalcenter').length){wrapper.addClass('menuhorizontalcenter')}else if(subMenuEl.closest('.menuhorizontalright').length){wrapper.addClass('menuhorizontalright')}else if(subMenuEl.closest('.menuhorizontalfit').length){wrapper.addClass('menuhorizontalfit')}subMenuEl.detach();wrapper.append(subMenuEl);$(document.body).append(wrapper);li.mouseenter(function(){var dividerEl=$('.divider',li),dividerWidth=0;if(dividerEl){dividerWidth=dividerEl.innerWidth()}li.addClass('hover');wrapper.css('display','block');var offset=li.offset();if(isHorizontalMenu){wrapper.css('top',Math.floor(offset.top)+li.outerHeight());wrapper.css('left',offset.left+dividerWidth)}else{wrapper.css('top',Math.floor(offset.top));wrapper.css('left',offset.left+li.outerWidth()+dividerWidth)}});li.mouseleave(function(e){var inSubMenu=$.contains(wrapper[0],e.relatedTarget);if(!inSubMenu){li.removeClass('hover');wrapper.css('display','none')}});wrapper.mouseout(function(e){var inParentItem=$.contains(li,e.relatedTarget),inSubMenu=$.contains(wrapper[0],e.relatedTarget);if(!inParentItem&&!inSubMenu){li.removeClass('hover');wrapper.css('display','none')}});if(('ontouchstart'in window||'onmspointerdown'in window)&&!navigator.userAgent.toLowerCase().match(/windows phone os 7/i)){var menuItems=$.merge(li.find('a[class*="expandable"]'),$('.bodysubmenu a[class*="expandable"]'));if('onmspointerdown'in window){menuItems.each(function(){$(this).attr('aria-haspopup',true)})}else{var lastClicked=null;menuItems.each(function(){var self=oneJQuery(this);self.on('click',function(e){var item=oneJQuery(this);var isCurrentPreviouslyClicked=item.is(lastClicked),isCurrentAncestorOfPrevious=oneJQuery.contains(e.target.parentNode,lastClicked);var shouldPreventDefault=true;if(lastClicked===null){shouldPreventDefault=true}else if(isCurrentPreviouslyClicked){shouldPreventDefault=false}else if(isCurrentAncestorOfPrevious){shouldPreventDefault=false}if(shouldPreventDefault){e.preventDefault()}lastClicked=e.target})});if(navigator.userAgent.toLowerCase().match(/mac/i)){li.mouseenter(function(e){if(!lastClicked){lastClicked=e.target}});$(document).on('touchstart',function(e){if(!$(e.target).hasClass('menuitem')){li.trigger('mouseout',e);lastClicked=null}})}}}})}(oneJQuery));