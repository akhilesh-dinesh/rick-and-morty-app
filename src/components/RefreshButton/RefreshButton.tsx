import React from 'react';

interface RefreshButtonProps {
  onRefresh: () => void;
  isLoading: boolean;
}

export const RefreshButton: React.FC<RefreshButtonProps> = ({
  onRefresh,
  isLoading,
}) => {
  return (
    <button
      onClick={onRefresh}
      disabled={isLoading}
      style={{
        padding: '8px 16px',
        backgroundColor: '#3b82f6',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: isLoading ? 'not-allowed' : 'pointer',
        opacity: isLoading ? 0.6 : 1,
      }}
    >
      {isLoading ? 'Refreshing...' : 'Refresh'}
    </button>
  );
};