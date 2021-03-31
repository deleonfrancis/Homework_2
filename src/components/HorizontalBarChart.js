import React from 'react'
import { HorizontalBar } from 'react-chartjs-2'

const data = {
  labels: ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS', 'Express','MongoDB', 'MySQL', 'jQuery', 'Bootstrap'],
  datasets: [
    {
      label: 'Skill Level',
      data: [75, 75, 80, 95, 90, 75, 75, 70, 85, 95],
      backgroundColor: [
        'rgba(255, 99, 132, 0.3)',
        'rgba(54, 162, 235, 0.3)',
        'rgba(255, 206, 86, 0.3)',
        'rgba(75, 192, 192, 0.3)',
        'rgba(153, 102, 255, 0.3)',
        'rgba(255, 159, 64, 0.3)',
        'rgba(255, 99, 132, 0.3)',
        'rgba(54, 162, 235, 0.3)',
        'rgba(255, 206, 86, 0.3)',
        'rgba(75, 192, 192, 0.3)',
      ],
    },
  ],
}

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}

const HorizontalBarChart = () => (
  <>
    <div className='header'>
      <h3 className='text-bg'>Skills</h3>
    </div>
    <HorizontalBar data={data} options={options} />
  </>
)

export default HorizontalBarChart
