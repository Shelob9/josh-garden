(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"5dyF":function(e,t,n){e.exports=n("9CGT")},"9CGT":function(e,t,n){"use strict";var r=n("nxTg"),a=n("vdEC");t.__esModule=!0,t.default=void 0;var o=a(n("mXGw")),s=n("a4i1"),c=n("bBV7"),i=n("hY8M"),l={};function u(e,t,n,r){if(e&&(0,s.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),a=n&&n.pathname||"/",f=o.default.useMemo((function(){var t=(0,s.resolveHref)(a,e.href,!0),n=r(t,2),o=n[0],c=n[1];return{href:o,as:e.as?(0,s.resolveHref)(a,e.as):c||o}}),[a,e.href,e.as]),d=f.href,p=f.as,b=e.children,h=e.replace,v=e.shallow,y=e.scroll,m=e.locale;"string"===typeof b&&(b=o.default.createElement("a",null,b));var g=o.Children.only(b),O=g&&"object"===typeof g&&g.ref,C=(0,i.useIntersection)({rootMargin:"200px"}),T=r(C,2),N=T[0],j=T[1],I=o.default.useCallback((function(e){N(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,N]);(0,o.useEffect)((function(){var e=j&&t&&(0,s.isLocalURL)(d),r="undefined"!==typeof m?m:n&&n.locale,a=l[d+"%"+p+(r?"%"+r:"")];e&&!a&&u(n,d,p,{locale:r})}),[p,d,j,m,t,n]);var P={ref:I,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,c,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o,locale:i,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,n,d,p,h,v,y,m)},onMouseEnter:function(e){(0,s.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),u(n,d,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var w="undefined"!==typeof m?m:n&&n.locale,_=(0,s.getDomainLocale)(p,w,n&&n.locales,n&&n.domainLocales);P.href=_||(0,s.addBasePath)((0,s.addLocale)(p,w,n&&n.defaultLocale))}return o.default.cloneElement(g,P)};t.default=f},Fcif:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},PDtE:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"===typeof e||"number"===typeof e)a+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},YbmN:function(e,t,n){"use strict";var r=n("ntO7"),a=n("mXGw"),o=n("CiRD");t.a=function(){var e=Object(r.a)({}).createUrl,t=Object(a.useState)(!0),n=t[0],s=t[1],c=Object(a.useState)(!0),i=c[0],l=c[1],u=Object(o.a)({}).token,f=Object(a.useState)(void 0),d=f[0],p=f[1];return Object(a.useEffect)((function(){if(!u)return l(!1),void s(!1);fetch(e("/api/session"),{method:"POST",headers:{"content-type":"application/json",Authorization:u}}).then((function(e){return e.json()})).then((function(e){s(!1),e.session?l(!0):l(!1),e.user&&(e.user.name?p(e.user.name):p("Roy"))}))}),[u]),{isLoggedIn:i,userDisplayName:d,isSessionLoading:n}}},gdji:function(e,t,n){"use strict";n.d(t,"b",(function(){return M})),n.d(t,"e",(function(){return D})),n.d(t,"c",(function(){return A})),n.d(t,"d",(function(){return K})),n.d(t,"a",(function(){return G}));n("Fcif");var r=n("mXGw"),a=n.n(r),o=n("5dyF"),s=n.n(o);n("W0B4");function c(e){return function(t){return!!t.type&&t.type.tabsRole===e}}var i=c("Tab"),l=c("TabList"),u=c("TabPanel");function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){return r.Children.map(e,(function(e){return null===e?null:function(e){return i(e)||l(e)||u(e)}(e)?t(e):e.props&&e.props.children&&"object"===typeof e.props.children?Object(r.cloneElement)(e,d(d({},e.props),{},{children:b(e.props.children,t)})):e}))}function h(e,t){return r.Children.forEach(e,(function(e){null!==e&&(i(e)||u(e)?t(e):e.props&&e.props.children&&"object"===typeof e.props.children&&(l(e)&&t(e),h(e.props.children,t)))}))}var v,y=n("PDtE"),m=0;function g(){return"react-tabs-"+m++}function O(e){var t=0;return h(e,(function(e){i(e)&&t++})),t}function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function T(e){return e&&"getAttribute"in e}function N(e){return T(e)&&"tab"===e.getAttribute("role")}function j(e){return T(e)&&"true"===e.getAttribute("aria-disabled")}try{v=!("undefined"===typeof window||!window.document||!window.document.activeElement)}catch(U){v=!1}var I=function(e){var t,n;function o(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).tabNodes=[],t.handleKeyDown=function(e){var n=t.props.direction;if(t.isTabFromContainer(e.target)){var r=t.props.selectedIndex,a=!1,o=!1;32!==e.keyCode&&13!==e.keyCode||(a=!0,o=!1,t.handleClick(e)),37===e.keyCode||38===e.keyCode?(r="rtl"===n?t.getNextTab(r):t.getPrevTab(r),a=!0,o=!0):39===e.keyCode||40===e.keyCode?(r="rtl"===n?t.getPrevTab(r):t.getNextTab(r),a=!0,o=!0):35===e.keyCode?(r=t.getLastTab(),a=!0,o=!0):36===e.keyCode&&(r=t.getFirstTab(),a=!0,o=!0),a&&e.preventDefault(),o&&t.setSelected(r,e)}},t.handleClick=function(e){var n=e.target;do{if(t.isTabFromContainer(n)){if(j(n))return;var r=[].slice.call(n.parentNode.children).filter(N).indexOf(n);return void t.setSelected(r,e)}}while(null!=(n=n.parentNode))},t}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=o.prototype;return s.setSelected=function(e,t){if(!(e<0||e>=this.getTabsCount())){var n=this.props;(0,n.onSelect)(e,n.selectedIndex,t)}},s.getNextTab=function(e){for(var t=this.getTabsCount(),n=e+1;n<t;n++)if(!j(this.getTab(n)))return n;for(var r=0;r<e;r++)if(!j(this.getTab(r)))return r;return e},s.getPrevTab=function(e){for(var t=e;t--;)if(!j(this.getTab(t)))return t;for(t=this.getTabsCount();t-- >e;)if(!j(this.getTab(t)))return t;return e},s.getFirstTab=function(){for(var e=this.getTabsCount(),t=0;t<e;t++)if(!j(this.getTab(t)))return t;return null},s.getLastTab=function(){for(var e=this.getTabsCount();e--;)if(!j(this.getTab(e)))return e;return null},s.getTabsCount=function(){return O(this.props.children)},s.getPanelsCount=function(){return function(e){var t=0;return h(e,(function(e){u(e)&&t++})),t}(this.props.children)},s.getTab=function(e){return this.tabNodes["tabs-"+e]},s.getChildren=function(){var e=this,t=0,n=this.props,o=n.children,s=n.disabledTabClassName,c=n.focus,f=n.forceRenderTabPanel,d=n.selectedIndex,p=n.selectedTabClassName,h=n.selectedTabPanelClassName;this.tabIds=this.tabIds||[],this.panelIds=this.panelIds||[];for(var y=this.tabIds.length-this.getTabsCount();y++<0;)this.tabIds.push(g()),this.panelIds.push(g());return b(o,(function(n){var o=n;if(l(n)){var y=0,m=!1;v&&(m=a.a.Children.toArray(n.props.children).filter(i).some((function(t,n){return document.activeElement===e.getTab(n)}))),o=Object(r.cloneElement)(n,{children:b(n.props.children,(function(t){var n="tabs-"+y,a=d===y,o={tabRef:function(t){e.tabNodes[n]=t},id:e.tabIds[y],panelId:e.panelIds[y],selected:a,focus:a&&(c||m)};return p&&(o.selectedClassName=p),s&&(o.disabledClassName=s),y++,Object(r.cloneElement)(t,o)}))})}else if(u(n)){var g={id:e.panelIds[t],tabId:e.tabIds[t],selected:d===t};f&&(g.forceRender=f),h&&(g.selectedClassName=h),t++,o=Object(r.cloneElement)(n,g)}return o}))},s.isTabFromContainer=function(e){if(!N(e))return!1;var t=e.parentElement;do{if(t===this.node)return!0;if(t.getAttribute("data-tabs"))break;t=t.parentElement}while(t);return!1},s.render=function(){var e=this,t=this.props,n=(t.children,t.className),r=(t.disabledTabClassName,t.domRef),o=(t.focus,t.forceRenderTabPanel,t.onSelect,t.selectedIndex,t.selectedTabClassName,t.selectedTabPanelClassName,function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(t,["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName"]));return a.a.createElement("div",C({},o,{className:Object(y.a)(n),onClick:this.handleClick,onKeyDown:this.handleKeyDown,ref:function(t){e.node=t,r&&r(t)},"data-tabs":!0}),this.getChildren())},o}(r.Component);I.defaultProps={className:"react-tabs",focus:!1},I.propTypes={};var P=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).handleSelected=function(e,t,r){var a=n.props.onSelect,o=n.state.mode;if("function"!==typeof a||!1!==a(e,t,r)){var s={focus:"keydown"===r.type};1===o&&(s.selectedIndex=e),n.setState(s)}},n.state=r.copyPropsToState(n.props,{},t.defaultFocus),n}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.getDerivedStateFromProps=function(e,t){return r.copyPropsToState(e,t)},r.getModeFromProps=function(e){return null===e.selectedIndex?1:0},r.copyPropsToState=function(e,t,n){void 0===n&&(n=!1);var a={focus:n,mode:r.getModeFromProps(e)};if(1===a.mode){var o=O(e.children)-1,s=null;s=null!=t.selectedIndex?Math.min(t.selectedIndex,o):e.defaultIndex||0,a.selectedIndex=s}return a},r.prototype.render=function(){var e=this.props,t=e.children,n=(e.defaultIndex,e.defaultFocus,function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["children","defaultIndex","defaultFocus"])),r=this.state,o=r.focus,s=r.selectedIndex;return n.focus=o,n.onSelect=this.handleSelected,null!=s&&(n.selectedIndex=s),a.a.createElement(I,n,t)},r}(r.Component);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}P.defaultProps={defaultFocus:!1,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null},P.propTypes={},P.tabsRole="Tabs";var _=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.children,n=e.className,r=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["children","className"]);return a.a.createElement("ul",w({},r,{className:Object(y.a)(n),role:"tablist"}),t)},r}(r.Component);function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}_.defaultProps={className:"react-tabs__tab-list"},_.propTypes={},_.tabsRole="TabList";var E="react-tabs__tab",x=function(e){var t,n;function r(){return e.apply(this,arguments)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.componentDidMount=function(){this.checkFocus()},o.componentDidUpdate=function(){this.checkFocus()},o.checkFocus=function(){var e=this.props,t=e.selected,n=e.focus;t&&n&&this.node.focus()},o.render=function(){var e,t=this,n=this.props,r=n.children,o=n.className,s=n.disabled,c=n.disabledClassName,i=(n.focus,n.id),l=n.panelId,u=n.selected,f=n.selectedClassName,d=n.tabIndex,p=n.tabRef,b=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(n,["children","className","disabled","disabledClassName","focus","id","panelId","selected","selectedClassName","tabIndex","tabRef"]);return a.a.createElement("li",k({},b,{className:Object(y.a)(o,(e={},e[f]=u,e[c]=s,e)),ref:function(e){t.node=e,p&&p(e)},role:"tab",id:i,"aria-selected":u?"true":"false","aria-disabled":s?"true":"false","aria-controls":l,tabIndex:d||(u?"0":null)}),r)},r}(r.Component);function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}x.defaultProps={className:E,disabledClassName:E+"--disabled",focus:!1,id:null,panelId:null,selected:!1,selectedClassName:E+"--selected"},x.propTypes={},x.tabsRole="Tab";var S="react-tabs__tab-panel",F=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e,t=this.props,n=t.children,r=t.className,o=t.forceRender,s=t.id,c=t.selected,i=t.selectedClassName,l=t.tabId,u=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(t,["children","className","forceRender","id","selected","selectedClassName","tabId"]);return a.a.createElement("div",R({},u,{className:Object(y.a)(r,(e={},e[i]=c,e)),role:"tabpanel",id:s,"aria-labelledby":l}),o||c?n:null)},r}(r.Component);F.defaultProps={className:S,forceRender:!1,selectedClassName:"react-tabs__tab-panel--selected"},F.propTypes={},F.tabsRole="TabPanel";var L=a.a.createElement,M=function(e){var t=e.as,n=e.children,a=e.className,o=e.style,s=e.id;return Object(r.createElement)(t||"div",{className:a,style:o,id:s},n)},D=function(e){var t=e.tabs;return L(P,null,L(_,{className:"list-none"},t.map((function(e){var t=e.title,n=e.key;return L(x,{key:n},t)}))),t.map((function(e){var t=e.Render,n=e.key;return L(F,{key:n},L(t,null))})))},A=function(e){var t=e.level,n=e.children,a=e.className;return Object(r.createElement)("h".concat(t||2),{className:a},n)},K=function(e){var t=e.children,n=e.className;return L(M,{as:"p",className:n},t)},G=function(e){var t=e.children,n=e.href,r=e.className;return n.startsWith("http")?L("a",{className:r,href:n,target:"_blank",rel:"noopener noreferrer"},t):L(s.a,{href:n},L("a",{className:r},t))}},hY8M:function(e,t,n){"use strict";var r=n("nxTg"),a=n("63Ad");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,a=(0,o.useRef)(),l=(0,o.useState)(!1),u=r(l,2),f=u[0],d=u[1],p=(0,o.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),n||f||e&&e.tagName&&(a.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,s=r.elements;return s.set(e,t),o.observe(e),function(){s.delete(e),o.unobserve(e),0===s.size&&(o.disconnect(),i.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){c||f||(0,s.default)((function(){return d(!0)}))}),[f]),[p,f]};var o=n("mXGw"),s=a(n("pksY")),c="undefined"!==typeof IntersectionObserver;var i=new Map}}]);