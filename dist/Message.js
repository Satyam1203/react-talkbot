"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Message = Message;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _framerMotion = require("framer-motion");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const MsgDiv = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: inline-block;\n    width: 280px;\n    padding: 14px;\n    margin: 8px 16px;\n    background-color: lightcoral;\n    font-family: sans-serif;\n    font-size: 1.2rem;\n    border-radius: 10px;\n"])));

function Message(_ref) {
  let {
    children,
    user
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, user ? /*#__PURE__*/_react.default.createElement(_framerMotion.motion.div, {
    initial: {
      x: '100%',
      rotate: -10,
      scale: 0
    },
    animate: {
      x: '0%',
      rotate: 0,
      scale: 1
    },
    transition: {
      default: {
        duration: 0.7
      }
    }
  }, /*#__PURE__*/_react.default.createElement(MsgDiv, null, children), /*#__PURE__*/_react.default.createElement("span", {
    style: {
      fontSize: '3rem'
    },
    role: "img",
    "aria-label": "avatar"
  }, "\uD83E\uDDD1\uD83C\uDFFB")) : /*#__PURE__*/_react.default.createElement(_framerMotion.motion.div, {
    initial: {
      x: '-100%',
      rotate: 10,
      scale: 0
    },
    animate: {
      x: '0%',
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
      fontSize: '3rem'
    },
    role: "img",
    "aria-label": "avatar"
  }, "\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDCBB"), /*#__PURE__*/_react.default.createElement(MsgDiv, {
    style: {
      backgroundColor: 'lightgreen'
    }
  }, children)));
}