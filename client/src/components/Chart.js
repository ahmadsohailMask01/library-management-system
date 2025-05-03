// AppCountsChart.jsx
import React from 'react';
import { Card, CardHeader, Box } from '@mui/material';
import ReactApexChart from 'react-apexcharts';

export default function Chart({ users = [], authors = [], borrowals = [] }) {
  const userCount = users.length;
  const authorCount = authors.length;
  const borrowalCount = borrowals.length;

  const chartOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
    },
    xaxis: {
      categories: ['Users', 'Authors', 'Borrowals'],
      labels: {
        style: {
          fontSize: '14px',
        },
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '40%',
        distributed: true,
      },
    },
    fill: {
      colors: ['#3f51b5', '#00bcd4', '#ff9800'],
    },
    dataLabels: {
      enabled: true,
    },
    tooltip: {
      y: {
        formatter: (val) => `${val} count`,
      },
    },
  };

  const chartData = [
    {
      data: [userCount, authorCount, borrowalCount],
    },
  ];

  return (
    <Card>
      <CardHeader title="Library Overview" subheader="Users, Authors, and Borrowals Count" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="bar" series={chartData} options={chartOptions} height={320} />
      </Box>
    </Card>
  );
}
