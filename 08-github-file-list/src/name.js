import React from 'react';
import PropTypes from 'prop-types';

function Name({ file }) {
  return (
    <span className="file-name">{file.name}</span>
  );
};

Name.propTypes = {
  file: PropTypes.object.isRequired
};

export { Name }