'use client';
import {
  Box,
  Heading,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';
import { useState, useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  ColumnDef,
} from '@tanstack/react-table';
import moment from 'moment';

interface StreamData {
  songName: string;
  artist: string;
  dateStreamed: string;
  streamCount: number;
  userId: string;
}

const initialData: StreamData[] = [
  {
    songName: 'Song A',
    artist: 'Artist 1',
    dateStreamed: '2025-02-01',
    streamCount: 1200,
    userId: 'U123',
  },
  {
    songName: 'Song B',
    artist: 'Artist 2',
    dateStreamed: '2025-02-02',
    streamCount: 950,
    userId: 'U124',
  },
  {
    songName: 'Song C',
    artist: 'Artist 3',
    dateStreamed: '2025-02-03',
    streamCount: 870,
    userId: 'U125',
  },
  {
    songName: 'Song D',
    artist: 'Artist 1',
    dateStreamed: '2025-02-04',
    streamCount: 740,
    userId: 'U126',
  },
  {
    songName: 'Song E',
    artist: 'Artist 2',
    dateStreamed: '2025-02-05',
    streamCount: 630,
    userId: 'U127',
  },
  {
    songName: 'Song F',
    artist: 'Artist 3',
    dateStreamed: '2025-02-06',
    streamCount: 520,
    userId: 'U128',
  },
  {
    songName: 'Song G',
    artist: 'Artist 1',
    dateStreamed: '2025-02-07',
    streamCount: 430,
    userId: 'U129',
  },
  {
    songName: 'Song H',
    artist: 'Artist 2',
    dateStreamed: '2025-02-08',
    streamCount: 320,
    userId: 'U130',
  },
  {
    songName: 'Song I',
    artist: 'Artist 3',
    dateStreamed: '2025-02-09',
    streamCount: 210,
    userId: 'U131',
  },
  {
    songName: 'Song J',
    artist: 'Artist 1',
    dateStreamed: '2025-02-10',
    streamCount: 100,
    userId: 'U132',
  },
];

const DataTable = () => {
  const [filterInput, setFilterInput] = useState('');

  const columns = useMemo<ColumnDef<StreamData>[]>(
    () => [
      { accessorKey: 'songName', header: 'Song Name' },
      { accessorKey: 'artist', header: 'Artist' },
      {
        accessorKey: 'dateStreamed',
        header: 'Date Streamed',
        cell: (info) => moment(info.getValue() as string).format('DD MMM YYYY'),
      },
      { accessorKey: 'streamCount', header: 'Stream Count' },
      { accessorKey: 'userId', header: 'User ID' },
    ],
    []
  );

  const [data, setData] = useState(initialData);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filterInput,
    },
    onGlobalFilterChange: setFilterInput,
  });

  return (
    <Box p={6}>
      <Heading className='text-xl font-bold text-gray-800 dark:text-gray-200 mb-6'>
        Recent Streams
      </Heading>

      <Input
        className='text-gray-800 dark:text-gray-200'
        placeholder='Filter by artist or song name...'
        value={filterInput}
        onChange={(e) => setFilterInput(e.target.value)}
        mb={4}
      />
      <Table className='text-gray-800 dark:text-gray-200'>
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.column.columnDef.header as string}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row) => (
            <Tr key={row.id}>
              {row.getVisibleCells().map((cell) => {
                return (
                  <Td key={cell.id}>
                    {/* @ts-ignore */}
                    {cell.renderValue()}
                  </Td>
                );
              })}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default DataTable;
