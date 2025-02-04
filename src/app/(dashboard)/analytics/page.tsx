'use client';
import { Box, Card, CardBody, Heading } from '@chakra-ui/react';
import { Line, Pie, Bar } from 'react-chartjs-2';
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from 'chart.js';
import moment from 'moment';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

const userGrowthData = {
  labels: Array.from({ length: 12 }, (_, i) =>
    moment().subtract(i, 'months').format('MMM YYYY')
  ).reverse(),
  datasets: [
    {
      label: 'Total Users',
      data: [
        1000, 1500, 2200, 2800, 3400, 4500, 5300, 6100, 7200, 8500, 9100, 10000,
      ],
      borderColor: '#3182CE',
      backgroundColor: 'rgba(49, 130, 206, 0.5)',
    },
    {
      label: 'Active Users',
      data: [
        700, 1100, 1700, 2300, 2900, 3600, 4300, 5000, 5900, 6700, 7300, 8100,
      ],
      // fuchsia color code?hsl(329, 88.50%, 69.40%)
      borderColor: 'magenta',
      backgroundColor: 'rgba(238, 101, 242, 0.5)',
    },
  ],
};

const revenueData = {
  labels: ['Subscriptions', 'Ads', 'Sponsorships', 'Merchandise'],
  datasets: [
    {
      data: [55, 25, 15, 5],
      backgroundColor: ['#ab34ab', '#E53E3E', '#60ff87', '#D69E2E'],
    },
  ],
};

const streamedSongsData = {
  labels: ['Song A', 'Song B', 'Song C', 'Song D', 'Song E'],
  datasets: [
    {
      label: 'Streams (Last 30 Days)',
      data: [12000, 9800, 7500, 6700, 5800],
      backgroundColor: '#ab34ab',
    },
  ],
};

const Dashboard = () => {
  return (
    <Box p={6}>
      <Heading className='text-xl font-bold text-gray-800 dark:text-gray-200 mb-6'>
        Dashboard - Data Visualization
      </Heading>

      <Box
        display='grid'
        gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
        gap={6}
      >
        <Card>
          <CardBody>
            <Heading size='md' mb={4}>
              User Growth
            </Heading>
            <Line data={userGrowthData} />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Heading size='md' mb={4}>
              Revenue Distribution
            </Heading>
            <Pie data={revenueData} />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Heading size='md' mb={4}>
              Top 5 Streamed Songs
            </Heading>
            <Bar data={streamedSongsData} />
          </CardBody>
        </Card>
      </Box>
    </Box>
  );
};

export default Dashboard;
