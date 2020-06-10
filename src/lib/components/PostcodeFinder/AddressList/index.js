import React from 'react';
import PropTypes from 'prop-types';

const addressList = (props) => {
  const {
    results,
    getDetails,
    handleKeyDown
  } = props;
  return (
    <ul
      className="address-list form-item form-item-autocomplete ui-widget ui-autocomplete"
      id="address-list">
      {results && results.length > 0
        ? results.map((result) => {
          if (result.Text || result.Description) {
            return (
              <li key={result.Id} className="address-item ui-menu-item">
                <div
                  tabIndex="0"
                  role="button"
                  className="ui-menu-item-wrapper"
                  onClick={() => getDetails(result)}
                  onKeyDown={e => handleKeyDown(result, e)}>
                  <span className="pca-text">{result.Text || ''}</span>
                  <span className="pca-description">{` ${result.Description}` || ''}</span>
                </div>
              </li>
            );
          }
          return null;
        })
        : null}
    </ul>
  );
};

addressList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({})),
  getDetails: PropTypes.func,
  handleKeyDown: PropTypes.func
};

export default addressList;
