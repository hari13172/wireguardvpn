import React, { useState, useEffect, useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const generateRandomData = () => Math.random() * 8 + 1;

const LineChart = () => {
  const initialData = Array.from({ length: 50 }, generateRandomData);
  const [data, setData] = useState(initialData);
  const xAxisCounter = useRef(50); // To keep track of the x-axis values

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => {
        const newData = [...prevData.slice(1), generateRandomData()];
        xAxisCounter.current += 1; // Increment the x-axis counter
        return newData;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const options = {
    chart: {
      type: "column",
      animation: {
        duration: 1000,
        easing: 'linear'
      }
    },
    title: {
      text: "Real-time Data",
    },
    plotOptions: {
      series: {
        pointPadding: 0,
        groupPadding: 0,
        animation: {
          duration: 1000,
          easing: 'linear'
        }
      },
    },
    series: [
      {
        name: "Random Data",
        data: data.map((value) => ({
          y: value,
          color: value > 6 ? "darkblue" : "lightblue",
        })),
      },
    ],
    xAxis: {
      categories: Array.from({ length: data.length }, (_, i) => xAxisCounter.current - data.length + i + 1),
      tickInterval: 1,
      labels: {
        enabled: true
      },
    },
    yAxis: {
      title: {
        text: "Value",
      },
    },
    credits: {
      enabled: false
    }
  };

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default LineChart;
