import React, { useState } from 'react';
import '../styles/Progress.css'; // Import your CSS file

function ProgressCircle() {
  const [percentage, setPercentage] = useState(100); // Change this value as needed

  // Calculate the rotation degree for the progress bar
  const rotateDegree = (percentage / 100) * 360;

  // Create a style object to dynamically set the rotation
  const progressBarStyle = {
    transform: `rotate(${rotateDegree}deg)`,
  };

  return (
    <div className="progress-circle">
      <div className="progress-circle-bar" style={progressBarStyle}></div>
      <div className="progress-circle-text">{percentage}%</div>
    </div>
  );
}

export default ProgressCircle;
