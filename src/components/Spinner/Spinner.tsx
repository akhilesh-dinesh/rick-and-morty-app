import React from 'react';
import './Spinner.css';

interface SpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
  message?: string;
  fullScreen?: boolean;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'medium',
  color = '#3b82f6',
  className = '',
  message,
  fullScreen = true,
}) => {
  const sizeMap = {
    small: '16px',
    medium: '32px',
    large: '48px',
  };

  const spinner = (
    <div className={`spinner-container ${fullScreen ? 'spinner-fullscreen' : ''}`}>
      <div
        className={`spinner ${className}`}
        style={{
          width: sizeMap[size],
          height: sizeMap[size],
          borderColor: `${color}20`,
          borderTopColor: color,
        }}
      />
      {message && (
        <div 
          className="spinner-message"
          style={{ color, marginTop: '12px' }}
        >
          {message}
        </div>
      )}
    </div>
  );

  return spinner;
};