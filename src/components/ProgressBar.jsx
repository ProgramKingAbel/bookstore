import React, {useState, useEffect} from 'react';

const ProgressBar = ({ percentage }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress(percentage);
    }, [percentage]);

    return (
        <div className="progress-bar">
            <div
                style={{ transform: `rotate(${(360 * progress) / 100}deg)` }}
            ></div>
            <div className="percentage">{progress}%</div>
        </div>
    );
};

export default ProgressBar;