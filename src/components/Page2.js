import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { GraphsData } from './Service'
import LoadingSpinner from "./assets/loader.gif";
function PageTwo() {


  useEffect(() => {
    GraphsData().then(async (result) => {


      anychart.onDocumentReady(function () {
        // create the data 
        var data = result.Product_Used_Industry

        // create the chart and set the data
        let chart = anychart.heatMap(data);

        // set the chart title

        // create and configure the color scale
        var customColorScale = anychart.scales.ordinalColor();
        customColorScale.ranges([
          { equal: 0, name: "None", color: "#D9D9D9" },
          { from: 1, to: 5, name: 'Low (1-5)', color: '#9ED7FC' },
          { from: 5, to: 10, name: 'Medium (5-10)', color: '#00CDFD' },
          { greater: 10, name: 'High (10+)', color: '#26EA80' },


        ]);

        // set the colors for each range, from smaller to bigger
        customColorScale.colors(["#D9D9D9", "#9ED7FC", "#00CDFD", "#26EA80"]);

        // set the color scale as the color scale of the chart
        chart.colorScale(customColorScale);

        // enable the legend
        chart.legend(true);
        chart.title("Heat Map");
        var labels = chart.xAxis().labels();
        labels.rotation(-90);
        labels.fontSize(8);
        // set the container id
        chart.container("containerHeatMap");

        // initiate drawing the chart
        chart.draw();

      });
      document.getElementById("body-loaders").style.display = "block"

    })
  }, [])


  return (

    <div>
      <div id="body-loaders">
        {/* <div class="d-flex justify-content-center" style={{ marginTop: 100 }}>
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div> */}
        <div
          style={{
            height: "100%",
            position: 'fixed',
            left: '53.5%',
            top: '45%',
            textAlign: 'center'
          }}
        >
          <img width={70} height={70} src={LoadingSpinner} />
        </div>
      </div>
      <div style={{ marginTop: 70, marginBottom: 200 }}>
        <div style={{
          width: "100%",
          height: "1300px",
          margin: "0",
          padding: "0"
        }} id="containerHeatMap"></div>
      </div>
    </div>



  );
}

export default PageTwo;