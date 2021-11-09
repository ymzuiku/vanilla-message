var __assign=function(){return(__assign=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function __rest(e,t){var n={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]]);return n}function __awaiter(s,r,i,l){return new(i=i||Promise)(function(e,t){function n(e){try{a(l.next(e))}catch(e){t(e)}}function o(e){try{a(l.throw(e))}catch(e){t(e)}}function a(t){t.done?e(t.value):new i(function(e){e(t.value)}).then(n,o)}a((l=l.apply(s,r||[])).next())})}function __generator(n,o){var a,s,r,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(a)throw new TypeError("Generator is already executing.");for(;i;)try{if(a=1,s&&(r=2&t[0]?s.return:t[0]?s.throw||((r=s.return)&&r.call(s),0):s.next)&&!(r=r.call(s,t[1])).done)return r;switch(s=0,(t=r?[2&t[0],r.value]:t)[0]){case 0:case 1:r=t;break;case 4:return i.label++,{value:t[1],done:!1};case 5:i.label++,s=t[1],t=[0];continue;case 7:t=i.ops.pop(),i.trys.pop();continue;default:if(!(r=0<(r=i.trys).length&&r[r.length-1])&&(6===t[0]||2===t[0])){i=0;continue}if(3===t[0]&&(!r||t[1]>r[0]&&t[1]<r[3])){i.label=t[1];break}if(6===t[0]&&i.label<r[1]){i.label=r[1],r=t;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(t);break}r[2]&&i.ops.pop(),i.trys.pop();continue}t=o.call(n,i)}catch(e){t=[6,e],s=0}finally{a=r=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}}var sty,_this=void 0,moveY=20;function createLabel(e,t){var n=document.createElement("div");return n.className="vanilla-message-btn",n.style.display="block",n.style.border="none",n.style.textAlign="center",n.style.height="100%",n.style.outline="none",n.style.userSelect="none",n.style.padding="10px 3px",n.style.fontSize="12px",n.style.width="100%",n.textContent=e,n.style.minWidth="80px",n.style.color=t&&t.color?t.color:"#fff",n}"undefined"!=typeof window&&((sty=document.createElement("style")).textContent="\n.vanilla-message-btn {\n  cursor:pointer;\n  background: rgba(0,0,0,0);\n}\n.vanilla-message-btn:hover {\n  background: rgba(0,0,0,0.08);\n}\n.vanilla-message-btn:active {\n  background: rgba(0,0,0,0.16);\n}\n@keyframes move-toast {\n  0% {\n    transform: translateY(-"+1.5*moveY+"px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n@keyframes move-toast-reverse {\n  0% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(-"+1.5*moveY+"px);\n    opacity: 0;\n  }\n}\n@keyframes move-toast-down {\n  0% {\n    transform: translateY("+1.5*moveY+"px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n@keyframes move-toast-down-reverse {\n  0% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY("+1.5*moveY+"px);\n    opacity: 0;\n  }\n}\n\n.move-toast-in {\n  animation: move-toast 0.4s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.move-toast-out {\n  animation: move-toast-reverse 0.5s cubic-bezier(0.23, 1, 0.32, 1);\n  animation-fill-mode: forwards;\n}\n\n.move-toast-in-down {\n  animation: move-toast-down 0.4s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.move-toast-out-down {\n  animation: move-toast-down-reverse 0.5s cubic-bezier(0.23, 1, 0.32, 1);\n  animation-fill-mode: forwards;\n}\n",document.head.append(sty));var Message=function(m,v){return void 0===v&&(v={}),__awaiter(_this,void 0,void 0,function(){return __generator(this,function(e){return[2,new Promise(function(t){var n,o,a,e,s=v.position,r=v.className,i=void 0===r?"":r,l=v.outTime,c=v.onClick,y=void 0===c?function(){}:c,u=v.onHidden,f=void 0===u?function(){}:u,d=v.style,p=void 0===d?{}:d,r=v.ok,c=v.cancel;void 0!==m&&""!==m&&(s=s||(r||c?"center":"top"),n=document.createElement("div"),o=function(e){n&&(n.className="top"===s?"move-toast-out "+i:"move-toast-out-down "+i,f&&f(),setTimeout(function(){n.remove()},1e3),t(e))},n.className="normal-body vanilla-message-box "+i,n.style.width="100%",n.style.zIndex=p.zIndex||"9999",n.style.position="fixed",n.style.pointerEvents="none",n.style.display="flex",n.style.flexDirection="column",n.style.justifyContent="center",n.style.alignItems="flex-start",n.style.left="0px",n.style.fontSize="16px","top"===s?(n.style.top="0px",n.className="move-toast-in"):(n.style.bottom="bottom"===s?"20px":"50%",n.className="move-toast-in-down"),(a=document.createElement("div")).className="vanilla-message",a.style.border="none",a.style.outline="none",a.style.pointerEvents="auto",a.style.margin=moveY+"px auto",a.style.textAlign="center",a.style.alignSelf="center",a.style.background="rgb(50,50,50)",a.style.display="flex",a.style.flexDirection="column",a.style.justifyContent="flex-start",a.style.alignItems="center",a.style.borderRadius="3px",Object.keys(p).forEach(function(e){a.style[e]=p[e]}),r||c||(a.onclick=function(e){y&&y(),o(!1)}),(u=document.createElement("div")).style.padding="12px",u.style.fontSize="14px","string"==typeof m?u.textContent=m:u.appendChild(m),u.style.color=p&&p.color?p.color:"#fff",a.appendChild(u),d=!1,(u=document.createElement("div")).style.display="flex",u.style.flexDirection="row",u.style.justifyContent="flex-start",u.style.alignItems="center",u.style.width="100%",u.style.borderTop="1px solid rgba(0,0,0,0.08)",a.appendChild(u),c&&(d=!0,(e=createLabel(c,p)).style.opacity="0.7",e.onclick=function(){o(!1)},u.appendChild(e)),r&&(d=!0,(e=createLabel(r,p)).onclick=function(){o(!0)},u.appendChild(e)),a.appendChild(u),n.appendChild(a),d||setTimeout(function(){return o(!1)},l||3e3),document.body.appendChild(n))})]})})};Message.white=function(e,t){var n=(t=void 0===t?{}:t).style,t=__rest(t,["style"]);return Message(e,__assign({style:__assign({color:"var(--black, #000)",background:"var(--white, #fff)"},n)},t))},Message.black=function(e,t){var n=(t=void 0===t?{}:t).style,t=__rest(t,["style"]);return Message(e,__assign({style:__assign({background:"var(--black, #000)"},n)},t))},Message.info=function(e,t){var n=(t=void 0===t?{}:t).style,t=__rest(t,["style"]);return Message(e,__assign({style:__assign({background:"var(--primary5, #488)"},n)},t))},Message.success=function(e,t){var n=(t=void 0===t?{}:t).style,t=__rest(t,["style"]);return Message(e,__assign({style:__assign({background:"var(--primary9, #67f)"},n)},t))},Message.error=function(e,t){var n=(t=void 0===t?{}:t).style,t=__rest(t,["style"]);return Message(e,__assign({style:__assign({background:"var(--red5, #f33)"},n)},t))};export default Message;
//# sourceMappingURL=index.js.map
