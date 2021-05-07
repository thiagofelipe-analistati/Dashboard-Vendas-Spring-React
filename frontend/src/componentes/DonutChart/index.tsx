import Chart from 'react-apexcharts';
import axios from 'axios'
import { BASE_URL } from 'Utils/requests';
import { SaleSum } from 'types/sales';

 type ChartData = {
    labels :  string[];
    series : number [];
 }


function DonutChart() { 

    let chartData : ChartData = {labels :[], series :[]};

    axios.get(`${BASE_URL}/sales/amount-by-seller`)
        .then(response => {
            const data = response.data as SaleSum[];
            const myLabel = data.map(x => x.sellerName);
            const mySeries = data.map(x => x.sum);
            chartData = { labels : myLabel, series : mySeries};
            console.log(chartData)
        });

    //const mockData = {
    //    series: [477138, 499928, 444867, 220426, 473088],
    //    labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    //}
    
    const options = {
        legend: {
            show: true
        }
    }
    return (
        <Chart 
            options={{...options, labels: chartData.labels}}
            series={chartData.series}
            type="donut"
            height="240"
        />
    );
  }
  
  export default DonutChart;


