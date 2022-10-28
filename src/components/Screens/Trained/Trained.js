import React, { useEffect, useState } from "react";
import { GraphsData } from "../../Service";
import { useHistory } from "react-router-dom";
import chart from "chart.js/auto";
import logo from "../../assets/logo.png";
import LoadingSpinner from "../../assets/loader.gif";

import { any } from "prop-types";
import NewTrained from "../NewTrained";
import NewTrained2 from "../NewTrained2";
import './Trained.css'
function Graph1(props) {
  const [barChartDataName, setBarChartDataName] = useState("");
  const [barChartDataValue, setBarChartDataValue] = useState("");
  const [loading, setloading] = useState(true);

  let history = useHistory();
  useEffect(() => {
    GraphsData().then(async (result) => {
      setloading(false);

        let GraphDataTwo = result.Product_Count.slice(0, 10).map((e) => {
            return e.name;
        });
        let GraphDataOne = result.Product_Count.slice(0, 10).map((e) => {
            return e.value;
        });
        let IndustryGraphDataTwo = result.Industry_Count.slice(1, 11).map((e) => {
            return e.name;
        });
        let IndustryGraphDataOne = result.Industry_Count.slice(1, 11).map((e) => {
            return e.value;
        });
      document.getElementById("body-loader2").style.display = "none";
    });
  }, []);
  
  const onBackClick = () => {
    history.goBack();
  };
  return (
    <div>
      {loading ? (
        <div className="loader">
          <img width={70} height={70} src={LoadingSpinner} />
        </div>
      ) : (
        <>
          <NewTrained />
          <NewTrained2 />
        </>
      )}
    </div>
  );
}

export default Graph1;
