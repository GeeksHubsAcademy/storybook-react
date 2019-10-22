"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.setValueFromOutside=exports.SourceAsObjects=exports.Default=exports.default=void 0;var _react=_interopRequireWildcard(require("react"));var _styledComponents=_interopRequireDefault(require("styled-components"));var _Autocomplete=_interopRequireDefault(require("./Autocomplete"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap;_getRequireWildcardCache=function _getRequireWildcardCache(){return cache};return cache}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};if(obj!=null){var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}}newObj.default=obj;if(cache){cache.set(obj,newObj)}return newObj}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(arr,i){if(!(Symbol.iterator in Object(arr)||Object.prototype.toString.call(arr)==="[object Arguments]")){return}var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}var Wrapper=_styledComponents.default.div.withConfig({displayName:"Autocompletestories__Wrapper",componentId:"sc-7ef4s4-0"})(["display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;color:black;box-sizing:border-box;min-height:100vh;"]);var decorator=function decorator(storyFn){return _react.default.createElement(Wrapper,null,storyFn())};var _default={title:"Form/Autocomplete",decorators:[decorator]};exports.default=_default;var dataSource=["ola","olas","hola caracola","hola!","hola.","hola","adios","yei"];var Default=function Default(){var _useState=(0,_react.useState)("ola"),_useState2=_slicedToArray(_useState,2),value=_useState2[0],setValue=_useState2[1];return _react.default.createElement(_Autocomplete.default,{source:dataSource,value:value,onChange:setValue})};exports.Default=Default;var dataSourceObj=[{value:"ola"},{value:"olas"},{value:"hola caracola"},{value:"hola!"},{value:"hola."},{value:"hola"},{value:"adios"},{value:"yei"}];var SourceAsObjects=function SourceAsObjects(){var _useState3=(0,_react.useState)({value:"hola"}),_useState4=_slicedToArray(_useState3,2),value=_useState4[0],setValue=_useState4[1];return _react.default.createElement(_Autocomplete.default,{source:dataSourceObj,value:value,onChange:setValue,mapItemToValue:function mapItemToValue(item){return item.value}})};exports.SourceAsObjects=SourceAsObjects;var setValueFromOutside=function setValueFromOutside(){var _useState5=(0,_react.useState)(dataSourceObj[0]),_useState6=_slicedToArray(_useState5,2),value=_useState6[0],setValue=_useState6[1];return _react.default.createElement(_react.default.Fragment,null,_react.default.createElement("button",{onClick:function onClick(){return setValue(dataSourceObj[3])}},"change value"),_react.default.createElement(_Autocomplete.default,{source:dataSourceObj,value:value,onChange:setValue,mapItemToValue:function mapItemToValue(item){return item.value}}))};exports.setValueFromOutside=setValueFromOutside;