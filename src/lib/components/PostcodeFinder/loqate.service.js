import axios from 'axios';

/**
 * Construct get (loqate) address list url.
 * @param {string} key - Loqate key.
 * @param {String} addressStr - Search text to get address from loqate.
 * @param {String} addressId - Address id to get postcode from loqate.
 * @returns {string} request url
 */
  
const getAddressesReqUrl = (key, addressStr, addressId) => {
  return `https://services.postcodeanywhere.co.uk/Capture/Interactive/Find/v1.00/json3ex.ws?Key=${encodeURIComponent(key)}&Country=GBR&Text=${addressStr}&Container=${addressId}&LanguagePreference=en&LastId=${addressId}&SearchFor=Everything&$block=true&$cache=true`;
};

/**
 * Construct set (loqate) address list url.
 * @param {string} Key - loqate key.
 * @param {String} addressId - Address Id to get postcode from loqate.
 * @returns {string} request url.
 */
const setAddressReqUrl = (key, addressId) => {
  return `https://services.postcodeanywhere.co.uk/Capture/Interactive/Retrieve/v1.00/json3ex.ws?Key=${encodeURIComponent(key)}&Id=${addressId}&$cache=true&$block=true&LastId=${addressId}&SearchTerm=&field1format=${encodeURIComponent('{Latitude}')}&field2format=${encodeURIComponent('{Longitude}')}`;
};

/**
 * Construct an url reading from config service and make
 * a call to loqate endpoint to get result.
 * @param {String} key - loqate key.
 * @param {String} addressStr - Search text to get address from loqate.
 * @param {String} addressId - Address id to get postcode from loqate.
 * @returns {Promise}
 */
const getAddresses = (key, addressStr, addressId) => axios
  .get(getAddressesReqUrl(key, addressStr, addressId));

/**
 * Construct an url reading from config service and make
 * a call to loqate endpoint to get result.
 * @param {String} key - loqate key.
 * @param {String} addressId - Address Id to get postcode from loqate.
 * @returns {promise}
 */
const setAddress = (key, addressId) => axios
  .get(setAddressReqUrl(key, addressId));

export {
  getAddressesReqUrl,
  setAddressReqUrl,
  getAddresses,
  setAddress
};
