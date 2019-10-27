"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.FileInputChildren=exports.FileInputDefault=exports.default=void 0;var _react=_interopRequireWildcard(require("react"));var _styledComponents=_interopRequireDefault(require("styled-components"));var _FileInput=_interopRequireDefault(require("./FileInput"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap;_getRequireWildcardCache=function _getRequireWildcardCache(){return cache};return cache}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};if(obj!=null){var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}}newObj.default=obj;if(cache){cache.set(obj,newObj)}return newObj}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(arr,i){if(!(Symbol.iterator in Object(arr)||Object.prototype.toString.call(arr)==="[object Arguments]")){return}var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}var Wrapper=_styledComponents.default.div.withConfig({displayName:"FileInputstories__Wrapper",componentId:"sc-1n4xa9w-0"})(["display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;color:black;box-sizing:border-box;min-height:100vh;"]);var decorator=function decorator(storyFn){return _react.default.createElement(Wrapper,null,storyFn())};var _default={title:"Form/FileInput",decorators:[decorator]};exports.default=_default;var handleChange=function handleChange(results){results.forEach(function(result){var _result=_slicedToArray(result,2),data=_result[0],metadata=_result[1];console.log(data);console.log("Successfully uploaded ".concat(metadata.name,"!"))})};var FileInputDefault=function FileInputDefault(){return _react.default.createElement(_react.default.Fragment,null,_react.default.createElement("label",{htmlFor:"my-file-input"},"Upload a File:"),_react.default.createElement(_FileInput.default,{as:"text",id:"my-file-input",onChange:handleChange}))};exports.FileInputDefault=FileInputDefault;var FileInputChildren=function FileInputChildren(){return _react.default.createElement(_react.default.Fragment,null,_react.default.createElement(_FileInput.default,{as:"text",id:"my-file-input",onChange:handleChange},_react.default.createElement("a",{href:"#"},"upload")))};exports.FileInputChildren=FileInputChildren;