import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Dropdown from "../dropdown/Dropdown";
import './chart.css'
import { filtersData } from "../../utils/data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
interface HashProp {
  year: number;
  number: number;
}

interface ChartProps {
  label?: string;
  labels: string[];
//   data: {
//     homelessness: [HashProp];
//     violentCrimes: [HashProp];
//     drugCrimes: [HashProp];
//     theftCrimes: [HashProp];
//   };
data:any
}

const Cart: React.FC<ChartProps> = ({ label ,labels,data}) => {
  const [homelessness, setHomelessness] = useState<number[] | null>();
  const [violentCrimes, setViolentCrimes] = useState<number[] | null>();
  const [drugCrimes, setDrugCrimes] = useState<number[] | null>();
  const [theftCrimes, setTheftCrimes] = useState<number[] | null>();
  const [list, setList] = useState<number[] | null>();
  

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const,
      },
    
    },
  };

  
useEffect(() => {
  const tempData:any[] = [];

  Object.keys(data).forEach((key) => {
    const property = data[key];


    if (Array.isArray(property)) {
      property.forEach((item) => {
        const year = item.year;
        const number = item.number;

        tempData.push({ year, number, key });
      });
    } else {
      tempData.push({ key, value: key });
    }
  });

  setList(tempData);
}, []);


  useEffect(() => {
    const tempHomelessnessList = [];
    const tempVolentCrimesList = [];
    const tempDrugCrimesList = [];
    const tempTheftCrimesList = [];
    // const formattedData = formatData()
    const homelessnessData = data.homelessness;
    for (let i = 0; i < homelessnessData.length; i++) {
      const pair = homelessnessData[i];
      const year = pair.year;
      const number = pair.number;
      tempHomelessnessList.push(number);

      setHomelessness(tempHomelessnessList);
    }

     const violentCrimes = data.violentCrimes;
     for (let i = 0; i < violentCrimes.length; i++) {
       const pair = violentCrimes[i];
       const year = pair.year;
       const number = pair.number;
       tempVolentCrimesList.push(number);

       setViolentCrimes(tempVolentCrimesList);
     }
     const drugCrimes = data.drugCrimes;
     for (let i = 0; i < drugCrimes.length; i++) {
       const pair = drugCrimes[i];
       const year = pair.year;
       const number = pair.number;
       tempDrugCrimesList.push(number);
       setDrugCrimes(tempDrugCrimesList);
     }
     const theftCrimes = data.theftCrimes;
     for (let i = 0; i < theftCrimes.length; i++) {
       const pair = theftCrimes[i];
       const year = pair.year;
       const number = pair.number;
       tempTheftCrimesList.push(number);

       setTheftCrimes(tempTheftCrimesList);
     }
  }, []);

  

   


  const chartdata = {
    labels,
    datasets: [
      {
        label: "Homelessness",
        data: homelessness,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Violent Crimes",
        data: violentCrimes,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Drug Crimes",
        data: drugCrimes,
        borderColor: "rgb(213, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Theft Crimes",
        data: theftCrimes,
        borderColor: "rgb(213, 122, 215)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div className="chart-container">
      <div className="chart-header">
        <h3>{label}</h3>
        <div className="chart-flter-container ">
          {filtersData.map((filter) => (
            <Dropdown label={filter}/>
          ))}
        </div>
      </div>

      <Line options={options} data={chartdata} />
    </div>
  );
};

export default Cart;
