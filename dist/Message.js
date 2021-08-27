"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Message = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _framerMotion = require("framer-motion");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const MsgDiv = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: 280px;\n  padding: 14px;\n  margin: 8px 16px;\n  background-color: lightcoral;\n  font-family: sans-serif;\n  font-size: 1.2rem;\n  border-radius: 10px;\n"])));

const Message = _ref => {
  let {
    children,
    user,
    avatar,
    msgWrapperStyle,
    sentMsgWrapperStyle,
    receivedMsgWrapperStyle
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, user ? /*#__PURE__*/_react.default.createElement(_framerMotion.motion.div, {
    initial: {
      x: "100%",
      rotate: -10,
      scale: 0
    },
    animate: {
      x: "0%",
      rotate: 0,
      scale: 1
    },
    transition: {
      default: {
        duration: 0.7
      }
    }
  }, /*#__PURE__*/_react.default.createElement(MsgDiv, {
    style: _objectSpread(_objectSpread({}, msgWrapperStyle), sentMsgWrapperStyle)
  }, children), /*#__PURE__*/_react.default.createElement("span", {
    style: {
      fontSize: "3rem"
    },
    role: "img",
    "aria-label": "avatar"
  }, avatar)) : /*#__PURE__*/_react.default.createElement(_framerMotion.motion.div, {
    initial: {
      x: "-100%",
      rotate: 10,
      scale: 0
    },
    animate: {
      x: "0%",
      rotate: 0,
      scale: 1
    },
    transition: {
      default: {
        duration: 0.7
      }
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    style: {
      fontSize: "3rem"
    },
    role: "img",
    "aria-label": "avatar"
  }, avatar), /*#__PURE__*/_react.default.createElement(MsgDiv, {
    style: _objectSpread(_objectSpread({
      backgroundColor: "lightgreen"
    }, msgWrapperStyle), receivedMsgWrapperStyle)
  }, children)));
};

exports.Message = Message;