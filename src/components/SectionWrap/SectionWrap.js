import React from 'react';
import PropTypes from 'prop-types';

const SectionWrap = (props) => {
  const {
    id,
    extraClasses,
    children
  } = props;
  const classes = ['section'];
  if (extraClasses) {
    classes.push(extraClasses);
  }
  return (
    <section
      id={id}
      className={classes.join(' ')}>
      <div className="section-inner">
        <div className="section-container">
          <div className="section-row">
            <div className="section-col">
              <div className="section-col-inner">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

SectionWrap.propTypes = {
  id: PropTypes.string,
  extraClasses: PropTypes.string
};

export default SectionWrap;
