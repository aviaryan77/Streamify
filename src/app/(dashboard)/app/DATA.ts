export interface IMatrics {
  name: string;
  level: string;
  value: string;
}

export const metrices: IMatrics[] = [
  { name: 'Total Users', level: '70%', value: '10,000' },
  { name: 'Active Users', level: '75%', value: '7,000' },
  { name: 'Total Streams', level: '65%', value: '4,00,000' },
  { name: 'Revenue', level: '90%', value: '$1000' },
  { name: 'Top Artist', level: '80%', value: 'Lara' },
];
