"use strict";

var _react = _interopRequireDefault(require("react"));

var _ContactDetails = _interopRequireDefault(require("./ContactDetails"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("ContactDetails", function () {
  it("renders properly", function () {
    var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_ContactDetails.default, {
      label: "Email",
      placeholder: "name@example.com",
      email: "test@eamil.com",
      handleOnInputChanged: function handleOnInputChanged() {}
    })).toJSON();

    tree.debug(); // expect(tree).toMatchSnapshot();
  });
});