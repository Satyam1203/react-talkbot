"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Message = require("./Message");

const _excluded = ["containerStyle", "msgWrapperStyle", "sentMsgWrapperStyle", "receivedMsgWrapperStyle"];

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  // background-image: linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%);\n  // background-image: linear-gradient( -45deg, #a8edea 0%, #fed6e3 100%);\n  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\n  width: 400px;\n  min-width: 300px;\n  margin: auto;\n  padding: 0.5rem;\n  height: 600px;\n  border: 2px solid gainsboro;\n  border-radius: 50px;\n  overflow: hidden;\n"])));

const msgDemo = [{
  sent: true,
  msg: "Where can I visulaize sorting algorithms?"
}, {
  sent: false,
  msg: "I'm also looking for resources"
}, {
  sent: true,
  msg: "Hey! I just found one."
}, {
  sent: false,
  msg: "Share it with me"
}, {
  sent: true,
  msg: "Visit https://sorting-visualization.now.sh"
}, {
  sent: false,
  msg: "Thanks dude!"
}, {
  sent: false,
  msg: "See you soon :)"
}];

const TalkBox = _ref => {
  var _props$messages, _props$senderAvatar, _props$receiverAvatar;

  let {
    containerStyle,
    msgWrapperStyle,
    sentMsgWrapperStyle,
    receivedMsgWrapperStyle
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [showMessage, setMoreMessage] = (0, _react.useState)(0);
  const messages = (_props$messages = props.messages) !== null && _props$messages !== void 0 ? _props$messages : msgDemo;
  const senderAvatar = (_props$senderAvatar = props.senderAvatar) !== null && _props$senderAvatar !== void 0 ? _props$senderAvatar : "🧑🏻";
  const receiverAvatar = (_props$receiverAvatar = props.receiverAvatar) !== null && _props$receiverAvatar !== void 0 ? _props$receiverAvatar : "👨🏻‍💻";
  (0, _react.useEffect)(() => {
    if (showMessage === messages.length) return;
    setTimeout(() => {
      setMoreMessage(lastVal => lastVal + 1);
    }, 1600);
  });
  return /*#__PURE__*/_react.default.createElement(Container, {
    height: messages.length * 100,
    style: containerStyle
  }, messages.map((item, i) => {
    if (i < showMessage) return /*#__PURE__*/_react.default.createElement(_Message.Message, {
      key: i,
      user: item.sent,
      msgWrapperStyle: msgWrapperStyle,
      sentMsgWrapperStyle: sentMsgWrapperStyle,
      receivedMsgWrapperStyle: receivedMsgWrapperStyle,
      avatar: item.sent ? senderAvatar : receiverAvatar
    }, item.msg);
    return null;
  }));
};

var _default = TalkBox;
exports.default = _default;