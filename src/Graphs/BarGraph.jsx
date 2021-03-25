import {Bar,Chart} from 'react-chartjs-2';
require('./Roundedbars');

const BarGraph=(props)=>{
    
    const variant=props.title;
    let color
    if (variant==="humidity")
        color="#94ACF3"
    else if(variant==="watering")
        color="#A6D3FF"
    else if(variant==="fertilising")
        color="#98F1A5"
    else if(variant=="temperature")
        color="#FF7878"


    const options={
        title: {
             display: false,
             text: props.title,
         },
         cornerRadius: 100,
        elements: {
          point: {
            radius: 1.6,
          },
    
        },
        responsive: true,

        legend: {
          display: false
        },
        scales: {
          xAxes: [{  ticks: {
              fontColor: "grey" ,stepSize:10
            },
            gridLines: {
              tickMarkLength: false,
            lineWidth:1.5,
              color:"grey",drawOnChartArea:false,
            }
          }],
          tooplips: {
            shadowOffsetX: 3,
            shadowOffsetY: 3,
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
          yAxes: [{
            ticks: {
              fontColor: "grey",
              beginAtZero:true,
              min:props.start*-1,
              display: false
            },
    
            gridLines: {
              tickMarkLength: false,
              lineWidth:1.5,
              color:"grey",
              drawOnChartArea:false
            }
            , afterBuildTicks: function(humdaysChart) {    
                humdaysChart.ticks =props.data;
                
              }
    
          }]
    
        }
      };
      const givenData = {
        labels: props.labels,
        datasets: [
          {
            data:props.data,
            backgroundColor:color,
            barThickness: 20.5,
          }
        ]
       
      };
     return <Bar data={givenData} options={options} width={80} height={90} />;
};
export default BarGraph;