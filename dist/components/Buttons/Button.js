"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=exports.Button=void 0;var _react=_interopRequireDefault(require("react"));var _styledComponents=_interopRequireDefault(require("styled-components"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _templateObject(){var data=_taggedTemplateLiteral(["\n         all: unset;\n         display: inline-flex;\n         align-items: center;\n         justify-content: center;\n         text-align: center;\n         flex-wrap: wrap;\n\n         padding: 0.5em 0.8em;\n\n         border: 0.08em solid currentColor;\n         border-radius: 0.2em;\n\n         line-height: 1;\n         color: inherit;\n         text-transform: uppercase;\n         cursor: pointer;\n         ","\n\n         :hover:not(:disabled) {\n           filter: brightness(85%);\n         }\n         :focus,\n         :active {\n           box-shadow: 0 0 0 1px\n             ",";\n           outline: none;\n         }\n\n         & + & {\n           margin-left: 0.5em;\n         }\n         ","\n\n         :disabled {\n           cursor: not-allowed;\n         }\n       "]);_templateObject=function _templateObject(){return data};return data}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0)}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var Button=_styledComponents.default.button(_templateObject(),function(_ref){var disabled=_ref.disabled,loading=_ref.loading;return disabled&&!loading?"opacity:0.7; filter: blur(1px);":""},function(_ref2){var _ref2$style=_ref2.style;_ref2$style=_ref2$style===void 0?{}:_ref2$style;var _ref2$style$backgroun=_ref2$style.background,background=_ref2$style$backgroun===void 0?"grey":_ref2$style$backgroun,backgroundColor=_ref2$style.backgroundColor;return backgroundColor?backgroundColor:background},function(_ref3){var style=_ref3.style;return style&&style.display&&style.display.match("block")&&"& + & {\n    margin-left: 0em;\n  }"});exports.Button=Button;var _default=Button;exports.default=_default;