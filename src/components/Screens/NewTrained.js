import {Bar} from 'react-chartjs-2';
import React from 'react';
import { GraphsData } from '../Service'

export default class barchart extends React.Component {

  constructor(props) {
    super(props);
    this.state={ 
      apiData  : {
      labels: [],  
      datasets: [
        {
          label: '',
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: []
        }
      ]
    }
    }
   }
   componentDidMount(){
    console.log(this.state);
    console.log('inside first bar chart');
    this.get_data();

   }
   get_data(){
    GraphsData().then( (result)=> {  
      let IndustryGraphDataTwo = result.Industry_Count.slice(1, 11).map((e) => { return e.name });
      let IndustryGraphDataOne = result.Industry_Count.slice(1, 11).map((e) => { return e.value });
  
      this.setState( {
        apiData: {
          labels: IndustryGraphDataTwo,
          legend : false,
          datasets: [
            {
              label: '',
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              hoverBorderColor: 'rgba(255,99,132,1)',
              data: IndustryGraphDataOne
            }
          ]
        }
      })

    });

  }


  render() {
    return (
        <div style={{padding : "5%"}}>
            <h2 style={{fontWeight : 700,textAlign:'center'}}>Number of Scripts per Industry (Top 10)</h2>
            <Bar data={this.state.apiData} />
        </div>
    );
  }
}