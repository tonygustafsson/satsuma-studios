"use strict";!function(){function e(e){e.target!==n&&e.target.parentNode!==n&&(t.className="menu",n.style.zIndex="2")}var t=document.getElementById("menu"),n=document.getElementById("menu-button"),o=document.getElementsByTagName("body")[0];n.addEventListener("click",function(e){e.preventDefault(),"menu active-menu"===t.className?(t.className="menu",n.style.zIndex="2"):(t.className="menu active-menu",n.style.zIndex="1")}),o.addEventListener("click",e),o.addEventListener("touchend",e)}(),function(){var e,t,n=500,o=window.location.href,u=15,l=document.getElementsByTagName("a");if(!(o.indexOf(".html")>-1)){var a=function(e){for(var t=0;void 0!==e.offsetParent&&null!==e.offsetParent;)t+=e.offsetTop+(null!==e.clientTop?e.clientTop:0),e=e.offsetParent;return t};for(t=0;t<l.length;t+=1)e=void 0===l[t].attributes.href?null:l[t].attributes.href.value.toString(),null!==e&&e.length>1&&e.indexOf("#")>-1&&(l[t].onclick=function(){var e,t=this.attributes.href.value.toString();if(e=document.getElementById(t.substr(23))){var o,l=n/u,r=document.documentElement.scrollTop+document.body.scrollTop,c=(a(e)-r)/l;for(o=1;l>=o;o+=1)!function(){var e=c*o;setTimeout(function(){window.scrollTo(0,e+r)},u*o)}()}return!1})}}();