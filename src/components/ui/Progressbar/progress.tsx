import React from 'react';

interface ProgressBarProps {
  progress: number;
  height?: number;
  color?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  progress, 
  height = 20,
  color = '#4CAF50'
}) => {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#e0e0e0',
        borderRadius: height / 2,
        height: height
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          backgroundColor: color,
          height: '100%',
          borderRadius: height / 2,
          transition: 'width 0.3s ease-in-out'
        }}
      />
    </div>
  );
};

export default ProgressBar;
