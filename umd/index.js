!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self).vanillaMessage=n()}(this,function(){"use strict";var t=function(){return(t=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}).apply(this,arguments)};function e(t,o){var r,a,i,e,l={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return e={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function n(n){return function(e){return function(n){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,a&&(i=2&n[0]?a.return:n[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,n[1])).done)return i;switch(a=0,i&&(n=[2&n[0],i.value]),n[0]){case 0:case 1:i=n;break;case 4:return l.label++,{value:n[1],done:!1};case 5:l.label++,a=n[1],n=[0];continue;case 7:n=l.ops.pop(),l.trys.pop();continue;default:if(!(i=0<(i=l.trys).length&&i[i.length-1])&&(6===n[0]||2===n[0])){l=0;continue}if(3===n[0]&&(!i||n[1]>i[0]&&n[1]<i[3])){l.label=n[1];break}if(6===n[0]&&l.label<i[1]){l.label=i[1],i=n;break}if(i&&l.label<i[2]){l.label=i[2],l.ops.push(n);break}i[2]&&l.ops.pop(),l.trys.pop();continue}n=o.call(t,l)}catch(e){n=[6,e],a=0}finally{r=i=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,e])}}}var n=document.createElement("style");function k(e,n){var t=document.createElement("div");return t.className="vanilla-message-btn",t.style.display="block",t.style.border="none",t.style.textAlign="center",t.style.height="100%",t.style.outline="none",t.style.userSelect="none",t.style.padding="10px 3px",t.style.fontSize="12px",t.style.width="100%",t.textContent=e,t.style.minWidth="80px",t.style.color=n&&n.color?n.color:"#fff",t}n.textContent="\n.vanilla-message-btn {\n  cursor:pointer;\n  background: rgba(0,0,0,0);\n}\n.vanilla-message-btn:hover {\n  background: rgba(0,0,0,0.08);\n}\n.vanilla-message-btn:active {\n  background: rgba(0,0,0,0.16);\n}\n@keyframes move-toast {\n  0% {\n    transform: translateY(-30px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n@keyframes move-toast-reverse {\n  0% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(-30px);\n    opacity: 0;\n  }\n}\n@keyframes move-toast-down {\n  0% {\n    transform: translateY(30px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n@keyframes move-toast-down-reverse {\n  0% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(30px);\n    opacity: 0;\n  }\n}\n\n.move-toast-in {\n  animation: move-toast 0.4s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.move-toast-out {\n  animation: move-toast-reverse 0.5s cubic-bezier(0.23, 1, 0.32, 1);\n  animation-fill-mode: forwards;\n}\n\n.move-toast-in-down {\n  animation: move-toast-down 0.4s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.move-toast-out-down {\n  animation: move-toast-down-reverse 0.5s cubic-bezier(0.23, 1, 0.32, 1);\n  animation-fill-mode: forwards;\n}\n",document.head.append(n);function o(g,w){return void 0===w&&(w={}),function(a,i,l,s){return new(l=l||Promise)(function(e,n){function t(e){try{r(s.next(e))}catch(e){n(e)}}function o(e){try{r(s.throw(e))}catch(e){n(e)}}function r(n){n.done?e(n.value):new l(function(e){e(n.value)}).then(t,o)}r((s=s.apply(a,i||[])).next())})}(void 0,void 0,void 0,function(){return e(this,function(e){return[2,new Promise(function(n){var t=w.position,e=w.className,o=void 0===e?"":e,r=w.outTime,a=w.onClick,i=void 0===a?function(){}:a,l=w.onHidden,s=void 0===l?function(){}:l,c=w.style,u=void 0===c?{}:c,f=w.ok,d=w.cancel;if(void 0!==g&&""!==g){t=t||(f||d?"center":"top");var y=document.createElement("div"),p=function(e){y&&(y.className="top"===t?"move-toast-out "+o:"move-toast-out-down "+o,s&&s(),setTimeout(function(){y.remove()},1e3),n(e))};y.className="normal-body vanilla-message-box "+o,y.style.width="100%",y.style.zIndex="9999",y.style.position="fixed",y.style.display="flex",y.style.flexDirection="column",y.style.justifyContent="center",y.style.alignItems="flex-start",y.style.left="0px",y.style.fontSize="16px","top"===t?(y.style.top="0px",y.className="move-toast-in"):(y.style.bottom="bottom"===t?"20px":"50%",y.className="move-toast-in-down");var m=document.createElement("div");m.className="vanilla-message",m.style.border="none",m.style.outline="none",m.style.margin="20px auto",m.style.textAlign="center",m.style.alignSelf="center",m.style.background="rgb(50,50,50)",m.style.display="flex",m.style.flexDirection="column",m.style.justifyContent="flex-start",m.style.alignItems="center",m.style.borderRadius="3px",Object.keys(u).forEach(function(e){m.style[e]=u[e]}),f||d||(m.onclick=function(e){i&&i(),p(!1)});var v=document.createElement("div");v.style.padding="12px",v.style.fontSize="14px",v.textContent=g,v.style.color=u&&u.color?u.color:"#fff",m.appendChild(v);var b,x=!1,h=document.createElement("div");if(h.style.display="flex",h.style.flexDirection="row",h.style.justifyContent="flex-start",h.style.alignItems="center",h.style.width="100%",h.style.borderTop="1px solid rgba(0,0,0,0.08)",m.appendChild(h),d)x=!0,(b=k(d,u)).style.opacity="0.7",b.onclick=function(){p(!1)},h.appendChild(b);if(f)x=!0,(b=k(f,u)).onclick=function(){p(!0)},h.appendChild(b);m.appendChild(h),y.appendChild(m),x||setTimeout(function(){return p(!1)},r||3e3),document.body.appendChild(y)}})]})})}return o.white=function(e,n){return void 0===n&&(n={}),o(e,t({style:{color:"var(--black, #000)",background:"var(--white, #fff)"}},n))},o.black=function(e,n){return void 0===n&&(n={}),o(e,t({style:{background:"var(--black, #000)"}},n))},o.info=function(e,n){return void 0===n&&(n={}),o(e,t({style:{background:"var(--primary5, #488)"}},n))},o.success=function(e,n){return void 0===n&&(n={}),o(e,t({style:{background:"var(--primary9, #67f)"}},n))},o.error=function(e,n){return void 0===n&&(n={}),o(e,t({style:{background:"var(--red5, #f33)"}},n))},o});
//# sourceMappingURL=index.js.map
