import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import type { ColumnDef } from "@tanstack/react-table";
import type { Character } from '../../types/character';
import { useNavigate } from '@tanstack/react-router';
import { Spinner } from '../Spinner/Spinner';

interface CharacterTableProps {
  characters: Character[];
  isLoading: boolean;
}

export const CharacterTable: React.FC<CharacterTableProps> = ({
  characters,
  isLoading,
}) => {
  const navigate = useNavigate();

  const columns: ColumnDef<Character>[] = [
    {
      accessorKey: 'image',
      header: 'Image',
      cell: ({ row }) => (
        <img
          src={row.original.image}
          alt={row.original.name}
          style={{ width: '50px', height: '50px', borderRadius: '4px' }}
        />
      ),
    },
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'status',
      header: 'Status',
    },
    {
      accessorKey: 'species',
      header: 'Species',
    },
    {
      accessorKey: 'gender',
      header: 'Gender',
    },
  ];

  const table = useReactTable({
    data: characters,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleRowClick = (characterId: number) => {
    navigate({ to: '/character/$characterId', params: { characterId: characterId.toString() } });
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                style={{
                  borderBottom: '1px solid #ddd',
                  padding: '8px',
                  textAlign: 'left',
                }}
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr
            key={row.id}
            onClick={() => handleRowClick(row.original.id)}
            style={{
              cursor: 'pointer',
              borderBottom: '1px solid #ddd',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f5f5f5';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} style={{ padding: '8px' }}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};