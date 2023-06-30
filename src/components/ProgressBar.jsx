import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ percentage }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(percentage);
  }, [percentage]);

  return (
    <div className="progress-bar">
      <div
        style={{
          transform: `rotate(${(360 * progress) / 100}deg)`,
          background: 'linear-gradient(to right, dodgerblue, lightblue)',
          boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
        }}
      />
      <div className="percentage">
        {progress}
        %
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default ProgressBar;
