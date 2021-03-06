import React, { useState, useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { DebounceInput } from 'react-debounce-input';
import AddressList from './AddressList';

const PostcodeFinder = (props) => {
  const [searchText, setSearchText] = useState('');
  const [addressList, setAddressList] = useState(null);
  const [firstRender, setFirstRender] = useState(true);
  const [error, setError] = useState('');
  const [loqateAddress, setLoqateAddress] = useState(null);

  const searchRef = useRef(null);

  const {
    setSearchResult,
    label,
    placeholder,
    children,
    required,
    config,
    validateInput
  } = props;

  const {
    channelIsland,
    britishForce,
    key,
    addressKeyNames,
    addressErrors
  } = config;

  useLayoutEffect(() => {
    setSearchResult(loqateAddress, error);
  }, [loqateAddress, error]);

  const validate = () => {
    if (!loqateAddress) {
      setError(addressErrors.requiredFieldError);
    } else if (loqateAddress && error === addressErrors.requiredFieldError) {
      setError('');
    }
  };

  useLayoutEffect(() => {
    setFirstRender(false);
    if (!firstRender) {
      validate();
    }
  }, [validateInput]);
  /**
   * Format loqate result to get following address fields
   * Line1, Line2, Line3, Line4, Line5, City and PostalCode
   */
  const getFormattedAddress = (selectedAddress) => {
    const address = {};
    addressKeyNames.forEach((addressKey) => {
      if (selectedAddress) {
        address[addressKey] = selectedAddress[addressKey];
      }
    });
    setLoqateAddress(address);
  };

  const getAddressList = (addressStr, addressId) => {
    let addresses = [];
    return axios.get(`https://services.postcodeanywhere.co.uk/Capture/Interactive/Find/v1.00/json3ex.ws?Key=${encodeURIComponent(key)}&Country=GBR&Text=${addressStr}&Container=${addressId}&LanguagePreference=en&LastId=${addressId}&SearchFor=Everything&$block=true&$cache=true`)
      .then((response) => {
        if (response.data.Items && response.data.Items.length > 0 && response.data.Items[0].Error) {
          const newError = addressErrors.invalidSearchError.replace('@', addressStr);
          setError(newError);
          return;
        }

        if (response.data.Items && response.data.Items.length === 0) {
          const errorDescription = addressErrors.invalidSearchError.replace('@', addressStr);
          setError(errorDescription);
          return;
        }

        if (response.data.Items && response.data.Items.length > 0) {
          addresses = response.data.Items;
        }
      })
      .catch(() => {
        const newError = addressErrors.apiDownError;
        setError(newError);
      })
      .then(() => {
        setAddressList(addresses);
      });
  };

  const getAddressDetails = (address) => {
    if (address.Type === 'Address') {
      let newError = '';
      axios.get(`https://services.postcodeanywhere.co.uk/Capture/Interactive/Retrieve/v1.00/json3ex.ws?Key=${encodeURIComponent(key)}&Id=${address.Id}&$cache=true&$block=true&LastId=${address.Id}&SearchTerm=&field1format=${encodeURIComponent('{Latitude}')}&field2format=${encodeURIComponent('{Longitude}')}`)
        .then((response) => {
          if (response.data.Items && response.data.Items.length > 0) {
            const selectedAddress = response.data.Items[0];
            const postalCode = response.data.Items[0].PostalCode;
            const areaCode = postalCode.replace(/ /g, '').substring(0, 2).toUpperCase();
            // Check for british force area and channelIsland.
            if (britishForce && britishForce.toUpperCase() === areaCode) {
              newError = addressErrors.britishForceError;
            } else if (channelIsland.length && channelIsland.includes(areaCode)) {
              newError = addressErrors.channelIslandError;
            } else {
              getFormattedAddress(selectedAddress);
            }
            setError(newError);
            setAddressList([]);
            setSearchText('');
          }
        })
        .catch(() => {
          newError = addressErrors.apiDownError;
          setError(newError);
        });

      if (searchRef.current) {
        searchRef.current.focus();
      }
      return;
    }
    getAddressList(address, address.Id);
  };

  const onHandleAddressListKeyDown = (address, e) => {
    if (e.keyCode === undefined || (e.keyCode || e.which) === 13) {
      getAddressDetails(address);
    }
  };

  const onHandleSearchInputChanged = (e) => {
    if (e.target.value) {
      setLoqateAddress(null);
      setError('');
      setSearchText(e.target.value);
      getAddressList(e.target.value);
    }

    if (!e.target.value) {
      setSearchText(e.target.value);
      setAddressList([]);
      setError('');
    }
  };

  const handleFocusOut = (e) => {
    e.preventDefault();
    if (!loqateAddress && !addressList) {
      setError(addressErrors.requiredFieldError);
    }
  };

  return (
    <div className="postcode-finder">
      <div className="form-item">
        <label htmlFor="search-input">
          <span className="input-label">
            {label}
            {required ? <span className="mandatory">*</span> : ''}
            {children}
          </span>
          <DebounceInput
            debounceTimeout={500}
            id="search-input"
            inputRef={searchRef}
            className={error ? 'invalid' : ''}
            placeholder={placeholder}
            onChange={e => onHandleSearchInputChanged(e)}
            onBlur={handleFocusOut}
            value={searchText}
            aria-required="true"
            aria-describedby="address-error"
            aria-invalid={!!error} />
          <span id="search-input-help" className="visually-hidden">{placeholder}</span>
        </label>
        {
          error ? <div id="address-error" className="error-info">{error}</div> : null
        }
      </div>
      <div role="alert" className="visually-hidden">
        {addressList ? `${addressList.length} address Found` : null}
      </div>
      {
        addressList && addressList.length > 0
          ? (
            <AddressList
              results={addressList}
              getDetails={address => getAddressDetails(address)}
              handleKeyDown={(result, e) => onHandleAddressListKeyDown(result, e)} />
          ) : null
      }
    </div>
  );
};

PostcodeFinder.propTypes = {
  config: PropTypes.shape({}),
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  setSearchResult: PropTypes.func.isRequired,
  validateInput: PropTypes.bool.isRequired,
  required: PropTypes.bool
};

export default PostcodeFinder;
