"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Message = require("./Message");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content:center;\n    align-items: center;\n    flex-direction:column;\n    // background-image: linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%);\n    // background-image: linear-gradient( -45deg, #a8edea 0%, #fed6e3 100%);\n    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\n    width:400px;\n    min-width:300px;\n    margin: auto;\n    padding: 0.5rem;\n    height: 600px;\n    border: 2px solid green;\n    border-radius: 50px;\n    overflow: hidden;\n"])));

const messages = ["Where can I visulaize sorting algorithms?", "I'm also looking for resources", "Hey! I just found one.", "Share it with me", "Visit https://sorting-visualization.now.sh", "Thanks dude!"];

function TalkBox() {
  const [showMessage, setMoreMessage] = (0, _react.useState)(0);
  (0, _react.useEffect)(() => {
    if (showMessage === messages.length) return;
    setTimeout(() => {
      setMoreMessage(lastVal => lastVal + 1);
    }, 1600);
  });
  return /*#__PURE__*/_react.default.createElement(Container, null, messages.map((message, i) => {
    if (i < showMessage) return /*#__PURE__*/_react.default.createElement(_Message.Message, {
      key: i,
      user: i % 2
    }, message);
    return null;
  }));
}

var _default = TalkBox;
exports.default = _default;