import React from 'react';
import { Card, CardHeader, Box } from '@mui/material';
import ReactApexChart from 'react-apexcharts';

export default function PieChart({
  users = [],
  authors = [],
  borrowals = [],
  downloads = 0, // assuming this is a number, not an array
}) {
  const chartLabels = ['Users', 'Authors', 'Reservations', 'Book Downloads'];
  const chartData = [users.length, authors.length, borrowals.length, downloads];

  const chartOptions = {
    labels: chartLabels,
    legend: {
      position: 'bottom',
    },
    tooltip: {
      y: {
        formatter: (val) => `${val} count`,
      },
    },
    colors: ['#3f51b5', '#00bcd4', '#ff9800', '#4caf50'],
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '14px',
      },
    },
    stroke: {
      show: false,
    },
  };

  return (
    <Card>
      <CardHeader
        title="Overview with Downloads Addition"
        subheader="Distribution of Users, Authors, Reservations, and Downloads"
      />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="pie" series={chartData} options={chartOptions} height={350} />
      </Box>
    </Card>
  );
}
