"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _axios = _interopRequireDefault(require("axios"));

var _reactDebounceInput = require("react-debounce-input");

var _AddressList = _interopRequireDefault(require("./AddressList"));

var PostcodeFinder = function PostcodeFinder(props) {
  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      searchText = _useState2[0],
      setSearchText = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      addressList = _useState4[0],
      setAddressList = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  var _useState7 = (0, _react.useState)(''),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      loqateAddress = _useState8[0],
      setLoqateAddress = _useState8[1];

  var searchRef = (0, _react.useRef)(null);
  var setSearchResult = props.setSearchResult,
      setPostcode = props.setPostcode,
      label = props.label,
      placeholder = props.placeholder,
      children = props.children,
      required = props.required,
      config = props.config;
  var channelIsland = config.channelIsland,
      britishForce = config.britishForce,
      key = config.key,
      addressKeyNames = config.addressKeyNames,
      addressErrors = config.addressErrors;
  /**
   * Format loqate result to get following address fields
   * Line1, Line2, Line3, Line4, Line5, City and PostalCode
   */

  var getFormattedAddress = function getFormattedAddress(selectedAddress) {
    var address = {};
    addressKeyNames.forEach(function (addressKey) {
      if (selectedAddress) {
        address[addressKey] = selectedAddress[addressKey];
      }
    });
    setLoqateAddress(address);
    setSearchResult(address);
  };

  var getAddressList = function getAddressList(addressStr, addressId) {
    var addresses = [];
    return _axios.default.get("https://services.postcodeanywhere.co.uk/Capture/Interactive/Find/v1.00/json3ex.ws?Key=".concat(encodeURIComponent(key), "&Country=GBR&Text=").concat(addressStr, "&Container=").concat(addressId, "&LanguagePreference=en&LastId=").concat(addressId, "&SearchFor=Everything&$block=true&$cache=true")).then(function (response) {
      if (response.data.Items && response.data.Items.length > 0 && response.data.Items[0].Error) {
        var newError = addressErrors.invalidSearchError.replace('@', addressStr);
        setError(newError);
        return;
      }

      if (response.data.Items && response.data.Items.length === 0) {
        var errorDescription = addressErrors.invalidSearchError.replace('@', addressStr);
        setError(errorDescription);
        return;
      }

      if (response.data.Items && response.data.Items.length > 0) {
        addresses = response.data.Items;
      }
    }).catch(function () {
      var newError = addressErrors.apiDownError;
      setError(newError);
    }).then(function () {
      setAddressList(addresses);
    });
  };

  var getAddressDetails = function getAddressDetails(address) {
    if (address.Type === 'Address') {
      var newError = '';

      _axios.default.get("https://services.postcodeanywhere.co.uk/Capture/Interactive/Retrieve/v1.00/json3ex.ws?Key=".concat(encodeURIComponent(key), "&Id=").concat(address.Id, "&$cache=true&$block=true&LastId=").concat(address.Id, "&SearchTerm=&field1format=").concat(encodeURIComponent('{Latitude}'), "&field2format=").concat(encodeURIComponent('{Longitude}'))).then(function (response) {
        if (response.data.Items && response.data.Items.length > 0) {
          var selectedAddress = response.data.Items[0];
          var postalCode = response.data.Items[0].PostalCode;
          var areaCode = postalCode.replace(/ /g, '').substring(0, 2).toUpperCase(); // Check for british force area.

          if (britishForce && britishForce.toUpperCase() === areaCode) {
            newError = addressErrors.britishForceError;
          } // Check for channel island and isle of man.


          if (channelIsland.length && channelIsland.includes(areaCode)) {
            newError = addressErrors.channelIslandError;
          } // TODO : Do we have to display address when have channelIsland/BritishForce ?
          // If YES then extra check require. Default is display address.
          // *Confirm with business.


          setError(newError);
          setAddressList([]);
          setPostcode(postalCode);
          getFormattedAddress(selectedAddress);
          setSearchText('');
        }
      }).catch(function () {
        newError = addressErrors.apiDownError;
        setError(newError);
      });

      return;
    }

    getAddressList(address, address.Id);
  };

  var onHandleAddressListKeyDown = function onHandleAddressListKeyDown(address, e) {
    if (e.keyCode === undefined || (e.keyCode || e.which) === 13) {
      getAddressDetails(address);
    }
  };

  var onHandleSearchInputChanged = function onHandleSearchInputChanged(e) {
    if (e.target.value) {
      setSearchText(e.target.value);
      getAddressList(e.target.value);
    }

    if (!e.target.value) {
      setSearchText(e.target.value);
      setAddressList([]);
      setError('');
    }
  };

  var handleFocusOut = function handleFocusOut(e) {
    e.preventDefault();

    if (!loqateAddress) {
      setError(addressErrors.requiredFieldError);
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "postcode-finder"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-item"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "search-input"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "input-label"
  }, label, required ? /*#__PURE__*/_react.default.createElement("span", {
    className: "mandatory"
  }, "*") : '', children), /*#__PURE__*/_react.default.createElement(_reactDebounceInput.DebounceInput, {
    debounceTimeout: 500,
    id: "search-input",
    ref: searchRef,
    className: error ? 'invalid' : '',
    autoComplete: "removeAutoCompletion",
    placeholder: placeholder,
    onChange: function onChange(e) {
      return onHandleSearchInputChanged(e);
    },
    onBlur: handleFocusOut,
    value: searchText,
    "aria-required": "true",
    "aria-describedby": "address-error",
    "aria-invalid": !!error
  }), /*#__PURE__*/_react.default.createElement("span", {
    id: "search-input",
    className: "visually-hidden"
  }, placeholder)), error ? /*#__PURE__*/_react.default.createElement("div", {
    id: "address-error",
    className: "error-ifo"
  }, error) : null), /*#__PURE__*/_react.default.createElement("div", {
    role: "alert",
    className: "visually-hidden"
  }, addressList ? "".concat(addressList.length, " address Found") : null), addressList && addressList.length > 0 ? /*#__PURE__*/_react.default.createElement(_AddressList.default, {
    results: addressList,
    getDetails: function getDetails(address) {
      return getAddressDetails(address);
    },
    handleKeyDown: function handleKeyDown(result, e) {
      return onHandleAddressListKeyDown(result, e);
    }
  }) : null);
};

PostcodeFinder.propTypes = {
  config: _propTypes.default.shape({}),
  placeholder: _propTypes.default.string,
  label: _propTypes.default.string.isRequired,
  setSearchResult: _propTypes.default.func.isRequired,
  setPostcode: _propTypes.default.func.isRequired,
  required: _propTypes.default.bool
};
var _default = PostcodeFinder;
exports.default = _default;