import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';
import AddressList from './AddressList';
import { getAddresses, setAddress } from './loqate.service';


const PostcodeFinder = (props) => {
  const [searchText, setSearchText] = useState('');
  const [addressList, setAddressList] = useState(null);
  const [error, setError] = useState('');
  
  const {
    setSearchResult,
    setPostcode,
    label,
    placeholder,
    children,
    required,
    config
  } = props;

  const {
    channelIsland,
    britishForce,
    key,
    addressKeyNames,
    addressErrors
  } = config;
  
  /**
   * Format loqate result to get following address fields
   * Line1, Line2, Line3, Line4, Line5, City and PostalCode
   */
  const getFormattedAddress = (selectedAddress) => {
    const address = {};
    addressKeyNames.forEach((key) => {
      if (selectedAddress) {
        address[key] = selectedAddress[key];
      }
    });
    return address;
  };

  const getAddressList = (postcode, id) => {
    let addresses = [];
    return getAddresses(key, postcode, id)
      .then((response) => {
        if (response.data.Items && response.data.Items.length > 0 && response.data.Items[0].Error) {
          const newError = addressErrors.invalidSearchError.replace('@', postcode);
          setError(newError);
          return;
        }

        if (response.data.Items && response.data.Items.length === 0) {
          const errorDescription =  addressErrors.invalidSearchError.replace('@', postcode);
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
      setAddress(key, address.Id)
        .then((response) => {
          if (response.data.Items && response.data.Items.length > 0) {
            const selectedAddress = response.data.Items[0];
            const postalCode = response.data.Items[0].PostalCode;
            const areaCode = postalCode.replace(/ /g, '').substring(0, 2).toUpperCase();
            // Check for british force area.
            if (britishForce && britishForce.toUpperCase() === areaCode) {
              newError = addressErrors.britishForceError;
            }
            // Check for channel island and isle of man.
            if (channelIsland.length && channelIsland.includes(areaCode)) {
              newError = addressErrors.channelIslandError;
            }
            // TODO : Do we have to display address when have channelIsland/BritishForce ? If YES then
            // extra check require. Default it does display address.
            // Confirm with business.
            setError(newError);
            setAddressList([]);
            setPostcode(postalCode);
            setSearchResult(getFormattedAddress(selectedAddress));
            setSearchText('');
          }
        })
        .catch((err) => {
          newError = addressErrors.apiDownError;
          setError(newError);
        });
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
      setSearchText(e.target.value);
      getAddressList(e.target.value);
    }

    if (!e.target.value) {
      setSearchText(e.target.value);
      setAddressList([]);
      setError('');
    }
  };

  return (
    <div className="postcode-finder">
      <div className="form-item">
        <label htmlFor="search-input">
          <span className="input-label">
            {label}
            {required ? <span style={{color: 'red'}}>*</span> : ''}
            {children}
          </span>
          <DebounceInput
            debounceTimeout={500}
            id="search-input"
            className={error ? 'invalid' : ''}
            autoComplete="removeAutoCompletion"
            placeholder={placeholder}
            onChange={e => onHandleSearchInputChanged(e)}
            value={searchText}
            aria-required="true"
            aria-describedby="address-error"
            aria-invalid={!!error} />
          <span id="search-input" className="visually-hidden">{placeholder}</span>
        </label>
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
      {
        error ? <p id="address-error" className="error-info">{error}</p> : null
      }
    </div>
  );
};

PostcodeFinder.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  setSearchResult: PropTypes.func.isRequired,
  setPostcode: PropTypes.func.isRequired,
  required: PropTypes.bool
};

export default PostcodeFinder;
