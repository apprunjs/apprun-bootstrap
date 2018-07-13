import app, { Component } from 'apprun';
import { Card } from './ui';

declare var Chart;
declare var moment;

const timeFormat = 'MM/DD/YYYY HH:mm';
const color = Chart.helpers.color;
const chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
};

const newDateString = (days) => moment().add(days, 'd').format(timeFormat);
const randomScalingFactor = (min = -100, max = 100) => Math.random() * (max - min) + min;

export default class extends Component {

  state = {
    data: {
      type: 'bar',
      data: {
        labels: [
          newDateString(0),
          newDateString(1),
          newDateString(2),
          newDateString(3),
          newDateString(4),
          newDateString(5),
          newDateString(6)
        ],
        datasets: [{
          type: 'bar',
          label: 'Dataset 1',
          backgroundColor: color(chartColors.red).alpha(0.5).rgbString(),
          borderColor: chartColors.red,
          data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
          ],
        }, {
          type: 'bar',
          label: 'Dataset 2',
          backgroundColor: color(chartColors.blue).alpha(0.5).rgbString(),
          borderColor: chartColors.blue,
          data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
          ],
        }, {
          type: 'line',
          label: 'Dataset 3',
          backgroundColor: color(chartColors.green).alpha(0.5).rgbString(),
          borderColor: chartColors.green,
          fill: false,
          data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
          ],
        }]
      },
      options: {
        title: {
          text: 'Chart.js Combo Time Scale'
        },
        scales: {
          xAxes: [{
            type: 'time',
            display: true,
            time: {
              format: timeFormat,
             }
          }],
        },
      }
    }
  };

  view = _ => <Card header="Chart JS">
    <canvas id="canvas"></canvas>
  </Card>;

  update = {};

  rendered = ({ data }) => {
    const ctx = (document.getElementById('canvas') as any).getContext('2d');
    new Chart(ctx, data);
  }
}

