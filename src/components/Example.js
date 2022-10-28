import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/Screens/HomeScreen/HomeScreen";
import Header from "./Screens/Header/Header";
import Draft from "./Screens/NewDraftScreen/Draft";
import DraftTable from "./Screens/DraftTable/DraftTable";
import { BrowserRouter } from "react-router-dom";
import SideBar from "./SubComponents/SideBar/SideBar";
import Page1 from "./Page1";
import HeatMap from "./Page2";
import SideBar2 from "./SubComponents/SideBar/SideBar2";
import GraphOne from "../components/SubComponents/Graph1/Graph1";
import EditingTable from "../components/Screens/EditingTable/EditingTable";
import FeedBackTable from "../components/Screens/FeedBackTable/FeedBackTable";
import OverView from "../components/Screens/OverView/OverView";
import Admin from "../components/Screens/Admin/Admin";
import ProcessType from "../components/Screens/ProcessType/ProcessType";
import Newpassword from "./Screens/NewPassword/NewPassword";
import EditingDraft from "./Screens/EditDraft/EditDraft";
import EditingApprovel from "./Screens/EditDraft/EditDraftTwo";
import Approved from "./Screens/Approved/Approved";
import Profile from "./Screens/Profile/Profile";
import FinalReview from "./Screens/EditDraft/EditDraftThree";

function Example() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={"/user"}>
                    <SideBar>
                        <Switch>
                            <Route
                                exact
                                path={"/user/profile"}
                                component={Profile}
                            ></Route>

                            <Route
                                exact
                                path={"/user/home"}
                                component={Draft}
                            ></Route>
                            <Route
                                exact
                                path={"/user/drafts"}
                                component={DraftTable}
                            ></Route>
                            <Route
                                exact
                                path={"/user/editing"}
                                component={EditingTable}
                            ></Route>
                            <Route
                                exact
                                path={"/user/feedBack"}
                                component={FeedBackTable}
                            ></Route>
                            <Route
                                exact
                                path={"/user/overview"}
                                component={OverView}
                            ></Route>
                            <Route
                                exact
                                path={"/user/admin"}
                                component={Admin}
                            ></Route>
                            <Route
                                exact
                                path={"/user/approved"}
                                component={Approved}
                            ></Route>
                            <Route
                                exact
                                path={"/user/graphs"}
                                component={GraphOne}
                            ></Route>
                            <Route
                                exact
                                path={"/user/heat-map"}
                                component={HeatMap}
                            ></Route>
                        </Switch>
                    </SideBar>
                </Route>
            </Switch>
            <Switch>
                <Route path="/draft">
                    <SideBar2>
                        <Route path={"/draft/new"} component={Page1}></Route>
                        <Route
                            path={"/draft/ProcessType"}
                            component={ProcessType}
                        ></Route>
                        <Route
                            path={"/draft/editing"}
                            component={EditingDraft}
                        ></Route>
                        <Route
                            path={"/draft/approvel"}
                            component={EditingApprovel}
                        ></Route>
                        <Route
                            path={"/draft/finalReview"}
                            component={FinalReview}
                        ></Route>
                    </SideBar2>
                </Route>
            </Switch>
            <Switch>
                <Route exact path={"/"} component={Home}></Route>
                <Route
                    exact
                    path={"/new-password"}
                    component={Newpassword}
                ></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Example;

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
}
