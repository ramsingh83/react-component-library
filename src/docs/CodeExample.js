import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';

const CodeExample = (props) => {
  const { children } = props;
  const codeBlock = useRef(null);

  useEffect(() => {
    hljs.registerLanguage('javascript', javascript);
    hljs.highlightBlock(codeBlock.current);
  }, []);

  return (
    <pre ref={codeBlock}>
      <code>
        {children}
      </code>
    </pre>
  );
};

CodeExample.propTypes = {
  children: PropTypes.string.isRequired
};

export default CodeExample;
