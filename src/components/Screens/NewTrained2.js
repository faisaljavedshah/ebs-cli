import React from 'react';
import {Bar} from 'react-chartjs-2';
import { GraphsData } from '../Service';

export default class barchart extends React.Component {
  constructor(props) {
    super(props);
    this.state={ 
      apiData  : {
      labels: [],
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
          data: []
        }
      ]
    }
    }
    
   }


   componentDidMount(){
    console.log(this.state);
    console.log('inside second bar');
    this.get_data();
   }

   get_data(){
    GraphsData().then( (result)=> {  
      let GraphDataTwo = result.Product_Count.slice(0, 10).map((e) => { return e.name });
      let GraphDataOne = result.Product_Count.slice(0, 10).map((e) => { return e.value });
      this.setState( {
        apiData: {
          labels: GraphDataTwo,
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
              data: GraphDataOne
            }
          ]
        }
      })

    });

  }
  render() {
    return (
        <div style={{padding : "5%"}}>
            <h2 style={{fontWeight : 700,textAlign:'center'}}>Number of Scripts per Product (Top 10)</h2>
            <Bar data={this.state.apiData} />
        </div>
    );
  }
}