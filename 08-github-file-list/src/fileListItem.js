import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from './icon';
import { Name } from './name';
import { CommitMsg } from './commitMsg';
import { Time } from './time';

function FileListItem({ file }) {
  return (
    <div className="file-list-item">
      <Icon file={file} />
      <Name file={file} />
      <CommitMsg file={file} />
      <Time time={file.updated_at} />
    </div>
  );
};

FileListItem.propTypes = {
  file: PropTypes.object.isRequired
}

export { FileListItem }