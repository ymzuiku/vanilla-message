!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).vanillaMessage=t()}(this,function(){"use strict";var r=function(){return(r=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function a(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n}function e(n,o){var r,a,l,e,i={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,a&&(l=2&t[0]?a.return:t[0]?a.throw||((l=a.return)&&l.call(a),0):a.next)&&!(l=l.call(a,t[1])).done)return l;switch(a=0,l&&(t=[2&t[0],l.value]),t[0]){case 0:case 1:l=t;break;case 4:return i.label++,{value:t[1],done:!1};case 5:i.label++,a=t[1],t=[0];continue;case 7:t=i.ops.pop(),i.trys.pop();continue;default:if(!(l=0<(l=i.trys).length&&l[l.length-1])&&(6===t[0]||2===t[0])){i=0;continue}if(3===t[0]&&(!l||t[1]>l[0]&&t[1]<l[3])){i.label=t[1];break}if(6===t[0]&&i.label<l[1]){i.label=l[1],l=t;break}if(l&&i.label<l[2]){i.label=l[2],i.ops.push(t);break}l[2]&&i.ops.pop(),i.trys.pop();continue}t=o.call(n,i)}catch(e){t=[6,e],a=0}finally{r=l=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}}var t=document.createElement("style");function k(e,t){var n=document.createElement("div");return n.className="vanilla-message-btn",n.style.display="block",n.style.border="none",n.style.textAlign="center",n.style.height="100%",n.style.outline="none",n.style.userSelect="none",n.style.padding="10px 3px",n.style.fontSize="12px",n.style.width="100%",n.textContent=e,n.style.minWidth="80px",n.style.color=t&&t.color?t.color:"#fff",n}t.textContent="\n.vanilla-message-btn {\n  cursor:pointer;\n  background: rgba(0,0,0,0);\n}\n.vanilla-message-btn:hover {\n  background: rgba(0,0,0,0.08);\n}\n.vanilla-message-btn:active {\n  background: rgba(0,0,0,0.16);\n}\n@keyframes move-toast {\n  0% {\n    transform: translateY(-30px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n@keyframes move-toast-reverse {\n  0% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(-30px);\n    opacity: 0;\n  }\n}\n@keyframes move-toast-down {\n  0% {\n    transform: translateY(30px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n@keyframes move-toast-down-reverse {\n  0% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(30px);\n    opacity: 0;\n  }\n}\n\n.move-toast-in {\n  animation: move-toast 0.4s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.move-toast-out {\n  animation: move-toast-reverse 0.5s cubic-bezier(0.23, 1, 0.32, 1);\n  animation-fill-mode: forwards;\n}\n\n.move-toast-in-down {\n  animation: move-toast-down 0.4s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.move-toast-out-down {\n  animation: move-toast-down-reverse 0.5s cubic-bezier(0.23, 1, 0.32, 1);\n  animation-fill-mode: forwards;\n}\n",document.head.append(t);function l(g,w){return void 0===w&&(w={}),function(a,l,i,s){return new(i=i||Promise)(function(e,t){function n(e){try{r(s.next(e))}catch(e){t(e)}}function o(e){try{r(s.throw(e))}catch(e){t(e)}}function r(t){t.done?e(t.value):new i(function(e){e(t.value)}).then(n,o)}r((s=s.apply(a,l||[])).next())})}(void 0,void 0,void 0,function(){return e(this,function(e){return[2,new Promise(function(t){var n=w.position,e=w.className,o=void 0===e?"":e,r=w.outTime,a=w.onClick,l=void 0===a?function(){}:a,i=w.onHidden,s=void 0===i?function(){}:i,c=w.style,u=void 0===c?{}:c,f=w.ok,y=w.cancel;if(void 0!==g&&""!==g){n=n||(f||y?"center":"top");var d=document.createElement("div"),p=function(e){d&&(d.className="top"===n?"move-toast-out "+o:"move-toast-out-down "+o,s&&s(),setTimeout(function(){d.remove()},1e3),t(e))};d.className="normal-body vanilla-message-box "+o,d.style.width="100%",d.style.zIndex=u.zIndex||"9999",d.style.position="fixed",d.style.pointerEvents="none",d.style.display="flex",d.style.flexDirection="column",d.style.justifyContent="center",d.style.alignItems="flex-start",d.style.left="0px",d.style.fontSize="16px","top"===n?(d.style.top="0px",d.className="move-toast-in"):(d.style.bottom="bottom"===n?"20px":"50%",d.className="move-toast-in-down");var m=document.createElement("div");m.className="vanilla-message",m.style.border="none",m.style.outline="none",m.style.pointerEvents="auto",m.style.margin="20px auto",m.style.textAlign="center",m.style.alignSelf="center",m.style.background="rgb(50,50,50)",m.style.display="flex",m.style.flexDirection="column",m.style.justifyContent="flex-start",m.style.alignItems="center",m.style.borderRadius="3px",Object.keys(u).forEach(function(e){m.style[e]=u[e]}),f||y||(m.onclick=function(e){l&&l(),p(!1)});var v=document.createElement("div");v.style.padding="12px",v.style.fontSize="14px",v.textContent=g,v.style.color=u&&u.color?u.color:"#fff",m.appendChild(v);var b,x=!1,h=document.createElement("div");if(h.style.display="flex",h.style.flexDirection="row",h.style.justifyContent="flex-start",h.style.alignItems="center",h.style.width="100%",h.style.borderTop="1px solid rgba(0,0,0,0.08)",m.appendChild(h),y)x=!0,(b=k(y,u)).style.opacity="0.7",b.onclick=function(){p(!1)},h.appendChild(b);if(f)x=!0,(b=k(f,u)).onclick=function(){p(!0)},h.appendChild(b);m.appendChild(h),d.appendChild(m),x||setTimeout(function(){return p(!1)},r||3e3),document.body.appendChild(d)}})]})})}return l.white=function(e,t){void 0===t&&(t={});var n=t.style,o=a(t,["style"]);return l(e,r({style:r({color:"var(--black, #000)",background:"var(--white, #fff)"},n)},o))},l.black=function(e,t){void 0===t&&(t={});var n=t.style,o=a(t,["style"]);return l(e,r({style:r({background:"var(--black, #000)"},n)},o))},l.info=function(e,t){void 0===t&&(t={});var n=t.style,o=a(t,["style"]);return l(e,r({style:r({background:"var(--primary5, #488)"},n)},o))},l.success=function(e,t){void 0===t&&(t={});var n=t.style,o=a(t,["style"]);return l(e,r({style:r({background:"var(--primary9, #67f)"},n)},o))},l.error=function(e,t){void 0===t&&(t={});var n=t.style,o=a(t,["style"]);return l(e,r({style:r({background:"var(--red5, #f33)"},n)},o))},l});
//# sourceMappingURL=index.js.map
