
          window.__NEXT_REGISTER_PAGE('/sliders', function() {
            var comp = module.exports=webpackJsonp([5],{117:function(e,n,t){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen,isInWorker:!r};e.exports=i},118:function(e,n,t){"use strict";var r=t(73),i={listen:function(e,n,t){return e.addEventListener?(e.addEventListener(n,t,!1),{remove:function(){e.removeEventListener(n,t,!1)}}):e.attachEvent?(e.attachEvent("on"+n,t),{remove:function(){e.detachEvent("on"+n,t)}}):void 0},capture:function(e,n,t){return e.addEventListener?(e.addEventListener(n,t,!0),{remove:function(){e.removeEventListener(n,t,!0)}}):{remove:r}},registerDefault:function(){}};e.exports=i},119:function(e,n,t){"use strict";function r(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(n){return e.body}}e.exports=r},120:function(e,n,t){"use strict";function r(e,n){return e===n?0!==e||0!==n||1/e==1/n:e!==e&&n!==n}function i(e,n){if(r(e,n))return!0;if("object"!=typeof e||null===e||"object"!=typeof n||null===n)return!1;var t=Object.keys(e),i=Object.keys(n);if(t.length!==i.length)return!1;for(var o=0;o<t.length;o++)if(!a.call(n,t[o])||!r(e[t[o]],n[t[o]]))return!1;return!0}var a=Object.prototype.hasOwnProperty;e.exports=i},121:function(e,n,t){"use strict";function r(e,n){return!(!e||!n)&&(e===n||!i(e)&&(i(n)?r(e,n.parentNode):"contains"in e?e.contains(n):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(n))))}var i=t(91);e.exports=r},122:function(e,n,t){"use strict";function r(e){try{e.focus()}catch(e){}}e.exports=r},279:function(e,n,t){e.exports=t(280)},280:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(2),a=r(i),o=t(27),l=r(o),u=t(9),s=r(u),d=t(5),p=r(d),c=t(6),f=r(c),x=t(10),h=r(x),m=t(11),v=r(m),b=t(0),g=r(b),y=t(1),_=r(y),w=t(40),k=r(w),E=t(281),M=t(66),O=r(M),P=(0,a.default)(["\n  & .styled-material-thumb {\n    background: #fff;\n  }\n"],["\n  & .styled-material-thumb {\n    background: #fff;\n  }\n"]),C=(0,a.default)(["\n"],["\n"]),N=function(e){function n(){var e,t,r,i;(0,p.default)(this,n);for(var a=arguments.length,o=Array(a),l=0;l<a;l++)o[l]=arguments[l];return t=r=(0,h.default)(this,(e=n.__proto__||(0,s.default)(n)).call.apply(e,[this].concat(o))),r.state={value:r.props.initialValue},r.handleValueChange=function(e){return r.setState({value:e})},i=t,(0,h.default)(r,i)}return(0,v.default)(n,e),(0,f.default)(n,[{key:"render",value:function(){return g.default.createElement("div",null,g.default.createElement(E.Slider,(0,l.default)({value:this.state.value,handleValueChange:this.handleValueChange},this.props)),this.state.value)}}]),n}(b.PureComponent),j=(E.Slider.extend(P),function(e){function n(){var e,t,r,i;(0,p.default)(this,n);for(var a=arguments.length,o=Array(a),l=0;l<a;l++)o[l]=arguments[l];return t=r=(0,h.default)(this,(e=n.__proto__||(0,s.default)(n)).call.apply(e,[this].concat(o))),r.state={disabled:!1},r.toggleDisabled=function(){r.setState(function(e){return{disabled:!e.disabled}})},i=t,(0,h.default)(r,i)}return(0,v.default)(n,e),(0,f.default)(n,[{key:"render",value:function(){var e=this.state.disabled;return g.default.createElement(k.default,{theme:{primary:"#03A9F4"}},g.default.createElement("div",{className:this.props.className},g.default.createElement("div",null,g.default.createElement("h1",null,"Sliders"),g.default.createElement("div",null,g.default.createElement("h2",null,"Uncontrolled Sliders"),g.default.createElement("div",null,g.default.createElement("h3",null,"Continuous"),g.default.createElement("div",{className:this.props.className,style:{width:"250px"}},g.default.createElement(E.Slider,{continuous:!0,disabled:e}))),g.default.createElement("div",null,g.default.createElement("h3",null,"Discrete"),g.default.createElement("div",{className:this.props.className,style:{width:"250px"}},g.default.createElement(E.Slider,{min:0,max:10,step:2,initialValue:5,disabled:e})))),g.default.createElement("div",null,g.default.createElement("h2",null,"Controlled Sliders"),g.default.createElement("div",null,g.default.createElement("h3",null,"Continuous"),g.default.createElement("div",{className:this.props.className,style:{width:"250px",marginLeft:400}},g.default.createElement(N,{min:-40,max:80,step:4,initialValue:-4,continuous:!0,disabled:e}))),g.default.createElement("div",null,g.default.createElement("h3",null,"Discrete"),g.default.createElement("div",{className:this.props.className,style:{width:"75%"}},g.default.createElement(N,{min:-40,max:40,step:4,initialValue:-4,disabled:e}))))),g.default.createElement("div",null,g.default.createElement("h1",null,"Options"),g.default.createElement(O.default,{onClick:this.toggleDisabled},"Click me to "+(e?"enable":"disable")+" sliders"))))}}]),n}(b.PureComponent)),D=(0,_.default)(j)(C);n.default=D},281:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(282);Object.defineProperty(n,"Slider",{enumerable:!0,get:function(){return r(i).default}})},282:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(2),a=r(i),o=t(9),l=r(o),u=t(5),s=r(u),d=t(6),p=r(d),c=t(10),f=r(c),x=t(11),h=r(x),m=t(0),v=r(m),b=t(1),g=r(b),y=t(283),_=r(y),w=(0,a.default)(["\n"],["\n"]),k=function(e,n){return Math.round((e+n)/2)},E=function(e,n,t){return"number"==typeof e&&e>=n&&e<=t},M=0,O=100,P=1,C=function(e){function n(e){(0,s.default)(this,n);var t=(0,f.default)(this,(n.__proto__||(0,l.default)(n)).call(this,e));N.call(t);var r=e.min,i=e.max,a=e.initialValue,o=e.step,u="number"==typeof r?r:M,d="number"==typeof i?i:O;if(d<=u)throw new Error("Slider minimum "+u+" exceeds maximum "+d);var p="number"==typeof a?a:k(u,d);if(p<u)throw new Error("Slider value "+p+" is less than minimum "+u);if(p>d)throw new Error("Slider value "+p+" exceeds maximum "+d);if(0===o)throw new Error("Slider step cannot be 0");var c=o||P;if("number"!=typeof c)throw new Error("Provided step "+o+" is not a number");return t.state={min:u,max:d,step:Math.abs(c),value:p},t}return(0,h.default)(n,e),(0,p.default)(n,[{key:"render",value:function(){var e=this.state,n=e.min,t=e.max,r=e.step,i=this.props.continuous,a=this.props.value,o=this.state.value,l=E(a)?a:o;return v.default.createElement("div",{className:this.props.className+" smc-slider"},v.default.createElement(_.default,{value:l,min:n,max:t,step:r,continuous:Boolean(i),increment:this.increment,decrement:this.decrement,setValue:this.setValue,disabled:this.props.disabled}))}}]),n}(m.PureComponent),N=function(){var e=this;this.increment=function(){var n="number"==typeof e.props.value?e.props.value:e.state.value,t=e.state.step;e.setValue(n+t)},this.decrement=function(){var n="number"==typeof e.props.value?e.props.value:e.state.value,t=e.state.step;e.setValue(n-t)},this.setValue=function(n){var t=e.state,r=t.min,i=t.max,a=n;n<r&&(a=r),n>i&&(a=i),e.props.handleValueChange&&e.props.handleValueChange(a),e.setState({value:a})}},j=(0,g.default)(C)(w);n.default=j},283:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(2),a=r(i),o=t(9),l=r(o),u=t(5),s=r(u),d=t(6),p=r(d),c=t(10),f=r(c),x=t(11),h=r(x),m=t(0),v=r(m),b=t(90),g=r(b),y=t(1),_=r(y),w=t(284),k=r(w),E=t(288),M=r(E),O=t(289),P=r(O),C=t(290),N=r(C),j=(0,a.default)(["\n  height: ","px;\n  cursor: ",";\n  width: 100%;\n"],["\n  height: ","px;\n  cursor: ",";\n  width: 100%;\n"]),D=function(e,n,t){return 0===t?1:(n-e)/t},S=function(e,n,t){return t/(n-e)},V=function(e){function n(){var e,t,r,i;(0,s.default)(this,n);for(var a=arguments.length,o=Array(a),u=0;u<a;u++)o[u]=arguments[u];return t=r=(0,f.default)(this,(e=n.__proto__||(0,l.default)(n)).call.apply(e,[this].concat(o))),r.state={pixelsPerValue:null,valuePerPixel:null,cursorXAtMin:null,useTransitions:!1,focused:!1,width:null},r.componentDidMount=function(){window.addEventListener("resize",r.getTrackWidth)},r.componentWillUnmount=function(){window.removeEventListener("resize",r.getTrackWidth)},r.setTrack=function(e){r.track=e,r.getTrackWidth()},r.getTrackWidth=function(){if(r.track){var e=r.props,n=e.max,t=e.min,i=g.default.findDOMNode(r.track).getBoundingClientRect(),a=i.width,o=i.left,l=S(t,n,a),u=D(t,n,a);r.setState({width:a,pixelsPerValue:l,valuePerPixel:u,cursorXAtMin:o})}},r.handleDrag=function(e){var n=r.props.continuous,t=r.state.valuePerPixel,i=r.props,a=i.value,o=i.step,l=i.min,u=e*t,s=u+l;if(n)return r.props.setValue(s);var d=(s-a)/o,p=Math.floor(d),c=Math.ceil(d),f=Math.abs(Math.abs(c)-Math.abs(d))<Math.abs(Math.abs(p)-Math.abs(d)),x=f?c:p;if(0!==x){var h=x*o+a;r.props.setValue(h)}},r.goToMouseLocation=function(e){var n=e.clientX,t=r.props,i=t.value,a=t.min,o=r.state.pixelsPerValue,l=(i-a)*(o||0),u=r.state.cursorXAtMin;null===u&&r.setState({cursorXAtMin:n-l});var s=n-u;r.handleDrag(s)},r.handleClick=function(e){var n=e.clientX;if(!r.props.disabled){var t=r.state.cursorXAtMin,i=n-t;r.handleDrag(i)}},r.enableFocus=function(){return r.setState({focused:!0})},r.disableFocus=function(){return r.setState({focused:!1})},i=t,(0,f.default)(r,i)}return(0,h.default)(n,e),(0,p.default)(n,[{key:"render",value:function(){var e=this.props,n=e.value,t=e.min,r=e.disabled,i=this.state,a=i.pixelsPerValue,o=i.valuePerPixel,l=i.focused,u=i.width,s="number"==typeof a&&"number"==typeof o,d=(n-t)*(a||0),p=t===n;return v.default.createElement("div",{onClick:this.handleClick,ref:this.setTrack,className:this.props.className+" smc-slider-track-wrapper"},v.default.createElement(M.default,{disabled:r,focused:l,atMin:p},s&&[v.default.createElement(N.default,{width:d,key:"slider-track-value-track"},v.default.createElement(P.default,{disabled:r,width:u})),v.default.createElement(k.default,{increment:this.props.increment,decrement:this.props.decrement,handleMouseMove:this.handleClick,disabled:this.props.disabled,atMin:p,key:"slider-track-slider-thumb"})]))}}]),n}(m.PureComponent),L=(0,_.default)(V)(j,function(e){return e.theme.slider.sizes.clickableHeight},function(e){return e.disabled?"auto":"pointer"});n.default=L},284:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(2),a=r(i),o=t(9),l=r(o),u=t(5),s=r(u),d=t(6),p=r(d),c=t(10),f=r(c),x=t(11),h=r(x),m=t(0),v=r(m),b=t(1),g=r(b),y=t(285),_=r(y),w=t(286),k=r(w),E=t(287),M=r(E),O=(0,a.default)(["\n  cursor: inherit;\n  width: 0px;\n  height: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"],["\n  cursor: inherit;\n  width: 0px;\n  height: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]),P=function(e){function n(){var e,t,r,i;(0,s.default)(this,n);for(var a=arguments.length,o=Array(a),u=0;u<a;u++)o[u]=arguments[u];return t=r=(0,f.default)(this,(e=n.__proto__||(0,l.default)(n)).call.apply(e,[this].concat(o))),r.state={navigatingWithKeys:!1,dragging:!1},r.handleClick=function(e){e.stopPropagation(),r.props.disabled||r.thumb&&r.thumb.focus()},r.onMouseDown=function(){r.props.disabled||(r.setState({dragging:!0}),document.addEventListener("mousemove",r.props.handleMouseMove),document.addEventListener("mouseup",r.onMouseUp))},r.onMouseUp=function(){r.props.disabled||(r.setState({dragging:!1}),document.removeEventListener("mousemove",r.props.handleMouseMove),document.removeEventListener("mouseup",r.onMouseUp))},r.onKeyDown=function(e){if(!r.props.disabled){var n=e.keyCode;37!==n&&40!==n||r.enableKeys(r.props.decrement),39!==n&&38!==n||r.enableKeys(r.props.increment)}},r.enableKeys=function(e){return r.setState({navigatingWithKeys:!0},e)},r.getThumb=function(e){r.thumb=e},r.handleBlur=function(){r.setState({navigatingWithKeys:!1})},i=t,(0,f.default)(r,i)}return(0,h.default)(n,e),(0,p.default)(n,[{key:"render",value:function(){var e=this.props,n=e.atMin,t=e.disabled,r=this.state,i=r.navigatingWithKeys,a=r.dragging;return v.default.createElement("div",{ref:this.getThumb,className:this.props.className},v.default.createElement(M.default,{disabled:t,dragging:a},v.default.createElement(k.default,{tabIndex:"1",className:"styled-material-thumb",onMouseDown:this.onMouseDown,onClick:this.handleClick,onKeyDown:this.onKeyDown,onBlur:this.handleBlur,dragging:a,atMin:n,disabled:t},v.default.createElement(_.default,{navigatingWithKeys:i,atMin:n}))))}}]),n}(m.PureComponent),C=(0,g.default)(P)(O);n.default=C},285:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(2),a=r(i),o=t(0),l=r(o),u=t(1),s=r(u),d=(0,a.default)(["\n  height: ","px;\n  width: ","px;\n  background: ",";\n  transition: height width ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: inherit;\n  border-radius: 50%;\n  flex-shrink: 0;\n"],["\n  height: ","px;\n  width: ","px;\n  background: ",";\n  transition: height width ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: inherit;\n  border-radius: 50%;\n  flex-shrink: 0;\n"]),p=function(e){return l.default.createElement("div",{className:e.className+" smc-slider-focus-ring"},e.children)},c=function(e){return e.navigatingWithKeys?e.theme.slider.sizes.focusHalo:0},f=function(e){var n=e.atMin,t=e.theme.slider.colors;return n?t.track:t.focusHalo},x=(0,s.default)(p)(d,c,c,f,function(e){return e.theme.slider.transitions.main});n.default=x},286:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(2),a=r(i),o=t(0),l=(r(o),t(1)),u=r(l),s=(0,a.default)(["\n  height: ","px;\n  width: ","px;\n  border: ","px solid ",";\n  transition: all ",";\n  background: ",";\n  border-radius: 50%;\n  outline: none;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"],["\n  height: ","px;\n  width: ","px;\n  border: ","px solid ",";\n  transition: all ",";\n  background: ",";\n  border-radius: 50%;\n  outline: none;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]),d=function(e){var n=e.disabled,t=e.theme.slider.colors;return n?t.disabled:e.atMin?t.pageColor:t.main},p=function(e){return e.dragging?e.theme.slider.sizes.thumbClicked:e.disabled?e.theme.slider.sizes.thumbDisabled:e.theme.slider.sizes.thumb},c=function(e){var n=e.atMin,t=e.theme.slider.colors;return n?t.track:d(e)},f=function(e){return e.disabled?0:e.theme.slider.sizes.thumbBorder},x=u.default.div(s,p,p,f,c,function(e){return e.theme.slider.transitions.main},d);n.default=x},287:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(2),a=r(i),o=t(0),l=r(o),u=t(1),s=r(u),d=(0,a.default)(["\n  height: ","px;\n  width: ","px;\n  transition: all ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: ",";\n  border-radius: 50%;\n  position: absolute;\n"],["\n  height: ","px;\n  width: ","px;\n  transition: all ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: ",";\n  border-radius: 50%;\n  position: absolute;\n"]),p=function(e){return l.default.createElement("div",{className:e.className+" smc-slider-disabled-wrapper"},e.children)},c=function(e){var n=e.disabled,t=e.theme.slider.sizes;return n?t.thumbDisabled+t.thumbDisabledBorder:0},f=(0,s.default)(p)(d,c,c,function(e){return e.theme.slider.transitions.main},function(e){return e.theme.slider.colors.pageColor});n.default=f},288:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(2),a=r(i),o=t(0),l=r(o),u=t(1),s=r(u),d=(0,a.default)(["\n  width: 100%;\n  height: ","px;\n  background: ",";\n  transition: ",";\n  display: flex;\n  justify-content: flex-start;\n"],["\n  width: 100%;\n  height: ","px;\n  background: ",";\n  transition: ",";\n  display: flex;\n  justify-content: flex-start;\n"]),p=function(e){return l.default.createElement("div",{className:e.className+" smc-slider-track-line"},e.children)},c=function(e){return e.disabled||e.atMin?e.theme.slider.colors.disabled:e.theme.slider.colors.track},f=(0,s.default)(p)(d,function(e){return e.theme.slider.sizes.trackHeight},c,function(e){return"background "+e.theme.slider.transitions.slider});n.default=f},289:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(2),a=r(i),o=t(0),l=r(o),u=t(1),s=r(u),d=(0,a.default)(["\n  width: ","px;\n  height: 100%;\n  opacity: ",";\n  transition: all ",";\n  background: ",";\n"],["\n  width: ","px;\n  height: 100%;\n  opacity: ",";\n  transition: all ",";\n  background: ",";\n"]),p=function(e){return l.default.createElement("div",{className:e.className+" smc-slider-track-value"},e.children)},c=(0,s.default)(p)(d,function(e){return e.width},function(e){return e.disabled?0:1},function(e){return e.theme.slider.transitions.main},function(e){return e.disabled?e.theme.slider.colors.disabled:e.theme.slider.colors.main});n.default=c},290:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(2),a=r(i),o=t(0),l=r(o),u=t(1),s=r(u),d=(0,a.default)(["\n  height: 100%;\n  overflow: hidden;\n  max-width: ","px;\n"],["\n  height: 100%;\n  overflow: hidden;\n  max-width: ","px;\n"]),p=function(e){return l.default.createElement("div",{className:e.className+" smc-slider-value-size"},e.children)},c=(0,s.default)(p)(d,function(e){return e.width});n.default=c},39:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.elevationTransition=void 0;var r=t(2),i=function(e){return e&&e.__esModule?e:{default:e}}(r),a=t(1),o=(0,i.default)(["\n  will-change: ",";\n  transition: "," 280ms cubic-bezier(.4, 0, .2, 1);\n"],["\n  will-change: ",";\n  transition: "," 280ms cubic-bezier(.4, 0, .2, 1);\n"]),l=(0,i.default)(["\n  ","\n"],["\n  ","\n"]),u=(0,i.default)(["\n  ",": ",",\n    ",",\n    ",";\n"],["\n  ",": ",",\n    ",",\n    ",";\n"]),s={umbra:["0px 0px 0px 0px","0px 2px 1px -1px","0px 3px 1px -2px","0px 3px 3px -2px","0px 2px 4px -1px","0px 3px 5px -1px","0px 3px 5px -1px","0px 4px 5px -2px","0px 5px 5px -3px","0px 5px 6px -3px","0px 6px 6px -3px","0px 6px 7px -4px","0px 7px 8px -4px","0px 7px 8px -4px","0px 7px 9px -4px","0px 8px 9px -5px","0px 8px 10px -5px","0px 8px 11px -5px","0px 9px 11px -5px","0px 9px 12px -6px","0px 10px 13px -6px","0px 10px 13px -6px","0px 10px 14px -6px","0px 11px 14px -7px","0px 11px 15px -7px"],penumbra:["0px 0px 0px 0px","0px 1px 1px 0px","0px 2px 2px 0px","0px 3px 4px 0px","0px 4px 5px 0px","0px 5px 8px 0px","0px 6px 10px 0px","0px 7px 10px 1px","0px 8px 10px 1px","0px 9px 12px 1px","0px 10px 14px 1px","0px 11px 15px 1px","0px 12px 17px 2px","0px 13px 19px 2px","0px 14px 21px 2px","0px 15px 22px 2px","0px 16px 24px 2px","0px 17px 26px 2px","0px 18px 28px 2px","0px 19px 29px 2px","0px 20px 31px 3px","0px 21px 33px 3px","0px 22px 35px 3px","0px 23px 36px 3px","0px 24px 38px 3px"],ambient:["0px 0px 0px 0px","0px 1px 3px 0px","0px 1px 5px 0px","0px 1px 8px 0px","0px 1px 10px 0px","0px 1px 14px 0px","0px 1px 18px 0px","0px 2px 16px 1px","0px 3px 14px 2px","0px 3px 16px 2px","0px 4px 18px 3px","0px 4px 20px 3px","0px 5px 22px 4px","0px 5px 24px 4px","0px 5px 26px 4px","0px 6px 28px 5px","0px 6px 30px 5px","0px 6px 32px 5px","0px 7px 34px 6px","0px 7px 36px 6px","0px 8px 38px 7px","0px 8px 40px 7px","0px 8px 42px 7px","0px 9px 44px 8px","0px 9px 46px 8px"]},d=(n.elevationTransition=(0,a.css)(o,function(e){return e.theme.elevation.property},function(e){return e.theme.elevation.property}),function(e,n){return(0,a.css)(l,function(t){return s[e][n]+" "+t.theme.elevation.colors[e]})}),p=function(e){return(0,a.css)(u,function(e){return e.theme.elevation.property},d("umbra",e),d("penumbra",e),d("ambient",e))};n.default=p},66:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(2),a=r(i),o=t(27),l=r(o),u=t(9),s=r(u),d=t(5),p=r(d),c=t(6),f=r(c),x=t(10),h=r(x),m=t(11),v=r(m),b=t(0),g=r(b),y=t(1),_=r(y),w=t(39),k=r(w),E=t(67),M=r(E),O=(0,a.default)(["\n  color: ",";\n"],["\n  color: ",";\n"]),P=(0,a.default)(["\n  ",";\n  &:active {\n    ",";\n  }\n  ","\n  ","\n  fieldset:disabled &, &:disabled {\n    ",";\n    background-color: rgba(0, 0, 0, .12);\n    pointer-events: none;\n  }\n"],["\n  ",";\n  &:active {\n    ",";\n  }\n  ","\n  ","\n  fieldset:disabled &, &:disabled {\n    ",";\n    background-color: rgba(0, 0, 0, .12);\n    pointer-events: none;\n  }\n"]),C=(0,a.default)(["\n  display: inline-block;\n  position: relative;\n  min-width: 88px;\n  height: 36px;\n  padding: 0 16px;\n  border: none;\n  border-radius: 2px;\n  outline: none;\n  background: transparent;\n  font-size: 14px; // Override font to specifically be px as spec defined pt\n  font-weight: 500;\n  line-height: 36px; // Override line-height so text aligns centered\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  overflow: hidden;\n  vertical-align: middle;\n  user-select: none;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  ","\n\n  &:active {\n    outline: none;\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  &::-moz-focus-inner {\n    padding: 0;\n    border: 0;\n  }\n\n  fieldset:disabled &, &:disabled {\n    color: rgba(0, 0, 0, .26);\n    cursor: default;\n    pointer-events: none;\n  }\n\n  ","\n\n  ","\n  ","\n  ","\n  ","\n  ","\n"],["\n  display: inline-block;\n  position: relative;\n  min-width: 88px;\n  height: 36px;\n  padding: 0 16px;\n  border: none;\n  border-radius: 2px;\n  outline: none;\n  background: transparent;\n  font-size: 14px; // Override font to specifically be px as spec defined pt\n  font-weight: 500;\n  line-height: 36px; // Override line-height so text aligns centered\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  overflow: hidden;\n  vertical-align: middle;\n  user-select: none;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  ","\n\n  &:active {\n    outline: none;\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  &::-moz-focus-inner {\n    padding: 0;\n    border: 0;\n  }\n\n  fieldset:disabled &, &:disabled {\n    color: rgba(0, 0, 0, .26);\n    cursor: default;\n    pointer-events: none;\n  }\n\n  ","\n\n  ","\n  ","\n  ","\n  ","\n  ","\n"]),N=function(e){function n(){var e,t,r,i;(0,p.default)(this,n);for(var a=arguments.length,o=Array(a),l=0;l<a;l++)o[l]=arguments[l];return t=r=(0,h.default)(this,(e=n.__proto__||(0,s.default)(n)).call.apply(e,[this].concat(o))),r.handleOnClick=function(e){r.props.onClick&&r.props.onClick(e)},r.acceptableProps={onClick:r.handleOnClick},i=t,(0,h.default)(r,i)}return(0,v.default)(n,e),(0,f.default)(n,[{key:"render",value:function(){return g.default.createElement("button",(0,l.default)({className:this.props.className+" smc-button"},this.acceptableProps),this.props.children)}}]),n}(b.PureComponent),j=(0,y.css)(O,function(e){return e.theme.primary}),D=(0,y.css)(O,function(e){return e.theme.accent}),S=(0,y.css)(P,(0,k.default)(2),(0,k.default)(8),function(e){return e.accent&&"\n    color: white;\n    background-color: "+e.theme.accent+";\n    &:before {\n      color: black;\n    }\n  "},function(e){return e.primary&&"\n    color: white;\n    background-color: "+e.theme.primary+";\n    &:before {\n      color: black;\n    }\n  "},(0,k.default)(0)),V=(0,_.default)(N)(C,w.elevationTransition,(0,M.default)(),function(e){return e.accent&&D},function(e){return e.primary&&j},function(e){return e.raised&&S},function(e){return e.compact&&"padding: 0 8px;"},function(e){return e.dense&&"\n    height: 32px;\n    font-size: .8125rem;\n    line-height: 32px;\n  "});n.default=V},67:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(2),i=function(e){return e&&e.__esModule?e:{default:e}}(r),a=t(1),o=(0,i.default)(["\n  position: absolute;\n  top: calc(50% - ","%);\n  left: calc(50% - ","%);\n  width: ","%;\n  height: ",'%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  background-color: rgba(0,0,0,0.06);\n  content: "";\n'],["\n  position: absolute;\n  top: calc(50% - ","%);\n  left: calc(50% - ","%);\n  width: ","%;\n  height: ",'%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  background-color: rgba(0,0,0,0.06);\n  content: "";\n']),l=(0,i.default)(["\n  will-change: transform, opacity;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  &:after {\n    transform-origin: center center;\n    ","\n  }\n  &:before {\n    ","\n  }\n  &:hover:before,\n  &:focus:before,\n  &:active:after {\n    transition-duration: 85ms;\n    opacity: .6;\n  }\n"],["\n  will-change: transform, opacity;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  &:after {\n    transform-origin: center center;\n    ","\n  }\n  &:before {\n    ","\n  }\n  &:hover:before,\n  &:focus:before,\n  &:active:after {\n    transition-duration: 85ms;\n    opacity: .6;\n  }\n"]),u=function(e){return(0,a.css)(o,e,e,2*e,2*e)},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;return(0,a.css)(l,u(e),u(e))};n.default=s},90:function(e,n,t){"use strict";function r(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}r(),e.exports=t(116)},91:function(e,n,t){"use strict";function r(e){return i(e)&&3==e.nodeType}var i=t(92);e.exports=r},92:function(e,n,t){"use strict";function r(e){var n=e?e.ownerDocument||e:document,t=n.defaultView||window;return!(!e||!("function"==typeof t.Node?e instanceof t.Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}e.exports=r}},[279]);
            return { page: comp.default }
          })
        