(()=>{"use strict";var e={336:(e,t,n)=>{n.d(t,{c:()=>i});var r=n(500),o=n.n(r),a=n(312),c=n.n(a)()(o());c.push([e.id,"body {\n    margin: 0;\n    font-family: Arial, Helvetica, sans-serif;\n    border-radius: 5px;\n}\n\n#header {\n    margin: 0;\n    padding: 5px;\n    background-color: antiquewhite;\n}\n\n\n#navbarList {\n    display: flex;\n    justify-content: space-around;\n    list-style-type: none;\n}\n.navbarButton {\n    border: 1px solid black;\n    background-color: lightcoral;\n    border-radius: 3px;\n    width: 7rem;\n    font-size: 1rem;\n}\n.navbarButton:hover {\n    background-color: lightsalmon;\n}\n\n.hidden {\n    display: none;\n}\n\n\n.toDoDiv {\n    display: flex;\n    flex-direction: column;\n}\n.divTitle:hover {\n    cursor:pointer;\n}\n\n\n\n#dialogDiv {\n    display: flex;\n    flex-direction: column;\n    width: 70%;\n    height: 70%;\n}",""]);const i=c},312:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&c[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},500:e=>{e.exports=function(e){return e[1]}},596:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=r.base?s[0]+r.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var p=n(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=i,t.splice(i,0,{identifier:l,updater:f,references:1})}c.push(l)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var s=r(e,o),d=0;d<a.length;d++){var u=n(a[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=s}}},176:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},808:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},120:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},520:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},936:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{let e=[],t=[],r=[],o=[];class a{constructor(n,a,c,i,s){this.title=n,this.summary=a,this.dueDate=c,this.status=i,this.difficulty=s,e.push(this),"easy"==s?t.push(this):"moderate"==s?r.push(this):"hard"==s&&o.push(this)}}function c(){localStorage.setItem("mainArray",JSON.stringify(e)),localStorage.setItem("easyArray",JSON.stringify(t)),localStorage.setItem("moderateArray",JSON.stringify(r)),localStorage.setItem("hardArray",JSON.stringify(o))}function i(e){const t=document.querySelector("#content");t.innerHTML="",e.forEach(((n,r)=>{const o=document.createElement("div");t.append(o);const a=document.createElement("h3");a.innerText=n.title,a.classList.add("divTitle"),o.append(a);const i=document.createElement("div");i.classList.add("hidden"),o.classList.add("toDoDiv"),o.append(i);for(const e in n){const t=document.createElement("div");i.append(t);const r=document.createElement("h4");r.innerText=e,t.append(r);const o=document.createElement("span");o.innerText=n[e],t.append(o);const a=document.createElement("button");a.innerText="Edit",i.append(a),a.addEventListener("click",(()=>{let t=prompt("Enter edit here");o.innerText=t,n[r.innerText]=t,n[e]=t}))}a.addEventListener("click",(()=>{i.classList.toggle("hidden")}));const s=document.createElement("button");s.innerText="Delete",i.append(s),s.addEventListener("click",(()=>{o.remove(r),e.splice(r,1),c()}))}))}var s=n(596),d=n.n(s),u=n(520),l=n.n(u),p=n(176),m=n.n(p),f=n(120),v=n.n(f),y=n(808),h=n.n(y),g=n(936),S=n.n(g),b=n(336),x={};x.styleTagTransform=S(),x.setAttributes=v(),x.insert=m().bind(null,"head"),x.domAPI=l(),x.insertStyleElement=h(),d()(b.c,x),b.c&&b.c.locals&&b.c.locals,setInterval(c,3e3),e=JSON.parse(localStorage.getItem("mainArray"))||[],t=JSON.parse(localStorage.getItem("easyArray"))||[],r=JSON.parse(localStorage.getItem("moderateArray"))||[],o=JSON.parse(localStorage.getItem("hardArray"))||[],function(){const n=document.querySelector("#homeButton"),a=document.querySelector("#easyButton"),c=document.querySelector("#moderateButton"),s=document.querySelector("#hardButton"),d=document.querySelector("#heading");d.innerHTML="Home",n.addEventListener("click",(()=>{i(e),d.innerHTML="Home"})),a.addEventListener("click",(()=>{i(t),d.innerHTML="Easy"})),c.addEventListener("click",(()=>{i(r),d.innerHTML="Moderate"})),s.addEventListener("click",(()=>{i(o),d.innerHTML="Hard"}))}(),function(){const t=document.querySelector("#addButton"),n=document.querySelector("#dialog"),r=document.querySelector("#submitDialog"),o=document.querySelector("#closeDialog"),s=document.querySelector("#titleInput"),d=document.querySelector("#summaryInput"),u=document.querySelector("#dueDateInput"),l=document.querySelector("#priorityInput"),p=document.querySelector("#statusInput"),m=document.querySelector("#difficultyInput");t.addEventListener("click",(()=>{n.showModal()})),r.addEventListener("click",(()=>{new a(s.value,d.value,u.value,l.value,p.value,m.value),i(e),c()})),o.addEventListener("click",(()=>{n.close()}))}(),i(e)})()})();