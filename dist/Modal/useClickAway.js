"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var useClickAway = function useClickAway(ref, callback) {
  var keys = {
    tab: 9,
    escape: 27
  };

  var handleClick = function handleClick(e) {
    if (ref.current && !ref.current.contains(e.target)) {
      callback(e);
    }
  };

  var handleKeys = function handleKeys(e) {
    if (ref.current) {
      // Close Modal on escape key press.
      if (e.keyCode === keys.escape) {
        callback(e);
      } else {
        // Trap focus in modal until modal is not closed.
        var focusableElmnts = ref.current.querySelectorAll('button:not([disabled]), img:not([disabled])');
        var firstFocusableElmnt = focusableElmnts[0];
        var lastFocusableElmnt = focusableElmnts[focusableElmnts.length - 1];

        if (e.keyCode === keys.tab || e.shiftKey && e.keyCode === keys.tab) {
          if (document.activeElement === firstFocusableElmnt) {
            lastFocusableElmnt.focus();
            e.preventDefault();
          } else {
            firstFocusableElmnt.focus();
            e.preventDefault();
          }
        }
      }
    }
  };

  (0, _react.useEffect)(function () {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeys);
    document.addEventListener('touchstart', handleClick);
    return function () {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeys);
      document.removeEventListener('touchstart', handleClick);
    };
  });
};

var _default = useClickAway;
exports.default = _default;