(()=>{"use strict";var n={340:(n,e,t)=>{t.d(e,{Z:()=>A});var r=t(537),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #f9f9f9;\n}\n\nbutton {\n  background-color: #00bcd4;\n  border: none;\n  border-radius: 4px;\n  color: #fff;\n  padding: 8px;\n}\n\n#app {\n  margin: 50px auto;\n  width: 500px;\n  padding: 50px 20px;\n\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n\n  background-color: white;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n}\n\n.app-title {\n  text-align: center;\n}\n\n.cash-input-section {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.cash-input-container {\n  width: 100%;\n  display: flex;\n  gap: 10px;\n}\n\n.cash-input {\n  flex: 0.85;\n  padding: 8px;\n  border: 1px solid #b4b4b4;\n  border-radius: 4px;\n}\n\n.cash-input-button {\n  flex: 0.15;\n}\n\n.purchased-lotto-section {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n}\n\n.lotto-number-container {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  grid-gap: 0 5px;\n}\n\n.lotto {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.lotto-image {\n  font-size: 2rem;\n}\n\n.show-number-toggle-container {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 10px;\n}\n\n.winner-number-section {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\nfieldset {\n  border: none;\n}\n\nlegend {\n  margin-bottom: 10px;\n}\n\n.winner-number-input-form {\n  display: flex;\n  justify-content: space-between;\n}\n\n.winner-number-input-container {\n  display: flex;\n  gap: 8px;\n}\n\n.winner-number-input,\n.bonus-number-input {\n  width: 1.5rem;\n  font-size: 1.5rem;\n  border: 1px solid #b4b4b4;\n  border-radius: 4px;\n}\n\n.bonus-number-input-container {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.result-button {\n  width: 100%;\n}\n\n.hide {\n  display: none;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 30px;\n  height: 13px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(33, 33, 33, 0.08);\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 20px;\n  width: 20px;\n  left: -5px;\n  bottom: calc(50% - 10px);\n  background-color: #ededed;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  box-shadow: 0 1px 3px #00000050;\n}\n\ninput:checked + .slider {\n  background-color: #80deea;\n}\n\ninput:checked + .slider:before {\n  background-color: #00bcd4;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(20px);\n  -ms-transform: translateX(20px);\n  transform: translateX(20px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n.one-column-grid {\n  grid-template-columns: repeat(1, 1fr);\n}\n\n.hide-numbers .lotto-numbers {\n  display: none;\n}\n","",{version:3,sources:["webpack://./src/css/index.css"],names:[],mappings:"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;;EAElB,aAAa;EACb,sBAAsB;EACtB,SAAS;;EAET,uBAAuB;EACvB,oCAAoC;EACpC,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,aAAa;EACb,SAAS;AACX;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,SAAS;AACX;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;;EAEE,aAAa;EACb,iBAAiB;EACjB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,UAAU;EACV,QAAQ;EACR,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,kCAAkC;EAClC,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,UAAU;EACV,wBAAwB;EACxB,yBAAyB;EACzB,wBAAwB;EACxB,gBAAgB;EAChB,+BAA+B;AACjC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,mCAAmC;EACnC,+BAA+B;EAC/B,2BAA2B;AAC7B;;AAEA,oBAAoB;AACpB;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,aAAa;AACf",sourcesContent:["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #f9f9f9;\n}\n\nbutton {\n  background-color: #00bcd4;\n  border: none;\n  border-radius: 4px;\n  color: #fff;\n  padding: 8px;\n}\n\n#app {\n  margin: 50px auto;\n  width: 500px;\n  padding: 50px 20px;\n\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n\n  background-color: white;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n}\n\n.app-title {\n  text-align: center;\n}\n\n.cash-input-section {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.cash-input-container {\n  width: 100%;\n  display: flex;\n  gap: 10px;\n}\n\n.cash-input {\n  flex: 0.85;\n  padding: 8px;\n  border: 1px solid #b4b4b4;\n  border-radius: 4px;\n}\n\n.cash-input-button {\n  flex: 0.15;\n}\n\n.purchased-lotto-section {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n}\n\n.lotto-number-container {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  grid-gap: 0 5px;\n}\n\n.lotto {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.lotto-image {\n  font-size: 2rem;\n}\n\n.show-number-toggle-container {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 10px;\n}\n\n.winner-number-section {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\nfieldset {\n  border: none;\n}\n\nlegend {\n  margin-bottom: 10px;\n}\n\n.winner-number-input-form {\n  display: flex;\n  justify-content: space-between;\n}\n\n.winner-number-input-container {\n  display: flex;\n  gap: 8px;\n}\n\n.winner-number-input,\n.bonus-number-input {\n  width: 1.5rem;\n  font-size: 1.5rem;\n  border: 1px solid #b4b4b4;\n  border-radius: 4px;\n}\n\n.bonus-number-input-container {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.result-button {\n  width: 100%;\n}\n\n.hide {\n  display: none;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 30px;\n  height: 13px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(33, 33, 33, 0.08);\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 20px;\n  width: 20px;\n  left: -5px;\n  bottom: calc(50% - 10px);\n  background-color: #ededed;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  box-shadow: 0 1px 3px #00000050;\n}\n\ninput:checked + .slider {\n  background-color: #80deea;\n}\n\ninput:checked + .slider:before {\n  background-color: #00bcd4;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(20px);\n  -ms-transform: translateX(20px);\n  transform: translateX(20px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n.one-column-grid {\n  grid-template-columns: repeat(1, 1fr);\n}\n\n.hide-numbers .lotto-numbers {\n  display: none;\n}\n"],sourceRoot:""}]);const A=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var A=0;A<this.length;A++){var s=this[A][0];null!=s&&(a[s]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */"),a=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(a).concat([i]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],A=0;A<n.length;A++){var s=n[A],c=r.base?s[0]+r.base:s[0],l=i[c]||0,u="".concat(c," ").concat(l);i[c]=l+1;var p=t(u),d={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(d);else{var f=o(d,r);r.byIndex=A,e.splice(A,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var A=t(i[a]);e[A].references--}for(var s=r(n,o),c=0;c<i.length;c++){var l=t(i[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),A=t(565),s=t.n(A),c=t(216),l=t.n(c),u=t(589),p=t.n(u),d=t(340),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),e()(d.Z,f),d.Z&&d.Z.locals&&d.Z.locals;var E=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return e.querySelector(n)},b=function(n,e){var t=document.createElement(n);return t.className=e,t},C=Object.freeze({CASH_INPUT_SECTION_CLASS:".cash-input-section",CASH_INPUT_CLASS:".cash-input",CASH_INPUT_BUTTON_CLASSNAME:"cash-input-button",PURCHASED_LOTTO_SECTION_CLASS:".purchased-lotto-section",WINNER_NUMBER_SECTION_CLASS:".winner-number-section",LOTTO_SHOW_CONTAINER_CLASS:".lotto-show-container",LOTTO_NUMBER_CONTAINER_CLASS:".lotto-number-container",SHOW_NUMBER_TOGGLE_BUTTON_CLASS:".show-number-toggle-button",LOTTO_CLASSNAME:"lotto",LOTTO_IMAGE_CLASSNAME:"lotto-image",LOTTO_NUMBERS_CLASSNAME:"lotto-numbers",HIDE_CLASSNAME:"hide",ONE_COLUMN_GRID_CLASSNAME:"one-column-grid",HIDE_NUMBERS_CLASSNAME:"hide-numbers"}),h=Object.freeze({MIN:1e3,MAX:5e4}),m=Object.freeze({EMPTY_INPUT_MESSAGE:"구입할 금액을 입력해주세요!",INVALID_UNIT_MESSAGE:"".concat(1e3,"원 단위로 구입이 가능합니다."),OUT_OF_RANGE_MESSAGE:"".concat(h.MIN,"원-").concat(h.MAX,"원 사이의 금액을 입력해주세요.")});function g(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function S(n,e,t){return e&&g(n.prototype,e),t&&g(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}var B=new WeakSet;function y(){for(;6!==this.lottoNumbers.size;)this.lottoNumbers.add((1,45,Math.floor(44*Math.random()+1)))}const x=S((function n(){var e,t;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),function(n,e){if(e.has(n))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e=this,t=B),t.add(e),this.lottoNumbers=new Set,function(n,e,t){if(!e.has(n))throw new TypeError("attempted to get private field on non-instance");return t}(this,B,y).call(this)}));function v(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function w(n,e){!function(n,e){if(e.has(n))throw new TypeError("Cannot initialize the same private elements twice on an object")}(n,e),e.add(n)}function N(n,e,t){if(!e.has(n))throw new TypeError("attempted to get private field on non-instance");return t}var _=new WeakSet,T=new WeakSet,L=new WeakSet,k=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),w(this,L),w(this,T),w(this,_)}var e,t,r;return e=n,r=[{key:"isNoChangeLeft",value:function(n,e){return n%e==0}}],(t=[{key:"buyLotto",value:function(n){this.lottoPrice=1e3,N(this,_,O).call(this,Number(n)),this.purchaseAmount=N(this,T,M).call(this,Number(n)),N(this,L,I).call(this)}}])&&v(e.prototype,t),r&&v(e,r),Object.defineProperty(e,"prototype",{writable:!1}),n}();function O(n){if(!n)throw new Error(m.EMPTY_INPUT_MESSAGE);if(!((t=(e={number:n,min:h.MIN,max:h.MAX}).number)>=e.min&&t<=e.max))throw new Error(m.OUT_OF_RANGE_MESSAGE);var e,t;if(!k.isNoChangeLeft(n,this.lottoPrice))throw new Error(m.INVALID_UNIT_MESSAGE)}function M(n){return n/this.lottoPrice}function I(){this.lottos=Array.from({length:this.purchaseAmount},(function(){return new x}))}const U=k;function j(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function R(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var P=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.initDom()}var e,t,r;return e=n,r=[{key:"generatePurchasedLabel",value:function(n){var e=document.createElement("label");return e.textContent="총 ".concat(n,"개를 구매하였습니다."),e}},{key:"generateLottoElementTemplate",value:function(e){return e.map((function(e){return n.generateLottoElement(e)}))}},{key:"generateLottoElement",value:function(n){var e=b("div",C.LOTTO_CLASSNAME),t=b("p",C.LOTTO_IMAGE_CLASSNAME);t.textContent="🎟️";var r=b("p",C.LOTTO_NUMBERS_CLASSNAME);return r.textContent=Array.from(n.lottoNumbers).join(", "),e.append(t,r),e}}],(t=[{key:"initDom",value:function(){this.purchasedLottoSection=E(C.PURCHASED_LOTTO_SECTION_CLASS),this.winnerNumberSection=E(C.WINNER_NUMBER_SECTION_CLASS),this.lottoShowContainer=E(C.LOTTO_SHOW_CONTAINER_CLASS),this.lottoNumberContainer=E(C.LOTTO_NUMBER_CONTAINER_CLASS,this.purchasedLottoSection)}},{key:"toggleShowLottoNumbers",value:function(n){var e=this.lottoNumberContainer.classList;if(n)return e.add(C.ONE_COLUMN_GRID_CLASSNAME),void e.remove(C.HIDE_NUMBERS_CLASSNAME);e.add(C.HIDE_NUMBERS_CLASSNAME),e.remove(C.ONE_COLUMN_GRID_CLASSNAME)}},{key:"renderLottos",value:function(e){var t,r;this.purchasedLottoSection.classList.remove(C.HIDE_CLASSNAME),this.winnerNumberSection.classList.remove(C.HIDE_CLASSNAME),this.lottoShowContainer.prepend(n.generatePurchasedLabel(e.length)),(t=this.lottoNumberContainer).append.apply(t,function(n){if(Array.isArray(n))return j(n)}(r=n.generateLottoElementTemplate(e))||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(r)||function(n,e){if(n){if("string"==typeof n)return j(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?j(n,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())}}])&&R(e.prototype,t),r&&R(e,r),Object.defineProperty(e,"prototype",{writable:!1}),n}();const W=P;function H(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function X(n,e,t){!function(n,e){if(e.has(n))throw new TypeError("Cannot initialize the same private elements twice on an object")}(n,e),e.set(n,t)}function z(n,e){var t=function(n,e,t){if(!e.has(n))throw new TypeError("attempted to get private field on non-instance");return e.get(n)}(n,e);return function(n,e){return e.get?e.get.call(n):e.value}(n,t)}var D=new WeakMap,G=new WeakMap;(new(function(){function n(){var e=this;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),X(this,D,{writable:!0,value:function(n){if(n.preventDefault(),n.target.className===C.CASH_INPUT_BUTTON_CLASSNAME){var t=E(C.CASH_INPUT_CLASS,e.cashInputSection).value;e.lottoManager=new U;try{e.lottoManager.buyLotto(t),e.view=new W,e.view.renderLottos(e.lottoManager.lottos),e.initToggleButtonHandler()}catch(n){alert(n.message)}}}}),X(this,G,{writable:!0,value:function(n){var t=n.target;e.view.toggleShowLottoNumbers(t.checked)}})}var e,t;return e=n,(t=[{key:"startLotto",value:function(){this.cashInputSection=E(C.CASH_INPUT_SECTION_CLASS),this.cashInputSection.addEventListener("click",z(this,D))}},{key:"initToggleButtonHandler",value:function(){this.showNumberToggleButton=E(C.SHOW_NUMBER_TOGGLE_BUTTON_CLASS),this.showNumberToggleButton.addEventListener("click",z(this,G))}}])&&H(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),n}())).startLotto()})()})();
//# sourceMappingURL=bundle.js.map