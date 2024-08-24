/*
 * Copyright 2016 Small Batch, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
/* Web Font Loader v1.6.26 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.m=b||a;this.c=this.m.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function z(a){if("string"===typeof a.f)return a.f;var b=a.m.location.protocol;"about:"==b&&(b=a.a.location.protocol);return"https:"==b?"https:":"http:"}function ea(a){return a.m.location.hostname||a.a.location.hostname}
function A(a,b,c){function d(){k&&e&&f&&(k(g),k=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,k=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function B(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function C(){this.a=0;this.c=null}function D(a){a.a++;return function(){a.a--;E(a)}}function F(a,b){a.c=b;E(a)}function E(a){0==a.a&&a.c&&(a.c(),a.c=null)};function G(a){this.a=a||"-"}G.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function H(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return I(a)+" "+(a.f+"00")+" 300px "+J(a.c)}function J(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function K(a){return a.a+a.f}function I(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.m.document.documentElement;this.h=b;this.a=new G("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);L(a,"loading")}function M(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}L(a,"inactive")}function L(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,K(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function N(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function O(a){u(a.c,"body",a.a)}function P(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+J(a.c)+";"+("font-style:"+I(a)+";font-weight:"+(a.f+"00")+";")};function Q(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}Q.prototype.start=function(){var a=this.c.m.document,b=this,c=q(),d=new Promise(function(d,e){function k(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(k,25)},function(){e()})}k()}),e=new Promise(function(a,d){setTimeout(d,b.f)});Promise.race([e,d]).then(function(){b.g(b.a)},function(){b.j(b.a)})};function R(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.o=this.j=this.h=this.g=null;this.g=new N(this.c,this.s);this.h=new N(this.c,this.s);this.j=new N(this.c,this.s);this.o=new N(this.c,this.s);a=new H(this.a.c+",serif",K(this.a));a=P(a);this.g.a.style.cssText=a;a=new H(this.a.c+",sans-serif",K(this.a));a=P(a);this.h.a.style.cssText=a;a=new H("serif",K(this.a));a=P(a);this.j.a.style.cssText=a;a=new H("sans-serif",K(this.a));a=
P(a);this.o.a.style.cssText=a;O(this.g);O(this.h);O(this.j);O(this.o)}var S={D:"serif",C:"sans-serif"},T=null;function U(){if(null===T){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);T=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return T}R.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.o.a.offsetWidth;this.A=q();la(this)};
function ma(a,b,c){for(var d in S)if(S.hasOwnProperty(d)&&b===a.f[S[d]]&&c===a.f[S[d]])return!0;return!1}function la(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=U()&&ma(a,b,c));d?q()-a.A>=a.w?U()&&ma(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):na(a):V(a,a.v)}function na(a){setTimeout(p(function(){la(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.o.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.o=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,K(a).toString(),"active")],[b.a.c("wf",a.c,K(a).toString(),"loading"),b.a.c("wf",a.c,K(a).toString(),"inactive")]);L(b,"fontactive",a);this.o=!0;oa(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,K(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,K(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,K(a).toString(),"inactive"));w(b.f,d,e)}L(b,"fontinactive",a);oa(this)};function oa(a){0==--a.f&&a.j&&(a.o?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),L(a,"active")):M(a.a))};function pa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}pa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;qa(this,new ha(this.c,a),a)};
function ra(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,k=d||null||{};if(0===c.length&&f)M(b.a);else{b.f+=c.length;f&&(b.j=f);var h,m=[];for(h=0;h<c.length;h++){var l=c[h],n=k[l.c],r=b.a,x=l;r.g&&w(r.f,[r.a.c("wf",x.c,K(x).toString(),"loading")]);L(r,"fontloading",x);r=null;null===X&&(X=window.FontFace?(x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent))?42<parseInt(x[1],10):!0:!1);X?r=new Q(p(b.g,b),p(b.h,b),b.c,l,b.s,n):r=new R(p(b.g,b),p(b.h,b),b.c,l,b.s,a,
n);m.push(r)}for(h=0;h<m.length;h++)m[h].start()}},0)}function qa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){ra(a,f,b,d,c)})};function sa(a,b){this.c=a;this.a=b}function ta(a,b,c){var d=z(a.c);a=(a.a.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,"");return d+"//"+a+"/"+b+".js"+(c?"?v="+c:"")}
sa.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var m=0;m<c.length;m++){var l=c[m].fontfamily;void 0!=c[m].fontStyle&&void 0!=c[m].fontWeight?(h=c[m].fontStyle+c[m].fontWeight,e.push(new H(l,h))):e.push(new H(l))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.m;B(this.c,ta(c,d,e),function(e){e?a([]):(f["__MonotypeConfiguration__"+d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+
d}else a([])};function ua(a,b){this.c=a;this.a=b}ua.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new C;b=0;for(c=d.length;b<c;b++)A(this.c,d[b],D(g));var k=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),m=0;m<h.length;m+=1)k.push(new H(d[0],h[m]));else k.push(new H(d[0]));F(g,function(){a(k,f)})};function va(a,b,c){a?this.c=a:this.c=b+wa;this.a=[];this.f=[];this.g=c||""}var wa="//fonts.googleapis.com/css";function xa(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function ya(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function za(a){this.f=a;this.a=[];this.c={}}
var Aa={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Ba={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ca={i:"i",italic:"i",n:"n",normal:"n"},
Da=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Ea(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var k=d[1];g=[];if(k)for(var k=k.split(","),h=k.length,m=0;m<h;m++){var l;l=k[m];if(l.match(/^[\w-]+$/)){var n=Da.exec(l.toLowerCase());if(null==n)l="";else{l=n[2];l=null==l||""==l?"n":Ca[l];n=n[1];if(null==n||""==n)n="4";else var r=Ba[n],n=r?r:isNaN(n)?"4":n.substr(0,1);l=[l,n].join("")}}else l="";l&&g.push(l)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=Aa[d[0]])&&(a.c[e]=d))}a.c[e]||(d=Aa[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new H(e,f[d]))}};function Fa(a,b){this.c=a;this.a=b}var Ga={Arimo:!0,Cousine:!0,Tinos:!0};Fa.prototype.load=function(a){var b=new C,c=this.c,d=new va(this.a.api,z(c),this.a.text),e=this.a.families;xa(d,e);var f=new za(e);Ea(f);A(c,ya(d),D(b));F(b,function(){a(f.a,f.c,Ga)})};function Ha(a,b){this.c=a;this.a=b}Ha.prototype.load=function(a){var b=this.a.id,c=this.c.m;b?B(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],k=b[f+1],h=0;h<k.length;h++)e.push(new H(g,k[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(m){}a(e)}},2E3):a([])};function Ia(a,b){this.c=a;this.f=b;this.a=[]}Ia.prototype.load=function(a){var b=this.f.id,c=this.c.m,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,k=c.fonts.length;g<k;++g){var h=c.fonts[g];d.a.push(new H(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},B(this.c,z(this.c)+(this.f.api||"//f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new pa(window);Y.a.c.custom=function(a,b){return new ua(b,a)};Y.a.c.fontdeck=function(a,b){return new Ia(b,a)};Y.a.c.monotype=function(a,b){return new sa(b,a)};Y.a.c.typekit=function(a,b){return new Ha(b,a)};Y.a.c.google=function(a,b){return new Fa(b,a)};var Z={load:p(Y.load,Y)};"function"===typeof define&&define.amd?define(function(){return Z}):"undefined"!==typeof module&&module.exports?module.exports=Z:(window.WebFont=Z,window.WebFontConfig&&Y.load(window.WebFontConfig));}());

/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});


/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // packages/shared/render/plugins/BaseSiteModules/tram-min.js
  var require_tram_min = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/tram-min.js"() {
      "use strict";
      window.tram = function(a) {
        function b(a2, b2) {
          var c2 = new M.Bare();
          return c2.init(a2, b2);
        }
        function c(a2) {
          return a2.replace(/[A-Z]/g, function(a3) {
            return "-" + a3.toLowerCase();
          });
        }
        function d(a2) {
          var b2 = parseInt(a2.slice(1), 16), c2 = b2 >> 16 & 255, d2 = b2 >> 8 & 255, e2 = 255 & b2;
          return [c2, d2, e2];
        }
        function e(a2, b2, c2) {
          return "#" + (1 << 24 | a2 << 16 | b2 << 8 | c2).toString(16).slice(1);
        }
        function f() {
        }
        function g(a2, b2) {
          j("Type warning: Expected: [" + a2 + "] Got: [" + typeof b2 + "] " + b2);
        }
        function h(a2, b2, c2) {
          j("Units do not match [" + a2 + "]: " + b2 + ", " + c2);
        }
        function i(a2, b2, c2) {
          if (void 0 !== b2 && (c2 = b2), void 0 === a2)
            return c2;
          var d2 = c2;
          return $.test(a2) || !_.test(a2) ? d2 = parseInt(a2, 10) : _.test(a2) && (d2 = 1e3 * parseFloat(a2)), 0 > d2 && (d2 = 0), d2 === d2 ? d2 : c2;
        }
        function j(a2) {
          U.debug && window && window.console.warn(a2);
        }
        function k(a2) {
          for (var b2 = -1, c2 = a2 ? a2.length : 0, d2 = []; ++b2 < c2; ) {
            var e2 = a2[b2];
            e2 && d2.push(e2);
          }
          return d2;
        }
        var l = function(a2, b2, c2) {
          function d2(a3) {
            return "object" == typeof a3;
          }
          function e2(a3) {
            return "function" == typeof a3;
          }
          function f2() {
          }
          function g2(h2, i2) {
            function j2() {
              var a3 = new k2();
              return e2(a3.init) && a3.init.apply(a3, arguments), a3;
            }
            function k2() {
            }
            i2 === c2 && (i2 = h2, h2 = Object), j2.Bare = k2;
            var l2, m2 = f2[a2] = h2[a2], n2 = k2[a2] = j2[a2] = new f2();
            return n2.constructor = j2, j2.mixin = function(b3) {
              return k2[a2] = j2[a2] = g2(j2, b3)[a2], j2;
            }, j2.open = function(a3) {
              if (l2 = {}, e2(a3) ? l2 = a3.call(j2, n2, m2, j2, h2) : d2(a3) && (l2 = a3), d2(l2))
                for (var c3 in l2)
                  b2.call(l2, c3) && (n2[c3] = l2[c3]);
              return e2(n2.init) || (n2.init = h2), j2;
            }, j2.open(i2);
          }
          return g2;
        }("prototype", {}.hasOwnProperty), m = {
          ease: ["ease", function(a2, b2, c2, d2) {
            var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
            return b2 + c2 * (-2.75 * f2 * e2 + 11 * e2 * e2 + -15.5 * f2 + 8 * e2 + 0.25 * a2);
          }],
          "ease-in": ["ease-in", function(a2, b2, c2, d2) {
            var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
            return b2 + c2 * (-1 * f2 * e2 + 3 * e2 * e2 + -3 * f2 + 2 * e2);
          }],
          "ease-out": ["ease-out", function(a2, b2, c2, d2) {
            var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
            return b2 + c2 * (0.3 * f2 * e2 + -1.6 * e2 * e2 + 2.2 * f2 + -1.8 * e2 + 1.9 * a2);
          }],
          "ease-in-out": ["ease-in-out", function(a2, b2, c2, d2) {
            var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
            return b2 + c2 * (2 * f2 * e2 + -5 * e2 * e2 + 2 * f2 + 2 * e2);
          }],
          linear: ["linear", function(a2, b2, c2, d2) {
            return c2 * a2 / d2 + b2;
          }],
          "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(a2, b2, c2, d2) {
            return c2 * (a2 /= d2) * a2 + b2;
          }],
          "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(a2, b2, c2, d2) {
            return -c2 * (a2 /= d2) * (a2 - 2) + b2;
          }],
          "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(a2, b2, c2, d2) {
            return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 + b2 : -c2 / 2 * (--a2 * (a2 - 2) - 1) + b2;
          }],
          "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(a2, b2, c2, d2) {
            return c2 * (a2 /= d2) * a2 * a2 + b2;
          }],
          "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(a2, b2, c2, d2) {
            return c2 * ((a2 = a2 / d2 - 1) * a2 * a2 + 1) + b2;
          }],
          "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(a2, b2, c2, d2) {
            return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * a2 + b2 : c2 / 2 * ((a2 -= 2) * a2 * a2 + 2) + b2;
          }],
          "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(a2, b2, c2, d2) {
            return c2 * (a2 /= d2) * a2 * a2 * a2 + b2;
          }],
          "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(a2, b2, c2, d2) {
            return -c2 * ((a2 = a2 / d2 - 1) * a2 * a2 * a2 - 1) + b2;
          }],
          "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(a2, b2, c2, d2) {
            return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * a2 * a2 + b2 : -c2 / 2 * ((a2 -= 2) * a2 * a2 * a2 - 2) + b2;
          }],
          "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(a2, b2, c2, d2) {
            return c2 * (a2 /= d2) * a2 * a2 * a2 * a2 + b2;
          }],
          "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(a2, b2, c2, d2) {
            return c2 * ((a2 = a2 / d2 - 1) * a2 * a2 * a2 * a2 + 1) + b2;
          }],
          "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(a2, b2, c2, d2) {
            return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * a2 * a2 * a2 + b2 : c2 / 2 * ((a2 -= 2) * a2 * a2 * a2 * a2 + 2) + b2;
          }],
          "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(a2, b2, c2, d2) {
            return -c2 * Math.cos(a2 / d2 * (Math.PI / 2)) + c2 + b2;
          }],
          "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(a2, b2, c2, d2) {
            return c2 * Math.sin(a2 / d2 * (Math.PI / 2)) + b2;
          }],
          "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(a2, b2, c2, d2) {
            return -c2 / 2 * (Math.cos(Math.PI * a2 / d2) - 1) + b2;
          }],
          "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(a2, b2, c2, d2) {
            return 0 === a2 ? b2 : c2 * Math.pow(2, 10 * (a2 / d2 - 1)) + b2;
          }],
          "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(a2, b2, c2, d2) {
            return a2 === d2 ? b2 + c2 : c2 * (-Math.pow(2, -10 * a2 / d2) + 1) + b2;
          }],
          "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(a2, b2, c2, d2) {
            return 0 === a2 ? b2 : a2 === d2 ? b2 + c2 : (a2 /= d2 / 2) < 1 ? c2 / 2 * Math.pow(2, 10 * (a2 - 1)) + b2 : c2 / 2 * (-Math.pow(2, -10 * --a2) + 2) + b2;
          }],
          "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(a2, b2, c2, d2) {
            return -c2 * (Math.sqrt(1 - (a2 /= d2) * a2) - 1) + b2;
          }],
          "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(a2, b2, c2, d2) {
            return c2 * Math.sqrt(1 - (a2 = a2 / d2 - 1) * a2) + b2;
          }],
          "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(a2, b2, c2, d2) {
            return (a2 /= d2 / 2) < 1 ? -c2 / 2 * (Math.sqrt(1 - a2 * a2) - 1) + b2 : c2 / 2 * (Math.sqrt(1 - (a2 -= 2) * a2) + 1) + b2;
          }],
          "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(a2, b2, c2, d2, e2) {
            return void 0 === e2 && (e2 = 1.70158), c2 * (a2 /= d2) * a2 * ((e2 + 1) * a2 - e2) + b2;
          }],
          "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(a2, b2, c2, d2, e2) {
            return void 0 === e2 && (e2 = 1.70158), c2 * ((a2 = a2 / d2 - 1) * a2 * ((e2 + 1) * a2 + e2) + 1) + b2;
          }],
          "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(a2, b2, c2, d2, e2) {
            return void 0 === e2 && (e2 = 1.70158), (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * (((e2 *= 1.525) + 1) * a2 - e2) + b2 : c2 / 2 * ((a2 -= 2) * a2 * (((e2 *= 1.525) + 1) * a2 + e2) + 2) + b2;
          }]
        }, n = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
        }, o = document, p = window, q = "bkwld-tram", r = /[\-\.0-9]/g, s = /[A-Z]/, t = "number", u = /^(rgb|#)/, v = /(em|cm|mm|in|pt|pc|px)$/, w = /(em|cm|mm|in|pt|pc|px|%)$/, x = /(deg|rad|turn)$/, y = "unitless", z = /(all|none) 0s ease 0s/, A = /^(width|height)$/, B = " ", C = o.createElement("a"), D = ["Webkit", "Moz", "O", "ms"], E = ["-webkit-", "-moz-", "-o-", "-ms-"], F = function(a2) {
          if (a2 in C.style)
            return {
              dom: a2,
              css: a2
            };
          var b2, c2, d2 = "", e2 = a2.split("-");
          for (b2 = 0; b2 < e2.length; b2++)
            d2 += e2[b2].charAt(0).toUpperCase() + e2[b2].slice(1);
          for (b2 = 0; b2 < D.length; b2++)
            if (c2 = D[b2] + d2, c2 in C.style)
              return {
                dom: c2,
                css: E[b2] + a2
              };
        }, G = b.support = {
          bind: Function.prototype.bind,
          transform: F("transform"),
          transition: F("transition"),
          backface: F("backface-visibility"),
          timing: F("transition-timing-function")
        };
        if (G.transition) {
          var H = G.timing.dom;
          if (C.style[H] = m["ease-in-back"][0], !C.style[H])
            for (var I in n)
              m[I][0] = n[I];
        }
        var J = b.frame = function() {
          var a2 = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame;
          return a2 && G.bind ? a2.bind(p) : function(a3) {
            p.setTimeout(a3, 16);
          };
        }(), K = b.now = function() {
          var a2 = p.performance, b2 = a2 && (a2.now || a2.webkitNow || a2.msNow || a2.mozNow);
          return b2 && G.bind ? b2.bind(a2) : Date.now || function() {
            return +/* @__PURE__ */ new Date();
          };
        }(), L = l(function(b2) {
          function d2(a2, b3) {
            var c2 = k(("" + a2).split(B)), d3 = c2[0];
            b3 = b3 || {};
            var e3 = Y[d3];
            if (!e3)
              return j("Unsupported property: " + d3);
            if (!b3.weak || !this.props[d3]) {
              var f3 = e3[0], g3 = this.props[d3];
              return g3 || (g3 = this.props[d3] = new f3.Bare()), g3.init(this.$el, c2, e3, b3), g3;
            }
          }
          function e2(a2, b3, c2) {
            if (a2) {
              var e3 = typeof a2;
              if (b3 || (this.timer && this.timer.destroy(), this.queue = [], this.active = false), "number" == e3 && b3)
                return this.timer = new S({
                  duration: a2,
                  context: this,
                  complete: h2
                }), void (this.active = true);
              if ("string" == e3 && b3) {
                switch (a2) {
                  case "hide":
                    o2.call(this);
                    break;
                  case "stop":
                    l2.call(this);
                    break;
                  case "redraw":
                    p2.call(this);
                    break;
                  default:
                    d2.call(this, a2, c2 && c2[1]);
                }
                return h2.call(this);
              }
              if ("function" == e3)
                return void a2.call(this, this);
              if ("object" == e3) {
                var f3 = 0;
                u2.call(this, a2, function(a3, b4) {
                  a3.span > f3 && (f3 = a3.span), a3.stop(), a3.animate(b4);
                }, function(a3) {
                  "wait" in a3 && (f3 = i(a3.wait, 0));
                }), t2.call(this), f3 > 0 && (this.timer = new S({
                  duration: f3,
                  context: this
                }), this.active = true, b3 && (this.timer.complete = h2));
                var g3 = this, j2 = false, k2 = {};
                J(function() {
                  u2.call(g3, a2, function(a3) {
                    a3.active && (j2 = true, k2[a3.name] = a3.nextStyle);
                  }), j2 && g3.$el.css(k2);
                });
              }
            }
          }
          function f2(a2) {
            a2 = i(a2, 0), this.active ? this.queue.push({
              options: a2
            }) : (this.timer = new S({
              duration: a2,
              context: this,
              complete: h2
            }), this.active = true);
          }
          function g2(a2) {
            return this.active ? (this.queue.push({
              options: a2,
              args: arguments
            }), void (this.timer.complete = h2)) : j("No active transition timer. Use start() or wait() before then().");
          }
          function h2() {
            if (this.timer && this.timer.destroy(), this.active = false, this.queue.length) {
              var a2 = this.queue.shift();
              e2.call(this, a2.options, true, a2.args);
            }
          }
          function l2(a2) {
            this.timer && this.timer.destroy(), this.queue = [], this.active = false;
            var b3;
            "string" == typeof a2 ? (b3 = {}, b3[a2] = 1) : b3 = "object" == typeof a2 && null != a2 ? a2 : this.props, u2.call(this, b3, v2), t2.call(this);
          }
          function m2(a2) {
            l2.call(this, a2), u2.call(this, a2, w2, x2);
          }
          function n2(a2) {
            "string" != typeof a2 && (a2 = "block"), this.el.style.display = a2;
          }
          function o2() {
            l2.call(this), this.el.style.display = "none";
          }
          function p2() {
            this.el.offsetHeight;
          }
          function r2() {
            l2.call(this), a.removeData(this.el, q), this.$el = this.el = null;
          }
          function t2() {
            var a2, b3, c2 = [];
            this.upstream && c2.push(this.upstream);
            for (a2 in this.props)
              b3 = this.props[a2], b3.active && c2.push(b3.string);
            c2 = c2.join(","), this.style !== c2 && (this.style = c2, this.el.style[G.transition.dom] = c2);
          }
          function u2(a2, b3, e3) {
            var f3, g3, h3, i2, j2 = b3 !== v2, k2 = {};
            for (f3 in a2)
              h3 = a2[f3], f3 in Z ? (k2.transform || (k2.transform = {}), k2.transform[f3] = h3) : (s.test(f3) && (f3 = c(f3)), f3 in Y ? k2[f3] = h3 : (i2 || (i2 = {}), i2[f3] = h3));
            for (f3 in k2) {
              if (h3 = k2[f3], g3 = this.props[f3], !g3) {
                if (!j2)
                  continue;
                g3 = d2.call(this, f3);
              }
              b3.call(this, g3, h3);
            }
            e3 && i2 && e3.call(this, i2);
          }
          function v2(a2) {
            a2.stop();
          }
          function w2(a2, b3) {
            a2.set(b3);
          }
          function x2(a2) {
            this.$el.css(a2);
          }
          function y2(a2, c2) {
            b2[a2] = function() {
              return this.children ? A2.call(this, c2, arguments) : (this.el && c2.apply(this, arguments), this);
            };
          }
          function A2(a2, b3) {
            var c2, d3 = this.children.length;
            for (c2 = 0; d3 > c2; c2++)
              a2.apply(this.children[c2], b3);
            return this;
          }
          b2.init = function(b3) {
            if (this.$el = a(b3), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = false, U.keepInherited && !U.fallback) {
              var c2 = W(this.el, "transition");
              c2 && !z.test(c2) && (this.upstream = c2);
            }
            G.backface && U.hideBackface && V(this.el, G.backface.css, "hidden");
          }, y2("add", d2), y2("start", e2), y2("wait", f2), y2("then", g2), y2("next", h2), y2("stop", l2), y2("set", m2), y2("show", n2), y2("hide", o2), y2("redraw", p2), y2("destroy", r2);
        }), M = l(L, function(b2) {
          function c2(b3, c3) {
            var d2 = a.data(b3, q) || a.data(b3, q, new L.Bare());
            return d2.el || d2.init(b3), c3 ? d2.start(c3) : d2;
          }
          b2.init = function(b3, d2) {
            var e2 = a(b3);
            if (!e2.length)
              return this;
            if (1 === e2.length)
              return c2(e2[0], d2);
            var f2 = [];
            return e2.each(function(a2, b4) {
              f2.push(c2(b4, d2));
            }), this.children = f2, this;
          };
        }), N = l(function(a2) {
          function b2() {
            var a3 = this.get();
            this.update("auto");
            var b3 = this.get();
            return this.update(a3), b3;
          }
          function c2(a3, b3, c3) {
            return void 0 !== b3 && (c3 = b3), a3 in m ? a3 : c3;
          }
          function d2(a3) {
            var b3 = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(a3);
            return (b3 ? e(b3[1], b3[2], b3[3]) : a3).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
          }
          var f2 = {
            duration: 500,
            ease: "ease",
            delay: 0
          };
          a2.init = function(a3, b3, d3, e2) {
            this.$el = a3, this.el = a3[0];
            var g2 = b3[0];
            d3[2] && (g2 = d3[2]), X[g2] && (g2 = X[g2]), this.name = g2, this.type = d3[1], this.duration = i(b3[1], this.duration, f2.duration), this.ease = c2(b3[2], this.ease, f2.ease), this.delay = i(b3[3], this.delay, f2.delay), this.span = this.duration + this.delay, this.active = false, this.nextStyle = null, this.auto = A.test(this.name), this.unit = e2.unit || this.unit || U.defaultUnit, this.angle = e2.angle || this.angle || U.defaultAngle, U.fallback || e2.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + B + this.duration + "ms" + ("ease" != this.ease ? B + m[this.ease][0] : "") + (this.delay ? B + this.delay + "ms" : ""));
          }, a2.set = function(a3) {
            a3 = this.convert(a3, this.type), this.update(a3), this.redraw();
          }, a2.transition = function(a3) {
            this.active = true, a3 = this.convert(a3, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == a3 && (a3 = b2.call(this))), this.nextStyle = a3;
          }, a2.fallback = function(a3) {
            var c3 = this.el.style[this.name] || this.convert(this.get(), this.type);
            a3 = this.convert(a3, this.type), this.auto && ("auto" == c3 && (c3 = this.convert(this.get(), this.type)), "auto" == a3 && (a3 = b2.call(this))), this.tween = new R({
              from: c3,
              to: a3,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease,
              update: this.update,
              context: this
            });
          }, a2.get = function() {
            return W(this.el, this.name);
          }, a2.update = function(a3) {
            V(this.el, this.name, a3);
          }, a2.stop = function() {
            (this.active || this.nextStyle) && (this.active = false, this.nextStyle = null, V(this.el, this.name, this.get()));
            var a3 = this.tween;
            a3 && a3.context && a3.destroy();
          }, a2.convert = function(a3, b3) {
            if ("auto" == a3 && this.auto)
              return a3;
            var c3, e2 = "number" == typeof a3, f3 = "string" == typeof a3;
            switch (b3) {
              case t:
                if (e2)
                  return a3;
                if (f3 && "" === a3.replace(r, ""))
                  return +a3;
                c3 = "number(unitless)";
                break;
              case u:
                if (f3) {
                  if ("" === a3 && this.original)
                    return this.original;
                  if (b3.test(a3))
                    return "#" == a3.charAt(0) && 7 == a3.length ? a3 : d2(a3);
                }
                c3 = "hex or rgb string";
                break;
              case v:
                if (e2)
                  return a3 + this.unit;
                if (f3 && b3.test(a3))
                  return a3;
                c3 = "number(px) or string(unit)";
                break;
              case w:
                if (e2)
                  return a3 + this.unit;
                if (f3 && b3.test(a3))
                  return a3;
                c3 = "number(px) or string(unit or %)";
                break;
              case x:
                if (e2)
                  return a3 + this.angle;
                if (f3 && b3.test(a3))
                  return a3;
                c3 = "number(deg) or string(angle)";
                break;
              case y:
                if (e2)
                  return a3;
                if (f3 && w.test(a3))
                  return a3;
                c3 = "number(unitless) or string(unit or %)";
            }
            return g(c3, a3), a3;
          }, a2.redraw = function() {
            this.el.offsetHeight;
          };
        }), O = l(N, function(a2, b2) {
          a2.init = function() {
            b2.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), u));
          };
        }), P = l(N, function(a2, b2) {
          a2.init = function() {
            b2.init.apply(this, arguments), this.animate = this.fallback;
          }, a2.get = function() {
            return this.$el[this.name]();
          }, a2.update = function(a3) {
            this.$el[this.name](a3);
          };
        }), Q = l(N, function(a2, b2) {
          function c2(a3, b3) {
            var c3, d2, e2, f2, g2;
            for (c3 in a3)
              f2 = Z[c3], e2 = f2[0], d2 = f2[1] || c3, g2 = this.convert(a3[c3], e2), b3.call(this, d2, g2, e2);
          }
          a2.init = function() {
            b2.init.apply(this, arguments), this.current || (this.current = {}, Z.perspective && U.perspective && (this.current.perspective = U.perspective, V(this.el, this.name, this.style(this.current)), this.redraw()));
          }, a2.set = function(a3) {
            c2.call(this, a3, function(a4, b3) {
              this.current[a4] = b3;
            }), V(this.el, this.name, this.style(this.current)), this.redraw();
          }, a2.transition = function(a3) {
            var b3 = this.values(a3);
            this.tween = new T({
              current: this.current,
              values: b3,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease
            });
            var c3, d2 = {};
            for (c3 in this.current)
              d2[c3] = c3 in b3 ? b3[c3] : this.current[c3];
            this.active = true, this.nextStyle = this.style(d2);
          }, a2.fallback = function(a3) {
            var b3 = this.values(a3);
            this.tween = new T({
              current: this.current,
              values: b3,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease,
              update: this.update,
              context: this
            });
          }, a2.update = function() {
            V(this.el, this.name, this.style(this.current));
          }, a2.style = function(a3) {
            var b3, c3 = "";
            for (b3 in a3)
              c3 += b3 + "(" + a3[b3] + ") ";
            return c3;
          }, a2.values = function(a3) {
            var b3, d2 = {};
            return c2.call(this, a3, function(a4, c3, e2) {
              d2[a4] = c3, void 0 === this.current[a4] && (b3 = 0, ~a4.indexOf("scale") && (b3 = 1), this.current[a4] = this.convert(b3, e2));
            }), d2;
          };
        }), R = l(function(b2) {
          function c2(a2) {
            1 === n2.push(a2) && J(g2);
          }
          function g2() {
            var a2, b3, c3, d2 = n2.length;
            if (d2)
              for (J(g2), b3 = K(), a2 = d2; a2--; )
                c3 = n2[a2], c3 && c3.render(b3);
          }
          function i2(b3) {
            var c3, d2 = a.inArray(b3, n2);
            d2 >= 0 && (c3 = n2.slice(d2 + 1), n2.length = d2, c3.length && (n2 = n2.concat(c3)));
          }
          function j2(a2) {
            return Math.round(a2 * o2) / o2;
          }
          function k2(a2, b3, c3) {
            return e(a2[0] + c3 * (b3[0] - a2[0]), a2[1] + c3 * (b3[1] - a2[1]), a2[2] + c3 * (b3[2] - a2[2]));
          }
          var l2 = {
            ease: m.ease[1],
            from: 0,
            to: 1
          };
          b2.init = function(a2) {
            this.duration = a2.duration || 0, this.delay = a2.delay || 0;
            var b3 = a2.ease || l2.ease;
            m[b3] && (b3 = m[b3][1]), "function" != typeof b3 && (b3 = l2.ease), this.ease = b3, this.update = a2.update || f, this.complete = a2.complete || f, this.context = a2.context || this, this.name = a2.name;
            var c3 = a2.from, d2 = a2.to;
            void 0 === c3 && (c3 = l2.from), void 0 === d2 && (d2 = l2.to), this.unit = a2.unit || "", "number" == typeof c3 && "number" == typeof d2 ? (this.begin = c3, this.change = d2 - c3) : this.format(d2, c3), this.value = this.begin + this.unit, this.start = K(), a2.autoplay !== false && this.play();
          }, b2.play = function() {
            this.active || (this.start || (this.start = K()), this.active = true, c2(this));
          }, b2.stop = function() {
            this.active && (this.active = false, i2(this));
          }, b2.render = function(a2) {
            var b3, c3 = a2 - this.start;
            if (this.delay) {
              if (c3 <= this.delay)
                return;
              c3 -= this.delay;
            }
            if (c3 < this.duration) {
              var d2 = this.ease(c3, 0, 1, this.duration);
              return b3 = this.startRGB ? k2(this.startRGB, this.endRGB, d2) : j2(this.begin + d2 * this.change), this.value = b3 + this.unit, void this.update.call(this.context, this.value);
            }
            b3 = this.endHex || this.begin + this.change, this.value = b3 + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy();
          }, b2.format = function(a2, b3) {
            if (b3 += "", a2 += "", "#" == a2.charAt(0))
              return this.startRGB = d(b3), this.endRGB = d(a2), this.endHex = a2, this.begin = 0, void (this.change = 1);
            if (!this.unit) {
              var c3 = b3.replace(r, ""), e2 = a2.replace(r, "");
              c3 !== e2 && h("tween", b3, a2), this.unit = c3;
            }
            b3 = parseFloat(b3), a2 = parseFloat(a2), this.begin = this.value = b3, this.change = a2 - b3;
          }, b2.destroy = function() {
            this.stop(), this.context = null, this.ease = this.update = this.complete = f;
          };
          var n2 = [], o2 = 1e3;
        }), S = l(R, function(a2) {
          a2.init = function(a3) {
            this.duration = a3.duration || 0, this.complete = a3.complete || f, this.context = a3.context, this.play();
          }, a2.render = function(a3) {
            var b2 = a3 - this.start;
            b2 < this.duration || (this.complete.call(this.context), this.destroy());
          };
        }), T = l(R, function(a2, b2) {
          a2.init = function(a3) {
            this.context = a3.context, this.update = a3.update, this.tweens = [], this.current = a3.current;
            var b3, c2;
            for (b3 in a3.values)
              c2 = a3.values[b3], this.current[b3] !== c2 && this.tweens.push(new R({
                name: b3,
                from: this.current[b3],
                to: c2,
                duration: a3.duration,
                delay: a3.delay,
                ease: a3.ease,
                autoplay: false
              }));
            this.play();
          }, a2.render = function(a3) {
            var b3, c2, d2 = this.tweens.length, e2 = false;
            for (b3 = d2; b3--; )
              c2 = this.tweens[b3], c2.context && (c2.render(a3), this.current[c2.name] = c2.value, e2 = true);
            return e2 ? void (this.update && this.update.call(this.context)) : this.destroy();
          }, a2.destroy = function() {
            if (b2.destroy.call(this), this.tweens) {
              var a3, c2 = this.tweens.length;
              for (a3 = c2; a3--; )
                this.tweens[a3].destroy();
              this.tweens = null, this.current = null;
            }
          };
        }), U = b.config = {
          debug: false,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: false,
          hideBackface: false,
          perspective: "",
          fallback: !G.transition,
          agentTests: []
        };
        b.fallback = function(a2) {
          if (!G.transition)
            return U.fallback = true;
          U.agentTests.push("(" + a2 + ")");
          var b2 = new RegExp(U.agentTests.join("|"), "i");
          U.fallback = b2.test(navigator.userAgent);
        }, b.fallback("6.0.[2-5] Safari"), b.tween = function(a2) {
          return new R(a2);
        }, b.delay = function(a2, b2, c2) {
          return new S({
            complete: b2,
            duration: a2,
            context: c2
          });
        }, a.fn.tram = function(a2) {
          return b.call(null, this, a2);
        };
        var V = a.style, W = a.css, X = {
          transform: G.transform && G.transform.css
        }, Y = {
          color: [O, u],
          background: [O, u, "background-color"],
          "outline-color": [O, u],
          "border-color": [O, u],
          "border-top-color": [O, u],
          "border-right-color": [O, u],
          "border-bottom-color": [O, u],
          "border-left-color": [O, u],
          "border-width": [N, v],
          "border-top-width": [N, v],
          "border-right-width": [N, v],
          "border-bottom-width": [N, v],
          "border-left-width": [N, v],
          "border-spacing": [N, v],
          "letter-spacing": [N, v],
          margin: [N, v],
          "margin-top": [N, v],
          "margin-right": [N, v],
          "margin-bottom": [N, v],
          "margin-left": [N, v],
          padding: [N, v],
          "padding-top": [N, v],
          "padding-right": [N, v],
          "padding-bottom": [N, v],
          "padding-left": [N, v],
          "outline-width": [N, v],
          opacity: [N, t],
          top: [N, w],
          right: [N, w],
          bottom: [N, w],
          left: [N, w],
          "font-size": [N, w],
          "text-indent": [N, w],
          "word-spacing": [N, w],
          width: [N, w],
          "min-width": [N, w],
          "max-width": [N, w],
          height: [N, w],
          "min-height": [N, w],
          "max-height": [N, w],
          "line-height": [N, y],
          "scroll-top": [P, t, "scrollTop"],
          "scroll-left": [P, t, "scrollLeft"]
        }, Z = {};
        G.transform && (Y.transform = [Q], Z = {
          x: [w, "translateX"],
          y: [w, "translateY"],
          rotate: [x],
          rotateX: [x],
          rotateY: [x],
          scale: [t],
          scaleX: [t],
          scaleY: [t],
          skew: [x],
          skewX: [x],
          skewY: [x]
        }), G.transform && G.backface && (Z.z = [w, "translateZ"], Z.rotateZ = [x], Z.scaleZ = [t], Z.perspective = [v]);
        var $ = /ms/, _ = /s|\./;
        return a.tram = b;
      }(window.jQuery);
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/underscore-custom.js
  var require_underscore_custom = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/underscore-custom.js"(exports, module) {
      "use strict";
      var $ = window.$;
      var tram = require_tram_min() && $.tram;
      module.exports = function() {
        var _ = {};
        _.VERSION = "1.6.0-Webflow";
        var breaker = {};
        var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
        var push = ArrayProto.push, slice = ArrayProto.slice, concat = ArrayProto.concat, toString = ObjProto.toString, hasOwnProperty = ObjProto.hasOwnProperty;
        var nativeForEach = ArrayProto.forEach, nativeMap = ArrayProto.map, nativeReduce = ArrayProto.reduce, nativeReduceRight = ArrayProto.reduceRight, nativeFilter = ArrayProto.filter, nativeEvery = ArrayProto.every, nativeSome = ArrayProto.some, nativeIndexOf = ArrayProto.indexOf, nativeLastIndexOf = ArrayProto.lastIndexOf, nativeIsArray = Array.isArray, nativeKeys = Object.keys, nativeBind = FuncProto.bind;
        var each = _.each = _.forEach = function(obj, iterator, context) {
          if (obj == null)
            return obj;
          if (nativeForEach && obj.forEach === nativeForEach) {
            obj.forEach(iterator, context);
          } else if (obj.length === +obj.length) {
            for (var i = 0, length = obj.length; i < length; i++) {
              if (iterator.call(context, obj[i], i, obj) === breaker)
                return;
            }
          } else {
            var keys = _.keys(obj);
            for (var i = 0, length = keys.length; i < length; i++) {
              if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker)
                return;
            }
          }
          return obj;
        };
        _.map = _.collect = function(obj, iterator, context) {
          var results = [];
          if (obj == null)
            return results;
          if (nativeMap && obj.map === nativeMap)
            return obj.map(iterator, context);
          each(obj, function(value, index, list) {
            results.push(iterator.call(context, value, index, list));
          });
          return results;
        };
        _.find = _.detect = function(obj, predicate, context) {
          var result;
          any(obj, function(value, index, list) {
            if (predicate.call(context, value, index, list)) {
              result = value;
              return true;
            }
          });
          return result;
        };
        _.filter = _.select = function(obj, predicate, context) {
          var results = [];
          if (obj == null)
            return results;
          if (nativeFilter && obj.filter === nativeFilter)
            return obj.filter(predicate, context);
          each(obj, function(value, index, list) {
            if (predicate.call(context, value, index, list))
              results.push(value);
          });
          return results;
        };
        var any = _.some = _.any = function(obj, predicate, context) {
          predicate || (predicate = _.identity);
          var result = false;
          if (obj == null)
            return result;
          if (nativeSome && obj.some === nativeSome)
            return obj.some(predicate, context);
          each(obj, function(value, index, list) {
            if (result || (result = predicate.call(context, value, index, list)))
              return breaker;
          });
          return !!result;
        };
        _.contains = _.include = function(obj, target) {
          if (obj == null)
            return false;
          if (nativeIndexOf && obj.indexOf === nativeIndexOf)
            return obj.indexOf(target) != -1;
          return any(obj, function(value) {
            return value === target;
          });
        };
        _.delay = function(func, wait) {
          var args = slice.call(arguments, 2);
          return setTimeout(function() {
            return func.apply(null, args);
          }, wait);
        };
        _.defer = function(func) {
          return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
        };
        _.throttle = function(func) {
          var wait, args, context;
          return function() {
            if (wait)
              return;
            wait = true;
            args = arguments;
            context = this;
            tram.frame(function() {
              wait = false;
              func.apply(context, args);
            });
          };
        };
        _.debounce = function(func, wait, immediate) {
          var timeout, args, context, timestamp, result;
          var later = function() {
            var last = _.now() - timestamp;
            if (last < wait) {
              timeout = setTimeout(later, wait - last);
            } else {
              timeout = null;
              if (!immediate) {
                result = func.apply(context, args);
                context = args = null;
              }
            }
          };
          return function() {
            context = this;
            args = arguments;
            timestamp = _.now();
            var callNow = immediate && !timeout;
            if (!timeout) {
              timeout = setTimeout(later, wait);
            }
            if (callNow) {
              result = func.apply(context, args);
              context = args = null;
            }
            return result;
          };
        };
        _.defaults = function(obj) {
          if (!_.isObject(obj))
            return obj;
          for (var i = 1, length = arguments.length; i < length; i++) {
            var source = arguments[i];
            for (var prop in source) {
              if (obj[prop] === void 0)
                obj[prop] = source[prop];
            }
          }
          return obj;
        };
        _.keys = function(obj) {
          if (!_.isObject(obj))
            return [];
          if (nativeKeys)
            return nativeKeys(obj);
          var keys = [];
          for (var key in obj)
            if (_.has(obj, key))
              keys.push(key);
          return keys;
        };
        _.has = function(obj, key) {
          return hasOwnProperty.call(obj, key);
        };
        _.isObject = function(obj) {
          return obj === Object(obj);
        };
        _.now = Date.now || function() {
          return (/* @__PURE__ */ new Date()).getTime();
        };
        _.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g
        };
        var noMatch = /(.)^/;
        var escapes = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029"
        };
        var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;
        var escapeChar = function(match) {
          return "\\" + escapes[match];
        };
        var bareIdentifier = /^\s*(\w|\$)+\s*$/;
        _.template = function(text, settings, oldSettings) {
          if (!settings && oldSettings)
            settings = oldSettings;
          settings = _.defaults({}, settings, _.templateSettings);
          var matcher = RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join("|") + "|$", "g");
          var index = 0;
          var source = "__p+='";
          text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
            source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
            index = offset + match.length;
            if (escape) {
              source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
            } else if (interpolate) {
              source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
            } else if (evaluate) {
              source += "';\n" + evaluate + "\n__p+='";
            }
            return match;
          });
          source += "';\n";
          var argument = settings.variable;
          if (argument) {
            if (!bareIdentifier.test(argument))
              throw new Error("variable is not a bare identifier: " + argument);
          } else {
            source = "with(obj||{}){\n" + source + "}\n";
            argument = "obj";
          }
          source = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
          var render;
          try {
            render = new Function(settings.variable || "obj", "_", source);
          } catch (e) {
            e.source = source;
            throw e;
          }
          var template = function(data) {
            return render.call(this, data, _);
          };
          template.source = "function(" + argument + "){\n" + source + "}";
          return template;
        };
        return _;
      }();
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-lib.js
  var require_webflow_lib = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-lib.js"(exports, module) {
      "use strict";
      var Webflow = {};
      var modules = {};
      var primary = [];
      var secondary = window.Webflow || [];
      var $ = window.jQuery;
      var $win = $(window);
      var $doc = $(document);
      var isFunction = $.isFunction;
      var _ = Webflow._ = require_underscore_custom();
      var tram = Webflow.tram = require_tram_min() && $.tram;
      var domready = false;
      var destroyed = false;
      tram.config.hideBackface = false;
      tram.config.keepInherited = true;
      Webflow.define = function(name, factory, options) {
        if (modules[name]) {
          unbindModule(modules[name]);
        }
        var instance = modules[name] = factory($, _, options) || {};
        bindModule(instance);
        return instance;
      };
      Webflow.require = function(name) {
        return modules[name];
      };
      function bindModule(module2) {
        if (Webflow.env()) {
          isFunction(module2.design) && $win.on("__wf_design", module2.design);
          isFunction(module2.preview) && $win.on("__wf_preview", module2.preview);
        }
        isFunction(module2.destroy) && $win.on("__wf_destroy", module2.destroy);
        if (module2.ready && isFunction(module2.ready)) {
          addReady(module2);
        }
      }
      function addReady(module2) {
        if (domready) {
          module2.ready();
          return;
        }
        if (_.contains(primary, module2.ready)) {
          return;
        }
        primary.push(module2.ready);
      }
      function unbindModule(module2) {
        isFunction(module2.design) && $win.off("__wf_design", module2.design);
        isFunction(module2.preview) && $win.off("__wf_preview", module2.preview);
        isFunction(module2.destroy) && $win.off("__wf_destroy", module2.destroy);
        if (module2.ready && isFunction(module2.ready)) {
          removeReady(module2);
        }
      }
      function removeReady(module2) {
        primary = _.filter(primary, function(readyFn) {
          return readyFn !== module2.ready;
        });
      }
      Webflow.push = function(ready) {
        if (domready) {
          isFunction(ready) && ready();
          return;
        }
        secondary.push(ready);
      };
      Webflow.env = function(mode) {
        var designFlag = window.__wf_design;
        var inApp = typeof designFlag !== "undefined";
        if (!mode) {
          return inApp;
        }
        if (mode === "design") {
          return inApp && designFlag;
        }
        if (mode === "preview") {
          return inApp && !designFlag;
        }
        if (mode === "slug") {
          return inApp && window.__wf_slug;
        }
        if (mode === "editor") {
          return window.WebflowEditor;
        }
        if (mode === "test") {
          return window.__wf_test;
        }
        if (mode === "frame") {
          return window !== window.top;
        }
      };
      var userAgent = navigator.userAgent.toLowerCase();
      var touch = Webflow.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch;
      var chrome = Webflow.env.chrome = /chrome/.test(userAgent) && /Google/.test(navigator.vendor) && parseInt(userAgent.match(/chrome\/(\d+)\./)[1], 10);
      var ios = Webflow.env.ios = /(ipod|iphone|ipad)/.test(userAgent);
      Webflow.env.safari = /safari/.test(userAgent) && !chrome && !ios;
      var touchTarget;
      touch && $doc.on("touchstart mousedown", function(evt) {
        touchTarget = evt.target;
      });
      Webflow.validClick = touch ? function(clickTarget) {
        return clickTarget === touchTarget || $.contains(clickTarget, touchTarget);
      } : function() {
        return true;
      };
      var resizeEvents = "resize.webflow orientationchange.webflow load.webflow";
      var scrollEvents = "scroll.webflow " + resizeEvents;
      Webflow.resize = eventProxy($win, resizeEvents);
      Webflow.scroll = eventProxy($win, scrollEvents);
      Webflow.redraw = eventProxy();
      function eventProxy(target, types) {
        var handlers = [];
        var proxy = {};
        proxy.up = _.throttle(function(evt) {
          _.each(handlers, function(h) {
            h(evt);
          });
        });
        if (target && types) {
          target.on(types, proxy.up);
        }
        proxy.on = function(handler) {
          if (typeof handler !== "function") {
            return;
          }
          if (_.contains(handlers, handler)) {
            return;
          }
          handlers.push(handler);
        };
        proxy.off = function(handler) {
          if (!arguments.length) {
            handlers = [];
            return;
          }
          handlers = _.filter(handlers, function(h) {
            return h !== handler;
          });
        };
        return proxy;
      }
      Webflow.location = function(url) {
        window.location = url;
      };
      if (Webflow.env()) {
        Webflow.location = function() {
        };
      }
      Webflow.ready = function() {
        domready = true;
        if (destroyed) {
          restoreModules();
        } else {
          _.each(primary, callReady);
        }
        _.each(secondary, callReady);
        Webflow.resize.up();
      };
      function callReady(readyFn) {
        isFunction(readyFn) && readyFn();
      }
      function restoreModules() {
        destroyed = false;
        _.each(modules, bindModule);
      }
      var deferLoad;
      Webflow.load = function(handler) {
        deferLoad.then(handler);
      };
      function bindLoad() {
        if (deferLoad) {
          deferLoad.reject();
          $win.off("load", deferLoad.resolve);
        }
        deferLoad = new $.Deferred();
        $win.on("load", deferLoad.resolve);
      }
      Webflow.destroy = function(options) {
        options = options || {};
        destroyed = true;
        $win.triggerHandler("__wf_destroy");
        if (options.domready != null) {
          domready = options.domready;
        }
        _.each(modules, unbindModule);
        Webflow.resize.off();
        Webflow.scroll.off();
        Webflow.redraw.off();
        primary = [];
        secondary = [];
        if (deferLoad.state() === "pending") {
          bindLoad();
        }
      };
      $(Webflow.ready);
      bindLoad();
      module.exports = window.Webflow = Webflow;
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-brand.js
  var require_webflow_brand = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-brand.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("brand", module.exports = function($) {
        var api = {};
        var doc = document;
        var $html = $("html");
        var $body = $("body");
        var namespace = ".w-webflow-badge";
        var location = window.location;
        var isPhantom = /PhantomJS/i.test(navigator.userAgent);
        var fullScreenEvents = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
        var brandElement;
        api.ready = function() {
          var shouldBrand = $html.attr("data-wf-status");
          var publishedDomain = $html.attr("data-wf-domain") || "";
          if (/\.webflow\.io$/i.test(publishedDomain) && location.hostname !== publishedDomain) {
            shouldBrand = true;
          }
          if (shouldBrand && !isPhantom) {
            brandElement = brandElement || createBadge();
            ensureBrand();
            setTimeout(ensureBrand, 500);
            $(doc).off(fullScreenEvents, onFullScreenChange).on(fullScreenEvents, onFullScreenChange);
          }
        };
        function onFullScreenChange() {
          var fullScreen = doc.fullScreen || doc.mozFullScreen || doc.webkitIsFullScreen || doc.msFullscreenElement || Boolean(doc.webkitFullscreenElement);
          $(brandElement).attr("style", fullScreen ? "display: none !important;" : "");
        }
        function createBadge() {
          var $brand = $('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs");
          var $logoArt = $("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
            marginRight: "4px",
            width: "26px"
          });
          var $logoText = $("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
          $brand.append($logoArt, $logoText);
          return $brand[0];
        }
        function ensureBrand() {
          var found = $body.children(namespace);
          var match = found.length && found.get(0) === brandElement;
          var inEditor = Webflow.env("editor");
          if (match) {
            if (inEditor) {
              found.remove();
            }
            return;
          }
          if (found.length) {
            found.remove();
          }
          if (!inEditor) {
            $body.append(brandElement);
          }
        }
        return api;
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-edit.js
  var require_webflow_edit = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-edit.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("edit", module.exports = function($, _, options) {
        options = options || {};
        if (Webflow.env("test") || Webflow.env("frame")) {
          if (!options.fixture && !inCypress()) {
            return {
              exit: 1
            };
          }
        }
        var api = {};
        var $win = $(window);
        var $html = $(document.documentElement);
        var location = document.location;
        var hashchange = "hashchange";
        var loaded;
        var loadEditor = options.load || load;
        var hasLocalStorage = false;
        try {
          hasLocalStorage = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor");
        } catch (e) {
        }
        if (hasLocalStorage) {
          loadEditor();
        } else if (location.search) {
          if (/[?&](edit)(?:[=&?]|$)/.test(location.search) || /\?edit$/.test(location.href)) {
            loadEditor();
          }
        } else {
          $win.on(hashchange, checkHash).triggerHandler(hashchange);
        }
        function checkHash() {
          if (loaded) {
            return;
          }
          if (/\?edit/.test(location.hash)) {
            loadEditor();
          }
        }
        function load() {
          loaded = true;
          window.WebflowEditor = true;
          $win.off(hashchange, checkHash);
          checkThirdPartyCookieSupport(function(thirdPartyCookiesSupported) {
            $.ajax({
              url: cleanSlashes("https://editor-api.webflow.com/api/editor/view"),
              data: {
                siteId: $html.attr("data-wf-site")
              },
              xhrFields: {
                withCredentials: true
              },
              dataType: "json",
              crossDomain: true,
              success: success(thirdPartyCookiesSupported)
            });
          });
        }
        function success(thirdPartyCookiesSupported) {
          return function(data) {
            if (!data) {
              console.error("Could not load editor data");
              return;
            }
            data.thirdPartyCookiesSupported = thirdPartyCookiesSupported;
            getScript(prefix(data.scriptPath), function() {
              window.WebflowEditor(data);
            });
          };
        }
        function getScript(url, done) {
          $.ajax({
            type: "GET",
            url,
            dataType: "script",
            cache: true
          }).then(done, error);
        }
        function error(jqXHR, textStatus, errorThrown) {
          console.error("Could not load editor script: " + textStatus);
          throw errorThrown;
        }
        function prefix(url) {
          return url.indexOf("//") >= 0 ? url : cleanSlashes("https://editor-api.webflow.com" + url);
        }
        function cleanSlashes(url) {
          return url.replace(/([^:])\/\//g, "$1/");
        }
        function checkThirdPartyCookieSupport(callback) {
          var iframe = window.document.createElement("iframe");
          iframe.src = "https://webflow.com/site/third-party-cookie-check.html";
          iframe.style.display = "none";
          iframe.sandbox = "allow-scripts allow-same-origin";
          var handleMessage = function(event) {
            if (event.data === "WF_third_party_cookies_unsupported") {
              cleanUpCookieCheckerIframe(iframe, handleMessage);
              callback(false);
            } else if (event.data === "WF_third_party_cookies_supported") {
              cleanUpCookieCheckerIframe(iframe, handleMessage);
              callback(true);
            }
          };
          iframe.onerror = function() {
            cleanUpCookieCheckerIframe(iframe, handleMessage);
            callback(false);
          };
          window.addEventListener("message", handleMessage, false);
          window.document.body.appendChild(iframe);
        }
        function cleanUpCookieCheckerIframe(iframe, listener) {
          window.removeEventListener("message", listener, false);
          iframe.remove();
        }
        return api;
      });
      function inCypress() {
        try {
          return window.top.__Cypress__;
        } catch (e) {
          return false;
        }
      }
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-focus-visible.js
  var require_webflow_focus_visible = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-focus-visible.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("focus-visible", module.exports = function() {
        function applyFocusVisiblePolyfill(scope) {
          var hadKeyboardEvent = true;
          var hadFocusVisibleRecently = false;
          var hadFocusVisibleRecentlyTimeout = null;
          var inputTypesAllowlist = {
            text: true,
            search: true,
            url: true,
            tel: true,
            email: true,
            password: true,
            number: true,
            date: true,
            month: true,
            week: true,
            time: true,
            datetime: true,
            "datetime-local": true
          };
          function isValidFocusTarget(el) {
            if (el && el !== document && el.nodeName !== "HTML" && el.nodeName !== "BODY" && "classList" in el && "contains" in el.classList) {
              return true;
            }
            return false;
          }
          function focusTriggersKeyboardModality(el) {
            var type = el.type;
            var tagName = el.tagName;
            if (tagName === "INPUT" && inputTypesAllowlist[type] && !el.readOnly) {
              return true;
            }
            if (tagName === "TEXTAREA" && !el.readOnly) {
              return true;
            }
            if (el.isContentEditable) {
              return true;
            }
            return false;
          }
          function addFocusVisibleAttribute(el) {
            if (el.getAttribute("data-wf-focus-visible")) {
              return;
            }
            el.setAttribute("data-wf-focus-visible", "true");
          }
          function removeFocusVisibleAttribute(el) {
            if (!el.getAttribute("data-wf-focus-visible")) {
              return;
            }
            el.removeAttribute("data-wf-focus-visible");
          }
          function onKeyDown(e) {
            if (e.metaKey || e.altKey || e.ctrlKey) {
              return;
            }
            if (isValidFocusTarget(scope.activeElement)) {
              addFocusVisibleAttribute(scope.activeElement);
            }
            hadKeyboardEvent = true;
          }
          function onPointerDown() {
            hadKeyboardEvent = false;
          }
          function onFocus(e) {
            if (!isValidFocusTarget(e.target)) {
              return;
            }
            if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
              addFocusVisibleAttribute(e.target);
            }
          }
          function onBlur(e) {
            if (!isValidFocusTarget(e.target)) {
              return;
            }
            if (e.target.hasAttribute("data-wf-focus-visible")) {
              hadFocusVisibleRecently = true;
              window.clearTimeout(hadFocusVisibleRecentlyTimeout);
              hadFocusVisibleRecentlyTimeout = window.setTimeout(function() {
                hadFocusVisibleRecently = false;
              }, 100);
              removeFocusVisibleAttribute(e.target);
            }
          }
          function onVisibilityChange() {
            if (document.visibilityState === "hidden") {
              if (hadFocusVisibleRecently) {
                hadKeyboardEvent = true;
              }
              addInitialPointerMoveListeners();
            }
          }
          function addInitialPointerMoveListeners() {
            document.addEventListener("mousemove", onInitialPointerMove);
            document.addEventListener("mousedown", onInitialPointerMove);
            document.addEventListener("mouseup", onInitialPointerMove);
            document.addEventListener("pointermove", onInitialPointerMove);
            document.addEventListener("pointerdown", onInitialPointerMove);
            document.addEventListener("pointerup", onInitialPointerMove);
            document.addEventListener("touchmove", onInitialPointerMove);
            document.addEventListener("touchstart", onInitialPointerMove);
            document.addEventListener("touchend", onInitialPointerMove);
          }
          function removeInitialPointerMoveListeners() {
            document.removeEventListener("mousemove", onInitialPointerMove);
            document.removeEventListener("mousedown", onInitialPointerMove);
            document.removeEventListener("mouseup", onInitialPointerMove);
            document.removeEventListener("pointermove", onInitialPointerMove);
            document.removeEventListener("pointerdown", onInitialPointerMove);
            document.removeEventListener("pointerup", onInitialPointerMove);
            document.removeEventListener("touchmove", onInitialPointerMove);
            document.removeEventListener("touchstart", onInitialPointerMove);
            document.removeEventListener("touchend", onInitialPointerMove);
          }
          function onInitialPointerMove(e) {
            if (e.target.nodeName && e.target.nodeName.toLowerCase() === "html") {
              return;
            }
            hadKeyboardEvent = false;
            removeInitialPointerMoveListeners();
          }
          document.addEventListener("keydown", onKeyDown, true);
          document.addEventListener("mousedown", onPointerDown, true);
          document.addEventListener("pointerdown", onPointerDown, true);
          document.addEventListener("touchstart", onPointerDown, true);
          document.addEventListener("visibilitychange", onVisibilityChange, true);
          addInitialPointerMoveListeners();
          scope.addEventListener("focus", onFocus, true);
          scope.addEventListener("blur", onBlur, true);
        }
        function ready() {
          if (typeof document !== "undefined") {
            try {
              document.querySelector(":focus-visible");
            } catch (e) {
              applyFocusVisiblePolyfill(document);
            }
          }
        }
        return {
          ready
        };
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-focus.js
  var require_webflow_focus = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-focus.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("focus", module.exports = function() {
        var capturedEvents = [];
        var capturing = false;
        function captureEvent(e) {
          if (capturing) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            capturedEvents.unshift(e);
          }
        }
        function isPolyfilledFocusEvent(e) {
          var el = e.target;
          var tag = el.tagName;
          return /^a$/i.test(tag) && el.href != null || // (A)
          /^(button|textarea)$/i.test(tag) && el.disabled !== true || // (B) (C)
          /^input$/i.test(tag) && /^(button|reset|submit|radio|checkbox)$/i.test(el.type) && !el.disabled || // (D)
          !/^(button|input|textarea|select|a)$/i.test(tag) && !Number.isNaN(Number.parseFloat(el.tabIndex)) || // (E)
          /^audio$/i.test(tag) || // (F)
          /^video$/i.test(tag) && el.controls === true;
        }
        function handler(e) {
          if (isPolyfilledFocusEvent(e)) {
            capturing = true;
            setTimeout(() => {
              capturing = false;
              e.target.focus();
              while (capturedEvents.length > 0) {
                var event = capturedEvents.pop();
                event.target.dispatchEvent(new MouseEvent(event.type, event));
              }
            }, 0);
          }
        }
        function ready() {
          if (typeof document !== "undefined" && document.body.hasAttribute("data-wf-focus-within") && Webflow.env.safari) {
            document.addEventListener("mousedown", handler, true);
            document.addEventListener("mouseup", captureEvent, true);
            document.addEventListener("click", captureEvent, true);
          }
        }
        return {
          ready
        };
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-ix-events.js
  var require_webflow_ix_events = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-ix-events.js"(exports, module) {
      "use strict";
      var $ = window.jQuery;
      var api = {};
      var eventQueue = [];
      var namespace = ".w-ix";
      var eventTriggers = {
        reset: function(i, el) {
          el.__wf_intro = null;
        },
        intro: function(i, el) {
          if (el.__wf_intro) {
            return;
          }
          el.__wf_intro = true;
          $(el).triggerHandler(api.types.INTRO);
        },
        outro: function(i, el) {
          if (!el.__wf_intro) {
            return;
          }
          el.__wf_intro = null;
          $(el).triggerHandler(api.types.OUTRO);
        }
      };
      api.triggers = {};
      api.types = {
        INTRO: "w-ix-intro" + namespace,
        OUTRO: "w-ix-outro" + namespace
      };
      api.init = function() {
        var count = eventQueue.length;
        for (var i = 0; i < count; i++) {
          var memo = eventQueue[i];
          memo[0](0, memo[1]);
        }
        eventQueue = [];
        $.extend(api.triggers, eventTriggers);
      };
      api.async = function() {
        for (var key in eventTriggers) {
          var func = eventTriggers[key];
          if (!eventTriggers.hasOwnProperty(key)) {
            continue;
          }
          api.triggers[key] = function(i, el) {
            eventQueue.push([func, el]);
          };
        }
      };
      api.async();
      module.exports = api;
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-ix2-events.js
  var require_webflow_ix2_events = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-ix2-events.js"(exports, module) {
      "use strict";
      var IXEvents = require_webflow_ix_events();
      function dispatchCustomEvent2(element, eventName) {
        var event = document.createEvent("CustomEvent");
        event.initCustomEvent(eventName, true, true, null);
        element.dispatchEvent(event);
      }
      var $ = window.jQuery;
      var api = {};
      var namespace = ".w-ix";
      var eventTriggers = {
        reset: function(i, el) {
          IXEvents.triggers.reset(i, el);
        },
        intro: function(i, el) {
          IXEvents.triggers.intro(i, el);
          dispatchCustomEvent2(el, "COMPONENT_ACTIVE");
        },
        outro: function(i, el) {
          IXEvents.triggers.outro(i, el);
          dispatchCustomEvent2(el, "COMPONENT_INACTIVE");
        }
      };
      api.triggers = {};
      api.types = {
        INTRO: "w-ix-intro" + namespace,
        OUTRO: "w-ix-outro" + namespace
      };
      $.extend(api.triggers, eventTriggers);
      module.exports = api;
    }
  });

  // node_modules/@babel/runtime/helpers/typeof.js
  var require_typeof = __commonJS({
    "node_modules/@babel/runtime/helpers/typeof.js"(exports, module) {
      function _typeof(o) {
        "@babel/helpers - typeof";
        return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
          return typeof o2;
        } : function(o2) {
          return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
        }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
      }
      module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/interopRequireWildcard.js
  var require_interopRequireWildcard = __commonJS({
    "node_modules/@babel/runtime/helpers/interopRequireWildcard.js"(exports, module) {
      var _typeof = require_typeof()["default"];
      function _getRequireWildcardCache(e) {
        if ("function" != typeof WeakMap)
          return null;
        var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function _getRequireWildcardCache2(e2) {
          return e2 ? t : r;
        })(e);
      }
      function _interopRequireWildcard(e, r) {
        if (!r && e && e.__esModule)
          return e;
        if (null === e || "object" != _typeof(e) && "function" != typeof e)
          return {
            "default": e
          };
        var t = _getRequireWildcardCache(r);
        if (t && t.has(e))
          return t.get(e);
        var n = {
          __proto__: null
        }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var u in e)
          if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
            var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
            i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
          }
        return n["default"] = e, t && t.set(e, n), n;
      }
      module.exports = _interopRequireWildcard, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/interopRequireDefault.js
  var require_interopRequireDefault = __commonJS({
    "node_modules/@babel/runtime/helpers/interopRequireDefault.js"(exports, module) {
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/core-js/internals/global.js
  var require_global = __commonJS({
    "node_modules/core-js/internals/global.js"(exports, module) {
      var check = function(it) {
        return it && it.Math == Math && it;
      };
      module.exports = // eslint-disable-next-line es/no-global-this -- safe
      check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
      check(typeof self == "object" && self) || check(typeof global == "object" && global) || // eslint-disable-next-line no-new-func -- fallback
      function() {
        return this;
      }() || Function("return this")();
    }
  });

  // node_modules/core-js/internals/fails.js
  var require_fails = __commonJS({
    "node_modules/core-js/internals/fails.js"(exports, module) {
      module.exports = function(exec) {
        try {
          return !!exec();
        } catch (error) {
          return true;
        }
      };
    }
  });

  // node_modules/core-js/internals/descriptors.js
  var require_descriptors = __commonJS({
    "node_modules/core-js/internals/descriptors.js"(exports, module) {
      var fails = require_fails();
      module.exports = !fails(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] != 7;
      });
    }
  });

  // node_modules/core-js/internals/function-call.js
  var require_function_call = __commonJS({
    "node_modules/core-js/internals/function-call.js"(exports, module) {
      var call = Function.prototype.call;
      module.exports = call.bind ? call.bind(call) : function() {
        return call.apply(call, arguments);
      };
    }
  });

  // node_modules/core-js/internals/object-property-is-enumerable.js
  var require_object_property_is_enumerable = __commonJS({
    "node_modules/core-js/internals/object-property-is-enumerable.js"(exports) {
      "use strict";
      var $propertyIsEnumerable = {}.propertyIsEnumerable;
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
      exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
        var descriptor = getOwnPropertyDescriptor(this, V);
        return !!descriptor && descriptor.enumerable;
      } : $propertyIsEnumerable;
    }
  });

  // node_modules/core-js/internals/create-property-descriptor.js
  var require_create_property_descriptor = __commonJS({
    "node_modules/core-js/internals/create-property-descriptor.js"(exports, module) {
      module.exports = function(bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value
        };
      };
    }
  });

  // node_modules/core-js/internals/function-uncurry-this.js
  var require_function_uncurry_this = __commonJS({
    "node_modules/core-js/internals/function-uncurry-this.js"(exports, module) {
      var FunctionPrototype = Function.prototype;
      var bind = FunctionPrototype.bind;
      var call = FunctionPrototype.call;
      var callBind = bind && bind.bind(call);
      module.exports = bind ? function(fn) {
        return fn && callBind(call, fn);
      } : function(fn) {
        return fn && function() {
          return call.apply(fn, arguments);
        };
      };
    }
  });

  // node_modules/core-js/internals/classof-raw.js
  var require_classof_raw = __commonJS({
    "node_modules/core-js/internals/classof-raw.js"(exports, module) {
      var uncurryThis = require_function_uncurry_this();
      var toString = uncurryThis({}.toString);
      var stringSlice = uncurryThis("".slice);
      module.exports = function(it) {
        return stringSlice(toString(it), 8, -1);
      };
    }
  });

  // node_modules/core-js/internals/indexed-object.js
  var require_indexed_object = __commonJS({
    "node_modules/core-js/internals/indexed-object.js"(exports, module) {
      var global2 = require_global();
      var uncurryThis = require_function_uncurry_this();
      var fails = require_fails();
      var classof = require_classof_raw();
      var Object2 = global2.Object;
      var split = uncurryThis("".split);
      module.exports = fails(function() {
        return !Object2("z").propertyIsEnumerable(0);
      }) ? function(it) {
        return classof(it) == "String" ? split(it, "") : Object2(it);
      } : Object2;
    }
  });

  // node_modules/core-js/internals/require-object-coercible.js
  var require_require_object_coercible = __commonJS({
    "node_modules/core-js/internals/require-object-coercible.js"(exports, module) {
      var global2 = require_global();
      var TypeError2 = global2.TypeError;
      module.exports = function(it) {
        if (it == void 0)
          throw TypeError2("Can't call method on " + it);
        return it;
      };
    }
  });

  // node_modules/core-js/internals/to-indexed-object.js
  var require_to_indexed_object = __commonJS({
    "node_modules/core-js/internals/to-indexed-object.js"(exports, module) {
      var IndexedObject = require_indexed_object();
      var requireObjectCoercible = require_require_object_coercible();
      module.exports = function(it) {
        return IndexedObject(requireObjectCoercible(it));
      };
    }
  });

  // node_modules/core-js/internals/is-callable.js
  var require_is_callable = __commonJS({
    "node_modules/core-js/internals/is-callable.js"(exports, module) {
      module.exports = function(argument) {
        return typeof argument == "function";
      };
    }
  });

  // node_modules/core-js/internals/is-object.js
  var require_is_object = __commonJS({
    "node_modules/core-js/internals/is-object.js"(exports, module) {
      var isCallable = require_is_callable();
      module.exports = function(it) {
        return typeof it == "object" ? it !== null : isCallable(it);
      };
    }
  });

  // node_modules/core-js/internals/get-built-in.js
  var require_get_built_in = __commonJS({
    "node_modules/core-js/internals/get-built-in.js"(exports, module) {
      var global2 = require_global();
      var isCallable = require_is_callable();
      var aFunction = function(argument) {
        return isCallable(argument) ? argument : void 0;
      };
      module.exports = function(namespace, method) {
        return arguments.length < 2 ? aFunction(global2[namespace]) : global2[namespace] && global2[namespace][method];
      };
    }
  });

  // node_modules/core-js/internals/object-is-prototype-of.js
  var require_object_is_prototype_of = __commonJS({
    "node_modules/core-js/internals/object-is-prototype-of.js"(exports, module) {
      var uncurryThis = require_function_uncurry_this();
      module.exports = uncurryThis({}.isPrototypeOf);
    }
  });

  // node_modules/core-js/internals/engine-user-agent.js
  var require_engine_user_agent = __commonJS({
    "node_modules/core-js/internals/engine-user-agent.js"(exports, module) {
      var getBuiltIn = require_get_built_in();
      module.exports = getBuiltIn("navigator", "userAgent") || "";
    }
  });

  // node_modules/core-js/internals/engine-v8-version.js
  var require_engine_v8_version = __commonJS({
    "node_modules/core-js/internals/engine-v8-version.js"(exports, module) {
      var global2 = require_global();
      var userAgent = require_engine_user_agent();
      var process2 = global2.process;
      var Deno = global2.Deno;
      var versions = process2 && process2.versions || Deno && Deno.version;
      var v8 = versions && versions.v8;
      var match;
      var version;
      if (v8) {
        match = v8.split(".");
        version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
      }
      if (!version && userAgent) {
        match = userAgent.match(/Edge\/(\d+)/);
        if (!match || match[1] >= 74) {
          match = userAgent.match(/Chrome\/(\d+)/);
          if (match)
            version = +match[1];
        }
      }
      module.exports = version;
    }
  });

  // node_modules/core-js/internals/native-symbol.js
  var require_native_symbol = __commonJS({
    "node_modules/core-js/internals/native-symbol.js"(exports, module) {
      var V8_VERSION = require_engine_v8_version();
      var fails = require_fails();
      module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
        var symbol = Symbol();
        return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
        !Symbol.sham && V8_VERSION && V8_VERSION < 41;
      });
    }
  });

  // node_modules/core-js/internals/use-symbol-as-uid.js
  var require_use_symbol_as_uid = __commonJS({
    "node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module) {
      var NATIVE_SYMBOL = require_native_symbol();
      module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
    }
  });

  // node_modules/core-js/internals/is-symbol.js
  var require_is_symbol = __commonJS({
    "node_modules/core-js/internals/is-symbol.js"(exports, module) {
      var global2 = require_global();
      var getBuiltIn = require_get_built_in();
      var isCallable = require_is_callable();
      var isPrototypeOf = require_object_is_prototype_of();
      var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
      var Object2 = global2.Object;
      module.exports = USE_SYMBOL_AS_UID ? function(it) {
        return typeof it == "symbol";
      } : function(it) {
        var $Symbol = getBuiltIn("Symbol");
        return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object2(it));
      };
    }
  });

  // node_modules/core-js/internals/try-to-string.js
  var require_try_to_string = __commonJS({
    "node_modules/core-js/internals/try-to-string.js"(exports, module) {
      var global2 = require_global();
      var String2 = global2.String;
      module.exports = function(argument) {
        try {
          return String2(argument);
        } catch (error) {
          return "Object";
        }
      };
    }
  });

  // node_modules/core-js/internals/a-callable.js
  var require_a_callable = __commonJS({
    "node_modules/core-js/internals/a-callable.js"(exports, module) {
      var global2 = require_global();
      var isCallable = require_is_callable();
      var tryToString = require_try_to_string();
      var TypeError2 = global2.TypeError;
      module.exports = function(argument) {
        if (isCallable(argument))
          return argument;
        throw TypeError2(tryToString(argument) + " is not a function");
      };
    }
  });

  // node_modules/core-js/internals/get-method.js
  var require_get_method = __commonJS({
    "node_modules/core-js/internals/get-method.js"(exports, module) {
      var aCallable = require_a_callable();
      module.exports = function(V, P) {
        var func = V[P];
        return func == null ? void 0 : aCallable(func);
      };
    }
  });

  // node_modules/core-js/internals/ordinary-to-primitive.js
  var require_ordinary_to_primitive = __commonJS({
    "node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module) {
      var global2 = require_global();
      var call = require_function_call();
      var isCallable = require_is_callable();
      var isObject = require_is_object();
      var TypeError2 = global2.TypeError;
      module.exports = function(input, pref) {
        var fn, val;
        if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input)))
          return val;
        if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input)))
          return val;
        if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input)))
          return val;
        throw TypeError2("Can't convert object to primitive value");
      };
    }
  });

  // node_modules/core-js/internals/is-pure.js
  var require_is_pure = __commonJS({
    "node_modules/core-js/internals/is-pure.js"(exports, module) {
      module.exports = false;
    }
  });

  // node_modules/core-js/internals/set-global.js
  var require_set_global = __commonJS({
    "node_modules/core-js/internals/set-global.js"(exports, module) {
      var global2 = require_global();
      var defineProperty = Object.defineProperty;
      module.exports = function(key, value) {
        try {
          defineProperty(global2, key, { value, configurable: true, writable: true });
        } catch (error) {
          global2[key] = value;
        }
        return value;
      };
    }
  });

  // node_modules/core-js/internals/shared-store.js
  var require_shared_store = __commonJS({
    "node_modules/core-js/internals/shared-store.js"(exports, module) {
      var global2 = require_global();
      var setGlobal = require_set_global();
      var SHARED = "__core-js_shared__";
      var store = global2[SHARED] || setGlobal(SHARED, {});
      module.exports = store;
    }
  });

  // node_modules/core-js/internals/shared.js
  var require_shared = __commonJS({
    "node_modules/core-js/internals/shared.js"(exports, module) {
      var IS_PURE = require_is_pure();
      var store = require_shared_store();
      (module.exports = function(key, value) {
        return store[key] || (store[key] = value !== void 0 ? value : {});
      })("versions", []).push({
        version: "3.19.0",
        mode: IS_PURE ? "pure" : "global",
        copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
      });
    }
  });

  // node_modules/core-js/internals/to-object.js
  var require_to_object = __commonJS({
    "node_modules/core-js/internals/to-object.js"(exports, module) {
      var global2 = require_global();
      var requireObjectCoercible = require_require_object_coercible();
      var Object2 = global2.Object;
      module.exports = function(argument) {
        return Object2(requireObjectCoercible(argument));
      };
    }
  });

  // node_modules/core-js/internals/has-own-property.js
  var require_has_own_property = __commonJS({
    "node_modules/core-js/internals/has-own-property.js"(exports, module) {
      var uncurryThis = require_function_uncurry_this();
      var toObject = require_to_object();
      var hasOwnProperty = uncurryThis({}.hasOwnProperty);
      module.exports = Object.hasOwn || function hasOwn(it, key) {
        return hasOwnProperty(toObject(it), key);
      };
    }
  });

  // node_modules/core-js/internals/uid.js
  var require_uid = __commonJS({
    "node_modules/core-js/internals/uid.js"(exports, module) {
      var uncurryThis = require_function_uncurry_this();
      var id = 0;
      var postfix = Math.random();
      var toString = uncurryThis(1 .toString);
      module.exports = function(key) {
        return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
      };
    }
  });

  // node_modules/core-js/internals/well-known-symbol.js
  var require_well_known_symbol = __commonJS({
    "node_modules/core-js/internals/well-known-symbol.js"(exports, module) {
      var global2 = require_global();
      var shared = require_shared();
      var hasOwn = require_has_own_property();
      var uid = require_uid();
      var NATIVE_SYMBOL = require_native_symbol();
      var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
      var WellKnownSymbolsStore = shared("wks");
      var Symbol2 = global2.Symbol;
      var symbolFor = Symbol2 && Symbol2["for"];
      var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
      module.exports = function(name) {
        if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == "string")) {
          var description = "Symbol." + name;
          if (NATIVE_SYMBOL && hasOwn(Symbol2, name)) {
            WellKnownSymbolsStore[name] = Symbol2[name];
          } else if (USE_SYMBOL_AS_UID && symbolFor) {
            WellKnownSymbolsStore[name] = symbolFor(description);
          } else {
            WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
          }
        }
        return WellKnownSymbolsStore[name];
      };
    }
  });

  // node_modules/core-js/internals/to-primitive.js
  var require_to_primitive = __commonJS({
    "node_modules/core-js/internals/to-primitive.js"(exports, module) {
      var global2 = require_global();
      var call = require_function_call();
      var isObject = require_is_object();
      var isSymbol = require_is_symbol();
      var getMethod = require_get_method();
      var ordinaryToPrimitive = require_ordinary_to_primitive();
      var wellKnownSymbol = require_well_known_symbol();
      var TypeError2 = global2.TypeError;
      var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
      module.exports = function(input, pref) {
        if (!isObject(input) || isSymbol(input))
          return input;
        var exoticToPrim = getMethod(input, TO_PRIMITIVE);
        var result;
        if (exoticToPrim) {
          if (pref === void 0)
            pref = "default";
          result = call(exoticToPrim, input, pref);
          if (!isObject(result) || isSymbol(result))
            return result;
          throw TypeError2("Can't convert object to primitive value");
        }
        if (pref === void 0)
          pref = "number";
        return ordinaryToPrimitive(input, pref);
      };
    }
  });

  // node_modules/core-js/internals/to-property-key.js
  var require_to_property_key = __commonJS({
    "node_modules/core-js/internals/to-property-key.js"(exports, module) {
      var toPrimitive = require_to_primitive();
      var isSymbol = require_is_symbol();
      module.exports = function(argument) {
        var key = toPrimitive(argument, "string");
        return isSymbol(key) ? key : key + "";
      };
    }
  });

  // node_modules/core-js/internals/document-create-element.js
  var require_document_create_element = __commonJS({
    "node_modules/core-js/internals/document-create-element.js"(exports, module) {
      var global2 = require_global();
      var isObject = require_is_object();
      var document2 = global2.document;
      var EXISTS = isObject(document2) && isObject(document2.createElement);
      module.exports = function(it) {
        return EXISTS ? document2.createElement(it) : {};
      };
    }
  });

  // node_modules/core-js/internals/ie8-dom-define.js
  var require_ie8_dom_define = __commonJS({
    "node_modules/core-js/internals/ie8-dom-define.js"(exports, module) {
      var DESCRIPTORS = require_descriptors();
      var fails = require_fails();
      var createElement = require_document_create_element();
      module.exports = !DESCRIPTORS && !fails(function() {
        return Object.defineProperty(createElement("div"), "a", {
          get: function() {
            return 7;
          }
        }).a != 7;
      });
    }
  });

  // node_modules/core-js/internals/object-get-own-property-descriptor.js
  var require_object_get_own_property_descriptor = __commonJS({
    "node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports) {
      var DESCRIPTORS = require_descriptors();
      var call = require_function_call();
      var propertyIsEnumerableModule = require_object_property_is_enumerable();
      var createPropertyDescriptor = require_create_property_descriptor();
      var toIndexedObject = require_to_indexed_object();
      var toPropertyKey = require_to_property_key();
      var hasOwn = require_has_own_property();
      var IE8_DOM_DEFINE = require_ie8_dom_define();
      var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
        O = toIndexedObject(O);
        P = toPropertyKey(P);
        if (IE8_DOM_DEFINE)
          try {
            return $getOwnPropertyDescriptor(O, P);
          } catch (error) {
          }
        if (hasOwn(O, P))
          return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
      };
    }
  });

  // node_modules/core-js/internals/an-object.js
  var require_an_object = __commonJS({
    "node_modules/core-js/internals/an-object.js"(exports, module) {
      var global2 = require_global();
      var isObject = require_is_object();
      var String2 = global2.String;
      var TypeError2 = global2.TypeError;
      module.exports = function(argument) {
        if (isObject(argument))
          return argument;
        throw TypeError2(String2(argument) + " is not an object");
      };
    }
  });

  // node_modules/core-js/internals/object-define-property.js
  var require_object_define_property = __commonJS({
    "node_modules/core-js/internals/object-define-property.js"(exports) {
      var global2 = require_global();
      var DESCRIPTORS = require_descriptors();
      var IE8_DOM_DEFINE = require_ie8_dom_define();
      var anObject = require_an_object();
      var toPropertyKey = require_to_property_key();
      var TypeError2 = global2.TypeError;
      var $defineProperty = Object.defineProperty;
      exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPropertyKey(P);
        anObject(Attributes);
        if (IE8_DOM_DEFINE)
          try {
            return $defineProperty(O, P, Attributes);
          } catch (error) {
          }
        if ("get" in Attributes || "set" in Attributes)
          throw TypeError2("Accessors not supported");
        if ("value" in Attributes)
          O[P] = Attributes.value;
        return O;
      };
    }
  });

  // node_modules/core-js/internals/create-non-enumerable-property.js
  var require_create_non_enumerable_property = __commonJS({
    "node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module) {
      var DESCRIPTORS = require_descriptors();
      var definePropertyModule = require_object_define_property();
      var createPropertyDescriptor = require_create_property_descriptor();
      module.exports = DESCRIPTORS ? function(object, key, value) {
        return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
      } : function(object, key, value) {
        object[key] = value;
        return object;
      };
    }
  });

  // node_modules/core-js/internals/inspect-source.js
  var require_inspect_source = __commonJS({
    "node_modules/core-js/internals/inspect-source.js"(exports, module) {
      var uncurryThis = require_function_uncurry_this();
      var isCallable = require_is_callable();
      var store = require_shared_store();
      var functionToString = uncurryThis(Function.toString);
      if (!isCallable(store.inspectSource)) {
        store.inspectSource = function(it) {
          return functionToString(it);
        };
      }
      module.exports = store.inspectSource;
    }
  });

  // node_modules/core-js/internals/native-weak-map.js
  var require_native_weak_map = __commonJS({
    "node_modules/core-js/internals/native-weak-map.js"(exports, module) {
      var global2 = require_global();
      var isCallable = require_is_callable();
      var inspectSource = require_inspect_source();
      var WeakMap2 = global2.WeakMap;
      module.exports = isCallable(WeakMap2) && /native code/.test(inspectSource(WeakMap2));
    }
  });

  // node_modules/core-js/internals/shared-key.js
  var require_shared_key = __commonJS({
    "node_modules/core-js/internals/shared-key.js"(exports, module) {
      var shared = require_shared();
      var uid = require_uid();
      var keys = shared("keys");
      module.exports = function(key) {
        return keys[key] || (keys[key] = uid(key));
      };
    }
  });

  // node_modules/core-js/internals/hidden-keys.js
  var require_hidden_keys = __commonJS({
    "node_modules/core-js/internals/hidden-keys.js"(exports, module) {
      module.exports = {};
    }
  });

  // node_modules/core-js/internals/internal-state.js
  var require_internal_state = __commonJS({
    "node_modules/core-js/internals/internal-state.js"(exports, module) {
      var NATIVE_WEAK_MAP = require_native_weak_map();
      var global2 = require_global();
      var uncurryThis = require_function_uncurry_this();
      var isObject = require_is_object();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var hasOwn = require_has_own_property();
      var shared = require_shared_store();
      var sharedKey = require_shared_key();
      var hiddenKeys = require_hidden_keys();
      var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
      var TypeError2 = global2.TypeError;
      var WeakMap2 = global2.WeakMap;
      var set3;
      var get3;
      var has;
      var enforce = function(it) {
        return has(it) ? get3(it) : set3(it, {});
      };
      var getterFor = function(TYPE) {
        return function(it) {
          var state;
          if (!isObject(it) || (state = get3(it)).type !== TYPE) {
            throw TypeError2("Incompatible receiver, " + TYPE + " required");
          }
          return state;
        };
      };
      if (NATIVE_WEAK_MAP || shared.state) {
        store = shared.state || (shared.state = new WeakMap2());
        wmget = uncurryThis(store.get);
        wmhas = uncurryThis(store.has);
        wmset = uncurryThis(store.set);
        set3 = function(it, metadata) {
          if (wmhas(store, it))
            throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
          metadata.facade = it;
          wmset(store, it, metadata);
          return metadata;
        };
        get3 = function(it) {
          return wmget(store, it) || {};
        };
        has = function(it) {
          return wmhas(store, it);
        };
      } else {
        STATE = sharedKey("state");
        hiddenKeys[STATE] = true;
        set3 = function(it, metadata) {
          if (hasOwn(it, STATE))
            throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
          metadata.facade = it;
          createNonEnumerableProperty(it, STATE, metadata);
          return metadata;
        };
        get3 = function(it) {
          return hasOwn(it, STATE) ? it[STATE] : {};
        };
        has = function(it) {
          return hasOwn(it, STATE);
        };
      }
      var store;
      var wmget;
      var wmhas;
      var wmset;
      var STATE;
      module.exports = {
        set: set3,
        get: get3,
        has,
        enforce,
        getterFor
      };
    }
  });

  // node_modules/core-js/internals/function-name.js
  var require_function_name = __commonJS({
    "node_modules/core-js/internals/function-name.js"(exports, module) {
      var DESCRIPTORS = require_descriptors();
      var hasOwn = require_has_own_property();
      var FunctionPrototype = Function.prototype;
      var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
      var EXISTS = hasOwn(FunctionPrototype, "name");
      var PROPER = EXISTS && function something() {
      }.name === "something";
      var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
      module.exports = {
        EXISTS,
        PROPER,
        CONFIGURABLE
      };
    }
  });

  // node_modules/core-js/internals/redefine.js
  var require_redefine = __commonJS({
    "node_modules/core-js/internals/redefine.js"(exports, module) {
      var global2 = require_global();
      var isCallable = require_is_callable();
      var hasOwn = require_has_own_property();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var setGlobal = require_set_global();
      var inspectSource = require_inspect_source();
      var InternalStateModule = require_internal_state();
      var CONFIGURABLE_FUNCTION_NAME = require_function_name().CONFIGURABLE;
      var getInternalState = InternalStateModule.get;
      var enforceInternalState = InternalStateModule.enforce;
      var TEMPLATE = String(String).split("String");
      (module.exports = function(O, key, value, options) {
        var unsafe = options ? !!options.unsafe : false;
        var simple = options ? !!options.enumerable : false;
        var noTargetGet = options ? !!options.noTargetGet : false;
        var name = options && options.name !== void 0 ? options.name : key;
        var state;
        if (isCallable(value)) {
          if (String(name).slice(0, 7) === "Symbol(") {
            name = "[" + String(name).replace(/^Symbol\(([^)]*)\)/, "$1") + "]";
          }
          if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
            createNonEnumerableProperty(value, "name", name);
          }
          state = enforceInternalState(value);
          if (!state.source) {
            state.source = TEMPLATE.join(typeof name == "string" ? name : "");
          }
        }
        if (O === global2) {
          if (simple)
            O[key] = value;
          else
            setGlobal(key, value);
          return;
        } else if (!unsafe) {
          delete O[key];
        } else if (!noTargetGet && O[key]) {
          simple = true;
        }
        if (simple)
          O[key] = value;
        else
          createNonEnumerableProperty(O, key, value);
      })(Function.prototype, "toString", function toString() {
        return isCallable(this) && getInternalState(this).source || inspectSource(this);
      });
    }
  });

  // node_modules/core-js/internals/to-integer-or-infinity.js
  var require_to_integer_or_infinity = __commonJS({
    "node_modules/core-js/internals/to-integer-or-infinity.js"(exports, module) {
      var ceil = Math.ceil;
      var floor = Math.floor;
      module.exports = function(argument) {
        var number = +argument;
        return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
      };
    }
  });

  // node_modules/core-js/internals/to-absolute-index.js
  var require_to_absolute_index = __commonJS({
    "node_modules/core-js/internals/to-absolute-index.js"(exports, module) {
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var max = Math.max;
      var min = Math.min;
      module.exports = function(index, length) {
        var integer = toIntegerOrInfinity(index);
        return integer < 0 ? max(integer + length, 0) : min(integer, length);
      };
    }
  });

  // node_modules/core-js/internals/to-length.js
  var require_to_length = __commonJS({
    "node_modules/core-js/internals/to-length.js"(exports, module) {
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var min = Math.min;
      module.exports = function(argument) {
        return argument > 0 ? min(toIntegerOrInfinity(argument), 9007199254740991) : 0;
      };
    }
  });

  // node_modules/core-js/internals/length-of-array-like.js
  var require_length_of_array_like = __commonJS({
    "node_modules/core-js/internals/length-of-array-like.js"(exports, module) {
      var toLength = require_to_length();
      module.exports = function(obj) {
        return toLength(obj.length);
      };
    }
  });

  // node_modules/core-js/internals/array-includes.js
  var require_array_includes = __commonJS({
    "node_modules/core-js/internals/array-includes.js"(exports, module) {
      var toIndexedObject = require_to_indexed_object();
      var toAbsoluteIndex = require_to_absolute_index();
      var lengthOfArrayLike = require_length_of_array_like();
      var createMethod = function(IS_INCLUDES) {
        return function($this, el, fromIndex) {
          var O = toIndexedObject($this);
          var length = lengthOfArrayLike(O);
          var index = toAbsoluteIndex(fromIndex, length);
          var value;
          if (IS_INCLUDES && el != el)
            while (length > index) {
              value = O[index++];
              if (value != value)
                return true;
            }
          else
            for (; length > index; index++) {
              if ((IS_INCLUDES || index in O) && O[index] === el)
                return IS_INCLUDES || index || 0;
            }
          return !IS_INCLUDES && -1;
        };
      };
      module.exports = {
        // `Array.prototype.includes` method
        // https://tc39.es/ecma262/#sec-array.prototype.includes
        includes: createMethod(true),
        // `Array.prototype.indexOf` method
        // https://tc39.es/ecma262/#sec-array.prototype.indexof
        indexOf: createMethod(false)
      };
    }
  });

  // node_modules/core-js/internals/object-keys-internal.js
  var require_object_keys_internal = __commonJS({
    "node_modules/core-js/internals/object-keys-internal.js"(exports, module) {
      var uncurryThis = require_function_uncurry_this();
      var hasOwn = require_has_own_property();
      var toIndexedObject = require_to_indexed_object();
      var indexOf = require_array_includes().indexOf;
      var hiddenKeys = require_hidden_keys();
      var push = uncurryThis([].push);
      module.exports = function(object, names) {
        var O = toIndexedObject(object);
        var i = 0;
        var result = [];
        var key;
        for (key in O)
          !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
        while (names.length > i)
          if (hasOwn(O, key = names[i++])) {
            ~indexOf(result, key) || push(result, key);
          }
        return result;
      };
    }
  });

  // node_modules/core-js/internals/enum-bug-keys.js
  var require_enum_bug_keys = __commonJS({
    "node_modules/core-js/internals/enum-bug-keys.js"(exports, module) {
      module.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf"
      ];
    }
  });

  // node_modules/core-js/internals/object-get-own-property-names.js
  var require_object_get_own_property_names = __commonJS({
    "node_modules/core-js/internals/object-get-own-property-names.js"(exports) {
      var internalObjectKeys = require_object_keys_internal();
      var enumBugKeys = require_enum_bug_keys();
      var hiddenKeys = enumBugKeys.concat("length", "prototype");
      exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
        return internalObjectKeys(O, hiddenKeys);
      };
    }
  });

  // node_modules/core-js/internals/object-get-own-property-symbols.js
  var require_object_get_own_property_symbols = __commonJS({
    "node_modules/core-js/internals/object-get-own-property-symbols.js"(exports) {
      exports.f = Object.getOwnPropertySymbols;
    }
  });

  // node_modules/core-js/internals/own-keys.js
  var require_own_keys = __commonJS({
    "node_modules/core-js/internals/own-keys.js"(exports, module) {
      var getBuiltIn = require_get_built_in();
      var uncurryThis = require_function_uncurry_this();
      var getOwnPropertyNamesModule = require_object_get_own_property_names();
      var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
      var anObject = require_an_object();
      var concat = uncurryThis([].concat);
      module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
        var keys = getOwnPropertyNamesModule.f(anObject(it));
        var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
        return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
      };
    }
  });

  // node_modules/core-js/internals/copy-constructor-properties.js
  var require_copy_constructor_properties = __commonJS({
    "node_modules/core-js/internals/copy-constructor-properties.js"(exports, module) {
      var hasOwn = require_has_own_property();
      var ownKeys = require_own_keys();
      var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
      var definePropertyModule = require_object_define_property();
      module.exports = function(target, source) {
        var keys = ownKeys(source);
        var defineProperty = definePropertyModule.f;
        var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          if (!hasOwn(target, key))
            defineProperty(target, key, getOwnPropertyDescriptor(source, key));
        }
      };
    }
  });

  // node_modules/core-js/internals/is-forced.js
  var require_is_forced = __commonJS({
    "node_modules/core-js/internals/is-forced.js"(exports, module) {
      var fails = require_fails();
      var isCallable = require_is_callable();
      var replacement = /#|\.prototype\./;
      var isForced = function(feature, detection) {
        var value = data[normalize(feature)];
        return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
      };
      var normalize = isForced.normalize = function(string) {
        return String(string).replace(replacement, ".").toLowerCase();
      };
      var data = isForced.data = {};
      var NATIVE = isForced.NATIVE = "N";
      var POLYFILL = isForced.POLYFILL = "P";
      module.exports = isForced;
    }
  });

  // node_modules/core-js/internals/export.js
  var require_export = __commonJS({
    "node_modules/core-js/internals/export.js"(exports, module) {
      var global2 = require_global();
      var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var redefine = require_redefine();
      var setGlobal = require_set_global();
      var copyConstructorProperties = require_copy_constructor_properties();
      var isForced = require_is_forced();
      module.exports = function(options, source) {
        var TARGET = options.target;
        var GLOBAL = options.global;
        var STATIC = options.stat;
        var FORCED, target, key, targetProperty, sourceProperty, descriptor;
        if (GLOBAL) {
          target = global2;
        } else if (STATIC) {
          target = global2[TARGET] || setGlobal(TARGET, {});
        } else {
          target = (global2[TARGET] || {}).prototype;
        }
        if (target)
          for (key in source) {
            sourceProperty = source[key];
            if (options.noTargetGet) {
              descriptor = getOwnPropertyDescriptor(target, key);
              targetProperty = descriptor && descriptor.value;
            } else
              targetProperty = target[key];
            FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
            if (!FORCED && targetProperty !== void 0) {
              if (typeof sourceProperty == typeof targetProperty)
                continue;
              copyConstructorProperties(sourceProperty, targetProperty);
            }
            if (options.sham || targetProperty && targetProperty.sham) {
              createNonEnumerableProperty(sourceProperty, "sham", true);
            }
            redefine(target, key, sourceProperty, options);
          }
      };
    }
  });

  // node_modules/core-js/internals/object-keys.js
  var require_object_keys = __commonJS({
    "node_modules/core-js/internals/object-keys.js"(exports, module) {
      var internalObjectKeys = require_object_keys_internal();
      var enumBugKeys = require_enum_bug_keys();
      module.exports = Object.keys || function keys(O) {
        return internalObjectKeys(O, enumBugKeys);
      };
    }
  });

  // node_modules/core-js/internals/object-define-properties.js
  var require_object_define_properties = __commonJS({
    "node_modules/core-js/internals/object-define-properties.js"(exports, module) {
      var DESCRIPTORS = require_descriptors();
      var definePropertyModule = require_object_define_property();
      var anObject = require_an_object();
      var toIndexedObject = require_to_indexed_object();
      var objectKeys = require_object_keys();
      module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
        anObject(O);
        var props = toIndexedObject(Properties);
        var keys = objectKeys(Properties);
        var length = keys.length;
        var index = 0;
        var key;
        while (length > index)
          definePropertyModule.f(O, key = keys[index++], props[key]);
        return O;
      };
    }
  });

  // node_modules/core-js/internals/html.js
  var require_html = __commonJS({
    "node_modules/core-js/internals/html.js"(exports, module) {
      var getBuiltIn = require_get_built_in();
      module.exports = getBuiltIn("document", "documentElement");
    }
  });

  // node_modules/core-js/internals/object-create.js
  var require_object_create = __commonJS({
    "node_modules/core-js/internals/object-create.js"(exports, module) {
      var anObject = require_an_object();
      var defineProperties = require_object_define_properties();
      var enumBugKeys = require_enum_bug_keys();
      var hiddenKeys = require_hidden_keys();
      var html = require_html();
      var documentCreateElement = require_document_create_element();
      var sharedKey = require_shared_key();
      var GT = ">";
      var LT = "<";
      var PROTOTYPE = "prototype";
      var SCRIPT = "script";
      var IE_PROTO = sharedKey("IE_PROTO");
      var EmptyConstructor = function() {
      };
      var scriptTag = function(content) {
        return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
      };
      var NullProtoObjectViaActiveX = function(activeXDocument2) {
        activeXDocument2.write(scriptTag(""));
        activeXDocument2.close();
        var temp = activeXDocument2.parentWindow.Object;
        activeXDocument2 = null;
        return temp;
      };
      var NullProtoObjectViaIFrame = function() {
        var iframe = documentCreateElement("iframe");
        var JS = "java" + SCRIPT + ":";
        var iframeDocument;
        iframe.style.display = "none";
        html.appendChild(iframe);
        iframe.src = String(JS);
        iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(scriptTag("document.F=Object"));
        iframeDocument.close();
        return iframeDocument.F;
      };
      var activeXDocument;
      var NullProtoObject = function() {
        try {
          activeXDocument = new ActiveXObject("htmlfile");
        } catch (error) {
        }
        NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
        var length = enumBugKeys.length;
        while (length--)
          delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
        return NullProtoObject();
      };
      hiddenKeys[IE_PROTO] = true;
      module.exports = Object.create || function create(O, Properties) {
        var result;
        if (O !== null) {
          EmptyConstructor[PROTOTYPE] = anObject(O);
          result = new EmptyConstructor();
          EmptyConstructor[PROTOTYPE] = null;
          result[IE_PROTO] = O;
        } else
          result = NullProtoObject();
        return Properties === void 0 ? result : defineProperties(result, Properties);
      };
    }
  });

  // node_modules/core-js/internals/add-to-unscopables.js
  var require_add_to_unscopables = __commonJS({
    "node_modules/core-js/internals/add-to-unscopables.js"(exports, module) {
      var wellKnownSymbol = require_well_known_symbol();
      var create = require_object_create();
      var definePropertyModule = require_object_define_property();
      var UNSCOPABLES = wellKnownSymbol("unscopables");
      var ArrayPrototype = Array.prototype;
      if (ArrayPrototype[UNSCOPABLES] == void 0) {
        definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
          configurable: true,
          value: create(null)
        });
      }
      module.exports = function(key) {
        ArrayPrototype[UNSCOPABLES][key] = true;
      };
    }
  });

  // node_modules/core-js/modules/es.array.includes.js
  var require_es_array_includes = __commonJS({
    "node_modules/core-js/modules/es.array.includes.js"() {
      "use strict";
      var $ = require_export();
      var $includes = require_array_includes().includes;
      var addToUnscopables = require_add_to_unscopables();
      $({ target: "Array", proto: true }, {
        includes: function includes(el) {
          return $includes(this, el, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
      addToUnscopables("includes");
    }
  });

  // node_modules/core-js/internals/entry-unbind.js
  var require_entry_unbind = __commonJS({
    "node_modules/core-js/internals/entry-unbind.js"(exports, module) {
      var global2 = require_global();
      var uncurryThis = require_function_uncurry_this();
      module.exports = function(CONSTRUCTOR, METHOD) {
        return uncurryThis(global2[CONSTRUCTOR].prototype[METHOD]);
      };
    }
  });

  // node_modules/core-js/es/array/includes.js
  var require_includes = __commonJS({
    "node_modules/core-js/es/array/includes.js"(exports, module) {
      require_es_array_includes();
      var entryUnbind = require_entry_unbind();
      module.exports = entryUnbind("Array", "includes");
    }
  });

  // node_modules/core-js/stable/array/includes.js
  var require_includes2 = __commonJS({
    "node_modules/core-js/stable/array/includes.js"(exports, module) {
      var parent = require_includes();
      module.exports = parent;
    }
  });

  // node_modules/core-js/features/array/includes.js
  var require_includes3 = __commonJS({
    "node_modules/core-js/features/array/includes.js"(exports, module) {
      var parent = require_includes2();
      module.exports = parent;
    }
  });

  // node_modules/lodash/_freeGlobal.js
  var require_freeGlobal = __commonJS({
    "node_modules/lodash/_freeGlobal.js"(exports, module) {
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      module.exports = freeGlobal;
    }
  });

  // node_modules/lodash/_root.js
  var require_root = __commonJS({
    "node_modules/lodash/_root.js"(exports, module) {
      var freeGlobal = require_freeGlobal();
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      module.exports = root;
    }
  });

  // node_modules/lodash/_Symbol.js
  var require_Symbol = __commonJS({
    "node_modules/lodash/_Symbol.js"(exports, module) {
      var root = require_root();
      var Symbol2 = root.Symbol;
      module.exports = Symbol2;
    }
  });

  // node_modules/lodash/_getRawTag.js
  var require_getRawTag = __commonJS({
    "node_modules/lodash/_getRawTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var nativeObjectToString = objectProto.toString;
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = void 0;
          var unmasked = true;
        } catch (e) {
        }
        var result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result;
      }
      module.exports = getRawTag;
    }
  });

  // node_modules/lodash/_objectToString.js
  var require_objectToString = __commonJS({
    "node_modules/lodash/_objectToString.js"(exports, module) {
      var objectProto = Object.prototype;
      var nativeObjectToString = objectProto.toString;
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      module.exports = objectToString;
    }
  });

  // node_modules/lodash/_baseGetTag.js
  var require_baseGetTag = __commonJS({
    "node_modules/lodash/_baseGetTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var getRawTag = require_getRawTag();
      var objectToString = require_objectToString();
      var nullTag = "[object Null]";
      var undefinedTag = "[object Undefined]";
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function baseGetTag(value) {
        if (value == null) {
          return value === void 0 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
      }
      module.exports = baseGetTag;
    }
  });

  // node_modules/lodash/_overArg.js
  var require_overArg = __commonJS({
    "node_modules/lodash/_overArg.js"(exports, module) {
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      module.exports = overArg;
    }
  });

  // node_modules/lodash/_getPrototype.js
  var require_getPrototype = __commonJS({
    "node_modules/lodash/_getPrototype.js"(exports, module) {
      var overArg = require_overArg();
      var getPrototype = overArg(Object.getPrototypeOf, Object);
      module.exports = getPrototype;
    }
  });

  // node_modules/lodash/isObjectLike.js
  var require_isObjectLike = __commonJS({
    "node_modules/lodash/isObjectLike.js"(exports, module) {
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      module.exports = isObjectLike;
    }
  });

  // node_modules/lodash/isPlainObject.js
  var require_isPlainObject = __commonJS({
    "node_modules/lodash/isPlainObject.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var getPrototype = require_getPrototype();
      var isObjectLike = require_isObjectLike();
      var objectTag = "[object Object]";
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var objectCtorString = funcToString.call(Object);
      function isPlainObject(value) {
        if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
          return false;
        }
        var proto = getPrototype(value);
        if (proto === null) {
          return true;
        }
        var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
        return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
      }
      module.exports = isPlainObject;
    }
  });

  // node_modules/redux/node_modules/symbol-observable/lib/ponyfill.js
  var require_ponyfill = __commonJS({
    "node_modules/redux/node_modules/symbol-observable/lib/ponyfill.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = symbolObservablePonyfill;
      function symbolObservablePonyfill(root) {
        var result;
        var _Symbol = root.Symbol;
        if (typeof _Symbol === "function") {
          if (_Symbol.observable) {
            result = _Symbol.observable;
          } else {
            result = _Symbol("observable");
            _Symbol.observable = result;
          }
        } else {
          result = "@@observable";
        }
        return result;
      }
    }
  });

  // node_modules/redux/node_modules/symbol-observable/lib/index.js
  var require_lib = __commonJS({
    "node_modules/redux/node_modules/symbol-observable/lib/index.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _ponyfill = require_ponyfill();
      var _ponyfill2 = _interopRequireDefault(_ponyfill);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var root;
      if (typeof self !== "undefined") {
        root = self;
      } else if (typeof window !== "undefined") {
        root = window;
      } else if (typeof global !== "undefined") {
        root = global;
      } else if (typeof module !== "undefined") {
        root = module;
      } else {
        root = Function("return this")();
      }
      var result = (0, _ponyfill2["default"])(root);
      exports["default"] = result;
    }
  });

  // node_modules/redux/lib/createStore.js
  var require_createStore = __commonJS({
    "node_modules/redux/lib/createStore.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.ActionTypes = void 0;
      exports["default"] = createStore;
      var _isPlainObject = require_isPlainObject();
      var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
      var _symbolObservable = require_lib();
      var _symbolObservable2 = _interopRequireDefault(_symbolObservable);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var ActionTypes = exports.ActionTypes = {
        INIT: "@@redux/INIT"
      };
      function createStore(reducer, preloadedState, enhancer) {
        var _ref2;
        if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
          enhancer = preloadedState;
          preloadedState = void 0;
        }
        if (typeof enhancer !== "undefined") {
          if (typeof enhancer !== "function") {
            throw new Error("Expected the enhancer to be a function.");
          }
          return enhancer(createStore)(reducer, preloadedState);
        }
        if (typeof reducer !== "function") {
          throw new Error("Expected the reducer to be a function.");
        }
        var currentReducer = reducer;
        var currentState = preloadedState;
        var currentListeners = [];
        var nextListeners = currentListeners;
        var isDispatching = false;
        function ensureCanMutateNextListeners() {
          if (nextListeners === currentListeners) {
            nextListeners = currentListeners.slice();
          }
        }
        function getState() {
          return currentState;
        }
        function subscribe(listener) {
          if (typeof listener !== "function") {
            throw new Error("Expected listener to be a function.");
          }
          var isSubscribed = true;
          ensureCanMutateNextListeners();
          nextListeners.push(listener);
          return function unsubscribe() {
            if (!isSubscribed) {
              return;
            }
            isSubscribed = false;
            ensureCanMutateNextListeners();
            var index = nextListeners.indexOf(listener);
            nextListeners.splice(index, 1);
          };
        }
        function dispatch(action) {
          if (!(0, _isPlainObject2["default"])(action)) {
            throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
          }
          if (typeof action.type === "undefined") {
            throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
          }
          if (isDispatching) {
            throw new Error("Reducers may not dispatch actions.");
          }
          try {
            isDispatching = true;
            currentState = currentReducer(currentState, action);
          } finally {
            isDispatching = false;
          }
          var listeners = currentListeners = nextListeners;
          for (var i = 0; i < listeners.length; i++) {
            listeners[i]();
          }
          return action;
        }
        function replaceReducer(nextReducer) {
          if (typeof nextReducer !== "function") {
            throw new Error("Expected the nextReducer to be a function.");
          }
          currentReducer = nextReducer;
          dispatch({ type: ActionTypes.INIT });
        }
        function observable() {
          var _ref;
          var outerSubscribe = subscribe;
          return _ref = {
            /**
             * The minimal observable subscription method.
             * @param {Object} observer Any object that can be used as an observer.
             * The observer object should have a `next` method.
             * @returns {subscription} An object with an `unsubscribe` method that can
             * be used to unsubscribe the observable from the store, and prevent further
             * emission of values from the observable.
             */
            subscribe: function subscribe2(observer) {
              if (typeof observer !== "object") {
                throw new TypeError("Expected the observer to be an object.");
              }
              function observeState() {
                if (observer.next) {
                  observer.next(getState());
                }
              }
              observeState();
              var unsubscribe = outerSubscribe(observeState);
              return { unsubscribe };
            }
          }, _ref[_symbolObservable2["default"]] = function() {
            return this;
          }, _ref;
        }
        dispatch({ type: ActionTypes.INIT });
        return _ref2 = {
          dispatch,
          subscribe,
          getState,
          replaceReducer
        }, _ref2[_symbolObservable2["default"]] = observable, _ref2;
      }
    }
  });

  // node_modules/redux/lib/utils/warning.js
  var require_warning = __commonJS({
    "node_modules/redux/lib/utils/warning.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = warning;
      function warning(message) {
        if (typeof console !== "undefined" && typeof console.error === "function") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (e) {
        }
      }
    }
  });

  // node_modules/redux/lib/combineReducers.js
  var require_combineReducers = __commonJS({
    "node_modules/redux/lib/combineReducers.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = combineReducers2;
      var _createStore = require_createStore();
      var _isPlainObject = require_isPlainObject();
      var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
      var _warning = require_warning();
      var _warning2 = _interopRequireDefault(_warning);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      function getUndefinedStateErrorMessage(key, action) {
        var actionType = action && action.type;
        var actionName = actionType && '"' + actionType.toString() + '"' || "an action";
        return "Given action " + actionName + ', reducer "' + key + '" returned undefined. To ignore an action, you must explicitly return the previous state.';
      }
      function assertReducerSanity(reducers) {
        Object.keys(reducers).forEach(function(key) {
          var reducer = reducers[key];
          var initialState4 = reducer(void 0, { type: _createStore.ActionTypes.INIT });
          if (typeof initialState4 === "undefined") {
            throw new Error('Reducer "' + key + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
          }
          var type = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
          if (typeof reducer(void 0, { type }) === "undefined") {
            throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.");
          }
        });
      }
      function combineReducers2(reducers) {
        var reducerKeys = Object.keys(reducers);
        var finalReducers = {};
        for (var i = 0; i < reducerKeys.length; i++) {
          var key = reducerKeys[i];
          if (false) {
            if (typeof reducers[key] === "undefined") {
              (0, _warning2["default"])('No reducer provided for key "' + key + '"');
            }
          }
          if (typeof reducers[key] === "function") {
            finalReducers[key] = reducers[key];
          }
        }
        var finalReducerKeys = Object.keys(finalReducers);
        if (false) {
          var unexpectedKeyCache = {};
        }
        var sanityError;
        try {
          assertReducerSanity(finalReducers);
        } catch (e) {
          sanityError = e;
        }
        return function combination() {
          var state = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
          var action = arguments[1];
          if (sanityError) {
            throw sanityError;
          }
          if (false) {
            var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
            if (warningMessage) {
              (0, _warning2["default"])(warningMessage);
            }
          }
          var hasChanged = false;
          var nextState = {};
          for (var i2 = 0; i2 < finalReducerKeys.length; i2++) {
            var key2 = finalReducerKeys[i2];
            var reducer = finalReducers[key2];
            var previousStateForKey = state[key2];
            var nextStateForKey = reducer(previousStateForKey, action);
            if (typeof nextStateForKey === "undefined") {
              var errorMessage = getUndefinedStateErrorMessage(key2, action);
              throw new Error(errorMessage);
            }
            nextState[key2] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
          }
          return hasChanged ? nextState : state;
        };
      }
    }
  });

  // node_modules/redux/lib/bindActionCreators.js
  var require_bindActionCreators = __commonJS({
    "node_modules/redux/lib/bindActionCreators.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = bindActionCreators;
      function bindActionCreator(actionCreator, dispatch) {
        return function() {
          return dispatch(actionCreator.apply(void 0, arguments));
        };
      }
      function bindActionCreators(actionCreators, dispatch) {
        if (typeof actionCreators === "function") {
          return bindActionCreator(actionCreators, dispatch);
        }
        if (typeof actionCreators !== "object" || actionCreators === null) {
          throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? "null" : typeof actionCreators) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
        }
        var keys = Object.keys(actionCreators);
        var boundActionCreators = {};
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          var actionCreator = actionCreators[key];
          if (typeof actionCreator === "function") {
            boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
          }
        }
        return boundActionCreators;
      }
    }
  });

  // node_modules/redux/lib/compose.js
  var require_compose = __commonJS({
    "node_modules/redux/lib/compose.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = compose;
      function compose() {
        for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
          funcs[_key] = arguments[_key];
        }
        if (funcs.length === 0) {
          return function(arg) {
            return arg;
          };
        }
        if (funcs.length === 1) {
          return funcs[0];
        }
        var last = funcs[funcs.length - 1];
        var rest = funcs.slice(0, -1);
        return function() {
          return rest.reduceRight(function(composed, f) {
            return f(composed);
          }, last.apply(void 0, arguments));
        };
      }
    }
  });

  // node_modules/redux/lib/applyMiddleware.js
  var require_applyMiddleware = __commonJS({
    "node_modules/redux/lib/applyMiddleware.js"(exports) {
      "use strict";
      exports.__esModule = true;
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      exports["default"] = applyMiddleware;
      var _compose = require_compose();
      var _compose2 = _interopRequireDefault(_compose);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      function applyMiddleware() {
        for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
          middlewares[_key] = arguments[_key];
        }
        return function(createStore) {
          return function(reducer, preloadedState, enhancer) {
            var store = createStore(reducer, preloadedState, enhancer);
            var _dispatch = store.dispatch;
            var chain = [];
            var middlewareAPI = {
              getState: store.getState,
              dispatch: function dispatch(action) {
                return _dispatch(action);
              }
            };
            chain = middlewares.map(function(middleware) {
              return middleware(middlewareAPI);
            });
            _dispatch = _compose2["default"].apply(void 0, chain)(store.dispatch);
            return _extends({}, store, {
              dispatch: _dispatch
            });
          };
        };
      }
    }
  });

  // node_modules/redux/lib/index.js
  var require_lib2 = __commonJS({
    "node_modules/redux/lib/index.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = void 0;
      var _createStore = require_createStore();
      var _createStore2 = _interopRequireDefault(_createStore);
      var _combineReducers = require_combineReducers();
      var _combineReducers2 = _interopRequireDefault(_combineReducers);
      var _bindActionCreators = require_bindActionCreators();
      var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);
      var _applyMiddleware = require_applyMiddleware();
      var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
      var _compose = require_compose();
      var _compose2 = _interopRequireDefault(_compose);
      var _warning = require_warning();
      var _warning2 = _interopRequireDefault(_warning);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      if (false) {
        (0, _warning2["default"])("You are currently using minified code outside of NODE_ENV === 'production'. This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) to ensure you have the correct code for your production build.");
      }
      exports.createStore = _createStore2["default"];
      exports.combineReducers = _combineReducers2["default"];
      exports.bindActionCreators = _bindActionCreators2["default"];
      exports.applyMiddleware = _applyMiddleware2["default"];
      exports.compose = _compose2["default"];
    }
  });

  // packages/systems/ix2/shared-constants/trigger-events.ts
  var EventTypeConsts, EventAppliesTo, EventBasedOn, EventContinuousMouseAxes, EventLimitAffectedElements, QuickEffectIds, QuickEffectDirectionConsts;
  var init_trigger_events = __esm({
    "packages/systems/ix2/shared-constants/trigger-events.ts"() {
      "use strict";
      EventTypeConsts = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL"
      };
      EventAppliesTo = {
        ELEMENT: "ELEMENT",
        CLASS: "CLASS",
        PAGE: "PAGE"
      };
      EventBasedOn = {
        ELEMENT: "ELEMENT",
        VIEWPORT: "VIEWPORT"
      };
      EventContinuousMouseAxes = {
        X_AXIS: "X_AXIS",
        Y_AXIS: "Y_AXIS"
      };
      EventLimitAffectedElements = {
        CHILDREN: "CHILDREN",
        SIBLINGS: "SIBLINGS",
        IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
      };
      QuickEffectIds = {
        FADE_EFFECT: "FADE_EFFECT",
        SLIDE_EFFECT: "SLIDE_EFFECT",
        GROW_EFFECT: "GROW_EFFECT",
        SHRINK_EFFECT: "SHRINK_EFFECT",
        SPIN_EFFECT: "SPIN_EFFECT",
        FLY_EFFECT: "FLY_EFFECT",
        POP_EFFECT: "POP_EFFECT",
        FLIP_EFFECT: "FLIP_EFFECT",
        JIGGLE_EFFECT: "JIGGLE_EFFECT",
        PULSE_EFFECT: "PULSE_EFFECT",
        DROP_EFFECT: "DROP_EFFECT",
        BLINK_EFFECT: "BLINK_EFFECT",
        BOUNCE_EFFECT: "BOUNCE_EFFECT",
        FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
        FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
        RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
        JELLO_EFFECT: "JELLO_EFFECT",
        GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
        SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
        PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
      };
      QuickEffectDirectionConsts = {
        LEFT: "LEFT",
        RIGHT: "RIGHT",
        BOTTOM: "BOTTOM",
        TOP: "TOP",
        BOTTOM_LEFT: "BOTTOM_LEFT",
        BOTTOM_RIGHT: "BOTTOM_RIGHT",
        TOP_RIGHT: "TOP_RIGHT",
        TOP_LEFT: "TOP_LEFT",
        CLOCKWISE: "CLOCKWISE",
        COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
      };
    }
  });

  // packages/systems/ix2/shared-constants/animation-actions.ts
  var ActionTypeConsts, ActionAppliesTo;
  var init_animation_actions = __esm({
    "packages/systems/ix2/shared-constants/animation-actions.ts"() {
      "use strict";
      ActionTypeConsts = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        // TODO: Clean these up below because they're not used at this time
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
      };
      ActionAppliesTo = {
        ELEMENT: "ELEMENT",
        ELEMENT_CLASS: "ELEMENT_CLASS",
        TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
      };
    }
  });

  // packages/systems/ix2/shared-constants/trigger-interactions.ts
  var InteractionTypeConsts;
  var init_trigger_interactions = __esm({
    "packages/systems/ix2/shared-constants/trigger-interactions.ts"() {
      "use strict";
      InteractionTypeConsts = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION"
      };
    }
  });

  // packages/systems/ix2/shared-constants/reduced-motion.ts
  var TRANSFORM_MOVE, TRANSFORM_SCALE, TRANSFORM_ROTATE, TRANSFORM_SKEW, STYLE_SIZE, STYLE_FILTER, STYLE_FONT_VARIATION, ReducedMotionTypes;
  var init_reduced_motion = __esm({
    "packages/systems/ix2/shared-constants/reduced-motion.ts"() {
      "use strict";
      init_animation_actions();
      ({
        TRANSFORM_MOVE,
        TRANSFORM_SCALE,
        TRANSFORM_ROTATE,
        TRANSFORM_SKEW,
        STYLE_SIZE,
        STYLE_FILTER,
        STYLE_FONT_VARIATION
      } = ActionTypeConsts);
      ReducedMotionTypes = {
        [TRANSFORM_MOVE]: true,
        [TRANSFORM_SCALE]: true,
        [TRANSFORM_ROTATE]: true,
        [TRANSFORM_SKEW]: true,
        [STYLE_SIZE]: true,
        [STYLE_FILTER]: true,
        [STYLE_FONT_VARIATION]: true
      };
    }
  });

  // packages/systems/ix2/shared-constants/IX2EngineActionTypes.ts
  var IX2EngineActionTypes_exports = {};
  __export(IX2EngineActionTypes_exports, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => IX2_ACTION_LIST_PLAYBACK_CHANGED,
    IX2_ANIMATION_FRAME_CHANGED: () => IX2_ANIMATION_FRAME_CHANGED,
    IX2_CLEAR_REQUESTED: () => IX2_CLEAR_REQUESTED,
    IX2_ELEMENT_STATE_CHANGED: () => IX2_ELEMENT_STATE_CHANGED,
    IX2_EVENT_LISTENER_ADDED: () => IX2_EVENT_LISTENER_ADDED,
    IX2_EVENT_STATE_CHANGED: () => IX2_EVENT_STATE_CHANGED,
    IX2_INSTANCE_ADDED: () => IX2_INSTANCE_ADDED,
    IX2_INSTANCE_REMOVED: () => IX2_INSTANCE_REMOVED,
    IX2_INSTANCE_STARTED: () => IX2_INSTANCE_STARTED,
    IX2_MEDIA_QUERIES_DEFINED: () => IX2_MEDIA_QUERIES_DEFINED,
    IX2_PARAMETER_CHANGED: () => IX2_PARAMETER_CHANGED,
    IX2_PLAYBACK_REQUESTED: () => IX2_PLAYBACK_REQUESTED,
    IX2_PREVIEW_REQUESTED: () => IX2_PREVIEW_REQUESTED,
    IX2_RAW_DATA_IMPORTED: () => IX2_RAW_DATA_IMPORTED,
    IX2_SESSION_INITIALIZED: () => IX2_SESSION_INITIALIZED,
    IX2_SESSION_STARTED: () => IX2_SESSION_STARTED,
    IX2_SESSION_STOPPED: () => IX2_SESSION_STOPPED,
    IX2_STOP_REQUESTED: () => IX2_STOP_REQUESTED,
    IX2_TEST_FRAME_RENDERED: () => IX2_TEST_FRAME_RENDERED,
    IX2_VIEWPORT_WIDTH_CHANGED: () => IX2_VIEWPORT_WIDTH_CHANGED
  });
  var IX2_RAW_DATA_IMPORTED, IX2_SESSION_INITIALIZED, IX2_SESSION_STARTED, IX2_SESSION_STOPPED, IX2_PREVIEW_REQUESTED, IX2_PLAYBACK_REQUESTED, IX2_STOP_REQUESTED, IX2_CLEAR_REQUESTED, IX2_EVENT_LISTENER_ADDED, IX2_EVENT_STATE_CHANGED, IX2_ANIMATION_FRAME_CHANGED, IX2_PARAMETER_CHANGED, IX2_INSTANCE_ADDED, IX2_INSTANCE_STARTED, IX2_INSTANCE_REMOVED, IX2_ELEMENT_STATE_CHANGED, IX2_ACTION_LIST_PLAYBACK_CHANGED, IX2_VIEWPORT_WIDTH_CHANGED, IX2_MEDIA_QUERIES_DEFINED, IX2_TEST_FRAME_RENDERED;
  var init_IX2EngineActionTypes = __esm({
    "packages/systems/ix2/shared-constants/IX2EngineActionTypes.ts"() {
      "use strict";
      IX2_RAW_DATA_IMPORTED = "IX2_RAW_DATA_IMPORTED";
      IX2_SESSION_INITIALIZED = "IX2_SESSION_INITIALIZED";
      IX2_SESSION_STARTED = "IX2_SESSION_STARTED";
      IX2_SESSION_STOPPED = "IX2_SESSION_STOPPED";
      IX2_PREVIEW_REQUESTED = "IX2_PREVIEW_REQUESTED";
      IX2_PLAYBACK_REQUESTED = "IX2_PLAYBACK_REQUESTED";
      IX2_STOP_REQUESTED = "IX2_STOP_REQUESTED";
      IX2_CLEAR_REQUESTED = "IX2_CLEAR_REQUESTED";
      IX2_EVENT_LISTENER_ADDED = "IX2_EVENT_LISTENER_ADDED";
      IX2_EVENT_STATE_CHANGED = "IX2_EVENT_STATE_CHANGED";
      IX2_ANIMATION_FRAME_CHANGED = "IX2_ANIMATION_FRAME_CHANGED";
      IX2_PARAMETER_CHANGED = "IX2_PARAMETER_CHANGED";
      IX2_INSTANCE_ADDED = "IX2_INSTANCE_ADDED";
      IX2_INSTANCE_STARTED = "IX2_INSTANCE_STARTED";
      IX2_INSTANCE_REMOVED = "IX2_INSTANCE_REMOVED";
      IX2_ELEMENT_STATE_CHANGED = "IX2_ELEMENT_STATE_CHANGED";
      IX2_ACTION_LIST_PLAYBACK_CHANGED = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
      IX2_VIEWPORT_WIDTH_CHANGED = "IX2_VIEWPORT_WIDTH_CHANGED";
      IX2_MEDIA_QUERIES_DEFINED = "IX2_MEDIA_QUERIES_DEFINED";
      IX2_TEST_FRAME_RENDERED = "IX2_TEST_FRAME_RENDERED";
    }
  });

  // packages/systems/ix2/shared-constants/IX2EngineConstants.ts
  var IX2EngineConstants_exports = {};
  __export(IX2EngineConstants_exports, {
    ABSTRACT_NODE: () => ABSTRACT_NODE,
    AUTO: () => AUTO,
    BACKGROUND: () => BACKGROUND,
    BACKGROUND_COLOR: () => BACKGROUND_COLOR,
    BAR_DELIMITER: () => BAR_DELIMITER,
    BORDER_COLOR: () => BORDER_COLOR,
    BOUNDARY_SELECTOR: () => BOUNDARY_SELECTOR,
    CHILDREN: () => CHILDREN,
    COLON_DELIMITER: () => COLON_DELIMITER,
    COLOR: () => COLOR,
    COMMA_DELIMITER: () => COMMA_DELIMITER,
    CONFIG_UNIT: () => CONFIG_UNIT,
    CONFIG_VALUE: () => CONFIG_VALUE,
    CONFIG_X_UNIT: () => CONFIG_X_UNIT,
    CONFIG_X_VALUE: () => CONFIG_X_VALUE,
    CONFIG_Y_UNIT: () => CONFIG_Y_UNIT,
    CONFIG_Y_VALUE: () => CONFIG_Y_VALUE,
    CONFIG_Z_UNIT: () => CONFIG_Z_UNIT,
    CONFIG_Z_VALUE: () => CONFIG_Z_VALUE,
    DISPLAY: () => DISPLAY,
    FILTER: () => FILTER,
    FLEX: () => FLEX,
    FONT_VARIATION_SETTINGS: () => FONT_VARIATION_SETTINGS,
    HEIGHT: () => HEIGHT,
    HTML_ELEMENT: () => HTML_ELEMENT,
    IMMEDIATE_CHILDREN: () => IMMEDIATE_CHILDREN,
    IX2_ID_DELIMITER: () => IX2_ID_DELIMITER,
    OPACITY: () => OPACITY,
    PARENT: () => PARENT,
    PLAIN_OBJECT: () => PLAIN_OBJECT,
    PRESERVE_3D: () => PRESERVE_3D,
    RENDER_GENERAL: () => RENDER_GENERAL,
    RENDER_PLUGIN: () => RENDER_PLUGIN,
    RENDER_STYLE: () => RENDER_STYLE,
    RENDER_TRANSFORM: () => RENDER_TRANSFORM,
    ROTATE_X: () => ROTATE_X,
    ROTATE_Y: () => ROTATE_Y,
    ROTATE_Z: () => ROTATE_Z,
    SCALE_3D: () => SCALE_3D,
    SCALE_X: () => SCALE_X,
    SCALE_Y: () => SCALE_Y,
    SCALE_Z: () => SCALE_Z,
    SIBLINGS: () => SIBLINGS,
    SKEW: () => SKEW,
    SKEW_X: () => SKEW_X,
    SKEW_Y: () => SKEW_Y,
    TRANSFORM: () => TRANSFORM,
    TRANSLATE_3D: () => TRANSLATE_3D,
    TRANSLATE_X: () => TRANSLATE_X,
    TRANSLATE_Y: () => TRANSLATE_Y,
    TRANSLATE_Z: () => TRANSLATE_Z,
    WF_PAGE: () => WF_PAGE,
    WIDTH: () => WIDTH,
    WILL_CHANGE: () => WILL_CHANGE,
    W_MOD_IX: () => W_MOD_IX,
    W_MOD_JS: () => W_MOD_JS
  });
  var IX2_ID_DELIMITER, WF_PAGE, W_MOD_JS, W_MOD_IX, BOUNDARY_SELECTOR, CONFIG_X_VALUE, CONFIG_Y_VALUE, CONFIG_Z_VALUE, CONFIG_VALUE, CONFIG_X_UNIT, CONFIG_Y_UNIT, CONFIG_Z_UNIT, CONFIG_UNIT, TRANSFORM, TRANSLATE_X, TRANSLATE_Y, TRANSLATE_Z, TRANSLATE_3D, SCALE_X, SCALE_Y, SCALE_Z, SCALE_3D, ROTATE_X, ROTATE_Y, ROTATE_Z, SKEW, SKEW_X, SKEW_Y, OPACITY, FILTER, FONT_VARIATION_SETTINGS, WIDTH, HEIGHT, BACKGROUND_COLOR, BACKGROUND, BORDER_COLOR, COLOR, DISPLAY, FLEX, WILL_CHANGE, AUTO, COMMA_DELIMITER, COLON_DELIMITER, BAR_DELIMITER, CHILDREN, IMMEDIATE_CHILDREN, SIBLINGS, PARENT, PRESERVE_3D, HTML_ELEMENT, PLAIN_OBJECT, ABSTRACT_NODE, RENDER_TRANSFORM, RENDER_GENERAL, RENDER_STYLE, RENDER_PLUGIN;
  var init_IX2EngineConstants = __esm({
    "packages/systems/ix2/shared-constants/IX2EngineConstants.ts"() {
      "use strict";
      IX2_ID_DELIMITER = "|";
      WF_PAGE = "data-wf-page";
      W_MOD_JS = "w-mod-js";
      W_MOD_IX = "w-mod-ix";
      BOUNDARY_SELECTOR = ".w-dyn-item";
      CONFIG_X_VALUE = "xValue";
      CONFIG_Y_VALUE = "yValue";
      CONFIG_Z_VALUE = "zValue";
      CONFIG_VALUE = "value";
      CONFIG_X_UNIT = "xUnit";
      CONFIG_Y_UNIT = "yUnit";
      CONFIG_Z_UNIT = "zUnit";
      CONFIG_UNIT = "unit";
      TRANSFORM = "transform";
      TRANSLATE_X = "translateX";
      TRANSLATE_Y = "translateY";
      TRANSLATE_Z = "translateZ";
      TRANSLATE_3D = "translate3d";
      SCALE_X = "scaleX";
      SCALE_Y = "scaleY";
      SCALE_Z = "scaleZ";
      SCALE_3D = "scale3d";
      ROTATE_X = "rotateX";
      ROTATE_Y = "rotateY";
      ROTATE_Z = "rotateZ";
      SKEW = "skew";
      SKEW_X = "skewX";
      SKEW_Y = "skewY";
      OPACITY = "opacity";
      FILTER = "filter";
      FONT_VARIATION_SETTINGS = "font-variation-settings";
      WIDTH = "width";
      HEIGHT = "height";
      BACKGROUND_COLOR = "backgroundColor";
      BACKGROUND = "background";
      BORDER_COLOR = "borderColor";
      COLOR = "color";
      DISPLAY = "display";
      FLEX = "flex";
      WILL_CHANGE = "willChange";
      AUTO = "AUTO";
      COMMA_DELIMITER = ",";
      COLON_DELIMITER = ":";
      BAR_DELIMITER = "|";
      CHILDREN = "CHILDREN";
      IMMEDIATE_CHILDREN = "IMMEDIATE_CHILDREN";
      SIBLINGS = "SIBLINGS";
      PARENT = "PARENT";
      PRESERVE_3D = "preserve-3d";
      HTML_ELEMENT = "HTML_ELEMENT";
      PLAIN_OBJECT = "PLAIN_OBJECT";
      ABSTRACT_NODE = "ABSTRACT_NODE";
      RENDER_TRANSFORM = "RENDER_TRANSFORM";
      RENDER_GENERAL = "RENDER_GENERAL";
      RENDER_STYLE = "RENDER_STYLE";
      RENDER_PLUGIN = "RENDER_PLUGIN";
    }
  });

  // packages/systems/ix2/shared-constants/index.ts
  var shared_constants_exports = {};
  __export(shared_constants_exports, {
    ActionAppliesTo: () => ActionAppliesTo,
    ActionTypeConsts: () => ActionTypeConsts,
    EventAppliesTo: () => EventAppliesTo,
    EventBasedOn: () => EventBasedOn,
    EventContinuousMouseAxes: () => EventContinuousMouseAxes,
    EventLimitAffectedElements: () => EventLimitAffectedElements,
    EventTypeConsts: () => EventTypeConsts,
    IX2EngineActionTypes: () => IX2EngineActionTypes_exports,
    IX2EngineConstants: () => IX2EngineConstants_exports,
    InteractionTypeConsts: () => InteractionTypeConsts,
    QuickEffectDirectionConsts: () => QuickEffectDirectionConsts,
    QuickEffectIds: () => QuickEffectIds,
    ReducedMotionTypes: () => ReducedMotionTypes
  });
  var init_shared_constants = __esm({
    "packages/systems/ix2/shared-constants/index.ts"() {
      "use strict";
      init_trigger_events();
      init_animation_actions();
      init_trigger_interactions();
      init_reduced_motion();
      init_IX2EngineActionTypes();
      init_IX2EngineConstants();
      init_animation_actions();
      init_trigger_events();
    }
  });

  // packages/systems/ix2/engine/reducers/IX2DataReducer.ts
  var IX2_RAW_DATA_IMPORTED2, ixData;
  var init_IX2DataReducer = __esm({
    "packages/systems/ix2/engine/reducers/IX2DataReducer.ts"() {
      "use strict";
      init_shared_constants();
      ({ IX2_RAW_DATA_IMPORTED: IX2_RAW_DATA_IMPORTED2 } = IX2EngineActionTypes_exports);
      ixData = (state = Object.freeze({}), action) => {
        switch (action.type) {
          case IX2_RAW_DATA_IMPORTED2: {
            return action.payload.ixData || Object.freeze({});
          }
          default: {
            return state;
          }
        }
      };
    }
  });

  // node_modules/timm/lib/timm.js
  var require_timm = __commonJS({
    "node_modules/timm/lib/timm.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
      } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      exports.clone = clone;
      exports.addLast = addLast2;
      exports.addFirst = addFirst;
      exports.removeLast = removeLast;
      exports.removeFirst = removeFirst;
      exports.insert = insert;
      exports.removeAt = removeAt;
      exports.replaceAt = replaceAt;
      exports.getIn = getIn2;
      exports.set = set3;
      exports.setIn = setIn4;
      exports.update = update;
      exports.updateIn = updateIn;
      exports.merge = merge3;
      exports.mergeDeep = mergeDeep;
      exports.mergeIn = mergeIn4;
      exports.omit = omit;
      exports.addDefaults = addDefaults;
      var INVALID_ARGS = "INVALID_ARGS";
      function throwStr(msg) {
        throw new Error(msg);
      }
      function getKeysAndSymbols(obj) {
        var keys = Object.keys(obj);
        if (Object.getOwnPropertySymbols) {
          return keys.concat(Object.getOwnPropertySymbols(obj));
        }
        return keys;
      }
      var hasOwnProperty = {}.hasOwnProperty;
      function clone(obj) {
        if (Array.isArray(obj))
          return obj.slice();
        var keys = getKeysAndSymbols(obj);
        var out = {};
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          out[key] = obj[key];
        }
        return out;
      }
      function doMerge(fAddDefaults, fDeep, first) {
        var out = first;
        !(out != null) && throwStr(false ? "At least one object should be provided to merge()" : INVALID_ARGS);
        var fChanged = false;
        for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
          rest[_key - 3] = arguments[_key];
        }
        for (var idx = 0; idx < rest.length; idx++) {
          var obj = rest[idx];
          if (obj == null)
            continue;
          var keys = getKeysAndSymbols(obj);
          if (!keys.length)
            continue;
          for (var j = 0; j <= keys.length; j++) {
            var key = keys[j];
            if (fAddDefaults && out[key] !== void 0)
              continue;
            var nextVal = obj[key];
            if (fDeep && isObject(out[key]) && isObject(nextVal)) {
              nextVal = doMerge(fAddDefaults, fDeep, out[key], nextVal);
            }
            if (nextVal === void 0 || nextVal === out[key])
              continue;
            if (!fChanged) {
              fChanged = true;
              out = clone(out);
            }
            out[key] = nextVal;
          }
        }
        return out;
      }
      function isObject(o) {
        var type = typeof o === "undefined" ? "undefined" : _typeof(o);
        return o != null && (type === "object" || type === "function");
      }
      function addLast2(array, val) {
        if (Array.isArray(val))
          return array.concat(val);
        return array.concat([val]);
      }
      function addFirst(array, val) {
        if (Array.isArray(val))
          return val.concat(array);
        return [val].concat(array);
      }
      function removeLast(array) {
        if (!array.length)
          return array;
        return array.slice(0, array.length - 1);
      }
      function removeFirst(array) {
        if (!array.length)
          return array;
        return array.slice(1);
      }
      function insert(array, idx, val) {
        return array.slice(0, idx).concat(Array.isArray(val) ? val : [val]).concat(array.slice(idx));
      }
      function removeAt(array, idx) {
        if (idx >= array.length || idx < 0)
          return array;
        return array.slice(0, idx).concat(array.slice(idx + 1));
      }
      function replaceAt(array, idx, newItem) {
        if (array[idx] === newItem)
          return array;
        var len = array.length;
        var result = Array(len);
        for (var i = 0; i < len; i++) {
          result[i] = array[i];
        }
        result[idx] = newItem;
        return result;
      }
      function getIn2(obj, path) {
        !Array.isArray(path) && throwStr(false ? "A path array should be provided when calling getIn()" : INVALID_ARGS);
        if (obj == null)
          return void 0;
        var ptr = obj;
        for (var i = 0; i < path.length; i++) {
          var key = path[i];
          ptr = ptr != null ? ptr[key] : void 0;
          if (ptr === void 0)
            return ptr;
        }
        return ptr;
      }
      function set3(obj, key, val) {
        var fallback = typeof key === "number" ? [] : {};
        var finalObj = obj == null ? fallback : obj;
        if (finalObj[key] === val)
          return finalObj;
        var obj2 = clone(finalObj);
        obj2[key] = val;
        return obj2;
      }
      function doSetIn(obj, path, val, idx) {
        var newValue = void 0;
        var key = path[idx];
        if (idx === path.length - 1) {
          newValue = val;
        } else {
          var nestedObj = isObject(obj) && isObject(obj[key]) ? obj[key] : typeof path[idx + 1] === "number" ? [] : {};
          newValue = doSetIn(nestedObj, path, val, idx + 1);
        }
        return set3(obj, key, newValue);
      }
      function setIn4(obj, path, val) {
        if (!path.length)
          return val;
        return doSetIn(obj, path, val, 0);
      }
      function update(obj, key, fnUpdate) {
        var prevVal = obj == null ? void 0 : obj[key];
        var nextVal = fnUpdate(prevVal);
        return set3(obj, key, nextVal);
      }
      function updateIn(obj, path, fnUpdate) {
        var prevVal = getIn2(obj, path);
        var nextVal = fnUpdate(prevVal);
        return setIn4(obj, path, nextVal);
      }
      function merge3(a, b, c, d, e, f) {
        for (var _len2 = arguments.length, rest = Array(_len2 > 6 ? _len2 - 6 : 0), _key2 = 6; _key2 < _len2; _key2++) {
          rest[_key2 - 6] = arguments[_key2];
        }
        return rest.length ? doMerge.call.apply(doMerge, [null, false, false, a, b, c, d, e, f].concat(rest)) : doMerge(false, false, a, b, c, d, e, f);
      }
      function mergeDeep(a, b, c, d, e, f) {
        for (var _len3 = arguments.length, rest = Array(_len3 > 6 ? _len3 - 6 : 0), _key3 = 6; _key3 < _len3; _key3++) {
          rest[_key3 - 6] = arguments[_key3];
        }
        return rest.length ? doMerge.call.apply(doMerge, [null, false, true, a, b, c, d, e, f].concat(rest)) : doMerge(false, true, a, b, c, d, e, f);
      }
      function mergeIn4(a, path, b, c, d, e, f) {
        var prevVal = getIn2(a, path);
        if (prevVal == null)
          prevVal = {};
        var nextVal = void 0;
        for (var _len4 = arguments.length, rest = Array(_len4 > 7 ? _len4 - 7 : 0), _key4 = 7; _key4 < _len4; _key4++) {
          rest[_key4 - 7] = arguments[_key4];
        }
        if (rest.length) {
          nextVal = doMerge.call.apply(doMerge, [null, false, false, prevVal, b, c, d, e, f].concat(rest));
        } else {
          nextVal = doMerge(false, false, prevVal, b, c, d, e, f);
        }
        return setIn4(a, path, nextVal);
      }
      function omit(obj, attrs) {
        var omitList = Array.isArray(attrs) ? attrs : [attrs];
        var fDoSomething = false;
        for (var i = 0; i < omitList.length; i++) {
          if (hasOwnProperty.call(obj, omitList[i])) {
            fDoSomething = true;
            break;
          }
        }
        if (!fDoSomething)
          return obj;
        var out = {};
        var keys = getKeysAndSymbols(obj);
        for (var _i = 0; _i < keys.length; _i++) {
          var key = keys[_i];
          if (omitList.indexOf(key) >= 0)
            continue;
          out[key] = obj[key];
        }
        return out;
      }
      function addDefaults(a, b, c, d, e, f) {
        for (var _len5 = arguments.length, rest = Array(_len5 > 6 ? _len5 - 6 : 0), _key5 = 6; _key5 < _len5; _key5++) {
          rest[_key5 - 6] = arguments[_key5];
        }
        return rest.length ? doMerge.call.apply(doMerge, [null, true, false, a, b, c, d, e, f].concat(rest)) : doMerge(true, false, a, b, c, d, e, f);
      }
      var timm = {
        clone,
        addLast: addLast2,
        addFirst,
        removeLast,
        removeFirst,
        insert,
        removeAt,
        replaceAt,
        getIn: getIn2,
        // eslint-disable-next-line object-shorthand
        set: set3,
        // so that flow doesn't complain
        setIn: setIn4,
        update,
        updateIn,
        merge: merge3,
        mergeDeep,
        mergeIn: mergeIn4,
        omit,
        addDefaults
      };
      exports.default = timm;
    }
  });

  // packages/systems/ix2/engine/reducers/IX2RequestReducer.ts
  var import_timm, IX2_PREVIEW_REQUESTED2, IX2_PLAYBACK_REQUESTED2, IX2_STOP_REQUESTED2, IX2_CLEAR_REQUESTED2, initialState, stateKeys, ixRequest;
  var init_IX2RequestReducer = __esm({
    "packages/systems/ix2/engine/reducers/IX2RequestReducer.ts"() {
      "use strict";
      init_shared_constants();
      import_timm = __toESM(require_timm());
      ({
        IX2_PREVIEW_REQUESTED: IX2_PREVIEW_REQUESTED2,
        IX2_PLAYBACK_REQUESTED: IX2_PLAYBACK_REQUESTED2,
        IX2_STOP_REQUESTED: IX2_STOP_REQUESTED2,
        IX2_CLEAR_REQUESTED: IX2_CLEAR_REQUESTED2
      } = IX2EngineActionTypes_exports);
      initialState = {
        preview: {},
        playback: {},
        stop: {},
        clear: {}
      };
      stateKeys = Object.create(null, {
        [IX2_PREVIEW_REQUESTED2]: { value: "preview" },
        [IX2_PLAYBACK_REQUESTED2]: { value: "playback" },
        [IX2_STOP_REQUESTED2]: { value: "stop" },
        [IX2_CLEAR_REQUESTED2]: { value: "clear" }
      });
      ixRequest = (state = initialState, action) => {
        if (action.type in stateKeys) {
          const key = [stateKeys[action.type]];
          return (0, import_timm.setIn)(state, [key], { ...action.payload });
        }
        return state;
      };
    }
  });

  // packages/systems/ix2/engine/reducers/IX2SessionReducer.ts
  var import_timm2, IX2_SESSION_INITIALIZED2, IX2_SESSION_STARTED2, IX2_TEST_FRAME_RENDERED2, IX2_SESSION_STOPPED2, IX2_EVENT_LISTENER_ADDED2, IX2_EVENT_STATE_CHANGED2, IX2_ANIMATION_FRAME_CHANGED2, IX2_ACTION_LIST_PLAYBACK_CHANGED2, IX2_VIEWPORT_WIDTH_CHANGED2, IX2_MEDIA_QUERIES_DEFINED2, initialState2, TEST_FRAME_STEPS_SIZE, ixSession;
  var init_IX2SessionReducer = __esm({
    "packages/systems/ix2/engine/reducers/IX2SessionReducer.ts"() {
      "use strict";
      init_shared_constants();
      import_timm2 = __toESM(require_timm());
      ({
        IX2_SESSION_INITIALIZED: IX2_SESSION_INITIALIZED2,
        IX2_SESSION_STARTED: IX2_SESSION_STARTED2,
        IX2_TEST_FRAME_RENDERED: IX2_TEST_FRAME_RENDERED2,
        IX2_SESSION_STOPPED: IX2_SESSION_STOPPED2,
        IX2_EVENT_LISTENER_ADDED: IX2_EVENT_LISTENER_ADDED2,
        IX2_EVENT_STATE_CHANGED: IX2_EVENT_STATE_CHANGED2,
        IX2_ANIMATION_FRAME_CHANGED: IX2_ANIMATION_FRAME_CHANGED2,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: IX2_ACTION_LIST_PLAYBACK_CHANGED2,
        IX2_VIEWPORT_WIDTH_CHANGED: IX2_VIEWPORT_WIDTH_CHANGED2,
        IX2_MEDIA_QUERIES_DEFINED: IX2_MEDIA_QUERIES_DEFINED2
      } = IX2EngineActionTypes_exports);
      initialState2 = {
        active: false,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: false,
        hasDefinedMediaQueries: false,
        reducedMotion: false
      };
      TEST_FRAME_STEPS_SIZE = 20;
      ixSession = (state = initialState2, action) => {
        switch (action.type) {
          case IX2_SESSION_INITIALIZED2: {
            const { hasBoundaryNodes, reducedMotion } = action.payload;
            return (0, import_timm2.merge)(state, {
              hasBoundaryNodes,
              reducedMotion
            });
          }
          case IX2_SESSION_STARTED2: {
            return (0, import_timm2.set)(state, "active", true);
          }
          case IX2_TEST_FRAME_RENDERED2: {
            const {
              payload: { step = TEST_FRAME_STEPS_SIZE }
            } = action;
            return (0, import_timm2.set)(state, "tick", state.tick + step);
          }
          case IX2_SESSION_STOPPED2: {
            return initialState2;
          }
          case IX2_ANIMATION_FRAME_CHANGED2: {
            const {
              payload: { now }
            } = action;
            return (0, import_timm2.set)(state, "tick", now);
          }
          case IX2_EVENT_LISTENER_ADDED2: {
            const eventListeners = (0, import_timm2.addLast)(state.eventListeners, action.payload);
            return (0, import_timm2.set)(state, "eventListeners", eventListeners);
          }
          case IX2_EVENT_STATE_CHANGED2: {
            const { stateKey, newState } = action.payload;
            return (0, import_timm2.setIn)(state, ["eventState", stateKey], newState);
          }
          case IX2_ACTION_LIST_PLAYBACK_CHANGED2: {
            const { actionListId, isPlaying } = action.payload;
            return (0, import_timm2.setIn)(state, ["playbackState", actionListId], isPlaying);
          }
          case IX2_VIEWPORT_WIDTH_CHANGED2: {
            const { width, mediaQueries } = action.payload;
            const mediaQueryCount = mediaQueries.length;
            let mediaQueryKey = null;
            for (let i = 0; i < mediaQueryCount; i++) {
              const { key, min, max } = mediaQueries[i];
              if (width >= min && width <= max) {
                mediaQueryKey = key;
                break;
              }
            }
            return (0, import_timm2.merge)(state, {
              viewportWidth: width,
              mediaQueryKey
            });
          }
          case IX2_MEDIA_QUERIES_DEFINED2: {
            return (0, import_timm2.set)(state, "hasDefinedMediaQueries", true);
          }
          default: {
            return state;
          }
        }
      };
    }
  });

  // node_modules/lodash/_listCacheClear.js
  var require_listCacheClear = __commonJS({
    "node_modules/lodash/_listCacheClear.js"(exports, module) {
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      module.exports = listCacheClear;
    }
  });

  // node_modules/lodash/eq.js
  var require_eq = __commonJS({
    "node_modules/lodash/eq.js"(exports, module) {
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      module.exports = eq;
    }
  });

  // node_modules/lodash/_assocIndexOf.js
  var require_assocIndexOf = __commonJS({
    "node_modules/lodash/_assocIndexOf.js"(exports, module) {
      var eq = require_eq();
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      module.exports = assocIndexOf;
    }
  });

  // node_modules/lodash/_listCacheDelete.js
  var require_listCacheDelete = __commonJS({
    "node_modules/lodash/_listCacheDelete.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      var arrayProto = Array.prototype;
      var splice = arrayProto.splice;
      function listCacheDelete(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        --this.size;
        return true;
      }
      module.exports = listCacheDelete;
    }
  });

  // node_modules/lodash/_listCacheGet.js
  var require_listCacheGet = __commonJS({
    "node_modules/lodash/_listCacheGet.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheGet(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        return index < 0 ? void 0 : data[index][1];
      }
      module.exports = listCacheGet;
    }
  });

  // node_modules/lodash/_listCacheHas.js
  var require_listCacheHas = __commonJS({
    "node_modules/lodash/_listCacheHas.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      module.exports = listCacheHas;
    }
  });

  // node_modules/lodash/_listCacheSet.js
  var require_listCacheSet = __commonJS({
    "node_modules/lodash/_listCacheSet.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheSet(key, value) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      module.exports = listCacheSet;
    }
  });

  // node_modules/lodash/_ListCache.js
  var require_ListCache = __commonJS({
    "node_modules/lodash/_ListCache.js"(exports, module) {
      var listCacheClear = require_listCacheClear();
      var listCacheDelete = require_listCacheDelete();
      var listCacheGet = require_listCacheGet();
      var listCacheHas = require_listCacheHas();
      var listCacheSet = require_listCacheSet();
      function ListCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      module.exports = ListCache;
    }
  });

  // node_modules/lodash/_stackClear.js
  var require_stackClear = __commonJS({
    "node_modules/lodash/_stackClear.js"(exports, module) {
      var ListCache = require_ListCache();
      function stackClear() {
        this.__data__ = new ListCache();
        this.size = 0;
      }
      module.exports = stackClear;
    }
  });

  // node_modules/lodash/_stackDelete.js
  var require_stackDelete = __commonJS({
    "node_modules/lodash/_stackDelete.js"(exports, module) {
      function stackDelete(key) {
        var data = this.__data__, result = data["delete"](key);
        this.size = data.size;
        return result;
      }
      module.exports = stackDelete;
    }
  });

  // node_modules/lodash/_stackGet.js
  var require_stackGet = __commonJS({
    "node_modules/lodash/_stackGet.js"(exports, module) {
      function stackGet(key) {
        return this.__data__.get(key);
      }
      module.exports = stackGet;
    }
  });

  // node_modules/lodash/_stackHas.js
  var require_stackHas = __commonJS({
    "node_modules/lodash/_stackHas.js"(exports, module) {
      function stackHas(key) {
        return this.__data__.has(key);
      }
      module.exports = stackHas;
    }
  });

  // node_modules/lodash/isObject.js
  var require_isObject = __commonJS({
    "node_modules/lodash/isObject.js"(exports, module) {
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      module.exports = isObject;
    }
  });

  // node_modules/lodash/isFunction.js
  var require_isFunction = __commonJS({
    "node_modules/lodash/isFunction.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObject = require_isObject();
      var asyncTag = "[object AsyncFunction]";
      var funcTag = "[object Function]";
      var genTag = "[object GeneratorFunction]";
      var proxyTag = "[object Proxy]";
      function isFunction(value) {
        if (!isObject(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      module.exports = isFunction;
    }
  });

  // node_modules/lodash/_coreJsData.js
  var require_coreJsData = __commonJS({
    "node_modules/lodash/_coreJsData.js"(exports, module) {
      var root = require_root();
      var coreJsData = root["__core-js_shared__"];
      module.exports = coreJsData;
    }
  });

  // node_modules/lodash/_isMasked.js
  var require_isMasked = __commonJS({
    "node_modules/lodash/_isMasked.js"(exports, module) {
      var coreJsData = require_coreJsData();
      var maskSrcKey = function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      module.exports = isMasked;
    }
  });

  // node_modules/lodash/_toSource.js
  var require_toSource = __commonJS({
    "node_modules/lodash/_toSource.js"(exports, module) {
      var funcProto = Function.prototype;
      var funcToString = funcProto.toString;
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      module.exports = toSource;
    }
  });

  // node_modules/lodash/_baseIsNative.js
  var require_baseIsNative = __commonJS({
    "node_modules/lodash/_baseIsNative.js"(exports, module) {
      var isFunction = require_isFunction();
      var isMasked = require_isMasked();
      var isObject = require_isObject();
      var toSource = require_toSource();
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var reIsNative = RegExp(
        "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      module.exports = baseIsNative;
    }
  });

  // node_modules/lodash/_getValue.js
  var require_getValue = __commonJS({
    "node_modules/lodash/_getValue.js"(exports, module) {
      function getValue(object, key) {
        return object == null ? void 0 : object[key];
      }
      module.exports = getValue;
    }
  });

  // node_modules/lodash/_getNative.js
  var require_getNative = __commonJS({
    "node_modules/lodash/_getNative.js"(exports, module) {
      var baseIsNative = require_baseIsNative();
      var getValue = require_getValue();
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : void 0;
      }
      module.exports = getNative;
    }
  });

  // node_modules/lodash/_Map.js
  var require_Map = __commonJS({
    "node_modules/lodash/_Map.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var Map2 = getNative(root, "Map");
      module.exports = Map2;
    }
  });

  // node_modules/lodash/_nativeCreate.js
  var require_nativeCreate = __commonJS({
    "node_modules/lodash/_nativeCreate.js"(exports, module) {
      var getNative = require_getNative();
      var nativeCreate = getNative(Object, "create");
      module.exports = nativeCreate;
    }
  });

  // node_modules/lodash/_hashClear.js
  var require_hashClear = __commonJS({
    "node_modules/lodash/_hashClear.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      module.exports = hashClear;
    }
  });

  // node_modules/lodash/_hashDelete.js
  var require_hashDelete = __commonJS({
    "node_modules/lodash/_hashDelete.js"(exports, module) {
      function hashDelete(key) {
        var result = this.has(key) && delete this.__data__[key];
        this.size -= result ? 1 : 0;
        return result;
      }
      module.exports = hashDelete;
    }
  });

  // node_modules/lodash/_hashGet.js
  var require_hashGet = __commonJS({
    "node_modules/lodash/_hashGet.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result = data[key];
          return result === HASH_UNDEFINED ? void 0 : result;
        }
        return hasOwnProperty.call(data, key) ? data[key] : void 0;
      }
      module.exports = hashGet;
    }
  });

  // node_modules/lodash/_hashHas.js
  var require_hashHas = __commonJS({
    "node_modules/lodash/_hashHas.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
      }
      module.exports = hashHas;
    }
  });

  // node_modules/lodash/_hashSet.js
  var require_hashSet = __commonJS({
    "node_modules/lodash/_hashSet.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
        return this;
      }
      module.exports = hashSet;
    }
  });

  // node_modules/lodash/_Hash.js
  var require_Hash = __commonJS({
    "node_modules/lodash/_Hash.js"(exports, module) {
      var hashClear = require_hashClear();
      var hashDelete = require_hashDelete();
      var hashGet = require_hashGet();
      var hashHas = require_hashHas();
      var hashSet = require_hashSet();
      function Hash(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      module.exports = Hash;
    }
  });

  // node_modules/lodash/_mapCacheClear.js
  var require_mapCacheClear = __commonJS({
    "node_modules/lodash/_mapCacheClear.js"(exports, module) {
      var Hash = require_Hash();
      var ListCache = require_ListCache();
      var Map2 = require_Map();
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map2 || ListCache)(),
          "string": new Hash()
        };
      }
      module.exports = mapCacheClear;
    }
  });

  // node_modules/lodash/_isKeyable.js
  var require_isKeyable = __commonJS({
    "node_modules/lodash/_isKeyable.js"(exports, module) {
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      module.exports = isKeyable;
    }
  });

  // node_modules/lodash/_getMapData.js
  var require_getMapData = __commonJS({
    "node_modules/lodash/_getMapData.js"(exports, module) {
      var isKeyable = require_isKeyable();
      function getMapData(map, key) {
        var data = map.__data__;
        return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      module.exports = getMapData;
    }
  });

  // node_modules/lodash/_mapCacheDelete.js
  var require_mapCacheDelete = __commonJS({
    "node_modules/lodash/_mapCacheDelete.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheDelete(key) {
        var result = getMapData(this, key)["delete"](key);
        this.size -= result ? 1 : 0;
        return result;
      }
      module.exports = mapCacheDelete;
    }
  });

  // node_modules/lodash/_mapCacheGet.js
  var require_mapCacheGet = __commonJS({
    "node_modules/lodash/_mapCacheGet.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      module.exports = mapCacheGet;
    }
  });

  // node_modules/lodash/_mapCacheHas.js
  var require_mapCacheHas = __commonJS({
    "node_modules/lodash/_mapCacheHas.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      module.exports = mapCacheHas;
    }
  });

  // node_modules/lodash/_mapCacheSet.js
  var require_mapCacheSet = __commonJS({
    "node_modules/lodash/_mapCacheSet.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheSet(key, value) {
        var data = getMapData(this, key), size2 = data.size;
        data.set(key, value);
        this.size += data.size == size2 ? 0 : 1;
        return this;
      }
      module.exports = mapCacheSet;
    }
  });

  // node_modules/lodash/_MapCache.js
  var require_MapCache = __commonJS({
    "node_modules/lodash/_MapCache.js"(exports, module) {
      var mapCacheClear = require_mapCacheClear();
      var mapCacheDelete = require_mapCacheDelete();
      var mapCacheGet = require_mapCacheGet();
      var mapCacheHas = require_mapCacheHas();
      var mapCacheSet = require_mapCacheSet();
      function MapCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      module.exports = MapCache;
    }
  });

  // node_modules/lodash/_stackSet.js
  var require_stackSet = __commonJS({
    "node_modules/lodash/_stackSet.js"(exports, module) {
      var ListCache = require_ListCache();
      var Map2 = require_Map();
      var MapCache = require_MapCache();
      var LARGE_ARRAY_SIZE = 200;
      function stackSet(key, value) {
        var data = this.__data__;
        if (data instanceof ListCache) {
          var pairs = data.__data__;
          if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
          }
          data = this.__data__ = new MapCache(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
      }
      module.exports = stackSet;
    }
  });

  // node_modules/lodash/_Stack.js
  var require_Stack = __commonJS({
    "node_modules/lodash/_Stack.js"(exports, module) {
      var ListCache = require_ListCache();
      var stackClear = require_stackClear();
      var stackDelete = require_stackDelete();
      var stackGet = require_stackGet();
      var stackHas = require_stackHas();
      var stackSet = require_stackSet();
      function Stack(entries) {
        var data = this.__data__ = new ListCache(entries);
        this.size = data.size;
      }
      Stack.prototype.clear = stackClear;
      Stack.prototype["delete"] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      module.exports = Stack;
    }
  });

  // node_modules/lodash/_setCacheAdd.js
  var require_setCacheAdd = __commonJS({
    "node_modules/lodash/_setCacheAdd.js"(exports, module) {
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      function setCacheAdd(value) {
        this.__data__.set(value, HASH_UNDEFINED);
        return this;
      }
      module.exports = setCacheAdd;
    }
  });

  // node_modules/lodash/_setCacheHas.js
  var require_setCacheHas = __commonJS({
    "node_modules/lodash/_setCacheHas.js"(exports, module) {
      function setCacheHas(value) {
        return this.__data__.has(value);
      }
      module.exports = setCacheHas;
    }
  });

  // node_modules/lodash/_SetCache.js
  var require_SetCache = __commonJS({
    "node_modules/lodash/_SetCache.js"(exports, module) {
      var MapCache = require_MapCache();
      var setCacheAdd = require_setCacheAdd();
      var setCacheHas = require_setCacheHas();
      function SetCache(values) {
        var index = -1, length = values == null ? 0 : values.length;
        this.__data__ = new MapCache();
        while (++index < length) {
          this.add(values[index]);
        }
      }
      SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
      SetCache.prototype.has = setCacheHas;
      module.exports = SetCache;
    }
  });

  // node_modules/lodash/_arraySome.js
  var require_arraySome = __commonJS({
    "node_modules/lodash/_arraySome.js"(exports, module) {
      function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      module.exports = arraySome;
    }
  });

  // node_modules/lodash/_cacheHas.js
  var require_cacheHas = __commonJS({
    "node_modules/lodash/_cacheHas.js"(exports, module) {
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      module.exports = cacheHas;
    }
  });

  // node_modules/lodash/_equalArrays.js
  var require_equalArrays = __commonJS({
    "node_modules/lodash/_equalArrays.js"(exports, module) {
      var SetCache = require_SetCache();
      var arraySome = require_arraySome();
      var cacheHas = require_cacheHas();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var arrStacked = stack.get(array);
        var othStacked = stack.get(other);
        if (arrStacked && othStacked) {
          return arrStacked == other && othStacked == array;
        }
        var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
        stack.set(array, other);
        stack.set(other, array);
        while (++index < arrLength) {
          var arrValue = array[index], othValue = other[index];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
          }
          if (compared !== void 0) {
            if (compared) {
              continue;
            }
            result = false;
            break;
          }
          if (seen) {
            if (!arraySome(other, function(othValue2, othIndex) {
              if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
              result = false;
              break;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            break;
          }
        }
        stack["delete"](array);
        stack["delete"](other);
        return result;
      }
      module.exports = equalArrays;
    }
  });

  // node_modules/lodash/_Uint8Array.js
  var require_Uint8Array = __commonJS({
    "node_modules/lodash/_Uint8Array.js"(exports, module) {
      var root = require_root();
      var Uint8Array2 = root.Uint8Array;
      module.exports = Uint8Array2;
    }
  });

  // node_modules/lodash/_mapToArray.js
  var require_mapToArray = __commonJS({
    "node_modules/lodash/_mapToArray.js"(exports, module) {
      function mapToArray(map) {
        var index = -1, result = Array(map.size);
        map.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      module.exports = mapToArray;
    }
  });

  // node_modules/lodash/_setToArray.js
  var require_setToArray = __commonJS({
    "node_modules/lodash/_setToArray.js"(exports, module) {
      function setToArray(set3) {
        var index = -1, result = Array(set3.size);
        set3.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      module.exports = setToArray;
    }
  });

  // node_modules/lodash/_equalByTag.js
  var require_equalByTag = __commonJS({
    "node_modules/lodash/_equalByTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var Uint8Array2 = require_Uint8Array();
      var eq = require_eq();
      var equalArrays = require_equalArrays();
      var mapToArray = require_mapToArray();
      var setToArray = require_setToArray();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var symbolTag = "[object Symbol]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
      function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
        switch (tag) {
          case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
              return false;
            }
            object = object.buffer;
            other = other.buffer;
          case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
              return false;
            }
            return true;
          case boolTag:
          case dateTag:
          case numberTag:
            return eq(+object, +other);
          case errorTag:
            return object.name == other.name && object.message == other.message;
          case regexpTag:
          case stringTag:
            return object == other + "";
          case mapTag:
            var convert = mapToArray;
          case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object);
            if (stacked) {
              return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG;
            stack.set(object, other);
            var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result;
          case symbolTag:
            if (symbolValueOf) {
              return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
        }
        return false;
      }
      module.exports = equalByTag;
    }
  });

  // node_modules/lodash/_arrayPush.js
  var require_arrayPush = __commonJS({
    "node_modules/lodash/_arrayPush.js"(exports, module) {
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      module.exports = arrayPush;
    }
  });

  // node_modules/lodash/isArray.js
  var require_isArray = __commonJS({
    "node_modules/lodash/isArray.js"(exports, module) {
      var isArray = Array.isArray;
      module.exports = isArray;
    }
  });

  // node_modules/lodash/_baseGetAllKeys.js
  var require_baseGetAllKeys = __commonJS({
    "node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
      var arrayPush = require_arrayPush();
      var isArray = require_isArray();
      function baseGetAllKeys(object, keysFunc, symbolsFunc) {
        var result = keysFunc(object);
        return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
      }
      module.exports = baseGetAllKeys;
    }
  });

  // node_modules/lodash/_arrayFilter.js
  var require_arrayFilter = __commonJS({
    "node_modules/lodash/_arrayFilter.js"(exports, module) {
      function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      module.exports = arrayFilter;
    }
  });

  // node_modules/lodash/stubArray.js
  var require_stubArray = __commonJS({
    "node_modules/lodash/stubArray.js"(exports, module) {
      function stubArray() {
        return [];
      }
      module.exports = stubArray;
    }
  });

  // node_modules/lodash/_getSymbols.js
  var require_getSymbols = __commonJS({
    "node_modules/lodash/_getSymbols.js"(exports, module) {
      var arrayFilter = require_arrayFilter();
      var stubArray = require_stubArray();
      var objectProto = Object.prototype;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var nativeGetSymbols = Object.getOwnPropertySymbols;
      var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
        if (object == null) {
          return [];
        }
        object = Object(object);
        return arrayFilter(nativeGetSymbols(object), function(symbol) {
          return propertyIsEnumerable.call(object, symbol);
        });
      };
      module.exports = getSymbols;
    }
  });

  // node_modules/lodash/_baseTimes.js
  var require_baseTimes = __commonJS({
    "node_modules/lodash/_baseTimes.js"(exports, module) {
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      module.exports = baseTimes;
    }
  });

  // node_modules/lodash/_baseIsArguments.js
  var require_baseIsArguments = __commonJS({
    "node_modules/lodash/_baseIsArguments.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var argsTag = "[object Arguments]";
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }
      module.exports = baseIsArguments;
    }
  });

  // node_modules/lodash/isArguments.js
  var require_isArguments = __commonJS({
    "node_modules/lodash/isArguments.js"(exports, module) {
      var baseIsArguments = require_baseIsArguments();
      var isObjectLike = require_isObjectLike();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var isArguments = baseIsArguments(function() {
        return arguments;
      }()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
      };
      module.exports = isArguments;
    }
  });

  // node_modules/lodash/stubFalse.js
  var require_stubFalse = __commonJS({
    "node_modules/lodash/stubFalse.js"(exports, module) {
      function stubFalse() {
        return false;
      }
      module.exports = stubFalse;
    }
  });

  // node_modules/lodash/isBuffer.js
  var require_isBuffer = __commonJS({
    "node_modules/lodash/isBuffer.js"(exports, module) {
      var root = require_root();
      var stubFalse = require_stubFalse();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var Buffer2 = moduleExports ? root.Buffer : void 0;
      var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
      var isBuffer = nativeIsBuffer || stubFalse;
      module.exports = isBuffer;
    }
  });

  // node_modules/lodash/_isIndex.js
  var require_isIndex = __commonJS({
    "node_modules/lodash/_isIndex.js"(exports, module) {
      var MAX_SAFE_INTEGER = 9007199254740991;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      module.exports = isIndex;
    }
  });

  // node_modules/lodash/isLength.js
  var require_isLength = __commonJS({
    "node_modules/lodash/isLength.js"(exports, module) {
      var MAX_SAFE_INTEGER = 9007199254740991;
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      module.exports = isLength;
    }
  });

  // node_modules/lodash/_baseIsTypedArray.js
  var require_baseIsTypedArray = __commonJS({
    "node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isLength = require_isLength();
      var isObjectLike = require_isObjectLike();
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var funcTag = "[object Function]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var objectTag = "[object Object]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var weakMapTag = "[object WeakMap]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var float32Tag = "[object Float32Array]";
      var float64Tag = "[object Float64Array]";
      var int8Tag = "[object Int8Array]";
      var int16Tag = "[object Int16Array]";
      var int32Tag = "[object Int32Array]";
      var uint8Tag = "[object Uint8Array]";
      var uint8ClampedTag = "[object Uint8ClampedArray]";
      var uint16Tag = "[object Uint16Array]";
      var uint32Tag = "[object Uint32Array]";
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }
      module.exports = baseIsTypedArray;
    }
  });

  // node_modules/lodash/_baseUnary.js
  var require_baseUnary = __commonJS({
    "node_modules/lodash/_baseUnary.js"(exports, module) {
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      module.exports = baseUnary;
    }
  });

  // node_modules/lodash/_nodeUtil.js
  var require_nodeUtil = __commonJS({
    "node_modules/lodash/_nodeUtil.js"(exports, module) {
      var freeGlobal = require_freeGlobal();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      }();
      module.exports = nodeUtil;
    }
  });

  // node_modules/lodash/isTypedArray.js
  var require_isTypedArray = __commonJS({
    "node_modules/lodash/isTypedArray.js"(exports, module) {
      var baseIsTypedArray = require_baseIsTypedArray();
      var baseUnary = require_baseUnary();
      var nodeUtil = require_nodeUtil();
      var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      module.exports = isTypedArray;
    }
  });

  // node_modules/lodash/_arrayLikeKeys.js
  var require_arrayLikeKeys = __commonJS({
    "node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
      var baseTimes = require_baseTimes();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var isBuffer = require_isBuffer();
      var isIndex = require_isIndex();
      var isTypedArray = require_isTypedArray();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
          (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
          isIndex(key, length)))) {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = arrayLikeKeys;
    }
  });

  // node_modules/lodash/_isPrototype.js
  var require_isPrototype = __commonJS({
    "node_modules/lodash/_isPrototype.js"(exports, module) {
      var objectProto = Object.prototype;
      function isPrototype(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
        return value === proto;
      }
      module.exports = isPrototype;
    }
  });

  // node_modules/lodash/_nativeKeys.js
  var require_nativeKeys = __commonJS({
    "node_modules/lodash/_nativeKeys.js"(exports, module) {
      var overArg = require_overArg();
      var nativeKeys = overArg(Object.keys, Object);
      module.exports = nativeKeys;
    }
  });

  // node_modules/lodash/_baseKeys.js
  var require_baseKeys = __commonJS({
    "node_modules/lodash/_baseKeys.js"(exports, module) {
      var isPrototype = require_isPrototype();
      var nativeKeys = require_nativeKeys();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseKeys(object) {
        if (!isPrototype(object)) {
          return nativeKeys(object);
        }
        var result = [];
        for (var key in Object(object)) {
          if (hasOwnProperty.call(object, key) && key != "constructor") {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = baseKeys;
    }
  });

  // node_modules/lodash/isArrayLike.js
  var require_isArrayLike = __commonJS({
    "node_modules/lodash/isArrayLike.js"(exports, module) {
      var isFunction = require_isFunction();
      var isLength = require_isLength();
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }
      module.exports = isArrayLike;
    }
  });

  // node_modules/lodash/keys.js
  var require_keys = __commonJS({
    "node_modules/lodash/keys.js"(exports, module) {
      var arrayLikeKeys = require_arrayLikeKeys();
      var baseKeys = require_baseKeys();
      var isArrayLike = require_isArrayLike();
      function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
      }
      module.exports = keys;
    }
  });

  // node_modules/lodash/_getAllKeys.js
  var require_getAllKeys = __commonJS({
    "node_modules/lodash/_getAllKeys.js"(exports, module) {
      var baseGetAllKeys = require_baseGetAllKeys();
      var getSymbols = require_getSymbols();
      var keys = require_keys();
      function getAllKeys(object) {
        return baseGetAllKeys(object, keys, getSymbols);
      }
      module.exports = getAllKeys;
    }
  });

  // node_modules/lodash/_equalObjects.js
  var require_equalObjects = __commonJS({
    "node_modules/lodash/_equalObjects.js"(exports, module) {
      var getAllKeys = require_getAllKeys();
      var COMPARE_PARTIAL_FLAG = 1;
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index = objLength;
        while (index--) {
          var key = objProps[index];
          if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
            return false;
          }
        }
        var objStacked = stack.get(object);
        var othStacked = stack.get(other);
        if (objStacked && othStacked) {
          return objStacked == other && othStacked == object;
        }
        var result = true;
        stack.set(object, other);
        stack.set(other, object);
        var skipCtor = isPartial;
        while (++index < objLength) {
          key = objProps[index];
          var objValue = object[key], othValue = other[key];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
          }
          if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result = false;
            break;
          }
          skipCtor || (skipCtor = key == "constructor");
        }
        if (result && !skipCtor) {
          var objCtor = object.constructor, othCtor = other.constructor;
          if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
            result = false;
          }
        }
        stack["delete"](object);
        stack["delete"](other);
        return result;
      }
      module.exports = equalObjects;
    }
  });

  // node_modules/lodash/_DataView.js
  var require_DataView = __commonJS({
    "node_modules/lodash/_DataView.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var DataView = getNative(root, "DataView");
      module.exports = DataView;
    }
  });

  // node_modules/lodash/_Promise.js
  var require_Promise = __commonJS({
    "node_modules/lodash/_Promise.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var Promise2 = getNative(root, "Promise");
      module.exports = Promise2;
    }
  });

  // node_modules/lodash/_Set.js
  var require_Set = __commonJS({
    "node_modules/lodash/_Set.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var Set = getNative(root, "Set");
      module.exports = Set;
    }
  });

  // node_modules/lodash/_WeakMap.js
  var require_WeakMap = __commonJS({
    "node_modules/lodash/_WeakMap.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var WeakMap2 = getNative(root, "WeakMap");
      module.exports = WeakMap2;
    }
  });

  // node_modules/lodash/_getTag.js
  var require_getTag = __commonJS({
    "node_modules/lodash/_getTag.js"(exports, module) {
      var DataView = require_DataView();
      var Map2 = require_Map();
      var Promise2 = require_Promise();
      var Set = require_Set();
      var WeakMap2 = require_WeakMap();
      var baseGetTag = require_baseGetTag();
      var toSource = require_toSource();
      var mapTag = "[object Map]";
      var objectTag = "[object Object]";
      var promiseTag = "[object Promise]";
      var setTag = "[object Set]";
      var weakMapTag = "[object WeakMap]";
      var dataViewTag = "[object DataView]";
      var dataViewCtorString = toSource(DataView);
      var mapCtorString = toSource(Map2);
      var promiseCtorString = toSource(Promise2);
      var setCtorString = toSource(Set);
      var weakMapCtorString = toSource(WeakMap2);
      var getTag = baseGetTag;
      if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
        getTag = function(value) {
          var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString:
                return dataViewTag;
              case mapCtorString:
                return mapTag;
              case promiseCtorString:
                return promiseTag;
              case setCtorString:
                return setTag;
              case weakMapCtorString:
                return weakMapTag;
            }
          }
          return result;
        };
      }
      module.exports = getTag;
    }
  });

  // node_modules/lodash/_baseIsEqualDeep.js
  var require_baseIsEqualDeep = __commonJS({
    "node_modules/lodash/_baseIsEqualDeep.js"(exports, module) {
      var Stack = require_Stack();
      var equalArrays = require_equalArrays();
      var equalByTag = require_equalByTag();
      var equalObjects = require_equalObjects();
      var getTag = require_getTag();
      var isArray = require_isArray();
      var isBuffer = require_isBuffer();
      var isTypedArray = require_isTypedArray();
      var COMPARE_PARTIAL_FLAG = 1;
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var objectTag = "[object Object]";
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
        var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
        objTag = objTag == argsTag ? objectTag : objTag;
        othTag = othTag == argsTag ? objectTag : othTag;
        var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
        if (isSameTag && isBuffer(object)) {
          if (!isBuffer(other)) {
            return false;
          }
          objIsArr = true;
          objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack());
          return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
        }
        if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
          var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
          if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack());
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack());
        return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
      }
      module.exports = baseIsEqualDeep;
    }
  });

  // node_modules/lodash/_baseIsEqual.js
  var require_baseIsEqual = __commonJS({
    "node_modules/lodash/_baseIsEqual.js"(exports, module) {
      var baseIsEqualDeep = require_baseIsEqualDeep();
      var isObjectLike = require_isObjectLike();
      function baseIsEqual(value, other, bitmask, customizer, stack) {
        if (value === other) {
          return true;
        }
        if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
          return value !== value && other !== other;
        }
        return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
      }
      module.exports = baseIsEqual;
    }
  });

  // node_modules/lodash/_baseIsMatch.js
  var require_baseIsMatch = __commonJS({
    "node_modules/lodash/_baseIsMatch.js"(exports, module) {
      var Stack = require_Stack();
      var baseIsEqual = require_baseIsEqual();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      function baseIsMatch(object, source, matchData, customizer) {
        var index = matchData.length, length = index, noCustomizer = !customizer;
        if (object == null) {
          return !length;
        }
        object = Object(object);
        while (index--) {
          var data = matchData[index];
          if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
            return false;
          }
        }
        while (++index < length) {
          data = matchData[index];
          var key = data[0], objValue = object[key], srcValue = data[1];
          if (noCustomizer && data[2]) {
            if (objValue === void 0 && !(key in object)) {
              return false;
            }
          } else {
            var stack = new Stack();
            if (customizer) {
              var result = customizer(objValue, srcValue, key, object, source, stack);
            }
            if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
              return false;
            }
          }
        }
        return true;
      }
      module.exports = baseIsMatch;
    }
  });

  // node_modules/lodash/_isStrictComparable.js
  var require_isStrictComparable = __commonJS({
    "node_modules/lodash/_isStrictComparable.js"(exports, module) {
      var isObject = require_isObject();
      function isStrictComparable(value) {
        return value === value && !isObject(value);
      }
      module.exports = isStrictComparable;
    }
  });

  // node_modules/lodash/_getMatchData.js
  var require_getMatchData = __commonJS({
    "node_modules/lodash/_getMatchData.js"(exports, module) {
      var isStrictComparable = require_isStrictComparable();
      var keys = require_keys();
      function getMatchData(object) {
        var result = keys(object), length = result.length;
        while (length--) {
          var key = result[length], value = object[key];
          result[length] = [key, value, isStrictComparable(value)];
        }
        return result;
      }
      module.exports = getMatchData;
    }
  });

  // node_modules/lodash/_matchesStrictComparable.js
  var require_matchesStrictComparable = __commonJS({
    "node_modules/lodash/_matchesStrictComparable.js"(exports, module) {
      function matchesStrictComparable(key, srcValue) {
        return function(object) {
          if (object == null) {
            return false;
          }
          return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
        };
      }
      module.exports = matchesStrictComparable;
    }
  });

  // node_modules/lodash/_baseMatches.js
  var require_baseMatches = __commonJS({
    "node_modules/lodash/_baseMatches.js"(exports, module) {
      var baseIsMatch = require_baseIsMatch();
      var getMatchData = require_getMatchData();
      var matchesStrictComparable = require_matchesStrictComparable();
      function baseMatches(source) {
        var matchData = getMatchData(source);
        if (matchData.length == 1 && matchData[0][2]) {
          return matchesStrictComparable(matchData[0][0], matchData[0][1]);
        }
        return function(object) {
          return object === source || baseIsMatch(object, source, matchData);
        };
      }
      module.exports = baseMatches;
    }
  });

  // node_modules/lodash/isSymbol.js
  var require_isSymbol = __commonJS({
    "node_modules/lodash/isSymbol.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var symbolTag = "[object Symbol]";
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
      }
      module.exports = isSymbol;
    }
  });

  // node_modules/lodash/_isKey.js
  var require_isKey = __commonJS({
    "node_modules/lodash/_isKey.js"(exports, module) {
      var isArray = require_isArray();
      var isSymbol = require_isSymbol();
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
      var reIsPlainProp = /^\w*$/;
      function isKey(value, object) {
        if (isArray(value)) {
          return false;
        }
        var type = typeof value;
        if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
          return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
      }
      module.exports = isKey;
    }
  });

  // node_modules/lodash/memoize.js
  var require_memoize = __commonJS({
    "node_modules/lodash/memoize.js"(exports, module) {
      var MapCache = require_MapCache();
      var FUNC_ERROR_TEXT = "Expected a function";
      function memoize(func, resolver) {
        if (typeof func != "function" || resolver != null && typeof resolver != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
          if (cache.has(key)) {
            return cache.get(key);
          }
          var result = func.apply(this, args);
          memoized.cache = cache.set(key, result) || cache;
          return result;
        };
        memoized.cache = new (memoize.Cache || MapCache)();
        return memoized;
      }
      memoize.Cache = MapCache;
      module.exports = memoize;
    }
  });

  // node_modules/lodash/_memoizeCapped.js
  var require_memoizeCapped = __commonJS({
    "node_modules/lodash/_memoizeCapped.js"(exports, module) {
      var memoize = require_memoize();
      var MAX_MEMOIZE_SIZE = 500;
      function memoizeCapped(func) {
        var result = memoize(func, function(key) {
          if (cache.size === MAX_MEMOIZE_SIZE) {
            cache.clear();
          }
          return key;
        });
        var cache = result.cache;
        return result;
      }
      module.exports = memoizeCapped;
    }
  });

  // node_modules/lodash/_stringToPath.js
  var require_stringToPath = __commonJS({
    "node_modules/lodash/_stringToPath.js"(exports, module) {
      var memoizeCapped = require_memoizeCapped();
      var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reEscapeChar = /\\(\\)?/g;
      var stringToPath = memoizeCapped(function(string) {
        var result = [];
        if (string.charCodeAt(0) === 46) {
          result.push("");
        }
        string.replace(rePropName, function(match, number, quote, subString) {
          result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
        });
        return result;
      });
      module.exports = stringToPath;
    }
  });

  // node_modules/lodash/_arrayMap.js
  var require_arrayMap = __commonJS({
    "node_modules/lodash/_arrayMap.js"(exports, module) {
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      module.exports = arrayMap;
    }
  });

  // node_modules/lodash/_baseToString.js
  var require_baseToString = __commonJS({
    "node_modules/lodash/_baseToString.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var arrayMap = require_arrayMap();
      var isArray = require_isArray();
      var isSymbol = require_isSymbol();
      var INFINITY = 1 / 0;
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolToString = symbolProto ? symbolProto.toString : void 0;
      function baseToString(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isArray(value)) {
          return arrayMap(value, baseToString) + "";
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : "";
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      module.exports = baseToString;
    }
  });

  // node_modules/lodash/toString.js
  var require_toString = __commonJS({
    "node_modules/lodash/toString.js"(exports, module) {
      var baseToString = require_baseToString();
      function toString(value) {
        return value == null ? "" : baseToString(value);
      }
      module.exports = toString;
    }
  });

  // node_modules/lodash/_castPath.js
  var require_castPath = __commonJS({
    "node_modules/lodash/_castPath.js"(exports, module) {
      var isArray = require_isArray();
      var isKey = require_isKey();
      var stringToPath = require_stringToPath();
      var toString = require_toString();
      function castPath(value, object) {
        if (isArray(value)) {
          return value;
        }
        return isKey(value, object) ? [value] : stringToPath(toString(value));
      }
      module.exports = castPath;
    }
  });

  // node_modules/lodash/_toKey.js
  var require_toKey = __commonJS({
    "node_modules/lodash/_toKey.js"(exports, module) {
      var isSymbol = require_isSymbol();
      var INFINITY = 1 / 0;
      function toKey(value) {
        if (typeof value == "string" || isSymbol(value)) {
          return value;
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      module.exports = toKey;
    }
  });

  // node_modules/lodash/_baseGet.js
  var require_baseGet = __commonJS({
    "node_modules/lodash/_baseGet.js"(exports, module) {
      var castPath = require_castPath();
      var toKey = require_toKey();
      function baseGet(object, path) {
        path = castPath(path, object);
        var index = 0, length = path.length;
        while (object != null && index < length) {
          object = object[toKey(path[index++])];
        }
        return index && index == length ? object : void 0;
      }
      module.exports = baseGet;
    }
  });

  // node_modules/lodash/get.js
  var require_get = __commonJS({
    "node_modules/lodash/get.js"(exports, module) {
      var baseGet = require_baseGet();
      function get3(object, path, defaultValue) {
        var result = object == null ? void 0 : baseGet(object, path);
        return result === void 0 ? defaultValue : result;
      }
      module.exports = get3;
    }
  });

  // node_modules/lodash/_baseHasIn.js
  var require_baseHasIn = __commonJS({
    "node_modules/lodash/_baseHasIn.js"(exports, module) {
      function baseHasIn(object, key) {
        return object != null && key in Object(object);
      }
      module.exports = baseHasIn;
    }
  });

  // node_modules/lodash/_hasPath.js
  var require_hasPath = __commonJS({
    "node_modules/lodash/_hasPath.js"(exports, module) {
      var castPath = require_castPath();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var isIndex = require_isIndex();
      var isLength = require_isLength();
      var toKey = require_toKey();
      function hasPath(object, path, hasFunc) {
        path = castPath(path, object);
        var index = -1, length = path.length, result = false;
        while (++index < length) {
          var key = toKey(path[index]);
          if (!(result = object != null && hasFunc(object, key))) {
            break;
          }
          object = object[key];
        }
        if (result || ++index != length) {
          return result;
        }
        length = object == null ? 0 : object.length;
        return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
      }
      module.exports = hasPath;
    }
  });

  // node_modules/lodash/hasIn.js
  var require_hasIn = __commonJS({
    "node_modules/lodash/hasIn.js"(exports, module) {
      var baseHasIn = require_baseHasIn();
      var hasPath = require_hasPath();
      function hasIn(object, path) {
        return object != null && hasPath(object, path, baseHasIn);
      }
      module.exports = hasIn;
    }
  });

  // node_modules/lodash/_baseMatchesProperty.js
  var require_baseMatchesProperty = __commonJS({
    "node_modules/lodash/_baseMatchesProperty.js"(exports, module) {
      var baseIsEqual = require_baseIsEqual();
      var get3 = require_get();
      var hasIn = require_hasIn();
      var isKey = require_isKey();
      var isStrictComparable = require_isStrictComparable();
      var matchesStrictComparable = require_matchesStrictComparable();
      var toKey = require_toKey();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      function baseMatchesProperty(path, srcValue) {
        if (isKey(path) && isStrictComparable(srcValue)) {
          return matchesStrictComparable(toKey(path), srcValue);
        }
        return function(object) {
          var objValue = get3(object, path);
          return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
        };
      }
      module.exports = baseMatchesProperty;
    }
  });

  // node_modules/lodash/identity.js
  var require_identity = __commonJS({
    "node_modules/lodash/identity.js"(exports, module) {
      function identity(value) {
        return value;
      }
      module.exports = identity;
    }
  });

  // node_modules/lodash/_baseProperty.js
  var require_baseProperty = __commonJS({
    "node_modules/lodash/_baseProperty.js"(exports, module) {
      function baseProperty(key) {
        return function(object) {
          return object == null ? void 0 : object[key];
        };
      }
      module.exports = baseProperty;
    }
  });

  // node_modules/lodash/_basePropertyDeep.js
  var require_basePropertyDeep = __commonJS({
    "node_modules/lodash/_basePropertyDeep.js"(exports, module) {
      var baseGet = require_baseGet();
      function basePropertyDeep(path) {
        return function(object) {
          return baseGet(object, path);
        };
      }
      module.exports = basePropertyDeep;
    }
  });

  // node_modules/lodash/property.js
  var require_property = __commonJS({
    "node_modules/lodash/property.js"(exports, module) {
      var baseProperty = require_baseProperty();
      var basePropertyDeep = require_basePropertyDeep();
      var isKey = require_isKey();
      var toKey = require_toKey();
      function property(path) {
        return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
      }
      module.exports = property;
    }
  });

  // node_modules/lodash/_baseIteratee.js
  var require_baseIteratee = __commonJS({
    "node_modules/lodash/_baseIteratee.js"(exports, module) {
      var baseMatches = require_baseMatches();
      var baseMatchesProperty = require_baseMatchesProperty();
      var identity = require_identity();
      var isArray = require_isArray();
      var property = require_property();
      function baseIteratee(value) {
        if (typeof value == "function") {
          return value;
        }
        if (value == null) {
          return identity;
        }
        if (typeof value == "object") {
          return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
        }
        return property(value);
      }
      module.exports = baseIteratee;
    }
  });

  // node_modules/lodash/_createFind.js
  var require_createFind = __commonJS({
    "node_modules/lodash/_createFind.js"(exports, module) {
      var baseIteratee = require_baseIteratee();
      var isArrayLike = require_isArrayLike();
      var keys = require_keys();
      function createFind(findIndexFunc) {
        return function(collection, predicate, fromIndex) {
          var iterable = Object(collection);
          if (!isArrayLike(collection)) {
            var iteratee = baseIteratee(predicate, 3);
            collection = keys(collection);
            predicate = function(key) {
              return iteratee(iterable[key], key, iterable);
            };
          }
          var index = findIndexFunc(collection, predicate, fromIndex);
          return index > -1 ? iterable[iteratee ? collection[index] : index] : void 0;
        };
      }
      module.exports = createFind;
    }
  });

  // node_modules/lodash/_baseFindIndex.js
  var require_baseFindIndex = __commonJS({
    "node_modules/lodash/_baseFindIndex.js"(exports, module) {
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      module.exports = baseFindIndex;
    }
  });

  // node_modules/lodash/_trimmedEndIndex.js
  var require_trimmedEndIndex = __commonJS({
    "node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
      var reWhitespace = /\s/;
      function trimmedEndIndex(string) {
        var index = string.length;
        while (index-- && reWhitespace.test(string.charAt(index))) {
        }
        return index;
      }
      module.exports = trimmedEndIndex;
    }
  });

  // node_modules/lodash/_baseTrim.js
  var require_baseTrim = __commonJS({
    "node_modules/lodash/_baseTrim.js"(exports, module) {
      var trimmedEndIndex = require_trimmedEndIndex();
      var reTrimStart = /^\s+/;
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      module.exports = baseTrim;
    }
  });

  // node_modules/lodash/toNumber.js
  var require_toNumber = __commonJS({
    "node_modules/lodash/toNumber.js"(exports, module) {
      var baseTrim = require_baseTrim();
      var isObject = require_isObject();
      var isSymbol = require_isSymbol();
      var NAN = 0 / 0;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsOctal = /^0o[0-7]+$/i;
      var freeParseInt = parseInt;
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = baseTrim(value);
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }
      module.exports = toNumber;
    }
  });

  // node_modules/lodash/toFinite.js
  var require_toFinite = __commonJS({
    "node_modules/lodash/toFinite.js"(exports, module) {
      var toNumber = require_toNumber();
      var INFINITY = 1 / 0;
      var MAX_INTEGER = 17976931348623157e292;
      function toFinite(value) {
        if (!value) {
          return value === 0 ? value : 0;
        }
        value = toNumber(value);
        if (value === INFINITY || value === -INFINITY) {
          var sign = value < 0 ? -1 : 1;
          return sign * MAX_INTEGER;
        }
        return value === value ? value : 0;
      }
      module.exports = toFinite;
    }
  });

  // node_modules/lodash/toInteger.js
  var require_toInteger = __commonJS({
    "node_modules/lodash/toInteger.js"(exports, module) {
      var toFinite = require_toFinite();
      function toInteger(value) {
        var result = toFinite(value), remainder = result % 1;
        return result === result ? remainder ? result - remainder : result : 0;
      }
      module.exports = toInteger;
    }
  });

  // node_modules/lodash/findIndex.js
  var require_findIndex = __commonJS({
    "node_modules/lodash/findIndex.js"(exports, module) {
      var baseFindIndex = require_baseFindIndex();
      var baseIteratee = require_baseIteratee();
      var toInteger = require_toInteger();
      var nativeMax = Math.max;
      function findIndex(array, predicate, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = fromIndex == null ? 0 : toInteger(fromIndex);
        if (index < 0) {
          index = nativeMax(length + index, 0);
        }
        return baseFindIndex(array, baseIteratee(predicate, 3), index);
      }
      module.exports = findIndex;
    }
  });

  // node_modules/lodash/find.js
  var require_find = __commonJS({
    "node_modules/lodash/find.js"(exports, module) {
      var createFind = require_createFind();
      var findIndex = require_findIndex();
      var find3 = createFind(findIndex);
      module.exports = find3;
    }
  });

  // packages/systems/ix2/shared/logic/IX2BrowserSupport.ts
  var IX2BrowserSupport_exports = {};
  __export(IX2BrowserSupport_exports, {
    ELEMENT_MATCHES: () => ELEMENT_MATCHES,
    FLEX_PREFIXED: () => FLEX_PREFIXED,
    IS_BROWSER_ENV: () => IS_BROWSER_ENV,
    TRANSFORM_PREFIXED: () => TRANSFORM_PREFIXED,
    TRANSFORM_STYLE_PREFIXED: () => TRANSFORM_STYLE_PREFIXED,
    withBrowser: () => withBrowser
  });
  var import_find, IS_BROWSER_ENV, withBrowser, ELEMENT_MATCHES, FLEX_PREFIXED, TRANSFORM_PREFIXED, TRANSFORM_PREFIX, TRANSFORM_STYLE_PREFIXED;
  var init_IX2BrowserSupport = __esm({
    "packages/systems/ix2/shared/logic/IX2BrowserSupport.ts"() {
      "use strict";
      import_find = __toESM(require_find());
      IS_BROWSER_ENV = typeof window !== "undefined";
      withBrowser = (fn, fallback) => {
        if (IS_BROWSER_ENV) {
          return fn();
        }
        return fallback;
      };
      ELEMENT_MATCHES = withBrowser(() => {
        return (0, import_find.default)(
          [
            "matches",
            "matchesSelector",
            "mozMatchesSelector",
            "msMatchesSelector",
            "oMatchesSelector",
            "webkitMatchesSelector"
          ],
          (key) => key in Element.prototype
        );
      });
      FLEX_PREFIXED = withBrowser(() => {
        const el = document.createElement("i");
        const values = [
          "flex",
          "-webkit-flex",
          "-ms-flexbox",
          "-moz-box",
          "-webkit-box"
        ];
        const none = "";
        try {
          const { length } = values;
          for (let i = 0; i < length; i++) {
            const value = values[i];
            el.style.display = value;
            if (el.style.display === value) {
              return value;
            }
          }
          return none;
        } catch (err) {
          return none;
        }
      }, "flex");
      TRANSFORM_PREFIXED = withBrowser(() => {
        const el = document.createElement("i");
        if (el.style.transform == null) {
          const prefixes = ["Webkit", "Moz", "ms"];
          const suffix = "Transform";
          const { length } = prefixes;
          for (let i = 0; i < length; i++) {
            const prop = prefixes[i] + suffix;
            if (el.style[prop] !== void 0) {
              return prop;
            }
          }
        }
        return "transform";
      }, "transform");
      TRANSFORM_PREFIX = TRANSFORM_PREFIXED.split("transform")[0];
      TRANSFORM_STYLE_PREFIXED = TRANSFORM_PREFIX ? TRANSFORM_PREFIX + "TransformStyle" : "transformStyle";
    }
  });

  // node_modules/bezier-easing/src/index.js
  var require_src = __commonJS({
    "node_modules/bezier-easing/src/index.js"(exports, module) {
      var NEWTON_ITERATIONS = 4;
      var NEWTON_MIN_SLOPE = 1e-3;
      var SUBDIVISION_PRECISION = 1e-7;
      var SUBDIVISION_MAX_ITERATIONS = 10;
      var kSplineTableSize = 11;
      var kSampleStepSize = 1 / (kSplineTableSize - 1);
      var float32ArraySupported = typeof Float32Array === "function";
      function A(aA1, aA2) {
        return 1 - 3 * aA2 + 3 * aA1;
      }
      function B(aA1, aA2) {
        return 3 * aA2 - 6 * aA1;
      }
      function C(aA1) {
        return 3 * aA1;
      }
      function calcBezier(aT, aA1, aA2) {
        return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
      }
      function getSlope(aT, aA1, aA2) {
        return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
      }
      function binarySubdivide(aX, aA, aB, mX1, mX2) {
        var currentX, currentT, i = 0;
        do {
          currentT = aA + (aB - aA) / 2;
          currentX = calcBezier(currentT, mX1, mX2) - aX;
          if (currentX > 0) {
            aB = currentT;
          } else {
            aA = currentT;
          }
        } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
        return currentT;
      }
      function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
        for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
          var currentSlope = getSlope(aGuessT, mX1, mX2);
          if (currentSlope === 0) {
            return aGuessT;
          }
          var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
          aGuessT -= currentX / currentSlope;
        }
        return aGuessT;
      }
      module.exports = function bezier(mX1, mY1, mX2, mY2) {
        if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
          throw new Error("bezier x values must be in [0, 1] range");
        }
        var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
        if (mX1 !== mY1 || mX2 !== mY2) {
          for (var i = 0; i < kSplineTableSize; ++i) {
            sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
          }
        }
        function getTForX(aX) {
          var intervalStart = 0;
          var currentSample = 1;
          var lastSample = kSplineTableSize - 1;
          for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
            intervalStart += kSampleStepSize;
          }
          --currentSample;
          var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
          var guessForT = intervalStart + dist * kSampleStepSize;
          var initialSlope = getSlope(guessForT, mX1, mX2);
          if (initialSlope >= NEWTON_MIN_SLOPE) {
            return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
          } else if (initialSlope === 0) {
            return guessForT;
          } else {
            return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
          }
        }
        return function BezierEasing3(x) {
          if (mX1 === mY1 && mX2 === mY2) {
            return x;
          }
          if (x === 0) {
            return 0;
          }
          if (x === 1) {
            return 1;
          }
          return calcBezier(getTForX(x), mY1, mY2);
        };
      };
    }
  });

  // packages/systems/ix2/shared/logic/IX2Easings.ts
  var IX2Easings_exports = {};
  __export(IX2Easings_exports, {
    bounce: () => bounce,
    bouncePast: () => bouncePast,
    ease: () => ease,
    easeIn: () => easeIn,
    easeInOut: () => easeInOut,
    easeOut: () => easeOut,
    inBack: () => inBack,
    inCirc: () => inCirc,
    inCubic: () => inCubic,
    inElastic: () => inElastic,
    inExpo: () => inExpo,
    inOutBack: () => inOutBack,
    inOutCirc: () => inOutCirc,
    inOutCubic: () => inOutCubic,
    inOutElastic: () => inOutElastic,
    inOutExpo: () => inOutExpo,
    inOutQuad: () => inOutQuad,
    inOutQuart: () => inOutQuart,
    inOutQuint: () => inOutQuint,
    inOutSine: () => inOutSine,
    inQuad: () => inQuad,
    inQuart: () => inQuart,
    inQuint: () => inQuint,
    inSine: () => inSine,
    outBack: () => outBack,
    outBounce: () => outBounce,
    outCirc: () => outCirc,
    outCubic: () => outCubic,
    outElastic: () => outElastic,
    outExpo: () => outExpo,
    outQuad: () => outQuad,
    outQuart: () => outQuart,
    outQuint: () => outQuint,
    outSine: () => outSine,
    swingFrom: () => swingFrom,
    swingFromTo: () => swingFromTo,
    swingTo: () => swingTo
  });
  function inQuad(pos) {
    return Math.pow(pos, 2);
  }
  function outQuad(pos) {
    return -(Math.pow(pos - 1, 2) - 1);
  }
  function inOutQuad(pos) {
    if ((pos /= 0.5) < 1) {
      return 0.5 * Math.pow(pos, 2);
    }
    return -0.5 * ((pos -= 2) * pos - 2);
  }
  function inCubic(pos) {
    return Math.pow(pos, 3);
  }
  function outCubic(pos) {
    return Math.pow(pos - 1, 3) + 1;
  }
  function inOutCubic(pos) {
    if ((pos /= 0.5) < 1) {
      return 0.5 * Math.pow(pos, 3);
    }
    return 0.5 * (Math.pow(pos - 2, 3) + 2);
  }
  function inQuart(pos) {
    return Math.pow(pos, 4);
  }
  function outQuart(pos) {
    return -(Math.pow(pos - 1, 4) - 1);
  }
  function inOutQuart(pos) {
    if ((pos /= 0.5) < 1) {
      return 0.5 * Math.pow(pos, 4);
    }
    return -0.5 * ((pos -= 2) * Math.pow(pos, 3) - 2);
  }
  function inQuint(pos) {
    return Math.pow(pos, 5);
  }
  function outQuint(pos) {
    return Math.pow(pos - 1, 5) + 1;
  }
  function inOutQuint(pos) {
    if ((pos /= 0.5) < 1) {
      return 0.5 * Math.pow(pos, 5);
    }
    return 0.5 * (Math.pow(pos - 2, 5) + 2);
  }
  function inSine(pos) {
    return -Math.cos(pos * (Math.PI / 2)) + 1;
  }
  function outSine(pos) {
    return Math.sin(pos * (Math.PI / 2));
  }
  function inOutSine(pos) {
    return -0.5 * (Math.cos(Math.PI * pos) - 1);
  }
  function inExpo(pos) {
    return pos === 0 ? 0 : Math.pow(2, 10 * (pos - 1));
  }
  function outExpo(pos) {
    return pos === 1 ? 1 : -Math.pow(2, -10 * pos) + 1;
  }
  function inOutExpo(pos) {
    if (pos === 0) {
      return 0;
    }
    if (pos === 1) {
      return 1;
    }
    if ((pos /= 0.5) < 1) {
      return 0.5 * Math.pow(2, 10 * (pos - 1));
    }
    return 0.5 * (-Math.pow(2, -10 * --pos) + 2);
  }
  function inCirc(pos) {
    return -(Math.sqrt(1 - pos * pos) - 1);
  }
  function outCirc(pos) {
    return Math.sqrt(1 - Math.pow(pos - 1, 2));
  }
  function inOutCirc(pos) {
    if ((pos /= 0.5) < 1) {
      return -0.5 * (Math.sqrt(1 - pos * pos) - 1);
    }
    return 0.5 * (Math.sqrt(1 - (pos -= 2) * pos) + 1);
  }
  function outBounce(pos) {
    if (pos < 1 / 2.75) {
      return 7.5625 * pos * pos;
    } else if (pos < 2 / 2.75) {
      return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
    } else if (pos < 2.5 / 2.75) {
      return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
    } else {
      return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
    }
  }
  function inBack(pos) {
    const s = magicSwing;
    return pos * pos * ((s + 1) * pos - s);
  }
  function outBack(pos) {
    const s = magicSwing;
    return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
  }
  function inOutBack(pos) {
    let s = magicSwing;
    if ((pos /= 0.5) < 1) {
      return 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s));
    }
    return 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
  }
  function inElastic(pos) {
    let s = magicSwing;
    let p = 0;
    let a = 1;
    if (pos === 0) {
      return 0;
    }
    if (pos === 1) {
      return 1;
    }
    if (!p) {
      p = 0.3;
    }
    if (a < 1) {
      a = 1;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(1 / a);
    }
    return -(a * Math.pow(2, 10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p));
  }
  function outElastic(pos) {
    let s = magicSwing;
    let p = 0;
    let a = 1;
    if (pos === 0) {
      return 0;
    }
    if (pos === 1) {
      return 1;
    }
    if (!p) {
      p = 0.3;
    }
    if (a < 1) {
      a = 1;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(1 / a);
    }
    return a * Math.pow(2, -10 * pos) * Math.sin((pos - s) * (2 * Math.PI) / p) + 1;
  }
  function inOutElastic(pos) {
    let s = magicSwing;
    let p = 0;
    let a = 1;
    if (pos === 0) {
      return 0;
    }
    if ((pos /= 1 / 2) === 2) {
      return 1;
    }
    if (!p) {
      p = 0.3 * 1.5;
    }
    if (a < 1) {
      a = 1;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(1 / a);
    }
    if (pos < 1) {
      return -0.5 * (a * Math.pow(2, 10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p));
    }
    return a * Math.pow(2, -10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p) * 0.5 + 1;
  }
  function swingFromTo(pos) {
    let s = magicSwing;
    return (pos /= 0.5) < 1 ? 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s)) : 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
  }
  function swingFrom(pos) {
    const s = magicSwing;
    return pos * pos * ((s + 1) * pos - s);
  }
  function swingTo(pos) {
    const s = magicSwing;
    return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
  }
  function bounce(pos) {
    if (pos < 1 / 2.75) {
      return 7.5625 * pos * pos;
    } else if (pos < 2 / 2.75) {
      return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
    } else if (pos < 2.5 / 2.75) {
      return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
    } else {
      return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
    }
  }
  function bouncePast(pos) {
    if (pos < 1 / 2.75) {
      return 7.5625 * pos * pos;
    } else if (pos < 2 / 2.75) {
      return 2 - (7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75);
    } else if (pos < 2.5 / 2.75) {
      return 2 - (7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375);
    } else {
      return 2 - (7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375);
    }
  }
  var import_bezier_easing, magicSwing, ease, easeIn, easeOut, easeInOut;
  var init_IX2Easings = __esm({
    "packages/systems/ix2/shared/logic/IX2Easings.ts"() {
      "use strict";
      import_bezier_easing = __toESM(require_src());
      magicSwing = 1.70158;
      ease = (0, import_bezier_easing.default)(0.25, 0.1, 0.25, 1);
      easeIn = (0, import_bezier_easing.default)(0.42, 0, 1, 1);
      easeOut = (0, import_bezier_easing.default)(0, 0, 0.58, 1);
      easeInOut = (0, import_bezier_easing.default)(0.42, 0, 0.58, 1);
    }
  });

  // packages/systems/ix2/shared/logic/IX2EasingUtils.ts
  var IX2EasingUtils_exports = {};
  __export(IX2EasingUtils_exports, {
    applyEasing: () => applyEasing,
    createBezierEasing: () => createBezierEasing,
    optimizeFloat: () => optimizeFloat
  });
  function optimizeFloat(value, digits = 5, base = 10) {
    const pow = Math.pow(base, digits);
    const float = Number(Math.round(value * pow) / pow);
    return Math.abs(float) > 1e-4 ? float : 0;
  }
  function createBezierEasing(easing) {
    return (0, import_bezier_easing2.default)(...easing);
  }
  function applyEasing(easing, position, customEasingFn) {
    if (position === 0) {
      return 0;
    }
    if (position === 1) {
      return 1;
    }
    if (customEasingFn) {
      return optimizeFloat(position > 0 ? customEasingFn(position) : position);
    }
    return optimizeFloat(
      position > 0 && easing && IX2Easings_exports[easing] ? IX2Easings_exports[easing](position) : position
    );
  }
  var import_bezier_easing2;
  var init_IX2EasingUtils = __esm({
    "packages/systems/ix2/shared/logic/IX2EasingUtils.ts"() {
      "use strict";
      init_IX2Easings();
      import_bezier_easing2 = __toESM(require_src());
    }
  });

  // packages/systems/ix2/shared/reducers/IX2ElementsReducer.ts
  var IX2ElementsReducer_exports = {};
  __export(IX2ElementsReducer_exports, {
    createElementState: () => createElementState,
    ixElements: () => ixElements,
    mergeActionState: () => mergeActionState
  });
  function createElementState(state, ref, refType, elementId, actionItem) {
    const refId = refType === PLAIN_OBJECT2 ? (0, import_timm3.getIn)(actionItem, ["config", "target", "objectId"]) : null;
    return (0, import_timm3.mergeIn)(state, [elementId], {
      id: elementId,
      ref,
      refId,
      refType
    });
  }
  function mergeActionState(state, elementId, actionTypeId, actionState, actionItem) {
    const units = pickUnits(actionItem);
    const mergePath = [elementId, refState, actionTypeId];
    return (0, import_timm3.mergeIn)(state, mergePath, actionState, units);
  }
  function pickUnits(actionItem) {
    const { config } = actionItem;
    return valueUnitPairs.reduce((result, pair) => {
      const valueKey = pair[0];
      const unitKey = pair[1];
      const configValue = config[valueKey];
      const configUnit = config[unitKey];
      if (configValue != null && configUnit != null) {
        result[unitKey] = configUnit;
      }
      return result;
    }, {});
  }
  var import_timm3, HTML_ELEMENT2, PLAIN_OBJECT2, ABSTRACT_NODE2, CONFIG_X_VALUE2, CONFIG_Y_VALUE2, CONFIG_Z_VALUE2, CONFIG_VALUE2, CONFIG_X_UNIT2, CONFIG_Y_UNIT2, CONFIG_Z_UNIT2, CONFIG_UNIT2, IX2_SESSION_STOPPED3, IX2_INSTANCE_ADDED2, IX2_ELEMENT_STATE_CHANGED2, initialState3, refState, ixElements, valueUnitPairs;
  var init_IX2ElementsReducer = __esm({
    "packages/systems/ix2/shared/reducers/IX2ElementsReducer.ts"() {
      "use strict";
      import_timm3 = __toESM(require_timm());
      init_shared_constants();
      ({
        HTML_ELEMENT: HTML_ELEMENT2,
        PLAIN_OBJECT: PLAIN_OBJECT2,
        ABSTRACT_NODE: ABSTRACT_NODE2,
        CONFIG_X_VALUE: CONFIG_X_VALUE2,
        CONFIG_Y_VALUE: CONFIG_Y_VALUE2,
        CONFIG_Z_VALUE: CONFIG_Z_VALUE2,
        CONFIG_VALUE: CONFIG_VALUE2,
        CONFIG_X_UNIT: CONFIG_X_UNIT2,
        CONFIG_Y_UNIT: CONFIG_Y_UNIT2,
        CONFIG_Z_UNIT: CONFIG_Z_UNIT2,
        CONFIG_UNIT: CONFIG_UNIT2
      } = IX2EngineConstants_exports);
      ({ IX2_SESSION_STOPPED: IX2_SESSION_STOPPED3, IX2_INSTANCE_ADDED: IX2_INSTANCE_ADDED2, IX2_ELEMENT_STATE_CHANGED: IX2_ELEMENT_STATE_CHANGED2 } = IX2EngineActionTypes_exports);
      initialState3 = {};
      refState = "refState";
      ixElements = (state = initialState3, action = {}) => {
        switch (action.type) {
          case IX2_SESSION_STOPPED3: {
            return initialState3;
          }
          case IX2_INSTANCE_ADDED2: {
            const {
              elementId,
              element: ref,
              origin,
              actionItem,
              refType
            } = action.payload;
            const { actionTypeId } = actionItem;
            let newState = state;
            if ((0, import_timm3.getIn)(newState, [elementId, ref]) !== ref) {
              newState = createElementState(
                newState,
                ref,
                refType,
                elementId,
                actionItem
              );
            }
            return mergeActionState(
              newState,
              elementId,
              actionTypeId,
              origin,
              actionItem
            );
          }
          case IX2_ELEMENT_STATE_CHANGED2: {
            const { elementId, actionTypeId, current, actionItem } = action.payload;
            return mergeActionState(
              state,
              elementId,
              actionTypeId,
              current,
              actionItem
            );
          }
          default: {
            return state;
          }
        }
      };
      valueUnitPairs = [
        [CONFIG_X_VALUE2, CONFIG_X_UNIT2],
        [CONFIG_Y_VALUE2, CONFIG_Y_UNIT2],
        [CONFIG_Z_VALUE2, CONFIG_Z_UNIT2],
        [CONFIG_VALUE2, CONFIG_UNIT2]
      ];
    }
  });

  // packages/systems/ix2/plugins/IX2Lottie.js
  var require_IX2Lottie = __commonJS({
    "packages/systems/ix2/plugins/IX2Lottie.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.renderPlugin = exports.getPluginOrigin = exports.getPluginDuration = exports.getPluginDestination = exports.getPluginConfig = exports.createPluginInstance = exports.clearPlugin = void 0;
      var getPluginConfig2 = (actionItemConfig) => {
        return actionItemConfig.value;
      };
      exports.getPluginConfig = getPluginConfig2;
      var getPluginDuration3 = (element, actionItem) => {
        if (actionItem.config.duration !== "auto") {
          return null;
        }
        const duration = parseFloat(element.getAttribute("data-duration"));
        if (duration > 0) {
          return duration * 1e3;
        }
        return parseFloat(element.getAttribute("data-default-duration")) * 1e3;
      };
      exports.getPluginDuration = getPluginDuration3;
      var getPluginOrigin2 = (refState2) => {
        return refState2 || {
          value: 0
        };
      };
      exports.getPluginOrigin = getPluginOrigin2;
      var getPluginDestination2 = (actionItemConfig) => {
        return {
          value: actionItemConfig.value
        };
      };
      exports.getPluginDestination = getPluginDestination2;
      var createPluginInstance3 = (element) => {
        const instance = window.Webflow.require("lottie").createInstance(element);
        instance.stop();
        instance.setSubframe(true);
        return instance;
      };
      exports.createPluginInstance = createPluginInstance3;
      var renderPlugin2 = (pluginInstance, refState2, actionItem) => {
        if (!pluginInstance) {
          return;
        }
        const percent = refState2[actionItem.actionTypeId].value / 100;
        pluginInstance.goToFrame(pluginInstance.frames * percent);
      };
      exports.renderPlugin = renderPlugin2;
      var clearPlugin2 = (element) => {
        const instance = window.Webflow.require("lottie").createInstance(element);
        instance.stop();
      };
      exports.clearPlugin = clearPlugin2;
    }
  });

  // packages/systems/ix2/plugins/IX2Spline.js
  var require_IX2Spline = __commonJS({
    "packages/systems/ix2/plugins/IX2Spline.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.renderPlugin = exports.getPluginOrigin = exports.getPluginDuration = exports.getPluginDestination = exports.getPluginConfig = exports.createPluginInstance = exports.clearPlugin = void 0;
      var queryContainerElement = (elementId) => document.querySelector(`[data-w-id="${elementId}"]`);
      var getFrontendModule = () => window.Webflow.require("spline");
      var difference = (arr1, arr2) => arr1.filter((x) => !arr2.includes(x));
      var getPluginConfig2 = (actionItemConfig, key) => {
        return actionItemConfig.value[key];
      };
      exports.getPluginConfig = getPluginConfig2;
      var getPluginDuration3 = () => {
        return null;
      };
      exports.getPluginDuration = getPluginDuration3;
      var DEFAULT_VALUES = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1
      });
      var getPluginOrigin2 = (refState2, actionItem) => {
        const destination = actionItem.config.value;
        const destinationKeys = Object.keys(destination);
        if (refState2) {
          const stateKeys2 = Object.keys(refState2);
          const diffKeys = difference(destinationKeys, stateKeys2);
          if (diffKeys.length) {
            const origin2 = diffKeys.reduce((result, key) => {
              result[key] = DEFAULT_VALUES[key];
              return result;
            }, refState2);
            return origin2;
          }
          return refState2;
        }
        const origin = destinationKeys.reduce((result, key) => {
          result[key] = DEFAULT_VALUES[key];
          return result;
        }, {});
        return origin;
      };
      exports.getPluginOrigin = getPluginOrigin2;
      var getPluginDestination2 = (actionItemConfig) => {
        return actionItemConfig.value;
      };
      exports.getPluginDestination = getPluginDestination2;
      var createPluginInstance3 = (element, actionItem) => {
        var _actionItem$config;
        const pluginElementId = actionItem === null || actionItem === void 0 || (_actionItem$config = actionItem.config) === null || _actionItem$config === void 0 || (_actionItem$config = _actionItem$config.target) === null || _actionItem$config === void 0 ? void 0 : _actionItem$config.pluginElement;
        return pluginElementId ? queryContainerElement(pluginElementId) : null;
      };
      exports.createPluginInstance = createPluginInstance3;
      var renderPlugin2 = (containerElement, refState2, actionItem) => {
        const frontendModule = getFrontendModule();
        const instance = frontendModule.getInstance(containerElement);
        const objectId = actionItem.config.target.objectId;
        const renderSpline = (spline) => {
          if (!spline) {
            throw new Error("Invalid spline app passed to renderSpline");
          }
          const obj = objectId && spline.findObjectById(objectId);
          if (!obj) {
            return;
          }
          const {
            PLUGIN_SPLINE: props
          } = refState2;
          if (props.positionX != null) {
            obj.position.x = props.positionX;
          }
          if (props.positionY != null) {
            obj.position.y = props.positionY;
          }
          if (props.positionZ != null) {
            obj.position.z = props.positionZ;
          }
          if (props.rotationX != null) {
            obj.rotation.x = props.rotationX;
          }
          if (props.rotationY != null) {
            obj.rotation.y = props.rotationY;
          }
          if (props.rotationZ != null) {
            obj.rotation.z = props.rotationZ;
          }
          if (props.scaleX != null) {
            obj.scale.x = props.scaleX;
          }
          if (props.scaleY != null) {
            obj.scale.y = props.scaleY;
          }
          if (props.scaleZ != null) {
            obj.scale.z = props.scaleZ;
          }
        };
        if (instance) {
          renderSpline(instance.spline);
        } else {
          frontendModule.setLoadHandler(containerElement, renderSpline);
        }
      };
      exports.renderPlugin = renderPlugin2;
      var clearPlugin2 = () => {
        return null;
      };
      exports.clearPlugin = clearPlugin2;
    }
  });

  // packages/systems/ix2/shared-utils/normalizeColor.js
  var require_normalizeColor = __commonJS({
    "packages/systems/ix2/shared-utils/normalizeColor.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.normalizeColor = normalizeColor2;
      var colorNamesObj = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#00FFFF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blue: "#0000FF",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        fuchsia: "#FF00FF",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#ADFF2F",
        grey: "#808080",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgray: "#D3D3D3",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        lime: "#00FF00",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        maroon: "#800000",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        navy: "#000080",
        oldlace: "#FDF5E6",
        olive: "#808000",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#FF0000",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        silver: "#C0C0C0",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        teal: "#008080",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        white: "#FFFFFF",
        whitesmoke: "#F5F5F5",
        yellow: "#FFFF00",
        yellowgreen: "#9ACD32"
      };
      function normalizeColor2(inputColor) {
        let red;
        let green;
        let blue;
        let alpha = 1;
        const rawColor = inputColor.replace(/\s/g, "").toLowerCase();
        const namedColor = typeof colorNamesObj[rawColor] === "string" ? colorNamesObj[rawColor].toLowerCase() : null;
        const cleanColor = namedColor || rawColor;
        if (cleanColor.startsWith("#")) {
          const hex = cleanColor.substring(1);
          if (hex.length === 3) {
            red = parseInt(hex[0] + hex[0], 16);
            green = parseInt(hex[1] + hex[1], 16);
            blue = parseInt(hex[2] + hex[2], 16);
          } else if (hex.length === 6) {
            red = parseInt(hex.substring(0, 2), 16);
            green = parseInt(hex.substring(2, 4), 16);
            blue = parseInt(hex.substring(4, 6), 16);
          }
        } else if (cleanColor.startsWith("rgba")) {
          const rgbaValues = cleanColor.match(/rgba\(([^)]+)\)/)[1].split(",");
          red = parseInt(rgbaValues[0], 10);
          green = parseInt(rgbaValues[1], 10);
          blue = parseInt(rgbaValues[2], 10);
          alpha = parseFloat(rgbaValues[3]);
        } else if (cleanColor.startsWith("rgb")) {
          const rgbValues = cleanColor.match(/rgb\(([^)]+)\)/)[1].split(",");
          red = parseInt(rgbValues[0], 10);
          green = parseInt(rgbValues[1], 10);
          blue = parseInt(rgbValues[2], 10);
        } else if (cleanColor.startsWith("hsla")) {
          const hslaValues = cleanColor.match(/hsla\(([^)]+)\)/)[1].split(",");
          const h = parseFloat(hslaValues[0]);
          const s = parseFloat(hslaValues[1].replace("%", "")) / 100;
          const l = parseFloat(hslaValues[2].replace("%", "")) / 100;
          alpha = parseFloat(hslaValues[3]);
          const C = (1 - Math.abs(2 * l - 1)) * s;
          const X = C * (1 - Math.abs(h / 60 % 2 - 1));
          const m = l - C / 2;
          let R;
          let G;
          let B;
          if (h >= 0 && h < 60) {
            R = C;
            G = X;
            B = 0;
          } else if (h >= 60 && h < 120) {
            R = X;
            G = C;
            B = 0;
          } else if (h >= 120 && h < 180) {
            R = 0;
            G = C;
            B = X;
          } else if (h >= 180 && h < 240) {
            R = 0;
            G = X;
            B = C;
          } else if (h >= 240 && h < 300) {
            R = X;
            G = 0;
            B = C;
          } else {
            R = C;
            G = 0;
            B = X;
          }
          red = Math.round((R + m) * 255);
          green = Math.round((G + m) * 255);
          blue = Math.round((B + m) * 255);
        } else if (cleanColor.startsWith("hsl")) {
          const hslValues = cleanColor.match(/hsl\(([^)]+)\)/)[1].split(",");
          const h = parseFloat(hslValues[0]);
          const s = parseFloat(hslValues[1].replace("%", "")) / 100;
          const l = parseFloat(hslValues[2].replace("%", "")) / 100;
          const C = (1 - Math.abs(2 * l - 1)) * s;
          const X = C * (1 - Math.abs(h / 60 % 2 - 1));
          const m = l - C / 2;
          let R;
          let G;
          let B;
          if (h >= 0 && h < 60) {
            R = C;
            G = X;
            B = 0;
          } else if (h >= 60 && h < 120) {
            R = X;
            G = C;
            B = 0;
          } else if (h >= 120 && h < 180) {
            R = 0;
            G = C;
            B = X;
          } else if (h >= 180 && h < 240) {
            R = 0;
            G = X;
            B = C;
          } else if (h >= 240 && h < 300) {
            R = X;
            G = 0;
            B = C;
          } else {
            R = C;
            G = 0;
            B = X;
          }
          red = Math.round((R + m) * 255);
          green = Math.round((G + m) * 255);
          blue = Math.round((B + m) * 255);
        }
        if (Number.isNaN(red) || Number.isNaN(green) || Number.isNaN(blue)) {
          throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${inputColor}'`);
        }
        return {
          red,
          green,
          blue,
          alpha
        };
      }
    }
  });

  // packages/systems/ix2/plugins/IX2Variable.js
  var require_IX2Variable = __commonJS({
    "packages/systems/ix2/plugins/IX2Variable.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.renderPlugin = exports.getPluginOrigin = exports.getPluginDuration = exports.getPluginDestination = exports.getPluginConfig = exports.createPluginInstance = exports.clearPlugin = void 0;
      var _normalizeColor = require_normalizeColor();
      var getPluginConfig2 = (actionItemConfig, key) => {
        return actionItemConfig.value[key];
      };
      exports.getPluginConfig = getPluginConfig2;
      var getPluginDuration3 = () => {
        return null;
      };
      exports.getPluginDuration = getPluginDuration3;
      var getPluginOrigin2 = (refState2, actionItem) => {
        if (refState2) {
          return refState2;
        }
        const destination = actionItem.config.value;
        const objectId = actionItem.config.target.objectId;
        const computedValue = getComputedStyle(document.documentElement).getPropertyValue(objectId);
        if (destination.size != null) {
          return {
            size: parseInt(computedValue, 10)
          };
        }
        if (destination.red != null && destination.green != null && destination.blue != null) {
          return (0, _normalizeColor.normalizeColor)(computedValue);
        }
      };
      exports.getPluginOrigin = getPluginOrigin2;
      var getPluginDestination2 = (actionItemConfig) => {
        return actionItemConfig.value;
      };
      exports.getPluginDestination = getPluginDestination2;
      var createPluginInstance3 = () => {
        return null;
      };
      exports.createPluginInstance = createPluginInstance3;
      var renderPlugin2 = (_, refState2, actionItem) => {
        const objectId = actionItem.config.target.objectId;
        const unit = actionItem.config.value.unit;
        const {
          PLUGIN_VARIABLE: props
        } = refState2;
        const {
          size: size2,
          red,
          green,
          blue,
          alpha
        } = props;
        let value;
        if (size2 != null) {
          value = size2 + unit;
        }
        if (red != null && blue != null && green != null && alpha != null) {
          value = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
        }
        if (value != null) {
          document.documentElement.style.setProperty(objectId, value);
        }
      };
      exports.renderPlugin = renderPlugin2;
      var clearPlugin2 = (ref, actionItem) => {
        const objectId = actionItem.config.target.objectId;
        document.documentElement.style.removeProperty(objectId);
      };
      exports.clearPlugin = clearPlugin2;
    }
  });

  // packages/systems/ix2/plugins/index.js
  var require_plugins = __commonJS({
    "packages/systems/ix2/plugins/index.js"(exports) {
      "use strict";
      var _interopRequireWildcard = require_interopRequireWildcard().default;
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.pluginMethodMap = void 0;
      var _sharedConstants = (init_shared_constants(), __toCommonJS(shared_constants_exports));
      var lottie = _interopRequireWildcard(require_IX2Lottie());
      var spline = _interopRequireWildcard(require_IX2Spline());
      var variable = _interopRequireWildcard(require_IX2Variable());
      var pluginMethodMap2 = exports.pluginMethodMap = /* @__PURE__ */ new Map([[_sharedConstants.ActionTypeConsts.PLUGIN_LOTTIE, {
        ...lottie
      }], [_sharedConstants.ActionTypeConsts.PLUGIN_SPLINE, {
        ...spline
      }], [_sharedConstants.ActionTypeConsts.PLUGIN_VARIABLE, {
        ...variable
      }]]);
    }
  });

  // packages/systems/ix2/shared/logic/IX2VanillaPlugins.ts
  var IX2VanillaPlugins_exports = {};
  __export(IX2VanillaPlugins_exports, {
    clearPlugin: () => clearPlugin,
    createPluginInstance: () => createPluginInstance,
    getPluginConfig: () => getPluginConfig,
    getPluginDestination: () => getPluginDestination,
    getPluginDuration: () => getPluginDuration,
    getPluginOrigin: () => getPluginOrigin,
    isPluginType: () => isPluginType,
    renderPlugin: () => renderPlugin
  });
  function isPluginType(actionTypeId) {
    return import_plugins.pluginMethodMap.has(actionTypeId);
  }
  var import_plugins, pluginMethod, getPluginConfig, getPluginOrigin, getPluginDuration, getPluginDestination, createPluginInstance, renderPlugin, clearPlugin;
  var init_IX2VanillaPlugins = __esm({
    "packages/systems/ix2/shared/logic/IX2VanillaPlugins.ts"() {
      "use strict";
      init_IX2BrowserSupport();
      import_plugins = __toESM(require_plugins());
      pluginMethod = (methodName) => (actionTypeId) => {
        if (!IS_BROWSER_ENV) {
          return () => null;
        }
        const plugin = import_plugins.pluginMethodMap.get(actionTypeId);
        if (!plugin) {
          throw new Error(`IX2 no plugin configured for: ${actionTypeId}`);
        }
        const method = plugin[methodName];
        if (!method) {
          throw new Error(`IX2 invalid plugin method: ${methodName}`);
        }
        return method;
      };
      getPluginConfig = pluginMethod("getPluginConfig");
      getPluginOrigin = pluginMethod("getPluginOrigin");
      getPluginDuration = pluginMethod("getPluginDuration");
      getPluginDestination = pluginMethod("getPluginDestination");
      createPluginInstance = pluginMethod("createPluginInstance");
      renderPlugin = pluginMethod("renderPlugin");
      clearPlugin = pluginMethod("clearPlugin");
    }
  });

  // node_modules/lodash/defaultTo.js
  var require_defaultTo = __commonJS({
    "node_modules/lodash/defaultTo.js"(exports, module) {
      function defaultTo2(value, defaultValue) {
        return value == null || value !== value ? defaultValue : value;
      }
      module.exports = defaultTo2;
    }
  });

  // node_modules/lodash/_arrayReduce.js
  var require_arrayReduce = __commonJS({
    "node_modules/lodash/_arrayReduce.js"(exports, module) {
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      module.exports = arrayReduce;
    }
  });

  // node_modules/lodash/_createBaseFor.js
  var require_createBaseFor = __commonJS({
    "node_modules/lodash/_createBaseFor.js"(exports, module) {
      function createBaseFor(fromRight) {
        return function(object, iteratee, keysFunc) {
          var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
          while (length--) {
            var key = props[fromRight ? length : ++index];
            if (iteratee(iterable[key], key, iterable) === false) {
              break;
            }
          }
          return object;
        };
      }
      module.exports = createBaseFor;
    }
  });

  // node_modules/lodash/_baseFor.js
  var require_baseFor = __commonJS({
    "node_modules/lodash/_baseFor.js"(exports, module) {
      var createBaseFor = require_createBaseFor();
      var baseFor = createBaseFor();
      module.exports = baseFor;
    }
  });

  // node_modules/lodash/_baseForOwn.js
  var require_baseForOwn = __commonJS({
    "node_modules/lodash/_baseForOwn.js"(exports, module) {
      var baseFor = require_baseFor();
      var keys = require_keys();
      function baseForOwn(object, iteratee) {
        return object && baseFor(object, iteratee, keys);
      }
      module.exports = baseForOwn;
    }
  });

  // node_modules/lodash/_createBaseEach.js
  var require_createBaseEach = __commonJS({
    "node_modules/lodash/_createBaseEach.js"(exports, module) {
      var isArrayLike = require_isArrayLike();
      function createBaseEach(eachFunc, fromRight) {
        return function(collection, iteratee) {
          if (collection == null) {
            return collection;
          }
          if (!isArrayLike(collection)) {
            return eachFunc(collection, iteratee);
          }
          var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
          while (fromRight ? index-- : ++index < length) {
            if (iteratee(iterable[index], index, iterable) === false) {
              break;
            }
          }
          return collection;
        };
      }
      module.exports = createBaseEach;
    }
  });

  // node_modules/lodash/_baseEach.js
  var require_baseEach = __commonJS({
    "node_modules/lodash/_baseEach.js"(exports, module) {
      var baseForOwn = require_baseForOwn();
      var createBaseEach = require_createBaseEach();
      var baseEach = createBaseEach(baseForOwn);
      module.exports = baseEach;
    }
  });

  // node_modules/lodash/_baseReduce.js
  var require_baseReduce = __commonJS({
    "node_modules/lodash/_baseReduce.js"(exports, module) {
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index, collection2) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
        });
        return accumulator;
      }
      module.exports = baseReduce;
    }
  });

  // node_modules/lodash/reduce.js
  var require_reduce = __commonJS({
    "node_modules/lodash/reduce.js"(exports, module) {
      var arrayReduce = require_arrayReduce();
      var baseEach = require_baseEach();
      var baseIteratee = require_baseIteratee();
      var baseReduce = require_baseReduce();
      var isArray = require_isArray();
      function reduce2(collection, iteratee, accumulator) {
        var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
        return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
      }
      module.exports = reduce2;
    }
  });

  // node_modules/lodash/findLastIndex.js
  var require_findLastIndex = __commonJS({
    "node_modules/lodash/findLastIndex.js"(exports, module) {
      var baseFindIndex = require_baseFindIndex();
      var baseIteratee = require_baseIteratee();
      var toInteger = require_toInteger();
      var nativeMax = Math.max;
      var nativeMin = Math.min;
      function findLastIndex(array, predicate, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = length - 1;
        if (fromIndex !== void 0) {
          index = toInteger(fromIndex);
          index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
        }
        return baseFindIndex(array, baseIteratee(predicate, 3), index, true);
      }
      module.exports = findLastIndex;
    }
  });

  // node_modules/lodash/findLast.js
  var require_findLast = __commonJS({
    "node_modules/lodash/findLast.js"(exports, module) {
      var createFind = require_createFind();
      var findLastIndex = require_findLastIndex();
      var findLast2 = createFind(findLastIndex);
      module.exports = findLast2;
    }
  });

  // packages/systems/ix2/shared/logic/shallowEqual.ts
  function is(x, y) {
    if (x === y) {
      return x !== 0 || y !== 0 || 1 / x === 1 / y;
    }
    return x !== x && y !== y;
  }
  function shallowEqual(objA, objB) {
    if (is(objA, objB)) {
      return true;
    }
    if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
      return false;
    }
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
      return false;
    }
    for (let i = 0; i < keysA.length; i++) {
      if (!Object.hasOwn(
        objB,
        // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'PropertyKey'.
        keysA[i]
      ) || // @ts-expect-error - TS2538 - Type 'undefined' cannot be used as an index type. | TS2538 - Type 'undefined' cannot be used as an index type.
      !is(objA[keysA[i]], objB[keysA[i]])) {
        return false;
      }
    }
    return true;
  }
  var shallowEqual_default;
  var init_shallowEqual = __esm({
    "packages/systems/ix2/shared/logic/shallowEqual.ts"() {
      "use strict";
      shallowEqual_default = shallowEqual;
    }
  });

  // packages/systems/ix2/shared/logic/IX2VanillaUtils.ts
  var IX2VanillaUtils_exports = {};
  __export(IX2VanillaUtils_exports, {
    cleanupHTMLElement: () => cleanupHTMLElement,
    clearAllStyles: () => clearAllStyles,
    clearObjectCache: () => clearObjectCache,
    getActionListProgress: () => getActionListProgress,
    getAffectedElements: () => getAffectedElements,
    getComputedStyle: () => getComputedStyle2,
    getDestinationValues: () => getDestinationValues,
    getElementId: () => getElementId,
    getInstanceId: () => getInstanceId,
    getInstanceOrigin: () => getInstanceOrigin,
    getItemConfigByKey: () => getItemConfigByKey,
    getMaxDurationItemIndex: () => getMaxDurationItemIndex,
    getNamespacedParameterId: () => getNamespacedParameterId,
    getRenderType: () => getRenderType,
    getStyleProp: () => getStyleProp,
    mediaQueriesEqual: () => mediaQueriesEqual,
    observeStore: () => observeStore,
    reduceListToGroup: () => reduceListToGroup,
    reifyState: () => reifyState,
    renderHTMLElement: () => renderHTMLElement,
    shallowEqual: () => shallowEqual_default,
    shouldAllowMediaQuery: () => shouldAllowMediaQuery,
    shouldNamespaceEventParameter: () => shouldNamespaceEventParameter,
    stringifyTarget: () => stringifyTarget
  });
  function clearObjectCache() {
    objectCache.clear();
  }
  function getInstanceId() {
    return "i" + instanceCount++;
  }
  function getElementId(ixElements3, ref) {
    for (const key in ixElements3) {
      const ixEl = ixElements3[key];
      if (ixEl && ixEl.ref === ref) {
        return ixEl.id;
      }
    }
    return "e" + elementCount++;
  }
  function reifyState({ events, actionLists, site } = {}) {
    const eventTypeMap = (0, import_reduce.default)(
      events,
      (result, event) => {
        const { eventTypeId } = event;
        if (!result[eventTypeId]) {
          result[eventTypeId] = {};
        }
        result[eventTypeId][event.id] = event;
        return result;
      },
      {}
    );
    let mediaQueries = site && site.mediaQueries;
    let mediaQueryKeys = [];
    if (mediaQueries) {
      mediaQueryKeys = mediaQueries.map((mq) => mq.key);
    } else {
      mediaQueries = [];
      console.warn(`IX2 missing mediaQueries in site data`);
    }
    return {
      ixData: {
        events,
        actionLists,
        eventTypeMap,
        mediaQueries,
        mediaQueryKeys
      }
    };
  }
  function observeStore({
    // @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
    store,
    // @ts-expect-error - TS7031 - Binding element 'select' implicitly has an 'any' type.
    select,
    // @ts-expect-error - TS7031 - Binding element 'onChange' implicitly has an 'any' type.
    onChange,
    comparator = strictEqual
  }) {
    const { getState, subscribe } = store;
    const unsubscribe = subscribe(handleChange);
    let currentState = select(getState());
    function handleChange() {
      const nextState = select(getState());
      if (nextState == null) {
        unsubscribe();
        return;
      }
      if (!comparator(nextState, currentState)) {
        currentState = nextState;
        onChange(currentState, store);
      }
    }
    return unsubscribe;
  }
  function normalizeTarget(target) {
    const type = typeof target;
    if (type === "string") {
      return { id: target };
    } else if (target != null && type === "object") {
      const { id, objectId, selector, selectorGuids, appliesTo, useEventTarget } = target;
      return { id, objectId, selector, selectorGuids, appliesTo, useEventTarget };
    }
    return {};
  }
  function getAffectedElements({
    config,
    event,
    eventTarget,
    elementRoot,
    elementApi
  }) {
    if (!elementApi) {
      throw new Error("IX2 missing elementApi");
    }
    const { targets } = config;
    if (Array.isArray(targets) && targets.length > 0) {
      return targets.reduce(
        (accumulator, target2) => accumulator.concat(
          getAffectedElements({
            config: { target: target2 },
            event,
            eventTarget,
            elementRoot,
            elementApi
          })
        ),
        []
      );
    }
    const {
      getValidDocument: getValidDocument2,
      getQuerySelector: getQuerySelector2,
      queryDocument: queryDocument2,
      getChildElements: getChildElements2,
      getSiblingElements: getSiblingElements2,
      matchSelector: matchSelector2,
      elementContains: elementContains2,
      isSiblingNode: isSiblingNode2
    } = elementApi;
    const { target } = config;
    if (!target) {
      return [];
    }
    const {
      id,
      objectId,
      selector,
      selectorGuids,
      appliesTo,
      useEventTarget
    } = normalizeTarget(target);
    if (objectId) {
      const ref = objectCache.has(objectId) ? objectCache.get(objectId) : objectCache.set(objectId, {}).get(objectId);
      return [ref];
    }
    if (appliesTo === EventAppliesTo.PAGE) {
      const doc = getValidDocument2(id);
      return doc ? [doc] : [];
    }
    const overrides = event?.action?.config?.affectedElements ?? {};
    const override = overrides[id || selector] || {};
    const validOverride = Boolean(override.id || override.selector);
    let limitAffectedElements;
    let baseSelector;
    let finalSelector;
    const eventTargetSelector = event && getQuerySelector2(normalizeTarget(event.target));
    if (validOverride) {
      limitAffectedElements = override.limitAffectedElements;
      baseSelector = eventTargetSelector;
      finalSelector = getQuerySelector2(override);
    } else {
      baseSelector = finalSelector = getQuerySelector2({
        id,
        selector,
        selectorGuids
      });
    }
    if (event && useEventTarget) {
      const eventTargets = eventTarget && (finalSelector || useEventTarget === true) ? [eventTarget] : queryDocument2(eventTargetSelector);
      if (finalSelector) {
        if (useEventTarget === PARENT2) {
          return queryDocument2(finalSelector).filter(
            (parentElement) => eventTargets.some(
              (targetElement) => elementContains2(parentElement, targetElement)
            )
          );
        }
        if (useEventTarget === CHILDREN2) {
          return queryDocument2(finalSelector).filter(
            (childElement) => eventTargets.some(
              (targetElement) => elementContains2(targetElement, childElement)
            )
          );
        }
        if (useEventTarget === SIBLINGS2) {
          return queryDocument2(finalSelector).filter(
            (siblingElement) => eventTargets.some(
              (targetElement) => isSiblingNode2(targetElement, siblingElement)
            )
          );
        }
      }
      return eventTargets;
    }
    if (baseSelector == null || finalSelector == null) {
      return [];
    }
    if (IS_BROWSER_ENV && elementRoot) {
      return queryDocument2(finalSelector).filter(
        (element) => elementRoot.contains(element)
      );
    }
    if (limitAffectedElements === CHILDREN2) {
      return queryDocument2(baseSelector, finalSelector);
    } else if (limitAffectedElements === IMMEDIATE_CHILDREN2) {
      return getChildElements2(queryDocument2(baseSelector)).filter(
        matchSelector2(finalSelector)
      );
    } else if (limitAffectedElements === SIBLINGS2) {
      return getSiblingElements2(queryDocument2(baseSelector)).filter(
        matchSelector2(finalSelector)
      );
    } else {
      return queryDocument2(finalSelector);
    }
  }
  function getComputedStyle2({ element, actionItem }) {
    if (!IS_BROWSER_ENV) {
      return {};
    }
    const { actionTypeId } = actionItem;
    switch (actionTypeId) {
      case STYLE_SIZE2:
      case STYLE_BACKGROUND_COLOR:
      case STYLE_BORDER:
      case STYLE_TEXT_COLOR:
      case GENERAL_DISPLAY:
        return window.getComputedStyle(element);
      default:
        return {};
    }
  }
  function getInstanceOrigin(element, refState2 = {}, computedStyle = {}, actionItem, elementApi) {
    const { getStyle: getStyle2 } = elementApi;
    const { actionTypeId } = actionItem;
    if (isPluginType(actionTypeId)) {
      return getPluginOrigin(actionTypeId)(refState2[actionTypeId], actionItem);
    }
    switch (actionItem.actionTypeId) {
      case TRANSFORM_MOVE2:
      case TRANSFORM_SCALE2:
      case TRANSFORM_ROTATE2:
      case TRANSFORM_SKEW2: {
        return (
          // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type '"TRANSFORM_MOVE" | "TRANSFORM_SCALE" | "TRANSFORM_ROTATE" | "TRANSFORM_SKEW"' can't be used to index type '{}'.
          refState2[actionItem.actionTypeId] || transformDefaults[actionItem.actionTypeId]
        );
      }
      case STYLE_FILTER2:
        return getFilterDefaults(
          // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type '"STYLE_FILTER"' can't be used to index type '{}'.
          refState2[actionItem.actionTypeId],
          actionItem.config.filters
        );
      case STYLE_FONT_VARIATION2:
        return getFontVariationDefaults(
          // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type '"STYLE_FONT_VARIATION"' can't be used to index type '{}'.
          refState2[actionItem.actionTypeId],
          actionItem.config.fontVariations
        );
      case STYLE_OPACITY:
        return { value: (0, import_defaultTo.default)(parseFloat(getStyle2(element, OPACITY2)), 1) };
      case STYLE_SIZE2: {
        const inlineWidth = getStyle2(element, WIDTH2);
        const inlineHeight = getStyle2(element, HEIGHT2);
        let widthValue;
        let heightValue;
        if (actionItem.config.widthUnit === AUTO2) {
          widthValue = pxValueRegex.test(inlineWidth) ? parseFloat(inlineWidth) : (
            // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
            parseFloat(computedStyle.width)
          );
        } else {
          widthValue = (0, import_defaultTo.default)(
            parseFloat(inlineWidth),
            // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
            parseFloat(computedStyle.width)
          );
        }
        if (actionItem.config.heightUnit === AUTO2) {
          heightValue = pxValueRegex.test(inlineHeight) ? parseFloat(inlineHeight) : (
            // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
            parseFloat(computedStyle.height)
          );
        } else {
          heightValue = (0, import_defaultTo.default)(
            parseFloat(inlineHeight),
            // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
            parseFloat(computedStyle.height)
          );
        }
        return {
          widthValue,
          heightValue
        };
      }
      case STYLE_BACKGROUND_COLOR:
      case STYLE_BORDER:
      case STYLE_TEXT_COLOR:
        return parseColor({
          element,
          actionTypeId: actionItem.actionTypeId,
          computedStyle,
          getStyle: getStyle2
        });
      case GENERAL_DISPLAY:
        return {
          // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
          value: (0, import_defaultTo.default)(getStyle2(element, DISPLAY2), computedStyle.display)
        };
      case OBJECT_VALUE:
        return refState2[actionItem.actionTypeId] || { value: 0 };
      default: {
        return;
      }
    }
  }
  function getDestinationValues({
    element,
    actionItem,
    elementApi
  }) {
    if (isPluginType(actionItem.actionTypeId)) {
      return getPluginDestination(actionItem.actionTypeId)(actionItem.config);
    }
    switch (actionItem.actionTypeId) {
      case TRANSFORM_MOVE2:
      case TRANSFORM_SCALE2:
      case TRANSFORM_ROTATE2:
      case TRANSFORM_SKEW2: {
        const { xValue, yValue, zValue } = actionItem.config;
        return { xValue, yValue, zValue };
      }
      case STYLE_SIZE2: {
        const { getStyle: getStyle2, setStyle: setStyle2, getProperty: getProperty2 } = elementApi;
        const { widthUnit, heightUnit } = actionItem.config;
        let { widthValue, heightValue } = actionItem.config;
        if (!IS_BROWSER_ENV) {
          return { widthValue, heightValue };
        }
        if (widthUnit === AUTO2) {
          const temp = getStyle2(element, WIDTH2);
          setStyle2(element, WIDTH2, "");
          widthValue = getProperty2(element, "offsetWidth");
          setStyle2(element, WIDTH2, temp);
        }
        if (heightUnit === AUTO2) {
          const temp = getStyle2(element, HEIGHT2);
          setStyle2(element, HEIGHT2, "");
          heightValue = getProperty2(element, "offsetHeight");
          setStyle2(element, HEIGHT2, temp);
        }
        return { widthValue, heightValue };
      }
      case STYLE_BACKGROUND_COLOR:
      case STYLE_BORDER:
      case STYLE_TEXT_COLOR: {
        const { rValue, gValue, bValue, aValue, globalSwatchId } = actionItem.config;
        if (globalSwatchId && globalSwatchId.startsWith("--")) {
          const { getStyle: getStyle2 } = elementApi;
          const value = getStyle2(element, globalSwatchId);
          const normalizedValue = (0, import_normalizeColor.normalizeColor)(value);
          return {
            rValue: normalizedValue.red,
            gValue: normalizedValue.green,
            bValue: normalizedValue.blue,
            aValue: normalizedValue.alpha
          };
        }
        return { rValue, gValue, bValue, aValue };
      }
      case STYLE_FILTER2: {
        return actionItem.config.filters.reduce(
          reduceFilters,
          {}
        );
      }
      case STYLE_FONT_VARIATION2: {
        return actionItem.config.fontVariations.reduce(
          reduceFontVariations,
          {}
        );
      }
      default: {
        const { value } = actionItem.config;
        return { value };
      }
    }
  }
  function getRenderType(actionTypeId) {
    if (/^TRANSFORM_/.test(actionTypeId)) {
      return RENDER_TRANSFORM2;
    }
    if (/^STYLE_/.test(actionTypeId)) {
      return RENDER_STYLE2;
    }
    if (/^GENERAL_/.test(actionTypeId)) {
      return RENDER_GENERAL2;
    }
    if (/^PLUGIN_/.test(actionTypeId)) {
      return RENDER_PLUGIN2;
    }
  }
  function getStyleProp(renderType, actionTypeId) {
    return renderType === RENDER_STYLE2 ? actionTypeId.replace("STYLE_", "").toLowerCase() : null;
  }
  function renderHTMLElement(element, refState2, actionState, eventId, actionItem, styleProp, elementApi, renderType, pluginInstance) {
    switch (renderType) {
      case RENDER_TRANSFORM2: {
        return renderTransform(
          element,
          refState2,
          actionState,
          actionItem,
          elementApi
        );
      }
      case RENDER_STYLE2: {
        return renderStyle(
          element,
          refState2,
          actionState,
          actionItem,
          styleProp,
          elementApi
        );
      }
      case RENDER_GENERAL2: {
        return renderGeneral(element, actionItem, elementApi);
      }
      case RENDER_PLUGIN2: {
        const { actionTypeId } = actionItem;
        if (isPluginType(actionTypeId)) {
          return renderPlugin(actionTypeId)(pluginInstance, refState2, actionItem);
        }
      }
    }
  }
  function renderTransform(element, refState2, actionState, actionItem, elementApi) {
    const newTransform = transformKeys.map((actionTypeId) => {
      const defaults = transformDefaults[actionTypeId];
      const {
        xValue = defaults.xValue,
        yValue = defaults.yValue,
        zValue = defaults.zValue,
        xUnit = "",
        yUnit = "",
        zUnit = ""
      } = refState2[actionTypeId] || {};
      switch (actionTypeId) {
        case TRANSFORM_MOVE2:
          return `${TRANSLATE_3D2}(${xValue}${xUnit}, ${yValue}${yUnit}, ${zValue}${zUnit})`;
        case TRANSFORM_SCALE2:
          return `${SCALE_3D2}(${xValue}${xUnit}, ${yValue}${yUnit}, ${zValue}${zUnit})`;
        case TRANSFORM_ROTATE2:
          return `${ROTATE_X2}(${xValue}${xUnit}) ${ROTATE_Y2}(${yValue}${yUnit}) ${ROTATE_Z2}(${zValue}${zUnit})`;
        case TRANSFORM_SKEW2:
          return `${SKEW2}(${xValue}${xUnit}, ${yValue}${yUnit})`;
        default:
          return "";
      }
    }).join(" ");
    const { setStyle: setStyle2 } = elementApi;
    addWillChange(element, TRANSFORM_PREFIXED, elementApi);
    setStyle2(element, TRANSFORM_PREFIXED, newTransform);
    if (hasDefined3dTransform(actionItem, actionState)) {
      setStyle2(element, TRANSFORM_STYLE_PREFIXED, PRESERVE_3D2);
    }
  }
  function renderFilter(element, actionState, actionItemConfig, elementApi) {
    const filterValue = (0, import_reduce.default)(
      actionState,
      (result, value, type) => `${result} ${type}(${value}${getFilterUnit(type, actionItemConfig)})`,
      ""
    );
    const { setStyle: setStyle2 } = elementApi;
    addWillChange(element, FILTER2, elementApi);
    setStyle2(element, FILTER2, filterValue);
  }
  function renderFontVariation(element, actionState, actionItemConfig, elementApi) {
    const fontVariationValue = (0, import_reduce.default)(
      actionState,
      (result, value, type) => {
        result.push(`"${type}" ${value}`);
        return result;
      },
      []
    ).join(", ");
    const { setStyle: setStyle2 } = elementApi;
    addWillChange(element, FONT_VARIATION_SETTINGS2, elementApi);
    setStyle2(element, FONT_VARIATION_SETTINGS2, fontVariationValue);
  }
  function hasDefined3dTransform({ actionTypeId }, { xValue, yValue, zValue }) {
    return actionTypeId === TRANSFORM_MOVE2 && zValue !== void 0 || // SCALE_Z
    actionTypeId === TRANSFORM_SCALE2 && zValue !== void 0 || // ROTATE_X or ROTATE_Y
    actionTypeId === TRANSFORM_ROTATE2 && (xValue !== void 0 || yValue !== void 0);
  }
  function getFirstMatch(regex, value) {
    const match = regex.exec(value);
    return match ? match[1] : "";
  }
  function parseColor({ element, actionTypeId, computedStyle, getStyle: getStyle2 }) {
    const prop = colorStyleProps[actionTypeId];
    const inlineValue = getStyle2(element, prop);
    const value = rgbValidRegex.test(inlineValue) ? inlineValue : computedStyle[prop];
    const matches = getFirstMatch(rgbMatchRegex, value).split(COMMA_DELIMITER2);
    return {
      // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
      rValue: (0, import_defaultTo.default)(parseInt(matches[0], 10), 255),
      // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
      gValue: (0, import_defaultTo.default)(parseInt(matches[1], 10), 255),
      // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
      bValue: (0, import_defaultTo.default)(parseInt(matches[2], 10), 255),
      // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
      aValue: (0, import_defaultTo.default)(parseFloat(matches[3]), 1)
    };
  }
  function renderStyle(element, refState2, actionState, actionItem, styleProp, elementApi) {
    const { setStyle: setStyle2 } = elementApi;
    switch (actionItem.actionTypeId) {
      case STYLE_SIZE2: {
        let { widthUnit = "", heightUnit = "" } = actionItem.config;
        const { widthValue, heightValue } = actionState;
        if (widthValue !== void 0) {
          if (widthUnit === AUTO2) {
            widthUnit = "px";
          }
          addWillChange(element, WIDTH2, elementApi);
          setStyle2(element, WIDTH2, widthValue + widthUnit);
        }
        if (heightValue !== void 0) {
          if (heightUnit === AUTO2) {
            heightUnit = "px";
          }
          addWillChange(element, HEIGHT2, elementApi);
          setStyle2(element, HEIGHT2, heightValue + heightUnit);
        }
        break;
      }
      case STYLE_FILTER2: {
        renderFilter(element, actionState, actionItem.config, elementApi);
        break;
      }
      case STYLE_FONT_VARIATION2: {
        renderFontVariation(element, actionState, actionItem.config, elementApi);
        break;
      }
      case STYLE_BACKGROUND_COLOR:
      case STYLE_BORDER:
      case STYLE_TEXT_COLOR: {
        const prop = colorStyleProps[actionItem.actionTypeId];
        const rValue = Math.round(actionState.rValue);
        const gValue = Math.round(actionState.gValue);
        const bValue = Math.round(actionState.bValue);
        const aValue = actionState.aValue;
        addWillChange(element, prop, elementApi);
        setStyle2(
          element,
          prop,
          aValue >= 1 ? `rgb(${rValue},${gValue},${bValue})` : `rgba(${rValue},${gValue},${bValue},${aValue})`
        );
        break;
      }
      default: {
        const { unit = "" } = actionItem.config;
        addWillChange(element, styleProp, elementApi);
        setStyle2(element, styleProp, actionState.value + unit);
        break;
      }
    }
  }
  function renderGeneral(element, actionItem, elementApi) {
    const { setStyle: setStyle2 } = elementApi;
    switch (actionItem.actionTypeId) {
      case GENERAL_DISPLAY: {
        const { value } = actionItem.config;
        if (value === FLEX2 && IS_BROWSER_ENV) {
          setStyle2(element, DISPLAY2, FLEX_PREFIXED);
        } else {
          setStyle2(element, DISPLAY2, value);
        }
        return;
      }
    }
  }
  function addWillChange(element, prop, elementApi) {
    if (!IS_BROWSER_ENV) {
      return;
    }
    const validProp = willChangeProps[prop];
    if (!validProp) {
      return;
    }
    const { getStyle: getStyle2, setStyle: setStyle2 } = elementApi;
    const value = getStyle2(element, WILL_CHANGE2);
    if (!value) {
      setStyle2(element, WILL_CHANGE2, validProp);
      return;
    }
    const values = value.split(COMMA_DELIMITER2).map(trim);
    if (values.indexOf(validProp) === -1) {
      setStyle2(
        element,
        WILL_CHANGE2,
        values.concat(validProp).join(COMMA_DELIMITER2)
      );
    }
  }
  function removeWillChange(element, prop, elementApi) {
    if (!IS_BROWSER_ENV) {
      return;
    }
    const validProp = willChangeProps[prop];
    if (!validProp) {
      return;
    }
    const { getStyle: getStyle2, setStyle: setStyle2 } = elementApi;
    const value = getStyle2(element, WILL_CHANGE2);
    if (!value || value.indexOf(validProp) === -1) {
      return;
    }
    setStyle2(
      element,
      WILL_CHANGE2,
      value.split(COMMA_DELIMITER2).map(trim).filter((v) => v !== validProp).join(COMMA_DELIMITER2)
    );
  }
  function clearAllStyles({ store, elementApi }) {
    const { ixData: ixData2 } = store.getState();
    const { events = {}, actionLists = {} } = ixData2;
    Object.keys(events).forEach((eventId) => {
      const event = events[eventId];
      const { config } = event.action;
      const { actionListId } = config;
      const actionList = actionLists[actionListId];
      if (actionList) {
        clearActionListStyles({ actionList, event, elementApi });
      }
    });
    Object.keys(actionLists).forEach((actionListId) => {
      clearActionListStyles({ actionList: actionLists[actionListId], elementApi });
    });
  }
  function clearActionListStyles({ actionList = {}, event, elementApi }) {
    const { actionItemGroups, continuousParameterGroups } = actionList;
    actionItemGroups && // @ts-expect-error - TS7006 - Parameter 'actionGroup' implicitly has an 'any' type.
    actionItemGroups.forEach((actionGroup) => {
      clearActionGroupStyles({ actionGroup, event, elementApi });
    });
    continuousParameterGroups && // @ts-expect-error - TS7006 - Parameter 'paramGroup' implicitly has an 'any' type.
    continuousParameterGroups.forEach((paramGroup) => {
      const { continuousActionGroups } = paramGroup;
      continuousActionGroups.forEach((actionGroup) => {
        clearActionGroupStyles({ actionGroup, event, elementApi });
      });
    });
  }
  function clearActionGroupStyles({ actionGroup, event, elementApi }) {
    const { actionItems } = actionGroup;
    actionItems.forEach((actionItem) => {
      const { actionTypeId, config } = actionItem;
      let clearElement;
      if (isPluginType(actionTypeId)) {
        clearElement = (ref) => clearPlugin(actionTypeId)(ref, actionItem);
      } else {
        clearElement = processElementByType({
          effect: clearStyleProp,
          actionTypeId,
          elementApi
        });
      }
      getAffectedElements({ config, event, elementApi }).forEach(clearElement);
    });
  }
  function cleanupHTMLElement(element, actionItem, elementApi) {
    const { setStyle: setStyle2, getStyle: getStyle2 } = elementApi;
    const { actionTypeId } = actionItem;
    if (actionTypeId === STYLE_SIZE2) {
      const { config } = actionItem;
      if (config.widthUnit === AUTO2) {
        setStyle2(element, WIDTH2, "");
      }
      if (config.heightUnit === AUTO2) {
        setStyle2(element, HEIGHT2, "");
      }
    }
    if (getStyle2(element, WILL_CHANGE2)) {
      processElementByType({ effect: removeWillChange, actionTypeId, elementApi })(
        element
      );
    }
  }
  function clearStyleProp(element, prop, elementApi) {
    const { setStyle: setStyle2 } = elementApi;
    removeWillChange(element, prop, elementApi);
    setStyle2(element, prop, "");
    if (prop === TRANSFORM_PREFIXED) {
      setStyle2(element, TRANSFORM_STYLE_PREFIXED, "");
    }
  }
  function getMaxDurationItemIndex(actionItems) {
    let maxDuration = 0;
    let resultIndex = 0;
    actionItems.forEach((actionItem, index) => {
      const { config } = actionItem;
      const total = config.delay + config.duration;
      if (total >= maxDuration) {
        maxDuration = total;
        resultIndex = index;
      }
    });
    return resultIndex;
  }
  function getActionListProgress(actionList, instance) {
    const { actionItemGroups, useFirstGroupAsInitialState } = actionList;
    const { actionItem: instanceItem, verboseTimeElapsed = 0 } = instance;
    let totalDuration = 0;
    let elapsedDuration = 0;
    actionItemGroups.forEach((group, index) => {
      if (useFirstGroupAsInitialState && index === 0) {
        return;
      }
      const { actionItems } = group;
      const carrierItem = actionItems[getMaxDurationItemIndex(actionItems)];
      const { config, actionTypeId } = carrierItem;
      if (instanceItem.id === carrierItem.id) {
        elapsedDuration = totalDuration + verboseTimeElapsed;
      }
      const duration = getRenderType(actionTypeId) === RENDER_GENERAL2 ? 0 : config.duration;
      totalDuration += config.delay + duration;
    });
    return totalDuration > 0 ? optimizeFloat(elapsedDuration / totalDuration) : 0;
  }
  function reduceListToGroup({ actionList, actionItemId, rawData }) {
    const { actionItemGroups, continuousParameterGroups } = actionList;
    const newActionItems = [];
    const takeItemUntilMatch = (actionItem) => {
      newActionItems.push(
        (0, import_timm4.mergeIn)(actionItem, ["config"], {
          delay: 0,
          duration: 0
        })
      );
      return actionItem.id === actionItemId;
    };
    actionItemGroups && // @ts-expect-error - TS7031 - Binding element 'actionItems' implicitly has an 'any' type.
    actionItemGroups.some(({ actionItems }) => {
      return actionItems.some(takeItemUntilMatch);
    });
    continuousParameterGroups && // @ts-expect-error - TS7006 - Parameter 'paramGroup' implicitly has an 'any' type.
    continuousParameterGroups.some((paramGroup) => {
      const { continuousActionGroups } = paramGroup;
      return continuousActionGroups.some(({ actionItems }) => {
        return actionItems.some(takeItemUntilMatch);
      });
    });
    return (0, import_timm4.setIn)(rawData, ["actionLists"], {
      [actionList.id]: {
        id: actionList.id,
        actionItemGroups: [
          {
            actionItems: newActionItems
          }
        ]
      }
    });
  }
  function shouldNamespaceEventParameter(eventTypeId, { basedOn }) {
    return eventTypeId === EventTypeConsts.SCROLLING_IN_VIEW && (basedOn === EventBasedOn.ELEMENT || basedOn == null) || eventTypeId === EventTypeConsts.MOUSE_MOVE && basedOn === EventBasedOn.ELEMENT;
  }
  function getNamespacedParameterId(eventStateKey, continuousParameterGroupId) {
    const namespacedParameterId = eventStateKey + COLON_DELIMITER2 + continuousParameterGroupId;
    return namespacedParameterId;
  }
  function shouldAllowMediaQuery(mediaQueries, mediaQueryKey) {
    if (mediaQueryKey == null) {
      return true;
    }
    return mediaQueries.indexOf(mediaQueryKey) !== -1;
  }
  function mediaQueriesEqual(listA, listB) {
    return shallowEqual_default(listA && listA.sort(), listB && listB.sort());
  }
  function stringifyTarget(target) {
    if (typeof target === "string") {
      return target;
    }
    if (target.pluginElement && target.objectId) {
      return target.pluginElement + BAR_DELIMITER2 + target.objectId;
    }
    if (target.objectId) {
      return target.objectId;
    }
    const { id = "", selector = "", useEventTarget = "" } = target;
    return id + BAR_DELIMITER2 + selector + BAR_DELIMITER2 + useEventTarget;
  }
  var import_defaultTo, import_reduce, import_findLast, import_timm4, import_normalizeColor, BACKGROUND2, TRANSFORM2, TRANSLATE_3D2, SCALE_3D2, ROTATE_X2, ROTATE_Y2, ROTATE_Z2, SKEW2, PRESERVE_3D2, FLEX2, OPACITY2, FILTER2, FONT_VARIATION_SETTINGS2, WIDTH2, HEIGHT2, BACKGROUND_COLOR2, BORDER_COLOR2, COLOR2, CHILDREN2, IMMEDIATE_CHILDREN2, SIBLINGS2, PARENT2, DISPLAY2, WILL_CHANGE2, AUTO2, COMMA_DELIMITER2, COLON_DELIMITER2, BAR_DELIMITER2, RENDER_TRANSFORM2, RENDER_GENERAL2, RENDER_STYLE2, RENDER_PLUGIN2, TRANSFORM_MOVE2, TRANSFORM_SCALE2, TRANSFORM_ROTATE2, TRANSFORM_SKEW2, STYLE_OPACITY, STYLE_FILTER2, STYLE_FONT_VARIATION2, STYLE_SIZE2, STYLE_BACKGROUND_COLOR, STYLE_BORDER, STYLE_TEXT_COLOR, GENERAL_DISPLAY, OBJECT_VALUE, trim, colorStyleProps, willChangeProps, objectCache, instanceCount, elementCount, strictEqual, pxValueRegex, getFilterDefaults, getFontVariationDefaults, reduceFilters, reduceFontVariations, getItemConfigByKey, transformDefaults, filterDefaults, fontVariationDefaults, getFilterUnit, transformKeys, paramCapture, rgbValidRegex, rgbMatchRegex, processElementByType;
  var init_IX2VanillaUtils = __esm({
    "packages/systems/ix2/shared/logic/IX2VanillaUtils.ts"() {
      "use strict";
      import_defaultTo = __toESM(require_defaultTo());
      import_reduce = __toESM(require_reduce());
      import_findLast = __toESM(require_findLast());
      import_timm4 = __toESM(require_timm());
      init_shared_constants();
      init_shallowEqual();
      init_IX2EasingUtils();
      import_normalizeColor = __toESM(require_normalizeColor());
      init_IX2VanillaPlugins();
      init_IX2BrowserSupport();
      ({
        BACKGROUND: BACKGROUND2,
        TRANSFORM: TRANSFORM2,
        TRANSLATE_3D: TRANSLATE_3D2,
        SCALE_3D: SCALE_3D2,
        ROTATE_X: ROTATE_X2,
        ROTATE_Y: ROTATE_Y2,
        ROTATE_Z: ROTATE_Z2,
        SKEW: SKEW2,
        PRESERVE_3D: PRESERVE_3D2,
        FLEX: FLEX2,
        OPACITY: OPACITY2,
        FILTER: FILTER2,
        FONT_VARIATION_SETTINGS: FONT_VARIATION_SETTINGS2,
        WIDTH: WIDTH2,
        HEIGHT: HEIGHT2,
        BACKGROUND_COLOR: BACKGROUND_COLOR2,
        BORDER_COLOR: BORDER_COLOR2,
        COLOR: COLOR2,
        CHILDREN: CHILDREN2,
        IMMEDIATE_CHILDREN: IMMEDIATE_CHILDREN2,
        SIBLINGS: SIBLINGS2,
        PARENT: PARENT2,
        DISPLAY: DISPLAY2,
        WILL_CHANGE: WILL_CHANGE2,
        AUTO: AUTO2,
        COMMA_DELIMITER: COMMA_DELIMITER2,
        COLON_DELIMITER: COLON_DELIMITER2,
        BAR_DELIMITER: BAR_DELIMITER2,
        RENDER_TRANSFORM: RENDER_TRANSFORM2,
        RENDER_GENERAL: RENDER_GENERAL2,
        RENDER_STYLE: RENDER_STYLE2,
        RENDER_PLUGIN: RENDER_PLUGIN2
      } = IX2EngineConstants_exports);
      ({
        TRANSFORM_MOVE: TRANSFORM_MOVE2,
        TRANSFORM_SCALE: TRANSFORM_SCALE2,
        TRANSFORM_ROTATE: TRANSFORM_ROTATE2,
        TRANSFORM_SKEW: TRANSFORM_SKEW2,
        STYLE_OPACITY,
        STYLE_FILTER: STYLE_FILTER2,
        STYLE_FONT_VARIATION: STYLE_FONT_VARIATION2,
        STYLE_SIZE: STYLE_SIZE2,
        STYLE_BACKGROUND_COLOR,
        STYLE_BORDER,
        STYLE_TEXT_COLOR,
        GENERAL_DISPLAY,
        OBJECT_VALUE
      } = ActionTypeConsts);
      trim = (v) => v.trim();
      colorStyleProps = Object.freeze({
        [STYLE_BACKGROUND_COLOR]: BACKGROUND_COLOR2,
        [STYLE_BORDER]: BORDER_COLOR2,
        [STYLE_TEXT_COLOR]: COLOR2
      });
      willChangeProps = Object.freeze({
        [TRANSFORM_PREFIXED]: TRANSFORM2,
        [BACKGROUND_COLOR2]: BACKGROUND2,
        [OPACITY2]: OPACITY2,
        [FILTER2]: FILTER2,
        [WIDTH2]: WIDTH2,
        [HEIGHT2]: HEIGHT2,
        [FONT_VARIATION_SETTINGS2]: FONT_VARIATION_SETTINGS2
      });
      objectCache = /* @__PURE__ */ new Map();
      instanceCount = 1;
      elementCount = 1;
      strictEqual = (a, b) => a === b;
      pxValueRegex = /px/;
      getFilterDefaults = (actionState, filters) => (
        // @ts-expect-error - TS7006 - Parameter 'result' implicitly has an 'any' type. | TS7006 - Parameter 'filter' implicitly has an 'any' type.
        filters.reduce((result, filter) => {
          if (result[filter.type] == null) {
            result[filter.type] = // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type 'Readonly<{ blur: 0; 'hue-rotate': 0; invert: 0; grayscale: 0; saturate: 100; sepia: 0; contrast: 100; brightness: 100; }>'.
            filterDefaults[filter.type];
          }
          return result;
        }, actionState || {})
      );
      getFontVariationDefaults = (actionState, fontVariations) => fontVariations.reduce((result, fontVariation) => {
        if (result[fontVariation.type] == null) {
          result[fontVariation.type] = // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Readonly<{ wght: 0; opsz: 0; wdth: 0; slnt: 0; }>'.
          fontVariationDefaults[fontVariation.type] || // @ts-expect-error - TS2339 - Property 'defaultValue' does not exist on type 'FontVariationItemConfigType'.
          fontVariation.defaultValue || 0;
        }
        return result;
      }, actionState || {});
      reduceFilters = (result, filter) => {
        if (filter) {
          result[filter.type] = filter.value || 0;
        }
        return result;
      };
      reduceFontVariations = (result, fontVariation) => {
        if (fontVariation) {
          result[fontVariation.type] = fontVariation.value || 0;
        }
        return result;
      };
      getItemConfigByKey = (actionTypeId, key, config) => {
        if (isPluginType(actionTypeId)) {
          return getPluginConfig(actionTypeId)(config, key);
        }
        switch (actionTypeId) {
          case STYLE_FILTER2: {
            const filter = (0, import_findLast.default)(config.filters, ({ type }) => type === key);
            return filter ? filter.value : 0;
          }
          case STYLE_FONT_VARIATION2: {
            const fontVariation = (0, import_findLast.default)(
              config.fontVariations,
              ({ type }) => type === key
            );
            return fontVariation ? fontVariation.value : 0;
          }
          default:
            return config[key];
        }
      };
      transformDefaults = {
        [TRANSFORM_MOVE2]: Object.freeze({
          xValue: 0,
          yValue: 0,
          zValue: 0
        }),
        [TRANSFORM_SCALE2]: Object.freeze({
          xValue: 1,
          yValue: 1,
          zValue: 1
        }),
        [TRANSFORM_ROTATE2]: Object.freeze({
          xValue: 0,
          yValue: 0,
          zValue: 0
        }),
        [TRANSFORM_SKEW2]: Object.freeze({
          xValue: 0,
          yValue: 0
        })
      };
      filterDefaults = Object.freeze({
        blur: 0,
        "hue-rotate": 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100
      });
      fontVariationDefaults = Object.freeze({
        wght: 0,
        opsz: 0,
        wdth: 0,
        slnt: 0
      });
      getFilterUnit = (filterType, actionItemConfig) => {
        const filter = (0, import_findLast.default)(
          actionItemConfig.filters,
          ({ type }) => type === filterType
        );
        if (filter && filter.unit) {
          return filter.unit;
        }
        switch (filterType) {
          case "blur":
            return "px";
          case "hue-rotate":
            return "deg";
          default:
            return "%";
        }
      };
      transformKeys = Object.keys(transformDefaults);
      paramCapture = "\\(([^)]+)\\)";
      rgbValidRegex = /^rgb/;
      rgbMatchRegex = RegExp(`rgba?${paramCapture}`);
      processElementByType = ({
        effect,
        actionTypeId,
        elementApi
      }) => (
        // @ts-expect-error - TS7006 - Parameter 'element' implicitly has an 'any' type.
        (element) => {
          switch (actionTypeId) {
            case TRANSFORM_MOVE2:
            case TRANSFORM_SCALE2:
            case TRANSFORM_ROTATE2:
            case TRANSFORM_SKEW2:
              effect(element, TRANSFORM_PREFIXED, elementApi);
              break;
            case STYLE_FILTER2:
              effect(element, FILTER2, elementApi);
              break;
            case STYLE_FONT_VARIATION2:
              effect(element, FONT_VARIATION_SETTINGS2, elementApi);
              break;
            case STYLE_OPACITY:
              effect(element, OPACITY2, elementApi);
              break;
            case STYLE_SIZE2:
              effect(element, WIDTH2, elementApi);
              effect(element, HEIGHT2, elementApi);
              break;
            case STYLE_BACKGROUND_COLOR:
            case STYLE_BORDER:
            case STYLE_TEXT_COLOR:
              effect(element, colorStyleProps[actionTypeId], elementApi);
              break;
            case GENERAL_DISPLAY:
              effect(element, DISPLAY2, elementApi);
              break;
          }
        }
      );
    }
  });

  // packages/systems/ix2/shared/index.js
  var require_shared2 = __commonJS({
    "packages/systems/ix2/shared/index.js"(exports) {
      "use strict";
      var _interopRequireWildcard = require_interopRequireWildcard().default;
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.IX2VanillaUtils = exports.IX2VanillaPlugins = exports.IX2ElementsReducer = exports.IX2Easings = exports.IX2EasingUtils = exports.IX2BrowserSupport = void 0;
      var IX2BrowserSupport2 = _interopRequireWildcard((init_IX2BrowserSupport(), __toCommonJS(IX2BrowserSupport_exports)));
      exports.IX2BrowserSupport = IX2BrowserSupport2;
      var IX2Easings = _interopRequireWildcard((init_IX2Easings(), __toCommonJS(IX2Easings_exports)));
      exports.IX2Easings = IX2Easings;
      var IX2EasingUtils2 = _interopRequireWildcard((init_IX2EasingUtils(), __toCommonJS(IX2EasingUtils_exports)));
      exports.IX2EasingUtils = IX2EasingUtils2;
      var IX2ElementsReducer2 = _interopRequireWildcard((init_IX2ElementsReducer(), __toCommonJS(IX2ElementsReducer_exports)));
      exports.IX2ElementsReducer = IX2ElementsReducer2;
      var IX2VanillaPlugins2 = _interopRequireWildcard((init_IX2VanillaPlugins(), __toCommonJS(IX2VanillaPlugins_exports)));
      exports.IX2VanillaPlugins = IX2VanillaPlugins2;
      var IX2VanillaUtils5 = _interopRequireWildcard((init_IX2VanillaUtils(), __toCommonJS(IX2VanillaUtils_exports)));
      exports.IX2VanillaUtils = IX2VanillaUtils5;
    }
  });

  // packages/systems/ix2/engine/reducers/IX2InstancesReducer.ts
  var import_shared, import_timm5, IX2_RAW_DATA_IMPORTED3, IX2_SESSION_STOPPED4, IX2_INSTANCE_ADDED3, IX2_INSTANCE_STARTED2, IX2_INSTANCE_REMOVED2, IX2_ANIMATION_FRAME_CHANGED3, optimizeFloat2, applyEasing2, createBezierEasing2, RENDER_GENERAL3, getItemConfigByKey2, getRenderType2, getStyleProp2, continuousInstance, timedInstance, ixInstances;
  var init_IX2InstancesReducer = __esm({
    "packages/systems/ix2/engine/reducers/IX2InstancesReducer.ts"() {
      "use strict";
      init_shared_constants();
      import_shared = __toESM(require_shared2());
      import_timm5 = __toESM(require_timm());
      ({
        IX2_RAW_DATA_IMPORTED: IX2_RAW_DATA_IMPORTED3,
        IX2_SESSION_STOPPED: IX2_SESSION_STOPPED4,
        IX2_INSTANCE_ADDED: IX2_INSTANCE_ADDED3,
        IX2_INSTANCE_STARTED: IX2_INSTANCE_STARTED2,
        IX2_INSTANCE_REMOVED: IX2_INSTANCE_REMOVED2,
        IX2_ANIMATION_FRAME_CHANGED: IX2_ANIMATION_FRAME_CHANGED3
      } = IX2EngineActionTypes_exports);
      ({ optimizeFloat: optimizeFloat2, applyEasing: applyEasing2, createBezierEasing: createBezierEasing2 } = import_shared.IX2EasingUtils);
      ({ RENDER_GENERAL: RENDER_GENERAL3 } = IX2EngineConstants_exports);
      ({ getItemConfigByKey: getItemConfigByKey2, getRenderType: getRenderType2, getStyleProp: getStyleProp2 } = import_shared.IX2VanillaUtils);
      continuousInstance = (state, action) => {
        const {
          position: lastPosition,
          parameterId,
          actionGroups,
          destinationKeys,
          smoothing,
          restingValue,
          actionTypeId,
          customEasingFn,
          skipMotion,
          skipToValue
        } = state;
        const { parameters } = action.payload;
        let velocity = Math.max(1 - smoothing, 0.01);
        let paramValue = parameters[parameterId];
        if (paramValue == null) {
          velocity = 1;
          paramValue = restingValue;
        }
        const nextPosition = Math.max(paramValue, 0) || 0;
        const positionDiff = optimizeFloat2(nextPosition - lastPosition);
        const position = skipMotion ? skipToValue : optimizeFloat2(lastPosition + positionDiff * velocity);
        const keyframePosition = position * 100;
        if (position === lastPosition && state.current) {
          return state;
        }
        let fromActionItem;
        let toActionItem;
        let positionOffset;
        let positionRange;
        for (let i = 0, { length } = actionGroups; i < length; i++) {
          const { keyframe, actionItems } = actionGroups[i];
          if (i === 0) {
            fromActionItem = actionItems[0];
          }
          if (keyframePosition >= keyframe) {
            fromActionItem = actionItems[0];
            const nextGroup = actionGroups[i + 1];
            const hasNextItem = nextGroup && keyframePosition !== keyframe;
            toActionItem = hasNextItem ? nextGroup.actionItems[0] : null;
            if (hasNextItem) {
              positionOffset = keyframe / 100;
              positionRange = (nextGroup.keyframe - keyframe) / 100;
            }
          }
        }
        const current = {};
        if (fromActionItem && !toActionItem) {
          for (let i = 0, { length } = destinationKeys; i < length; i++) {
            const key = destinationKeys[i];
            current[key] = getItemConfigByKey2(
              actionTypeId,
              key,
              fromActionItem.config
            );
          }
        } else if (fromActionItem && toActionItem && positionOffset !== void 0 && positionRange !== void 0) {
          const localPosition = (position - positionOffset) / positionRange;
          const easing = fromActionItem.config.easing;
          const eased = applyEasing2(easing, localPosition, customEasingFn);
          for (let i = 0, { length } = destinationKeys; i < length; i++) {
            const key = destinationKeys[i];
            const fromVal = getItemConfigByKey2(
              actionTypeId,
              key,
              fromActionItem.config
            );
            const toVal = getItemConfigByKey2(actionTypeId, key, toActionItem.config);
            const diff = toVal - fromVal;
            const value = diff * eased + fromVal;
            current[key] = value;
          }
        }
        return (0, import_timm5.merge)(state, {
          position,
          current
        });
      };
      timedInstance = (state, action) => {
        const {
          active,
          origin,
          start,
          immediate,
          renderType,
          verbose,
          actionItem,
          destination,
          destinationKeys,
          pluginDuration,
          instanceDelay,
          customEasingFn,
          skipMotion
        } = state;
        const easing = actionItem.config.easing;
        let { duration, delay } = actionItem.config;
        if (pluginDuration != null) {
          duration = pluginDuration;
        }
        delay = instanceDelay != null ? instanceDelay : delay;
        if (renderType === RENDER_GENERAL3) {
          duration = 0;
        } else if (immediate || skipMotion) {
          duration = delay = 0;
        }
        const { now } = action.payload;
        if (active && origin) {
          const delta = now - (start + delay);
          if (verbose) {
            const verboseDelta = now - start;
            const verboseDuration = duration + delay;
            const verbosePosition = optimizeFloat2(
              Math.min(Math.max(0, verboseDelta / verboseDuration), 1)
            );
            state = (0, import_timm5.set)(
              state,
              "verboseTimeElapsed",
              verboseDuration * verbosePosition
            );
          }
          if (delta < 0) {
            return state;
          }
          const position = optimizeFloat2(Math.min(Math.max(0, delta / duration), 1));
          const eased = applyEasing2(easing, position, customEasingFn);
          const newProps = {};
          let current = null;
          if (destinationKeys.length) {
            current = destinationKeys.reduce((result, key) => {
              const destValue = destination[key];
              const originVal = parseFloat(origin[key]) || 0;
              const diff = parseFloat(destValue) - originVal;
              const value = diff * eased + originVal;
              result[key] = value;
              return result;
            }, {});
          }
          newProps.current = current;
          newProps.position = position;
          if (position === 1) {
            newProps.active = false;
            newProps.complete = true;
          }
          return (0, import_timm5.merge)(state, newProps);
        }
        return state;
      };
      ixInstances = (state = Object.freeze({}), action) => {
        switch (action.type) {
          case IX2_RAW_DATA_IMPORTED3: {
            return action.payload.ixInstances || Object.freeze({});
          }
          case IX2_SESSION_STOPPED4: {
            return Object.freeze({});
          }
          case IX2_INSTANCE_ADDED3: {
            const {
              instanceId,
              elementId,
              actionItem,
              eventId,
              eventTarget,
              eventStateKey,
              actionListId,
              groupIndex,
              isCarrier,
              origin,
              destination,
              immediate,
              verbose,
              continuous,
              parameterId,
              actionGroups,
              smoothing,
              restingValue,
              pluginInstance,
              pluginDuration,
              instanceDelay,
              skipMotion,
              skipToValue
            } = action.payload;
            const { actionTypeId } = actionItem;
            const renderType = getRenderType2(actionTypeId);
            const styleProp = getStyleProp2(renderType, actionTypeId);
            const destinationKeys = Object.keys(destination).filter(
              (key) => (
                // Skip null destination values
                destination[key] != null && // Skip string destination values
                typeof destination[key] !== "string"
              )
            );
            const { easing } = actionItem.config;
            return (0, import_timm5.set)(state, instanceId, {
              id: instanceId,
              elementId,
              active: false,
              position: 0,
              start: 0,
              origin,
              destination,
              destinationKeys,
              immediate,
              verbose,
              current: null,
              actionItem,
              actionTypeId,
              eventId,
              eventTarget,
              eventStateKey,
              actionListId,
              groupIndex,
              renderType,
              isCarrier,
              styleProp,
              continuous,
              parameterId,
              actionGroups,
              smoothing,
              restingValue,
              pluginInstance,
              pluginDuration,
              instanceDelay,
              skipMotion,
              skipToValue,
              customEasingFn: Array.isArray(easing) && easing.length === 4 ? (
                // @ts-expect-error - TS2345 - Argument of type 'any[]' is not assignable to parameter of type 'IX2EasingCustomType'.
                createBezierEasing2(easing)
              ) : void 0
            });
          }
          case IX2_INSTANCE_STARTED2: {
            const { instanceId, time } = action.payload;
            return (0, import_timm5.mergeIn)(state, [instanceId], {
              active: true,
              complete: false,
              start: time
            });
          }
          case IX2_INSTANCE_REMOVED2: {
            const { instanceId } = action.payload;
            if (!state[instanceId]) {
              return state;
            }
            const newState = {};
            const keys = Object.keys(state);
            const { length } = keys;
            for (let i = 0; i < length; i++) {
              const key = keys[i];
              if (key !== instanceId) {
                newState[key] = state[key];
              }
            }
            return newState;
          }
          case IX2_ANIMATION_FRAME_CHANGED3: {
            let newState = state;
            const keys = Object.keys(state);
            const { length } = keys;
            for (let i = 0; i < length; i++) {
              const key = keys[i];
              const instance = state[key];
              const reducer = instance.continuous ? continuousInstance : timedInstance;
              newState = (0, import_timm5.set)(newState, key, reducer(instance, action));
            }
            return newState;
          }
          default: {
            return state;
          }
        }
      };
    }
  });

  // packages/systems/ix2/engine/reducers/IX2ParametersReducer.ts
  var IX2_RAW_DATA_IMPORTED4, IX2_SESSION_STOPPED5, IX2_PARAMETER_CHANGED2, ixParameters;
  var init_IX2ParametersReducer = __esm({
    "packages/systems/ix2/engine/reducers/IX2ParametersReducer.ts"() {
      "use strict";
      init_shared_constants();
      ({ IX2_RAW_DATA_IMPORTED: IX2_RAW_DATA_IMPORTED4, IX2_SESSION_STOPPED: IX2_SESSION_STOPPED5, IX2_PARAMETER_CHANGED: IX2_PARAMETER_CHANGED2 } = IX2EngineActionTypes_exports);
      ixParameters = (state = {
        /*mutable flat state*/
      }, action) => {
        switch (action.type) {
          case IX2_RAW_DATA_IMPORTED4: {
            return action.payload.ixParameters || {
              /*mutable flat state*/
            };
          }
          case IX2_SESSION_STOPPED5: {
            return {
              /*mutable flat state*/
            };
          }
          case IX2_PARAMETER_CHANGED2: {
            const { key, value } = action.payload;
            state[key] = value;
            return state;
          }
          default: {
            return state;
          }
        }
      };
    }
  });

  // packages/systems/ix2/engine/reducers/IX2Reducer.ts
  var IX2Reducer_exports = {};
  __export(IX2Reducer_exports, {
    default: () => IX2Reducer_default
  });
  var import_redux, import_shared2, ixElements2, IX2Reducer_default;
  var init_IX2Reducer = __esm({
    "packages/systems/ix2/engine/reducers/IX2Reducer.ts"() {
      "use strict";
      import_redux = __toESM(require_lib2());
      init_IX2DataReducer();
      init_IX2RequestReducer();
      init_IX2SessionReducer();
      import_shared2 = __toESM(require_shared2());
      init_IX2InstancesReducer();
      init_IX2ParametersReducer();
      ({ ixElements: ixElements2 } = import_shared2.IX2ElementsReducer);
      IX2Reducer_default = (0, import_redux.combineReducers)({
        // @ts-expect-error - TS2322 - Type '(state: FixMeAny | null | undefined, action: {    type: typeof IX2_RAW_DATA_IMPORTED;    payload: {        ixData: FixMeAny;    };}) => any' is not assignable to type 'Reducer<any>'.
        ixData,
        ixRequest,
        ixSession,
        ixElements: ixElements2,
        ixInstances,
        ixParameters
      });
    }
  });

  // node_modules/lodash/isString.js
  var require_isString = __commonJS({
    "node_modules/lodash/isString.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isArray = require_isArray();
      var isObjectLike = require_isObjectLike();
      var stringTag = "[object String]";
      function isString(value) {
        return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
      }
      module.exports = isString;
    }
  });

  // node_modules/lodash/_asciiSize.js
  var require_asciiSize = __commonJS({
    "node_modules/lodash/_asciiSize.js"(exports, module) {
      var baseProperty = require_baseProperty();
      var asciiSize = baseProperty("length");
      module.exports = asciiSize;
    }
  });

  // node_modules/lodash/_hasUnicode.js
  var require_hasUnicode = __commonJS({
    "node_modules/lodash/_hasUnicode.js"(exports, module) {
      var rsAstralRange = "\\ud800-\\udfff";
      var rsComboMarksRange = "\\u0300-\\u036f";
      var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
      var rsComboSymbolsRange = "\\u20d0-\\u20ff";
      var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
      var rsVarRange = "\\ufe0e\\ufe0f";
      var rsZWJ = "\\u200d";
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      function hasUnicode(string) {
        return reHasUnicode.test(string);
      }
      module.exports = hasUnicode;
    }
  });

  // node_modules/lodash/_unicodeSize.js
  var require_unicodeSize = __commonJS({
    "node_modules/lodash/_unicodeSize.js"(exports, module) {
      var rsAstralRange = "\\ud800-\\udfff";
      var rsComboMarksRange = "\\u0300-\\u036f";
      var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
      var rsComboSymbolsRange = "\\u20d0-\\u20ff";
      var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
      var rsVarRange = "\\ufe0e\\ufe0f";
      var rsAstral = "[" + rsAstralRange + "]";
      var rsCombo = "[" + rsComboRange + "]";
      var rsFitz = "\\ud83c[\\udffb-\\udfff]";
      var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
      var rsNonAstral = "[^" + rsAstralRange + "]";
      var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
      var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
      var rsZWJ = "\\u200d";
      var reOptMod = rsModifier + "?";
      var rsOptVar = "[" + rsVarRange + "]?";
      var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
      var rsSeq = rsOptVar + reOptMod + rsOptJoin;
      var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string)) {
          ++result;
        }
        return result;
      }
      module.exports = unicodeSize;
    }
  });

  // node_modules/lodash/_stringSize.js
  var require_stringSize = __commonJS({
    "node_modules/lodash/_stringSize.js"(exports, module) {
      var asciiSize = require_asciiSize();
      var hasUnicode = require_hasUnicode();
      var unicodeSize = require_unicodeSize();
      function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
      }
      module.exports = stringSize;
    }
  });

  // node_modules/lodash/size.js
  var require_size = __commonJS({
    "node_modules/lodash/size.js"(exports, module) {
      var baseKeys = require_baseKeys();
      var getTag = require_getTag();
      var isArrayLike = require_isArrayLike();
      var isString = require_isString();
      var stringSize = require_stringSize();
      var mapTag = "[object Map]";
      var setTag = "[object Set]";
      function size2(collection) {
        if (collection == null) {
          return 0;
        }
        if (isArrayLike(collection)) {
          return isString(collection) ? stringSize(collection) : collection.length;
        }
        var tag = getTag(collection);
        if (tag == mapTag || tag == setTag) {
          return collection.size;
        }
        return baseKeys(collection).length;
      }
      module.exports = size2;
    }
  });

  // node_modules/lodash/negate.js
  var require_negate = __commonJS({
    "node_modules/lodash/negate.js"(exports, module) {
      var FUNC_ERROR_TEXT = "Expected a function";
      function negate(predicate) {
        if (typeof predicate != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return !predicate.call(this);
            case 1:
              return !predicate.call(this, args[0]);
            case 2:
              return !predicate.call(this, args[0], args[1]);
            case 3:
              return !predicate.call(this, args[0], args[1], args[2]);
          }
          return !predicate.apply(this, args);
        };
      }
      module.exports = negate;
    }
  });

  // node_modules/lodash/_defineProperty.js
  var require_defineProperty = __commonJS({
    "node_modules/lodash/_defineProperty.js"(exports, module) {
      var getNative = require_getNative();
      var defineProperty = function() {
        try {
          var func = getNative(Object, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e) {
        }
      }();
      module.exports = defineProperty;
    }
  });

  // node_modules/lodash/_baseAssignValue.js
  var require_baseAssignValue = __commonJS({
    "node_modules/lodash/_baseAssignValue.js"(exports, module) {
      var defineProperty = require_defineProperty();
      function baseAssignValue(object, key, value) {
        if (key == "__proto__" && defineProperty) {
          defineProperty(object, key, {
            "configurable": true,
            "enumerable": true,
            "value": value,
            "writable": true
          });
        } else {
          object[key] = value;
        }
      }
      module.exports = baseAssignValue;
    }
  });

  // node_modules/lodash/_assignValue.js
  var require_assignValue = __commonJS({
    "node_modules/lodash/_assignValue.js"(exports, module) {
      var baseAssignValue = require_baseAssignValue();
      var eq = require_eq();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function assignValue(object, key, value) {
        var objValue = object[key];
        if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      module.exports = assignValue;
    }
  });

  // node_modules/lodash/_baseSet.js
  var require_baseSet = __commonJS({
    "node_modules/lodash/_baseSet.js"(exports, module) {
      var assignValue = require_assignValue();
      var castPath = require_castPath();
      var isIndex = require_isIndex();
      var isObject = require_isObject();
      var toKey = require_toKey();
      function baseSet(object, path, value, customizer) {
        if (!isObject(object)) {
          return object;
        }
        path = castPath(path, object);
        var index = -1, length = path.length, lastIndex = length - 1, nested = object;
        while (nested != null && ++index < length) {
          var key = toKey(path[index]), newValue = value;
          if (key === "__proto__" || key === "constructor" || key === "prototype") {
            return object;
          }
          if (index != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : void 0;
            if (newValue === void 0) {
              newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
            }
          }
          assignValue(nested, key, newValue);
          nested = nested[key];
        }
        return object;
      }
      module.exports = baseSet;
    }
  });

  // node_modules/lodash/_basePickBy.js
  var require_basePickBy = __commonJS({
    "node_modules/lodash/_basePickBy.js"(exports, module) {
      var baseGet = require_baseGet();
      var baseSet = require_baseSet();
      var castPath = require_castPath();
      function basePickBy(object, paths, predicate) {
        var index = -1, length = paths.length, result = {};
        while (++index < length) {
          var path = paths[index], value = baseGet(object, path);
          if (predicate(value, path)) {
            baseSet(result, castPath(path, object), value);
          }
        }
        return result;
      }
      module.exports = basePickBy;
    }
  });

  // node_modules/lodash/_getSymbolsIn.js
  var require_getSymbolsIn = __commonJS({
    "node_modules/lodash/_getSymbolsIn.js"(exports, module) {
      var arrayPush = require_arrayPush();
      var getPrototype = require_getPrototype();
      var getSymbols = require_getSymbols();
      var stubArray = require_stubArray();
      var nativeGetSymbols = Object.getOwnPropertySymbols;
      var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
        var result = [];
        while (object) {
          arrayPush(result, getSymbols(object));
          object = getPrototype(object);
        }
        return result;
      };
      module.exports = getSymbolsIn;
    }
  });

  // node_modules/lodash/_nativeKeysIn.js
  var require_nativeKeysIn = __commonJS({
    "node_modules/lodash/_nativeKeysIn.js"(exports, module) {
      function nativeKeysIn(object) {
        var result = [];
        if (object != null) {
          for (var key in Object(object)) {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = nativeKeysIn;
    }
  });

  // node_modules/lodash/_baseKeysIn.js
  var require_baseKeysIn = __commonJS({
    "node_modules/lodash/_baseKeysIn.js"(exports, module) {
      var isObject = require_isObject();
      var isPrototype = require_isPrototype();
      var nativeKeysIn = require_nativeKeysIn();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseKeysIn(object) {
        if (!isObject(object)) {
          return nativeKeysIn(object);
        }
        var isProto = isPrototype(object), result = [];
        for (var key in object) {
          if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = baseKeysIn;
    }
  });

  // node_modules/lodash/keysIn.js
  var require_keysIn = __commonJS({
    "node_modules/lodash/keysIn.js"(exports, module) {
      var arrayLikeKeys = require_arrayLikeKeys();
      var baseKeysIn = require_baseKeysIn();
      var isArrayLike = require_isArrayLike();
      function keysIn(object) {
        return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
      }
      module.exports = keysIn;
    }
  });

  // node_modules/lodash/_getAllKeysIn.js
  var require_getAllKeysIn = __commonJS({
    "node_modules/lodash/_getAllKeysIn.js"(exports, module) {
      var baseGetAllKeys = require_baseGetAllKeys();
      var getSymbolsIn = require_getSymbolsIn();
      var keysIn = require_keysIn();
      function getAllKeysIn(object) {
        return baseGetAllKeys(object, keysIn, getSymbolsIn);
      }
      module.exports = getAllKeysIn;
    }
  });

  // node_modules/lodash/pickBy.js
  var require_pickBy = __commonJS({
    "node_modules/lodash/pickBy.js"(exports, module) {
      var arrayMap = require_arrayMap();
      var baseIteratee = require_baseIteratee();
      var basePickBy = require_basePickBy();
      var getAllKeysIn = require_getAllKeysIn();
      function pickBy(object, predicate) {
        if (object == null) {
          return {};
        }
        var props = arrayMap(getAllKeysIn(object), function(prop) {
          return [prop];
        });
        predicate = baseIteratee(predicate);
        return basePickBy(object, props, function(value, path) {
          return predicate(value, path[0]);
        });
      }
      module.exports = pickBy;
    }
  });

  // node_modules/lodash/omitBy.js
  var require_omitBy = __commonJS({
    "node_modules/lodash/omitBy.js"(exports, module) {
      var baseIteratee = require_baseIteratee();
      var negate = require_negate();
      var pickBy = require_pickBy();
      function omitBy2(object, predicate) {
        return pickBy(object, negate(baseIteratee(predicate)));
      }
      module.exports = omitBy2;
    }
  });

  // node_modules/lodash/isEmpty.js
  var require_isEmpty = __commonJS({
    "node_modules/lodash/isEmpty.js"(exports, module) {
      var baseKeys = require_baseKeys();
      var getTag = require_getTag();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var isArrayLike = require_isArrayLike();
      var isBuffer = require_isBuffer();
      var isPrototype = require_isPrototype();
      var isTypedArray = require_isTypedArray();
      var mapTag = "[object Map]";
      var setTag = "[object Set]";
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function isEmpty2(value) {
        if (value == null) {
          return true;
        }
        if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
          return !value.length;
        }
        var tag = getTag(value);
        if (tag == mapTag || tag == setTag) {
          return !value.size;
        }
        if (isPrototype(value)) {
          return !baseKeys(value).length;
        }
        for (var key in value) {
          if (hasOwnProperty.call(value, key)) {
            return false;
          }
        }
        return true;
      }
      module.exports = isEmpty2;
    }
  });

  // node_modules/lodash/mapValues.js
  var require_mapValues = __commonJS({
    "node_modules/lodash/mapValues.js"(exports, module) {
      var baseAssignValue = require_baseAssignValue();
      var baseForOwn = require_baseForOwn();
      var baseIteratee = require_baseIteratee();
      function mapValues2(object, iteratee) {
        var result = {};
        iteratee = baseIteratee(iteratee, 3);
        baseForOwn(object, function(value, key, object2) {
          baseAssignValue(result, key, iteratee(value, key, object2));
        });
        return result;
      }
      module.exports = mapValues2;
    }
  });

  // node_modules/lodash/_arrayEach.js
  var require_arrayEach = __commonJS({
    "node_modules/lodash/_arrayEach.js"(exports, module) {
      function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      module.exports = arrayEach;
    }
  });

  // node_modules/lodash/_castFunction.js
  var require_castFunction = __commonJS({
    "node_modules/lodash/_castFunction.js"(exports, module) {
      var identity = require_identity();
      function castFunction(value) {
        return typeof value == "function" ? value : identity;
      }
      module.exports = castFunction;
    }
  });

  // node_modules/lodash/forEach.js
  var require_forEach = __commonJS({
    "node_modules/lodash/forEach.js"(exports, module) {
      var arrayEach = require_arrayEach();
      var baseEach = require_baseEach();
      var castFunction = require_castFunction();
      var isArray = require_isArray();
      function forEach2(collection, iteratee) {
        var func = isArray(collection) ? arrayEach : baseEach;
        return func(collection, castFunction(iteratee));
      }
      module.exports = forEach2;
    }
  });

  // node_modules/lodash/now.js
  var require_now = __commonJS({
    "node_modules/lodash/now.js"(exports, module) {
      var root = require_root();
      var now = function() {
        return root.Date.now();
      };
      module.exports = now;
    }
  });

  // node_modules/lodash/debounce.js
  var require_debounce = __commonJS({
    "node_modules/lodash/debounce.js"(exports, module) {
      var isObject = require_isObject();
      var now = require_now();
      var toNumber = require_toNumber();
      var FUNC_ERROR_TEXT = "Expected a function";
      var nativeMax = Math.max;
      var nativeMin = Math.min;
      function debounce(func, wait, options) {
        var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject(options)) {
          leading = !!options.leading;
          maxing = "maxWait" in options;
          maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = void 0;
          lastInvokeTime = time;
          result = func.apply(thisArg, args);
          return result;
        }
        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = setTimeout(timerExpired, wait);
          return leading ? invokeFunc(time) : result;
        }
        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
          return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
          return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
        }
        function timerExpired() {
          var time = now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          timerId = setTimeout(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
          timerId = void 0;
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = void 0;
          return result;
        }
        function cancel() {
          if (timerId !== void 0) {
            clearTimeout(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = void 0;
        }
        function flush() {
          return timerId === void 0 ? result : trailingEdge(now());
        }
        function debounced() {
          var time = now(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === void 0) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              clearTimeout(timerId);
              timerId = setTimeout(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === void 0) {
            timerId = setTimeout(timerExpired, wait);
          }
          return result;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }
      module.exports = debounce;
    }
  });

  // node_modules/lodash/throttle.js
  var require_throttle = __commonJS({
    "node_modules/lodash/throttle.js"(exports, module) {
      var debounce = require_debounce();
      var isObject = require_isObject();
      var FUNC_ERROR_TEXT = "Expected a function";
      function throttle2(func, wait, options) {
        var leading = true, trailing = true;
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        if (isObject(options)) {
          leading = "leading" in options ? !!options.leading : leading;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        return debounce(func, wait, {
          "leading": leading,
          "maxWait": wait,
          "trailing": trailing
        });
      }
      module.exports = throttle2;
    }
  });

  // packages/systems/ix2/engine/actions/IX2EngineActions.ts
  var IX2EngineActions_exports = {};
  __export(IX2EngineActions_exports, {
    actionListPlaybackChanged: () => actionListPlaybackChanged,
    animationFrameChanged: () => animationFrameChanged,
    clearRequested: () => clearRequested,
    elementStateChanged: () => elementStateChanged,
    eventListenerAdded: () => eventListenerAdded,
    eventStateChanged: () => eventStateChanged,
    instanceAdded: () => instanceAdded,
    instanceRemoved: () => instanceRemoved,
    instanceStarted: () => instanceStarted,
    mediaQueriesDefined: () => mediaQueriesDefined,
    parameterChanged: () => parameterChanged,
    playbackRequested: () => playbackRequested,
    previewRequested: () => previewRequested,
    rawDataImported: () => rawDataImported,
    sessionInitialized: () => sessionInitialized,
    sessionStarted: () => sessionStarted,
    sessionStopped: () => sessionStopped,
    stopRequested: () => stopRequested,
    testFrameRendered: () => testFrameRendered,
    viewportWidthChanged: () => viewportWidthChanged
  });
  var import_shared3, IX2_RAW_DATA_IMPORTED5, IX2_SESSION_INITIALIZED3, IX2_SESSION_STARTED3, IX2_SESSION_STOPPED6, IX2_PREVIEW_REQUESTED3, IX2_PLAYBACK_REQUESTED3, IX2_STOP_REQUESTED3, IX2_CLEAR_REQUESTED3, IX2_EVENT_LISTENER_ADDED3, IX2_TEST_FRAME_RENDERED3, IX2_EVENT_STATE_CHANGED3, IX2_ANIMATION_FRAME_CHANGED4, IX2_PARAMETER_CHANGED3, IX2_INSTANCE_ADDED4, IX2_INSTANCE_STARTED3, IX2_INSTANCE_REMOVED3, IX2_ELEMENT_STATE_CHANGED3, IX2_ACTION_LIST_PLAYBACK_CHANGED3, IX2_VIEWPORT_WIDTH_CHANGED3, IX2_MEDIA_QUERIES_DEFINED3, reifyState2, rawDataImported, sessionInitialized, sessionStarted, sessionStopped, previewRequested, playbackRequested, stopRequested, clearRequested, eventListenerAdded, testFrameRendered, eventStateChanged, animationFrameChanged, parameterChanged, instanceAdded, instanceStarted, instanceRemoved, elementStateChanged, actionListPlaybackChanged, viewportWidthChanged, mediaQueriesDefined;
  var init_IX2EngineActions = __esm({
    "packages/systems/ix2/engine/actions/IX2EngineActions.ts"() {
      "use strict";
      init_shared_constants();
      import_shared3 = __toESM(require_shared2());
      ({
        IX2_RAW_DATA_IMPORTED: IX2_RAW_DATA_IMPORTED5,
        IX2_SESSION_INITIALIZED: IX2_SESSION_INITIALIZED3,
        IX2_SESSION_STARTED: IX2_SESSION_STARTED3,
        IX2_SESSION_STOPPED: IX2_SESSION_STOPPED6,
        IX2_PREVIEW_REQUESTED: IX2_PREVIEW_REQUESTED3,
        IX2_PLAYBACK_REQUESTED: IX2_PLAYBACK_REQUESTED3,
        IX2_STOP_REQUESTED: IX2_STOP_REQUESTED3,
        IX2_CLEAR_REQUESTED: IX2_CLEAR_REQUESTED3,
        IX2_EVENT_LISTENER_ADDED: IX2_EVENT_LISTENER_ADDED3,
        IX2_TEST_FRAME_RENDERED: IX2_TEST_FRAME_RENDERED3,
        IX2_EVENT_STATE_CHANGED: IX2_EVENT_STATE_CHANGED3,
        IX2_ANIMATION_FRAME_CHANGED: IX2_ANIMATION_FRAME_CHANGED4,
        IX2_PARAMETER_CHANGED: IX2_PARAMETER_CHANGED3,
        IX2_INSTANCE_ADDED: IX2_INSTANCE_ADDED4,
        IX2_INSTANCE_STARTED: IX2_INSTANCE_STARTED3,
        IX2_INSTANCE_REMOVED: IX2_INSTANCE_REMOVED3,
        IX2_ELEMENT_STATE_CHANGED: IX2_ELEMENT_STATE_CHANGED3,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: IX2_ACTION_LIST_PLAYBACK_CHANGED3,
        IX2_VIEWPORT_WIDTH_CHANGED: IX2_VIEWPORT_WIDTH_CHANGED3,
        IX2_MEDIA_QUERIES_DEFINED: IX2_MEDIA_QUERIES_DEFINED3
      } = IX2EngineActionTypes_exports);
      ({ reifyState: reifyState2 } = import_shared3.IX2VanillaUtils);
      rawDataImported = (rawData) => ({
        type: IX2_RAW_DATA_IMPORTED5,
        payload: {
          ...reifyState2(rawData)
        }
      });
      sessionInitialized = ({
        hasBoundaryNodes,
        reducedMotion
      }) => ({
        type: IX2_SESSION_INITIALIZED3,
        payload: {
          hasBoundaryNodes,
          reducedMotion
        }
      });
      sessionStarted = () => ({
        type: IX2_SESSION_STARTED3
      });
      sessionStopped = () => ({
        type: IX2_SESSION_STOPPED6
      });
      previewRequested = ({
        rawData,
        defer
      }) => ({
        type: IX2_PREVIEW_REQUESTED3,
        payload: {
          defer,
          rawData
        }
      });
      playbackRequested = ({
        actionTypeId = ActionTypeConsts.GENERAL_START_ACTION,
        actionListId,
        actionItemId,
        eventId,
        allowEvents,
        immediate,
        testManual,
        verbose,
        rawData
      }) => ({
        type: IX2_PLAYBACK_REQUESTED3,
        payload: {
          actionTypeId,
          actionListId,
          actionItemId,
          testManual,
          eventId,
          allowEvents,
          immediate,
          verbose,
          rawData
        }
      });
      stopRequested = (actionListId) => ({
        type: IX2_STOP_REQUESTED3,
        payload: {
          actionListId
        }
      });
      clearRequested = () => ({
        type: IX2_CLEAR_REQUESTED3
      });
      eventListenerAdded = (target, listenerParams) => ({
        type: IX2_EVENT_LISTENER_ADDED3,
        payload: {
          target,
          listenerParams
        }
      });
      testFrameRendered = (step = 1) => ({
        type: IX2_TEST_FRAME_RENDERED3,
        payload: {
          step
        }
      });
      eventStateChanged = (stateKey, newState) => ({
        type: IX2_EVENT_STATE_CHANGED3,
        payload: {
          stateKey,
          newState
        }
      });
      animationFrameChanged = (now, parameters) => ({
        type: IX2_ANIMATION_FRAME_CHANGED4,
        payload: {
          now,
          parameters
        }
      });
      parameterChanged = (key, value) => ({
        type: IX2_PARAMETER_CHANGED3,
        payload: {
          key,
          value
        }
      });
      instanceAdded = (options) => ({
        type: IX2_INSTANCE_ADDED4,
        payload: {
          ...options
        }
      });
      instanceStarted = (instanceId, time) => ({
        type: IX2_INSTANCE_STARTED3,
        payload: {
          instanceId,
          time
        }
      });
      instanceRemoved = (instanceId) => ({
        type: IX2_INSTANCE_REMOVED3,
        payload: {
          instanceId
        }
      });
      elementStateChanged = (elementId, actionTypeId, current, actionItem) => ({
        type: IX2_ELEMENT_STATE_CHANGED3,
        payload: {
          elementId,
          actionTypeId,
          current,
          actionItem
        }
      });
      actionListPlaybackChanged = ({
        actionListId,
        isPlaying
      }) => ({
        type: IX2_ACTION_LIST_PLAYBACK_CHANGED3,
        payload: {
          actionListId,
          isPlaying
        }
      });
      viewportWidthChanged = ({
        width,
        mediaQueries
      }) => ({
        type: IX2_VIEWPORT_WIDTH_CHANGED3,
        payload: {
          width,
          mediaQueries
        }
      });
      mediaQueriesDefined = () => ({
        type: IX2_MEDIA_QUERIES_DEFINED3
      });
    }
  });

  // packages/systems/ix2/engine/logic/IX2BrowserApi.ts
  var IX2BrowserApi_exports = {};
  __export(IX2BrowserApi_exports, {
    elementContains: () => elementContains,
    getChildElements: () => getChildElements,
    getClosestElement: () => getClosestElement,
    getProperty: () => getProperty,
    getQuerySelector: () => getQuerySelector,
    getRefType: () => getRefType,
    getSiblingElements: () => getSiblingElements,
    getStyle: () => getStyle,
    getValidDocument: () => getValidDocument,
    isSiblingNode: () => isSiblingNode,
    matchSelector: () => matchSelector,
    queryDocument: () => queryDocument,
    setStyle: () => setStyle
  });
  function setStyle(element, prop, value) {
    element.style[prop] = value;
  }
  function getStyle(element, prop) {
    if (prop.startsWith("--")) {
      return window.getComputedStyle(document.documentElement).getPropertyValue(prop);
    }
    return element.style[prop];
  }
  function getProperty(element, prop) {
    return element[prop];
  }
  function matchSelector(selector) {
    return (element) => element[ELEMENT_MATCHES2](selector);
  }
  function getQuerySelector({
    id,
    selector
  }) {
    if (id) {
      let nodeId = id;
      if (id.indexOf(IX2_ID_DELIMITER2) !== -1) {
        const pair = id.split(IX2_ID_DELIMITER2);
        const pageId = pair[0];
        nodeId = pair[1];
        if (pageId !== document.documentElement.getAttribute(WF_PAGE2)) {
          return null;
        }
      }
      return `[data-w-id="${nodeId}"], [data-w-id^="${nodeId}_instance"]`;
    }
    return selector;
  }
  function getValidDocument(pageId) {
    if (pageId == null || pageId === document.documentElement.getAttribute(WF_PAGE2)) {
      return document;
    }
    return null;
  }
  function queryDocument(baseSelector, descendantSelector) {
    return Array.prototype.slice.call(
      document.querySelectorAll(
        descendantSelector ? baseSelector + " " + descendantSelector : baseSelector
      )
    );
  }
  function elementContains(parent, child) {
    return parent.contains(child);
  }
  function isSiblingNode(a, b) {
    return a !== b && a.parentNode === b.parentNode;
  }
  function getChildElements(sourceElements) {
    const childElements = [];
    for (let i = 0, { length } = sourceElements || []; i < length; i++) {
      const { children } = sourceElements[i];
      const { length: childCount } = children;
      if (!childCount) {
        continue;
      }
      for (let j = 0; j < childCount; j++) {
        childElements.push(children[j]);
      }
    }
    return childElements;
  }
  function getSiblingElements(sourceElements = []) {
    const elements = [];
    const parentCache = [];
    for (let i = 0, { length } = sourceElements; i < length; i++) {
      const { parentNode } = sourceElements[i];
      if (!parentNode || !parentNode.children || !parentNode.children.length) {
        continue;
      }
      if (parentCache.indexOf(parentNode) !== -1) {
        continue;
      }
      parentCache.push(parentNode);
      let el = parentNode.firstElementChild;
      while (el != null) {
        if (sourceElements.indexOf(el) === -1) {
          elements.push(el);
        }
        el = el.nextElementSibling;
      }
    }
    return elements;
  }
  function getRefType(ref) {
    if (ref != null && typeof ref == "object") {
      return ref instanceof Element ? HTML_ELEMENT3 : PLAIN_OBJECT3;
    }
    return null;
  }
  var import_shared4, ELEMENT_MATCHES2, IX2_ID_DELIMITER2, HTML_ELEMENT3, PLAIN_OBJECT3, WF_PAGE2, getClosestElement;
  var init_IX2BrowserApi = __esm({
    "packages/systems/ix2/engine/logic/IX2BrowserApi.ts"() {
      "use strict";
      import_shared4 = __toESM(require_shared2());
      init_shared_constants();
      ({ ELEMENT_MATCHES: ELEMENT_MATCHES2 } = import_shared4.IX2BrowserSupport);
      ({ IX2_ID_DELIMITER: IX2_ID_DELIMITER2, HTML_ELEMENT: HTML_ELEMENT3, PLAIN_OBJECT: PLAIN_OBJECT3, WF_PAGE: WF_PAGE2 } = IX2EngineConstants_exports);
      getClosestElement = Element.prototype.closest ? (element, selector) => {
        if (!document.documentElement.contains(element)) {
          return null;
        }
        return element.closest(selector);
      } : (element, selector) => {
        if (!document.documentElement.contains(element)) {
          return null;
        }
        let el = element;
        do {
          if (el[ELEMENT_MATCHES2] && el[ELEMENT_MATCHES2](selector)) {
            return el;
          }
          el = el.parentNode;
        } while (el != null);
        return null;
      };
    }
  });

  // node_modules/lodash/_baseCreate.js
  var require_baseCreate = __commonJS({
    "node_modules/lodash/_baseCreate.js"(exports, module) {
      var isObject = require_isObject();
      var objectCreate = Object.create;
      var baseCreate = function() {
        function object() {
        }
        return function(proto) {
          if (!isObject(proto)) {
            return {};
          }
          if (objectCreate) {
            return objectCreate(proto);
          }
          object.prototype = proto;
          var result = new object();
          object.prototype = void 0;
          return result;
        };
      }();
      module.exports = baseCreate;
    }
  });

  // node_modules/lodash/_baseLodash.js
  var require_baseLodash = __commonJS({
    "node_modules/lodash/_baseLodash.js"(exports, module) {
      function baseLodash() {
      }
      module.exports = baseLodash;
    }
  });

  // node_modules/lodash/_LodashWrapper.js
  var require_LodashWrapper = __commonJS({
    "node_modules/lodash/_LodashWrapper.js"(exports, module) {
      var baseCreate = require_baseCreate();
      var baseLodash = require_baseLodash();
      function LodashWrapper(value, chainAll) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__chain__ = !!chainAll;
        this.__index__ = 0;
        this.__values__ = void 0;
      }
      LodashWrapper.prototype = baseCreate(baseLodash.prototype);
      LodashWrapper.prototype.constructor = LodashWrapper;
      module.exports = LodashWrapper;
    }
  });

  // node_modules/lodash/_isFlattenable.js
  var require_isFlattenable = __commonJS({
    "node_modules/lodash/_isFlattenable.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : void 0;
      function isFlattenable(value) {
        return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
      }
      module.exports = isFlattenable;
    }
  });

  // node_modules/lodash/_baseFlatten.js
  var require_baseFlatten = __commonJS({
    "node_modules/lodash/_baseFlatten.js"(exports, module) {
      var arrayPush = require_arrayPush();
      var isFlattenable = require_isFlattenable();
      function baseFlatten(array, depth, predicate, isStrict, result) {
        var index = -1, length = array.length;
        predicate || (predicate = isFlattenable);
        result || (result = []);
        while (++index < length) {
          var value = array[index];
          if (depth > 0 && predicate(value)) {
            if (depth > 1) {
              baseFlatten(value, depth - 1, predicate, isStrict, result);
            } else {
              arrayPush(result, value);
            }
          } else if (!isStrict) {
            result[result.length] = value;
          }
        }
        return result;
      }
      module.exports = baseFlatten;
    }
  });

  // node_modules/lodash/flatten.js
  var require_flatten = __commonJS({
    "node_modules/lodash/flatten.js"(exports, module) {
      var baseFlatten = require_baseFlatten();
      function flatten(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseFlatten(array, 1) : [];
      }
      module.exports = flatten;
    }
  });

  // node_modules/lodash/_apply.js
  var require_apply = __commonJS({
    "node_modules/lodash/_apply.js"(exports, module) {
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      module.exports = apply;
    }
  });

  // node_modules/lodash/_overRest.js
  var require_overRest = __commonJS({
    "node_modules/lodash/_overRest.js"(exports, module) {
      var apply = require_apply();
      var nativeMax = Math.max;
      function overRest(func, start, transform) {
        start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
        return function() {
          var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
          while (++index < length) {
            array[index] = args[start + index];
          }
          index = -1;
          var otherArgs = Array(start + 1);
          while (++index < start) {
            otherArgs[index] = args[index];
          }
          otherArgs[start] = transform(array);
          return apply(func, this, otherArgs);
        };
      }
      module.exports = overRest;
    }
  });

  // node_modules/lodash/constant.js
  var require_constant = __commonJS({
    "node_modules/lodash/constant.js"(exports, module) {
      function constant(value) {
        return function() {
          return value;
        };
      }
      module.exports = constant;
    }
  });

  // node_modules/lodash/_baseSetToString.js
  var require_baseSetToString = __commonJS({
    "node_modules/lodash/_baseSetToString.js"(exports, module) {
      var constant = require_constant();
      var defineProperty = require_defineProperty();
      var identity = require_identity();
      var baseSetToString = !defineProperty ? identity : function(func, string) {
        return defineProperty(func, "toString", {
          "configurable": true,
          "enumerable": false,
          "value": constant(string),
          "writable": true
        });
      };
      module.exports = baseSetToString;
    }
  });

  // node_modules/lodash/_shortOut.js
  var require_shortOut = __commonJS({
    "node_modules/lodash/_shortOut.js"(exports, module) {
      var HOT_COUNT = 800;
      var HOT_SPAN = 16;
      var nativeNow = Date.now;
      function shortOut(func) {
        var count = 0, lastCalled = 0;
        return function() {
          var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return arguments[0];
            }
          } else {
            count = 0;
          }
          return func.apply(void 0, arguments);
        };
      }
      module.exports = shortOut;
    }
  });

  // node_modules/lodash/_setToString.js
  var require_setToString = __commonJS({
    "node_modules/lodash/_setToString.js"(exports, module) {
      var baseSetToString = require_baseSetToString();
      var shortOut = require_shortOut();
      var setToString = shortOut(baseSetToString);
      module.exports = setToString;
    }
  });

  // node_modules/lodash/_flatRest.js
  var require_flatRest = __commonJS({
    "node_modules/lodash/_flatRest.js"(exports, module) {
      var flatten = require_flatten();
      var overRest = require_overRest();
      var setToString = require_setToString();
      function flatRest(func) {
        return setToString(overRest(func, void 0, flatten), func + "");
      }
      module.exports = flatRest;
    }
  });

  // node_modules/lodash/_metaMap.js
  var require_metaMap = __commonJS({
    "node_modules/lodash/_metaMap.js"(exports, module) {
      var WeakMap2 = require_WeakMap();
      var metaMap = WeakMap2 && new WeakMap2();
      module.exports = metaMap;
    }
  });

  // node_modules/lodash/noop.js
  var require_noop = __commonJS({
    "node_modules/lodash/noop.js"(exports, module) {
      function noop() {
      }
      module.exports = noop;
    }
  });

  // node_modules/lodash/_getData.js
  var require_getData = __commonJS({
    "node_modules/lodash/_getData.js"(exports, module) {
      var metaMap = require_metaMap();
      var noop = require_noop();
      var getData = !metaMap ? noop : function(func) {
        return metaMap.get(func);
      };
      module.exports = getData;
    }
  });

  // node_modules/lodash/_realNames.js
  var require_realNames = __commonJS({
    "node_modules/lodash/_realNames.js"(exports, module) {
      var realNames = {};
      module.exports = realNames;
    }
  });

  // node_modules/lodash/_getFuncName.js
  var require_getFuncName = __commonJS({
    "node_modules/lodash/_getFuncName.js"(exports, module) {
      var realNames = require_realNames();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function getFuncName(func) {
        var result = func.name + "", array = realNames[result], length = hasOwnProperty.call(realNames, result) ? array.length : 0;
        while (length--) {
          var data = array[length], otherFunc = data.func;
          if (otherFunc == null || otherFunc == func) {
            return data.name;
          }
        }
        return result;
      }
      module.exports = getFuncName;
    }
  });

  // node_modules/lodash/_LazyWrapper.js
  var require_LazyWrapper = __commonJS({
    "node_modules/lodash/_LazyWrapper.js"(exports, module) {
      var baseCreate = require_baseCreate();
      var baseLodash = require_baseLodash();
      var MAX_ARRAY_LENGTH = 4294967295;
      function LazyWrapper(value) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__dir__ = 1;
        this.__filtered__ = false;
        this.__iteratees__ = [];
        this.__takeCount__ = MAX_ARRAY_LENGTH;
        this.__views__ = [];
      }
      LazyWrapper.prototype = baseCreate(baseLodash.prototype);
      LazyWrapper.prototype.constructor = LazyWrapper;
      module.exports = LazyWrapper;
    }
  });

  // node_modules/lodash/_copyArray.js
  var require_copyArray = __commonJS({
    "node_modules/lodash/_copyArray.js"(exports, module) {
      function copyArray(source, array) {
        var index = -1, length = source.length;
        array || (array = Array(length));
        while (++index < length) {
          array[index] = source[index];
        }
        return array;
      }
      module.exports = copyArray;
    }
  });

  // node_modules/lodash/_wrapperClone.js
  var require_wrapperClone = __commonJS({
    "node_modules/lodash/_wrapperClone.js"(exports, module) {
      var LazyWrapper = require_LazyWrapper();
      var LodashWrapper = require_LodashWrapper();
      var copyArray = require_copyArray();
      function wrapperClone(wrapper) {
        if (wrapper instanceof LazyWrapper) {
          return wrapper.clone();
        }
        var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
        result.__actions__ = copyArray(wrapper.__actions__);
        result.__index__ = wrapper.__index__;
        result.__values__ = wrapper.__values__;
        return result;
      }
      module.exports = wrapperClone;
    }
  });

  // node_modules/lodash/wrapperLodash.js
  var require_wrapperLodash = __commonJS({
    "node_modules/lodash/wrapperLodash.js"(exports, module) {
      var LazyWrapper = require_LazyWrapper();
      var LodashWrapper = require_LodashWrapper();
      var baseLodash = require_baseLodash();
      var isArray = require_isArray();
      var isObjectLike = require_isObjectLike();
      var wrapperClone = require_wrapperClone();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function lodash(value) {
        if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
          if (value instanceof LodashWrapper) {
            return value;
          }
          if (hasOwnProperty.call(value, "__wrapped__")) {
            return wrapperClone(value);
          }
        }
        return new LodashWrapper(value);
      }
      lodash.prototype = baseLodash.prototype;
      lodash.prototype.constructor = lodash;
      module.exports = lodash;
    }
  });

  // node_modules/lodash/_isLaziable.js
  var require_isLaziable = __commonJS({
    "node_modules/lodash/_isLaziable.js"(exports, module) {
      var LazyWrapper = require_LazyWrapper();
      var getData = require_getData();
      var getFuncName = require_getFuncName();
      var lodash = require_wrapperLodash();
      function isLaziable(func) {
        var funcName = getFuncName(func), other = lodash[funcName];
        if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
          return false;
        }
        if (func === other) {
          return true;
        }
        var data = getData(other);
        return !!data && func === data[0];
      }
      module.exports = isLaziable;
    }
  });

  // node_modules/lodash/_createFlow.js
  var require_createFlow = __commonJS({
    "node_modules/lodash/_createFlow.js"(exports, module) {
      var LodashWrapper = require_LodashWrapper();
      var flatRest = require_flatRest();
      var getData = require_getData();
      var getFuncName = require_getFuncName();
      var isArray = require_isArray();
      var isLaziable = require_isLaziable();
      var FUNC_ERROR_TEXT = "Expected a function";
      var WRAP_CURRY_FLAG = 8;
      var WRAP_PARTIAL_FLAG = 32;
      var WRAP_ARY_FLAG = 128;
      var WRAP_REARG_FLAG = 256;
      function createFlow(fromRight) {
        return flatRest(function(funcs) {
          var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
          if (fromRight) {
            funcs.reverse();
          }
          while (index--) {
            var func = funcs[index];
            if (typeof func != "function") {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            if (prereq && !wrapper && getFuncName(func) == "wrapper") {
              var wrapper = new LodashWrapper([], true);
            }
          }
          index = wrapper ? index : length;
          while (++index < length) {
            func = funcs[index];
            var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : void 0;
            if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
              wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
            } else {
              wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
            }
          }
          return function() {
            var args = arguments, value = args[0];
            if (wrapper && args.length == 1 && isArray(value)) {
              return wrapper.plant(value).value();
            }
            var index2 = 0, result = length ? funcs[index2].apply(this, args) : value;
            while (++index2 < length) {
              result = funcs[index2].call(this, result);
            }
            return result;
          };
        });
      }
      module.exports = createFlow;
    }
  });

  // node_modules/lodash/flow.js
  var require_flow = __commonJS({
    "node_modules/lodash/flow.js"(exports, module) {
      var createFlow = require_createFlow();
      var flow2 = createFlow();
      module.exports = flow2;
    }
  });

  // node_modules/lodash/_baseClamp.js
  var require_baseClamp = __commonJS({
    "node_modules/lodash/_baseClamp.js"(exports, module) {
      function baseClamp(number, lower, upper) {
        if (number === number) {
          if (upper !== void 0) {
            number = number <= upper ? number : upper;
          }
          if (lower !== void 0) {
            number = number >= lower ? number : lower;
          }
        }
        return number;
      }
      module.exports = baseClamp;
    }
  });

  // node_modules/lodash/clamp.js
  var require_clamp = __commonJS({
    "node_modules/lodash/clamp.js"(exports, module) {
      var baseClamp = require_baseClamp();
      var toNumber = require_toNumber();
      function clamp2(number, lower, upper) {
        if (upper === void 0) {
          upper = lower;
          lower = void 0;
        }
        if (upper !== void 0) {
          upper = toNumber(upper);
          upper = upper === upper ? upper : 0;
        }
        if (lower !== void 0) {
          lower = toNumber(lower);
          lower = lower === lower ? lower : 0;
        }
        return baseClamp(toNumber(number), lower, upper);
      }
      module.exports = clamp2;
    }
  });

  // packages/systems/ix2/engine/logic/IX2VanillaEvents.ts
  var import_flow, import_get, import_clamp, import_shared5, MOUSE_CLICK, MOUSE_SECOND_CLICK, MOUSE_DOWN, MOUSE_UP, MOUSE_OVER, MOUSE_OUT, DROPDOWN_CLOSE, DROPDOWN_OPEN, SLIDER_ACTIVE, SLIDER_INACTIVE, TAB_ACTIVE, TAB_INACTIVE, NAVBAR_CLOSE, NAVBAR_OPEN, MOUSE_MOVE, PAGE_SCROLL_DOWN, SCROLL_INTO_VIEW, SCROLL_OUT_OF_VIEW, PAGE_SCROLL_UP, SCROLLING_IN_VIEW, PAGE_FINISH, ECOMMERCE_CART_CLOSE, ECOMMERCE_CART_OPEN, PAGE_START, PAGE_SCROLL, COMPONENT_ACTIVE, COMPONENT_INACTIVE, COLON_DELIMITER3, getNamespacedParameterId2, composableFilter, isElement, containsElement, isOrContainsElement, getAutoStopEvent, hasAutoStopEvent, actionGroupCreator, withFilter, baseActionGroupOptions, baseActivityActionGroupOptions, SCROLL_EVENT_TYPES, MOUSE_OVER_OUT_TYPES, baseScrollActionGroupOptions, AUTO_STOP_DISABLED_EVENTS, getDocumentState, areBoxesIntersecting, isElementHovered, isElementVisible, whenComponentActiveChange, whenElementHoverChange, whenElementVisibiltyChange, whenScrollDirectionChange, pointIntersects, whenPageLoadFinish, whenPageLoadStart, whenClickCountChange, getComponentActiveOptions, getComponentInactiveOptions, scrollIntoOutOfViewOptions, MOUSE_OUT_ROUND_THRESHOLD, IX2VanillaEvents_default;
  var init_IX2VanillaEvents = __esm({
    "packages/systems/ix2/engine/logic/IX2VanillaEvents.ts"() {
      "use strict";
      import_flow = __toESM(require_flow());
      import_get = __toESM(require_get());
      import_clamp = __toESM(require_clamp());
      init_shared_constants();
      init_IX2VanillaEngine();
      init_IX2EngineActions();
      import_shared5 = __toESM(require_shared2());
      ({
        MOUSE_CLICK,
        MOUSE_SECOND_CLICK,
        MOUSE_DOWN,
        MOUSE_UP,
        MOUSE_OVER,
        MOUSE_OUT,
        DROPDOWN_CLOSE,
        DROPDOWN_OPEN,
        SLIDER_ACTIVE,
        SLIDER_INACTIVE,
        TAB_ACTIVE,
        TAB_INACTIVE,
        NAVBAR_CLOSE,
        NAVBAR_OPEN,
        MOUSE_MOVE,
        PAGE_SCROLL_DOWN,
        SCROLL_INTO_VIEW,
        SCROLL_OUT_OF_VIEW,
        PAGE_SCROLL_UP,
        SCROLLING_IN_VIEW,
        PAGE_FINISH,
        ECOMMERCE_CART_CLOSE,
        ECOMMERCE_CART_OPEN,
        PAGE_START,
        PAGE_SCROLL
      } = EventTypeConsts);
      COMPONENT_ACTIVE = "COMPONENT_ACTIVE";
      COMPONENT_INACTIVE = "COMPONENT_INACTIVE";
      ({ COLON_DELIMITER: COLON_DELIMITER3 } = IX2EngineConstants_exports);
      ({ getNamespacedParameterId: getNamespacedParameterId2 } = import_shared5.IX2VanillaUtils);
      composableFilter = (predicate) => (options) => {
        if (typeof options === "object" && predicate(options)) {
          return true;
        }
        return options;
      };
      isElement = composableFilter(({ element, nativeEvent }) => {
        return element === nativeEvent.target;
      });
      containsElement = composableFilter(({ element, nativeEvent }) => {
        return element.contains(nativeEvent.target);
      });
      isOrContainsElement = (0, import_flow.default)([isElement, containsElement]);
      getAutoStopEvent = (store, autoStopEventId) => {
        if (autoStopEventId) {
          const { ixData: ixData2 } = store.getState();
          const { events } = ixData2;
          const eventToStop = events[autoStopEventId];
          if (eventToStop && !AUTO_STOP_DISABLED_EVENTS[eventToStop.eventTypeId]) {
            return eventToStop;
          }
        }
        return null;
      };
      hasAutoStopEvent = ({ store, event }) => {
        const { action: eventAction } = event;
        const { autoStopEventId } = eventAction.config;
        return Boolean(getAutoStopEvent(store, autoStopEventId));
      };
      actionGroupCreator = ({ store, event, element, eventStateKey }, state) => {
        const { action: eventAction, id: eventId } = event;
        const { actionListId, autoStopEventId } = eventAction.config;
        const eventToStop = getAutoStopEvent(store, autoStopEventId);
        if (eventToStop) {
          stopActionGroup({
            store,
            eventId: autoStopEventId,
            eventTarget: element,
            eventStateKey: autoStopEventId + COLON_DELIMITER3 + eventStateKey.split(COLON_DELIMITER3)[1],
            actionListId: (0, import_get.default)(eventToStop, "action.config.actionListId")
          });
        }
        stopActionGroup({
          store,
          eventId,
          eventTarget: element,
          eventStateKey,
          actionListId
        });
        startActionGroup({
          store,
          eventId,
          eventTarget: element,
          eventStateKey,
          actionListId
        });
        return state;
      };
      withFilter = (filter, handler) => (options, state) => filter(options, state) === true ? handler(options, state) : state;
      baseActionGroupOptions = {
        handler: withFilter(isOrContainsElement, actionGroupCreator)
      };
      baseActivityActionGroupOptions = {
        ...baseActionGroupOptions,
        types: [COMPONENT_ACTIVE, COMPONENT_INACTIVE].join(" ")
      };
      SCROLL_EVENT_TYPES = [
        { target: window, types: "resize orientationchange", throttle: true },
        {
          target: document,
          types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
          throttle: true
        }
      ];
      MOUSE_OVER_OUT_TYPES = "mouseover mouseout";
      baseScrollActionGroupOptions = {
        types: SCROLL_EVENT_TYPES
      };
      AUTO_STOP_DISABLED_EVENTS = {
        PAGE_START,
        PAGE_FINISH
      };
      getDocumentState = (() => {
        const supportOffset = window.pageXOffset !== void 0;
        const isCSS1Compat = document.compatMode === "CSS1Compat";
        const rootElement = isCSS1Compat ? document.documentElement : document.body;
        return () => ({
          scrollLeft: supportOffset ? window.pageXOffset : rootElement.scrollLeft,
          scrollTop: supportOffset ? window.pageYOffset : rootElement.scrollTop,
          // required to remove elasticity in Safari scrolling.
          stiffScrollTop: (0, import_clamp.default)(
            supportOffset ? window.pageYOffset : rootElement.scrollTop,
            0,
            rootElement.scrollHeight - window.innerHeight
          ),
          scrollWidth: rootElement.scrollWidth,
          scrollHeight: rootElement.scrollHeight,
          clientWidth: rootElement.clientWidth,
          clientHeight: rootElement.clientHeight,
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight
        });
      })();
      areBoxesIntersecting = (a, b) => !(a.left > b.right || a.right < b.left || a.top > b.bottom || a.bottom < b.top);
      isElementHovered = ({ element, nativeEvent }) => {
        const { type, target, relatedTarget } = nativeEvent;
        const containsTarget = element.contains(target);
        if (type === "mouseover" && containsTarget) {
          return true;
        }
        const containsRelated = element.contains(relatedTarget);
        if (type === "mouseout" && containsTarget && containsRelated) {
          return true;
        }
        return false;
      };
      isElementVisible = (options) => {
        const {
          element,
          event: { config }
        } = options;
        const { clientWidth, clientHeight } = getDocumentState();
        const scrollOffsetValue = config.scrollOffsetValue;
        const scrollOffsetUnit = config.scrollOffsetUnit;
        const isPX = scrollOffsetUnit === "PX";
        const offsetPadding = isPX ? scrollOffsetValue : clientHeight * (scrollOffsetValue || 0) / 100;
        return areBoxesIntersecting(element.getBoundingClientRect(), {
          left: 0,
          top: offsetPadding,
          right: clientWidth,
          bottom: clientHeight - offsetPadding
        });
      };
      whenComponentActiveChange = // @ts-expect-error - TS7006 - Parameter 'handler' implicitly has an 'any' type.
      (handler) => (options, oldState) => {
        const { type } = options.nativeEvent;
        const isActive = [COMPONENT_ACTIVE, COMPONENT_INACTIVE].indexOf(type) !== -1 ? type === COMPONENT_ACTIVE : oldState.isActive;
        const newState = {
          ...oldState,
          isActive
        };
        if (!oldState || newState.isActive !== oldState.isActive) {
          return handler(options, newState) || newState;
        }
        return newState;
      };
      whenElementHoverChange = (handler) => (options, oldState) => {
        const newState = {
          elementHovered: isElementHovered(options)
        };
        if (oldState ? newState.elementHovered !== oldState.elementHovered : newState.elementHovered) {
          return handler(options, newState) || newState;
        }
        return newState;
      };
      whenElementVisibiltyChange = (handler) => (options, oldState) => {
        const newState = {
          ...oldState,
          elementVisible: isElementVisible(options)
        };
        if (oldState ? newState.elementVisible !== oldState.elementVisible : newState.elementVisible) {
          return handler(options, newState) || newState;
        }
        return newState;
      };
      whenScrollDirectionChange = // @ts-expect-error - TS7006 - Parameter 'handler' implicitly has an 'any' type.
      (handler) => (options, oldState = {}) => {
        const {
          stiffScrollTop: scrollTop,
          scrollHeight,
          innerHeight
        } = getDocumentState();
        const {
          event: { config, eventTypeId }
        } = options;
        const { scrollOffsetValue, scrollOffsetUnit } = config;
        const isPX = scrollOffsetUnit === "PX";
        const scrollHeightBounds = scrollHeight - innerHeight;
        const percentTop = Number((scrollTop / scrollHeightBounds).toFixed(2));
        if (oldState && oldState.percentTop === percentTop) {
          return oldState;
        }
        const scrollTopPadding = (isPX ? scrollOffsetValue : innerHeight * (scrollOffsetValue || 0) / 100) / scrollHeightBounds;
        let scrollingDown;
        let scrollDirectionChanged;
        let anchorTop = 0;
        if (oldState) {
          scrollingDown = percentTop > oldState.percentTop;
          scrollDirectionChanged = oldState.scrollingDown !== scrollingDown;
          anchorTop = scrollDirectionChanged ? percentTop : oldState.anchorTop;
        }
        const inBounds = eventTypeId === PAGE_SCROLL_DOWN ? percentTop >= anchorTop + scrollTopPadding : percentTop <= anchorTop - scrollTopPadding;
        const newState = {
          ...oldState,
          percentTop,
          inBounds,
          anchorTop,
          scrollingDown
        };
        if (oldState && inBounds && // @ts-expect-error - TS2339 - Property 'inBounds' does not exist on type '{}'.
        (scrollDirectionChanged || newState.inBounds !== oldState.inBounds)) {
          return handler(options, newState) || newState;
        }
        return newState;
      };
      pointIntersects = (point, rect) => point.left > rect.left && point.left < rect.right && point.top > rect.top && point.top < rect.bottom;
      whenPageLoadFinish = (handler) => (options, oldState) => {
        const newState = {
          finished: document.readyState === "complete"
        };
        if (newState.finished && !(oldState && oldState.finshed)) {
          handler(options);
        }
        return newState;
      };
      whenPageLoadStart = (handler) => (options, oldState) => {
        const newState = {
          started: true
        };
        if (!oldState) {
          handler(options);
        }
        return newState;
      };
      whenClickCountChange = (handler) => (options, oldState = { clickCount: 0 }) => {
        const newState = {
          clickCount: oldState.clickCount % 2 + 1
        };
        if (newState.clickCount !== oldState.clickCount) {
          return handler(options, newState) || newState;
        }
        return newState;
      };
      getComponentActiveOptions = (allowNestedChildrenEvents = true) => ({
        ...baseActivityActionGroupOptions,
        handler: withFilter(
          allowNestedChildrenEvents ? isOrContainsElement : isElement,
          // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
          whenComponentActiveChange((options, state) => {
            return state.isActive ? baseActionGroupOptions.handler(options, state) : state;
          })
        )
      });
      getComponentInactiveOptions = (allowNestedChildrenEvents = true) => ({
        ...baseActivityActionGroupOptions,
        handler: withFilter(
          allowNestedChildrenEvents ? isOrContainsElement : isElement,
          // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
          whenComponentActiveChange((options, state) => {
            return !state.isActive ? baseActionGroupOptions.handler(options, state) : state;
          })
        )
      });
      scrollIntoOutOfViewOptions = {
        ...baseScrollActionGroupOptions,
        handler: whenElementVisibiltyChange((options, state) => {
          const { elementVisible } = state;
          const { event, store } = options;
          const { ixData: ixData2 } = store.getState();
          const { events } = ixData2;
          if (!events[event.action.config.autoStopEventId] && state.triggered) {
            return state;
          }
          if (event.eventTypeId === SCROLL_INTO_VIEW === elementVisible) {
            actionGroupCreator(options);
            return {
              ...state,
              triggered: true
            };
          } else {
            return state;
          }
        })
      };
      MOUSE_OUT_ROUND_THRESHOLD = 0.05;
      IX2VanillaEvents_default = {
        [SLIDER_ACTIVE]: getComponentActiveOptions(),
        [SLIDER_INACTIVE]: getComponentInactiveOptions(),
        [DROPDOWN_OPEN]: getComponentActiveOptions(),
        [DROPDOWN_CLOSE]: getComponentInactiveOptions(),
        // navbar elements may contain nested components in the menu. To prevent activity misfires, only listed for activity
        // events where the target is the navbar element, and ignore children that dispatch activitiy events.
        [NAVBAR_OPEN]: getComponentActiveOptions(false),
        [NAVBAR_CLOSE]: getComponentInactiveOptions(false),
        [TAB_ACTIVE]: getComponentActiveOptions(),
        [TAB_INACTIVE]: getComponentInactiveOptions(),
        [ECOMMERCE_CART_OPEN]: {
          types: "ecommerce-cart-open",
          handler: withFilter(isOrContainsElement, actionGroupCreator)
        },
        [ECOMMERCE_CART_CLOSE]: {
          types: "ecommerce-cart-close",
          handler: withFilter(isOrContainsElement, actionGroupCreator)
        },
        [MOUSE_CLICK]: {
          types: "click",
          handler: withFilter(
            isOrContainsElement,
            whenClickCountChange((options, { clickCount }) => {
              if (hasAutoStopEvent(options)) {
                clickCount === 1 && actionGroupCreator(options);
              } else {
                actionGroupCreator(options);
              }
            })
          )
        },
        [MOUSE_SECOND_CLICK]: {
          types: "click",
          handler: withFilter(
            isOrContainsElement,
            whenClickCountChange((options, { clickCount }) => {
              if (clickCount === 2) {
                actionGroupCreator(options);
              }
            })
          )
        },
        [MOUSE_DOWN]: {
          ...baseActionGroupOptions,
          types: "mousedown"
        },
        [MOUSE_UP]: {
          ...baseActionGroupOptions,
          types: "mouseup"
        },
        [MOUSE_OVER]: {
          types: MOUSE_OVER_OUT_TYPES,
          handler: withFilter(
            isOrContainsElement,
            whenElementHoverChange((options, state) => {
              if (state.elementHovered) {
                actionGroupCreator(options);
              }
            })
          )
        },
        [MOUSE_OUT]: {
          types: MOUSE_OVER_OUT_TYPES,
          handler: withFilter(
            isOrContainsElement,
            whenElementHoverChange((options, state) => {
              if (!state.elementHovered) {
                actionGroupCreator(options);
              }
            })
          )
        },
        [MOUSE_MOVE]: {
          types: "mousemove mouseout scroll",
          handler: ({ store, element, eventConfig, nativeEvent, eventStateKey }, state = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }) => {
            const {
              basedOn,
              selectedAxis,
              continuousParameterGroupId,
              reverse,
              restingState = 0
            } = eventConfig;
            const {
              clientX = state.clientX,
              clientY = state.clientY,
              pageX = state.pageX,
              pageY = state.pageY
            } = nativeEvent;
            const isXAxis = selectedAxis === "X_AXIS";
            const isMouseOut = nativeEvent.type === "mouseout";
            let value = restingState / 100;
            let namespacedParameterId = continuousParameterGroupId;
            let elementHovered = false;
            switch (basedOn) {
              case EventBasedOn.VIEWPORT: {
                value = isXAxis ? Math.min(clientX, window.innerWidth) / window.innerWidth : Math.min(clientY, window.innerHeight) / window.innerHeight;
                break;
              }
              case EventBasedOn.PAGE: {
                const { scrollLeft, scrollTop, scrollWidth, scrollHeight } = getDocumentState();
                value = isXAxis ? Math.min(scrollLeft + pageX, scrollWidth) / scrollWidth : Math.min(scrollTop + pageY, scrollHeight) / scrollHeight;
                break;
              }
              case EventBasedOn.ELEMENT:
              default: {
                namespacedParameterId = getNamespacedParameterId2(
                  eventStateKey,
                  continuousParameterGroupId
                );
                const isMouseEvent = nativeEvent.type.indexOf("mouse") === 0;
                if (isMouseEvent && isOrContainsElement({ element, nativeEvent }) !== true) {
                  break;
                }
                const rect = element.getBoundingClientRect();
                const { left, top, width, height } = rect;
                if (!isMouseEvent && !pointIntersects({ left: clientX, top: clientY }, rect)) {
                  break;
                }
                elementHovered = true;
                value = isXAxis ? (clientX - left) / width : (clientY - top) / height;
                break;
              }
            }
            if (isMouseOut && (value > 1 - MOUSE_OUT_ROUND_THRESHOLD || value < MOUSE_OUT_ROUND_THRESHOLD)) {
              value = Math.round(value);
            }
            if (basedOn !== EventBasedOn.ELEMENT || elementHovered || // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            elementHovered !== state.elementHovered) {
              value = reverse ? 1 - value : value;
              store.dispatch(parameterChanged(namespacedParameterId, value));
            }
            return {
              elementHovered,
              clientX,
              clientY,
              pageX,
              pageY
            };
          }
        },
        [PAGE_SCROLL]: {
          types: SCROLL_EVENT_TYPES,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          handler: ({ store, eventConfig }) => {
            const { continuousParameterGroupId, reverse } = eventConfig;
            const { scrollTop, scrollHeight, clientHeight } = getDocumentState();
            let value = scrollTop / (scrollHeight - clientHeight);
            value = reverse ? 1 - value : value;
            store.dispatch(parameterChanged(continuousParameterGroupId, value));
          }
        },
        [SCROLLING_IN_VIEW]: {
          types: SCROLL_EVENT_TYPES,
          handler: ({ element, store, eventConfig, eventStateKey }, state = { scrollPercent: 0 }) => {
            const {
              scrollLeft,
              scrollTop,
              scrollWidth,
              scrollHeight,
              clientHeight: visibleHeight
            } = getDocumentState();
            const {
              basedOn,
              selectedAxis,
              continuousParameterGroupId,
              startsEntering,
              startsExiting,
              addEndOffset,
              addStartOffset,
              addOffsetValue = 0,
              endOffsetValue = 0
            } = eventConfig;
            const isXAxis = selectedAxis === "X_AXIS";
            if (basedOn === EventBasedOn.VIEWPORT) {
              const value = isXAxis ? scrollLeft / scrollWidth : scrollTop / scrollHeight;
              if (value !== state.scrollPercent) {
                store.dispatch(parameterChanged(continuousParameterGroupId, value));
              }
              return {
                scrollPercent: value
              };
            } else {
              const namespacedParameterId = getNamespacedParameterId2(
                eventStateKey,
                continuousParameterGroupId
              );
              const elementRect = element.getBoundingClientRect();
              let offsetStartPerc = (addStartOffset ? addOffsetValue : 0) / 100;
              let offsetEndPerc = (addEndOffset ? endOffsetValue : 0) / 100;
              offsetStartPerc = startsEntering ? offsetStartPerc : 1 - offsetStartPerc;
              offsetEndPerc = startsExiting ? offsetEndPerc : 1 - offsetEndPerc;
              const offsetElementTop = elementRect.top + Math.min(elementRect.height * offsetStartPerc, visibleHeight);
              const offsetElementBottom = elementRect.top + elementRect.height * offsetEndPerc;
              const offsetHeight = offsetElementBottom - offsetElementTop;
              const fixedScrollHeight = Math.min(
                visibleHeight + offsetHeight,
                scrollHeight
              );
              const fixedScrollTop = Math.min(
                Math.max(0, visibleHeight - offsetElementTop),
                fixedScrollHeight
              );
              const fixedScrollPerc = fixedScrollTop / fixedScrollHeight;
              if (fixedScrollPerc !== state.scrollPercent) {
                store.dispatch(
                  parameterChanged(namespacedParameterId, fixedScrollPerc)
                );
              }
              return {
                scrollPercent: fixedScrollPerc
              };
            }
          }
        },
        [SCROLL_INTO_VIEW]: scrollIntoOutOfViewOptions,
        [SCROLL_OUT_OF_VIEW]: scrollIntoOutOfViewOptions,
        [PAGE_SCROLL_DOWN]: {
          ...baseScrollActionGroupOptions,
          // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
          handler: whenScrollDirectionChange((options, state) => {
            if (state.scrollingDown) {
              actionGroupCreator(options);
            }
          })
        },
        [PAGE_SCROLL_UP]: {
          ...baseScrollActionGroupOptions,
          // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
          handler: whenScrollDirectionChange((options, state) => {
            if (!state.scrollingDown) {
              actionGroupCreator(options);
            }
          })
        },
        [PAGE_FINISH]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: withFilter(isElement, whenPageLoadFinish(actionGroupCreator))
        },
        [PAGE_START]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: withFilter(isElement, whenPageLoadStart(actionGroupCreator))
        }
      };
    }
  });

  // packages/systems/ix2/engine/logic/IX2VanillaEngine.ts
  var IX2VanillaEngine_exports = {};
  __export(IX2VanillaEngine_exports, {
    observeRequests: () => observeRequests,
    startActionGroup: () => startActionGroup,
    startEngine: () => startEngine,
    stopActionGroup: () => stopActionGroup,
    stopAllActionGroups: () => stopAllActionGroups,
    stopEngine: () => stopEngine
  });
  function observeRequests(store) {
    observeStore2({
      store,
      // @ts-expect-error - TS7031 - Binding element 'ixRequest' implicitly has an 'any' type.
      select: ({ ixRequest: ixRequest2 }) => ixRequest2.preview,
      onChange: handlePreviewRequest
    });
    observeStore2({
      store,
      // @ts-expect-error - TS7031 - Binding element 'ixRequest' implicitly has an 'any' type.
      select: ({ ixRequest: ixRequest2 }) => ixRequest2.playback,
      onChange: handlePlaybackRequest
    });
    observeStore2({
      store,
      // @ts-expect-error - TS7031 - Binding element 'ixRequest' implicitly has an 'any' type.
      select: ({ ixRequest: ixRequest2 }) => ixRequest2.stop,
      onChange: handleStopRequest
    });
    observeStore2({
      store,
      // @ts-expect-error - TS7031 - Binding element 'ixRequest' implicitly has an 'any' type.
      select: ({ ixRequest: ixRequest2 }) => ixRequest2.clear,
      onChange: handleClearRequest
    });
  }
  function observeMediaQueryChange(store) {
    observeStore2({
      store,
      // @ts-expect-error - TS7031 - Binding element 'ixSession' implicitly has an 'any' type.
      select: ({ ixSession: ixSession2 }) => ixSession2.mediaQueryKey,
      onChange: () => {
        stopEngine(store);
        clearAllStyles2({ store, elementApi: IX2BrowserApi_exports });
        startEngine({ store, allowEvents: true });
        dispatchPageUpdateEvent();
      }
    });
  }
  function observeOneRenderTick(store, onTick) {
    const unsubscribe = observeStore2({
      store,
      // @ts-expect-error - TS7031 - Binding element 'ixSession' implicitly has an 'any' type.
      select: ({ ixSession: ixSession2 }) => ixSession2.tick,
      // @ts-expect-error - TS7006 - Parameter 'tick' implicitly has an 'any' type.
      onChange: (tick) => {
        onTick(tick);
        unsubscribe();
      }
    });
  }
  function handlePreviewRequest({ rawData, defer }, store) {
    const start = () => {
      startEngine({ store, rawData, allowEvents: true });
      dispatchPageUpdateEvent();
    };
    defer ? setTimeout(start, 0) : start();
  }
  function dispatchPageUpdateEvent() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function handlePlaybackRequest(playback, store) {
    const {
      actionTypeId,
      actionListId,
      actionItemId,
      eventId,
      allowEvents,
      immediate,
      testManual,
      verbose = true
    } = playback;
    let { rawData } = playback;
    if (actionListId && actionItemId && rawData && immediate) {
      const actionList = rawData.actionLists[actionListId];
      if (actionList) {
        rawData = reduceListToGroup2({
          actionList,
          actionItemId,
          rawData
        });
      }
    }
    startEngine({ store, rawData, allowEvents, testManual });
    if (actionListId && actionTypeId === ActionTypeConsts.GENERAL_START_ACTION || isQuickEffect(actionTypeId)) {
      stopActionGroup({ store, actionListId });
      renderInitialGroup({ store, actionListId, eventId });
      const started = startActionGroup({
        store,
        eventId,
        actionListId,
        immediate,
        verbose
      });
      if (verbose && started) {
        store.dispatch(
          actionListPlaybackChanged({ actionListId, isPlaying: !immediate })
        );
      }
    }
  }
  function handleStopRequest({ actionListId }, store) {
    if (actionListId) {
      stopActionGroup({ store, actionListId });
    } else {
      stopAllActionGroups({ store });
    }
    stopEngine(store);
  }
  function handleClearRequest(state, store) {
    stopEngine(store);
    clearAllStyles2({ store, elementApi: IX2BrowserApi_exports });
  }
  function startEngine({ store, rawData, allowEvents, testManual }) {
    const { ixSession: ixSession2 } = store.getState();
    if (rawData) {
      store.dispatch(rawDataImported(rawData));
    }
    if (!ixSession2.active) {
      store.dispatch(
        sessionInitialized({
          hasBoundaryNodes: Boolean(document.querySelector(BOUNDARY_SELECTOR2)),
          reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })
      );
      if (allowEvents) {
        bindEvents(store);
        addDocumentClass();
        if (store.getState().ixSession.hasDefinedMediaQueries) {
          observeMediaQueryChange(store);
        }
      }
      store.dispatch(sessionStarted());
      startRenderLoop(store, testManual);
    }
  }
  function addDocumentClass() {
    const { documentElement } = document;
    if (documentElement.className.indexOf(W_MOD_IX2) === -1) {
      documentElement.className += ` ${W_MOD_IX2}`;
    }
  }
  function startRenderLoop(store, testManual) {
    const handleFrame = (now) => {
      const { ixSession: ixSession2, ixParameters: ixParameters2 } = store.getState();
      if (ixSession2.active) {
        store.dispatch(animationFrameChanged(now, ixParameters2));
        if (testManual) {
          observeOneRenderTick(store, handleFrame);
        } else {
          requestAnimationFrame(handleFrame);
        }
      }
    };
    handleFrame(window.performance.now());
  }
  function stopEngine(store) {
    const { ixSession: ixSession2 } = store.getState();
    if (ixSession2.active) {
      const { eventListeners } = ixSession2;
      eventListeners.forEach(clearEventListener);
      clearObjectCache2();
      store.dispatch(sessionStopped());
    }
  }
  function clearEventListener({ target, listenerParams }) {
    target.removeEventListener.apply(target, listenerParams);
  }
  function createGroupInstances({
    // @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
    store,
    // @ts-expect-error - TS7031 - Binding element 'eventStateKey' implicitly has an 'any' type.
    eventStateKey,
    // @ts-expect-error - TS7031 - Binding element 'eventTarget' implicitly has an 'any' type.
    eventTarget,
    // @ts-expect-error - TS7031 - Binding element 'eventId' implicitly has an 'any' type.
    eventId,
    // @ts-expect-error - TS7031 - Binding element 'eventConfig' implicitly has an 'any' type.
    eventConfig,
    // @ts-expect-error - TS7031 - Binding element 'actionListId' implicitly has an 'any' type.
    actionListId,
    // @ts-expect-error - TS7031 - Binding element 'parameterGroup' implicitly has an 'any' type.
    parameterGroup,
    // @ts-expect-error - TS7031 - Binding element 'smoothing' implicitly has an 'any' type.
    smoothing,
    // @ts-expect-error - TS7031 - Binding element 'restingValue' implicitly has an 'any' type.
    restingValue
  }) {
    const { ixData: ixData2, ixSession: ixSession2 } = store.getState();
    const { events } = ixData2;
    const event = events[eventId];
    const { eventTypeId } = event;
    const targetCache = {};
    const instanceActionGroups = {};
    const instanceConfigs = [];
    const { continuousActionGroups } = parameterGroup;
    let { id: parameterId } = parameterGroup;
    if (shouldNamespaceEventParameter2(eventTypeId, eventConfig)) {
      parameterId = getNamespacedParameterId3(eventStateKey, parameterId);
    }
    const eventElementRoot = ixSession2.hasBoundaryNodes && eventTarget ? getClosestElement(eventTarget, BOUNDARY_SELECTOR2) : null;
    continuousActionGroups.forEach((actionGroup) => {
      const { keyframe, actionItems } = actionGroup;
      actionItems.forEach((actionItem) => {
        const { actionTypeId } = actionItem;
        const { target } = actionItem.config;
        if (!target) {
          return;
        }
        const elementRoot = target.boundaryMode ? eventElementRoot : null;
        const key = stringifyTarget2(target) + COLON_DELIMITER4 + actionTypeId;
        instanceActionGroups[key] = appendActionItem(
          instanceActionGroups[key],
          keyframe,
          actionItem
        );
        if (!targetCache[key]) {
          targetCache[key] = true;
          const { config } = actionItem;
          getAffectedElements2({
            config,
            event,
            eventTarget,
            elementRoot,
            elementApi: IX2BrowserApi_exports
          }).forEach((element) => {
            instanceConfigs.push({ element, key });
          });
        }
      });
    });
    instanceConfigs.forEach(({ element, key }) => {
      const actionGroups = instanceActionGroups[key];
      const actionItem = (0, import_get2.default)(actionGroups, `[0].actionItems[0]`, {});
      const { actionTypeId } = actionItem;
      const pluginInstance = isPluginType2(actionTypeId) ? createPluginInstance2(actionTypeId)(element, actionItem) : null;
      const destination = getDestinationValues2(
        { element, actionItem, elementApi: IX2BrowserApi_exports },
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        pluginInstance
      );
      createInstance({
        store,
        element,
        eventId,
        actionListId,
        actionItem,
        destination,
        continuous: true,
        parameterId,
        actionGroups,
        smoothing,
        restingValue,
        pluginInstance
      });
    });
  }
  function appendActionItem(actionGroups = [], keyframe, actionItem) {
    const newActionGroups = [...actionGroups];
    let groupIndex;
    newActionGroups.some((group, index) => {
      if (group.keyframe === keyframe) {
        groupIndex = index;
        return true;
      }
      return false;
    });
    if (groupIndex == null) {
      groupIndex = newActionGroups.length;
      newActionGroups.push({
        keyframe,
        actionItems: []
      });
    }
    newActionGroups[groupIndex].actionItems.push(actionItem);
    return newActionGroups;
  }
  function bindEvents(store) {
    const { ixData: ixData2 } = store.getState();
    const { eventTypeMap } = ixData2;
    updateViewportWidth(store);
    (0, import_forEach.default)(eventTypeMap, (events, key) => {
      const logic = IX2VanillaEvents_default[key];
      if (!logic) {
        console.warn(`IX2 event type not configured: ${key}`);
        return;
      }
      bindEventType({
        logic,
        store,
        events
      });
    });
    const { ixSession: ixSession2 } = store.getState();
    if (ixSession2.eventListeners.length) {
      bindResizeEvents(store);
    }
  }
  function bindResizeEvents(store) {
    const handleResize = () => {
      updateViewportWidth(store);
    };
    WINDOW_RESIZE_EVENTS.forEach((type) => {
      window.addEventListener(type, handleResize);
      store.dispatch(eventListenerAdded(window, [type, handleResize]));
    });
    handleResize();
  }
  function updateViewportWidth(store) {
    const { ixSession: ixSession2, ixData: ixData2 } = store.getState();
    const width = window.innerWidth;
    if (width !== ixSession2.viewportWidth) {
      const { mediaQueries } = ixData2;
      store.dispatch(viewportWidthChanged({ width, mediaQueries }));
    }
  }
  function bindEventType({ logic, store, events }) {
    injectBehaviorCSSFixes(events);
    const { types: eventTypes, handler: eventHandler } = logic;
    const { ixData: ixData2 } = store.getState();
    const { actionLists } = ixData2;
    const eventTargets = mapFoundValues(events, getAffectedForEvent);
    if (!(0, import_size.default)(eventTargets)) {
      return;
    }
    (0, import_forEach.default)(eventTargets, (elements, key) => {
      const event = events[key];
      const {
        action: eventAction,
        id: eventId,
        mediaQueries = ixData2.mediaQueryKeys
      } = event;
      const { actionListId } = eventAction.config;
      if (!mediaQueriesEqual2(mediaQueries, ixData2.mediaQueryKeys)) {
        store.dispatch(mediaQueriesDefined());
      }
      if (eventAction.actionTypeId === ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
        const configs = Array.isArray(event.config) ? event.config : [event.config];
        configs.forEach((eventConfig) => {
          const { continuousParameterGroupId } = eventConfig;
          const paramGroups = (0, import_get2.default)(
            actionLists,
            `${actionListId}.continuousParameterGroups`,
            []
          );
          const parameterGroup = (0, import_find2.default)(
            paramGroups,
            ({ id }) => id === continuousParameterGroupId
          );
          const smoothing = (eventConfig.smoothing || 0) / 100;
          const restingValue = (eventConfig.restingState || 0) / 100;
          if (!parameterGroup) {
            return;
          }
          elements.forEach((eventTarget, index) => {
            const eventStateKey = eventId + COLON_DELIMITER4 + index;
            createGroupInstances({
              store,
              eventStateKey,
              eventTarget,
              eventId,
              eventConfig,
              actionListId,
              parameterGroup,
              smoothing,
              restingValue
            });
          });
        });
      }
      if (eventAction.actionTypeId === ActionTypeConsts.GENERAL_START_ACTION || isQuickEffect(eventAction.actionTypeId)) {
        renderInitialGroup({ store, actionListId, eventId });
      }
    });
    const handleEvent = (nativeEvent) => {
      const { ixSession: ixSession2 } = store.getState();
      forEachEventTarget(eventTargets, (element, eventId, eventStateKey) => {
        const event = events[eventId];
        const oldState = ixSession2.eventState[eventStateKey];
        const { action: eventAction, mediaQueries = ixData2.mediaQueryKeys } = event;
        if (!shouldAllowMediaQuery2(mediaQueries, ixSession2.mediaQueryKey)) {
          return;
        }
        const handleEventWithConfig = (eventConfig = {}) => {
          const newState = eventHandler(
            {
              store,
              element,
              event,
              eventConfig,
              nativeEvent,
              eventStateKey
            },
            oldState
          );
          if (!shallowEqual2(newState, oldState)) {
            store.dispatch(eventStateChanged(eventStateKey, newState));
          }
        };
        if (eventAction.actionTypeId === ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
          const configs = Array.isArray(event.config) ? event.config : [event.config];
          configs.forEach(handleEventWithConfig);
        } else {
          handleEventWithConfig();
        }
      });
    };
    const handleEventThrottled = (0, import_throttle.default)(handleEvent, THROTTLED_EVENT_WAIT);
    const addListeners = ({
      target = document,
      // @ts-expect-error - TS7031 - Binding element 'types' implicitly has an 'any' type.
      types,
      // @ts-expect-error - TS7031 - Binding element 'shouldThrottle' implicitly has an 'any' type.
      throttle: shouldThrottle
    }) => {
      types.split(" ").filter(Boolean).forEach((type) => {
        const handlerFunc = shouldThrottle ? handleEventThrottled : handleEvent;
        target.addEventListener(type, handlerFunc);
        store.dispatch(eventListenerAdded(target, [type, handlerFunc]));
      });
    };
    if (Array.isArray(eventTypes)) {
      eventTypes.forEach(addListeners);
    } else if (typeof eventTypes === "string") {
      addListeners(logic);
    }
  }
  function injectBehaviorCSSFixes(events) {
    if (!IS_MOBILE_SAFARI) {
      return;
    }
    const injectedSelectors = {};
    let cssText = "";
    for (const eventId in events) {
      const { eventTypeId, target } = events[eventId];
      const selector = getQuerySelector(target);
      if (injectedSelectors[selector]) {
        continue;
      }
      if (eventTypeId === EventTypeConsts.MOUSE_CLICK || eventTypeId === EventTypeConsts.MOUSE_SECOND_CLICK) {
        injectedSelectors[selector] = true;
        cssText += selector + "{cursor: pointer;touch-action: manipulation;}";
      }
    }
    if (cssText) {
      const style = document.createElement("style");
      style.textContent = cssText;
      document.body.appendChild(style);
    }
  }
  function renderInitialGroup({ store, actionListId, eventId }) {
    const { ixData: ixData2, ixSession: ixSession2 } = store.getState();
    const { actionLists, events } = ixData2;
    const event = events[eventId];
    const actionList = actionLists[actionListId];
    if (actionList && actionList.useFirstGroupAsInitialState) {
      const initialStateItems = (0, import_get2.default)(
        actionList,
        "actionItemGroups[0].actionItems",
        []
      );
      const mediaQueries = (0, import_get2.default)(event, "mediaQueries", ixData2.mediaQueryKeys);
      if (!shouldAllowMediaQuery2(mediaQueries, ixSession2.mediaQueryKey)) {
        return;
      }
      initialStateItems.forEach((actionItem) => {
        const { config: itemConfig, actionTypeId } = actionItem;
        const config = (
          // When useEventTarget is explicitly true, use event target/targets to query elements
          // However, skip this condition when objectId is defined
          itemConfig?.target?.useEventTarget === true && itemConfig?.target?.objectId == null ? { target: event.target, targets: event.targets } : itemConfig
        );
        const itemElements = getAffectedElements2({ config, event, elementApi: IX2BrowserApi_exports });
        const shouldUsePlugin = isPluginType2(actionTypeId);
        itemElements.forEach((element) => {
          const pluginInstance = shouldUsePlugin ? createPluginInstance2(actionTypeId)(element, actionItem) : null;
          createInstance({
            destination: getDestinationValues2(
              { element, actionItem, elementApi: IX2BrowserApi_exports },
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              pluginInstance
            ),
            immediate: true,
            store,
            element,
            eventId,
            actionItem,
            actionListId,
            pluginInstance
          });
        });
      });
    }
  }
  function stopAllActionGroups({ store }) {
    const { ixInstances: ixInstances2 } = store.getState();
    (0, import_forEach.default)(ixInstances2, (instance) => {
      if (!instance.continuous) {
        const { actionListId, verbose } = instance;
        removeInstance(instance, store);
        if (verbose) {
          store.dispatch(
            actionListPlaybackChanged({ actionListId, isPlaying: false })
          );
        }
      }
    });
  }
  function stopActionGroup({
    // @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
    store,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    eventId,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    eventTarget,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    eventStateKey,
    // @ts-expect-error - TS7031 - Binding element 'actionListId' implicitly has an 'any' type.
    actionListId
  }) {
    const { ixInstances: ixInstances2, ixSession: ixSession2 } = store.getState();
    const eventElementRoot = ixSession2.hasBoundaryNodes && eventTarget ? getClosestElement(eventTarget, BOUNDARY_SELECTOR2) : null;
    (0, import_forEach.default)(ixInstances2, (instance) => {
      const boundaryMode = (0, import_get2.default)(instance, "actionItem.config.target.boundaryMode");
      const validEventKey = eventStateKey ? instance.eventStateKey === eventStateKey : true;
      if (instance.actionListId === actionListId && instance.eventId === eventId && validEventKey) {
        if (eventElementRoot && boundaryMode && !elementContains(eventElementRoot, instance.element)) {
          return;
        }
        removeInstance(instance, store);
        if (instance.verbose) {
          store.dispatch(
            actionListPlaybackChanged({ actionListId, isPlaying: false })
          );
        }
      }
    });
  }
  function startActionGroup({
    // @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
    store,
    // @ts-expect-error - TS7031 - Binding element 'eventId' implicitly has an 'any' type.
    eventId,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    eventTarget,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    eventStateKey,
    // @ts-expect-error - TS7031 - Binding element 'actionListId' implicitly has an 'any' type.
    actionListId,
    groupIndex = 0,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    immediate,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    verbose
  }) {
    const { ixData: ixData2, ixSession: ixSession2 } = store.getState();
    const { events } = ixData2;
    const event = events[eventId] || {};
    const { mediaQueries = ixData2.mediaQueryKeys } = event;
    const actionList = (0, import_get2.default)(ixData2, `actionLists.${actionListId}`, {});
    const { actionItemGroups, useFirstGroupAsInitialState } = actionList;
    if (!actionItemGroups || !actionItemGroups.length) {
      return false;
    }
    if (groupIndex >= actionItemGroups.length && (0, import_get2.default)(event, "config.loop")) {
      groupIndex = 0;
    }
    if (groupIndex === 0 && useFirstGroupAsInitialState) {
      groupIndex++;
    }
    const isFirstGroup = groupIndex === 0 || groupIndex === 1 && useFirstGroupAsInitialState;
    const instanceDelay = isFirstGroup && isQuickEffect(event.action?.actionTypeId) ? event.config.delay : void 0;
    const actionItems = (0, import_get2.default)(actionItemGroups, [groupIndex, "actionItems"], []);
    if (!actionItems.length) {
      return false;
    }
    if (!shouldAllowMediaQuery2(mediaQueries, ixSession2.mediaQueryKey)) {
      return false;
    }
    const eventElementRoot = ixSession2.hasBoundaryNodes && eventTarget ? getClosestElement(eventTarget, BOUNDARY_SELECTOR2) : null;
    const carrierIndex = getMaxDurationItemIndex2(actionItems);
    let groupStartResult = false;
    actionItems.forEach((actionItem, actionIndex) => {
      const { config, actionTypeId } = actionItem;
      const shouldUsePlugin = isPluginType2(actionTypeId);
      const { target } = config;
      if (!target) {
        return;
      }
      const elementRoot = target.boundaryMode ? eventElementRoot : null;
      const elements = getAffectedElements2({
        config,
        event,
        eventTarget,
        elementRoot,
        elementApi: IX2BrowserApi_exports
      });
      elements.forEach((element, elementIndex) => {
        const pluginInstance = shouldUsePlugin ? createPluginInstance2(actionTypeId)(element, actionItem) : null;
        const pluginDuration = shouldUsePlugin ? getPluginDuration2(actionTypeId)(element, actionItem) : null;
        groupStartResult = true;
        const isCarrier = carrierIndex === actionIndex && elementIndex === 0;
        const computedStyle = getComputedStyle3({ element, actionItem });
        const destination = getDestinationValues2(
          { element, actionItem, elementApi: IX2BrowserApi_exports },
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          pluginInstance
        );
        createInstance({
          store,
          element,
          actionItem,
          eventId,
          eventTarget,
          eventStateKey,
          actionListId,
          groupIndex,
          isCarrier,
          computedStyle,
          destination,
          immediate,
          verbose,
          pluginInstance,
          pluginDuration,
          instanceDelay
        });
      });
    });
    return groupStartResult;
  }
  function createInstance(options) {
    const { store, computedStyle, ...rest } = options;
    const {
      element,
      actionItem,
      immediate,
      pluginInstance,
      continuous,
      restingValue,
      eventId
    } = rest;
    const autoStart = !continuous;
    const instanceId = getInstanceId2();
    const { ixElements: ixElements3, ixSession: ixSession2, ixData: ixData2 } = store.getState();
    const elementId = getElementId2(ixElements3, element);
    const { refState: refState2 } = ixElements3[elementId] || {};
    const refType = getRefType(element);
    const skipMotion = (
      // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ readonly TRANSFORM_MOVE: true; readonly TRANSFORM_SCALE: true; readonly TRANSFORM_ROTATE: true; readonly TRANSFORM_SKEW: true; readonly STYLE_SIZE: true; readonly STYLE_FILTER: true; readonly STYLE_FONT_VARIATION: true; }'.
      ixSession2.reducedMotion && ReducedMotionTypes[actionItem.actionTypeId]
    );
    let skipToValue;
    if (skipMotion && continuous) {
      switch (ixData2.events[eventId]?.eventTypeId) {
        case EventTypeConsts.MOUSE_MOVE:
        case EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
          skipToValue = restingValue;
          break;
        default:
          skipToValue = 0.5;
          break;
      }
    }
    const origin = getInstanceOrigin2(
      element,
      refState2,
      computedStyle,
      actionItem,
      IX2BrowserApi_exports,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      pluginInstance
    );
    store.dispatch(
      instanceAdded({
        instanceId,
        elementId,
        origin,
        refType,
        skipMotion,
        skipToValue,
        ...rest
      })
    );
    dispatchCustomEvent(document.body, "ix2-animation-started", instanceId);
    if (immediate) {
      renderImmediateInstance(store, instanceId);
      return;
    }
    observeStore2({
      store,
      // @ts-expect-error - TS7031 - Binding element 'ixInstances' implicitly has an 'any' type.
      select: ({ ixInstances: ixInstances2 }) => ixInstances2[instanceId],
      onChange: handleInstanceChange
    });
    if (autoStart) {
      store.dispatch(instanceStarted(instanceId, ixSession2.tick));
    }
  }
  function removeInstance(instance, store) {
    dispatchCustomEvent(document.body, "ix2-animation-stopping", {
      instanceId: instance.id,
      state: store.getState()
    });
    const { elementId, actionItem } = instance;
    const { ixElements: ixElements3 } = store.getState();
    const { ref, refType } = ixElements3[elementId] || {};
    if (refType === HTML_ELEMENT4) {
      cleanupHTMLElement2(ref, actionItem, IX2BrowserApi_exports);
    }
    store.dispatch(instanceRemoved(instance.id));
  }
  function dispatchCustomEvent(element, eventName, detail) {
    const event = document.createEvent("CustomEvent");
    event.initCustomEvent(eventName, true, true, detail);
    element.dispatchEvent(event);
  }
  function renderImmediateInstance(store, instanceId) {
    const { ixParameters: ixParameters2 } = store.getState();
    store.dispatch(instanceStarted(instanceId, 0));
    store.dispatch(animationFrameChanged(performance.now(), ixParameters2));
    const { ixInstances: ixInstances2 } = store.getState();
    handleInstanceChange(ixInstances2[instanceId], store);
  }
  function handleInstanceChange(instance, store) {
    const {
      active,
      continuous,
      complete,
      elementId,
      actionItem,
      actionTypeId,
      renderType,
      current,
      groupIndex,
      eventId,
      eventTarget,
      eventStateKey,
      actionListId,
      isCarrier,
      styleProp,
      verbose,
      pluginInstance
    } = instance;
    const { ixData: ixData2, ixSession: ixSession2 } = store.getState();
    const { events } = ixData2;
    const event = events[eventId] || {};
    const { mediaQueries = ixData2.mediaQueryKeys } = event;
    if (!shouldAllowMediaQuery2(mediaQueries, ixSession2.mediaQueryKey)) {
      return;
    }
    if (continuous || active || complete) {
      if (current || renderType === RENDER_GENERAL4 && complete) {
        store.dispatch(
          elementStateChanged(elementId, actionTypeId, current, actionItem)
        );
        const { ixElements: ixElements3 } = store.getState();
        const { ref, refType, refState: refState2 } = ixElements3[elementId] || {};
        const actionState = refState2 && refState2[actionTypeId];
        if (refType === HTML_ELEMENT4 || isPluginType2(actionTypeId)) {
          renderHTMLElement2(
            ref,
            refState2,
            actionState,
            eventId,
            actionItem,
            styleProp,
            IX2BrowserApi_exports,
            renderType,
            pluginInstance
          );
        }
      }
      if (complete) {
        if (isCarrier) {
          const started = startActionGroup({
            store,
            eventId,
            eventTarget,
            eventStateKey,
            actionListId,
            groupIndex: groupIndex + 1,
            verbose
          });
          if (verbose && !started) {
            store.dispatch(
              actionListPlaybackChanged({ actionListId, isPlaying: false })
            );
          }
        }
        removeInstance(instance, store);
      }
    }
  }
  var import_find2, import_get2, import_size, import_omitBy, import_isEmpty, import_mapValues, import_forEach, import_throttle, import_shared6, QuickEffectsIdList, isQuickEffect, COLON_DELIMITER4, BOUNDARY_SELECTOR2, HTML_ELEMENT4, RENDER_GENERAL4, W_MOD_IX2, getAffectedElements2, getElementId2, getDestinationValues2, observeStore2, getInstanceId2, renderHTMLElement2, clearAllStyles2, getMaxDurationItemIndex2, getComputedStyle3, getInstanceOrigin2, reduceListToGroup2, shouldNamespaceEventParameter2, getNamespacedParameterId3, shouldAllowMediaQuery2, cleanupHTMLElement2, clearObjectCache2, stringifyTarget2, mediaQueriesEqual2, shallowEqual2, isPluginType2, createPluginInstance2, getPluginDuration2, ua, IS_MOBILE_SAFARI, THROTTLED_EVENT_WAIT, WINDOW_RESIZE_EVENTS, mapFoundValues, forEachEventTarget, getAffectedForEvent;
  var init_IX2VanillaEngine = __esm({
    "packages/systems/ix2/engine/logic/IX2VanillaEngine.ts"() {
      "use strict";
      import_find2 = __toESM(require_find());
      import_get2 = __toESM(require_get());
      import_size = __toESM(require_size());
      import_omitBy = __toESM(require_omitBy());
      import_isEmpty = __toESM(require_isEmpty());
      import_mapValues = __toESM(require_mapValues());
      import_forEach = __toESM(require_forEach());
      import_throttle = __toESM(require_throttle());
      init_shared_constants();
      import_shared6 = __toESM(require_shared2());
      init_IX2EngineActions();
      init_IX2BrowserApi();
      init_IX2VanillaEvents();
      QuickEffectsIdList = Object.keys(QuickEffectIds);
      isQuickEffect = (actionTypeId) => QuickEffectsIdList.includes(actionTypeId);
      ({
        COLON_DELIMITER: COLON_DELIMITER4,
        BOUNDARY_SELECTOR: BOUNDARY_SELECTOR2,
        HTML_ELEMENT: HTML_ELEMENT4,
        RENDER_GENERAL: RENDER_GENERAL4,
        W_MOD_IX: W_MOD_IX2
      } = IX2EngineConstants_exports);
      ({
        getAffectedElements: getAffectedElements2,
        getElementId: getElementId2,
        getDestinationValues: getDestinationValues2,
        observeStore: observeStore2,
        getInstanceId: getInstanceId2,
        renderHTMLElement: renderHTMLElement2,
        clearAllStyles: clearAllStyles2,
        getMaxDurationItemIndex: getMaxDurationItemIndex2,
        getComputedStyle: getComputedStyle3,
        getInstanceOrigin: getInstanceOrigin2,
        reduceListToGroup: reduceListToGroup2,
        shouldNamespaceEventParameter: shouldNamespaceEventParameter2,
        getNamespacedParameterId: getNamespacedParameterId3,
        shouldAllowMediaQuery: shouldAllowMediaQuery2,
        cleanupHTMLElement: cleanupHTMLElement2,
        clearObjectCache: clearObjectCache2,
        stringifyTarget: stringifyTarget2,
        mediaQueriesEqual: mediaQueriesEqual2,
        shallowEqual: shallowEqual2
      } = import_shared6.IX2VanillaUtils);
      ({ isPluginType: isPluginType2, createPluginInstance: createPluginInstance2, getPluginDuration: getPluginDuration2 } = import_shared6.IX2VanillaPlugins);
      ua = navigator.userAgent;
      IS_MOBILE_SAFARI = ua.match(/iPad/i) || ua.match(/iPhone/);
      THROTTLED_EVENT_WAIT = 12;
      WINDOW_RESIZE_EVENTS = ["resize", "orientationchange"];
      mapFoundValues = (object, iteratee) => (0, import_omitBy.default)((0, import_mapValues.default)(object, iteratee), import_isEmpty.default);
      forEachEventTarget = (eventTargets, eventCallback) => {
        (0, import_forEach.default)(eventTargets, (elements, eventId) => {
          elements.forEach((element, index) => {
            const eventStateKey = eventId + COLON_DELIMITER4 + index;
            eventCallback(element, eventId, eventStateKey);
          });
        });
      };
      getAffectedForEvent = (event) => {
        const config = { target: event.target, targets: event.targets };
        return getAffectedElements2({ config, elementApi: IX2BrowserApi_exports });
      };
    }
  });

  // packages/systems/ix2/engine/index.js
  var require_engine = __commonJS({
    "packages/systems/ix2/engine/index.js"(exports) {
      "use strict";
      var _interopRequireWildcard = require_interopRequireWildcard().default;
      var _interopRequireDefault = require_interopRequireDefault().default;
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.actions = void 0;
      exports.destroy = destroy;
      exports.init = init;
      exports.setEnv = setEnv;
      exports.store = void 0;
      require_includes3();
      var _redux = require_lib2();
      var _IX2Reducer = _interopRequireDefault((init_IX2Reducer(), __toCommonJS(IX2Reducer_exports)));
      var _IX2VanillaEngine = (init_IX2VanillaEngine(), __toCommonJS(IX2VanillaEngine_exports));
      var actions = _interopRequireWildcard((init_IX2EngineActions(), __toCommonJS(IX2EngineActions_exports)));
      exports.actions = actions;
      var store = exports.store = (0, _redux.createStore)(_IX2Reducer.default);
      function setEnv(env) {
        if (env()) {
          (0, _IX2VanillaEngine.observeRequests)(store);
        }
      }
      function init(rawData) {
        destroy();
        (0, _IX2VanillaEngine.startEngine)({
          store,
          rawData,
          allowEvents: true
        });
      }
      function destroy() {
        (0, _IX2VanillaEngine.stopEngine)(store);
      }
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-ix2.js
  var require_webflow_ix2 = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-ix2.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      var ix2 = require_engine();
      ix2.setEnv(Webflow.env);
      Webflow.define("ix2", module.exports = function() {
        return ix2;
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-links.js
  var require_webflow_links = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-links.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("links", module.exports = function($, _) {
        var api = {};
        var $win = $(window);
        var designer;
        var inApp = Webflow.env();
        var location = window.location;
        var tempLink = document.createElement("a");
        var linkCurrent = "w--current";
        var indexPage = /index\.(html|php)$/;
        var dirList = /\/$/;
        var anchors;
        var slug;
        api.ready = api.design = api.preview = init;
        function init() {
          designer = inApp && Webflow.env("design");
          slug = Webflow.env("slug") || location.pathname || "";
          Webflow.scroll.off(scroll);
          anchors = [];
          var links = document.links;
          for (var i = 0; i < links.length; ++i) {
            select(links[i]);
          }
          if (anchors.length) {
            Webflow.scroll.on(scroll);
            scroll();
          }
        }
        function select(link) {
          if (link.getAttribute("hreflang")) {
            return;
          }
          var href = designer && link.getAttribute("href-disabled") || link.getAttribute("href");
          tempLink.href = href;
          if (href.indexOf(":") >= 0) {
            return;
          }
          var $link = $(link);
          if (tempLink.hash.length > 1 && tempLink.host + tempLink.pathname === location.host + location.pathname) {
            if (!/^#[a-zA-Z0-9\-\_]+$/.test(tempLink.hash)) {
              return;
            }
            var $section = $(tempLink.hash);
            $section.length && anchors.push({
              link: $link,
              sec: $section,
              active: false
            });
            return;
          }
          if (href === "#" || href === "") {
            return;
          }
          var match = tempLink.href === location.href || href === slug || indexPage.test(href) && dirList.test(slug);
          setClass($link, linkCurrent, match);
        }
        function scroll() {
          var viewTop = $win.scrollTop();
          var viewHeight = $win.height();
          _.each(anchors, function(anchor) {
            if (anchor.link.attr("hreflang")) {
              return;
            }
            var $link = anchor.link;
            var $section = anchor.sec;
            var top = $section.offset().top;
            var height = $section.outerHeight();
            var offset = viewHeight * 0.5;
            var active = $section.is(":visible") && top + height - offset >= viewTop && top + offset <= viewTop + viewHeight;
            if (anchor.active === active) {
              return;
            }
            anchor.active = active;
            setClass($link, linkCurrent, active);
          });
        }
        function setClass($elem, className, add) {
          var exists = $elem.hasClass(className);
          if (add && exists) {
            return;
          }
          if (!add && !exists) {
            return;
          }
          add ? $elem.addClass(className) : $elem.removeClass(className);
        }
        return api;
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-scroll.js
  var require_webflow_scroll = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-scroll.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("scroll", module.exports = function($) {
        var NS_EVENTS = {
          WF_CLICK_EMPTY: "click.wf-empty-link",
          WF_CLICK_SCROLL: "click.wf-scroll"
        };
        var loc = window.location;
        var history = inIframe() ? null : window.history;
        var $win = $(window);
        var $doc = $(document);
        var $body = $(document.body);
        var animate = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(fn) {
          window.setTimeout(fn, 15);
        };
        var rootTag = Webflow.env("editor") ? ".w-editor-body" : "body";
        var headerSelector = "header, " + rootTag + " > .header, " + rootTag + " > .w-nav:not([data-no-scroll])";
        var emptyHrefSelector = 'a[href="#"]';
        var localHrefSelector = 'a[href*="#"]:not(.w-tab-link):not(' + emptyHrefSelector + ")";
        var scrollTargetOutlineCSS = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}';
        var focusStylesEl = document.createElement("style");
        focusStylesEl.appendChild(document.createTextNode(scrollTargetOutlineCSS));
        function inIframe() {
          try {
            return Boolean(window.frameElement);
          } catch (e) {
            return true;
          }
        }
        var validHash = /^#[a-zA-Z0-9][\w:.-]*$/;
        function linksToCurrentPage(link) {
          return validHash.test(link.hash) && link.host + link.pathname === loc.host + loc.pathname;
        }
        const reducedMotionMediaQuery = typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
        function reducedMotionEnabled() {
          return document.body.getAttribute("data-wf-scroll-motion") === "none" || reducedMotionMediaQuery.matches;
        }
        function setFocusable($el, action) {
          var initialTabindex;
          switch (action) {
            case "add":
              initialTabindex = $el.attr("tabindex");
              if (initialTabindex) {
                $el.attr("data-wf-tabindex-swap", initialTabindex);
              } else {
                $el.attr("tabindex", "-1");
              }
              break;
            case "remove":
              initialTabindex = $el.attr("data-wf-tabindex-swap");
              if (initialTabindex) {
                $el.attr("tabindex", initialTabindex);
                $el.removeAttr("data-wf-tabindex-swap");
              } else {
                $el.removeAttr("tabindex");
              }
              break;
          }
          $el.toggleClass("wf-force-outline-none", action === "add");
        }
        function validateScroll(evt) {
          var target = evt.currentTarget;
          if (
            // Bail if in Designer
            Webflow.env("design") || // Ignore links being used by jQuery mobile
            window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(target.className)
          ) {
            return;
          }
          var hash = linksToCurrentPage(target) ? target.hash : "";
          if (hash === "")
            return;
          var $el = $(hash);
          if (!$el.length) {
            return;
          }
          if (evt) {
            evt.preventDefault();
            evt.stopPropagation();
          }
          updateHistory(hash, evt);
          window.setTimeout(function() {
            scroll($el, function setFocus() {
              setFocusable($el, "add");
              $el.get(0).focus({
                preventScroll: true
              });
              setFocusable($el, "remove");
            });
          }, evt ? 0 : 300);
        }
        function updateHistory(hash) {
          if (loc.hash !== hash && history && history.pushState && // Navigation breaks Chrome when the protocol is `file:`.
          !(Webflow.env.chrome && loc.protocol === "file:")) {
            var oldHash = history.state && history.state.hash;
            if (oldHash !== hash) {
              history.pushState({
                hash
              }, "", hash);
            }
          }
        }
        function scroll($targetEl, cb) {
          var start = $win.scrollTop();
          var end = calculateScrollEndPosition($targetEl);
          if (start === end)
            return;
          var duration = calculateScrollDuration($targetEl, start, end);
          var clock = Date.now();
          var step = function() {
            var elapsed = Date.now() - clock;
            window.scroll(0, getY(start, end, elapsed, duration));
            if (elapsed <= duration) {
              animate(step);
            } else if (typeof cb === "function") {
              cb();
            }
          };
          animate(step);
        }
        function calculateScrollEndPosition($targetEl) {
          var $header = $(headerSelector);
          var offsetY = $header.css("position") === "fixed" ? $header.outerHeight() : 0;
          var end = $targetEl.offset().top - offsetY;
          if ($targetEl.data("scroll") === "mid") {
            var available = $win.height() - offsetY;
            var elHeight = $targetEl.outerHeight();
            if (elHeight < available) {
              end -= Math.round((available - elHeight) / 2);
            }
          }
          return end;
        }
        function calculateScrollDuration($targetEl, start, end) {
          if (reducedMotionEnabled())
            return 0;
          var mult = 1;
          $body.add($targetEl).each(function(_, el) {
            var time = parseFloat(el.getAttribute("data-scroll-time"));
            if (!isNaN(time) && time >= 0) {
              mult = time;
            }
          });
          return (472.143 * Math.log(Math.abs(start - end) + 125) - 2e3) * mult;
        }
        function getY(start, end, elapsed, duration) {
          if (elapsed > duration) {
            return end;
          }
          return start + (end - start) * ease2(elapsed / duration);
        }
        function ease2(t) {
          return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        }
        function ready() {
          var {
            WF_CLICK_EMPTY,
            WF_CLICK_SCROLL
          } = NS_EVENTS;
          $doc.on(WF_CLICK_SCROLL, localHrefSelector, validateScroll);
          $doc.on(WF_CLICK_EMPTY, emptyHrefSelector, function(e) {
            e.preventDefault();
          });
          document.head.insertBefore(focusStylesEl, document.head.firstChild);
        }
        return {
          ready
        };
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-touch.js
  var require_webflow_touch = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-touch.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("touch", module.exports = function($) {
        var api = {};
        var getSelection = window.getSelection;
        $.event.special.tap = {
          bindType: "click",
          delegateType: "click"
        };
        api.init = function(el) {
          el = typeof el === "string" ? $(el).get(0) : el;
          return el ? new Touch(el) : null;
        };
        function Touch(el) {
          var active = false;
          var useTouch = false;
          var thresholdX = Math.min(Math.round(window.innerWidth * 0.04), 40);
          var startX;
          var lastX;
          el.addEventListener("touchstart", start, false);
          el.addEventListener("touchmove", move, false);
          el.addEventListener("touchend", end, false);
          el.addEventListener("touchcancel", cancel, false);
          el.addEventListener("mousedown", start, false);
          el.addEventListener("mousemove", move, false);
          el.addEventListener("mouseup", end, false);
          el.addEventListener("mouseout", cancel, false);
          function start(evt) {
            var touches = evt.touches;
            if (touches && touches.length > 1) {
              return;
            }
            active = true;
            if (touches) {
              useTouch = true;
              startX = touches[0].clientX;
            } else {
              startX = evt.clientX;
            }
            lastX = startX;
          }
          function move(evt) {
            if (!active) {
              return;
            }
            if (useTouch && evt.type === "mousemove") {
              evt.preventDefault();
              evt.stopPropagation();
              return;
            }
            var touches = evt.touches;
            var x = touches ? touches[0].clientX : evt.clientX;
            var velocityX = x - lastX;
            lastX = x;
            if (Math.abs(velocityX) > thresholdX && getSelection && String(getSelection()) === "") {
              triggerEvent("swipe", evt, {
                direction: velocityX > 0 ? "right" : "left"
              });
              cancel();
            }
          }
          function end(evt) {
            if (!active) {
              return;
            }
            active = false;
            if (useTouch && evt.type === "mouseup") {
              evt.preventDefault();
              evt.stopPropagation();
              useTouch = false;
              return;
            }
          }
          function cancel() {
            active = false;
          }
          function destroy() {
            el.removeEventListener("touchstart", start, false);
            el.removeEventListener("touchmove", move, false);
            el.removeEventListener("touchend", end, false);
            el.removeEventListener("touchcancel", cancel, false);
            el.removeEventListener("mousedown", start, false);
            el.removeEventListener("mousemove", move, false);
            el.removeEventListener("mouseup", end, false);
            el.removeEventListener("mouseout", cancel, false);
            el = null;
          }
          this.destroy = destroy;
        }
        function triggerEvent(type, evt, data) {
          var newEvent = $.Event(type, {
            originalEvent: evt
          });
          $(evt.target).trigger(newEvent, data);
        }
        api.instance = api.init(document);
        return api;
      });
    }
  });

  // packages/shared/render/plugins/Dropdown/webflow-dropdown.js
  var require_webflow_dropdown = __commonJS({
    "packages/shared/render/plugins/Dropdown/webflow-dropdown.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      var IXEvents = require_webflow_ix2_events();
      var KEY_CODES = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35
      };
      var FORCE_CLOSE = true;
      var INTERNAL_PAGE_LINK_HASHES_PATTERN = /^#[a-zA-Z0-9\-_]+$/;
      Webflow.define("dropdown", module.exports = function($, _) {
        var debounce = _.debounce;
        var api = {};
        var inApp = Webflow.env();
        var inPreview = false;
        var inDesigner;
        var touch = Webflow.env.touch;
        var namespace = ".w-dropdown";
        var openStateClassName = "w--open";
        var ix = IXEvents.triggers;
        var defaultZIndex = 900;
        var focusOutEvent = "focusout" + namespace;
        var keydownEvent = "keydown" + namespace;
        var mouseEnterEvent = "mouseenter" + namespace;
        var mouseMoveEvent = "mousemove" + namespace;
        var mouseLeaveEvent = "mouseleave" + namespace;
        var mouseUpEvent = (touch ? "click" : "mouseup") + namespace;
        var closeEvent = "w-close" + namespace;
        var settingEvent = "setting" + namespace;
        var $doc = $(document);
        var $dropdowns;
        api.ready = init;
        api.design = function() {
          if (inPreview) {
            closeAll();
          }
          inPreview = false;
          init();
        };
        api.preview = function() {
          inPreview = true;
          init();
        };
        function init() {
          inDesigner = inApp && Webflow.env("design");
          $dropdowns = $doc.find(namespace);
          $dropdowns.each(build);
        }
        function build(i, el) {
          var $el = $(el);
          var data = $.data(el, namespace);
          if (!data) {
            data = $.data(el, namespace, {
              open: false,
              el: $el,
              config: {},
              selectedIdx: -1
            });
          }
          data.toggle = data.el.children(".w-dropdown-toggle");
          data.list = data.el.children(".w-dropdown-list");
          data.links = data.list.find("a:not(.w-dropdown .w-dropdown a)");
          data.complete = complete(data);
          data.mouseLeave = makeMouseLeaveHandler(data);
          data.mouseUpOutside = outside(data);
          data.mouseMoveOutside = moveOutside(data);
          configure(data);
          var toggleId = data.toggle.attr("id");
          var listId = data.list.attr("id");
          if (!toggleId) {
            toggleId = "w-dropdown-toggle-" + i;
          }
          if (!listId) {
            listId = "w-dropdown-list-" + i;
          }
          data.toggle.attr("id", toggleId);
          data.toggle.attr("aria-controls", listId);
          data.toggle.attr("aria-haspopup", "menu");
          data.toggle.attr("aria-expanded", "false");
          data.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden", "true");
          if (data.toggle.prop("tagName") !== "BUTTON") {
            data.toggle.attr("role", "button");
            if (!data.toggle.attr("tabindex")) {
              data.toggle.attr("tabindex", "0");
            }
          }
          data.list.attr("id", listId);
          data.list.attr("aria-labelledby", toggleId);
          data.links.each(function(idx, link) {
            if (!link.hasAttribute("tabindex"))
              link.setAttribute("tabindex", "0");
            if (INTERNAL_PAGE_LINK_HASHES_PATTERN.test(link.hash)) {
              link.addEventListener("click", close.bind(null, data));
            }
          });
          data.el.off(namespace);
          data.toggle.off(namespace);
          if (data.nav) {
            data.nav.off(namespace);
          }
          var initialToggler = makeToggler(data, FORCE_CLOSE);
          if (inDesigner) {
            data.el.on(settingEvent, makeSettingEventHandler(data));
          }
          if (!inDesigner) {
            if (inApp) {
              data.hovering = false;
              close(data);
            }
            if (data.config.hover) {
              data.toggle.on(mouseEnterEvent, makeMouseEnterHandler(data));
            }
            data.el.on(closeEvent, initialToggler);
            data.el.on(keydownEvent, makeDropdownKeydownHandler(data));
            data.el.on(focusOutEvent, makeDropdownFocusOutHandler(data));
            data.toggle.on(mouseUpEvent, initialToggler);
            data.toggle.on(keydownEvent, makeToggleKeydownHandler(data));
            data.nav = data.el.closest(".w-nav");
            data.nav.on(closeEvent, initialToggler);
          }
        }
        function configure(data) {
          var zIndex = Number(data.el.css("z-index"));
          data.manageZ = zIndex === defaultZIndex || zIndex === defaultZIndex + 1;
          data.config = {
            hover: data.el.attr("data-hover") === "true" && !touch,
            delay: data.el.attr("data-delay")
          };
        }
        function makeSettingEventHandler(data) {
          return function(evt, options) {
            options = options || {};
            configure(data);
            options.open === true && open(data, true);
            options.open === false && close(data, {
              immediate: true
            });
          };
        }
        function makeToggler(data, forceClose) {
          return debounce(function(evt) {
            if (data.open || evt && evt.type === "w-close") {
              return close(data, {
                forceClose
              });
            }
            open(data);
          });
        }
        function open(data) {
          if (data.open) {
            return;
          }
          closeOthers(data);
          data.open = true;
          data.list.addClass(openStateClassName);
          data.toggle.addClass(openStateClassName);
          data.toggle.attr("aria-expanded", "true");
          ix.intro(0, data.el[0]);
          Webflow.redraw.up();
          data.manageZ && data.el.css("z-index", defaultZIndex + 1);
          var isEditor = Webflow.env("editor");
          if (!inDesigner) {
            $doc.on(mouseUpEvent, data.mouseUpOutside);
          }
          if (data.hovering && !isEditor) {
            data.el.on(mouseLeaveEvent, data.mouseLeave);
          }
          if (data.hovering && isEditor) {
            $doc.on(mouseMoveEvent, data.mouseMoveOutside);
          }
          window.clearTimeout(data.delayId);
        }
        function close(data, {
          immediate,
          forceClose
        } = {}) {
          if (!data.open) {
            return;
          }
          if (data.config.hover && data.hovering && !forceClose) {
            return;
          }
          data.toggle.attr("aria-expanded", "false");
          data.open = false;
          var config = data.config;
          ix.outro(0, data.el[0]);
          $doc.off(mouseUpEvent, data.mouseUpOutside);
          $doc.off(mouseMoveEvent, data.mouseMoveOutside);
          data.el.off(mouseLeaveEvent, data.mouseLeave);
          window.clearTimeout(data.delayId);
          if (!config.delay || immediate) {
            return data.complete();
          }
          data.delayId = window.setTimeout(data.complete, config.delay);
        }
        function closeAll() {
          $doc.find(namespace).each(function(i, el) {
            $(el).triggerHandler(closeEvent);
          });
        }
        function closeOthers(data) {
          var self2 = data.el[0];
          $dropdowns.each(function(i, other) {
            var $other = $(other);
            if ($other.is(self2) || $other.has(self2).length) {
              return;
            }
            $other.triggerHandler(closeEvent);
          });
        }
        function outside(data) {
          if (data.mouseUpOutside) {
            $doc.off(mouseUpEvent, data.mouseUpOutside);
          }
          return debounce(function(evt) {
            if (!data.open) {
              return;
            }
            var $target = $(evt.target);
            if ($target.closest(".w-dropdown-toggle").length) {
              return;
            }
            var isEventOutsideDropdowns = $.inArray(data.el[0], $target.parents(namespace)) === -1;
            var isEditor = Webflow.env("editor");
            if (isEventOutsideDropdowns) {
              if (isEditor) {
                var isEventOnDetachedSvg = $target.parents().length === 1 && $target.parents("svg").length === 1;
                var isEventOnHoverControls = $target.parents(".w-editor-bem-EditorHoverControls").length;
                if (isEventOnDetachedSvg || isEventOnHoverControls) {
                  return;
                }
              }
              close(data);
            }
          });
        }
        function complete(data) {
          return function() {
            data.list.removeClass(openStateClassName);
            data.toggle.removeClass(openStateClassName);
            data.manageZ && data.el.css("z-index", "");
          };
        }
        function makeMouseEnterHandler(data) {
          return function() {
            data.hovering = true;
            open(data);
          };
        }
        function makeMouseLeaveHandler(data) {
          return function() {
            data.hovering = false;
            if (!data.links.is(":focus")) {
              close(data);
            }
          };
        }
        function moveOutside(data) {
          return debounce(function(evt) {
            if (!data.open) {
              return;
            }
            var $target = $(evt.target);
            var isEventOutsideDropdowns = $.inArray(data.el[0], $target.parents(namespace)) === -1;
            if (isEventOutsideDropdowns) {
              var isEventOnHoverControls = $target.parents(".w-editor-bem-EditorHoverControls").length;
              var isEventOnHoverToolbar = $target.parents(".w-editor-bem-RTToolbar").length;
              var $editorOverlay = $(".w-editor-bem-EditorOverlay");
              var isDropdownInEdition = $editorOverlay.find(".w-editor-edit-outline").length || $editorOverlay.find(".w-editor-bem-RTToolbar").length;
              if (isEventOnHoverControls || isEventOnHoverToolbar || isDropdownInEdition) {
                return;
              }
              data.hovering = false;
              close(data);
            }
          });
        }
        function makeDropdownKeydownHandler(data) {
          return function(evt) {
            if (inDesigner || !data.open) {
              return;
            }
            data.selectedIdx = data.links.index(document.activeElement);
            switch (evt.keyCode) {
              case KEY_CODES.HOME: {
                if (!data.open)
                  return;
                data.selectedIdx = 0;
                focusSelectedLink(data);
                return evt.preventDefault();
              }
              case KEY_CODES.END: {
                if (!data.open)
                  return;
                data.selectedIdx = data.links.length - 1;
                focusSelectedLink(data);
                return evt.preventDefault();
              }
              case KEY_CODES.ESCAPE: {
                close(data);
                data.toggle.focus();
                return evt.stopPropagation();
              }
              case KEY_CODES.ARROW_RIGHT:
              case KEY_CODES.ARROW_DOWN: {
                data.selectedIdx = Math.min(data.links.length - 1, data.selectedIdx + 1);
                focusSelectedLink(data);
                return evt.preventDefault();
              }
              case KEY_CODES.ARROW_LEFT:
              case KEY_CODES.ARROW_UP: {
                data.selectedIdx = Math.max(-1, data.selectedIdx - 1);
                focusSelectedLink(data);
                return evt.preventDefault();
              }
            }
          };
        }
        function focusSelectedLink(data) {
          if (data.links[data.selectedIdx]) {
            data.links[data.selectedIdx].focus();
          }
        }
        function makeToggleKeydownHandler(data) {
          var toggler = makeToggler(data, FORCE_CLOSE);
          return function(evt) {
            if (inDesigner)
              return;
            if (!data.open) {
              switch (evt.keyCode) {
                case KEY_CODES.ARROW_UP:
                case KEY_CODES.ARROW_DOWN: {
                  return evt.stopPropagation();
                }
              }
            }
            switch (evt.keyCode) {
              case KEY_CODES.SPACE:
              case KEY_CODES.ENTER: {
                toggler();
                evt.stopPropagation();
                return evt.preventDefault();
              }
            }
          };
        }
        function makeDropdownFocusOutHandler(data) {
          return debounce(function(evt) {
            var {
              relatedTarget,
              target
            } = evt;
            var menuEl = data.el[0];
            var menuContainsFocus = menuEl.contains(relatedTarget) || menuEl.contains(target);
            if (!menuContainsFocus) {
              close(data);
            }
            return evt.stopPropagation();
          });
        }
        return api;
      });
    }
  });

  // packages/shared/render/plugins/Form/webflow-forms-hosted.js
  var require_webflow_forms_hosted = __commonJS({
    "packages/shared/render/plugins/Form/webflow-forms-hosted.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = hostedSubmitWebflow;
      function hostedSubmitWebflow(reset, loc, Webflow, collectEnterpriseTrackingCookies, preventDefault, findFields, alert, findFileUploads, disableBtn, siteId, afterSubmit, $, formUrl) {
        return function(data) {
          reset(data);
          var form = data.form;
          var payload = {
            name: form.attr("data-name") || form.attr("name") || "Untitled Form",
            pageId: form.attr("data-wf-page-id") || "",
            elementId: form.attr("data-wf-element-id") || "",
            source: loc.href,
            test: Webflow.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(form.html()),
            trackingCookies: collectEnterpriseTrackingCookies()
          };
          const wfFlow = form.attr("data-wf-flow");
          if (wfFlow) {
            payload.wfFlow = wfFlow;
          }
          preventDefault(data);
          var status = findFields(form, payload.fields);
          if (status) {
            return alert(status);
          }
          payload.fileUploads = findFileUploads(form);
          disableBtn(data);
          if (!siteId) {
            afterSubmit(data);
            return;
          }
          $.ajax({
            url: formUrl,
            type: "POST",
            data: payload,
            dataType: "json",
            crossDomain: true
          }).done(function(response) {
            if (response && response.code === 200) {
              data.success = true;
            }
            afterSubmit(data);
          }).fail(function() {
            afterSubmit(data);
          });
        };
      }
    }
  });

  // packages/shared/render/plugins/Form/webflow-forms.js
  var require_webflow_forms = __commonJS({
    "packages/shared/render/plugins/Form/webflow-forms.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("forms", module.exports = function($, _) {
        var api = {};
        var $doc = $(document);
        var $forms;
        var loc = window.location;
        var retro = window.XDomainRequest && !window.atob;
        var namespace = ".w-form";
        var siteId;
        var emailField = /e(-)?mail/i;
        var emailValue = /^\S+@\S+$/;
        var alert = window.alert;
        var inApp = Webflow.env();
        var listening;
        var formUrl;
        var signFileUrl;
        var chimpRegex = /list-manage[1-9]?.com/i;
        var disconnected = _.debounce(function() {
          alert("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.");
        }, 100);
        api.ready = api.design = api.preview = function() {
          init();
          if (!inApp && !listening) {
            addListeners();
          }
        };
        function init() {
          siteId = $("html").attr("data-wf-site");
          formUrl = "https://webflow.com/api/v1/form/" + siteId;
          if (retro && formUrl.indexOf("https://webflow.com") >= 0) {
            formUrl = formUrl.replace("https://webflow.com", "https://formdata.webflow.com");
          }
          signFileUrl = `${formUrl}/signFile`;
          $forms = $(namespace + " form");
          if (!$forms.length) {
            return;
          }
          $forms.each(build);
        }
        function build(i, el) {
          var $el = $(el);
          var data = $.data(el, namespace);
          if (!data) {
            data = $.data(el, namespace, {
              form: $el
            });
          }
          reset(data);
          var wrap = $el.closest("div.w-form");
          data.done = wrap.find("> .w-form-done");
          data.fail = wrap.find("> .w-form-fail");
          data.fileUploads = wrap.find(".w-file-upload");
          data.fileUploads.each(function(j) {
            initFileUpload(j, data);
          });
          var formName = data.form.attr("aria-label") || data.form.attr("data-name") || "Form";
          if (!data.done.attr("aria-label")) {
            data.form.attr("aria-label", formName);
          }
          data.done.attr("tabindex", "-1");
          data.done.attr("role", "region");
          if (!data.done.attr("aria-label")) {
            data.done.attr("aria-label", formName + " success");
          }
          data.fail.attr("tabindex", "-1");
          data.fail.attr("role", "region");
          if (!data.fail.attr("aria-label")) {
            data.fail.attr("aria-label", formName + " failure");
          }
          var action = data.action = $el.attr("action");
          data.handler = null;
          data.redirect = $el.attr("data-redirect");
          if (chimpRegex.test(action)) {
            data.handler = submitMailChimp;
            return;
          }
          if (action) {
            return;
          }
          if (siteId) {
            data.handler = false ? exportedSubmitWebflow : (() => {
              const hostedSubmitHandler = require_webflow_forms_hosted().default;
              return hostedSubmitHandler(reset, loc, Webflow, collectEnterpriseTrackingCookies, preventDefault, findFields, alert, findFileUploads, disableBtn, siteId, afterSubmit, $, formUrl);
            })();
            return;
          }
          disconnected();
        }
        function addListeners() {
          listening = true;
          $doc.on("submit", namespace + " form", function(evt) {
            var data = $.data(this, namespace);
            if (data.handler) {
              data.evt = evt;
              data.handler(data);
            }
          });
          const CHECKBOX_CLASS_NAME = ".w-checkbox-input";
          const RADIO_INPUT_CLASS_NAME = ".w-radio-input";
          const CHECKED_CLASS = "w--redirected-checked";
          const FOCUSED_CLASS = "w--redirected-focus";
          const FOCUSED_VISIBLE_CLASS = "w--redirected-focus-visible";
          const focusVisibleSelectors = ":focus-visible, [data-wf-focus-visible]";
          const CUSTOM_CONTROLS = [["checkbox", CHECKBOX_CLASS_NAME], ["radio", RADIO_INPUT_CLASS_NAME]];
          $doc.on("change", namespace + ` form input[type="checkbox"]:not(` + CHECKBOX_CLASS_NAME + ")", (evt) => {
            $(evt.target).siblings(CHECKBOX_CLASS_NAME).toggleClass(CHECKED_CLASS);
          });
          $doc.on("change", namespace + ` form input[type="radio"]`, (evt) => {
            $(`input[name="${evt.target.name}"]:not(${CHECKBOX_CLASS_NAME})`).map((i, el) => $(el).siblings(RADIO_INPUT_CLASS_NAME).removeClass(CHECKED_CLASS));
            const $target = $(evt.target);
            if (!$target.hasClass("w-radio-input")) {
              $target.siblings(RADIO_INPUT_CLASS_NAME).addClass(CHECKED_CLASS);
            }
          });
          CUSTOM_CONTROLS.forEach(([controlType, customControlClassName]) => {
            $doc.on("focus", namespace + ` form input[type="${controlType}"]:not(` + customControlClassName + ")", (evt) => {
              $(evt.target).siblings(customControlClassName).addClass(FOCUSED_CLASS);
              $(evt.target).filter(focusVisibleSelectors).siblings(customControlClassName).addClass(FOCUSED_VISIBLE_CLASS);
            });
            $doc.on("blur", namespace + ` form input[type="${controlType}"]:not(` + customControlClassName + ")", (evt) => {
              $(evt.target).siblings(customControlClassName).removeClass(`${FOCUSED_CLASS} ${FOCUSED_VISIBLE_CLASS}`);
            });
          });
        }
        function reset(data) {
          var btn = data.btn = data.form.find(':input[type="submit"]');
          data.wait = data.btn.attr("data-wait") || null;
          data.success = false;
          btn.prop("disabled", false);
          data.label && btn.val(data.label);
        }
        function disableBtn(data) {
          var btn = data.btn;
          var wait = data.wait;
          btn.prop("disabled", true);
          if (wait) {
            data.label = btn.val();
            btn.val(wait);
          }
        }
        function findFields(form, result) {
          var status = null;
          result = result || {};
          form.find(':input:not([type="submit"]):not([type="file"])').each(function(i, el) {
            var field = $(el);
            var type = field.attr("type");
            var name = field.attr("data-name") || field.attr("name") || "Field " + (i + 1);
            name = encodeURIComponent(name);
            var value = field.val();
            if (type === "checkbox") {
              value = field.is(":checked");
            } else if (type === "radio") {
              if (result[name] === null || typeof result[name] === "string") {
                return;
              }
              value = form.find('input[name="' + field.attr("name") + '"]:checked').val() || null;
            }
            if (typeof value === "string") {
              value = $.trim(value);
            }
            result[name] = value;
            status = status || getStatus(field, type, name, value);
          });
          return status;
        }
        function findFileUploads(form) {
          var result = {};
          form.find(':input[type="file"]').each(function(i, el) {
            var field = $(el);
            var name = field.attr("data-name") || field.attr("name") || "File " + (i + 1);
            var value = field.attr("data-value");
            if (typeof value === "string") {
              value = $.trim(value);
            }
            result[name] = value;
          });
          return result;
        }
        const trackingCookieNameMap = {
          _mkto_trk: "marketo"
          // __hstc: 'hubspot',
        };
        function collectEnterpriseTrackingCookies() {
          const cookies = document.cookie.split("; ").reduce(function(acc, cookie) {
            const splitCookie = cookie.split("=");
            const name = splitCookie[0];
            if (name in trackingCookieNameMap) {
              const mappedName = trackingCookieNameMap[name];
              const value = splitCookie.slice(1).join("=");
              acc[mappedName] = value;
            }
            return acc;
          }, {});
          return cookies;
        }
        function getStatus(field, type, name, value) {
          var status = null;
          if (type === "password") {
            status = "Passwords cannot be submitted.";
          } else if (field.attr("required")) {
            if (!value) {
              status = "Please fill out the required field: " + name;
            } else if (emailField.test(field.attr("type"))) {
              if (!emailValue.test(value)) {
                status = "Please enter a valid email address for: " + name;
              }
            }
          } else if (name === "g-recaptcha-response" && !value) {
            status = "Please confirm you\u2019re not a robot.";
          }
          return status;
        }
        function exportedSubmitWebflow(data) {
          preventDefault(data);
          afterSubmit(data);
        }
        function submitMailChimp(data) {
          reset(data);
          var form = data.form;
          var payload = {};
          if (/^https/.test(loc.href) && !/^https/.test(data.action)) {
            form.attr("method", "post");
            return;
          }
          preventDefault(data);
          var status = findFields(form, payload);
          if (status) {
            return alert(status);
          }
          disableBtn(data);
          var fullName;
          _.each(payload, function(value, key) {
            if (emailField.test(key)) {
              payload.EMAIL = value;
            }
            if (/^((full[ _-]?)?name)$/i.test(key)) {
              fullName = value;
            }
            if (/^(first[ _-]?name)$/i.test(key)) {
              payload.FNAME = value;
            }
            if (/^(last[ _-]?name)$/i.test(key)) {
              payload.LNAME = value;
            }
          });
          if (fullName && !payload.FNAME) {
            fullName = fullName.split(" ");
            payload.FNAME = fullName[0];
            payload.LNAME = payload.LNAME || fullName[1];
          }
          var url = data.action.replace("/post?", "/post-json?") + "&c=?";
          var userId = url.indexOf("u=") + 2;
          userId = url.substring(userId, url.indexOf("&", userId));
          var listId = url.indexOf("id=") + 3;
          listId = url.substring(listId, url.indexOf("&", listId));
          payload["b_" + userId + "_" + listId] = "";
          $.ajax({
            url,
            data: payload,
            dataType: "jsonp"
          }).done(function(resp) {
            data.success = resp.result === "success" || /already/.test(resp.msg);
            if (!data.success) {
              console.info("MailChimp error: " + resp.msg);
            }
            afterSubmit(data);
          }).fail(function() {
            afterSubmit(data);
          });
        }
        function afterSubmit(data) {
          var form = data.form;
          var redirect = data.redirect;
          var success = data.success;
          if (success && redirect) {
            Webflow.location(redirect);
            return;
          }
          data.done.toggle(success);
          data.fail.toggle(!success);
          if (success) {
            data.done.focus();
          } else {
            data.fail.focus();
          }
          form.toggle(!success);
          reset(data);
        }
        function preventDefault(data) {
          data.evt && data.evt.preventDefault();
          data.evt = null;
        }
        function initFileUpload(i, form) {
          if (!form.fileUploads || !form.fileUploads[i]) {
            return;
          }
          var file;
          var $el = $(form.fileUploads[i]);
          var $defaultWrap = $el.find("> .w-file-upload-default");
          var $uploadingWrap = $el.find("> .w-file-upload-uploading");
          var $successWrap = $el.find("> .w-file-upload-success");
          var $errorWrap = $el.find("> .w-file-upload-error");
          var $input = $defaultWrap.find(".w-file-upload-input");
          var $label = $defaultWrap.find(".w-file-upload-label");
          var $labelChildren = $label.children();
          var $errorMsgEl = $errorWrap.find(".w-file-upload-error-msg");
          var $fileEl = $successWrap.find(".w-file-upload-file");
          var $removeEl = $successWrap.find(".w-file-remove-link");
          var $fileNameEl = $fileEl.find(".w-file-upload-file-name");
          var sizeErrMsg = $errorMsgEl.attr("data-w-size-error");
          var typeErrMsg = $errorMsgEl.attr("data-w-type-error");
          var genericErrMsg = $errorMsgEl.attr("data-w-generic-error");
          if (!inApp) {
            $label.on("click keydown", function(e) {
              if (e.type === "keydown" && e.which !== 13 && e.which !== 32) {
                return;
              }
              e.preventDefault();
              $input.click();
            });
          }
          $label.find(".w-icon-file-upload-icon").attr("aria-hidden", "true");
          $removeEl.find(".w-icon-file-upload-remove").attr("aria-hidden", "true");
          if (!inApp) {
            $removeEl.on("click keydown", function(e) {
              if (e.type === "keydown") {
                if (e.which !== 13 && e.which !== 32) {
                  return;
                }
                e.preventDefault();
              }
              $input.removeAttr("data-value");
              $input.val("");
              $fileNameEl.html("");
              $defaultWrap.toggle(true);
              $successWrap.toggle(false);
              $label.focus();
            });
            $input.on("change", function(e) {
              file = e.target && e.target.files && e.target.files[0];
              if (!file) {
                return;
              }
              $defaultWrap.toggle(false);
              $errorWrap.toggle(false);
              $uploadingWrap.toggle(true);
              $uploadingWrap.focus();
              $fileNameEl.text(file.name);
              if (!isUploading()) {
                disableBtn(form);
              }
              form.fileUploads[i].uploading = true;
              signFile(file, afterSign);
            });
            var height = $label.outerHeight();
            $input.height(height);
            $input.width(1);
          } else {
            $input.on("click", function(e) {
              e.preventDefault();
            });
            $label.on("click", function(e) {
              e.preventDefault();
            });
            $labelChildren.on("click", function(e) {
              e.preventDefault();
            });
          }
          function parseError(err) {
            var errorMsg = err.responseJSON && err.responseJSON.msg;
            var userError = genericErrMsg;
            if (typeof errorMsg === "string" && errorMsg.indexOf("InvalidFileTypeError") === 0) {
              userError = typeErrMsg;
            } else if (typeof errorMsg === "string" && errorMsg.indexOf("MaxFileSizeError") === 0) {
              userError = sizeErrMsg;
            }
            $errorMsgEl.text(userError);
            $input.removeAttr("data-value");
            $input.val("");
            $uploadingWrap.toggle(false);
            $defaultWrap.toggle(true);
            $errorWrap.toggle(true);
            $errorWrap.focus();
            form.fileUploads[i].uploading = false;
            if (!isUploading()) {
              reset(form);
            }
          }
          function afterSign(err, data) {
            if (err) {
              return parseError(err);
            }
            var fileName = data.fileName;
            var postData = data.postData;
            var fileId = data.fileId;
            var s3Url = data.s3Url;
            $input.attr("data-value", fileId);
            uploadS3(s3Url, postData, file, fileName, afterUpload);
          }
          function afterUpload(err) {
            if (err) {
              return parseError(err);
            }
            $uploadingWrap.toggle(false);
            $successWrap.css("display", "inline-block");
            $successWrap.focus();
            form.fileUploads[i].uploading = false;
            if (!isUploading()) {
              reset(form);
            }
          }
          function isUploading() {
            var uploads = form.fileUploads && form.fileUploads.toArray() || [];
            return uploads.some(function(value) {
              return value.uploading;
            });
          }
        }
        function signFile(file, cb) {
          var payload = new URLSearchParams({
            name: file.name,
            size: file.size
          });
          $.ajax({
            type: "GET",
            url: `${signFileUrl}?${payload}`,
            crossDomain: true
          }).done(function(data) {
            cb(null, data);
          }).fail(function(err) {
            cb(err);
          });
        }
        function uploadS3(url, data, file, fileName, cb) {
          var formData = new FormData();
          for (var k in data) {
            formData.append(k, data[k]);
          }
          formData.append("file", file, fileName);
          $.ajax({
            type: "POST",
            url,
            data: formData,
            processData: false,
            contentType: false
          }).done(function() {
            cb(null);
          }).fail(function(err) {
            cb(err);
          });
        }
        return api;
      });
    }
  });

  // packages/shared/render/plugins/Lightbox/webflow-lightbox.js
  var require_webflow_lightbox = __commonJS({
    "packages/shared/render/plugins/Lightbox/webflow-lightbox.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      var CONDITION_INVISIBLE_CLASS = "w-condition-invisible";
      var CONDVIS_SELECTOR = "." + CONDITION_INVISIBLE_CLASS;
      function withoutConditionallyHidden(items) {
        return items.filter(function(item) {
          return !isConditionallyHidden(item);
        });
      }
      function isConditionallyHidden(item) {
        return Boolean(item.$el && item.$el.closest(CONDVIS_SELECTOR).length);
      }
      function getPreviousVisibleIndex(start, items) {
        for (var i = start; i >= 0; i--) {
          if (!isConditionallyHidden(items[i])) {
            return i;
          }
        }
        return -1;
      }
      function getNextVisibleIndex(start, items) {
        for (var i = start; i <= items.length - 1; i++) {
          if (!isConditionallyHidden(items[i])) {
            return i;
          }
        }
        return -1;
      }
      function shouldSetArrowLeftInactive(currentIndex, items) {
        return getPreviousVisibleIndex(currentIndex - 1, items) === -1;
      }
      function shouldSetArrowRightInactive(currentIndex, items) {
        return getNextVisibleIndex(currentIndex + 1, items) === -1;
      }
      function setAriaLabelIfEmpty($element, labelText) {
        if (!$element.attr("aria-label")) {
          $element.attr("aria-label", labelText);
        }
      }
      function createLightbox(window2, document2, $, container) {
        var tram = $.tram;
        var isArray = Array.isArray;
        var namespace = "w-lightbox";
        var prefix = namespace + "-";
        var prefixRegex = /(^|\s+)/g;
        var items = [];
        var currentIndex;
        var $refs;
        var spinner;
        var resetVisibilityState = [];
        function lightbox(thing, index) {
          items = isArray(thing) ? thing : [thing];
          if (!$refs) {
            lightbox.build();
          }
          if (withoutConditionallyHidden(items).length > 1) {
            $refs.items = $refs.empty;
            items.forEach(function(item, idx) {
              var $thumbnail = dom("thumbnail");
              var $item = dom("item").prop("tabIndex", 0).attr("aria-controls", "w-lightbox-view").attr("role", "tab").append($thumbnail);
              setAriaLabelIfEmpty($item, `show item ${idx + 1} of ${items.length}`);
              if (isConditionallyHidden(item)) {
                $item.addClass(CONDITION_INVISIBLE_CLASS);
              }
              $refs.items = $refs.items.add($item);
              loadImage(item.thumbnailUrl || item.url, function($image) {
                if ($image.prop("width") > $image.prop("height")) {
                  addClass($image, "wide");
                } else {
                  addClass($image, "tall");
                }
                $thumbnail.append(addClass($image, "thumbnail-image"));
              });
            });
            $refs.strip.empty().append($refs.items);
            addClass($refs.content, "group");
          }
          tram(
            // Focus the lightbox to receive keyboard events.
            removeClass($refs.lightbox, "hide").trigger("focus")
          ).add("opacity .3s").start({
            opacity: 1
          });
          addClass($refs.html, "noscroll");
          return lightbox.show(index || 0);
        }
        lightbox.build = function() {
          lightbox.destroy();
          $refs = {
            html: $(document2.documentElement),
            // Empty jQuery object can be used to build new ones using `.add`.
            empty: $()
          };
          $refs.arrowLeft = dom("control left inactive").attr("role", "button").attr("aria-hidden", true).attr("aria-controls", "w-lightbox-view");
          $refs.arrowRight = dom("control right inactive").attr("role", "button").attr("aria-hidden", true).attr("aria-controls", "w-lightbox-view");
          $refs.close = dom("control close").attr("role", "button");
          setAriaLabelIfEmpty($refs.arrowLeft, "previous image");
          setAriaLabelIfEmpty($refs.arrowRight, "next image");
          setAriaLabelIfEmpty($refs.close, "close lightbox");
          $refs.spinner = dom("spinner").attr("role", "progressbar").attr("aria-live", "polite").attr("aria-hidden", false).attr("aria-busy", true).attr("aria-valuemin", 0).attr("aria-valuemax", 100).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image");
          $refs.strip = dom("strip").attr("role", "tablist");
          spinner = new Spinner($refs.spinner, prefixed("hide"));
          $refs.content = dom("content").append($refs.spinner, $refs.arrowLeft, $refs.arrowRight, $refs.close);
          $refs.container = dom("container").append($refs.content, $refs.strip);
          $refs.lightbox = dom("backdrop hide").append($refs.container);
          $refs.strip.on("click", selector("item"), itemTapHandler);
          $refs.content.on("swipe", swipeHandler).on("click", selector("left"), handlerPrev).on("click", selector("right"), handlerNext).on("click", selector("close"), handlerHide).on("click", selector("image, caption"), handlerNext);
          $refs.container.on("click", selector("view"), handlerHide).on("dragstart", selector("img"), preventDefault);
          $refs.lightbox.on("keydown", keyHandler).on("focusin", focusThis);
          $(container).append($refs.lightbox);
          return lightbox;
        };
        lightbox.destroy = function() {
          if (!$refs) {
            return;
          }
          removeClass($refs.html, "noscroll");
          $refs.lightbox.remove();
          $refs = void 0;
        };
        lightbox.show = function(index) {
          if (index === currentIndex) {
            return;
          }
          var item = items[index];
          if (!item) {
            return lightbox.hide();
          }
          if (isConditionallyHidden(item)) {
            if (index < currentIndex) {
              var previousVisibleIndex = getPreviousVisibleIndex(index - 1, items);
              index = previousVisibleIndex > -1 ? previousVisibleIndex : index;
            } else {
              var nextVisibleIndex = getNextVisibleIndex(index + 1, items);
              index = nextVisibleIndex > -1 ? nextVisibleIndex : index;
            }
            item = items[index];
          }
          var previousIndex = currentIndex;
          currentIndex = index;
          $refs.spinner.attr("aria-hidden", false).attr("aria-busy", true).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image");
          spinner.show();
          var url = item.html && svgDataUri(item.width, item.height) || item.url;
          loadImage(url, function($image) {
            if (index !== currentIndex) {
              return;
            }
            var $figure = dom("figure", "figure").append(addClass($image, "image"));
            var $frame = dom("frame").append($figure);
            var $newView = dom("view").prop("tabIndex", 0).attr("id", "w-lightbox-view").append($frame);
            var $html;
            var isIframe;
            if (item.html) {
              $html = $(item.html);
              isIframe = $html.is("iframe");
              if (isIframe) {
                $html.on("load", transitionToNewView);
              }
              $figure.append(addClass($html, "embed"));
            }
            if (item.caption) {
              $figure.append(dom("caption", "figcaption").text(item.caption));
            }
            $refs.spinner.before($newView);
            if (!isIframe) {
              transitionToNewView();
            }
            function transitionToNewView() {
              $refs.spinner.attr("aria-hidden", true).attr("aria-busy", false).attr("aria-valuenow", 100).attr("aria-valuetext", "Loaded image");
              spinner.hide();
              if (index !== currentIndex) {
                $newView.remove();
                return;
              }
              const shouldHideLeftArrow = shouldSetArrowLeftInactive(index, items);
              toggleClass($refs.arrowLeft, "inactive", shouldHideLeftArrow);
              toggleHidden($refs.arrowLeft, shouldHideLeftArrow);
              if (shouldHideLeftArrow && $refs.arrowLeft.is(":focus")) {
                $refs.arrowRight.focus();
              }
              const shouldHideRightArrow = shouldSetArrowRightInactive(index, items);
              toggleClass($refs.arrowRight, "inactive", shouldHideRightArrow);
              toggleHidden($refs.arrowRight, shouldHideRightArrow);
              if (shouldHideRightArrow && $refs.arrowRight.is(":focus")) {
                $refs.arrowLeft.focus();
              }
              if ($refs.view) {
                tram($refs.view).add("opacity .3s").start({
                  opacity: 0
                }).then(remover($refs.view));
                tram($newView).add("opacity .3s").add("transform .3s").set({
                  x: index > previousIndex ? "80px" : "-80px"
                }).start({
                  opacity: 1,
                  x: 0
                });
              } else {
                $newView.css("opacity", 1);
              }
              $refs.view = $newView;
              $refs.view.prop("tabIndex", 0);
              if ($refs.items) {
                removeClass($refs.items, "active");
                $refs.items.removeAttr("aria-selected");
                var $activeThumb = $refs.items.eq(index);
                addClass($activeThumb, "active");
                $activeThumb.attr("aria-selected", true);
                maybeScroll($activeThumb);
              }
            }
          });
          $refs.close.prop("tabIndex", 0);
          $(":focus").addClass("active-lightbox");
          if (resetVisibilityState.length === 0) {
            $("body").children().each(function() {
              if ($(this).hasClass("w-lightbox-backdrop") || $(this).is("script")) {
                return;
              }
              resetVisibilityState.push({
                node: $(this),
                hidden: $(this).attr("aria-hidden"),
                tabIndex: $(this).attr("tabIndex")
              });
              $(this).attr("aria-hidden", true).attr("tabIndex", -1);
            });
            $refs.close.focus();
          }
          return lightbox;
        };
        lightbox.hide = function() {
          tram($refs.lightbox).add("opacity .3s").start({
            opacity: 0
          }).then(hideLightbox);
          return lightbox;
        };
        lightbox.prev = function() {
          var previousVisibleIndex = getPreviousVisibleIndex(currentIndex - 1, items);
          if (previousVisibleIndex > -1) {
            lightbox.show(previousVisibleIndex);
          }
        };
        lightbox.next = function() {
          var nextVisibleIndex = getNextVisibleIndex(currentIndex + 1, items);
          if (nextVisibleIndex > -1) {
            lightbox.show(nextVisibleIndex);
          }
        };
        function createHandler(action) {
          return function(event) {
            if (this !== event.target) {
              return;
            }
            event.stopPropagation();
            event.preventDefault();
            action();
          };
        }
        var handlerPrev = createHandler(lightbox.prev);
        var handlerNext = createHandler(lightbox.next);
        var handlerHide = createHandler(lightbox.hide);
        var itemTapHandler = function(event) {
          var index = $(this).index();
          event.preventDefault();
          lightbox.show(index);
        };
        var swipeHandler = function(event, data) {
          event.preventDefault();
          if (data.direction === "left") {
            lightbox.next();
          } else if (data.direction === "right") {
            lightbox.prev();
          }
        };
        var focusThis = function() {
          this.focus();
        };
        function preventDefault(event) {
          event.preventDefault();
        }
        function keyHandler(event) {
          var keyCode = event.keyCode;
          if (keyCode === 27 || checkForFocusTrigger(keyCode, "close")) {
            lightbox.hide();
          } else if (keyCode === 37 || checkForFocusTrigger(keyCode, "left")) {
            lightbox.prev();
          } else if (keyCode === 39 || checkForFocusTrigger(keyCode, "right")) {
            lightbox.next();
          } else if (checkForFocusTrigger(keyCode, "item")) {
            $(":focus").click();
          }
        }
        function checkForFocusTrigger(keyCode, classMatch) {
          if (keyCode !== 13 && keyCode !== 32) {
            return false;
          }
          var currentElementClasses = $(":focus").attr("class");
          var classToFind = prefixed(classMatch).trim();
          return currentElementClasses.includes(classToFind);
        }
        function hideLightbox() {
          if ($refs) {
            $refs.strip.scrollLeft(0).empty();
            removeClass($refs.html, "noscroll");
            addClass($refs.lightbox, "hide");
            $refs.view && $refs.view.remove();
            removeClass($refs.content, "group");
            addClass($refs.arrowLeft, "inactive");
            addClass($refs.arrowRight, "inactive");
            currentIndex = $refs.view = void 0;
            resetVisibilityState.forEach(function(visibilityState) {
              var node = visibilityState.node;
              if (!node) {
                return;
              }
              if (visibilityState.hidden) {
                node.attr("aria-hidden", visibilityState.hidden);
              } else {
                node.removeAttr("aria-hidden");
              }
              if (visibilityState.tabIndex) {
                node.attr("tabIndex", visibilityState.tabIndex);
              } else {
                node.removeAttr("tabIndex");
              }
            });
            resetVisibilityState = [];
            $(".active-lightbox").removeClass("active-lightbox").focus();
          }
        }
        function loadImage(url, callback) {
          var $image = dom("img", "img");
          $image.one("load", function() {
            callback($image);
          });
          $image.attr("src", url);
          return $image;
        }
        function remover($element) {
          return function() {
            $element.remove();
          };
        }
        function maybeScroll($item) {
          var itemElement = $item.get(0);
          var stripElement = $refs.strip.get(0);
          var itemLeft = itemElement.offsetLeft;
          var itemWidth = itemElement.clientWidth;
          var stripScrollLeft = stripElement.scrollLeft;
          var stripWidth = stripElement.clientWidth;
          var stripScrollLeftMax = stripElement.scrollWidth - stripWidth;
          var newScrollLeft;
          if (itemLeft < stripScrollLeft) {
            newScrollLeft = Math.max(0, itemLeft + itemWidth - stripWidth);
          } else if (itemLeft + itemWidth > stripWidth + stripScrollLeft) {
            newScrollLeft = Math.min(itemLeft, stripScrollLeftMax);
          }
          if (newScrollLeft != null) {
            tram($refs.strip).add("scroll-left 500ms").start({
              "scroll-left": newScrollLeft
            });
          }
        }
        function Spinner($spinner, className, delay) {
          this.$element = $spinner;
          this.className = className;
          this.delay = delay || 200;
          this.hide();
        }
        Spinner.prototype.show = function() {
          var spinner2 = this;
          if (spinner2.timeoutId) {
            return;
          }
          spinner2.timeoutId = setTimeout(function() {
            spinner2.$element.removeClass(spinner2.className);
            delete spinner2.timeoutId;
          }, spinner2.delay);
        };
        Spinner.prototype.hide = function() {
          var spinner2 = this;
          if (spinner2.timeoutId) {
            clearTimeout(spinner2.timeoutId);
            delete spinner2.timeoutId;
            return;
          }
          spinner2.$element.addClass(spinner2.className);
        };
        function prefixed(string, isSelector) {
          return string.replace(prefixRegex, (isSelector ? " ." : " ") + prefix);
        }
        function selector(string) {
          return prefixed(string, true);
        }
        function addClass($element, className) {
          return $element.addClass(prefixed(className));
        }
        function removeClass($element, className) {
          return $element.removeClass(prefixed(className));
        }
        function toggleClass($element, className, shouldAdd) {
          return $element.toggleClass(prefixed(className), shouldAdd);
        }
        function toggleHidden($element, isHidden) {
          return $element.attr("aria-hidden", isHidden).attr("tabIndex", isHidden ? -1 : 0);
        }
        function dom(className, tag) {
          return addClass($(document2.createElement(tag || "div")), className);
        }
        function svgDataUri(width, height) {
          var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '"/>';
          return "data:image/svg+xml;charset=utf-8," + encodeURI(svg);
        }
        (function() {
          var ua2 = window2.navigator.userAgent;
          var iOSRegex = /(iPhone|iPad|iPod);[^OS]*OS (\d)/;
          var iOSMatches = ua2.match(iOSRegex);
          var android = ua2.indexOf("Android ") > -1 && ua2.indexOf("Chrome") === -1;
          if (!android && (!iOSMatches || iOSMatches[2] > 7)) {
            return;
          }
          var styleNode = document2.createElement("style");
          document2.head.appendChild(styleNode);
          window2.addEventListener("resize", refresh, true);
          function refresh() {
            var vh = window2.innerHeight;
            var vw = window2.innerWidth;
            var content = ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + vh + "px}.w-lightbox-view {width:" + vw + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + 0.86 * vh + "px}.w-lightbox-image {max-width:" + vw + "px;max-height:" + vh + "px}.w-lightbox-group .w-lightbox-image {max-height:" + 0.86 * vh + "px}.w-lightbox-strip {padding: 0 " + 0.01 * vh + "px}.w-lightbox-item {width:" + 0.1 * vh + "px;padding:" + 0.02 * vh + "px " + 0.01 * vh + "px}.w-lightbox-thumbnail {height:" + 0.1 * vh + "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + 0.96 * vh + "px}.w-lightbox-content {margin-top:" + 0.02 * vh + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + 0.84 * vh + "px}.w-lightbox-image {max-width:" + 0.96 * vw + "px;max-height:" + 0.96 * vh + "px}.w-lightbox-group .w-lightbox-image {max-width:" + 0.823 * vw + "px;max-height:" + 0.84 * vh + "px}}";
            styleNode.textContent = content;
          }
          refresh();
        })();
        return lightbox;
      }
      Webflow.define("lightbox", module.exports = function($) {
        var api = {};
        var inApp = Webflow.env();
        var lightbox = createLightbox(window, document, $, inApp ? "#lightbox-mountpoint" : "body");
        var $doc = $(document);
        var $lightboxes;
        var designer;
        var namespace = ".w-lightbox";
        var groups;
        api.ready = api.design = api.preview = init;
        function init() {
          designer = inApp && Webflow.env("design");
          lightbox.destroy();
          groups = {};
          $lightboxes = $doc.find(namespace);
          $lightboxes.webflowLightBox();
          $lightboxes.each(function() {
            setAriaLabelIfEmpty($(this), "open lightbox");
            $(this).attr("aria-haspopup", "dialog");
          });
        }
        jQuery.fn.extend({
          webflowLightBox: function() {
            var $el = this;
            $.each($el, function(i, el) {
              var data = $.data(el, namespace);
              if (!data) {
                data = $.data(el, namespace, {
                  el: $(el),
                  mode: "images",
                  images: [],
                  embed: ""
                });
              }
              data.el.off(namespace);
              configure(data);
              if (designer) {
                data.el.on("setting" + namespace, configure.bind(null, data));
              } else {
                data.el.on("click" + namespace, clickHandler(data)).on("click" + namespace, function(e) {
                  e.preventDefault();
                });
              }
            });
          }
        });
        function configure(data) {
          var json = data.el.children(".w-json").html();
          var groupName;
          var groupItems;
          if (!json) {
            data.items = [];
            return;
          }
          try {
            json = JSON.parse(json);
          } catch (e) {
            console.error("Malformed lightbox JSON configuration.", e);
          }
          supportOldLightboxJson(json);
          json.items.forEach(function(item) {
            item.$el = data.el;
          });
          groupName = json.group;
          if (groupName) {
            groupItems = groups[groupName];
            if (!groupItems) {
              groupItems = groups[groupName] = [];
            }
            data.items = groupItems;
            if (json.items.length) {
              data.index = groupItems.length;
              groupItems.push.apply(groupItems, json.items);
            }
          } else {
            data.items = json.items;
            data.index = 0;
          }
        }
        function clickHandler(data) {
          return function() {
            data.items.length && lightbox(data.items, data.index || 0);
          };
        }
        function supportOldLightboxJson(data) {
          if (data.images) {
            data.images.forEach(function(item) {
              item.type = "image";
            });
            data.items = data.images;
          }
          if (data.embed) {
            data.embed.type = "video";
            data.items = [data.embed];
          }
          if (data.groupId) {
            data.group = data.groupId;
          }
        }
        return api;
      });
    }
  });

  // packages/shared/render/plugins/Navbar/webflow-navbar.js
  var require_webflow_navbar = __commonJS({
    "packages/shared/render/plugins/Navbar/webflow-navbar.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      var IXEvents = require_webflow_ix2_events();
      var KEY_CODES = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35
      };
      Webflow.define("navbar", module.exports = function($, _) {
        var api = {};
        var tram = $.tram;
        var $win = $(window);
        var $doc = $(document);
        var debounce = _.debounce;
        var $body;
        var $navbars;
        var designer;
        var inEditor;
        var inApp = Webflow.env();
        var overlay = '<div class="w-nav-overlay" data-wf-ignore />';
        var namespace = ".w-nav";
        var navbarOpenedButton = "w--open";
        var navbarOpenedDropdown = "w--nav-dropdown-open";
        var navbarOpenedDropdownToggle = "w--nav-dropdown-toggle-open";
        var navbarOpenedDropdownList = "w--nav-dropdown-list-open";
        var navbarOpenedLink = "w--nav-link-open";
        var ix = IXEvents.triggers;
        var menuSibling = $();
        api.ready = api.design = api.preview = init;
        api.destroy = function() {
          menuSibling = $();
          removeListeners();
          if ($navbars && $navbars.length) {
            $navbars.each(teardown);
          }
        };
        function init() {
          designer = inApp && Webflow.env("design");
          inEditor = Webflow.env("editor");
          $body = $(document.body);
          $navbars = $doc.find(namespace);
          if (!$navbars.length) {
            return;
          }
          $navbars.each(build);
          removeListeners();
          addListeners();
        }
        function removeListeners() {
          Webflow.resize.off(resizeAll);
        }
        function addListeners() {
          Webflow.resize.on(resizeAll);
        }
        function resizeAll() {
          $navbars.each(resize);
        }
        function build(i, el) {
          var $el = $(el);
          var data = $.data(el, namespace);
          if (!data) {
            data = $.data(el, namespace, {
              open: false,
              el: $el,
              config: {},
              selectedIdx: -1
            });
          }
          data.menu = $el.find(".w-nav-menu");
          data.links = data.menu.find(".w-nav-link");
          data.dropdowns = data.menu.find(".w-dropdown");
          data.dropdownToggle = data.menu.find(".w-dropdown-toggle");
          data.dropdownList = data.menu.find(".w-dropdown-list");
          data.button = $el.find(".w-nav-button");
          data.container = $el.find(".w-container");
          data.overlayContainerId = "w-nav-overlay-" + i;
          data.outside = outside(data);
          var navBrandLink = $el.find(".w-nav-brand");
          if (navBrandLink && navBrandLink.attr("href") === "/" && navBrandLink.attr("aria-label") == null) {
            navBrandLink.attr("aria-label", "home");
          }
          data.button.attr("style", "-webkit-user-select: text;");
          if (data.button.attr("aria-label") == null) {
            data.button.attr("aria-label", "menu");
          }
          data.button.attr("role", "button");
          data.button.attr("tabindex", "0");
          data.button.attr("aria-controls", data.overlayContainerId);
          data.button.attr("aria-haspopup", "menu");
          data.button.attr("aria-expanded", "false");
          data.el.off(namespace);
          data.button.off(namespace);
          data.menu.off(namespace);
          configure(data);
          if (designer) {
            removeOverlay(data);
            data.el.on("setting" + namespace, handler(data));
          } else {
            addOverlay(data);
            data.button.on("click" + namespace, toggle(data));
            data.menu.on("click" + namespace, "a", navigate(data));
            data.button.on("keydown" + namespace, makeToggleButtonKeyboardHandler(data));
            data.el.on("keydown" + namespace, makeLinksKeyboardHandler(data));
          }
          resize(i, el);
        }
        function teardown(i, el) {
          var data = $.data(el, namespace);
          if (data) {
            removeOverlay(data);
            $.removeData(el, namespace);
          }
        }
        function removeOverlay(data) {
          if (!data.overlay) {
            return;
          }
          close(data, true);
          data.overlay.remove();
          data.overlay = null;
        }
        function addOverlay(data) {
          if (data.overlay) {
            return;
          }
          data.overlay = $(overlay).appendTo(data.el);
          data.overlay.attr("id", data.overlayContainerId);
          data.parent = data.menu.parent();
          close(data, true);
        }
        function configure(data) {
          var config = {};
          var old = data.config || {};
          var animation = config.animation = data.el.attr("data-animation") || "default";
          config.animOver = /^over/.test(animation);
          config.animDirect = /left$/.test(animation) ? -1 : 1;
          if (old.animation !== animation) {
            data.open && _.defer(reopen, data);
          }
          config.easing = data.el.attr("data-easing") || "ease";
          config.easing2 = data.el.attr("data-easing2") || "ease";
          var duration = data.el.attr("data-duration");
          config.duration = duration != null ? Number(duration) : 400;
          config.docHeight = data.el.attr("data-doc-height");
          data.config = config;
        }
        function handler(data) {
          return function(evt, options) {
            options = options || {};
            var winWidth = $win.width();
            configure(data);
            options.open === true && open(data, true);
            options.open === false && close(data, true);
            data.open && _.defer(function() {
              if (winWidth !== $win.width()) {
                reopen(data);
              }
            });
          };
        }
        function makeToggleButtonKeyboardHandler(data) {
          return function(evt) {
            switch (evt.keyCode) {
              case KEY_CODES.SPACE:
              case KEY_CODES.ENTER: {
                toggle(data)();
                evt.preventDefault();
                return evt.stopPropagation();
              }
              case KEY_CODES.ESCAPE: {
                close(data);
                evt.preventDefault();
                return evt.stopPropagation();
              }
              case KEY_CODES.ARROW_RIGHT:
              case KEY_CODES.ARROW_DOWN:
              case KEY_CODES.HOME:
              case KEY_CODES.END: {
                if (!data.open) {
                  evt.preventDefault();
                  return evt.stopPropagation();
                }
                if (evt.keyCode === KEY_CODES.END) {
                  data.selectedIdx = data.links.length - 1;
                } else {
                  data.selectedIdx = 0;
                }
                focusSelectedLink(data);
                evt.preventDefault();
                return evt.stopPropagation();
              }
            }
          };
        }
        function makeLinksKeyboardHandler(data) {
          return function(evt) {
            if (!data.open) {
              return;
            }
            data.selectedIdx = data.links.index(document.activeElement);
            switch (evt.keyCode) {
              case KEY_CODES.HOME:
              case KEY_CODES.END: {
                if (evt.keyCode === KEY_CODES.END) {
                  data.selectedIdx = data.links.length - 1;
                } else {
                  data.selectedIdx = 0;
                }
                focusSelectedLink(data);
                evt.preventDefault();
                return evt.stopPropagation();
              }
              case KEY_CODES.ESCAPE: {
                close(data);
                data.button.focus();
                evt.preventDefault();
                return evt.stopPropagation();
              }
              case KEY_CODES.ARROW_LEFT:
              case KEY_CODES.ARROW_UP: {
                data.selectedIdx = Math.max(-1, data.selectedIdx - 1);
                focusSelectedLink(data);
                evt.preventDefault();
                return evt.stopPropagation();
              }
              case KEY_CODES.ARROW_RIGHT:
              case KEY_CODES.ARROW_DOWN: {
                data.selectedIdx = Math.min(data.links.length - 1, data.selectedIdx + 1);
                focusSelectedLink(data);
                evt.preventDefault();
                return evt.stopPropagation();
              }
            }
          };
        }
        function focusSelectedLink(data) {
          if (data.links[data.selectedIdx]) {
            var selectedElement = data.links[data.selectedIdx];
            selectedElement.focus();
            navigate(selectedElement);
          }
        }
        function reopen(data) {
          if (!data.open) {
            return;
          }
          close(data, true);
          open(data, true);
        }
        function toggle(data) {
          return debounce(function() {
            data.open ? close(data) : open(data);
          });
        }
        function navigate(data) {
          return function(evt) {
            var link = $(this);
            var href = link.attr("href");
            if (!Webflow.validClick(evt.currentTarget)) {
              evt.preventDefault();
              return;
            }
            if (href && href.indexOf("#") === 0 && data.open) {
              close(data);
            }
          };
        }
        function outside(data) {
          if (data.outside) {
            $doc.off("click" + namespace, data.outside);
          }
          return function(evt) {
            var $target = $(evt.target);
            if (inEditor && $target.closest(".w-editor-bem-EditorOverlay").length) {
              return;
            }
            outsideDebounced(data, $target);
          };
        }
        var outsideDebounced = debounce(function(data, $target) {
          if (!data.open) {
            return;
          }
          var menu = $target.closest(".w-nav-menu");
          if (!data.menu.is(menu)) {
            close(data);
          }
        });
        function resize(i, el) {
          var data = $.data(el, namespace);
          var collapsed = data.collapsed = data.button.css("display") !== "none";
          if (data.open && !collapsed && !designer) {
            close(data, true);
          }
          if (data.container.length) {
            var updateEachMax = updateMax(data);
            data.links.each(updateEachMax);
            data.dropdowns.each(updateEachMax);
          }
          if (data.open) {
            setOverlayHeight(data);
          }
        }
        var maxWidth = "max-width";
        function updateMax(data) {
          var containMax = data.container.css(maxWidth);
          if (containMax === "none") {
            containMax = "";
          }
          return function(i, link) {
            link = $(link);
            link.css(maxWidth, "");
            if (link.css(maxWidth) === "none") {
              link.css(maxWidth, containMax);
            }
          };
        }
        function addMenuOpen(i, el) {
          el.setAttribute("data-nav-menu-open", "");
        }
        function removeMenuOpen(i, el) {
          el.removeAttribute("data-nav-menu-open");
        }
        function open(data, immediate) {
          if (data.open) {
            return;
          }
          data.open = true;
          data.menu.each(addMenuOpen);
          data.links.addClass(navbarOpenedLink);
          data.dropdowns.addClass(navbarOpenedDropdown);
          data.dropdownToggle.addClass(navbarOpenedDropdownToggle);
          data.dropdownList.addClass(navbarOpenedDropdownList);
          data.button.addClass(navbarOpenedButton);
          var config = data.config;
          var animation = config.animation;
          if (animation === "none" || !tram.support.transform || config.duration <= 0) {
            immediate = true;
          }
          var bodyHeight = setOverlayHeight(data);
          var menuHeight = data.menu.outerHeight(true);
          var menuWidth = data.menu.outerWidth(true);
          var navHeight = data.el.height();
          var navbarEl = data.el[0];
          resize(0, navbarEl);
          ix.intro(0, navbarEl);
          Webflow.redraw.up();
          if (!designer) {
            $doc.on("click" + namespace, data.outside);
          }
          if (immediate) {
            complete();
            return;
          }
          var transConfig = "transform " + config.duration + "ms " + config.easing;
          if (data.overlay) {
            menuSibling = data.menu.prev();
            data.overlay.show().append(data.menu);
          }
          if (config.animOver) {
            tram(data.menu).add(transConfig).set({
              x: config.animDirect * menuWidth,
              height: bodyHeight
            }).start({
              x: 0
            }).then(complete);
            data.overlay && data.overlay.width(menuWidth);
            return;
          }
          var offsetY = navHeight + menuHeight;
          tram(data.menu).add(transConfig).set({
            y: -offsetY
          }).start({
            y: 0
          }).then(complete);
          function complete() {
            data.button.attr("aria-expanded", "true");
          }
        }
        function setOverlayHeight(data) {
          var config = data.config;
          var bodyHeight = config.docHeight ? $doc.height() : $body.height();
          if (config.animOver) {
            data.menu.height(bodyHeight);
          } else if (data.el.css("position") !== "fixed") {
            bodyHeight -= data.el.outerHeight(true);
          }
          data.overlay && data.overlay.height(bodyHeight);
          return bodyHeight;
        }
        function close(data, immediate) {
          if (!data.open) {
            return;
          }
          data.open = false;
          data.button.removeClass(navbarOpenedButton);
          var config = data.config;
          if (config.animation === "none" || !tram.support.transform || config.duration <= 0) {
            immediate = true;
          }
          ix.outro(0, data.el[0]);
          $doc.off("click" + namespace, data.outside);
          if (immediate) {
            tram(data.menu).stop();
            complete();
            return;
          }
          var transConfig = "transform " + config.duration + "ms " + config.easing2;
          var menuHeight = data.menu.outerHeight(true);
          var menuWidth = data.menu.outerWidth(true);
          var navHeight = data.el.height();
          if (config.animOver) {
            tram(data.menu).add(transConfig).start({
              x: menuWidth * config.animDirect
            }).then(complete);
            return;
          }
          var offsetY = navHeight + menuHeight;
          tram(data.menu).add(transConfig).start({
            y: -offsetY
          }).then(complete);
          function complete() {
            data.menu.height("");
            tram(data.menu).set({
              x: 0,
              y: 0
            });
            data.menu.each(removeMenuOpen);
            data.links.removeClass(navbarOpenedLink);
            data.dropdowns.removeClass(navbarOpenedDropdown);
            data.dropdownToggle.removeClass(navbarOpenedDropdownToggle);
            data.dropdownList.removeClass(navbarOpenedDropdownList);
            if (data.overlay && data.overlay.children().length) {
              menuSibling.length ? data.menu.insertAfter(menuSibling) : data.menu.prependTo(data.parent);
              data.overlay.attr("style", "").hide();
            }
            data.el.triggerHandler("w-close");
            data.button.attr("aria-expanded", "false");
          }
        }
        return api;
      });
    }
  });

  // packages/shared/render/plugins/Tabs/webflow-tabs.js
  var require_webflow_tabs = __commonJS({
    "packages/shared/render/plugins/Tabs/webflow-tabs.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      var IXEvents = require_webflow_ix2_events();
      Webflow.define("tabs", module.exports = function($) {
        var api = {};
        var tram = $.tram;
        var $doc = $(document);
        var $tabs;
        var design;
        var env = Webflow.env;
        var safari = env.safari;
        var inApp = env();
        var tabAttr = "data-w-tab";
        var paneAttr = "data-w-pane";
        var namespace = ".w-tabs";
        var linkCurrent = "w--current";
        var tabActive = "w--tab-active";
        var ix = IXEvents.triggers;
        var inRedraw = false;
        api.ready = api.design = api.preview = init;
        api.redraw = function() {
          inRedraw = true;
          init();
          inRedraw = false;
        };
        api.destroy = function() {
          $tabs = $doc.find(namespace);
          if (!$tabs.length) {
            return;
          }
          $tabs.each(resetIX);
          removeListeners();
        };
        function init() {
          design = inApp && Webflow.env("design");
          $tabs = $doc.find(namespace);
          if (!$tabs.length) {
            return;
          }
          $tabs.each(build);
          if (Webflow.env("preview") && !inRedraw) {
            $tabs.each(resetIX);
          }
          removeListeners();
          addListeners();
        }
        function removeListeners() {
          Webflow.redraw.off(api.redraw);
        }
        function addListeners() {
          Webflow.redraw.on(api.redraw);
        }
        function resetIX(i, el) {
          var data = $.data(el, namespace);
          if (!data) {
            return;
          }
          data.links && data.links.each(ix.reset);
          data.panes && data.panes.each(ix.reset);
        }
        function build(i, el) {
          var widgetHash = namespace.substr(1) + "-" + i;
          var $el = $(el);
          var data = $.data(el, namespace);
          if (!data) {
            data = $.data(el, namespace, {
              el: $el,
              config: {}
            });
          }
          data.current = null;
          data.tabIdentifier = widgetHash + "-" + tabAttr;
          data.paneIdentifier = widgetHash + "-" + paneAttr;
          data.menu = $el.children(".w-tab-menu");
          data.links = data.menu.children(".w-tab-link");
          data.content = $el.children(".w-tab-content");
          data.panes = data.content.children(".w-tab-pane");
          data.el.off(namespace);
          data.links.off(namespace);
          data.menu.attr("role", "tablist");
          data.links.attr("tabindex", "-1");
          configure(data);
          if (!design) {
            data.links.on("click" + namespace, linkSelect(data));
            data.links.on("keydown" + namespace, handleLinkKeydown(data));
            var $link = data.links.filter("." + linkCurrent);
            var tab = $link.attr(tabAttr);
            tab && changeTab(data, {
              tab,
              immediate: true
            });
          }
        }
        function configure(data) {
          var config = {};
          config.easing = data.el.attr("data-easing") || "ease";
          var intro = parseInt(data.el.attr("data-duration-in"), 10);
          intro = config.intro = intro === intro ? intro : 0;
          var outro = parseInt(data.el.attr("data-duration-out"), 10);
          outro = config.outro = outro === outro ? outro : 0;
          config.immediate = !intro && !outro;
          data.config = config;
        }
        function getActiveTabIdx(data) {
          var tab = data.current;
          return Array.prototype.findIndex.call(data.links, (t) => {
            return t.getAttribute(tabAttr) === tab;
          }, null);
        }
        function linkSelect(data) {
          return function(evt) {
            evt.preventDefault();
            var tab = evt.currentTarget.getAttribute(tabAttr);
            tab && changeTab(data, {
              tab
            });
          };
        }
        function handleLinkKeydown(data) {
          return function(evt) {
            var currentIdx = getActiveTabIdx(data);
            var keyName = evt.key;
            var keyMap = {
              ArrowLeft: currentIdx - 1,
              ArrowUp: currentIdx - 1,
              ArrowRight: currentIdx + 1,
              ArrowDown: currentIdx + 1,
              End: data.links.length - 1,
              Home: 0
            };
            if (!(keyName in keyMap))
              return;
            evt.preventDefault();
            var nextIdx = keyMap[keyName];
            if (nextIdx === -1) {
              nextIdx = data.links.length - 1;
            }
            if (nextIdx === data.links.length) {
              nextIdx = 0;
            }
            var tabEl = data.links[nextIdx];
            var tab = tabEl.getAttribute(tabAttr);
            tab && changeTab(data, {
              tab
            });
          };
        }
        function changeTab(data, options) {
          options = options || {};
          var config = data.config;
          var easing = config.easing;
          var tab = options.tab;
          if (tab === data.current) {
            return;
          }
          data.current = tab;
          var currentTab;
          data.links.each(function(i, el) {
            var $el = $(el);
            if (options.immediate || config.immediate) {
              var pane = data.panes[i];
              if (!el.id) {
                el.id = data.tabIdentifier + "-" + i;
              }
              if (!pane.id) {
                pane.id = data.paneIdentifier + "-" + i;
              }
              el.href = "#" + pane.id;
              el.setAttribute("role", "tab");
              el.setAttribute("aria-controls", pane.id);
              el.setAttribute("aria-selected", "false");
              pane.setAttribute("role", "tabpanel");
              pane.setAttribute("aria-labelledby", el.id);
            }
            if (el.getAttribute(tabAttr) === tab) {
              currentTab = el;
              $el.addClass(linkCurrent).removeAttr("tabindex").attr({
                "aria-selected": "true"
              }).each(ix.intro);
            } else if ($el.hasClass(linkCurrent)) {
              $el.removeClass(linkCurrent).attr({
                tabindex: "-1",
                "aria-selected": "false"
              }).each(ix.outro);
            }
          });
          var targets = [];
          var previous = [];
          data.panes.each(function(i, el) {
            var $el = $(el);
            if (el.getAttribute(tabAttr) === tab) {
              targets.push(el);
            } else if ($el.hasClass(tabActive)) {
              previous.push(el);
            }
          });
          var $targets = $(targets);
          var $previous = $(previous);
          if (options.immediate || config.immediate) {
            $targets.addClass(tabActive).each(ix.intro);
            $previous.removeClass(tabActive);
            if (!inRedraw) {
              Webflow.redraw.up();
            }
            return;
          } else {
            var x = window.scrollX;
            var y = window.scrollY;
            currentTab.focus();
            window.scrollTo(x, y);
          }
          if ($previous.length && config.outro) {
            $previous.each(ix.outro);
            tram($previous).add("opacity " + config.outro + "ms " + easing, {
              fallback: safari
            }).start({
              opacity: 0
            }).then(() => fadeIn(config, $previous, $targets));
          } else {
            fadeIn(config, $previous, $targets);
          }
        }
        function fadeIn(config, $previous, $targets) {
          $previous.removeClass(tabActive).css({
            opacity: "",
            transition: "",
            transform: "",
            width: "",
            height: ""
          });
          $targets.addClass(tabActive).each(ix.intro);
          Webflow.redraw.up();
          if (!config.intro) {
            return tram($targets).set({
              opacity: 1
            });
          }
          tram($targets).set({
            opacity: 0
          }).redraw().add("opacity " + config.intro + "ms " + config.easing, {
            fallback: safari
          }).start({
            opacity: 1
          });
        }
        return api;
      });
    }
  });

  // <stdin>
  require_webflow_brand();
  require_webflow_edit();
  require_webflow_focus_visible();
  require_webflow_focus();
  require_webflow_ix2_events();
  require_webflow_ix2();
  require_webflow_links();
  require_webflow_scroll();
  require_webflow_touch();
  require_webflow_dropdown();
  require_webflow_forms();
  require_webflow_lightbox();
  require_webflow_navbar();
  require_webflow_tabs();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init(
{"events":{"e":{"id":"e","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829bb|4af6f2c5-9947-66f6-47fa-785e6ac3af00","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829bb|4af6f2c5-9947-66f6-47fa-785e6ac3af00","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1672799060271},"e-3":{"id":"e-3","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829bb|4af6f2c5-9947-66f6-47fa-785e6ac3af04","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829bb|4af6f2c5-9947-66f6-47fa-785e6ac3af04","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1672799060271},"e-5":{"id":"e-5","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-6"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829bb|4af6f2c5-9947-66f6-47fa-785e6ac3af08","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829bb|4af6f2c5-9947-66f6-47fa-785e6ac3af08","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1672799060271},"e-7":{"id":"e-7","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-8"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829bb|4af6f2c5-9947-66f6-47fa-785e6ac3af0c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829bb|4af6f2c5-9947-66f6-47fa-785e6ac3af0c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1672799060271},"e-9":{"id":"e-9","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-10"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829bb|4af6f2c5-9947-66f6-47fa-785e6ac3af10","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829bb|4af6f2c5-9947-66f6-47fa-785e6ac3af10","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1672799060271},"e-11":{"id":"e-11","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-12"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".faq","originalId":"9fbfaf9f-ecc4-bceb-375e-a0d3e8cbb872","appliesTo":"CLASS"},"targets":[{"selector":".faq","originalId":"9fbfaf9f-ecc4-bceb-375e-a0d3e8cbb872","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1675332959120},"e-12":{"id":"e-12","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-11"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".faq","originalId":"9fbfaf9f-ecc4-bceb-375e-a0d3e8cbb872","appliesTo":"CLASS"},"targets":[{"selector":".faq","originalId":"9fbfaf9f-ecc4-bceb-375e-a0d3e8cbb872","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1675332959120},"e-21":{"id":"e-21","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-22"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829a9|acadc66a-4bb1-1f2e-37b6-152cc410110a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829a9|acadc66a-4bb1-1f2e-37b6-152cc410110a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1676437015729},"e-23":{"id":"e-23","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-24"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829a9|4b0e752c-bcb7-7ac3-4710-9f3e922b4cd6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829a9|4b0e752c-bcb7-7ac3-4710-9f3e922b4cd6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1676437091159},"e-25":{"id":"e-25","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-26"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829a9|0d58400f-7c3e-ce33-0ce7-8142e0a5affa","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829a9|0d58400f-7c3e-ce33-0ce7-8142e0a5affa","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1676437098114},"e-37":{"id":"e-37","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-38"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3745f596-6313-fa0d-0819-1f99606ffde3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3745f596-6313-fa0d-0819-1f99606ffde3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1676438352454},"e-41":{"id":"e-41","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-42"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9fbfaf9f-ecc4-bceb-375e-a0d3e8cbb869","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9fbfaf9f-ecc4-bceb-375e-a0d3e8cbb869","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1676438380371},"e-43":{"id":"e-43","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-44"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"daf5f210-81aa-013d-a9eb-cddcc29f8bad","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"daf5f210-81aa-013d-a9eb-cddcc29f8bad","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1676438403611},"e-47":{"id":"e-47","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-48"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829b9|a59b0d0c-edb1-30fa-d868-6ada1e92affa","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829b9|a59b0d0c-edb1-30fa-d868-6ada1e92affa","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1676438462745},"e-51":{"id":"e-51","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-52"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829b9|f2e330d7-64ce-5253-0412-37cc9b802f02","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829b9|f2e330d7-64ce-5253-0412-37cc9b802f02","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1676438479616},"e-53":{"id":"e-53","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-54"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829b9|d4c87b41-bcc7-123a-6fcc-b27b3d1b77e8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829b9|d4c87b41-bcc7-123a-6fcc-b27b3d1b77e8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1676438500836},"e-57":{"id":"e-57","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-58"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6d5f268a-4ed1-f63f-df78-69d9c4f89766","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6d5f268a-4ed1-f63f-df78-69d9c4f89766","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1676439771234},"e-65":{"id":"e-65","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-66"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829b7|f92b5faa-80f4-34a2-47c6-fd390bd34ff5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829b7|f92b5faa-80f4-34a2-47c6-fd390bd34ff5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1676463589961},"e-75":{"id":"e-75","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-76"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829b6|b1bb97a4-6293-d363-9a47-db4259e4ced3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829b6|b1bb97a4-6293-d363-9a47-db4259e4ced3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677076197884},"e-77":{"id":"e-77","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-78"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"76e54f62-538f-4035-e33e-ef131a750413","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"76e54f62-538f-4035-e33e-ef131a750413","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677076224155},"e-79":{"id":"e-79","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-80"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829b6|813dd3fa-b425-d51e-4b72-7d2875877858","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829b6|813dd3fa-b425-d51e-4b72-7d2875877858","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677076510226},"e-81":{"id":"e-81","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-82"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829b6|4c93470c-e8c7-89ab-1e97-c68e3cd15526","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829b6|4c93470c-e8c7-89ab-1e97-c68e3cd15526","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677076520688},"e-83":{"id":"e-83","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-84"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829b6|ebb918a9-6b27-6d48-c2b0-f4d53ba398db","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829b6|ebb918a9-6b27-6d48-c2b0-f4d53ba398db","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677076530367},"e-85":{"id":"e-85","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-86"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829b6|b12105e6-3060-5d09-c82b-b4b186081ffd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829b6|b12105e6-3060-5d09-c82b-b4b186081ffd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677078046072},"e-87":{"id":"e-87","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-88"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829b6|a5d24a74-9944-c360-3e5b-b1f40ba8e9ef","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829b6|a5d24a74-9944-c360-3e5b-b1f40ba8e9ef","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677078059325},"e-89":{"id":"e-89","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-90"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3745f596-6313-fa0d-0819-1f99606ffde4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3745f596-6313-fa0d-0819-1f99606ffde4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677078068272},"e-91":{"id":"e-91","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-92"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829b2|7e834540-4453-fed6-4a3a-911510483010","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829b2|7e834540-4453-fed6-4a3a-911510483010","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677116228975},"e-105":{"id":"e-105","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-106"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829b6|f8dba1a4-6df8-034e-27cf-87c4368d0143","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829b6|f8dba1a4-6df8-034e-27cf-87c4368d0143","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677147250774},"e-107":{"id":"e-107","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-108"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"96f614ad-382c-cef8-a781-4bb5da815a54","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"96f614ad-382c-cef8-a781-4bb5da815a54","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677147267222},"e-109":{"id":"e-109","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-110"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"96f614ad-382c-cef8-a781-4bb5da815a53","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"96f614ad-382c-cef8-a781-4bb5da815a53","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677147276976},"e-111":{"id":"e-111","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-112"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829a9|fdd1e274-2aa7-ca20-0949-a37af8d999dd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829a9|fdd1e274-2aa7-ca20-0949-a37af8d999dd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677147607084},"e-115":{"id":"e-115","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-116"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829b0|d9204668-732b-e13c-8947-2f362254f4af","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829b0|d9204668-732b-e13c-8947-2f362254f4af","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677471500221},"e-117":{"id":"e-117","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-118"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829b0|bae46952-01d1-091d-972e-08b127dfd22e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829b0|bae46952-01d1-091d-972e-08b127dfd22e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677511220739},"e-119":{"id":"e-119","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-120"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829b9|1fdc9dab-9c7d-315d-9c29-b1796217e6da","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829b9|1fdc9dab-9c7d-315d-9c29-b1796217e6da","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677549623025},"e-121":{"id":"e-121","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-122"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829ac|5db22fc9-a806-beee-8247-9d413eb9797a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829ac|5db22fc9-a806-beee-8247-9d413eb9797a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677554124334},"e-123":{"id":"e-123","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-124"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829ac|278f4849-87f0-5098-e454-ff414b7c1a99","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829ac|278f4849-87f0-5098-e454-ff414b7c1a99","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677554130547},"e-125":{"id":"e-125","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-126"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829b7|ca4e0fbc-91ad-c96f-6853-8cfc97459821","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829b7|ca4e0fbc-91ad-c96f-6853-8cfc97459821","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677554514411},"e-127":{"id":"e-127","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-128"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829bb|e8ca46a5-0901-bac8-360a-b2d92f3e746b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829bb|e8ca46a5-0901-bac8-360a-b2d92f3e746b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677554532762},"e-129":{"id":"e-129","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-130"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829bb|335a8289-d4f6-bc46-216c-ac571983f101","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829bb|335a8289-d4f6-bc46-216c-ac571983f101","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677554538297},"e-131":{"id":"e-131","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-132"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829bd|ebb0a5c4-8d1f-3141-a7e1-ced1df2a7bf1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829bd|ebb0a5c4-8d1f-3141-a7e1-ced1df2a7bf1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677555320488},"e-133":{"id":"e-133","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-134"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829ba|3b27483e-9ed7-6cf2-fcfd-586a106d368b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829ba|3b27483e-9ed7-6cf2-fcfd-586a106d368b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677555331530},"e-135":{"id":"e-135","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-136"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829b4|d1709f89-9e90-504b-6844-7a1b14cdad8e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829b4|d1709f89-9e90-504b-6844-7a1b14cdad8e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677555346103},"e-137":{"id":"e-137","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-138"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829b8|b7a71826-35bd-83e4-d23b-fcf433cf287c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829b8|b7a71826-35bd-83e4-d23b-fcf433cf287c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677555372688},"e-139":{"id":"e-139","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-140"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829b1|da3740bb-51de-767b-3659-6c9fceab3049","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829b1|da3740bb-51de-767b-3659-6c9fceab3049","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677556393188},"e-141":{"id":"e-141","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-142"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829b2|7f4dd7b4-1c93-3d3c-c339-b82074ccc9f5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829b2|7f4dd7b4-1c93-3d3c-c339-b82074ccc9f5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677721935647},"e-143":{"id":"e-143","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-144"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829b0|6aae879d-5927-b139-500a-e0b29e5771e2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829b0|6aae879d-5927-b139-500a-e0b29e5771e2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677724190832},"e-145":{"id":"e-145","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-146"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829ab|1915c361-9313-ae2a-03ac-4fc5226afbbd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829ab|1915c361-9313-ae2a-03ac-4fc5226afbbd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677724285977},"e-157":{"id":"e-157","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-158"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"661cd83518b262df32b08884|0a81c22d-d920-9b89-f6c8-624f55470017","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"661cd83518b262df32b08884|0a81c22d-d920-9b89-f6c8-624f55470017","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713166390796},"e-159":{"id":"e-159","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-160"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"661cd83518b262df32b08884|0efc635e-63e2-455e-146d-97ab80a3f25c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"661cd83518b262df32b08884|0efc635e-63e2-455e-146d-97ab80a3f25c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713166390796},"e-161":{"id":"e-161","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-162"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"661cd83518b262df32b08884|da3a6db1-76ab-cd22-0a59-0698f4f8c559","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"661cd83518b262df32b08884|da3a6db1-76ab-cd22-0a59-0698f4f8c559","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713166390796},"e-163":{"id":"e-163","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-164"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"661cd83518b262df32b08884|1e7bd2ac-8dd0-ae13-c18f-1fd715b48d77","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"661cd83518b262df32b08884|1e7bd2ac-8dd0-ae13-c18f-1fd715b48d77","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713166390796},"e-165":{"id":"e-165","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-166"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"661cd83518b262df32b08884|d18aa302-49cd-449d-a1bf-bc12d9c89470","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"661cd83518b262df32b08884|d18aa302-49cd-449d-a1bf-bc12d9c89470","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713166390796},"e-167":{"id":"e-167","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-168"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"661cd8f0f0d745b0ca18857d|0a81c22d-d920-9b89-f6c8-624f55470017","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"661cd8f0f0d745b0ca18857d|0a81c22d-d920-9b89-f6c8-624f55470017","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713166577088},"e-169":{"id":"e-169","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-170"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"661cd8f0f0d745b0ca18857d|0efc635e-63e2-455e-146d-97ab80a3f25c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"661cd8f0f0d745b0ca18857d|0efc635e-63e2-455e-146d-97ab80a3f25c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713166577088},"e-171":{"id":"e-171","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-172"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"661cd8f0f0d745b0ca18857d|da3a6db1-76ab-cd22-0a59-0698f4f8c559","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"661cd8f0f0d745b0ca18857d|da3a6db1-76ab-cd22-0a59-0698f4f8c559","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713166577088},"e-173":{"id":"e-173","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-174"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"661cd8f0f0d745b0ca18857d|1e7bd2ac-8dd0-ae13-c18f-1fd715b48d77","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"661cd8f0f0d745b0ca18857d|1e7bd2ac-8dd0-ae13-c18f-1fd715b48d77","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713166577088},"e-175":{"id":"e-175","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-176"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"661cd8f0f0d745b0ca18857d|d18aa302-49cd-449d-a1bf-bc12d9c89470","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"661cd8f0f0d745b0ca18857d|d18aa302-49cd-449d-a1bf-bc12d9c89470","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713166577088},"e-177":{"id":"e-177","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-178"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"661cdac19911086b904e9254|0a81c22d-d920-9b89-f6c8-624f55470017","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"661cdac19911086b904e9254|0a81c22d-d920-9b89-f6c8-624f55470017","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713167042396},"e-179":{"id":"e-179","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-180"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"661cdac19911086b904e9254|0efc635e-63e2-455e-146d-97ab80a3f25c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"661cdac19911086b904e9254|0efc635e-63e2-455e-146d-97ab80a3f25c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713167042396},"e-181":{"id":"e-181","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-182"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"661cdac19911086b904e9254|da3a6db1-76ab-cd22-0a59-0698f4f8c559","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"661cdac19911086b904e9254|da3a6db1-76ab-cd22-0a59-0698f4f8c559","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713167042396},"e-183":{"id":"e-183","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-184"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"661cdac19911086b904e9254|1e7bd2ac-8dd0-ae13-c18f-1fd715b48d77","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"661cdac19911086b904e9254|1e7bd2ac-8dd0-ae13-c18f-1fd715b48d77","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713167042396},"e-185":{"id":"e-185","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-186"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"661cdac19911086b904e9254|d18aa302-49cd-449d-a1bf-bc12d9c89470","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"661cdac19911086b904e9254|d18aa302-49cd-449d-a1bf-bc12d9c89470","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713167042396},"e-187":{"id":"e-187","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-188"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"661cdb0d18b262df32b308fe|0a81c22d-d920-9b89-f6c8-624f55470017","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"661cdb0d18b262df32b308fe|0a81c22d-d920-9b89-f6c8-624f55470017","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713167117684},"e-189":{"id":"e-189","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-190"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"661cdb0d18b262df32b308fe|0efc635e-63e2-455e-146d-97ab80a3f25c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"661cdb0d18b262df32b308fe|0efc635e-63e2-455e-146d-97ab80a3f25c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713167117684},"e-191":{"id":"e-191","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-192"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"661cdb0d18b262df32b308fe|da3a6db1-76ab-cd22-0a59-0698f4f8c559","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"661cdb0d18b262df32b308fe|da3a6db1-76ab-cd22-0a59-0698f4f8c559","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713167117684},"e-193":{"id":"e-193","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-194"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"661cdb0d18b262df32b308fe|1e7bd2ac-8dd0-ae13-c18f-1fd715b48d77","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"661cdb0d18b262df32b308fe|1e7bd2ac-8dd0-ae13-c18f-1fd715b48d77","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713167117684},"e-195":{"id":"e-195","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-196"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"661cdb0d18b262df32b308fe|d18aa302-49cd-449d-a1bf-bc12d9c89470","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"661cdb0d18b262df32b308fe|d18aa302-49cd-449d-a1bf-bc12d9c89470","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713167117684},"e-197":{"id":"e-197","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-198"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"661cdbaf0a3cdc4105b3772d|0a81c22d-d920-9b89-f6c8-624f55470017","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"661cdbaf0a3cdc4105b3772d|0a81c22d-d920-9b89-f6c8-624f55470017","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713167280405},"e-199":{"id":"e-199","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-200"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"661cdbaf0a3cdc4105b3772d|0efc635e-63e2-455e-146d-97ab80a3f25c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"661cdbaf0a3cdc4105b3772d|0efc635e-63e2-455e-146d-97ab80a3f25c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713167280405},"e-203":{"id":"e-203","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-204"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"661cdbaf0a3cdc4105b3772d|1e7bd2ac-8dd0-ae13-c18f-1fd715b48d77","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"661cdbaf0a3cdc4105b3772d|1e7bd2ac-8dd0-ae13-c18f-1fd715b48d77","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713167280405},"e-205":{"id":"e-205","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-206"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"661cdbaf0a3cdc4105b3772d|d18aa302-49cd-449d-a1bf-bc12d9c89470","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"661cdbaf0a3cdc4105b3772d|d18aa302-49cd-449d-a1bf-bc12d9c89470","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713167280405},"e-207":{"id":"e-207","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-208"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"661cdd3a66929d356533a839|0a81c22d-d920-9b89-f6c8-624f55470017","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"661cdd3a66929d356533a839|0a81c22d-d920-9b89-f6c8-624f55470017","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713167674846},"e-209":{"id":"e-209","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-210"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"661cdd3a66929d356533a839|0efc635e-63e2-455e-146d-97ab80a3f25c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"661cdd3a66929d356533a839|0efc635e-63e2-455e-146d-97ab80a3f25c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713167674846},"e-211":{"id":"e-211","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-212"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"661cdd3a66929d356533a839|da3a6db1-76ab-cd22-0a59-0698f4f8c559","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"661cdd3a66929d356533a839|da3a6db1-76ab-cd22-0a59-0698f4f8c559","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713167674846},"e-213":{"id":"e-213","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-214"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"661cdd3a66929d356533a839|1e7bd2ac-8dd0-ae13-c18f-1fd715b48d77","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"661cdd3a66929d356533a839|1e7bd2ac-8dd0-ae13-c18f-1fd715b48d77","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713167674846},"e-215":{"id":"e-215","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-216"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"661cdd3a66929d356533a839|d18aa302-49cd-449d-a1bf-bc12d9c89470","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"661cdd3a66929d356533a839|d18aa302-49cd-449d-a1bf-bc12d9c89470","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713167674846},"e-219":{"id":"e-219","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-220"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".faq","originalId":"66164c8d5ac05f815b1829b9|9da8ead2-0959-8210-8ee4-354a44758122","appliesTo":"CLASS"},"targets":[{"selector":".faq","originalId":"66164c8d5ac05f815b1829b9|9da8ead2-0959-8210-8ee4-354a44758122","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1713258402294},"e-220":{"id":"e-220","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-219"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".faq","originalId":"66164c8d5ac05f815b1829b9|9da8ead2-0959-8210-8ee4-354a44758122","appliesTo":"CLASS"},"targets":[{"selector":".faq","originalId":"66164c8d5ac05f815b1829b9|9da8ead2-0959-8210-8ee4-354a44758122","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1713258402294},"e-221":{"id":"e-221","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-222"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829b9|ed79c183-e43b-5835-451c-c0cadfe7b81c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829b9|ed79c183-e43b-5835-451c-c0cadfe7b81c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713258402294},"e-223":{"id":"e-223","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-224"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".faq","originalId":"85df07a1-7236-d2b5-1050-277b67130b38","appliesTo":"CLASS"},"targets":[{"selector":".faq","originalId":"85df07a1-7236-d2b5-1050-277b67130b38","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1713348969109},"e-224":{"id":"e-224","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-223"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".faq","originalId":"85df07a1-7236-d2b5-1050-277b67130b38","appliesTo":"CLASS"},"targets":[{"selector":".faq","originalId":"85df07a1-7236-d2b5-1050-277b67130b38","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1713348969109},"e-227":{"id":"e-227","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-228"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".faq","originalId":"32022800-a7e9-260d-87d7-3331e6255058","appliesTo":"CLASS"},"targets":[{"selector":".faq","originalId":"32022800-a7e9-260d-87d7-3331e6255058","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1713349033983},"e-228":{"id":"e-228","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-227"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".faq","originalId":"32022800-a7e9-260d-87d7-3331e6255058","appliesTo":"CLASS"},"targets":[{"selector":".faq","originalId":"32022800-a7e9-260d-87d7-3331e6255058","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1713349033983},"e-229":{"id":"e-229","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-230"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"32022800-a7e9-260d-87d7-3331e625504f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"32022800-a7e9-260d-87d7-3331e625504f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713349033983},"e-231":{"id":"e-231","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-17","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-232"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".faq","originalId":"949443cb-f923-55a8-7060-8d2b816c9b80","appliesTo":"CLASS"},"targets":[{"selector":".faq","originalId":"949443cb-f923-55a8-7060-8d2b816c9b80","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1713349076778},"e-232":{"id":"e-232","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-231"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".faq","originalId":"949443cb-f923-55a8-7060-8d2b816c9b80","appliesTo":"CLASS"},"targets":[{"selector":".faq","originalId":"949443cb-f923-55a8-7060-8d2b816c9b80","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1713349076778},"e-233":{"id":"e-233","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-234"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"949443cb-f923-55a8-7060-8d2b816c9b77","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"949443cb-f923-55a8-7060-8d2b816c9b77","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713349076778},"e-235":{"id":"e-235","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-236"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b7ce0bce-86d8-a9c9-2391-5c6ae92d8333","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7ce0bce-86d8-a9c9-2391-5c6ae92d8333","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713441033452},"e-237":{"id":"e-237","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-238"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b7ce0bce-86d8-a9c9-2391-5c6ae92d834e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7ce0bce-86d8-a9c9-2391-5c6ae92d834e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713441033452},"e-239":{"id":"e-239","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-240"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".faq","originalId":"661cdbaf0a3cdc4105b3772d|c79062c3-b9ab-0d8f-f2ee-2da8d2b1642b","appliesTo":"CLASS"},"targets":[{"selector":".faq","originalId":"661cdbaf0a3cdc4105b3772d|c79062c3-b9ab-0d8f-f2ee-2da8d2b1642b","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1713500797378},"e-240":{"id":"e-240","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-239"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".faq","originalId":"661cdbaf0a3cdc4105b3772d|c79062c3-b9ab-0d8f-f2ee-2da8d2b1642b","appliesTo":"CLASS"},"targets":[{"selector":".faq","originalId":"661cdbaf0a3cdc4105b3772d|c79062c3-b9ab-0d8f-f2ee-2da8d2b1642b","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1713500797378},"e-241":{"id":"e-241","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-24","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-242"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"661cdbaf0a3cdc4105b3772d|9c8ee3a0-8adc-835d-b9b1-7894f2f240c3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"661cdbaf0a3cdc4105b3772d|9c8ee3a0-8adc-835d-b9b1-7894f2f240c3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713500797378},"e-243":{"id":"e-243","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-244"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"661cdbaf0a3cdc4105b3772d|93a7512b-c659-c07c-8202-ce13516dcd1c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"661cdbaf0a3cdc4105b3772d|93a7512b-c659-c07c-8202-ce13516dcd1c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713517987079},"e-245":{"id":"e-245","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-25","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-246"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".faq","originalId":"661cdac19911086b904e9254|f9b17fb6-3cc1-019d-a636-591c60398069","appliesTo":"CLASS"},"targets":[{"selector":".faq","originalId":"661cdac19911086b904e9254|f9b17fb6-3cc1-019d-a636-591c60398069","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1713759891453},"e-246":{"id":"e-246","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-26","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-245"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".faq","originalId":"661cdac19911086b904e9254|f9b17fb6-3cc1-019d-a636-591c60398069","appliesTo":"CLASS"},"targets":[{"selector":".faq","originalId":"661cdac19911086b904e9254|f9b17fb6-3cc1-019d-a636-591c60398069","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1713759891453},"e-247":{"id":"e-247","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-27","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-248"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"661cdac19911086b904e9254|41c36d2e-cdf3-9c1d-3574-10b1521ed4f4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"661cdac19911086b904e9254|41c36d2e-cdf3-9c1d-3574-10b1521ed4f4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713759891453},"e-249":{"id":"e-249","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-250"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3fdf52fe-60e4-479c-81bb-68fbd0e9aa24","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3fdf52fe-60e4-479c-81bb-68fbd0e9aa24","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713773945271},"e-251":{"id":"e-251","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-252"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3fdf52fe-60e4-479c-81bb-68fbd0e9aa44","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3fdf52fe-60e4-479c-81bb-68fbd0e9aa44","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713773945271},"e-253":{"id":"e-253","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-254"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"662723d7a6ed0dae2170d097|0a81c22d-d920-9b89-f6c8-624f55470017","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"662723d7a6ed0dae2170d097|0a81c22d-d920-9b89-f6c8-624f55470017","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713841112567},"e-255":{"id":"e-255","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-256"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"662723d7a6ed0dae2170d097|0efc635e-63e2-455e-146d-97ab80a3f25c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"662723d7a6ed0dae2170d097|0efc635e-63e2-455e-146d-97ab80a3f25c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713841112567},"e-257":{"id":"e-257","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-258"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"662723d7a6ed0dae2170d097|da3a6db1-76ab-cd22-0a59-0698f4f8c559","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"662723d7a6ed0dae2170d097|da3a6db1-76ab-cd22-0a59-0698f4f8c559","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713841112567},"e-259":{"id":"e-259","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-260"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"662723d7a6ed0dae2170d097|1e7bd2ac-8dd0-ae13-c18f-1fd715b48d77","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"662723d7a6ed0dae2170d097|1e7bd2ac-8dd0-ae13-c18f-1fd715b48d77","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713841112567},"e-261":{"id":"e-261","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-262"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"662723d7a6ed0dae2170d097|d18aa302-49cd-449d-a1bf-bc12d9c89470","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"662723d7a6ed0dae2170d097|d18aa302-49cd-449d-a1bf-bc12d9c89470","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713841112567},"e-263":{"id":"e-263","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-264"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"661cdd3a66929d356533a839|ff054210-52b4-1a8a-8327-c1f8175a8df9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"661cdd3a66929d356533a839|ff054210-52b4-1a8a-8327-c1f8175a8df9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713841979097},"e-265":{"id":"e-265","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-31","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-266"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"661cdd3a66929d356533a839|ff054210-52b4-1a8a-8327-c1f8175a8e19","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"661cdd3a66929d356533a839|ff054210-52b4-1a8a-8327-c1f8175a8e19","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713841979097},"e-267":{"id":"e-267","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-32","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-268"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".faq","originalId":"661cdd3a66929d356533a839|f49bc1b8-4ba0-1dff-7d7c-7c3da8be622f","appliesTo":"CLASS"},"targets":[{"selector":".faq","originalId":"661cdd3a66929d356533a839|f49bc1b8-4ba0-1dff-7d7c-7c3da8be622f","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1713842084213},"e-268":{"id":"e-268","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-33","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-267"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".faq","originalId":"661cdd3a66929d356533a839|f49bc1b8-4ba0-1dff-7d7c-7c3da8be622f","appliesTo":"CLASS"},"targets":[{"selector":".faq","originalId":"661cdd3a66929d356533a839|f49bc1b8-4ba0-1dff-7d7c-7c3da8be622f","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1713842084213},"e-269":{"id":"e-269","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-34","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-270"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"661cdd3a66929d356533a839|f0a4a8b4-cc79-214c-c1ff-27c3b8bff06b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"661cdd3a66929d356533a839|f0a4a8b4-cc79-214c-c1ff-27c3b8bff06b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713842084213},"e-271":{"id":"e-271","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-272"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66273ad0a6ed0dae21842743|0a81c22d-d920-9b89-f6c8-624f55470017","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66273ad0a6ed0dae21842743|0a81c22d-d920-9b89-f6c8-624f55470017","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713846993480},"e-273":{"id":"e-273","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-274"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66273ad0a6ed0dae21842743|0efc635e-63e2-455e-146d-97ab80a3f25c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66273ad0a6ed0dae21842743|0efc635e-63e2-455e-146d-97ab80a3f25c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713846993480},"e-275":{"id":"e-275","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-35","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-276"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66273ad0a6ed0dae21842743|253e78a2-2446-f61d-2739-7ddca76afeaf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66273ad0a6ed0dae21842743|253e78a2-2446-f61d-2739-7ddca76afeaf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1713847290702},"e-277":{"id":"e-277","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-278"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829a9|4ed54d2f-a81f-9d36-15a2-351dbfe95fb2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829a9|4ed54d2f-a81f-9d36-15a2-351dbfe95fb2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1714631480339},"e-279":{"id":"e-279","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-39","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-280"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829a9|b50a04e3-8756-c5d0-67f1-b2b6b02d0386","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829a9|b50a04e3-8756-c5d0-67f1-b2b6b02d0386","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1714631804466},"e-281":{"id":"e-281","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-39","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-282"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66164c8d5ac05f815b1829a9|b50a04e3-8756-c5d0-67f1-b2b6b02d0387","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66164c8d5ac05f815b1829a9|b50a04e3-8756-c5d0-67f1-b2b6b02d0387","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1714631804466},"e-283":{"id":"e-283","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-284"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"663b01350192149d0f0392fe|0a81c22d-d920-9b89-f6c8-624f55470017","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"663b01350192149d0f0392fe|0a81c22d-d920-9b89-f6c8-624f55470017","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1715142998014},"e-285":{"id":"e-285","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-286"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"663b01350192149d0f0392fe|1915c361-9313-ae2a-03ac-4fc5226afbbd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"663b01350192149d0f0392fe|1915c361-9313-ae2a-03ac-4fc5226afbbd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1715142998014},"e-287":{"id":"e-287","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-288"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"663b01350192149d0f0392fe|7ec03be8-926a-a92e-90e8-128ac5d7f8e2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"663b01350192149d0f0392fe|7ec03be8-926a-a92e-90e8-128ac5d7f8e2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1715142998014},"e-289":{"id":"e-289","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-290"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"663c8be0b6adbd7e274c48de|f92b5faa-80f4-34a2-47c6-fd390bd34ff5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"663c8be0b6adbd7e274c48de|f92b5faa-80f4-34a2-47c6-fd390bd34ff5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1715244001586},"e-291":{"id":"e-291","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-292"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"663c8be0b6adbd7e274c48de|ca4e0fbc-91ad-c96f-6853-8cfc97459821","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"663c8be0b6adbd7e274c48de|ca4e0fbc-91ad-c96f-6853-8cfc97459821","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1715244001586},"e-293":{"id":"e-293","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-294"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"663c8d2d65a507e9f132bab6|f92b5faa-80f4-34a2-47c6-fd390bd34ff5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"663c8d2d65a507e9f132bab6|f92b5faa-80f4-34a2-47c6-fd390bd34ff5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1715244334578},"e-295":{"id":"e-295","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-296"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"663c8d2d65a507e9f132bab6|ca4e0fbc-91ad-c96f-6853-8cfc97459821","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"663c8d2d65a507e9f132bab6|ca4e0fbc-91ad-c96f-6853-8cfc97459821","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1715244334578}},"actionLists":{"a":{"id":"a","title":"Scroll View -> 01","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-2":{"id":"a-2","title":"Scroll View -> 02","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-2-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-2-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-2-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-3":{"id":"a-3","title":"Scroll View -> 03","actionItemGroups":[{"actionItems":[{"id":"a-3-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-3-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-3-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":600,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-3-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":600,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-4":{"id":"a-4","title":"Scroll View -> 04","actionItemGroups":[{"actionItems":[{"id":"a-4-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-4-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-4-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":800,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-4-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":800,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-5":{"id":"a-5","title":"Scroll View -> 05","actionItemGroups":[{"actionItems":[{"id":"a-5-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-5-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-5-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":1000,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-5-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1000,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-6":{"id":"a-6","title":"Tab -> Open","actionItemGroups":[{"actionItems":[{"id":"a-6-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-content","selectorGuids":["907d6a27-b8c5-976c-1472-089e60733039"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-6-n-15","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-text-wrapper","selectorGuids":["d988001e-0e3d-dcf9-07e4-053afe0532b0"]},"globalSwatchId":"e0ae2212","rValue":24,"bValue":27,"gValue":24,"aValue":1}},{"id":"a-6-n-7","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"9fbfaf9f-ecc4-bceb-375e-a0d3e8cbb872"},"globalSwatchId":"d33d3cd0","rValue":236,"bValue":238,"gValue":236,"aValue":1}},{"id":"a-6-n-6","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"9fbfaf9f-ecc4-bceb-375e-a0d3e8cbb872"},"globalSwatchId":"6c8c2f79","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-6-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-minus","selectorGuids":["853d2de8-b23a-7016-8db1-1c567609e573"]},"value":0,"unit":""}},{"id":"a-6-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"yValue":10,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-6-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"value":0,"unit":""}},{"id":"a-6-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-plus","selectorGuids":["20abbf2b-3943-0e21-763c-15d2391bf0f7"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-6-n-8","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-content","selectorGuids":["907d6a27-b8c5-976c-1472-089e60733039"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-6-n-17","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq","selectorGuids":["35bbe4fd-ee5c-e0d2-a56d-408f1b813289"]},"globalSwatchId":"--charcoal","rValue":44,"bValue":81,"gValue":64,"aValue":1}},{"id":"a-6-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-plus","selectorGuids":["20abbf2b-3943-0e21-763c-15d2391bf0f7"]},"value":0,"unit":""}},{"id":"a-6-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-minus","selectorGuids":["853d2de8-b23a-7016-8db1-1c567609e573"]},"value":1,"unit":""}},{"id":"a-6-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-6-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"value":1,"unit":""}},{"id":"a-6-n-10","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":true,"id":"9fbfaf9f-ecc4-bceb-375e-a0d3e8cbb872"},"globalSwatchId":"--charcoal","rValue":44,"bValue":81,"gValue":64,"aValue":1}},{"id":"a-6-n-9","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":true,"id":"9fbfaf9f-ecc4-bceb-375e-a0d3e8cbb872"},"globalSwatchId":"e0ae2212","rValue":24,"bValue":27,"gValue":24,"aValue":1}},{"id":"a-6-n-16","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-text-wrapper","selectorGuids":["d988001e-0e3d-dcf9-07e4-053afe0532b0"]},"globalSwatchId":"6c8c2f79","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1675332161237},"a-7":{"id":"a-7","title":"Tab -> Close","actionItemGroups":[{"actionItems":[{"id":"a-7-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-content","selectorGuids":["907d6a27-b8c5-976c-1472-089e60733039"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-7-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-text-wrapper","selectorGuids":["d988001e-0e3d-dcf9-07e4-053afe0532b0"]},"globalSwatchId":"e0ae2212","rValue":24,"bValue":27,"gValue":24,"aValue":1}},{"id":"a-7-n-3","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":true,"id":"9fbfaf9f-ecc4-bceb-375e-a0d3e8cbb872"},"globalSwatchId":"d33d3cd0","rValue":236,"bValue":238,"gValue":236,"aValue":1}},{"id":"a-7-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":true,"id":"9fbfaf9f-ecc4-bceb-375e-a0d3e8cbb872"},"globalSwatchId":"6c8c2f79","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-7-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-minus","selectorGuids":["853d2de8-b23a-7016-8db1-1c567609e573"]},"value":0,"unit":""}},{"id":"a-7-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"yValue":10,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-7-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"value":0,"unit":""}},{"id":"a-7-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-plus","selectorGuids":["20abbf2b-3943-0e21-763c-15d2391bf0f7"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1675332161237},"a-8":{"id":"a-8","title":"Tab -> Open 2","actionItemGroups":[{"actionItems":[{"id":"a-8-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-content","selectorGuids":["907d6a27-b8c5-976c-1472-089e60733039"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-8-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-text-wrapper","selectorGuids":["d988001e-0e3d-dcf9-07e4-053afe0532b0"]},"globalSwatchId":"e0ae2212","rValue":24,"bValue":27,"gValue":24,"aValue":1}},{"id":"a-8-n-3","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"66164c8d5ac05f815b1829b9|9da8ead2-0959-8210-8ee4-354a44758122"},"globalSwatchId":"d33d3cd0","rValue":236,"bValue":238,"gValue":236,"aValue":1}},{"id":"a-8-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"66164c8d5ac05f815b1829b9|9da8ead2-0959-8210-8ee4-354a44758122"},"globalSwatchId":"6c8c2f79","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-8-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-minus","selectorGuids":["853d2de8-b23a-7016-8db1-1c567609e573"]},"value":0,"unit":""}},{"id":"a-8-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"yValue":10,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-8-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"value":0,"unit":""}},{"id":"a-8-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-plus","selectorGuids":["20abbf2b-3943-0e21-763c-15d2391bf0f7"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-8-n-9","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-content","selectorGuids":["907d6a27-b8c5-976c-1472-089e60733039"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-8-n-10","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-text-wrapper","selectorGuids":["d988001e-0e3d-dcf9-07e4-053afe0532b0"]},"globalSwatchId":"6c8c2f79","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-8-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-plus","selectorGuids":["20abbf2b-3943-0e21-763c-15d2391bf0f7"]},"value":0,"unit":""}},{"id":"a-8-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-minus","selectorGuids":["853d2de8-b23a-7016-8db1-1c567609e573"]},"value":1,"unit":""}},{"id":"a-8-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-8-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"value":1,"unit":""}},{"id":"a-8-n-15","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":true,"id":"66164c8d5ac05f815b1829b9|9da8ead2-0959-8210-8ee4-354a44758122"},"globalSwatchId":"e0ae2212","rValue":24,"bValue":27,"gValue":24,"aValue":1}},{"id":"a-8-n-16","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":true,"id":"66164c8d5ac05f815b1829b9|9da8ead2-0959-8210-8ee4-354a44758122"},"globalSwatchId":"e0ae2212","rValue":24,"bValue":27,"gValue":24,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1675332161237},"a-9":{"id":"a-9","title":"Tab -> Close 2","actionItemGroups":[{"actionItems":[{"id":"a-9-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-content","selectorGuids":["907d6a27-b8c5-976c-1472-089e60733039"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-9-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-text-wrapper","selectorGuids":["d988001e-0e3d-dcf9-07e4-053afe0532b0"]},"globalSwatchId":"e0ae2212","rValue":24,"bValue":27,"gValue":24,"aValue":1}},{"id":"a-9-n-3","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":true,"id":"66164c8d5ac05f815b1829b9|9da8ead2-0959-8210-8ee4-354a44758122"},"globalSwatchId":"d33d3cd0","rValue":236,"bValue":238,"gValue":236,"aValue":1}},{"id":"a-9-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":true,"id":"66164c8d5ac05f815b1829b9|9da8ead2-0959-8210-8ee4-354a44758122"},"globalSwatchId":"6c8c2f79","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-9-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-minus","selectorGuids":["853d2de8-b23a-7016-8db1-1c567609e573"]},"value":0,"unit":""}},{"id":"a-9-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"yValue":10,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-9-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"value":0,"unit":""}},{"id":"a-9-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-plus","selectorGuids":["20abbf2b-3943-0e21-763c-15d2391bf0f7"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1675332161237},"a-10":{"id":"a-10","title":"Scroll View -> 6","actionItemGroups":[{"actionItems":[{"id":"a-10-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"66164c8d5ac05f815b1829b9|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-10-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"66164c8d5ac05f815b1829b9|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-10-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"66164c8d5ac05f815b1829b9|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-10-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"66164c8d5ac05f815b1829b9|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-11":{"id":"a-11","title":"Tab -> Open 3","actionItemGroups":[{"actionItems":[{"id":"a-11-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-content","selectorGuids":["907d6a27-b8c5-976c-1472-089e60733039"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-11-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-text-wrapper","selectorGuids":["d988001e-0e3d-dcf9-07e4-053afe0532b0"]},"globalSwatchId":"e0ae2212","rValue":24,"bValue":27,"gValue":24,"aValue":1}},{"id":"a-11-n-3","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"85df07a1-7236-d2b5-1050-277b67130b38"},"globalSwatchId":"d33d3cd0","rValue":236,"bValue":238,"gValue":236,"aValue":1}},{"id":"a-11-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"85df07a1-7236-d2b5-1050-277b67130b38"},"globalSwatchId":"6c8c2f79","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-11-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-minus","selectorGuids":["853d2de8-b23a-7016-8db1-1c567609e573"]},"value":0,"unit":""}},{"id":"a-11-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"yValue":10,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-11-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"value":0,"unit":""}},{"id":"a-11-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-plus","selectorGuids":["20abbf2b-3943-0e21-763c-15d2391bf0f7"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-11-n-9","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-content","selectorGuids":["907d6a27-b8c5-976c-1472-089e60733039"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-11-n-10","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-text-wrapper","selectorGuids":["d988001e-0e3d-dcf9-07e4-053afe0532b0"]},"globalSwatchId":"6c8c2f79","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-11-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-plus","selectorGuids":["20abbf2b-3943-0e21-763c-15d2391bf0f7"]},"value":0,"unit":""}},{"id":"a-11-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-minus","selectorGuids":["853d2de8-b23a-7016-8db1-1c567609e573"]},"value":1,"unit":""}},{"id":"a-11-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-11-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"value":1,"unit":""}},{"id":"a-11-n-15","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":true,"id":"85df07a1-7236-d2b5-1050-277b67130b38"},"globalSwatchId":"e0ae2212","rValue":24,"bValue":27,"gValue":24,"aValue":1}},{"id":"a-11-n-16","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":true,"id":"85df07a1-7236-d2b5-1050-277b67130b38"},"globalSwatchId":"e0ae2212","rValue":24,"bValue":27,"gValue":24,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1675332161237},"a-12":{"id":"a-12","title":"Tab -> Close 3","actionItemGroups":[{"actionItems":[{"id":"a-12-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-content","selectorGuids":["907d6a27-b8c5-976c-1472-089e60733039"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-12-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-text-wrapper","selectorGuids":["d988001e-0e3d-dcf9-07e4-053afe0532b0"]},"globalSwatchId":"e0ae2212","rValue":24,"bValue":27,"gValue":24,"aValue":1}},{"id":"a-12-n-3","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":true,"id":"85df07a1-7236-d2b5-1050-277b67130b38"},"globalSwatchId":"d33d3cd0","rValue":236,"bValue":238,"gValue":236,"aValue":1}},{"id":"a-12-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":true,"id":"85df07a1-7236-d2b5-1050-277b67130b38"},"globalSwatchId":"6c8c2f79","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-12-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-minus","selectorGuids":["853d2de8-b23a-7016-8db1-1c567609e573"]},"value":0,"unit":""}},{"id":"a-12-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"yValue":10,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-12-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"value":0,"unit":""}},{"id":"a-12-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-plus","selectorGuids":["20abbf2b-3943-0e21-763c-15d2391bf0f7"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1675332161237},"a-14":{"id":"a-14","title":"Tab -> Open 4","actionItemGroups":[{"actionItems":[{"id":"a-14-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-content","selectorGuids":["907d6a27-b8c5-976c-1472-089e60733039"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-14-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-text-wrapper","selectorGuids":["d988001e-0e3d-dcf9-07e4-053afe0532b0"]},"globalSwatchId":"e0ae2212","rValue":24,"bValue":27,"gValue":24,"aValue":1}},{"id":"a-14-n-3","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"32022800-a7e9-260d-87d7-3331e6255058"},"globalSwatchId":"d33d3cd0","rValue":236,"bValue":238,"gValue":236,"aValue":1}},{"id":"a-14-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"32022800-a7e9-260d-87d7-3331e6255058"},"globalSwatchId":"6c8c2f79","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-14-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-minus","selectorGuids":["853d2de8-b23a-7016-8db1-1c567609e573"]},"value":0,"unit":""}},{"id":"a-14-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"yValue":10,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-14-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"value":0,"unit":""}},{"id":"a-14-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-plus","selectorGuids":["20abbf2b-3943-0e21-763c-15d2391bf0f7"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-14-n-9","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-content","selectorGuids":["907d6a27-b8c5-976c-1472-089e60733039"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-14-n-10","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-text-wrapper","selectorGuids":["d988001e-0e3d-dcf9-07e4-053afe0532b0"]},"globalSwatchId":"6c8c2f79","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-14-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-plus","selectorGuids":["20abbf2b-3943-0e21-763c-15d2391bf0f7"]},"value":0,"unit":""}},{"id":"a-14-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-minus","selectorGuids":["853d2de8-b23a-7016-8db1-1c567609e573"]},"value":1,"unit":""}},{"id":"a-14-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-14-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"value":1,"unit":""}},{"id":"a-14-n-15","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":true,"id":"32022800-a7e9-260d-87d7-3331e6255058"},"globalSwatchId":"e0ae2212","rValue":24,"bValue":27,"gValue":24,"aValue":1}},{"id":"a-14-n-16","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":true,"id":"32022800-a7e9-260d-87d7-3331e6255058"},"globalSwatchId":"e0ae2212","rValue":24,"bValue":27,"gValue":24,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1675332161237},"a-15":{"id":"a-15","title":"Tab -> Close 4","actionItemGroups":[{"actionItems":[{"id":"a-15-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-content","selectorGuids":["907d6a27-b8c5-976c-1472-089e60733039"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-15-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-text-wrapper","selectorGuids":["d988001e-0e3d-dcf9-07e4-053afe0532b0"]},"globalSwatchId":"e0ae2212","rValue":24,"bValue":27,"gValue":24,"aValue":1}},{"id":"a-15-n-3","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":true,"id":"32022800-a7e9-260d-87d7-3331e6255058"},"globalSwatchId":"d33d3cd0","rValue":236,"bValue":238,"gValue":236,"aValue":1}},{"id":"a-15-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":true,"id":"32022800-a7e9-260d-87d7-3331e6255058"},"globalSwatchId":"6c8c2f79","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-15-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-minus","selectorGuids":["853d2de8-b23a-7016-8db1-1c567609e573"]},"value":0,"unit":""}},{"id":"a-15-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"yValue":10,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-15-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"value":0,"unit":""}},{"id":"a-15-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-plus","selectorGuids":["20abbf2b-3943-0e21-763c-15d2391bf0f7"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1675332161237},"a-16":{"id":"a-16","title":"Scroll View -> 8","actionItemGroups":[{"actionItems":[{"id":"a-16-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"661cd83518b262df32b08884|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-16-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"661cd83518b262df32b08884|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-16-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"661cd83518b262df32b08884|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-16-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"661cd83518b262df32b08884|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-17":{"id":"a-17","title":"Tab -> Open 5","actionItemGroups":[{"actionItems":[{"id":"a-17-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-content","selectorGuids":["907d6a27-b8c5-976c-1472-089e60733039"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-17-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-text-wrapper","selectorGuids":["d988001e-0e3d-dcf9-07e4-053afe0532b0"]},"globalSwatchId":"e0ae2212","rValue":24,"bValue":27,"gValue":24,"aValue":1}},{"id":"a-17-n-3","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"949443cb-f923-55a8-7060-8d2b816c9b80"},"globalSwatchId":"d33d3cd0","rValue":236,"bValue":238,"gValue":236,"aValue":1}},{"id":"a-17-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"949443cb-f923-55a8-7060-8d2b816c9b80"},"globalSwatchId":"6c8c2f79","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-17-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-minus","selectorGuids":["853d2de8-b23a-7016-8db1-1c567609e573"]},"value":0,"unit":""}},{"id":"a-17-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"yValue":10,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-17-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"value":0,"unit":""}},{"id":"a-17-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-plus","selectorGuids":["20abbf2b-3943-0e21-763c-15d2391bf0f7"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-17-n-9","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-content","selectorGuids":["907d6a27-b8c5-976c-1472-089e60733039"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-17-n-10","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-text-wrapper","selectorGuids":["d988001e-0e3d-dcf9-07e4-053afe0532b0"]},"globalSwatchId":"6c8c2f79","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-17-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-plus","selectorGuids":["20abbf2b-3943-0e21-763c-15d2391bf0f7"]},"value":0,"unit":""}},{"id":"a-17-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-minus","selectorGuids":["853d2de8-b23a-7016-8db1-1c567609e573"]},"value":1,"unit":""}},{"id":"a-17-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-17-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"value":1,"unit":""}},{"id":"a-17-n-15","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":true,"id":"949443cb-f923-55a8-7060-8d2b816c9b80"},"globalSwatchId":"e0ae2212","rValue":24,"bValue":27,"gValue":24,"aValue":1}},{"id":"a-17-n-16","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":true,"id":"949443cb-f923-55a8-7060-8d2b816c9b80"},"globalSwatchId":"e0ae2212","rValue":24,"bValue":27,"gValue":24,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1675332161237},"a-18":{"id":"a-18","title":"Tab -> Close 5","actionItemGroups":[{"actionItems":[{"id":"a-18-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-content","selectorGuids":["907d6a27-b8c5-976c-1472-089e60733039"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-18-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-text-wrapper","selectorGuids":["d988001e-0e3d-dcf9-07e4-053afe0532b0"]},"globalSwatchId":"e0ae2212","rValue":24,"bValue":27,"gValue":24,"aValue":1}},{"id":"a-18-n-3","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":true,"id":"949443cb-f923-55a8-7060-8d2b816c9b80"},"globalSwatchId":"d33d3cd0","rValue":236,"bValue":238,"gValue":236,"aValue":1}},{"id":"a-18-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":true,"id":"949443cb-f923-55a8-7060-8d2b816c9b80"},"globalSwatchId":"6c8c2f79","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-18-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-minus","selectorGuids":["853d2de8-b23a-7016-8db1-1c567609e573"]},"value":0,"unit":""}},{"id":"a-18-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"yValue":10,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-18-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"value":0,"unit":""}},{"id":"a-18-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-plus","selectorGuids":["20abbf2b-3943-0e21-763c-15d2391bf0f7"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1675332161237},"a-19":{"id":"a-19","title":"Scroll View -> 9","actionItemGroups":[{"actionItems":[{"id":"a-19-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"661cd8f0f0d745b0ca18857d|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-19-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"661cd8f0f0d745b0ca18857d|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-19-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"661cd8f0f0d745b0ca18857d|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-19-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"661cd8f0f0d745b0ca18857d|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-20":{"id":"a-20","title":"Scroll View -> 10","actionItemGroups":[{"actionItems":[{"id":"a-20-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"661cdb0d18b262df32b308fe|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-20-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"661cdb0d18b262df32b308fe|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-20-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"661cdb0d18b262df32b308fe|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-20-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"661cdb0d18b262df32b308fe|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-21":{"id":"a-21","title":"Scroll View -> 11","actionItemGroups":[{"actionItems":[{"id":"a-21-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"661cdb0d18b262df32b308fe|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-21-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"661cdb0d18b262df32b308fe|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-21-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"661cdb0d18b262df32b308fe|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-21-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"661cdb0d18b262df32b308fe|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-22":{"id":"a-22","title":"Tab -> Open 6","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-content","selectorGuids":["907d6a27-b8c5-976c-1472-089e60733039"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-22-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-text-wrapper","selectorGuids":["d988001e-0e3d-dcf9-07e4-053afe0532b0"]},"globalSwatchId":"e0ae2212","rValue":24,"bValue":27,"gValue":24,"aValue":1}},{"id":"a-22-n-3","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"661cdbaf0a3cdc4105b3772d|c79062c3-b9ab-0d8f-f2ee-2da8d2b1642b"},"globalSwatchId":"d33d3cd0","rValue":236,"bValue":238,"gValue":236,"aValue":1}},{"id":"a-22-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"661cdbaf0a3cdc4105b3772d|c79062c3-b9ab-0d8f-f2ee-2da8d2b1642b"},"globalSwatchId":"6c8c2f79","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-22-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-minus","selectorGuids":["853d2de8-b23a-7016-8db1-1c567609e573"]},"value":0,"unit":""}},{"id":"a-22-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"yValue":10,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-22-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"value":0,"unit":""}},{"id":"a-22-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-plus","selectorGuids":["20abbf2b-3943-0e21-763c-15d2391bf0f7"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-22-n-9","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-content","selectorGuids":["907d6a27-b8c5-976c-1472-089e60733039"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-22-n-10","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-text-wrapper","selectorGuids":["d988001e-0e3d-dcf9-07e4-053afe0532b0"]},"globalSwatchId":"6c8c2f79","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-22-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-plus","selectorGuids":["20abbf2b-3943-0e21-763c-15d2391bf0f7"]},"value":0,"unit":""}},{"id":"a-22-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-minus","selectorGuids":["853d2de8-b23a-7016-8db1-1c567609e573"]},"value":1,"unit":""}},{"id":"a-22-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-22-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"value":1,"unit":""}},{"id":"a-22-n-15","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":true,"id":"661cdbaf0a3cdc4105b3772d|c79062c3-b9ab-0d8f-f2ee-2da8d2b1642b"},"globalSwatchId":"e0ae2212","rValue":24,"bValue":27,"gValue":24,"aValue":1}},{"id":"a-22-n-16","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":true,"id":"661cdbaf0a3cdc4105b3772d|c79062c3-b9ab-0d8f-f2ee-2da8d2b1642b"},"globalSwatchId":"e0ae2212","rValue":24,"bValue":27,"gValue":24,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1675332161237},"a-23":{"id":"a-23","title":"Tab -> Close 6","actionItemGroups":[{"actionItems":[{"id":"a-23-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-content","selectorGuids":["907d6a27-b8c5-976c-1472-089e60733039"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-23-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-text-wrapper","selectorGuids":["d988001e-0e3d-dcf9-07e4-053afe0532b0"]},"globalSwatchId":"e0ae2212","rValue":24,"bValue":27,"gValue":24,"aValue":1}},{"id":"a-23-n-3","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":true,"id":"661cdbaf0a3cdc4105b3772d|c79062c3-b9ab-0d8f-f2ee-2da8d2b1642b"},"globalSwatchId":"d33d3cd0","rValue":236,"bValue":238,"gValue":236,"aValue":1}},{"id":"a-23-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":true,"id":"661cdbaf0a3cdc4105b3772d|c79062c3-b9ab-0d8f-f2ee-2da8d2b1642b"},"globalSwatchId":"6c8c2f79","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-23-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-minus","selectorGuids":["853d2de8-b23a-7016-8db1-1c567609e573"]},"value":0,"unit":""}},{"id":"a-23-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"yValue":10,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-23-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"value":0,"unit":""}},{"id":"a-23-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-plus","selectorGuids":["20abbf2b-3943-0e21-763c-15d2391bf0f7"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1675332161237},"a-24":{"id":"a-24","title":"Scroll View -> 12","actionItemGroups":[{"actionItems":[{"id":"a-24-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"661cdbaf0a3cdc4105b3772d|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-24-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"661cdbaf0a3cdc4105b3772d|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-24-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"661cdbaf0a3cdc4105b3772d|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-24-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"661cdbaf0a3cdc4105b3772d|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-25":{"id":"a-25","title":"Tab -> Open 7","actionItemGroups":[{"actionItems":[{"id":"a-25-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-content","selectorGuids":["907d6a27-b8c5-976c-1472-089e60733039"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-25-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-text-wrapper","selectorGuids":["d988001e-0e3d-dcf9-07e4-053afe0532b0"]},"globalSwatchId":"e0ae2212","rValue":24,"bValue":27,"gValue":24,"aValue":1}},{"id":"a-25-n-3","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"661cdac19911086b904e9254|f9b17fb6-3cc1-019d-a636-591c60398069"},"globalSwatchId":"d33d3cd0","rValue":236,"bValue":238,"gValue":236,"aValue":1}},{"id":"a-25-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"661cdac19911086b904e9254|f9b17fb6-3cc1-019d-a636-591c60398069"},"globalSwatchId":"6c8c2f79","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-25-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-minus","selectorGuids":["853d2de8-b23a-7016-8db1-1c567609e573"]},"value":0,"unit":""}},{"id":"a-25-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"yValue":10,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-25-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"value":0,"unit":""}},{"id":"a-25-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-plus","selectorGuids":["20abbf2b-3943-0e21-763c-15d2391bf0f7"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-25-n-9","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-content","selectorGuids":["907d6a27-b8c5-976c-1472-089e60733039"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-25-n-10","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq","selectorGuids":["35bbe4fd-ee5c-e0d2-a56d-408f1b813289"]},"globalSwatchId":"--green--dark","rValue":0,"bValue":136,"gValue":120,"aValue":1}},{"id":"a-25-n-11","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-text-wrapper","selectorGuids":["d988001e-0e3d-dcf9-07e4-053afe0532b0"]},"globalSwatchId":"6c8c2f79","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-25-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-plus","selectorGuids":["20abbf2b-3943-0e21-763c-15d2391bf0f7"]},"value":0,"unit":""}},{"id":"a-25-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-minus","selectorGuids":["853d2de8-b23a-7016-8db1-1c567609e573"]},"value":1,"unit":""}},{"id":"a-25-n-14","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-25-n-15","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"value":1,"unit":""}},{"id":"a-25-n-16","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":true,"id":"661cdac19911086b904e9254|f9b17fb6-3cc1-019d-a636-591c60398069"},"globalSwatchId":"e0ae2212","rValue":24,"bValue":27,"gValue":24,"aValue":1}},{"id":"a-25-n-17","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":true,"id":"661cdac19911086b904e9254|f9b17fb6-3cc1-019d-a636-591c60398069"},"globalSwatchId":"e0ae2212","rValue":24,"bValue":27,"gValue":24,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1675332161237},"a-26":{"id":"a-26","title":"Tab -> Close 7","actionItemGroups":[{"actionItems":[{"id":"a-26-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-content","selectorGuids":["907d6a27-b8c5-976c-1472-089e60733039"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-26-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-text-wrapper","selectorGuids":["d988001e-0e3d-dcf9-07e4-053afe0532b0"]},"globalSwatchId":"e0ae2212","rValue":24,"bValue":27,"gValue":24,"aValue":1}},{"id":"a-26-n-3","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":true,"id":"661cdac19911086b904e9254|f9b17fb6-3cc1-019d-a636-591c60398069"},"globalSwatchId":"d33d3cd0","rValue":236,"bValue":238,"gValue":236,"aValue":1}},{"id":"a-26-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":true,"id":"661cdac19911086b904e9254|f9b17fb6-3cc1-019d-a636-591c60398069"},"globalSwatchId":"6c8c2f79","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-26-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-minus","selectorGuids":["853d2de8-b23a-7016-8db1-1c567609e573"]},"value":0,"unit":""}},{"id":"a-26-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"yValue":10,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-26-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"value":0,"unit":""}},{"id":"a-26-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-plus","selectorGuids":["20abbf2b-3943-0e21-763c-15d2391bf0f7"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1675332161237},"a-27":{"id":"a-27","title":"Scroll View -> 13","actionItemGroups":[{"actionItems":[{"id":"a-27-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"661cdac19911086b904e9254|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-27-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"661cdac19911086b904e9254|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-27-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"661cdac19911086b904e9254|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-27-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"661cdac19911086b904e9254|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-28":{"id":"a-28","title":"Scroll View -> 14","actionItemGroups":[{"actionItems":[{"id":"a-28-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"661cdac19911086b904e9254|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-28-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"661cdac19911086b904e9254|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-28-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"661cdac19911086b904e9254|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-28-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"661cdac19911086b904e9254|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-29":{"id":"a-29","title":"Scroll View -> 15","actionItemGroups":[{"actionItems":[{"id":"a-29-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"661cdac19911086b904e9254|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-29-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"661cdac19911086b904e9254|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-29-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"661cdac19911086b904e9254|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-29-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"661cdac19911086b904e9254|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-30":{"id":"a-30","title":"Scroll View -> 16","actionItemGroups":[{"actionItems":[{"id":"a-30-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"661cdd3a66929d356533a839|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-30-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"661cdd3a66929d356533a839|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-30-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"661cdd3a66929d356533a839|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-30-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"661cdd3a66929d356533a839|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-31":{"id":"a-31","title":"Scroll View -> 17","actionItemGroups":[{"actionItems":[{"id":"a-31-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"661cdd3a66929d356533a839|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-31-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"661cdd3a66929d356533a839|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-31-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"661cdd3a66929d356533a839|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-31-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"661cdd3a66929d356533a839|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-32":{"id":"a-32","title":"Tab -> Open 8","actionItemGroups":[{"actionItems":[{"id":"a-32-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-content","selectorGuids":["907d6a27-b8c5-976c-1472-089e60733039"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-32-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-text-wrapper","selectorGuids":["d988001e-0e3d-dcf9-07e4-053afe0532b0"]},"globalSwatchId":"e0ae2212","rValue":24,"bValue":27,"gValue":24,"aValue":1}},{"id":"a-32-n-3","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"661cdd3a66929d356533a839|f49bc1b8-4ba0-1dff-7d7c-7c3da8be622f"},"globalSwatchId":"d33d3cd0","rValue":236,"bValue":238,"gValue":236,"aValue":1}},{"id":"a-32-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"661cdd3a66929d356533a839|f49bc1b8-4ba0-1dff-7d7c-7c3da8be622f"},"globalSwatchId":"6c8c2f79","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-32-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-minus","selectorGuids":["853d2de8-b23a-7016-8db1-1c567609e573"]},"value":0,"unit":""}},{"id":"a-32-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"yValue":10,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-32-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"value":0,"unit":""}},{"id":"a-32-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-plus","selectorGuids":["20abbf2b-3943-0e21-763c-15d2391bf0f7"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-32-n-9","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-content","selectorGuids":["907d6a27-b8c5-976c-1472-089e60733039"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-32-n-10","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq","selectorGuids":["35bbe4fd-ee5c-e0d2-a56d-408f1b813289"]},"globalSwatchId":"--charcoal","rValue":44,"bValue":81,"gValue":64,"aValue":1}},{"id":"a-32-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-plus","selectorGuids":["20abbf2b-3943-0e21-763c-15d2391bf0f7"]},"value":0,"unit":""}},{"id":"a-32-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-minus","selectorGuids":["853d2de8-b23a-7016-8db1-1c567609e573"]},"value":1,"unit":""}},{"id":"a-32-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-32-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"value":1,"unit":""}},{"id":"a-32-n-15","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":true,"id":"661cdd3a66929d356533a839|f49bc1b8-4ba0-1dff-7d7c-7c3da8be622f"},"globalSwatchId":"--charcoal","rValue":44,"bValue":81,"gValue":64,"aValue":1}},{"id":"a-32-n-16","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":true,"id":"661cdd3a66929d356533a839|f49bc1b8-4ba0-1dff-7d7c-7c3da8be622f"},"globalSwatchId":"e0ae2212","rValue":24,"bValue":27,"gValue":24,"aValue":1}},{"id":"a-32-n-17","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-text-wrapper","selectorGuids":["d988001e-0e3d-dcf9-07e4-053afe0532b0"]},"globalSwatchId":"6c8c2f79","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1675332161237},"a-33":{"id":"a-33","title":"Tab -> Close 8","actionItemGroups":[{"actionItems":[{"id":"a-33-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-content","selectorGuids":["907d6a27-b8c5-976c-1472-089e60733039"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-33-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-text-wrapper","selectorGuids":["d988001e-0e3d-dcf9-07e4-053afe0532b0"]},"globalSwatchId":"e0ae2212","rValue":24,"bValue":27,"gValue":24,"aValue":1}},{"id":"a-33-n-3","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":true,"id":"661cdd3a66929d356533a839|f49bc1b8-4ba0-1dff-7d7c-7c3da8be622f"},"globalSwatchId":"d33d3cd0","rValue":236,"bValue":238,"gValue":236,"aValue":1}},{"id":"a-33-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":true,"id":"661cdd3a66929d356533a839|f49bc1b8-4ba0-1dff-7d7c-7c3da8be622f"},"globalSwatchId":"6c8c2f79","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-33-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-minus","selectorGuids":["853d2de8-b23a-7016-8db1-1c567609e573"]},"value":0,"unit":""}},{"id":"a-33-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"yValue":10,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-33-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab","selectorGuids":["dac8370c-3d23-c367-9cda-64a6e29db833"]},"value":0,"unit":""}},{"id":"a-33-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon-plus","selectorGuids":["20abbf2b-3943-0e21-763c-15d2391bf0f7"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1675332161237},"a-34":{"id":"a-34","title":"Scroll View -> 18","actionItemGroups":[{"actionItems":[{"id":"a-34-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"661cdd3a66929d356533a839|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-34-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"661cdd3a66929d356533a839|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-34-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"661cdd3a66929d356533a839|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-34-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"661cdd3a66929d356533a839|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-35":{"id":"a-35","title":"Scroll View -> 19","actionItemGroups":[{"actionItems":[{"id":"a-35-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"66273ad0a6ed0dae21842743|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-35-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"66273ad0a6ed0dae21842743|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-35-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"66273ad0a6ed0dae21842743|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-35-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"66273ad0a6ed0dae21842743|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-39":{"id":"a-39","title":"Scroll View -> 21","actionItemGroups":[{"actionItems":[{"id":"a-39-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"66164c8d5ac05f815b1829a9|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-39-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"66164c8d5ac05f815b1829a9|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-39-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"66164c8d5ac05f815b1829a9|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-39-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"66164c8d5ac05f815b1829a9|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}
);

