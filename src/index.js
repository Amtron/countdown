!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e){t.exports=React},function(t,e,n){"use strict";var o=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},r=n(0),i=function(t){function e(){var e=t.apply(this,arguments)||this;return e.state={timeEnd:e.props.timeEnd/1e3,d:0,h:0,m:0,s:0},e}return o(e,t),e.prototype.componentDidMount=function(){this.timeCount=setInterval(this.count.bind(this),1e3)},e.prototype.count=function(){var t=this.state.timeEnd,e=this.props,n=e.options,o=e.callback;if(void 0!==n){var r=n.atTimeCallback;"undefined"!=typeof r&&r.time===1e3*t&&r.callback()}var i,a,s,c,u;if(t>=0){u=t,c=Math.floor(u%60),u/=60,s=Math.floor(u%60),u/=60,a=Math.floor(u%24),u/=24,i=Math.floor(u);var p=t-1;this.setState({d:i,h:a,m:s,s:c,timeEnd:p})}else clearInterval(this.timeCount),"function"==typeof o&&o()},e.prototype.componentWillUnmount=function(){clearInterval(this.timeCount)},e.prototype.render=function(){var t,e,n,o,i=this.state,a=i.d,s=i.h,c=i.m,u=i.s,p=this.props,l=p.className,f=p.style,d=p.options;t=u<10?"0"+u:u,e=c<10?"0"+c:c,n=s<10?"0"+s:s,o=a<10?"0"+a:a;var h;if(void 0!==a&&void 0!==d)switch(d.model){case"standard":h=n+" : "+e+" : "+t;break;case"text":h=a>0?o+"d "+n+"h "+e+"m":n+"h "+e+"m "+t+"s"}return r.createElement("span",{className:l,style:f},h)},e}(r.Component);i.defaultProps={options:{model:"standard"}},Object.defineProperty(e,"__esModule",{value:!0}),e.default=i}]);