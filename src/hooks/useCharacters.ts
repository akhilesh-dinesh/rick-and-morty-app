import { useQuery } from '@tanstack/react-query';
import type { CharactersResponse } from '../types/character';

const fetchCharacters = async (page: number): Promise<CharactersResponse> => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const useCharacters = (page: number) => {
  return useQuery({
    queryKey: ['characters', page],
    queryFn: () => fetchCharacters(page),
    placeholderData: () => undefined,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};