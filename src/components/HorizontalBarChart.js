import React from 'react'
import { HorizontalBar } from 'react-chartjs-2'

const data = {
  labels: ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS', 'Express','MongoDB', 'MySQL', 'jQuery', 'Bootstrap'],
  datasets: [
    {
      label: 'Skill Level',
      data: [75, 75, 80, 95, 90, 80, 85, 80, 85, 95],
      backgroundColor: function(labels){
        return 'rgba(139, 99, 75, 0.3)'
      }
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
          callback: function(value) {
            return (value ) + '%';
        }
        },
      },
    ],
  },
    legend: {
        display: false
    },
    tooltips: {
        callbacks: {
           label: function(tooltipItem) {
                  return tooltipItem.xLabel + '%';
           }
        }
    }
}

const HorizontalBarChart = () => (
  <>
    <div className=''>
      <h3 className='text-bg'>Skills</h3>
    </div>
    <HorizontalBar data={data} options={options} />
  </>
)

export default HorizontalBarChart
