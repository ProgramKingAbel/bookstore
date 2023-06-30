import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../styles/Progressbar.css';

const ProgressBar = ({ percentage }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(percentage);
  }, [percentage]);

  return (
    <div className="progress-bar">
      <div className="circle">
        <CircularProgressbar value={progress} />
      </div>
      <div>
        <div className="percentage">{`${progress}%`}</div>
        <span className="completed">Completed</span>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default ProgressBar;
