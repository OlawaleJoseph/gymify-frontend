import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const LineChart = ({ dataArr }) => {
  const data = {
    labels: [...Array(30).keys()].map(key => key + 1),
    datasets: [
      {
        label: 'Number of Hours',
        data: dataArr,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  return (
    <div className="lineGraph col-lg-6 flex-grow-1">
      <div className="header">
        <h5 className="title">Progress</h5>
      </div>
      <Line className="graph" data={data} options={options} />
    </div>
  );
};

LineChart.propTypes = {
  dataArr: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default LineChart;
