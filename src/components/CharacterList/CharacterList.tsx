import React, { useState } from 'react';
import { CharacterTable } from '../CharacterTable/CharacterTable';
import { RefreshButton } from '../RefreshButton/RefreshButton';
import type { Character } from '../../types/character';

interface CharacterListProps {
  characters: Character[];
  isLoading: boolean;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onRefresh: () => void;
  isRefreshing: boolean;
}

export const CharacterList: React.FC<CharacterListProps> = ({
  characters,
  isLoading,
  currentPage,
  totalPages,
  onPageChange,
  onRefresh,
  isRefreshing,
}) => {
  const [pageInput, setPageInput] = useState('');
  const [inputError, setInputError] = useState('');

  // Function to generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    
    // Always show first page if not in first 3 pages
    if (currentPage > 3) {
      pages.push(1);
      if (currentPage > 4) {
        pages.push('...');
      }
    }
    
    // Show 3 consecutive pages around current page
    const startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(totalPages, currentPage + 1);
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    // Always show last page if not in last 3 pages
    if (currentPage < totalPages - 2) {
      if (currentPage < totalPages - 3) {
        pages.push('...');
      }
      pages.push(totalPages);
    }
    
    return pages;
  };

  const handleGoToPage = (e: React.FormEvent) => {
    e.preventDefault();
    const pageNum = parseInt(pageInput, 10);
    
    if (isNaN(pageNum)) {
      setInputError('Please enter a valid number');
      return;
    }
    
    if (pageNum < 1 || pageNum > totalPages) {
      setInputError(`Please enter a number between 1 and ${totalPages}`);
      return;
    }
    
    onPageChange(pageNum);
    setPageInput('');
    setInputError('');
  };

  const pageNumbers = getPageNumbers();

  return (
    <div style={{ padding: '20px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <h1>Rick and Morty Characters</h1>
        <RefreshButton onRefresh={onRefresh} isLoading={isRefreshing} />
      </div>

      <CharacterTable characters={characters} isLoading={isLoading} />
      {!isLoading && (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
          gap: '8px',
          flexWrap: 'wrap',
        }}
      >
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          style={{
            padding: '8px 16px',
            backgroundColor: currentPage === 1 ? '#ccc' : '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
            minWidth: '80px',
          }}
        >
          Previous
        </button>

        {pageNumbers.map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === 'number' ? onPageChange(page) : null}
            disabled={typeof page !== 'number'}
            style={{
              padding: '8px 12px',
              minWidth: '40px',
              backgroundColor: 
                page === currentPage ? '#1d4ed8' : 
                typeof page === 'number' ? '#3b82f6' : 'transparent',
              color: typeof page === 'number' ? 'white' : '#333',
              border: typeof page === 'number' ? 'none' : '1px solid #ddd',
              borderRadius: '4px',
              cursor: typeof page === 'number' ? 'pointer' : 'default',
            }}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{
            padding: '8px 16px',
            backgroundColor: currentPage === totalPages ? '#ccc' : '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
            minWidth: '80px',
          }}
        >
          Next
        </button>
      </div> )}

      {/* Go to Page Input */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginTop: '15px',
        alignItems: 'center',
        gap: '8px'
      }}>
        <form onSubmit={handleGoToPage} style={{ display: 'flex', gap: '8px' }}>
          <span style={{ fontSize: '14px' }}>Go to page:</span>
          <input
            type="number"
            value={pageInput}
            onChange={(e) => {
              setPageInput(e.target.value);
              setInputError(''); // clear error while typing
            }}
            min="1"
            max={totalPages}
            placeholder={`1-${totalPages}`}
            style={{
              padding: '6px 8px',
              width: '80px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              textAlign: 'center'
            }}
          />
          <button
            type="submit"
            disabled={!pageInput} // only disable if empty
            style={{
              padding: '6px 12px',
              backgroundColor: !pageInput ? '#ccc' : '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: !pageInput ? 'not-allowed' : 'pointer',
            }}
          >
            Go
          </button>
        </form>
      </div>

      {inputError && (
        <div style={{ 
          color: '#e53e3e', 
          fontSize: '12px', 
          textAlign: 'center', 
          marginTop: '5px' 
        }}>
          {inputError}
        </div>
      )}

      <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '14px' }}>
        Page {currentPage} of {totalPages}
      </div>
    </div> 
  );
};
