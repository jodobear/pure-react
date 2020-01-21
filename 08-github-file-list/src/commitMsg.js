import React from 'react';
import PropTypes from 'prop-types';

const CommitMsg = ({ file }) => <span className="commit-msg">{file.latestCommit.message}</span>

CommitMsg.propTypes = {
  file: PropTypes.object.isRequired
};

export { CommitMsg }

