import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/ShakerTableOutput.module.css";
import OscarData from './Data.csv';
import Papa from 'papaparse';
import {useEffect, useState} from 'react';
import {Bar} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
)

const ShakerTableOutput = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

    const [chartData, setChartData] = useState({
      datasets: []
    });
    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
      Papa.parse(OscarData, {
        download: true,
        header: true,
        dynamicTyping: true,
        delimiter: "",
        complete: ((result) => {
          console.log(result)
          setChartData({
            labels: result.data.map((item, index) => [item["time"]]).filter( String ),
            datasets: [
              {
                label: "Acceleration",
                data: result.data.map((item, index) => [item["acceleration"]]).filter( Number ),
                borderColor: "black",
                backgroundColor: "red"
              }
            ]
          });
          setChartOptions({
            responsive: true,
            plugins: {
              legend: {
                position: 'top'
              },
              title: {
                display: true,
                text: "SEISMOHISTORY"
              }
            }
          })
        })
      })
    }, [])

  return (
    <div>
      <div className={styles.frame} onClick={onFrameContainerClick}>
        <div className={styles.backToHomePageWrapper}>
          <b className={styles.backToHome}>Back to Home Page</b>
        </div>
      </div>
      <div/>
      {
        chartData.datasets.length > 0 ? (
          <div>
            <Bar options={chartOptions} data={chartData}/>
            </div>
        ) : (
          <div>
            Loading...
            </div>
        )
      }
    </div>
  );
};

export default ShakerTableOutput;
