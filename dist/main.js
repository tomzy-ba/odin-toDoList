(()=>{"use strict";var e={336:(e,t,n)=>{n.d(t,{c:()=>i});var r=n(500),o=n.n(r),c=n(312),a=n.n(c)()(o());a.push([e.id,"\n#navbarList {\n    display: flex;\n    justify-content: space-around;\n    list-style-type: none;\n}\n\n.hidden {\n    display: none;\n}\n\n\n\n\n\n#dialogDiv {\n    display: flex;\n    flex-direction: column;\n    width: 70%;\n    height: 70%;\n}",""]);const i=a},312:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);r&&a[d[0]]||(void 0!==c&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=c),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},500:e=>{e.exports=function(e){return e[1]}},596:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var c={},a=[],i=0;i<e.length;i++){var s=e[i],u=r.base?s[0]+r.base:s[0],d=c[u]||0,l="".concat(u," ").concat(d);c[u]=d+1;var p=n(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=i,t.splice(i,0,{identifier:l,updater:m,references:1})}a.push(l)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var c=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var i=n(c[a]);t[i].references--}for(var s=r(e,o),u=0;u<c.length;u++){var d=n(c[u]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}c=s}}},176:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},808:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},120:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},520:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},936:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={id:r,exports:{}};return e[r](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{const e=[],t=[],r=[],o=[];class c{constructor(n,c,a,i,s,u){this.title=n,this.summary=c,this.dueDate=a,this.priority=i,this.status=s,this.difficulty=u,e.push(this),"easy"==u&&t.push(this),"moderate"==u&&r.push(this),"hard"==u&&o.push(this)}}function a(e,t){const n=document.querySelector("#content");n.innerHTML="";const r=document.createElement("div");n.append(r);const o=document.createElement("h1");o.innerText=t,r.append(o),e.forEach((e=>{const t=document.createElement("div");t.innerText=e.title,r.append(t);const n=document.createElement("div");n.classList.add("hidden"),t.append(n);for(const t in e){const r=document.createElement("div");n.append(r);const o=document.createElement("h3");o.innerText=t,r.append(o);const c=document.createElement("span");c.innerText=e[t],r.append(c)}t.addEventListener("click",(()=>{n.classList.toggle("hidden")}))}))}var i=n(596),s=n.n(i),u=n(520),d=n.n(u),l=n(176),p=n.n(l),f=n(120),m=n.n(f),v=n(808),h=n.n(v),y=n(936),g=n.n(y),x=n(336),E={};E.styleTagTransform=g(),E.setAttributes=m(),E.insert=p().bind(null,"head"),E.domAPI=d(),E.insertStyleElement=h(),s()(x.c,E),x.c&&x.c.locals&&x.c.locals;const S=document.querySelector("#addButton"),b=document.querySelector("#dialog"),q=document.querySelector("#submitDialog"),L=(document.querySelector("#closeDialog"),document.querySelector("#titleInput")),T=document.querySelector("#summaryInput"),I=document.querySelector("#dueDateInput"),M=document.querySelector("#priorityInput"),w=document.querySelector("#statusInput"),k=document.querySelector("#difficultyInput");S.addEventListener("click",(()=>{b.showModal()})),q.addEventListener("click",(()=>{new c(L.value,T.value,I.value,M.value,w.value,k.value),a(e),console.log(t),console.log(e)}));const C=document.querySelector("#homeButton"),D=document.querySelector("#easyButton"),H=document.querySelector("#moderateButton"),j=document.querySelector("#hardButton");C.addEventListener("click",(()=>{a(e,"Home")})),D.addEventListener("click",(()=>{a(t,"Easy")})),H.addEventListener("click",(()=>{a(r,"Moderate")})),j.addEventListener("click",(()=>{a(o,"Hard")})),a(e,"Home")})()})();