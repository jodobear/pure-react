import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

function Time({ time }) {
  const timeString = moment(time).fromNow();
  return (
    <span className="time">{timeString}</span>
  );
};

Time.propTypes = {
  time: PropTypes.string.isRequired
}

// using default syntax
export default Time;
// import, like so: import Time from './time'

// named export
export { Time }
// import will be: import { Time } from './time'