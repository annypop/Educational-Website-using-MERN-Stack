import React from "react";
import "../App.css";
import ReactApexChart from "react-apexcharts";

function CompareBarGraph() {
    const series = [{
        name: '2018',
        data: [95, 87, 80, 50, 73, 70, 85, 52, 45]
      }, {
        name: '2019',
        data: [97, 89, 79, 45, 78, 72, 90, 57, 39]
      }, {
        name: '2020',
        data: [98, 91, 82, 63, 81, 75, 93, 53, 51]
      }];
      const options = {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Computer Science', 'Electronics & Communication', 'Electrical Engineering', 'Chemical Engineering', 'Mechanical Engineering', 'Civil Engineering', 'Information Technology', 'Mathematics', 'Physics'],
        },
        yaxis: {
          title: {
            text: 'Percentage of Students'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "" + val + " %"
            }
          }
        }
    };
    return(
        <div style={{
            backgroundColor:"white",
            textAlign:"center",
        }}>
            <br/>
            <h2>Comparision Graph for placement for last 3 years</h2>
            <br/>
            <ReactApexChart options={options} series={series} type="bar" height={350} />
            <br/>
        </div>
    );
}

export default CompareBarGraph;