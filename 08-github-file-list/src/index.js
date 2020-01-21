import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';
// import { Time } from './time';

// ex02 moved every component to it's own file and importing them here

import { FileListItem } from './fileListItem';


/* ### Component Hierarchy
- File List
  - File item
    - File icon
    - File Name
    - Commit message
    - Time
*/

/*
// simple implementation, hardcoded the structure.
const FileList = ({ files }) => (
  <table className="file-list">
    <tbody>
      {files.map(file => (
        <tr className="file-list-item" key={file.id}>
          <td className="file-icon">{file.type}</td>
          <td className="file-name">{file.name}</td>
          <td className="file-commit-message">{file.latestCommit.message}</td>
          <td className="file-mod-time">
            <Time time={file.updated_at}/>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
*/

// implementation with FileListItem
// function FileList({ files }) {
//   return (
//     <table className="file-list">
//       <tbody>
//         {files.map(file =>
//         <FileListItem key={file.id} file={file} />
//         )}
//       </tbody>
//     </table>
//   );
// };

// FileList.propTypes = {
//   file: PropTypes.array
// };

// function FileListItem({ file }) {
//   return (
//     <tr className="file-list-item">
//       <td><FileIcon file={file} /></td>
//       <td><FileName file={file} /></td>
//       <td><CommitMsg file={file} /></td>
//       <td className="age"><Time time={file.updated_at} /></td>
//     </tr>
//   );
// };

// FileListItem.propTypes = {
//   file: PropTypes.object.isRequired
// };

// function FileIcon({ file }) {
//   let icon;
//   file.type === 'folder' ? icon = "fa-folder" : icon = "fa-file-text-o";

//   return (
//     <td className="file-icon">
//       <i className={`fa ${icon}`} />
//     </td>
//   );
// }

// FileIcon.propTypes = {
//   file: PropTypes.object.isRequired
// };

// function FileName({ file }) {
//   return (
//     <td className="file-name">{file.name}</td>
//   );
// };

// FileName.propTypes = {
//   file: PropTypes.object.isRequired
// };

// function CommitMsg({ file }) {
//   return (
//     <td className="commit-msg">{file.latestCommit.message}</td>
//   )
// }

// CommitMsg.propTypes = {
//   file: PropTypes.object.isRequired
// };

// ex01: refactor code to not use table, makes the components more reusable
function FileList({ files }) {
  return (
    <div className="file-list">
      {files.map(file => (
        <div className="file-list-item">
          <FileListItem key={file.id} file={file} />
        </div>)
      )}
    </div>
  );
};

FileList.propTypes = {
  files: PropTypes.array
}

// function FileListItem({ file }) {
//   return (
//     <div className="file-list-item">
//       <Icon file={file} />
//       <Name file={file} />
//       <CommitMsg file={file} />
//       <Time time={file.updated_at} />
//     </div>
//   );
// };

// FileListItem.propTypes = {
//   file: PropTypes.object.isRequired
// }

// function Icon({ file }) {
//   let icon = "fa-file-text-o";
//   if (file.type === "folder") icon = "fa-folder";
//   return (
//     <span className="file-icon">
//       <i className={`fa ${icon}`} />
//     </span>
//   );
// };

// Icon.propTypes = {
//   file: PropTypes.object.isRequired
// };

// function Name({ file }) {
//   return (
//     <span className="file-name">{file.name}</span>
//   );
// };

// Name.propTypes = {
//   file: PropTypes.object.isRequired
// };

// const CommitMsg = ({ file }) => <span className="commit-msg">{file.latestCommit.message}</span>

// CommitMsg.propTypes = {
//   file: PropTypes.object.isRequired
// };

const testFiles = [
  {
    id: 1,
    name: 'src',
    type: 'folder',
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: 'Initial commit'
    }
  },
  {
    id: 2,
    name: 'tests',
    type: 'folder',
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: 'Initial commit'
    }
  },
  {
    id: 3,
    name: 'README',
    type: 'file',
    updated_at: "2016-07-18 21:24:00",
    latestCommit: {
      message: 'Added a readme'
    }
  },
];

ReactDOM.render(
  <FileList files={testFiles} />,
  document.querySelector('#root')
)