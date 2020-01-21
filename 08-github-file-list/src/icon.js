import React from 'react';
import PropTypes from 'prop-types';

function Icon({ file }) {
  let icon = "fa-file-text-o";
  if (file.type === "folder") icon = "fa-folder";
  return (
    <span className="file-icon">
      <i className={`fa ${icon}`} />
    </span>
  );
};

Icon.propTypes = {
  file: PropTypes.object.isRequired
};

export { Icon }