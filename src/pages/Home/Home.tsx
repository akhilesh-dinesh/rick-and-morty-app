import React, { useEffect } from 'react';
import { CharacterList } from '../../components/CharacterList/CharacterList';
import { useCharacters } from '../../hooks/useCharacters';
import { setStoredPage, getStoredPage } from '../../utils/storage';
import { useNavigate, useSearch } from '@tanstack/react-router';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const search = useSearch({ from: '/' });
  const currentPage = search.page || getStoredPage();

  const { data, isLoading, isRefetching, refetch } = useCharacters(currentPage);

  useEffect(() => {
    setStoredPage(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    navigate({ search: { page: String(newPage) } });
  };

  const handleRefresh = () => {
    refetch();
  };

  return (
    <CharacterList
      characters={data?.results || []}
      isLoading={isLoading}
      currentPage={currentPage}
      totalPages={data?.info.pages || 0}
      onPageChange={handlePageChange}
      onRefresh={handleRefresh}
      isRefreshing={isRefetching}
    />
  );
};