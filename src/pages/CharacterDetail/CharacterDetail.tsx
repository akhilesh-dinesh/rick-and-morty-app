import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from '@tanstack/react-router';
import type { Character } from '../../types/character';
import { Spinner } from '../../components/Spinner/Spinner';

const fetchCharacter = async (id: string): Promise<Character> => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const CharacterDetail: React.FC = () => {
  const { characterId } = useParams({ from: '/character/$characterId' });
  const { data: character, isLoading, error } = useQuery({
    queryKey: ['character', characterId],
    queryFn: () => fetchCharacter(characterId),
  });

  if (isLoading) {
    return <Spinner/>;
  }

  if (error) {
    return <div>Error loading character: {error.message}</div>;
  }

  if (!character) {
    return <div>Character not found</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <button
        onClick={() => window.history.back()}
        style={{
          marginBottom: '20px',
          padding: '8px 16px',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Back to List
      </button>

      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
        <img
          src={character.image}
          alt={character.name}
          style={{ width: '200px', height: '200px', borderRadius: '8px' }}
        />
        <div>
          <h1>{character.name}</h1>
          <p>
            <strong>Status:</strong> {character.status}
          </p>
          <p>
            <strong>Species:</strong> {character.species}
          </p>
          <p>
            <strong>Type:</strong> {character.type || 'Unknown'}
          </p>
          <p>
            <strong>Gender:</strong> {character.gender}
          </p>
          <p>
            <strong>Origin:</strong> {character.origin.name}
          </p>
          <p>
            <strong>Location:</strong> {character.location.name}
          </p>
        </div>
      </div>
    </div>
  );
};