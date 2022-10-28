import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png'
import Multiselect from 'multiselect-react-dropdown';
import $ from "jquery"
import './Style.css';

function Process(props) {
    const [benefitStateOne, setBenefitStateOne] = useState();
    const [benefitStateTwo, setBenefitStateTwo] = useState();
    const [benefitStateThree, setBenefitStateThree] = useState();

    const [businessPF1Sec1State1, setBusinessPF1Sec1State1] = useState();
    const [businessPF1Sec2State2, setBusinessPF1Sec2State2] = useState();
    const [businessPF1Sec3State2, setBusinessPF1Sec3State2] = useState();
    const [businessPF1Sec1State3, setBusinessPF1Sec1State3] = useState();
    const [businessPF1Sec2State3, setBusinessPF1Sec2State3] = useState();
    const [businessPF1Sec3State3, setBusinessPF1Sec3State3] = useState();
    const [businessPF1Sec4State3, setBusinessPF1Sec4State3] = useState();
    const [businessPF1Sec1State4, setBusinessPF1Sec1State4] = useState();
    const [businessPF1Sec2State4, setBusinessPF1Sec2State4] = useState();
    const [businessPF1Sec3State4, setBusinessPF1Sec3State4] = useState();

    const [demoStepOne, setDemoStepOne] = useState();
    const [demoStepTwo, setDemoStepTwo] = useState();

    let benefitList = [];
    benefitStateOne && benefitList.push({ id: 1, name: benefitStateOne });
    benefitStateTwo && benefitList.push({ id: 2, name: benefitStateTwo });
    benefitStateTwo && benefitList.push({ id: 3, name: benefitStateThree });

    let businessPrecessFlow = [];
    businessPF1Sec1State1 && businessPrecessFlow.push({ id: 1, name: businessPF1Sec1State1 })
    businessPF1Sec2State2 && businessPrecessFlow.push({ id: 2, name: businessPF1Sec2State2 })
    businessPF1Sec3State2 && businessPrecessFlow.push({ id: 3, name: businessPF1Sec3State2 })
    businessPF1Sec1State3 && businessPrecessFlow.push({ id: 4, name: businessPF1Sec1State3 })
    businessPF1Sec2State3 && businessPrecessFlow.push({ id: 5, name: businessPF1Sec2State3 })
    businessPF1Sec3State3 && businessPrecessFlow.push({ id: 6, name: businessPF1Sec3State3 })
    businessPF1Sec4State3 && businessPrecessFlow.push({ id: 7, name: businessPF1Sec4State3 })
    businessPF1Sec1State4 && businessPrecessFlow.push({ id: 8, name: businessPF1Sec1State4 })
    businessPF1Sec2State4 && businessPrecessFlow.push({ id: 9, name: businessPF1Sec2State4 })
    businessPF1Sec3State4 && businessPrecessFlow.push({ id: 10, name: businessPF1Sec3State4 })

    useEffect(() => {
        $(document).ready(function () {
            $("select").change(function () {
                $(this).find("option:selected").each(function () {
                    var optionValue = $(this).attr("value");
                    if (optionValue) {
                        $(".box").not("." + optionValue).hide();
                        $("." + optionValue).show();
                    } else {
                        $(".box").hide();
                    }
                });
            }).change();
        });
    }, []);

    const onChangeBenefit1Change = (e) => {
        setBenefitStateOne(e.target.value)
    }
    const onChangeBenefit2Change = (e) => {
        setBenefitStateTwo(e.target.value)
    }
    const onChangeBenefit3Change = (e) => {
        setBenefitStateThree(e.target.value)
    }


    const onChangeBPFStep1 = (e) => {
        setBusinessPF1Sec1State1(e.target.value)
    }
    const onChangeBusinessPF1Sec2 = (e) => {
        setBusinessPF1Sec2State2(e.target.value)
    }
    const onChangeBPFStep2 = (e) => {
        setBusinessPF1Sec3State2(e.target.value)
    }
    const onChangeBusinessPF1Sec3 = (e) => {
        setBusinessPF1Sec1State3(e.target.value)
    }
    const onChangeBusinessPF2Sec3 = (e) => {
        setBusinessPF1Sec2State3(e.target.value)
    }
    const onChangeBPFStep3 = (e) => {
        setBusinessPF1Sec3State3(e.target.value)
    }
    const onChangeBusinessPF4Sec3 = (e) => {
        setBusinessPF1Sec4State3(e.target.value)
    }
    const onChangeBusinessPF1Sec4 = (e) => {
        setBusinessPF1Sec1State4(e.target.value)
    }
    const onChangeBusinessPF2Sec4 = (e) => {
        setBusinessPF1Sec2State4(e.target.value)
    }
    const onChangeBPFStep4 = (e) => {
        setBusinessPF1Sec3State4(e.target.value)
    }
    const onChangeBPFStep5 = (e) => {
        setBusinessPF1Sec3State4(e.target.value)
    }
    const onChangeDemoStep1 = (e) => {
        setDemoStepOne(e.target.value)
    }

    const onSelectDemoOneName = (e) => {
        setDemoStepOne(e.target.value)
    }
    const onSelectDemoTwoName = (e) => {
        setDemoStepTwo(e.target.value)
    }

    return (
        <section>
            <section>
                <div style={{ position: "fixed", top: 0, zIndex: 999, width: "100%", backgroundColor: "#F7FAFC", marginLeft: "-85px" }}>
                    <div className="row m-0 pt-3 pb-2" style={{ boxShadow: "0px 11px 10px -15px #111" }}>
                        <div className="col-7">
                            <div style={{ marginLeft: 25, display: "flex" }}>
                                <img src={logo} />
                                <p className='pt-3 pl-2' style={{ fontSize: "22px", fontWeight: "bold", marginLeft: 12 }}>New Draft - Process Video (Coming Soon)</p>
                            </div>
                        </div>
                        <div className="col-3" ></div >
                        <div className="col-2 pt-2" style={{ display: "flex", cursor: "pointer" }} >
                        </div >
                        <div className="col-1" ></div >
                    </div >
                </div >
            </section >
            <div style={{ paddingTop: 60 }}>
                <div className='row'>
                    <div className='col-6' style={{ backgroundColor: "#fff" }}>

                        <div className="row top_pad">
                            <div className="col-1"></div>
                            <div className="col-10">
                                <div style={{ display: "flex" }}>

                                    <span className="pName">Process Video Name</span>
                                </div>
                                <div className="top_input">
                                    <input
                                        style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                        className="InputFields"
                                        placeholder="Enter Process Video Name"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="col-1"></div>
                        </div>
                        <div className="row top_pad">
                            <div className="col-1"></div>
                            <div className="col-10">
                                <div style={{ display: "flex" }}>

                                    <span className="pName">Product Name</span>
                                </div>
                                <div className="top_input">
                                    <input
                                        style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                        className="InputFields"
                                        placeholder="Enter Product Name"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="col-1"></div>
                        </div>
                        <div className="row top_pad">
                            <div className="col-1"></div>
                            <div className="col-10">
                                <div style={{ display: "flex" }}>

                                    <span className="pName">Industry</span>
                                </div>
                                <div className="top_input">
                                    <input
                                        style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                        className="InputFields"
                                        placeholder="Enter Industry"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="col-1"></div>
                        </div>
                        <div className="row top_pad">
                            <div className="col-1"></div>
                            <div className="col-10">
                                <div style={{ display: "flex" }}>

                                    <span className="pName">Line of Business</span>
                                </div>
                                <div className="top_input">
                                    <input
                                        style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                        className="InputFields"
                                        placeholder="Enter Line of Business"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="col-1"></div>
                        </div>
                        <div className="row top_pad">
                            <div className="col-1"></div>
                            <div className="col-10">
                                <div style={{ display: "flex" }}>

                                    <span className="pName">Summary</span>
                                </div>
                                <div className="top_input">
                                    <input
                                        style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                        className="InputFields"
                                        placeholder="Write 2-3 Sentences"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="col-1"></div>
                        </div>
                        <div className="row top_pad">
                            <div className="col-1"></div>
                            <div className="col-10">
                                <div className='row'>
                                    <div className='col-12'>
                                        <div style={{ display: "flex" }}>

                                            <span className="pName">Benefits</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className="top_input">
                                            <input
                                                onChange={onChangeBenefit1Change}
                                                style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                                className="InputFields"
                                                placeholder="Benefit 1"
                                                type="text"
                                            />
                                        </div>
                                        <div className="top_input">
                                            <input
                                                onChange={onChangeBenefit2Change}
                                                style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                                className="InputFields"
                                                placeholder="Benefit 2"
                                                type="text"
                                            />
                                        </div>
                                        <div className="top_input">
                                            <input
                                                onChange={onChangeBenefit3Change}
                                                style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                                className="InputFields"
                                                placeholder="Benefit 3"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1"></div>
                        </div>
                        <div className="row top_pad">
                            <div className="col-1"></div>
                            <div className="col-10">
                                <div className='row'>
                                    <div className='col-12'>
                                        <div style={{ display: "flex" }}>

                                            <span className="pName">Business Process Flow</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className="top_input">
                                            <div>
                                                <select className='InputFields'>
                                                    <option>Select No. of Steps for Business Process Flow</option>
                                                    <option value="red">One</option>
                                                    <option value="green">Two</option>
                                                    <option value="blue">Three</option>
                                                    <option value="yellow">Four</option>
                                                    <option value="purple">Five</option>
                                                </select>
                                            </div>
                                            <div class="red box">
                                                <input
                                                    style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                                    className="InputFields mt-3"
                                                    placeholder="Step 1"
                                                    onChange={onChangeBPFStep1}
                                                    type="text"
                                                />
                                            </div>
                                            <div class="green box">
                                                <input
                                                    style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                                    className="InputFields mt-3"
                                                    placeholder="Step 1"
                                                    type="text"
                                                    onChange={onChangeBPFStep1}
                                                />
                                                <input
                                                    style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                                    className="InputFields mt-3"
                                                    placeholder="Step 2"
                                                    type="text"
                                                    onChange={onChangeBPFStep2}
                                                />
                                            </div>
                                            <div class="blue box">
                                                <input
                                                    style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                                    className="InputFields mt-3"
                                                    placeholder="Step 1"
                                                    type="text"
                                                    onChange={onChangeBPFStep1}
                                                />
                                                <input
                                                    style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                                    className="InputFields mt-3"
                                                    placeholder="Step 2"
                                                    type="text"
                                                    onChange={onChangeBPFStep2}
                                                />
                                                <input
                                                    style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                                    className="InputFields mt-3"
                                                    placeholder="Step 3"
                                                    type="text"
                                                    onChange={onChangeBPFStep3}
                                                />
                                            </div>
                                            <div class="yellow box">
                                                <input
                                                    style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                                    className="InputFields mt-3"
                                                    placeholder="Step 1"
                                                    type="text"
                                                    onChange={onChangeBPFStep1}
                                                />
                                                <input
                                                    style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                                    className="InputFields mt-3"
                                                    placeholder="Step 2"
                                                    type="text"
                                                    onChange={onChangeBPFStep2}
                                                />
                                                <input
                                                    style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                                    className="InputFields mt-3"
                                                    placeholder="Step 3"
                                                    type="text"
                                                    onChange={onChangeBPFStep3}
                                                />
                                                <input
                                                    style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                                    className="InputFields mt-3"
                                                    placeholder="Step 4"
                                                    type="text"
                                                    onChange={onChangeBPFStep4}
                                                />
                                            </div>
                                            <div class="purple box">
                                                <input
                                                    style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                                    className="InputFields mt-3"
                                                    placeholder="Step 1"
                                                    type="text"
                                                    onChange={onChangeBPFStep1}
                                                />
                                                <input
                                                    style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                                    className="InputFields mt-3"
                                                    placeholder="Step 2"
                                                    type="text"
                                                    onChange={onChangeBPFStep2}
                                                />
                                                <input
                                                    style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                                    className="InputFields mt-3"
                                                    placeholder="Step 3"
                                                    type="text"
                                                    onChange={onChangeBPFStep3}
                                                />
                                                <input
                                                    style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                                    className="InputFields mt-3"
                                                    placeholder="Step 4"
                                                    type="text"
                                                    onChange={onChangeBPFStep4}
                                                />
                                                <input
                                                    style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                                    className="InputFields mt-3"
                                                    placeholder="Step 5"
                                                    type="text"
                                                    onChange={onChangeBPFStep5}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row pt-4'>
                                    <div className='col-12'>
                                        <div className="top_input">
                                            <textarea rows="8" cols="50" placeholder='Write Business Process Flow here... In this demo....' style={{ width: "100%", border: "1px solid rgb(204, 204, 204)" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1"></div>
                        </div>
                        <div className="row top_pad pb-5">
                            <div className="col-1"></div>
                            <div className="col-10">
                                <div style={{ display: "flex" }}>

                                    <span className="pName">Analytics</span>
                                </div>
                                <div className="top_input">
                                    <input
                                        style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                        className="InputFields"
                                        placeholder="(Optional)"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="col-1"></div>
                        </div>
                        {/* demo steps Start/ */}
                        <div className='red box'>
                            <div className="row top_pad">
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <div style={{ display: "flex" }}>

                                        <span className="pName">Demo Step 1</span>
                                    </div>
                                    <div className="top_input">
                                        <div>
                                            <input
                                                placeholder="Role1"
                                                style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                                className="InputFields"
                                                type="text"
                                            />
                                        </div>
                                        <div className='pt-4'>
                                            <input
                                                placeholder="Demo 1"
                                                style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                                className="InputFields"
                                                type="text"
                                                value={businessPF1Sec1State1}
                                            />
                                        </div>
                                        <div className='pt-4'>
                                            <select class="InputFields" >
                                                <option selected>Select benefit from list</option>
                                                {
                                                    benefitList.map((res) => (
                                                        <option>{res.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className='pt-4'>
                                            <textarea rows="8" cols="50" style={{ width: '100%', border: "1px solid rgb(204, 204, 204)" }} placeholder='Write Demo-Step 1 here....As a Manager....' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1"></div>
                            </div>
                            <div id='gen0disN'>
                                <div className="row m-0 btn_section">
                                    <div className="col-2"></div>
                                    <div className="col-9">
                                        <button
                                            disabled
                                            className="btn cus_btn"
                                            style={{ float: "right" }}
                                        >
                                            Generate Demo Script
                                        </button>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </div>
                            {/* intro/Outro */}
                            <div className="row top_pad">
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <div style={{ display: "flex" }}>

                                        <span className="pName">Intro</span>
                                    </div>
                                    <div className="top_input">

                                        <div className='pt-4'>
                                            <textarea rows="8" cols="50" style={{ width: '100%', border: "1px solid rgb(204, 204, 204)" }} placeholder='Write Intro here...' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1"></div>
                            </div>
                            <div id='gen0disN'>
                                <div className="row m-0 btn_section">
                                    <div className="col-2"></div>
                                    <div className="col-9">
                                        <button
                                            disabled
                                            className="btn cus_btn"
                                            style={{ float: "right" }}
                                        >
                                            Move to Outro
                                        </button>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </div>
                            <div className="row top_pad">
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <div style={{ display: "flex" }}>

                                        <span className="pName">Outro</span>
                                    </div>
                                    <div className="top_input">

                                        <div className='pt-4'>
                                            <textarea rows="8" cols="50" style={{ width: '100%', border: "1px solid rgb(204, 204, 204)" }} placeholder='Write Intro here...' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1"></div>
                            </div>
                            <div id='gen0disN'>
                                <div className="row m-0 btn_section">
                                    <div className="col-2"></div>
                                    <div className="col-9">
                                        <button
                                            disabled
                                            className="btn cus_btn"
                                            style={{ float: "right" }}
                                        >
                                            Finish
                                        </button>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </div>
                        </div>
                        <div className='green box'>
                            <div className="row top_pad">
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <div style={{ display: "flex" }}>

                                        <span className="pName">Demo Step 1</span>
                                    </div>
                                    <div className="top_input">
                                        <div>
                                            <input
                                                placeholder="Role1"
                                                style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                                className="InputFields"
                                                type="text"
                                            />
                                        </div>
                                        <div className='pt-4'>
                                            <input
                                                placeholder="Demo 1aaa"
                                                style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                                className="InputFields"
                                                type="text"
                                                value={businessPF1Sec1State1}
                                            />
                                        </div>
                                        <div className='pt-4'>
                                            <select class="InputFields" >
                                                <option selected>Select benefit from list</option>
                                                {
                                                    benefitList.map((res) => (
                                                        <option>{res.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className='pt-4'>
                                            <textarea rows="8" cols="50" style={{ width: '100%', border: "1px solid rgb(204, 204, 204)" }} placeholder='Write Demo-Step 1 here....As a Manager....' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1"></div>
                            </div>
                            <div id='gen0disN'>
                                <div className="row m-0 btn_section">
                                    <div className="col-2"></div>
                                    <div className="col-9">
                                        <button
                                            disabled
                                            className="btn cus_btn"
                                            style={{ float: "right" }}
                                        >
                                            Generate Demo Script
                                        </button>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </div>
                            <div className="row top_pad">
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <div style={{ display: "flex" }}>

                                        <span className="pName">Demo Step 2</span>
                                    </div>
                                    <div className="top_input">
                                        <div>
                                        </div>
                                        <div className='pt-4'>
                                            <input
                                                placeholder="Role1"
                                                style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                                className="InputFields"
                                                type="text"
                                            />
                                        </div>
                                        <div className='pt-4'>
                                            <select onClick={onSelectDemoTwoName} class="InputFields" >
                                                <option selected>Select Step for Demo.</option>
                                                {
                                                    businessPrecessFlow.map((res) => (
                                                        <option>{res.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className='pt-4'>
                                            <select class="InputFields" >
                                                <option selected>Select benefit from list</option>
                                                {
                                                    benefitList.map((res) => (
                                                        <option>{res.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className='pt-4'>
                                            <textarea rows="8" cols="50" style={{ width: '100%', border: "1px solid rgb(204, 204, 204)" }} placeholder='Write Demo-Step 1 here....As a Manager....' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1"></div>
                            </div>
                            <div id='gen0disN'>
                                <div className="row m-0 btn_section">
                                    <div className="col-2"></div>
                                    <div className="col-9">
                                        <button
                                            disabled
                                            className="btn cus_btn"
                                            style={{ float: "right" }}
                                        >
                                            Generate Demo Script
                                        </button>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </div>
                            {/* intro/Outro */}
                            <div className="row top_pad">
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <div style={{ display: "flex" }}>

                                        <span className="pName">Intro</span>
                                    </div>
                                    <div className="top_input">

                                        <div className='pt-4'>
                                            <textarea rows="8" cols="50" style={{ width: '100%', border: "1px solid rgb(204, 204, 204)" }} placeholder='Write Intro here...' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1"></div>
                            </div>
                            <div id='gen0disN'>
                                <div className="row m-0 btn_section">
                                    <div className="col-2"></div>
                                    <div className="col-9">
                                        <button
                                            disabled
                                            className="btn cus_btn"
                                            style={{ float: "right" }}
                                        >
                                            Move to Outro
                                        </button>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </div>
                            <div className="row top_pad">
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <div style={{ display: "flex" }}>

                                        <span className="pName">Outro</span>
                                    </div>
                                    <div className="top_input">

                                        <div className='pt-4'>
                                            <textarea rows="8" cols="50" style={{ width: '100%', border: "1px solid rgb(204, 204, 204)" }} placeholder='Write Intro here...' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1"></div>
                            </div>
                            <div id='gen0disN'>
                                <div className="row m-0 btn_section">
                                    <div className="col-2"></div>
                                    <div className="col-9">
                                        <button
                                            disabled
                                            className="btn cus_btn"
                                            style={{ float: "right" }}
                                        >
                                            Finish
                                        </button>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </div>
                        </div>
                        <div className='blue box'>
                            <div className="row top_pad">
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <div style={{ display: "flex" }}>

                                        <span className="pName">Demo Step 1</span>
                                    </div>
                                    <div className="top_input">
                                        <div>
                                            <input
                                                placeholder="Role1"
                                                style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                                className="InputFields"
                                                type="text"
                                            />
                                        </div>
                                        <div className='pt-4'>
                                            <select onClick={onSelectDemoOneName} class="InputFields" >
                                                <option selected>Select Step for Demo.</option>
                                                {
                                                    businessPrecessFlow && businessPrecessFlow.map((res) => {
                                                        return <option  >{res.name}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                        <div className='pt-4'>
                                            <select class="InputFields" >
                                                <option selected>Select benefit from list</option>
                                                {
                                                    benefitList.map((res) => (
                                                        <option>{res.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className='pt-4'>
                                            <textarea rows="8" cols="50" style={{ width: '100%', border: "1px solid rgb(204, 204, 204)" }} placeholder='Write Demo-Step 1 here....As a Manager....' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1"></div>
                            </div>
                            <div id='gen0disN'>
                                <div className="row m-0 btn_section">
                                    <div className="col-2"></div>
                                    <div className="col-9">
                                        <button
                                            disabled
                                            className="btn cus_btn"
                                            style={{ float: "right" }}
                                        >
                                            Generate Demo Script
                                        </button>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </div>
                            <div className="row top_pad">
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <div style={{ display: "flex" }}>

                                        <span className="pName">Demo Step 2</span>
                                    </div>
                                    <div className="top_input">

                                        <div className='pt-4'>
                                            <input
                                                placeholder="Role1"
                                                style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                                className="InputFields"
                                                type="text"
                                            />
                                        </div>
                                        <div className='pt-4'>
                                            <select onClick={onSelectDemoTwoName} class="InputFields" >
                                                <option selected>Select Step for Demo.</option>
                                                {
                                                    businessPrecessFlow.map((res) => (
                                                        <option>{res.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className='pt-4'>
                                            <select class="InputFields" >
                                                <option selected>Select benefit from list</option>
                                                {
                                                    benefitList.map((res) => (
                                                        <option>{res.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className='pt-4'>
                                            <textarea rows="8" cols="50" style={{ width: '100%', border: "1px solid rgb(204, 204, 204)" }} placeholder='Write Demo-Step 1 here....As a Manager....' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1"></div>
                            </div>
                            <div id='gen0disN'>
                                <div className="row m-0 btn_section">
                                    <div className="col-2"></div>
                                    <div className="col-9">
                                        <button
                                            disabled
                                            className="btn cus_btn"
                                            style={{ float: "right" }}
                                        >
                                            Generate Demo Script
                                        </button>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </div>
                            <div className="row top_pad">
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <div style={{ display: "flex" }}>

                                        <span className="pName">Demo Step 3</span>
                                    </div>
                                    <div className="top_input">

                                        <div className='pt-4'>
                                            <select onClick={onSelectDemoTwoName} class="InputFields" >
                                                <option selected>Select Step for Demo.</option>
                                                {
                                                    businessPrecessFlow.map((res) => (
                                                        <option>{res.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className='pt-4'>
                                            <select class="InputFields" >
                                                <option selected>Select benefit from list</option>
                                                {
                                                    benefitList.map((res) => (
                                                        <option>{res.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className='pt-4'>
                                            <input
                                                placeholder="Select Benefit from above added list"
                                                style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                                className="InputFields"
                                                type="text"
                                            />
                                        </div>
                                        <div className='pt-4'>
                                            <textarea rows="8" cols="50" style={{ width: '100%', border: "1px solid rgb(204, 204, 204)" }} placeholder='Write Demo-Step 1 here....As a Manager....' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1"></div>
                            </div>
                            <div id='gen0disN'>
                                <div className="row m-0 btn_section">
                                    <div className="col-2"></div>
                                    <div className="col-9">
                                        <button
                                            disabled
                                            className="btn cus_btn"
                                            style={{ float: "right" }}
                                        >
                                            Move to Intro
                                        </button>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </div>
                            {/* intro/Outro */}
                            <div className="row top_pad">
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <div style={{ display: "flex" }}>

                                        <span className="pName">Intro</span>
                                    </div>
                                    <div className="top_input">

                                        <div className='pt-4'>
                                            <textarea rows="8" cols="50" style={{ width: '100%', border: "1px solid rgb(204, 204, 204)" }} placeholder='Write Intro here...' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1"></div>
                            </div>
                            <div id='gen0disN'>
                                <div className="row m-0 btn_section">
                                    <div className="col-2"></div>
                                    <div className="col-9">
                                        <button
                                            disabled
                                            className="btn cus_btn"
                                            style={{ float: "right" }}
                                        >
                                            Move to Outro
                                        </button>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </div>
                            <div className="row top_pad">
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <div style={{ display: "flex" }}>

                                        <span className="pName">Outro</span>
                                    </div>
                                    <div className="top_input">

                                        <div className='pt-4'>
                                            <textarea rows="8" cols="50" style={{ width: '100%', border: "1px solid rgb(204, 204, 204)" }} placeholder='Write Intro here...' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1"></div>
                            </div>
                            <div id='gen0disN'>
                                <div className="row m-0 btn_section">
                                    <div className="col-2"></div>
                                    <div className="col-9">
                                        <button
                                            disabled
                                            className="btn cus_btn"
                                            style={{ float: "right" }}
                                        >
                                            Finish
                                        </button>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </div>
                        </div>
                        <div className='yellow box'>
                            <div className="row top_pad">
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <div style={{ display: "flex" }}>

                                        <span className="pName">Demo Step 1</span>
                                    </div>
                                    <div className="top_input">
                                        <div>
                                            <input
                                                placeholder="Role1"
                                                style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                                className="InputFields"
                                                type="text"
                                            />
                                        </div>
                                        <div className='pt-4'>
                                            <select onClick={onSelectDemoOneName} class="InputFields" >
                                                <option selected>Select Step for Demo.</option>
                                                {
                                                    businessPrecessFlow && businessPrecessFlow.map((res) => {
                                                        return <option  >{res.name}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                        <div className='pt-4'>
                                            <select class="InputFields" >
                                                <option selected>Select benefit from list</option>
                                                {
                                                    benefitList.map((res) => (
                                                        <option>{res.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className='pt-4'>
                                            <textarea rows="8" cols="50" style={{ width: '100%', border: "1px solid rgb(204, 204, 204)" }} placeholder='Write Demo-Step 1 here....As a Manager....' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1"></div>
                            </div>
                            <div id='gen0disN'>
                                <div className="row m-0 btn_section">
                                    <div className="col-2"></div>
                                    <div className="col-9">
                                        <button
                                            disabled
                                            className="btn cus_btn"
                                            style={{ float: "right" }}
                                        >
                                            Generate Demo Script
                                        </button>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </div>
                            <div className="row top_pad">
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <div style={{ display: "flex" }}>

                                        <span className="pName">Demo Step 2</span>
                                    </div>
                                    <div className="top_input">

                                        <div className='pt-4'>
                                            <input
                                                placeholder="Role1"
                                                style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                                className="InputFields"
                                                type="text"
                                            />
                                        </div>
                                        <div className='pt-4'>
                                            <select onClick={onSelectDemoTwoName} class="InputFields" >
                                                <option selected>Select Step for Demo.</option>
                                                {
                                                    businessPrecessFlow.map((res) => (
                                                        <option>{res.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className='pt-4'>
                                            <select class="InputFields" >
                                                <option selected>Select benefit from list</option>
                                                {
                                                    benefitList.map((res) => (
                                                        <option>{res.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className='pt-4'>
                                            <textarea rows="8" cols="50" style={{ width: '100%', border: "1px solid rgb(204, 204, 204)" }} placeholder='Write Demo-Step 1 here....As a Manager....' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1"></div>
                            </div>
                            <div id='gen0disN'>
                                <div className="row m-0 btn_section">
                                    <div className="col-2"></div>
                                    <div className="col-9">
                                        <button
                                            disabled
                                            className="btn cus_btn"
                                            style={{ float: "right" }}
                                        >
                                            Generate Demo Script
                                        </button>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </div>
                            <div className="row top_pad">
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <div style={{ display: "flex" }}>

                                        <span className="pName">Demo Step 3</span>
                                    </div>
                                    <div className="top_input">

                                        <div className='pt-4'>
                                            <select onClick={onSelectDemoTwoName} class="InputFields" >
                                                <option selected>Select Step for Demo.</option>
                                                {
                                                    businessPrecessFlow.map((res) => (
                                                        <option>{res.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className='pt-4'>
                                            <select class="InputFields" >
                                                <option selected>Select benefit from list</option>
                                                {
                                                    benefitList.map((res) => (
                                                        <option>{res.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className='pt-4'>
                                            <input
                                                placeholder="Select Benefit from above added list"
                                                style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                                className="InputFields"
                                                type="text"
                                            />
                                        </div>
                                        <div className='pt-4'>
                                            <textarea rows="8" cols="50" style={{ width: '100%', border: "1px solid rgb(204, 204, 204)" }} placeholder='Write Demo-Step 1 here....As a Manager....' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1"></div>
                            </div>
                            <div id='gen0disN'>
                                <div className="row m-0 btn_section">
                                    <div className="col-2"></div>
                                    <div className="col-9">
                                        <button
                                            disabled
                                            className="btn cus_btn"
                                            style={{ float: "right" }}
                                        >
                                            Move to Intro
                                        </button>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </div>
                            <div className="row top_pad">
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <div style={{ display: "flex" }}>

                                        <span className="pName">Demo Step 4</span>
                                    </div>
                                    <div className="top_input">

                                        <div className='pt-4'>
                                            <select onClick={onSelectDemoTwoName} class="InputFields" >
                                                <option selected>Select Step for Demo.</option>
                                                {
                                                    businessPrecessFlow.map((res) => (
                                                        <option>{res.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className='pt-4'>
                                            <select class="InputFields" >
                                                <option selected>Select benefit from list</option>
                                                {
                                                    benefitList.map((res) => (
                                                        <option>{res.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className='pt-4'>
                                            <input
                                                placeholder="Select Benefit from above added list"
                                                style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                                className="InputFields"
                                                type="text"
                                            />
                                        </div>
                                        <div className='pt-4'>
                                            <textarea rows="8" cols="50" style={{ width: '100%', border: "1px solid rgb(204, 204, 204)" }} placeholder='Write Demo-Step 1 here....As a Manager....' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1"></div>
                            </div>
                            <div id='gen0disN'>
                                <div className="row m-0 btn_section">
                                    <div className="col-2"></div>
                                    <div className="col-9">
                                        <button
                                            disabled
                                            className="btn cus_btn"
                                            style={{ float: "right" }}
                                        >
                                            Move to Intro
                                        </button>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </div>
                            {/* intro/Outro */}
                            <div className="row top_pad">
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <div style={{ display: "flex" }}>

                                        <span className="pName">Intro</span>
                                    </div>
                                    <div className="top_input">

                                        <div className='pt-4'>
                                            <textarea rows="8" cols="50" style={{ width: '100%', border: "1px solid rgb(204, 204, 204)" }} placeholder='Write Intro here...' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1"></div>
                            </div>
                            <div id='gen0disN'>
                                <div className="row m-0 btn_section">
                                    <div className="col-2"></div>
                                    <div className="col-9">
                                        <button
                                            disabled
                                            className="btn cus_btn"
                                            style={{ float: "right" }}
                                        >
                                            Move to Outro
                                        </button>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </div>
                            <div className="row top_pad">
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <div style={{ display: "flex" }}>

                                        <span className="pName">Outro</span>
                                    </div>
                                    <div className="top_input">

                                        <div className='pt-4'>
                                            <textarea rows="8" cols="50" style={{ width: '100%', border: "1px solid rgb(204, 204, 204)" }} placeholder='Write Intro here...' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1"></div>
                            </div>
                            <div id='gen0disN'>
                                <div className="row m-0 btn_section">
                                    <div className="col-2"></div>
                                    <div className="col-9">
                                        <button
                                            disabled
                                            className="btn cus_btn"
                                            style={{ float: "right" }}
                                        >
                                            Finish
                                        </button>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </div>
                        </div>
                        <div className='purple box'>
                            <div className="row top_pad">
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <div style={{ display: "flex" }}>

                                        <span className="pName">Demo Step 1</span>
                                    </div>
                                    <div className="top_input">
                                        <div>
                                            <input
                                                placeholder="Role1"
                                                style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                                className="InputFields"
                                                type="text"
                                            />
                                        </div>
                                        <div className='pt-4'>
                                            <select onClick={onSelectDemoOneName} class="InputFields" >
                                                <option selected>Select Step for Demo.</option>
                                                {
                                                    businessPrecessFlow && businessPrecessFlow.map((res) => {
                                                        return <option  >{res.name}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                        <div className='pt-4'>
                                            <select class="InputFields" >
                                                <option selected>Select benefit from list</option>
                                                {
                                                    benefitList.map((res) => (
                                                        <option>{res.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className='pt-4'>
                                            <textarea rows="8" cols="50" style={{ width: '100%', border: "1px solid rgb(204, 204, 204)" }} placeholder='Write Demo-Step 1 here....As a Manager....' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1"></div>
                            </div>
                            <div id='gen0disN'>
                                <div className="row m-0 btn_section">
                                    <div className="col-2"></div>
                                    <div className="col-9">
                                        <button
                                            disabled
                                            className="btn cus_btn"
                                            style={{ float: "right" }}
                                        >
                                            Generate Demo Script
                                        </button>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </div>
                            <div className="row top_pad">
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <div style={{ display: "flex" }}>

                                        <span className="pName">Demo Step 2</span>
                                    </div>
                                    <div className="top_input">

                                        <div className='pt-4'>
                                            <input
                                                placeholder="Role1"
                                                style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                                className="InputFields"
                                                type="text"
                                            />
                                        </div>
                                        <div className='pt-4'>
                                            <select onClick={onSelectDemoTwoName} class="InputFields" >
                                                <option selected>Select Step for Demo.</option>
                                                {
                                                    businessPrecessFlow.map((res) => (
                                                        <option>{res.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className='pt-4'>
                                            <select class="InputFields" >
                                                <option selected>Select benefit from list</option>
                                                {
                                                    benefitList.map((res) => (
                                                        <option>{res.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className='pt-4'>
                                            <textarea rows="8" cols="50" style={{ width: '100%', border: "1px solid rgb(204, 204, 204)" }} placeholder='Write Demo-Step 1 here....As a Manager....' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1"></div>
                            </div>
                            <div id='gen0disN'>
                                <div className="row m-0 btn_section">
                                    <div className="col-2"></div>
                                    <div className="col-9">
                                        <button
                                            disabled
                                            className="btn cus_btn"
                                            style={{ float: "right" }}
                                        >
                                            Generate Demo Script
                                        </button>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </div>
                            <div className="row top_pad">
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <div style={{ display: "flex" }}>

                                        <span className="pName">Demo Step 3</span>
                                    </div>
                                    <div className="top_input">

                                        <div className='pt-4'>
                                            <select onClick={onSelectDemoTwoName} class="InputFields" >
                                                <option selected>Select Step for Demo.</option>
                                                {
                                                    businessPrecessFlow.map((res) => (
                                                        <option>{res.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className='pt-4'>
                                            <select class="InputFields" >
                                                <option selected>Select benefit from list</option>
                                                {
                                                    benefitList.map((res) => (
                                                        <option>{res.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className='pt-4'>
                                            <input
                                                placeholder="Select Benefit from above added list"
                                                style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                                className="InputFields"
                                                type="text"
                                            />
                                        </div>
                                        <div className='pt-4'>
                                            <textarea rows="8" cols="50" style={{ width: '100%', border: "1px solid rgb(204, 204, 204)" }} placeholder='Write Demo-Step 1 here....As a Manager....' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1"></div>
                            </div>
                            <div id='gen0disN'>
                                <div className="row m-0 btn_section">
                                    <div className="col-2"></div>
                                    <div className="col-9">
                                        <button
                                            disabled
                                            className="btn cus_btn"
                                            style={{ float: "right" }}
                                        >
                                            Move to Intro
                                        </button>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </div>
                            <div className="row top_pad">
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <div style={{ display: "flex" }}>

                                        <span className="pName">Demo Step 4</span>
                                    </div>
                                    <div className="top_input">

                                        <div className='pt-4'>
                                            <select onClick={onSelectDemoTwoName} class="InputFields" >
                                                <option selected>Select Step for Demo.</option>
                                                {
                                                    businessPrecessFlow.map((res) => (
                                                        <option>{res.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className='pt-4'>
                                            <select class="InputFields" >
                                                <option selected>Select benefit from list</option>
                                                {
                                                    benefitList.map((res) => (
                                                        <option>{res.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className='pt-4'>
                                            <input
                                                placeholder="Select Benefit from above added list"
                                                style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                                className="InputFields"
                                                type="text"
                                            />
                                        </div>
                                        <div className='pt-4'>
                                            <textarea rows="8" cols="50" style={{ width: '100%', border: "1px solid rgb(204, 204, 204)" }} placeholder='Write Demo-Step 1 here....As a Manager....' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1"></div>
                            </div>
                            <div id='gen0disN'>
                                <div className="row m-0 btn_section">
                                    <div className="col-2"></div>
                                    <div className="col-9">
                                        <button
                                            disabled
                                            className="btn cus_btn"
                                            style={{ float: "right" }}
                                        >
                                            Move to Intro
                                        </button>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </div>
                            <div className="row top_pad">
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <div style={{ display: "flex" }}>

                                        <span className="pName">Demo Step 5</span>
                                    </div>
                                    <div className="top_input">

                                        <div className='pt-4'>
                                            <select onClick={onSelectDemoTwoName} class="InputFields" >
                                                <option selected>Select Step for Demo.</option>
                                                {
                                                    businessPrecessFlow.map((res) => (
                                                        <option>{res.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className='pt-4'>
                                            <select class="InputFields" >
                                                <option selected>Select benefit from list</option>
                                                {
                                                    benefitList.map((res) => (
                                                        <option>{res.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className='pt-4'>
                                            <input
                                                placeholder="Select Benefit from above added list"
                                                style={{ border: "1px solid #ccc", borderRadius: "4px" }}
                                                className="InputFields"
                                                type="text"
                                            />
                                        </div>
                                        <div className='pt-4'>
                                            <textarea rows="8" cols="50" style={{ width: '100%', border: "1px solid rgb(204, 204, 204)" }} placeholder='Write Demo-Step 1 here....As a Manager....' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1"></div>
                            </div>
                            <div id='gen0disN'>
                                <div className="row m-0 btn_section">
                                    <div className="col-2"></div>
                                    <div className="col-9">
                                        <button
                                            disabled
                                            className="btn cus_btn"
                                            style={{ float: "right" }}
                                        >
                                            Move to Intro
                                        </button>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </div>
                            {/* intro/Outro */}
                            <div className="row top_pad">
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <div style={{ display: "flex" }}>

                                        <span className="pName">Intro</span>
                                    </div>
                                    <div className="top_input">

                                        <div className='pt-4'>
                                            <textarea rows="8" cols="50" style={{ width: '100%', border: "1px solid rgb(204, 204, 204)" }} placeholder='Write Intro here...' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1"></div>
                            </div>
                            <div id='gen0disN'>
                                <div className="row m-0 btn_section">
                                    <div className="col-2"></div>
                                    <div className="col-9">
                                        <button
                                            disabled
                                            className="btn cus_btn"
                                            style={{ float: "right" }}
                                        >
                                            Move to Outro
                                        </button>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </div>
                            <div className="row top_pad">
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <div style={{ display: "flex" }}>

                                        <span className="pName">Outro</span>
                                    </div>
                                    <div className="top_input">

                                        <div className='pt-4'>
                                            <textarea rows="8" cols="50" style={{ width: '100%', border: "1px solid rgb(204, 204, 204)" }} placeholder='Write Intro here...' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1"></div>
                            </div>
                            <div id='gen0disN'>
                                <div className="row m-0 btn_section">
                                    <div className="col-2"></div>
                                    <div className="col-9">
                                        <button
                                            disabled
                                            className="btn cus_btn"
                                            style={{ float: "right" }}
                                        >
                                            Finish
                                        </button>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Process;
