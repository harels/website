(self.webpackChunkmarquez_website=self.webpackChunkmarquez_website||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,s,l,u;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(s=c;0!=s--;)if(!i(e[s],a[s]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!a.has(s.value[0]))return!1;for(u=e.entries();!(s=u.next()).done;)if(!i(s.value[1],a.get(s.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!a.has(s.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(s=c;0!=s--;)if(e[s]!==a[s])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof a.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof a.toString)return e.toString()===a.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(a,l[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!e.$$typeof)&&!i(e[l[s]],a[l[s]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),f.canUseDOM?t(s):n&&(s=n(s))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},1598:function(e,t,n){"use strict";n.d(t,{Z:function(){return Je}});var r,o,i,a,c=n(7294),s=n(5697),l=n.n(s),u=n(4839),f=n.n(u),p=n(2993),d=n.n(p),h=n(6494),m=n.n(h),v="bodyAttributes",y="htmlAttributes",g="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(b).map((function(e){return b[e]})),"charset"),E="cssText",T="href",O="http-equiv",S="innerHTML",C="itemprop",k="name",j="property",A="rel",x="src",P="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",M="defer",I="encodeSpecialCharacters",D="onChangeClientState",R="titleTemplate",z=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),_=[b.NOSCRIPT,b.SCRIPT,b.STYLE],B="data-react-helmet",U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},H=function(e){var t=$(e,b.TITLE),n=$(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=$(e,L);return t||r||void 0},X=function(e){return $(e,D)||function(){}},Y=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return q({},e,t)}),{})},V=function(e,t){return t.filter((function(e){return void 0!==e[b.BASE]})).map((function(e){return e[b.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},Z=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&te("Helmet: "+e+' should be of type "Array". Instead found type "'+U(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],s=c.toLowerCase();-1===t.indexOf(s)||n===A&&"canonical"===e[n].toLowerCase()||s===A&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==S&&c!==E&&c!==C||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],s=m()({},r[c],o[c]);r[c]=s}return e}),[]).reverse()},$=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},G=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){G(e)}),0)}),J=function(e){return clearTimeout(e)},Q="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||G:n.g.requestAnimationFrame||G,ee="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||J:n.g.cancelAnimationFrame||J,te=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ne=null,re=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,f=e.title,p=e.titleAttributes;ae(b.BODY,r),ae(b.HTML,o),ie(f,p);var d={baseTag:ce(b.BASE,n),linkTags:ce(b.LINK,i),metaTags:ce(b.META,a),noscriptTags:ce(b.NOSCRIPT,c),scriptTags:ce(b.SCRIPT,l),styleTags:ce(b.STYLE,u)},h={},m={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(m[e]=d[e].oldTags)})),t&&t(),s(e,h,m)},oe=function(e){return Array.isArray(e)?e.join(""):e},ie=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ae(b.TITLE,t)},ae=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(B),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var s=a[c],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===o.indexOf(s)&&o.push(s);var u=i.indexOf(s);-1!==u&&i.splice(u,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(B):n.getAttribute(B)!==a.join(",")&&n.setAttribute(B,a.join(","))}},ce=function(e,t){var n=document.head||document.querySelector(b.HEAD),r=n.querySelectorAll(e+"["+B+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===S)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(B,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},le=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[N[n]||n]=e[n],t}),t)},ue=function(e,t,n){switch(e){case b.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[B]=!0,o=le(n,r),[c.createElement(b.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=se(n),i=oe(t);return o?"<"+e+" "+B+'="true" '+o+">"+K(i,r)+"</"+e+">":"<"+e+" "+B+'="true">'+K(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case v:case y:return{toComponent:function(){return le(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[B]=!0,r);return Object.keys(t).forEach((function(e){var n=N[e]||e;if(n===S||n===E){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===S||e===E)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===_.indexOf(e);return t+"<"+e+" "+B+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},fe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,f=void 0===u?"":u,p=e.titleAttributes;return{base:ue(b.BASE,t,r),bodyAttributes:ue(v,n,r),htmlAttributes:ue(y,o,r),link:ue(b.LINK,i,r),meta:ue(b.META,a,r),noscript:ue(b.NOSCRIPT,c,r),script:ue(b.SCRIPT,s,r),style:ue(b.STYLE,l,r),title:ue(b.TITLE,{title:f,titleAttributes:p},r)}},pe=f()((function(e){return{baseTag:V([T,P],e),bodyAttributes:Y(v,e),defer:$(e,M),encode:$(e,I),htmlAttributes:Y(y,e),linkTags:Z(b.LINK,[A,T],e),metaTags:Z(b.META,[k,w,O,j,C],e),noscriptTags:Z(b.NOSCRIPT,[S],e),onChangeClientState:X(e),scriptTags:Z(b.SCRIPT,[x,S],e),styleTags:Z(b.STYLE,[E],e),title:H(e),titleAttributes:Y(g,e)}}),(function(e){ne&&ee(ne),e.defer?ne=Q((function(){re(e,(function(){ne=null}))})):(re(e),ne=null)}),fe)((function(){return null})),de=(o=pe,a=i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:t};case b.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return q({},r,((t={})[n.type]=[].concat(r[n.type]||[],[q({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case b.TITLE:return q({},o,((t={})[r.type]=a,t.titleAttributes=q({},i),t));case b.BODY:return q({},o,{bodyAttributes:q({},i)});case b.HTML:return q({},o,{htmlAttributes:q({},i)})}return q({},o,((n={})[r.type]=q({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=q({},t);return Object.keys(e).forEach((function(t){var r;n=q({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[z[n]||n]=e[n],t}),t)}(F(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=F(e,["children"]),r=q({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},W(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);de.renderStatic=de.rewind;var he=de,me=n(5444);function ve(){return ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ve.apply(this,arguments)}function ye(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var ge=(0,c.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,i=void 0===o?24:o,a=ye(e,["color","size"]);return c.createElement("svg",ve({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),c.createElement("circle",{cx:"12",cy:"12",r:"5"}),c.createElement("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),c.createElement("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),c.createElement("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),c.createElement("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),c.createElement("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),c.createElement("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),c.createElement("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),c.createElement("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"}))}));ge.displayName="Sun";var be=ge;function we(){return we=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},we.apply(this,arguments)}function Ee(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var Te=(0,c.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,i=void 0===o?24:o,a=Ee(e,["color","size"]);return c.createElement("svg",we({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),c.createElement("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}))}));Te.displayName="Moon";var Oe=Te,Se=n(1319),Ce=function(e){var t=e.data,n=e.active,r=e.liClassName;return c.createElement("li",{className:r+" "+(n?"active":"")},c.createElement(me.rU,{to:t.url,title:t.name,className:"navigation-list-link"},c.createElement("span",null,t.name)))},ke=function(e){var t=e.name,n=e.className,r=void 0===n?"":n,o=e.liClassName,i=void 0===o?"":o,a=e.current,s=e.withThemeSwitch,l=void 0===s||s,u=e.currentTheme,f=e.switchTheme,p=e.themes,d=(0,me.K2)("1139857438").site.siteMetadata.navLinks.map((function(e,n){return c.createElement(Ce,{key:"navigation-"+t+"-"+n,data:e,active:"/"+a===e.url,liClassName:i})}));if(l){var h=p.map((function(e,n){var r=n!==p.length-1?n+1:0;return c.createElement("button",{className:"navigation-list-btn "+(n===u?"navigation-list-btn-theme":"navigation-list-btn-no-theme"),title:"Switch to "+p[r].label,key:t+"-theme-switch-btn-"+e.name,onClick:f},e.icon)}));d.push(c.createElement("li",{className:"theme-switcher",key:t+"-theme-switcher relative"},h))}return c.createElement("ul",{className:r},d)};function je(){return je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},je.apply(this,arguments)}function Ae(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var xe=(0,c.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,i=void 0===o?24:o,a=Ae(e,["color","size"]);return c.createElement("svg",je({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),c.createElement("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),c.createElement("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),c.createElement("line",{x1:"3",y1:"18",x2:"21",y2:"18"}))}));xe.displayName="Menu";var Pe=xe,Ne=n(4942),Le=n(4578);function Me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Me(Object(n),!0).forEach((function(t){(0,Ne.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Me(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var De=function(e){function t(t){var n;if((n=e.call(this,t)||this).touchStart=function(e){var t={touchX:e.touches[0].pageX,lastTouch:e.touches[0].pageX,touchTime:(new Date).getTime()};!n.state.sidebarOpen&&t.touchX<n.settings.sensitivity?(t.opening=!0,t.touchDown=!0):n.state.sidebarOpen&&(t.opening=!1,t.touchDown=!0),n.setState(t)},n.touchMove=function(e){if(n.state.touchDown)if(n.state.opening){n.sidebarParent.current.style.transitionDuration="0s",n.sidebarOverlay.current.style.transitionDuration="0s";var t=e.touches[0].pageX/(.7*n.state.screenWidth)*100;t=Math.min(100,t),n.changeSidebarState(100===t?"open":0===t?"close":"",{progress:t,lastTouch:e.touches[0].pageX,sidebarOpen:100===t||0!==t&&n.state.progress})}else{var r=n.state.touchX-e.touches[0].pageX;if(r>0){n.sidebarParent.current.style.transitionDuration="0s",n.sidebarOverlay.current.style.transitionDuration="0s";var o=100-Math.min(100,r/2);n.changeSidebarState(100===o?"open":0===o?"close":"",{progress:o,lastTouch:e.touches[0].pageX,sidebarOpen:100===o||0!==o&&n.state.progress})}}},n.touchEnd=function(e){if(n.state.touchDown&&(n.state.progress>80?n.openSidebar():n.closeSidebar(),n.setState({touchDown:!1})),n.state.lastTouch>n.state.touchX){var t=(new Date).getTime()-n.state.touchTime;(n.state.lastTouch-n.state.touchX)/t>.6&&n.openSidebar()}},n.changeSidebarState=function(e,t){void 0===t&&(t={}),"open"===e?(n.setState(Ie({progress:100,sidebarOpen:!0},t)),n.props.onChange&&n.props.onChange(!0)):"close"===e?(n.setState(Ie({progress:0,sidebarOpen:!1},t)),n.props.onChange&&n.props.onChange(!1)):n.setState(t)},n.openSidebar=function(){var e=100-n.state.progress;n.sidebarParent.current.style.transitionDuration=e/500+"s",n.sidebarOverlay.current.style.transitionDuration=e/500+"s",n.changeSidebarState("open")},n.closeSidebar=function(){var e=n.state.progress;n.sidebarParent.current.style.transitionDuration=e/250+"s",n.sidebarOverlay.current.style.transitionDuration=e/250+"s",n.changeSidebarState("close")},n.resizeWindow=function(){n.setState({screenWidth:window.screen.availWidth})},n.state={touchDown:!1,sidebarOpen:!1,progress:0,touchX:0,touchTime:0,lastTouch:0,transitionTime:0},n.sidebarParent=c.createRef(),n.sidebarOverlay=c.createRef(),n.open=!1,n.settings={sensitivity:50,overlayColor:"#000",sidebarWidth:"70%",swipeDistance:40},n.props.settings)for(var r in n.props.settings)n.props.settings.hasOwnProperty(r)&&n.settings.hasOwnProperty(r)&&(n.settings[r]=n.props.settings[r]);return n}(0,Le.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("touchstart",this.touchStart),window.addEventListener("touchend",this.touchEnd),window.addEventListener("touchmove",this.touchMove),window.addEventListener("resize",this.resizeWindow),this.setState({screenWidth:window.screen.availWidth})},n.componentDidUpdate=function(){this.props.open?this.state.sidebarOpen||this.openSidebar():!1===this.props.open&&this.state.sidebarOpen&&this.closeSidebar(),this.open=this.props.open},n.componentWillUnmount=function(){window.removeEventListener("touchstart",this.touchStart),window.removeEventListener("touchend",this.touchEnd),window.removeEventListener("touchmove",this.touchMove),window.removeEventListener("resize",this.resizeWindow)},n.render=function(){var e=this;return c.createElement("div",{className:"r-swipe-sidebar-container"},c.createElement("div",{className:"r-swipe-sidebar",ref:this.sidebarParent,style:{position:"fixed",height:"100%",top:"0",left:this.state.progress-100+"%",width:this.settings.sidebarWidth,zIndex:"9999",transitionProperty:"left",transitionDuration:this.state.transitionTime+"s",transitionTimingFunction:"linear",transform:"translate3d(0,0,0)"}},this.props.children),c.createElement("div",{className:"r-swipe-sidebar-overlay",ref:this.sidebarOverlay,style:{position:"fixed",top:0,bottom:0,left:0===this.state.progress?"-100%":"0%",width:"100%",height:"100%",background:"#000",zIndex:9998,transitionProperty:"opacity",transitionDuration:"0s",opacity:"`${this.state.progress/200}`"},role:"button",tabIndex:-1,onClick:this.closeSidebar,onKeyPress:function(t){27===t.which&&e.closeSidebar()}}))},t}(c.Component),Re=function(e){var t=e.navPlaceholder,n=e.location,r=e.currentTheme,o=e.switchTheme,i=e.themes,a=e.allowThemeSwitch,s=void 0===a||a,l=(e.front,n.pathname.split("/")[1]),u=(0,me.K2)("1946588481"),f=(0,c.useRef)(null),p=(0,c.useState)(!1),d=p[0],h=p[1],m=(0,c.useState)(0),v=m[0],y=m[1],g=(0,c.useState)(!1),b=g[0],w=g[1];return(0,c.useEffect)((function(){var e=function(){document.documentElement.scrollTop>50&&!d?h(!0):document.documentElement.scrollTop<=50&&d&&h(!1)};return window.addEventListener("scroll",e),y(f.current.getBoundingClientRect().height),function(){window.removeEventListener("scroll",e)}}),[d]),c.createElement(c.Fragment,null,c.createElement("div",{className:"navigation-outer-div nav "+(d?"navigation-outer-div-scrolled":"navigation-outer-div-unscrolled"),ref:f},c.createElement("button",{className:"navigation-btn",onClick:function(){w(!0)}},c.createElement(Pe,null)),c.createElement(De,{open:b,onChange:w},c.createElement("div",{className:"navigation-sidebar-outer-div"},c.createElement("div",{className:"navigation-sidebar-inner-div-1"},c.createElement(me.rU,{to:"/",title:u.site.siteMetadata.title,className:"navigation-sidebar-link"},c.createElement(Se.T,{className:"navigation-sidebar-link-logo "+(d?"navigation-sidebar-link-logo-scrolled":"navigation-sidebar-link-logo-unscrolled")}))),c.createElement("div",{className:"navigation-sidebar-inner-div-2"},c.createElement(ke,{name:"sidebar-nav",current:l,currentTheme:r,switchTheme:o,themes:i,withThemeSwitch:s,liClassName:"navigation-sidebar-inner-div-2-list"})))),c.createElement(me.rU,{to:"/",title:u.site.siteMetadata.title},c.createElement(Se.T,{className:"navigation-link-logo "+(d?"navigation-link-logo-scrolled":"navigation-link-logo-unscrolled")})),c.createElement("div",{className:"navigation-inner-div-1"},c.createElement(ke,{name:"navbar",className:"navigation-navbar",current:l,currentTheme:r,switchTheme:o,themes:i,withThemeSwitch:s})),c.createElement("div",{className:"navigation-inner-div-2"})),t&&c.createElement("div",{style:{height:v+"px"}}))};function ze(){var e=(0,me.K2)("273606341").site.siteMetadata.footerLinks.map((function(e,t){return c.createElement(_e,{data:e,key:"footer-n-l-"+t})}));return c.createElement("footer",{className:"footer-outer-div"},c.createElement("div",{className:"footer-inner-div"},c.createElement("div",{className:"footerlinks"},c.createElement("ul",null,e)),c.createElement("p",{className:"footer-copyright"},"Copyright © ",(new Date).getFullYear()," The Linux Foundation",c.createElement("sup",null,"®"),". All rights reserved.")))}var _e=function(e){var t=e.data;return c.createElement("li",{className:"footerlink-list"},c.createElement(me.rU,{to:t.url,title:t.name,rel:t.rel},c.createElement("span",null,t.name)))};function Be(e){var t=e.description,n=e.lang,r=e.meta,o=e.title,i=e.image,a=(0,me.K2)("2418326273").site,s=t||a.siteMetadata.description,l=i||a.siteMetadata.ogImage;return c.createElement(de,{htmlAttributes:{lang:n},title:o,titleTemplate:o===a.siteMetadata.title?o:"%s | "+a.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:a.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s},{property:"og:image",content:l}].concat(r)})}Be.defaultProps={lang:"en",meta:[],description:""};var Ue=Be,We=function(e){var t=e.onChange;return c.createElement("div",{className:"cookie-div"},c.createElement("div",{className:"cookie-inner-div"},c.createElement("p",{className:"cookie-p"},"This website uses cookies to ensure you get the best experience on our website."),c.createElement(me.rU,{to:"/privacy-policy",className:"cookie-link"},"Privacy policy")),c.createElement("button",{className:"cookie-btn",onClick:t},"Accept"))};function qe(e){if("object"!=typeof e)return e;var t,n,r=Object.prototype.toString.call(e);if("[object Object]"===r){if(e.constructor!==Object&&"function"==typeof e.constructor)for(t in n=new e.constructor,e)n.hasOwnProperty(t)&&n[t]!==e[t]&&(n[t]=qe(e[t]));else for(t in n={},e)"__proto__"===t?Object.defineProperty(n,t,{value:qe(e[t]),configurable:!0,enumerable:!0,writable:!0}):n[t]=qe(e[t]);return n}if("[object Array]"===r){for(t=e.length,n=Array(t);t--;)n[t]=qe(e[t]);return n}return"[object Set]"===r?(n=new Set,e.forEach((function(e){n.add(qe(e))})),n):"[object Map]"===r?(n=new Map,e.forEach((function(e,t){n.set(qe(t),qe(e))})),n):"[object Date]"===r?new Date(+e):"[object RegExp]"===r?((n=new RegExp(e.source,e.flags)).lastIndex=e.lastIndex,n):"Array]"===r.slice(-6)?new e.constructor(e):e}function Fe(e,t,n,r){var o,i=e[r++];return i?null==(o=i(n,t))?Fe(e,t,n,r):"function"==typeof o.then?o.then((function(n){return Fe(e,t,n,r)})):("object"==typeof o&&(n=o),Fe(e,t,n,r)):Promise.resolve(n)}var Ke,He,Xe,Ye,Ve,Ze,$e=(Xe={},Ye={},Ve=Ke||{},Ze=function(e,t){e.splice(e.indexOf(t)>>>0,1)},He={get state(){return qe(Ve)},on:function(e,t){return Xe[e]=(Xe[e]||[]).concat(t),function(){return Ze(Xe[e],t)}},set:function(e,t){Fe((Ye["*"]||[]).concat(t&&Ye[t]||[]),Ve,qe(Ve=e),0)},listen:function(e,t){return"function"==typeof e&&(t=e,e="*"),Ye[e]=(Ye[e]||[]).concat(t),function(){return Ze(Ye[e],t)}},dispatch:function(e,t){return Fe(Xe[e]||[],t,qe(Ve),0).then((function(t){return He.set(t,e)}))}}),Ge=$e,Je=function(e){var t=e.children,n=e.front,r=e.seo,o=e.navPlaceholder,i=void 0===o||o,a=e.location,s=(0,me.K2)("3067102388"),l=[{name:"theme-light",label:"Light Theme",icon:c.createElement(be,null)},{name:"theme-dark",label:"Dark Theme",icon:c.createElement(Oe,null)}],u=s.site.siteMetadata.darkmode,f=(s.site.siteMetadata.cookiePolicy,(0,c.useState)(u?1:0)),p=f[0],d=f[1],h=(0,c.useState)(!1),m=h[0],v=h[1];(0,c.useEffect)((function(){if(localStorage.getItem("theme")){var e=Number(localStorage.getItem("theme"));d(e)}localStorage.getItem("cookie-accept")&&v(!0)}),[]);return c.createElement(c.Fragment,null,c.createElement(Qe,{data:s}),c.createElement(Ue,r),c.createElement("div",{className:"wrapper "+l[p].name},c.createElement("div",{className:"layout-navbar-inner-div"},c.createElement(Re,{front:n,navPlaceholder:i,location:a,currentTheme:p,switchTheme:function(){var e=p!==l.length-1?p+1:0;d(e),localStorage.setItem("theme",""+e),Ge.dispatch("theme:change",void 0)},themes:l,allowThemeSwitch:s.site.siteMetadata.switchTheme}),t,c.createElement(ze,null)),s.site.siteMetadata.cookiePolicy&&!m&&c.createElement(We,{onChange:function(e){e.preventDefault(),localStorage.setItem("cookie-accept","1"),v(!0)}})))},Qe=function(e){var t=e.data;return c.createElement(he,null,c.createElement("link",{rel:"icon",href:t.site.siteMetadata.icon,type:"image/png"}),c.createElement("script",{defer:!0,"data-domain":"marquezproject.ai",src:"https://plausible.io/js/script.outbound-links.js"}),c.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Karla&display=swap",rel:"stylesheet"}))}},1319:function(e,t,n){"use strict";n.d(t,{T:function(){return i},r:function(){return a}});var r=n(7294),o=n(5444),i=function(e){var t=e.className,n=void 0===t?"logo":t,i=(0,o.K2)("2083862410");return r.createElement("img",{src:i.site.siteMetadata.logo,alt:i.site.siteMetadata.title+" - logo",className:n})},a=function(e){return e.to?/^\/(?!\/)/.test(e.to)?r.createElement(o.rU,e,e.children):r.createElement("a",{href:e.to},e.children):r.createElement("button",e)}}}]);
//# sourceMappingURL=commons-cc4ad4c3703503ddcdec.js.map