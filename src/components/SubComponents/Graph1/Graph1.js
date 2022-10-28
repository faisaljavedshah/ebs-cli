import React, { useEffect, useState } from "react";
import { GraphsData } from "../../Service";
import { useHistory } from "react-router-dom";
import logo from "../../assets/logo.png";
import LoadingSpinner from "../../assets/loader.gif";

function Graph1(props) {
    const [barChartDataName, setBarChartDataName] = useState("");
    const [barChartDataValue, setBarChartDataValue] = useState("");
    const [loading, setloading] = useState(true);

    let history = useHistory();

    useEffect(() => { }, []);

    useEffect(() => {
        setloading(true);
        GraphsData().then(async (result) => {
            let graphDataRender = result.Product_Count.slice(0, 10).map((e) => {
                return e.name;
            });
            let graphDataRender2 = result.Product_Count.slice(0, 10).map(
                (e) => {
                    return e.value;
                }
            );
            let IndgraphDataRender = result.Industry_Count.slice(1, 11).map(
                (e) => {
                    return e.name;
                }
            );
            let IndgraphDataRender2 = result.Industry_Count.slice(1, 11).map(
                (e) => {
                    return e.value;
                }
            );
            setloading(false);

            // setBarChartDataName(graphDataRender)
            // setBarChartDataValue(graphDataRender2)
            const ctx = document.getElementById("myChart12").getContext("2d");
            const myChart = new Chart(ctx, {
                type: "horizontalBar",
                data: {
                    labels: graphDataRender,
                    datasets: [
                        {
                            label: "Respective Count",
                            data: graphDataRender2,
                            backgroundColor: [
                                "rgba(255, 99, 132, 0.2)",
                                "rgba(54, 162, 235, 0.2)",
                                "rgba(255, 206, 86, 0.2)",
                                "rgba(75, 192, 192, 0.2)",
                                "rgba(153, 102, 255, 0.2)",
                                "rgba(255, 159, 64, 0.2)",
                            ],
                            borderColor: [
                                "rgba(255, 99, 132, 1)",
                                "rgba(54, 162, 235, 1)",
                                "rgba(255, 206, 86, 1)",
                                "rgba(75, 192, 192, 1)",
                                "rgba(153, 102, 255, 1)",
                                "rgba(255, 159, 64, 1)",
                            ],
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    legend: {
                        display: false,
                    },
                },
            });
            const ctx1 = document.getElementById("myChart21").getContext("2d");
            const myChart1 = new Chart(ctx1, {
                type: "horizontalBar",
                data: {
                    labels: IndgraphDataRender,
                    datasets: [
                        {
                            label: "Respective Count",
                            data: IndgraphDataRender2,
                            backgroundColor: [
                                "rgba(255, 99, 132, 0.2)",
                                "rgba(54, 162, 235, 0.2)",
                                "rgba(255, 206, 86, 0.2)",
                                "rgba(75, 192, 192, 0.2)",
                                "rgba(153, 102, 255, 0.2)",
                                "rgba(255, 159, 64, 0.2)",
                            ],
                            borderColor: [
                                "rgba(255, 99, 132, 1)",
                                "rgba(54, 162, 235, 1)",
                                "rgba(255, 206, 86, 1)",
                                "rgba(75, 192, 192, 1)",
                                "rgba(153, 102, 255, 1)",
                                "rgba(255, 159, 64, 1)",
                            ],
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    legend: {
                        display: false,
                    },
                },
            });
            document.getElementById("body-loader20").style.display = "none";
            document.getElementById("show_graph").style.display="block"
        });
    }, []);

    const onBackClick = () => {
        history.goBack();
    };

    return (
        <div>
            <div id="body-loader20">
                <div
                    style={{
                        height: "100%",
                        position:'fixed',
                        left:'53%',
                        top:'45%',
                        textAlign:'center'
                    }}
                >
                    <img width={70} height={70} src={LoadingSpinner} />
                </div>
            </div>
            <div style={{display:'none'}} id="show_graph">
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-8" style={{marginLeft : "2%"}}>
                    <div style={{ marginTop: 90 }}>
                        <p
                            style={{
                                textAlign: "center",
                                paddingTop: 10,
                                fontWeight: 600,
                                fontSize: 16,
                            }}
                        >
                            Number of Scripts per Product (Top 10)
                        </p>
                        <div style={{ width: 600, marginBottom: 60 }}>
                            <canvas
                                id="myChart12"
                                width="300"
                                height="300"
                            ></canvas>
                        </div>

                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div style={{ marginTop: 90 }}>
                        <p
                            style={{
                                textAlign: "center",
                                paddingTop: 10,
                                fontWeight: 600,
                                fontSize: 16,
                            }}
                        >
                            Number of Scripts per Industry (Top 10)
                        </p>
                        <div style={{ width: 600, marginBottom: 120 }}>
                            <canvas
                                id="myChart21"
                                width="300"
                                height="300"
                            ></canvas>
                        </div>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
            </div>
        </div>
    );
}

export default Graph1;
