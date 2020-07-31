import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CodeExample from './CodeExample';

const Example = (props) => {
  const {
    example: {
      code,
      description,
      name
    },
    componentName
  } = props;
  const [showCode, setShowCode] = useState(false);

  // Disable eslint import/no-dynamic-require in order to dynamically import component.
  /* eslint-disable */
  const ExampleComponent = require(`./examples/${componentName}/${name}`).default;
  /* eslint-enable */
  const toggleCode = (event) => {
    event.preventDefault();
    setShowCode(!showCode);
  };

  return (
    <div className="example">
      {description && <h4>{description}</h4> }
      <ExampleComponent />
      <p>
        <button type="button" onClick={toggleCode}>
          {showCode ? 'Hide' : 'Show'}
          {' '}
          Code
        </button>
      </p>

      {showCode && <CodeExample>{code}</CodeExample>}
    </div>
  );
};
Example.propTypes = {
  example: PropTypes.shape({}).isRequired,
  componentName: PropTypes.string.isRequired
};

export default Example;
