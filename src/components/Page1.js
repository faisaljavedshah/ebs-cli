import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import WorldFile from "./Screens/HomeScreen/WorldFile";
import Select from "react-select";
import {
    scriptOne,
    scriptTwo,
    scriptThree,
    FinalOutPut,
    scriptFour,
    verbs,
    FinalOutro,
    SaveScripts,
    GraphsData,
    gettingDemo,
} from "./Service";
import {
    SaveDraftState,
    GetSavedDraftDetails,
    AddDraft,
    ClearDraft,
    DownloadFile,
} from "./Services/Service";
import { Document, Packer, Paragraph, HeadingLevel } from "docx";
import { saveAs } from "file-saver";
import $ from "jquery";
import { useHistory, Link } from "react-router-dom";
import Diff from "react-diff2";
import Progressbar from "./ProgressBar";
import { includes, indexOf, toInteger, toString } from "lodash";
import Multiselect from "multiselect-react-dropdown";
import logo from "../../src/components/assets/logo.png";
import plus from "./assets/appPlus.png";
import info from "./assets/info.svg";
import BtnPlus from "./assets/icons8-plus-48.png";
import Modal from "react-modal";
import ToriLogo from "./assets/tori_logo.svg";

import ButtonUpload from "./assets/Button.svg";
import LoadingSpinner from "./assets/loader.gif";

import "./App.css";
import { dummyData } from "./DummyData";

function PageOne(props) {
    let tree = dummyData;

    const [userinfo, setUserInfo] = useState({ languages: [], response: [] });
    const [userinfo2, setUserInfo2] = useState({
        languages2: [],
        response2: [],
    });
    const [userinfo3, setUserInfo3] = useState({
        languages3: [],
        response3: [],
    });
    const [userinfo4, setUserInfo4] = useState({
        languages4: [],
        response4: [],
    });

    const [demoKeyPointOne, setDemoKeyPointOne] = useState([]);
    const [demoKeyPointLoader, setDemoKeyPointloader] = useState(false);
    const [demoKeyPointLoaderDemo2, setDemoKeyPointloaderDemo2] = useState(false);
    const [demoKeyPointLoaderDemo3, setDemoKeyPointloaderDemo3] = useState(false);
    const [demoKeyPointLoaderDemo4, setDemoKeyPointloaderDemo4] = useState(false);
    const [disAbleDemoKey, setDisAbleDemoKey] = useState(false);
    const [disAbleDemoKey2, setDisAbleDemoKey2] = useState(false);
    const [disAbleDemoKey3, setDisAbleDemoKey3] = useState(false);
    const [disAbleDemoKey4, setDisAbleDemoKey4] = useState(false);

    const [disActiveBtn, setDisActiveBtn] = useState(false);
    const [disActiveBtn2, setDisActiveBtn2] = useState(false);
    const [disActiveBtn3, setDisActiveBtn3] = useState(false);
    const [disActiveBtn4, setDisActiveBtn4] = useState(false);

    const PNList1 = [
        "Content and Collaboration",
        "Customer Relationship Management",
        "Digital Manufacturing",
        "Enterprise Management",
        "Financial Management",
        "Health and Safety Management",
        "Human Capital Management",
        "Product Lifecycle Management",
        "Supplier Relationship Management",
        "Supply Chain Management",
        "Technology Platform",
    ];
    const RBAList = [
        "Plan to Optimize Products/Services",
        "Idea to Requirements",
        "Design to Release",
        "Products/Services to Market",
        "Manage Products/ Services",
        "Plan to Optimize Sourcing and Procurement",
        "Source to Contract",
        "Plan to Optimize Fulfillment",
        "Procure to receipt",
        "Request to Resolution",
        "Invoice TO Pay",
        "Manage Suppliers & Collaboration",
        "Make to Inspect",
        "Deliver Product to Fulfill",
        "Delver Service to Fulfill",
        "Manage Fulfillment",
        "Plan to Optimize Marketing and Sales",
        "Market to Lead",
        "Opportunity to Quote",
        "Order to Fulfill",
        "Request to Service",
        "Invoice to Cash",
        "Manage Customers and Channels",
        "Plan to Optimize the Workforce",
        "Recruit to Onboard",
        "Develop to Grow",
        "Reward to retain",
        "Manage Workforce and Retirement",
        "Plan to Optimize Assets",
        "Acquire to Onboard",
        "Operate to Maintain",
        "Offboard to Decommission",
        "Manage Assets",
        "Plan to Optimize Enterprise",
        "Manage Portfolio and Projects",
        "Manage Sustainable Operations",
        "Manage Governance, Compliance and Risk",
        "Manage Information technology",
        "Plan to Optimize Financials",
        "Invoice t o Pay",
        "Record to Report",
        "Manage Treasury",
        "Manage Real Estate",
    ];
    const DomainList = [
        "Idea to Market",
        "Source to Pay",
        "Plan to Fulfill",
        "Lead to Cash",
        "Recruit to Retire",
        "Acquire to Decommission",
        "Governance",
        "Finance",
    ];
    const PNList2 = [
        "SAP  Cloud",
        "SAP  Hub",
        "SAP Digital Boardroom",
        "SAP Global Trade Services",
        "SAP Predictive ",
        "SAP Watch List Screening",
        "SAP Content Stream by Skillsoft",
        "SAP Mobile Documents",
        "SAP Portal Content Management By OpenText",
        "SAP Signature Management by DocuSign",
        "SAP C/4HANA",
        "SAP Cloud for Customer",
        "SAP Commerce",
        "SAP Commerce Cloud",
        "SAP Customer Activity Repository",
        "SAP Customer  for Retail",
        "SAP Customer Data Cloud",
        "SAP Customer Experience Foundation",
        "SAP Customer Order Sourcing",
        "SAP Dynamic Pricing by GK",
        "SAP Field Service Management",
        "SAP Incentive Administration by Vistex and SAP Paybacks and Chargebacks by Vistex",
        "SAP Marketing",
        "SAP Marketing Cloud",
        "SAP Mobile Consumer Assistant by GK",
        "SAP Omnichannel Point-of-Sale by GK",
        "SAP Omnichannel Promotion Pricing",
        "SAP Order Management",
        "SAP Precision Marketing",
        "SAP Sales Cloud",
        "SAP Service Cloud",
        "SAP Store Management by GK",
        "SAP Student Lifecycle Management",
        "SAP Trade Management",
        "SAP Trade Promotion Management",
        "SAP Upscale Commerce",
        "SAP Utilities Customer Engagement",
        "SAP Data Custodian",
        "Digital Manufacturing",
        "Enterprise Management",
        "Manufacturing",
        "SAP Asset Manager",
        "SAP Business ByDesign",
        "SAP Digital Vehicle Suite",
        "SAP Enterprise Asset Management",
        "SAP Entitlement Management",
        "SAP ERP",
        "SAP S/4HANA",
        "SAP S/4HANA Cloud",
        "Banking services from SAP",
        "SAP Access Control",
        "SAP Business Planning and Consolidation",
        "SAP Cloud for Real Estate",
        "SAP Commodity Management",
        "SAP Process Control",
        "SAP Profitability and Performance Management",
        "SAP Risk Management",
        "SAP Spend Performance Management",
        "SAP Sustainability Performance Management",
        "SAP Treasury and Risk Management",
        "Health and Safety Management",
        "SAP Environment",
        "Qualtrics EmployeeXM for IT",
        "SAP Fieldglass Time Entry",
        "SAP Qualtrics 360 Feedback",
        "SAP Qualtrics Employee Benefits Optimizer",
        "SAP Qualtrics Employee Engagement",
        "SAP Qualtrics Employee Lifecycle",
        "SAP SuccessFactors H",
        "SAP SuccessFactors HCM Core",
        "SAP SuccessFactors HXM Suite",
        "SAP Workforce Management",
        "SAP Dairy Management by msg",
        "SAP Enterprise Product Development",
        "SAP Fashion Management",
        "SAP Innovation Management",
        "SAP Intelligent Product Design",
        "SAP Meat and Fish Management by msg",
        "SAP Meat Management by msg",
        "SAP Product Lifecycle Costing",
        "Ariba Network",
        "SAP Ariba Buying",
        "SAP Ariba Buying and Invoicing",
        "SAP Ariba Contracts",
        "SAP Ariba Discount Management",
        "SAP Ariba Invoice Management",
        "SAP Ariba Procurement",
        "SAP Ariba Snap",
        "SAP Ariba Sourcing",
        "SAP Ariba Spend Analysis",
        "SAP Ariba Spot Buy Catalog",
        "SAP Ariba Supplier",
        "SAP Ariba Supplier Information and Performance Management",
        "SAP Ariba Supplier Lifecycle and Performance",
        "SAP Ariba Supplier Risk",
        "SAP Ariba Supply Chain",
        "SAP Fieldglass Contingent Workforce Management",
        "SAP Fieldglass Services Procurement",
        "SAP Fieldglass Vendor Management System",
        "SAP Fieldglass\xa0Assignment Management",
        "SAP Rural Sourcing Management",
        "SAP Strategic Sourcing Suite",
        "SAP Supplier Relationship Management",
        "SAP Digital Supply Chain",
        "SAP Extended Warehouse Management",
        "SAP Farm Management by Vistex",
        "SAP Global Track and Trace",
        "SAP Grower Management for Perishables by Vistex",
        "SAP Integrated Business Planning for Supply Chain",
        "SAP Intelligent Asset Management",
        "SAP Logistics Business Network",
        "SAP S/4HANA Supply Chain",
        "SAP Sales and Operations Planning",
        "SAP Transportation Management",
        "business process intelligence",
        "Qualtrics CoreXM",
        "Qualtrics CustomerXM",
        "Qualtrics EmployeeXM",
        "Qualtrics XM Platform",
        "SAP",
        "SAP Business Technology Platform",
        "SAP Cloud Identity Access Governance",
        "SAP Data Warehouse Cloud",
        "SAP Fiori",
        "SAP HANA",
        "SAP HANA Cloud Services",
        "SAP Landscape Management",
        "SAP Mobile App Protection by Mocana",
        "SAP SuccessFactors Work Zone",
    ];
    const PNList3 = [
        "SAP  Cloud",
        "SAP  Hub",
        "SAP Digital Boardroom",
        "SAP Global Trade Services",
        "SAP Predictive ",
        "SAP Watch List Screening",
        "SAP Content Stream by Skillsoft",
        "SAP Mobile Documents",
        "SAP Portal Content Management By OpenText",
        "SAP Signature Management by DocuSign",
        "SAP Sales Cloud",
        "SAP Service Cloud",
        "SAP Cloud for Customer",
        "SAP Commerce",
        "SAP Commerce Cloud",
        "SAP Customer Activity Repository",
        "SAP Customer  for Retail",
        "SAP Customer Data Cloud",
        "SAP Customer Data Platform",
        "SAP Customer Order Sourcing",
        "SAP Dynamic Pricing by GK(cloud edition)",
        "SAP Field Service Management",
        "SAP Incentive Administration by Vistex and SAP Paybacks and Chargebacks by Vistex",
        "SAP Marketing",
        "SAP Marketing Cloud",
        "SAP Mobile Consumer Assistant by GK",
        "SAP Omnichannel Point-of-Sale by GK(cloud edition)",
        "SAP Omnichannel Promotion Pricing",
        "SAP Order Management",
        "SAP Precision Marketing",
        "SAP Subscription Billing",
        "SAP Customer Engagement Center",
        "SAP Self-Service Accelerator fo",
        "SAP Self-Service Accelerator for Utilities by SEW",
        "SAP Omnichannel Point-of-Sale by GK",
        "SAP Student Lifecycle Management",
        "SAP Trade Management",
        "SAP Trade Promotion Management",
        "SAP Upscale Commerce",
        "SAP Utilities Customer Engagement",
        "SAP Data Custodian",
        "SAP Digital Manufacturing Cloud",
        "SAP Digital Manufacturing Insights",
        "Enterprise Management",
        "SAP Manufacturing Execution",
        "SAP Manufacturing Integration and Intelligence",
        "SAP Asset Manager",
        "SAP Business ByDesign",
        "SAP Digital Vehicle Suite",
        "SAP Enterprise Asset Management",
        "SAP Entitlement Management",
        "SAP ERP",
        "SAP ERP add-on for retail",
        "SAP S/4HANA",
        "SAP S/4HANA Cloud",
        "SAP S/4HANA Finance",
        "SAP S/4HANA for central procurement",
        "SAP S/4HANA Cloud for central procurement",
        "SAP S/4HANA Cloud for projects(project collaboration)",
        "Banking services from SAP",
        "SAP Access Control for SAP S/4HANA",
        "SAP Business Planning and Consolidation",
        "SAP Cloud for Real Estate",
        "SAP Commodity Management",
        "SAP Process Control",
        "SAP Profitability and Performance Management",
        "SAP",
        "SAP Risk Management",
        "SAP Risk Management for SAP S/4HANA",
        "SAP Spend Performance Management",
        "SAP Sustainability Performance Management",
        "SAP Treasury and Risk Management(version for the United States)",
        "Health and Safety Management",
        "SAP Environment",
        "Qualtrics EmployeeXM for IT",
        "SAP Fieldglass Time Entry",
        "SAP Qualtrics 360 Feedback",
        "SAP Qualtrics Employee Benefits Optimizer",
        "SAP Qualtrics Employee Engagement",
        "SAP Qualtrics Employee Lifecycle",
        "SAP SuccessFactors H",
        "SAP SuccessFactors HCM Core",
        "SAP SuccessFactors",
        "SAP SuccessFactors Compensation",
        "SAP SuccessFactors Employee Central",
        "SAP SuccessFactors Employee Central Payroll",
        "SAP SuccessFactors Employee Central Service",
        "SAP SuccessFactors Employee Central Service Center",
        "SAP SuccessFactors HXM Core",
        "SAP SuccessFactors HXM Suite",
        "SAP SuccessFactors Learning",
        "SAP SuccessFactors Learning Marketplace",
        "SAP SuccessFactors Mobile",
        "SAP SuccessFactors Onboarding",
        "SAP SuccessFactors Opportunity Marketplace",
        "SAP SuccessFactors People ",
        "SAP SuccessFactors Performance & Goals",
        "SAP SuccessFactors platform",
        "SAP SuccessFactors Recruit",
        "SAP SuccessFactors Recruiting",
        "SAP SuccessFactors Succession & Development",
        "SAP SuccessFactors Workforce ",
        "SAP SuccessFactors Work-Life",
        "SAP Workforce Management",
        "SAP Dairy Management by msg",
        "SAP Enterprise Product Development",
        "SAP Fashion Management",
        "SAP Innovation Management",
        "SAP Intelligent Product Design",
        "SAP Meat and Fish Management by msg",
        "SAP Meat Management by msg",
        "SAP Product Lifecycle Costing",
        "Ariba Network",
        "SAP Ariba Buying",
        "SAP Ariba Buying and Invoicing",
        "SAP Ariba Contracts",
        "SAP Ariba Discount Management",
        "SAP Ariba Invoice Management",
        "SAP Ariba Procurement",
        "SAP Ariba Snap",
        "SAP Ariba Sourcing",
        "SAP Ariba Spend Analysis",
        "SAP Ariba Spot Buy Catalog",
        "SAP Ariba Supplier",
        "SAP Ariba Supplier Information and Performance Management",
        "SAP Ariba Supplier Lifecycle and Performance",
        "SAP Ariba Supplier Risk",
        "SAP Ariba Supply Chain",
        "SAP Fieldglass Contingent Workforce Management",
        "SAP Fieldglass Services Procurement",
        "SAP Fieldglass Vendor",
        "SAP Fieldglass Vendor Management System",
        "SAP Fieldglass\xa0Assignment Management",
        "SAP Rural Sourcing Management",
        "SAP Strategic Sourcing Suite",
        "SAP Supplier Relationship Management",
        "SAP Internet of Things",
        "SAP Extended Warehouse Management",
        "SAP Farm Management by Vistex",
        "SAP Global Track and Trace",
        "SAP Grower Management for Perishables by Vistex",
        "SAP Integrated Business Planning for Supply Chain",
        "SAP Asset Intelligence Network",
        "SAP Asset Strategy and Performance Management",
        "SAP Predictive Asset Insights",
        "SAP Logistics Business Network",
        "SAP S/4HANA Supply Chain",
        "SAP Sales and Operations Planning",
        "SAP Transportation Management",
        "SAP Process Insights",
        "Qualtrics CoreXM",
        "Qualtrics CustomerXM",
        "Qualtrics EmployeeXM",
        "Qualtrics XM Platform",
        "business rules",
        "SAP Business Technology Platform",
        "SAP Integration Suite",
        "SAP IoT services for SAP BTP",
        "SAP Cloud Identity Access Governance",
        "SAP Data Warehouse Cloud",
        "SAP Fiori",
        "SAP Fiori Cloud",
        "SAP HANA spatial services",
        "SAP HANA(platform edition)",
        "SAP HANA Cloud",
        "SAP Landscape Management",
        "SAP Mobile App Protection by Mocana",
        "SAP SuccessFactors Work Zone",
        "SAP Work Zone",
    ];
    const [dum, setDum] = useState([]);
    const [dum2, setDum2] = useState([]);
    const [selectDemoOne, setSelectDemoOne] = useState(false);
    const [selectDemoTwo, setSelectDemoTwo] = useState(false);
    const [selectDemoThree, setSelectDemoThree] = useState(false);
    const [selectDemoFour, setSelectDemoFour] = useState(false);

    const [modal1, setmodal1] = useState(false);
    const [modal2, setmodal2] = useState(false);

    const [modal3, setmodal3] = useState(false);

    const [modal4, setmodal4] = useState(false);

    const [modal5, setmodal5] = useState(false);
    const [modal6, setmodal6] = useState(false);
    const [modal7, setmodal7] = useState(false);
    const [modal8, setmodal8] = useState(false);
    const [modal9, setmodal9] = useState(false);
    const [modal10, setmodal10] = useState(false);
    const [modal11, setmodal11] = useState(false);
    const [modal12, setmodal12] = useState(false);
    const [modal13, setmodal13] = useState(false);
    const [modal14, setmodal14] = useState(false);

    const [modalMsg1, setModalMsg1] = useState("");
    const [modalMsg2, setModalMsg2] = useState("");
    const [modalMsg3, setModalMsg3] = useState("");
    const [modalMsg4, setModalMsg4] = useState("");
    const [modalMsg5, setModalMsg5] = useState("");
    const [modalMsg6, setModalMsg6] = useState("");
    const [modalMsg7, setModalMsg7] = useState("");
    const [modalMsg8, setModalMsg8] = useState("");
    const [modalMsg9, setModalMsg9] = useState("");
    const [modalMsg10, setModalMsg10] = useState("");
    const [modalMsg11, setModalMsg11] = useState("");
    const [modalMsg12, setModalMsg12] = useState("");
    const [modalMsg13, setModalMsg13] = useState("");
    const [modalMsg14, setModalMsg14] = useState("");

    const demoArr = [];

    const onEnterDemo1 = () => {
        setDisAbleDemoKey(true);
        setSelectDemoOne(true);
        setDemoKeyPointloader(true);
        gettingDemo(pName, pName2, Indursty, Lob1).then((result) => {
            if (result.statusCode == 400) {
                // alert("No Demo Key Points available. Please use input field.");
                setmodal1(true);
                setModalMsg1("No Demo Key Points available. Please use input field.");
                setDemoKeyPointloader(false);
                setSelectDemoOne(false);
                setDisAbleDemoKey(false);
            } else {
                setDisAbleDemoKey(false);
                let data = result.Key_points;
                data.map((row, i) => {
                    demoArr.push({ id: i, name: row });
                });

                setDemoKeyPointOne(demoArr);
                setDemoKeyPointloader(false);
            }
        });
    };
    const onEnterDemo2 = () => {
        setDisAbleDemoKey2(true);
        setSelectDemoTwo(true);
        setDemoKeyPointloaderDemo2(true);
        gettingDemo(pName, pName2, Indursty, Lob1).then((result) => {
            if (result.statusCode == 400) {
                // alert("No Demo Key Points available. Please use input field.");
                setmodal2(true);
                setModalMsg2("No Demo Key Points available. Please use input field.");
                setDemoKeyPointloaderDemo2(false);
                setSelectDemoTwo(false);
                setDisAbleDemoKey2(false);
            } else {
                setDisAbleDemoKey2(false);
                let data = result.Key_points;
                data.map((row, i) => {
                    demoArr.push({ id: i, name: row });
                });

                setDemoKeyPointOne(demoArr);
                setDemoKeyPointloaderDemo2(false);
            }
        });
    };
    const onEnterDemo3 = () => {
        setDisAbleDemoKey3(true);
        setSelectDemoThree(true);
        setDemoKeyPointloaderDemo3(true);
        gettingDemo(pName, pName2, Indursty, Lob1).then((result) => {
            if (result.statusCode == 400) {
                // alert("No Demo Key Points available. Please use input field.");
                setmodal3(true);
                setModalMsg3("No Demo Key Points available. Please use input field.");
                setDemoKeyPointloaderDemo3(false);
                setSelectDemoThree(false);
                setDisAbleDemoKey3(false);
            } else {
                setDisAbleDemoKey3(false);
                let data = result.Key_points;
                data.map((row, i) => {
                    demoArr.push({ id: i, name: row });
                });

                setDemoKeyPointOne(demoArr);
                setDemoKeyPointloaderDemo3(false);
            }
        });
    };
    const onEnterDemo4 = () => {
        setDisAbleDemoKey4(true);
        setSelectDemoFour(true);
        setDemoKeyPointloaderDemo4(true);
        gettingDemo(pName, pName2, Indursty, Lob1).then((result) => {
            if (result.statusCode == 400) {
                // alert("No Demo Key Points available. Please use input field.");
                setmodal4(true);
                setModalMsg4("No Demo Key Points available. Please use input field.");
                setDemoKeyPointloaderDemo4(false);
                setSelectDemoFour(false);
                setDisAbleDemoKey4(false);
            } else {
                setDisAbleDemoKey4(false);
                let data = result.Key_points;
                data.map((row, i) => {
                    demoArr.push({ id: i, name: row });
                });

                setDemoKeyPointOne(demoArr);
                setDemoKeyPointloaderDemo4(false);
            }
        });
    };

    const indArray = {
        Consumer: [
            "Consumer Products",
            "Healthcare",
            "Life Sciences",
            "Retail",
            "Retail- Fashion",
            "Wholesale Distribution",
        ],
        Discrete: [
            "Aerospace & Defense",
            "Automotive",
            "High Tech",
            "Industrial Manufacturing",
        ],

        ENR: [
            "Chemicals",
            "Mill Products & Mining",
            "Oil Gas & Energy",
            "Utilities",
        ],
        Finserve: ["Banking", "Insurance"],
        "Public Services": ["Defense & Security", "Public Sector"],
        "Cross-Industry": [],
        Services: [
            "Engineering Construction & Operations",
            "Higher Education & Research",
            "Professional Services",
            "Sports & Entertainment",
            "Telco",
            "Travel & Transport",
        ],
    };
    let history = useHistory();

    const onClickHeat = () => {
        props.history.push("/heat-map");
    };
    const [newBArray, setnewBArray] = useState([]);

    const [Lob1, setLob1] = useState([]);
    const [Domain, setDomain] = useState("");
    const [ind, setInd] = useState([]);
    const [GrapshData, setGrapshData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [progressValue, setprogressValue] = useState("");
    const [totalSum, settotalSum] = useState("");
    const [progressValueSearch, setprogressValueSearch] = useState("");
    const [barChartDataName, setBarChartDataName] = useState("");
    const [IndbarChartDataName, setIndBarChartDataName] = useState("");
    const [IndbarChartDataName2, setIndBarChartDataName2] = useState("");
    const [barChartDataValue, setBarChartDataValue] = useState("");
    const [filterPName, setFilterPName] = useState("");
    const [searchBox, setSearchBox] = useState(false);
    const [searchBox2, setSearchBox2] = useState(false);
    const [heatMapData, setHeatMapData] = useState("");
    const [dummyArr, setDummyArr] = useState(tree);
    const [isAutoSaved, setIsAutoSaved] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "26px",
            width: "30%",
            borderRadius: "15px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        },
    };

    const CallingSaveDraftAPI = () => {
        setIsSaved(false);
        SaveDraftState(
            pName,
            pName2,
            useCase,
            Indursty,
            Protagonist,
            BO1,
            Demo1,
            Demo2,
            Demo3,
            Demo4,
            Lob1,
            Domain,
            VideoName,
            firstProductUrl,
            SecondProductUrl,
            extrasss,
            extra,
            SBO2,
            extrasss2,
            extra2,
            SBO3,
            extrasss3,
            extra3,
            SBO4,
            extrasss4,
            extra4,
            extrasss5,
            newIntro,
            newIntro2,
            extrasss6,
            newOutro,
            protagnist2,
            protagnist3,
            protagnist4
        ).then((res) => {
            console.log("getDraftId=======?>", res);
            setIsAutoSaved(true);
            setIsSaved(true);
        });
    };

    // let listOfBo = newBArray;

    let listOfBo = [
        { value: "0", label: "Finance" },
        { value: "1", label: "CX" },
        { value: "2", label: "HXM" },
        { value: "3", label: "Sourcing and Procurement" },
        { value: "4", label: "Travel & Expense" },
        { value: "5", label: "BTP" },
        { value: "6", label: "DSC" },
        { value: "7", label: "ISM" },
    ];

    let listOfIndConsumer = [
        { value: "0", label: "Consumer Products" },
        { value: "1", label: "Healthcare" },
        { value: "2", label: "Life Sciences" },
        { value: "3", label: "Retail" },
        { value: "4", label: "Retail- Fashion" },
        { value: "5", label: "Wholesale Distribution" },
    ];
    let listOfIndDiscrete = [
        { value: "6", label: "Aerospace & Defense" },
        { value: "7", label: "Automotive" },
        { value: "8", label: "High Tech" },
        { value: "9", label: "Industrial Manufacturing" },
    ];
    let listOfIndENR = [
        { value: "10", label: "Chemicals" },
        { value: "11", label: "Mill Products & Mining" },
        { value: "12", label: "Oil Gas & Energy" },
        { value: "13", label: "Utilities" },
    ];
    let listOfIndFinServe = [
        { value: "14", label: "Banking" },
        { value: "15", label: "Insurance" },
    ];
    let listOfIndPublicService = [
        { value: "16", label: "Defense & Security" },
        { value: "17", label: "Public Sector" },
    ];
    let listOfIndService = [
        { value: "18", label: "Engineering Construction & Operations" },
        { value: "19", label: "Higher Education & Research" },
        { value: "20", label: "Media" },
        { value: "21", label: "Professional Services" },
        { value: "22", label: "Sports & Entertainment" },
        { value: "23", label: "Telco" },
        { value: "24", label: "Travel & Transport" },
    ];
    let listOfIndOther = [{ value: "25", label: "X-Industry" }];
    const groupedOptionsInd = [
        {
            label: "Consumer",
            options: listOfIndConsumer,
        },
        {
            label: "Discrete",
            options: listOfIndDiscrete,
        },
        {
            label: "ENR",
            options: listOfIndENR,
        },
        {
            label: "Finserve",
            options: listOfIndFinServe,
        },
        {
            label: "Public Services",
            options: listOfIndPublicService,
        },
        {
            label: "Services",
            options: listOfIndService,
        },
        {
            label: "Other",
            options: listOfIndOther,
        },
    ];

    const listOfProductNames = dummyData;
    const listOfProductNamesFilters = dummyData;

    let listOfDomain = [];

    let listOfDomainIdea = [
        { value: "0", label: "Plan to Optimize Products/Services" },
        { value: "1", label: "Idea to Requirements" },
        { value: "2", label: "Design to Release" },
        { value: "3", label: "Products/Services to Market" },
        { value: "4", label: "Manage Products/ Services" },
    ];
    let listOfDomainSource = [
        { value: "5", label: "Plan to Optimize Sourcing and Procurement" },
        { value: "6", label: "Source to Contract" },
        { value: "7", label: "Plan to Optimize Fulfillment" },
        { value: "8", label: "Procure to receipt" },
        { value: "9", label: "Request to Resolution" },
        { value: "10", label: "Invoice to Pay" },
        { value: "11", label: "Manage Suppliers & Collaboration" },
    ];
    let listOfDomainPlanToFill = [
        { value: "12", label: "Plan to Optimize Fulfillment" },
        { value: "13", label: "Make to Inspect" },
        { value: "14", label: "Procure to Receipt" },
        { value: "15", label: "Deliver Product to Fulfill" },
        { value: "16", label: "Delver Service to Fulfill" },
        { value: "17", label: "Manage Fulfillment" },
    ];
    let listOfDomainLeadToCash = [
        { value: "18", label: "Plan to Optimize Marketing and Sales" },
        { value: "19", label: "Market to Lead" },
        { value: "20", label: "Opportunity to Quote" },
        { value: "21", label: "Order to Fulfill" },
        { value: "22", label: "Request to Service" },
        { value: "23", label: "Invoice to Cash" },
        { value: "24", label: "Manage Customers and Channels" },
    ];
    let listOfDomainRecuritToRetire = [
        { value: "25", label: "Plan to Optimize the Workforce" },
        { value: "26", label: "Recruit to Onboard" },
        { value: "27", label: "Develop to Grow" },
        { value: "28", label: "Reward to retain" },
        { value: "29", label: "Manage Workforce and Retirement" },
    ];
    let listOfDomainAcquireToDecommission = [
        { value: "30", label: "Plan to Optimize Assets" },
        { value: "31", label: "Acquire to Onboard" },
        { value: "32", label: "Operate to Maintain" },
        { value: "33", label: "Offboard to Decommission" },
        { value: "34", label: "Manage Assets" },
    ];
    let listOfDomainGovernance = [
        { value: "35", label: "Plan to Optimize Enterprise" },
        { value: "36", label: "Manage Portfolio and Projects" },
        { value: "37", label: "Manage Sustainable Operations" },
        { value: "38", label: "Manage Governance, Compliance and Risk" },
        { value: "39", label: "Manage Information technology" },
    ];
    let listOfDomainFinance = [
        { value: "40", label: "Plan to Optimize Financials" },
        { value: "41", label: "Invoice to Pay" },
        { value: "42", label: "Invoice to Cash" },
        { value: "43", label: "Record to Report" },
        { value: "44", label: "Manage Treasury" },
        { value: "45", label: "Manage Real Estate" },
    ];

    const groupedOptionsDomain = [
        {
            label: "Idea to Market",
            options: listOfDomainIdea,
        },
        {
            label: "Source to Pay",
            options: listOfDomainSource,
        },
        {
            label: "Plan to Fulfill",
            options: listOfDomainPlanToFill,
        },
        {
            label: "Lead to Cash",
            options: listOfDomainLeadToCash,
        },
        {
            label: "Recruit to Retire",
            options: listOfDomainRecuritToRetire,
        },
        {
            label: "Acquire to Decommission",
            options: listOfDomainAcquireToDecommission,
        },
        {
            label: "Governance",
            options: listOfDomainGovernance,
        },
        {
            label: "Finance",
            options: listOfDomainFinance,
        },
    ];

    // listOfBo.sort(function (a, b) {
    //     return a.name.localeCompare(b.name);
    // });

    // DomainList.sort(function (a, b) {
    //     return a.localeCompare(b);
    // });
    // RBAList.sort(function (a, b) {
    //     return a.localeCompare(b);
    // });
    var multiArr = [];

    const onselectLOB = (e) => {
        var val = e;
        val.map((a) => {
            multiArr.push(a.label);
        });
        setLob1(multiArr);
    };
    const onselectDomain = (e) => {
        setDomain(e.label);
    };
    const onRemoveL = (selectedList, removedItem) => {
        Lob1.splice(indexOf(removedItem.name), 1);
    };
    const onselectPN = (selectedList, selectedItem) => {
        setPname((pName) => [...pName, selectedItem.name]);
    };
    const onselectInd = (e) => {
        setIndursty(e.label);
    };
    const onRemoveI = (selectedList, removedItem) => {
        console.log(removedItem);
        Indursty.splice(indexOf(removedItem.name), 1);
        console.log(Indursty);
    };
    const onRemove = (selectedList, removedItem) => { };
    const customStylesSelect = {
        control: (base, state) => ({
            ...base,
            boxShadow: "none",
            // You can also use state.isFocused to conditionally style based on the focus state
        }),
    };

    const [draftStateData, setDraftStatedata] = useState({});

    const [SaveDrftStateOne, setSaveDrftStateOne] = useState(false);
    const [SaveDrftStateTwo, setSaveDrftStateTwo] = useState(false);
    const [SaveDrftStateThree, setSaveDrftStateThree] = useState(false);

    const [SaveDrftStateButtonOne, setSaveDrftStateButtonOne] = useState(true);
    const [SaveDrftStateButtonTwo, setSaveDrftStateButtonTwo] = useState(true);
    const [SaveDrftStateButtonThree, setSaveDrftStateButtonThree] = useState(
        true
    );
    const [valueLO, setValueLO] = useState([]);

    const gettingSavedDraft = () => {
        GetSavedDraftDetails().then((res) => {
            if (res.success) {
                let newArrLo = [];
                res.data.line_of_business.map((er) => {
                    newArrLo.push({ value: 0, label: er });
                });
                setValueLO(newArrLo);

                if (res.data.display_business_outcome_one) {
                    // setSaveDrftStateOne(true)
                }
                if (res.data.display_business_outcome_two) {
                    setSaveDrftStateOne(true);
                    setSaveDrftStateButtonOne(false);
                }
                if (
                    res.data.display_business_outcome_three ||
                    res.data.business_outcomes_three
                ) {
                    setSaveDrftStateTwo(true);
                    setSaveDrftStateButtonTwo(false);
                }
                if (res.data.display_business_outcome_four) {
                    setSaveDrftStateThree(true);
                    setSaveDrftStateButtonThree(false);
                }
                setDraftStatedata(res.data);
                setVideoName(res.data.video_name);
                setFirstProductUrl(res.data.first_product_url);
                setSecondProductUrl(res.data.first_product_url);
                setBO1(res.data.business_outcomes);
                setPname(res.data.first_product_name);
                setPname2(res.data.second_product_name);
                setUseCase(res.data.description);
                setProtagonist(res.data.role1);
                setDemo1(res.data.demo_keypoint_one);
                setDemo2(res.data.demo_keypoint_two);
                setDemo3(res.data.demo_keypoint_three);
                setDemo4(res.data.demo_keypoint_four);
                setSBO2(res.data.business_outcomes_two);
                setextrasss(res.data.selected_demo_one);
                setextrasss2(res.data.selected_demo_two);
                setextra3(res.data.selected_demo_three);
                setextra4(res.data.selected_demo_four);
                setextrasss3(res.data.selected_demo_three);
                setextrasss4(res.data.selected_demo_four);
                setextrasss5(res.data.intro);
                setextrasss6(res.data.outro);
                setprotagnist2(res.data.role2);
                setnewIntro2(res.data.intro_solution);
                setSBO3(res.data.business_outcomes_three);
                setprotagnist3(res.data.role3);
                setSBO4(res.data.business_outcomes_four);
                setprotagnist4(res.data.role4);
                setIndursty(res.data.industry);
                setLob1(res.data.line_of_business);
                setDomain(res.data.domain);

                // setIndursty(Indursty => [...Indursty, JSON.parse(res.data.industry)])
                // setLob1(Lob1 => [...Lob1, JSON.parse(res.data.line_of_business)])
            }
        });
    };
    const [canClear, setCanClear] = useState(false);
    const [showClear, setShowclear] = useState(false);

    const ClearAll = () => {
        window.location.reload(false);

        console.log("clear all called");
        window.scrollTo(0, 0);
        setextra2("");
        ListOfDomainSelected = [];
        LineOfBUsiness = [];
        setSaveDrftStateOne(false);
        setSaveDrftStateTwo(false);
        setSaveDrftStateThree(false);

        setSaveDrftStateButtonOne(true);
        setSaveDrftStateButtonTwo(true);
        setSaveDrftStateButtonThree(true);
        setDraftStatedata({});
        setFirstProductUrl("");
        setSecondProductUrl("");
        setBO1("");
        setPname("");
        setPname2("");
        setUseCase("");
        setProtagonist("");
        setDemo1("");
        setDemo2("");
        setDemo3("");
        setDemo4("");
        setSBO2("");
        setextrasss("");
        setextrasss2("");
        setextra("");
        setextra3("");
        setextra4("");
        setextrasss3("");
        setextrasss4("");
        setextrasss5("");
        setextrasss6("");
        setprotagnist2("");
        setnewIntro2("");
        setSBO3("");
        setprotagnist3("");
        setSBO4("");
        setprotagnist4("");
        setIndursty();
        setLob1([]);
        setFloading(false);
        setRegenerateDemoScript(true);
        setnext1None(false);
        setnext2None(false);
        setnext3None(false);
        setnext3None111(false);
        setoutNon1(false);
        setsection1dis(true);
        setoutNon2(false);
        setfinishClick(true);
        setsection2dis(true);
        setstate1(false);
        setGenerateDemoScript(true);
        setregenerate(false);
        setGenerateDemoScript1(true);
        setdis76546_1(true);
        setdis0988_11(false);
        setlastDivNone(false);
        setDEMO4OP(false);
        setreGenIntro(false);
        setFINALLAS(true);
        setFOROutro(false);
        setSelectDemoOne(false);
        setSelectDemoTwo(false);
        setSelectDemoThree(false);
        setSelectDemoFour(false);

        setSaveDrftStateButtonOne(true);
        setSaveDrftStateButtonTwo(true);
        setSaveDrftStateButtonThree(true);
        setDraftStatedata({});
        setFirstProductUrl("");
        setSecondProductUrl("");
        setBO1("");
        setPname("");
        setPname2("");
        setUseCase("");
        setProtagonist("");
        setDemo1("");
        setDemo2("");
        setDemo3("");
        setDemo4("");
        setSBO2("");
        setextrasss("");
        setextrasss2("");
        setextra3("");
        setextra4("");
        setextrasss3("");
        setextrasss4("");
        setextrasss5("");
        setextrasss6("");
        setprotagnist2("");
        setnewIntro2("");
        setSBO3("");
        setprotagnist3("");
        setSBO4("");
        setprotagnist4("");
        // setIndursty([]);
        setLob1([]);
        setFloading(false);
        setRegenerateDemoScript(true);
        setnext1None(false);
        setnext2None(false);
        setnext3None(false);
        setnext3None111(false);
        setoutNon1(false);
        setsection1dis(true);
        setoutNon2(false);
        setfinishClick(true);
        setsection2dis(true);
        setstate1(false);
        setGenerateDemoScript(true);
        setregenerate(false);
        setGenerateDemoScript1(true);
        setdis76546_1(true);
        setdis0988_11(false);
        setlastDivNone(false);
        setDEMO4OP(false);
        setreGenIntro(false);
        setFINALLAS(true);
        setFOROutro(false);
        setSelectDemoOne(false);
        setSelectDemoTwo(false);
        setSelectDemoThree(false);
        setSelectDemoFour(false);

        setmodal1(false);
        setmodal2(false);

        setmodal3(false);

        setmodal4(false);

        setmodal5(false);
        setmodal6(false);
        setmodal7(false);
        setmodal8(false);
        setmodal9(false);
        setmodal10(false);
        setmodal11(false);
        setmodal12(false);
        setmodal13(false);
        setmodal14(false);
        setloading(false);
        setdisabledInputs(false);
        setdisabledInputsOnNext(false);
        setdisabledInputsd2(false);
        setdisabledInputsd3(false);
        setdisabledInputsd4(false);
        setisChecked(false);
        setisChecked2(false);
        setisChecked3(false);
        setisChecked4(false);
        setisChecked5(false);
        setisChecked6(false);
        setisChecked11(false);
        setisChecked12(false);
        setisChecked7(false);
        setisChecked8(false);
        setisChecked9(false);
        setisChecked10(false);
        setStateOne(false);
        setStateTwo(false);
        setStateThree(false);
        setStateFour(false);
        setStateFive(false);
        setStateSix(false);
        setDemoKeyPointloader(false);
        setDemoKeyPointloaderDemo2(false);
        setDemoKeyPointloaderDemo3(false);
        setDemoKeyPointloaderDemo4(false);
        setDisAbleDemoKey(false);
        setDisAbleDemoKey2(false);
        setDisAbleDemoKey3(false);
        setDisAbleDemoKey4(false);

        setDisActiveBtn(false);
        setDisActiveBtn2(false);
        setDisActiveBtn3(false);
        setDisActiveBtn4(false);
    };
    // const selectedIndustryList = [];
    // const json = draftStateData.industry;
    // json && json.forEach((item) => {
    //     selectedIndustryList.push({ name: item });
    // });

    useEffect(() => {
        setIsLoading(true);
        gettingSavedDraft();
        GraphsData().then((result) => {
            if (result.success) {
                setnewBArray(result.business_array);
                localStorage.setItem("DemoModels", result.model_names.Demo_Model);
                localStorage.setItem("IntroModels", result.model_names.Intro_Model);
                localStorage.setItem("OutroModels", result.model_names.Outro_Model);

                let graphDataRender = result.Product_Count.slice(0, 10).map((e) => {
                    return e.name;
                });
                let graphDataRender2 = result.Product_Count.slice(0, 10).map((e) => {
                    return e.value;
                });
                let IndgraphDataRender = result.Industry_Count.slice(1, 11).map((e) => {
                    return e.name;
                });
                let IndgraphDataRender2 = result.Industry_Count.slice(1, 11).map(
                    (e) => {
                        return e.value;
                    }
                );
                setIndBarChartDataName(IndgraphDataRender);
                setIndBarChartDataName2(IndgraphDataRender2);
                setHeatMapData(result.Product_Used_Industry);
                setFilterPName(result.Product_Count);
                setBarChartDataName(graphDataRender);
                setBarChartDataValue(graphDataRender2);

                setGrapshData(result.Industry_Count);
                let map = result.Industry_Count.map((e) => {
                    return e.value;
                });
                let sum = 0;
                for (const value of Object.values(map)) {
                    sum += toInteger(value);
                }
                settotalSum(sum);
                setIsLoading(false);
            } else {
                alert("Something Went Wrong");
            }
        });
    }, []);

    const [StateOne, setStateOne] = useState(false);
    const [StateTwo, setStateTwo] = useState(false);
    const [StateThree, setStateThree] = useState(false);
    const [StateFour, setStateFour] = useState(false);
    const [StateFive, setStateFive] = useState(false);
    const [StateSix, setStateSix] = useState(false);

    const [pName, setPname] = useState("");
    const [pName2, setPname2] = useState("");
    const [firstProductUrl, setFirstProductUrl] = useState("");
    const [SecondProductUrl, setSecondProductUrl] = useState("");
    const [useCase, setUseCase] = useState("");
    const [Indursty, setIndursty] = useState();
    const [Protagonist, setProtagonist] = useState("");
    const [BO1, setBO1] = useState("");
    const [VideoName, setVideoName] = useState("");
    const [Demo1, setDemo1] = useState("");
    const [Demo1Two, setDemo1Two] = useState("");
    const [Demo1Three, setDemo1Three] = useState("");
    const [Demo2, setDemo2] = useState("");
    const [Demo2Two, setDemo2Two] = useState("");
    const [Demo2Three, setDemo2Three] = useState("");
    const [Demo3, setDemo3] = useState("");
    const [Demo3Two, setDemo3Two] = useState("");
    const [Demo3Three, setDemo3Three] = useState("");
    const [Demo4, setDemo4] = useState("");
    const [Demo4Two, setDemo4Two] = useState("");
    const [Demo4Three, setDemo4Three] = useState("");
    const [resA1, setResA1] = useState("");
    const [resA2, setResA2] = useState("");
    const [resB1, setResB1] = useState("");
    const [resB2, setResB2] = useState("");
    const [resC1, setResC1] = useState("");
    const [resC1_2, setResC1_2] = useState("");
    const [resC2, setResC2] = useState("");
    const [resC2_1, setResC2_1] = useState("");
    const [loading, setloading] = useState(false);
    const [disabledInputs, setdisabledInputs] = useState(false);
    const [disabledInputsOnNext, setdisabledInputsOnNext] = useState(false);
    const [disabledInputsd2, setdisabledInputsd2] = useState(false);
    const [disabledInputsd3, setdisabledInputsd3] = useState(false);
    const [disabledInputsd4, setdisabledInputsd4] = useState(false);
    const [isChecked, setisChecked] = useState(false);
    const [isChecked2, setisChecked2] = useState(false);
    const [isChecked3, setisChecked3] = useState(false);
    const [isChecked4, setisChecked4] = useState(false);
    const [isChecked5, setisChecked5] = useState(false);
    const [isChecked6, setisChecked6] = useState(false);
    const [isChecked11, setisChecked11] = useState(false);
    const [isChecked12, setisChecked12] = useState(false);
    const [isChecked7, setisChecked7] = useState(false);
    const [isChecked8, setisChecked8] = useState(false);
    const [isChecked9, setisChecked9] = useState(false);
    const [isChecked10, setisChecked10] = useState(false);
    const [extra, setextra] = useState("");
    const [extrasss, setextrasss] = useState("");
    const [extra2, setextra2] = useState("");
    const [extrasss2, setextrasss2] = useState("");
    const [extra3, setextra3] = useState("");
    const [extrasss3, setextrasss3] = useState("");
    const [extra4, setextra4] = useState("");
    const [extrasss4, setextrasss4] = useState("");
    const [extrasss5, setextrasss5] = useState("");
    const [extrasss6, setextrasss6] = useState("");
    const [newIntro, setnewIntro] = useState("");
    const [newIntro2, setnewIntro2] = useState("");
    const [newOutro, setnewOutro] = useState("");
    const [lastLoading, setlastLoading] = useState(false);
    const [outroLoading, setoutroLoading] = useState(false);
    const [outroState1, setoutroState1] = useState("");
    const [outroState2, setoutroState2] = useState("");
    const [ShowProductNext, setShowProductNext] = useState(false);
    const [demo3dis, setdemo3dis] = useState(false);

    const OnSelectSearchRes = (e) => {
        setPname(e.name);
        setSearchBox(false);
        setprogressValueSearch(e.value);
    };

    const out1 = (e) => {
        setoutroState1(e.target.value);
    };
    const out2 = (e) => {
        setoutroState2(e.target.value);
    };
    const [SBO2, setSBO2] = useState("");
    const [SBO3, setSBO3] = useState("");
    const [SBO4, setSBO4] = useState("");
    const [Fintro1, setFintro1] = useState("");
    const [Foutro1, setFoutro1] = useState("");
    const [Fintro2, setFintro2] = useState("");
    const [Foutro2, setFoutro2] = useState("");
    const [protagnist2, setprotagnist2] = useState("");
    const [protagnist3, setprotagnist3] = useState("");
    const [protagnist4, setprotagnist4] = useState("");
    const [Floading, setFloading] = useState(false);
    const [RegenerateDemoScript, setRegenerateDemoScript] = useState(true);
    const [next1None, setnext1None] = useState(false);
    const [next2None, setnext2None] = useState(false);
    const [next3None, setnext3None] = useState(false);
    const [next3None111, setnext3None111] = useState(false);
    const [outNon1, setoutNon1] = useState(false);
    const [section1dis, setsection1dis] = useState(true);
    const [outNon2, setoutNon2] = useState(false);
    const [finishClick, setfinishClick] = useState(true);
    const [section2dis, setsection2dis] = useState(true);
    const [state1, setstate1] = useState(false);
    const [isGenerateDemoScript, setGenerateDemoScript] = useState(true);
    const [regenerate, setregenerate] = useState(false);
    const [isGenerateDemoScript1, setGenerateDemoScript1] = useState(true);
    const [dis76546_1, setdis76546_1] = useState(true);
    const [dis0988_11, setdis0988_11] = useState(false);
    const [lastDivNone, setlastDivNone] = useState(false);
    const [DEMO4OP, setDEMO4OP] = useState(false);
    const [reGenIntro, setreGenIntro] = useState(false);
    const [FINALLAS, setFINALLAS] = useState(true);
    const [FOROutro, setFOROutro] = useState(false);
    const [wordFileData, setwordFileData] = useState();
    const int1 = (e) => {
        setFintro1(e.target.value);
    };
    const int2 = (e) => {
        setFintro2(e.target.value);
    };

    const [bo1RES, setbo1RES] = useState();
    const [bo1RES_1, setbo1RES_1] = useState("");
    const [bo1RES_2, setbo1RES_2] = useState("");
    const [bo1RES_3, setbo1RES_3] = useState("");

    const download = () => {
        DownloadFile().then((res) => {
            setwordFileData(res.data);
        });
    };
    useEffect(() => {
        scrollToTop();
    }, []);
    useEffect(() => {
        $("form").submit(function () {
            var radioValue = $("input[name='options']:checked").val();
            if (radioValue) {
                // alert("You selected - " + radioValue);
                setmodal5(true);
                setModalMsg5("You selected - " + radioValue);
            }
            return false;
        });

        autosize();
        function autosize() {
            var text = $(".autosize");

            text.each(function () {
                $(this).attr("rows", 1);
                resize($(this));
            });

            text.on("input", function () {
                resize($(this));
            });

            function resize($text) {
                $text.css("height", "auto");
                $text.css("height", $text[0].scrollHeight + "px");
            }
        }
    });

    const OnChnageOutroF = (e) => {
        setnewOutro(e.target.value);
    };
    const OnchangeDEmoF3 = (e) => {
        setextra3(e.target.value);
    };
    const OnchangeDemoRes4 = (e) => {
        setextra4(e.target.value);
    };
    const onChangeBoF3 = (e) => {
        setSBO3(e.target.value);
    };
    const onChangeBoF55 = (e) => {
        setSBO4(e.target.value);
    };
    const OnChnageBof2 = (e) => {
        setSBO2(e.target.value);
    };
    const yess = (e) => {
        setextrasss(e.target.value);
        setStateOne(true);
    };
    const yess2 = (e) => {
        setextrasss2(e.target.value);
        setStateTwo(true);
    };
    const yess3 = (e) => {
        setextrasss3(e.target.value);
        setStateThree(true);
    };
    const yess4 = (e) => {
        setextrasss4(e.target.value);
        setStateFour(true);
    };
    const yess5 = (e) => {
        setextrasss5(e.target.value);
        setStateFive(true);
    };
    const onChangeSolution = (e) => {
        setnewIntro2(e.target.value);
    };
    const yess6 = (e) => {
        setextrasss6(e.target.value);
        setStateSix(true);
    };
    const ONchangeboo1 = (e) => {
        setBO1(e.target.value);
    };
    const onChanegINTRO = (e) => {
        setnewIntro(e.target.value);
    };
    // const tree = [
    //     { text: "Analytics l2", nodes: [{ text: "SAP Analytics Cloud", isSeleted: true }, { text: "SAP BusinessObjects Intercompany", isSeleted: true }, { text: "SAP InfiniteInsight", isSeleted: true }] },
    //     { text: 'Analytics l3', nodes: [{ text: 'SAP Analytics Cloud', isSeleted: false, nodes: [{ text: 'SAP Analytics Cloud', isSelected: true }, { text: 'SAP Analytics Cloud, embedded edition', isSelected: true }] }] },
    //     { text: "Content and Collaboration l3", nodes: [{ text: "SAP Jam", isSeleted: false, nodes: [{ text: "SAP Jam Collaboration", isSeleted: true }, { text: "SAP Text", isSeleted: true }] }] },
    //     { text: "Technology Platform l4", nodes: [{ text: "Customer Relationship Management", isSeleted: false, nodes: [{ text: "Content and Collaboration", isSeleted: false, nodes: [{ text: "localization services", isSeleted: true }, { text: "SAP Customer Experience solutions", isSeleted: true }, { text: "SAP Services Customer Experience solutions", isSeleted: true }] }] }] },
    //     { text: "SAP Core Model l5", nodes: [{ text: "Software Product", isSeleted: false, nodes: [{ text: "Content and Collaboration", isSeleted: false, nodes: [{ text: "localization services", isSeleted: false, nodes: [{ text: "SAP Localization Hub, advanced compliance reporting service", isSeleted: true }, { text: "SAP Localization Hub", isSeleted: true }, { text: "tax service", isSeleted: true }] }] }] }] },

    // ];
    function filter(array, text) {
        const getNodes = (result, object) => {
            if (object.text.toLowerCase().includes(text)) {
                result.push(object);
                return result;
            }
            if (Array.isArray(object.nodes)) {
                const nodes = object.nodes.reduce(getNodes, []);
                if (nodes.length) result.push({ ...object, nodes });
            }
            return result;
        };

        return array.reduce(getNodes, []);
    }
    const onChangePname = (e) => {
        let val = e.target.value.toLowerCase();
        let filteredArray = filter(tree, val);

        setDummyArr(filteredArray);
        setSearchBox(true);
        setPname(e.target.value);
        setDraftStatedata({
            ...draftStateData,
            first_product_name: e.target.value,
        });
        // setprogressValueSearch("")
    };
    const onChangePname2 = (e) => {
        let val = e.target.value.toLowerCase();
        let filteredArray = filter(tree, val);

        setDummyArr(filteredArray);
        setSearchBox2(true);
        setPname2(e.target.value);
        setDraftStatedata({
            ...draftStateData,
            second_product_name: e.target.value,
        });
        // setprogressValueSearch("")
    };
    const onChangeFirstProductUrl = (e) => {
        setFirstProductUrl(e.target.value);
        // setDraftStatedata({ ...draftStateData, first_product_url: e.target.value })
    };
    const onChangeSecondProductUrl = (e) => {
        setSecondProductUrl(e.target.value);
        // setDraftStatedata({ ...draftStateData, second_product_url: e.target.value })
    };
    const onFoucusOut = () => {
        setTimeout(() => {
            setSearchBox(false);
        }, 200);
    };
    const onFocusProductName = () => {
        setSearchBox(true);
        setDummyArr(tree);
    };
    const onFocusProductName2 = () => {
        setSearchBox2(true);
        setDummyArr(tree);
    };
    const onFoucusOutP2 = () => {
        setTimeout(() => {
            setSearchBox2(false);
        }, 200);
    };
    const selectTextPN = (e) => {
        setPname(e);
    };
    const selectTextPN2 = (e) => {
        setPname2(e);
    };

    const onChangeUseCase = (e) => {
        setUseCase(e.target.value);
        setDraftStatedata({ ...draftStateData, description: e.target.value });
    };
    const onChangeIndursty = (e) => {
        let abc = e.target.value;
        setIndursty(abc);
        // let aa = GrapshData.find((e) => e.name == abc)
        // let formula = aa.value;
        // setprogressValue("")
        // setprogressValue(formula)
    };
    const onChangeProtagonist = (e) => {
        setProtagonist(e.target.value);
        setDraftStatedata({ ...draftStateData, role1: e.target.value });
    };
    const onChangeBO1 = (e) => {
        setBO1(e.target.value);
        setDraftStatedata({
            ...draftStateData,
            business_outcomes: e.target.value,
        });
    };
    const onChangeVideoName = (e) => {
        setVideoName(e.target.value);
        // setDraftStatedata({ ...draftStateData, video_name: e.target.value })
    };
    const onChangeDemo1 = (e) => {
        setDemo1(e.target.value);
    };
    const onChangeDemo2 = (e) => {
        setDemo2(e.target.value);
    };
    const onChangeDemo3 = (e) => {
        setDemo3(e.target.value);
    };
    const onChangeDemo4 = (e) => {
        setDemo4(e.target.value);
    };
    const OnchangeCheck = (e) => {
        // document.getElementById("next1None").style.display = "block";
        setnext1None(true);
        setextra(document.getElementById("A1").value);
        setisChecked(true);
        setisChecked2(false);
    };
    const OnchangeCheck2 = (e) => {
        // document.getElementById("next1None").style.display = "block";
        setnext1None(true);
        setextra(document.getElementById("A2").value);
        setisChecked(false);
        setisChecked2(true);
    };
    const OnchangeCheck3 = (e) => {
        // document.getElementById("next2None").style.display = "block";
        setnext2None(true);
        setextra2(document.getElementById("B1").value);
        setisChecked3(true);
        setisChecked4(false);
    };
    const OnchangeCheck4 = (e) => {
        // document.getElementById("next2None").style.display = "block";
        setnext2None(true);
        setextra2(document.getElementById("B2").value);
        setisChecked3(false);
        setisChecked4(true);
    };
    const OnchangeCheck5 = (e) => {
        // document.getElementById("next3None").style.display = "block";
        setnext3None(true);
        setextra3(document.getElementById("C1").value);
        setisChecked5(true);
        setisChecked6(false);
    };
    const OnchangeCheck6 = (e) => {
        // document.getElementById("next3None").style.display = "block";
        setnext3None(true);
        setextra3(document.getElementById("C2").value);
        setisChecked5(false);
        setisChecked6(true);
    };
    const OnchangeCheck11 = (e) => {
        // document.getElementById("next3None111").style.display = "block";
        setnext3None111(true);
        setextra4(document.getElementById("D4_1").value);
        setisChecked11(true);
        setisChecked12(false);
    };
    const OnchangeCheck12 = (e) => {
        // document.getElementById("next3None111").style.display = "block";
        setnext3None111(true);
        setextra4(document.getElementById("D4_2").value);
        setisChecked11(false);
        setisChecked12(true);
    };
    const OnchangeCheck7 = (e) => {
        // document.getElementById("outNon1").style.display = "block";
        setoutNon1(true);
        setnext3None(false)

        let a = document.getElementById("AAA").value;

        const newvar = a && a.split("#\n");
        const newvar2 = newvar[1] && newvar[1].split("\n#Solution");
        let newVARIABLE = newvar2 && newvar2[0] ? newvar2[0] : "";
        let newVARIABLE2 = newvar && newvar[2] ? newvar[2] : a;
        setnewIntro(newVARIABLE);
        setnewIntro2(newVARIABLE2);

        setisChecked7(true);
        setisChecked8(false);
    };
    const OnchangeCheck8 = (e) => {
        // document.getElementById("outNon1").style.display = "block";
        setoutNon1(true);
        setnext3None(false)

        let a = document.getElementById("BBB").value;

        const newvar = a && a.split("#\n");
        const newvar2 = newvar[1] && newvar[1].split("\n#Solution");
        let newVARIABLE = newvar2 && newvar2[0] ? newvar2[0] : "";
        let newVARIABLE2 = newvar && newvar[2] ? newvar[2] : a;
        setnewIntro(newVARIABLE);
        setnewIntro2(newVARIABLE2);

        setisChecked7(false);
        setisChecked8(true);
    };
    const OnchangeCheck9 = (e) => {
        setnewOutro(document.getElementById("CCC").value);
        setisChecked9(true);
        setisChecked10(false);
    };
    const OnchangeCheck10 = (e) => {
        setnewOutro(document.getElementById("DDD").value);
        setisChecked9(false);
        setisChecked10(true);
    };
    const messagesEndRef = useRef(null);
    const onBackClick1 = () => {
        setdisabledInputsOnNext(false);
        setdisabledInputs(false);
        setisChecked(false);
        setisChecked2(false);
        setSaveDrftStateOne(false);
        // document.getElementById("state2").style.display = "none"
        // document.getElementById("section1dis").style.display = "block";
        setsection1dis(true);
    };
    const onBackClick2 = () => {
        setdisabledInputsd2(false);
        setisChecked3(false);
        setisChecked4(false);
        // document.getElementById("regenerate2").style.display = "none"
        setSaveDrftStateTwo(false);
        // document.getElementById("section2dis").style.display = "block";
        setsection2dis(true);
    };
    const onBackClick3 = () => {
        setdisabledInputsd4(false);
        setisChecked5(false);
        setisChecked6(false);
        // document.getElementById("demo4Div").style.display = "none"
        setSaveDrftStateThree(false);
        // document.getElementById("finishClick").style.display = "block";
        setfinishClick(true);
    };
    const scrollToBottom = () => {
        window.scroll({
            top: document.body.offsetHeight,
            left: 0,
            behavior: "smooth",
        });
    };
    const scrollToTop = () => {
        window.scroll({
            top: document.body.offsetTop,
            left: 0,
            behavior: "smooth",
        });
    };
    const [errMessageCreateDraft, setErrMessageCreateDraft] = useState();
    const [bo1Er, setBo1er] = useState(false);
    const [bo2Er, setBo2er] = useState(false);
    const [bo3Er, setBo3er] = useState(false);
    const [bo4Er, setBo4er] = useState(false);

    const generate1Press = () => {
        // AddDraft(VideoName, Indursty, Lob1, pName, useCase).then((res) => {
        //     if (res.success) {
        // localStorage.setItem("draftId", res.id)
        //generate button
        CallingSaveDraftAPI();

        // document.getElementById("gen0disN").style.display = "none";
        // document.getElementById("gen1disN").style.display = "block";
        setRegenerateDemoScript(false);
        setloading(true);
        scriptOne(
            pName,
            pName2,
            useCase,
            Indursty,
            Protagonist,
            BO1,
            Demo1,
            Demo2,
            Demo3,
            Demo4,
            Lob1
        ).then(async (result) => {
            if (result.hasOwnProperty("error")) {
                // alert(result.error.message);
                setmodal6(true);
                setModalMsg6(result.error.message);
                setloading(false);
            }

            let data = result.choices;
            if (data.length == 0) {
                setloading(false);
            }
            setResA1(data[0]["text"]);
            if (data.length == 2) {
                setResA2(data[1]["text"]);
            }
            setloading(false);
            // document.getElementById("state1").style.display = "block";
            setstate1(true);
            scrollToBottom();
        });
        setdisabledInputs(true);

        //     } else {
        //         window.scroll({
        //             top: document.body.offsetTop,
        //             left: 0,
        //             behavior: 'smooth',
        //         });
        //         setErrMessageCreateDraft(res.message)
        //         setTimeout(() => { setErrMessageCreateDraft("") }, 3500);
        //     }
        // })
    };
    const regenerate1Press = () => {
        CallingSaveDraftAPI();
        // document.getElementById("gen0disN").style.display = "none";
        // document.getElementById("gen1disN").style.display = "block";
        setRegenerateDemoScript(false);
        setloading(true);
        scriptOne(
            pName,
            pName2,
            useCase,
            Indursty,
            Protagonist,
            BO1,
            Demo1,
            Demo2,
            Demo3,
            Demo4,
            Lob1
        ).then(async (result) => {
            if (result.hasOwnProperty("error")) {
                // alert(result.error.message);
                setmodal7(true);
                setModalMsg7(result.error.message);
                setloading(false);
            }

            let data = result.choices;
            if (data.length == 0) {
                setloading(false);
            }
            setResA1(data[0]["text"]);
            if (data.length == 2) {
                setResA2(data[1]["text"]);
            }
            setloading(false);
            // document.getElementById("state1").style.display = "block";
            setstate1(true);
            scrollToBottom();
        });
        setdisabledInputs(true);
    };

    const onRegenerate1 = () => {
        CallingSaveDraftAPI();
        // document.getElementById("123disN123").style.display = "none";
        // document.getElementById("disN123").style.display = "block";
        setGenerateDemoScript(false);
        setloading(true);
        scriptTwo(
            pName,
            pName2,
            useCase,
            Indursty,
            protagnist2,
            SBO2,
            Demo2,
            Demo2Two,
            Demo2Three,
            Lob1
        ).then(async (result) => {
            if (result.hasOwnProperty("error")) {
                // alert(result.error.message);
                setmodal8(true);
                setModalMsg8(result.error.message);
                setloading(false);
            }
            let data = result.choices;
            if (data.length == 0) {
                setloading(false);
            }
            setResB1(data[0]["text"]);
            if (data.length == 2) {
                setResB2(data[1]["text"]);
            }
            setloading(false);
            // document.getElementById("regenerate").style.display = "block";
            setregenerate(true);
            scrollToBottom();
        });
    };
    const regenerate3 = () => {
        // document.getElementById("dis76546").style.display = "none";
        // document.getElementById("dis0988").style.display = "block";
        setGenerateDemoScript1(false);
        setloading(true);
        scriptThree(
            pName,
            pName2,
            useCase,
            Indursty,
            protagnist3,
            SBO3,
            Demo3,
            Demo3Two,
            Demo3Three,
            Lob1
        ).then(async (result) => {
            if (result.hasOwnProperty("error")) {
                // alert(result.error.message);
                setmodal9(true);
                setModalMsg9(result.error.message);
                setloading(false);
            }
            let data = result.choices;
            if (data.length == 0) {
                setloading(false);
            }
            setResC1(data[0]["text"]);
            if (data.length == 2) {
                setResC2(data[1]["text"]);
            }
            setloading(false);
            // document.getElementById("demo3dis").style.display = "block";
            setdemo3dis(true);
            scrollToBottom();
        });
    };
    const regenerate4 = () => {
        // document.getElementById("dis76546_1").style.display = "none";
        // document.getElementById("dis0988_11").style.display = "block";
        setdis76546_1(false);
        setdis0988_11(true);
        setloading(true);
        scriptFour(
            pName,
            pName2,
            useCase,
            Indursty,
            protagnist4,
            SBO4,
            Demo4,
            Demo4Two,
            Demo4Three,
            Lob1
        ).then(async (result) => {
            if (result.hasOwnProperty("error")) {
                // alert(result.error.message);
                setmodal10(true);
                setModalMsg10(result.error.message);
                setloading(false);
            }
            let data = result.choices;
            if (data.length == 0) {
                setloading(false);
            }
            setResC1_2(data[0]["text"]);
            if (data.length == 2) {
                setResC2_1(data[1]["text"]);
            }
            setloading(false);
            // document.getElementById("DEMO4OP").style.display = "block";
            setDEMO4OP(true);
            scrollToBottom();
        });
    };
    const onNextClick = () => {
        CallingSaveDraftAPI();
        setdisabledInputsOnNext(true);
        // document.getElementById("section1dis").style.display = "none";
        setsection1dis(false);
        // document.getElementById("state1").style.display = "none";
        setstate1(false);
        // document.getElementById("state2").style.display = "block"
        setSaveDrftStateOne(true);
    };
    const OnNext2Clicked = () => {
        CallingSaveDraftAPI();
        setdisabledInputsd2(true);
        // document.getElementById("section2dis").style.display = "none";
        setsection2dis(false);
        // document.getElementById("regenerate").style.display = "none";
        setregenerate(false);
        // document.getElementById("regenerate2").style.display = "block"
        setSaveDrftStateTwo(true);
    };
    const OnNext3Clicked = () => {
        CallingSaveDraftAPI();
        setdisabledInputsd4(true);
        // document.getElementById("demo4Div").style.display = "block"
        setSaveDrftStateThree(true);
        // document.getElementById("finishClick").style.display = "none";
        setfinishClick(false);
        // document.getElementById("demo3dis").style.display = "none";
        setdemo3dis(false);
        // document.getElementById("next3None").style.display = "none";
        setnext3None(false);
        scrollToBottom();

        // setdisabledInputsd2(true)
        // document.getElementById("section2dis").style.display = "none"
        // document.getElementById("regenerate").style.display = "none"
    };
    const onChangeDO1O = (e) => {
        setResA1(e.target.value);
        setextra(e.target.value);
    };
    const onChangeDO1O1 = (e) => {
        setResA2(e.target.value);
        setextra(e.target.value);
    };
    const onChangeDO2O = (e) => {
        setResB1(e.target.value);
        setextra2(e.target.value);
    };
    const onChangeDO2O1 = (e) => {
        setResB2(e.target.value);
        setextra2(e.target.value);
    };
    const onChangeDO3O = (e) => {
        setResC1(e.target.value);
        setextra3(e.target.value);
    };
    const onChangeDO4O = (e) => {
        setResC1_2(e.target.value);
        setextra4(e.target.value);
    };
    const onChangeDO3O1 = (e) => {
        setResC2(e.target.value);
        setextra3(e.target.value);
    };
    const onChangeDO4O1 = (e) => {
        setResC2_1(e.target.value);
        setextra4(e.target.value);
    };

    const onChangeSBO2 = (e) => {
        setSBO2(e.target.value);
    };
    const onChangeSBO3 = (e) => {
        setSBO3(e.target.value);
    };
    const onChangeSBO4 = (e) => {
        setSBO4(e.target.value);
    };
    const onChangeProtagnest2 = (e) => {
        setprotagnist2(e.target.value);
    };
    const onChangeProtagnest3 = (e) => {
        setprotagnist3(e.target.value);
    };
    const onChangeProtagnest4 = (e) => {
        setprotagnist4(e.target.value);
    };

    // OnFinish Api Calling

    const onFinishClick = () => {
        CallingSaveDraftAPI();

        // document.getElementById("lastDivNone").style.display = "block";
        setlastDivNone(true);
        // document.getElementById("next3None111").style.display = "none"
        //added byself
        setnext3None111(false);
        setfinishClick(false)
        // document.getElementById("dis0988_11").style.display = "none";
        // document.getElementById("DEMO4OP").style.display = "none";
        setDEMO4OP(false);
        setdemo3dis(false);
        // document.getElementById("next3NoneFinish").style.display = "none"
        // document.getElementById("dis76546_1").style.display = "none";
        setdis0988_11(false);
        setdis76546_1(false);
        // document.getElementById("intro1ReGen").style.display = "block"
        // document.getElementById("finishClick").style.display = "none"
        // document.getElementById("intro1ReGen").style.display = "none"
        // document.getElementById("reGenIntro").style.display = "block";
        setreGenIntro(true);
        scrollToBottom();
        setdisabledInputsd3(true);
        setlastLoading(true);
        setFloading(true);
        FinalOutPut(
            pName,
            pName2,
            useCase,
            Indursty,
            Protagonist,
            BO1,
            SBO2,
            SBO3,
            SBO4,
            Demo1,
            Demo1Two,
            Demo1Three,
            Demo2,
            Demo2Two,
            Demo2Three,
            Demo3,
            Demo3Two,
            Demo3Three,
            Demo4,
            Demo4Two,
            Demo4Three,
            Lob1
        ).then(async (result) => {
            if (result.hasOwnProperty("error")) {
                // alert(result.error.message);
                setmodal11(true);
                setModalMsg11(result.error.message);
                setFloading(false);
                setlastLoading(false);
            }
            let Fdata = result.choices;
            setFintro1(Fdata[0]["text"]);
            if (Fdata.length == 2) {
                setFintro2(Fdata[1]["text"]);
            }
            setFloading(false);
            setlastLoading(false);
            // document.getElementById("next3NoneFinish").style.display = "block"
            scrollToBottom();
        });
    };
    const onFinishClick1 = () => {
        CallingSaveDraftAPI();

        // document.getElementById("lastDivNone").style.display = "block";
        setlastDivNone(true);
        // document.getElementById("next3None111").style.display = "none"
        //added self
        setnext3None111(false);
        // document.getElementById("dis0988_11").style.display = "none"
        // document.getElementById("DEMO4OP").style.display = "none"
        // document.getElementById("next3NoneFinish").style.display = "none"
        // document.getElementById("dis76546_1").style.display = "none"
        // document.getElementById("intro1ReGen").style.display = "block"
        // document.getElementById("finishClick").style.display = "none";
        setfinishClick(false);
        scrollToBottom();
        setdisabledInputsd3(true);
        setlastLoading(true);
        setFloading(true);
        FinalOutPut(
            pName,
            pName2,
            useCase,
            Indursty,
            Protagonist,
            BO1,
            SBO2,
            SBO3,
            SBO4,
            Demo1,
            Demo1Two,
            Demo1Three,
            Demo2,
            Demo2Two,
            Demo2Three,
            Demo3,
            Demo3Two,
            Demo3Three,
            Demo4,
            Demo4Two,
            Demo4Three,
            Lob1
        ).then(async (result) => {
            if (result.hasOwnProperty("error")) {
                // alert(result.error.message);
                setmodal12(true);
                setModalMsg12(result.error.message);
                setFloading(false);
                setlastLoading(false);
            }
            let Fdata = result.choices;

            setFintro1(Fdata[0]["text"]);
            if (Fdata.length == 2) {
                setFintro2(Fdata[1]["text"]);
            }
            setFloading(false);
            setlastLoading(false);
            // document.getElementById("next3NoneFinish").style.display = "block"
            scrollToBottom();
        });
    };

    const FinClick = () => {
        CallingSaveDraftAPI();
        // document.getElementById("next3NoneFinish").style.display = "none"
        // document.getElementById("FINALLAS").style.display = "none";
        setFINALLAS(false);
        // document.getElementById("FOROutro").style.display = "none";
        setFOROutro(false);
        // document.getElementById("outNon2").style.display = "none";
        setoutNon2(false);
        setreGenIntro(false);
        scrollToTop();
    };

    const GenerateOutro = () => {
        CallingSaveDraftAPI();
        console.log("123--->12", BO1);
        console.log("123--->23", SBO2);
        console.log("123--->34", SBO3);
        console.log("123--->545", SBO4);

        var outro = [
            {
                B1: BO1 == "" ? "nan" : BO1,
            },
            {
                B1: SBO2 == "" ? "nan" : SBO2,
            },
            {
                B1: SBO3 == null ? "nan" : SBO3,
            },
            {
                B1: SBO4 == null ? "nan" : SBO4,
            },
        ];

        console.log("123--->", BO1);
        console.log("123--->", SBO2);
        console.log("123--->", SBO3);
        console.log("123--->", SBO4);

        var arrOutro = [];
        var i = 0;

        for (i = 0; i < 4; i++) {
            if (outro[i]["B1"] == "nan") {
                arrOutro.push(i);
            }
        }

        if (arrOutro.length == 0) {
            console.log(0);
            var BOs =
                BO1.replace(/\.$/, "").replace(/^./, BO1[0].toUpperCase()) +
                ", " +
                SBO2.replace(/\.$/, "") +
                ", " +
                SBO3.replace(/\.$/, "") +
                ", and " +
                SBO4.replace(/\.$/, "") +
                "...";
        } else if (arrOutro.length == 1) {
            console.log(1);
            var BOs =
                BO1.replace(/\.$/, "").replace(/^./, BO1[0].toUpperCase()) +
                ", " +
                SBO2.replace(/\.$/, "") +
                ", and " +
                SBO3.replace(/\.$/, "") +
                "...";
        } else {
            console.log(2);
            var BOs =
                BO1.replace(/\.$/, "").replace(/^./, BO1[0].toUpperCase()) +
                ", and " +
                SBO2.replace(/\.$/, "") +
                "...";
        }
        // if () {
        //     console.log(1);
        // } else {
        //     console.log(3);
        // }

        // document.getElementById("intro1ReGen").style.display = "none"
        // document.getElementById("FOROutro").style.display = "block";
        setFOROutro(true);
        // document.getElementById("outNon2").style.display = "block";
        setoutNon2(true);
        // document.getElementById("outNon1").style.display = "none";
        setoutNon1(false);
        setoutroLoading(true);
        // document.getElementById("reGenIntro").style.display = "none"
        setreGenIntro(false);
        // document.getElementById("FINALLAS").style.display = "none"
        setFINALLAS(false);
        // document.getElementById("dis76546").style.display = "none"
        scrollToBottom();

        FinalOutro(pName, pName2, useCase, newIntro, BO1, SBO2, SBO3, SBO4).then(
            async (result) => {
                if (result.hasOwnProperty("error")) {
                    // alert(result.error.message);
                    setmodal13(true);
                    setModalMsg13(result.error.message);
                }
                let dataa = result.choices;
                if (dataa) {
                    console.log("ZOHAIB 2___------->>>>", BOs);
                    setoutroState1(BOs + "\n" + dataa[0]["text"].trim());
                    setoutroState2(BOs + "\n" + dataa[1]["text"].trim());
                }
                setoutroLoading(false);
                scrollToBottom();
            }
        );
    };

    const VerbCheckEv1 = () => {
        verbs(BO1).then(async (result) => {
            if (result.statusCode == 100) {
                setbo1RES("Suggestion: " + result.message);
                setTimeout(() => {
                    setbo1RES("");
                }, 3000);
            }
        });
    };
    const VerbCheckEv2 = () => {
        verbs(SBO2).then(async (result) => {
            if (result.statusCode == 100) {
                setbo1RES_1("Suggestion: " + result.message);
                setTimeout(() => {
                    setbo1RES_1("");
                }, 3000);
            }
        });
    };
    const VerbCheckEv3 = () => {
        verbs(SBO3).then(async (result) => {
            if (result.statusCode == 100) {
                setbo1RES_2("Suggestion: " + result.message);
                setTimeout(() => {
                    setbo1RES_2("");
                }, 3000);
            }
        });
    };
    const VerbCheckEv4 = () => {
        verbs(SBO4).then(async (result) => {
            if (result.statusCode == 100) {
                setbo1RES_3("Suggestion: " + result.message);
                setTimeout(() => {
                    setbo1RES_3("");
                }, 3000);
            }
        });
    };
    const headers = [
        { label: "Intro", key: "newIntro" },
        { label: "BO1", key: "BO1" },
        { label: "Demo1", key: "extra" },
        { label: "BO2", key: "SBO2" },
        { label: "Demo2", key: "extra2" },
        { label: "BO3", key: "SBO3" },
        { label: "Demo3", key: "extra3" },
        { label: "BO4", key: "SBO4" },
        { label: "Demo4", key: "extra4" },
        { label: "Outro", key: "newOutro" },
    ];
    const data = [
        {
            newIntro: newIntro,
            BO1: BO1,
            extra: extra,
            SBO2: SBO2,
            extra2: extra2,
            SBO3: SBO3,
            extra3: extra3,
            SBO4: SBO4,
            extra4: extra4,
            newOutro: newOutro,
        },
    ];

    const csvReport = {
        data: data,
        headers: headers,
        filename: "scriptoria.txt",
    };
    function saveDocumentToFile(doc, fileName) {
        // Create a mime type that will associate the new file with Microsoft Word
        const mimeType =
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
        // Create a Blob object from Packer containing the Document instance and the mimeType
        Packer.toBlob(doc).then((blob) => {
            const docblob = blob.slice(0, blob.size, mimeType);
            // Save the file using saveAs from the file-saver package
            saveAs(docblob, fileName);
        });
    }

    function generateWordDocument(event) {
        // if (newIntro == "" || BO1 == "" || extra == "" || SBO2 == "" || extra2 == "" || newOutro == "") {
        //     // if (extrasss5 == "" || BO1 == "" || extrasss == "" || SBO2 == "" || extrasss2 == "" || extrasss6 == "") {
        //     alert("Please Complete the Script:")
        // } else {
        SaveScripts(
            pName,
            pName2,
            useCase,
            Indursty,
            Protagonist,
            BO1,
            SBO2,
            SBO3,
            SBO4,
            Demo1,
            Demo2,
            Demo3,
            Demo4,
            protagnist2,
            protagnist3,
            protagnist4,
            extra,
            extra2,
            extra3,
            extra4,
            newIntro,
            extrasss5,
            newOutro,
            extrasss,
            extrasss2,
            extrasss3,
            extrasss4,
            extrasss6,
            Lob1
        ).then(async (result) => {
            let name = result.filename.slice(0, -5);
            saveDocumentToFile(doc, name);
        });
        event.preventDefault();

        let doc = new Document({
            sections: [
                {
                    children: [
                        new Paragraph({
                            text: "Spotlight Video Draft",
                            spacing: {
                                after: 200,
                            },
                            heading: HeadingLevel.HEADING_1,
                        }),

                        new Paragraph({
                            text: "Video Name",
                            spacing: {
                                after: 200,
                            },
                            heading: HeadingLevel.HEADING_1,
                        }),
                        new Paragraph({
                            text: VideoName,
                            spacing: {
                                after: 200,
                            },
                        }),

                        new Paragraph({
                            text: "Products Names",
                            spacing: {
                                after: 200,
                            },
                            heading: HeadingLevel.HEADING_1,
                        }),
                        new Paragraph({
                            text: "Product Name Here",
                            spacing: {
                                after: 200,
                            },
                        }),

                        new Paragraph({
                            text: "Industry/Industries",
                            spacing: {
                                after: 200,
                            },
                            heading: HeadingLevel.HEADING_1,
                        }),
                        new Paragraph({
                            text: "Industry/Industries Name Here",
                            spacing: {
                                after: 200,
                            },
                        }),

                        new Paragraph({
                            text: "Line of Business(es)",
                            spacing: {
                                after: 200,
                            },
                            heading: HeadingLevel.HEADING_1,
                        }),
                        new Paragraph({
                            text: "Line of Business(es) Name Here",
                            spacing: {
                                after: 200,
                            },
                        }),

                        new Paragraph({
                            text: "Domain/RBA Process",
                            spacing: {
                                after: 200,
                            },
                            heading: HeadingLevel.HEADING_1,
                        }),
                        new Paragraph({
                            text: "Domain/RBA Process Name Here",
                            spacing: {
                                after: 200,
                            },
                        }),

                        new Paragraph({
                            text: "Summary/Description",
                            spacing: {
                                after: 200,
                            },
                            heading: HeadingLevel.HEADING_1,
                        }),
                        new Paragraph({
                            text: "Summary/Description Name Here",
                            spacing: {
                                after: 200,
                            },
                        }),

                        new Paragraph({
                            text: "Final Script",
                            heading: HeadingLevel.TITLE,
                        }),

                        new Paragraph({
                            text: "Intro",
                            spacing: {
                                after: 200,
                            },
                            heading: HeadingLevel.HEADING_1,
                        }),

                        new Paragraph({
                            text: extrasss5 == "" ? newIntro : extrasss5,
                            spacing: {
                                after: 200,
                            },
                        }),

                        new Paragraph({
                            text: "Business Outcome 1",
                            spacing: {
                                after: 200,
                            },
                            heading: HeadingLevel.HEADING_1,
                        }),
                        new Paragraph({
                            text: BO1,
                            spacing: {
                                after: 200,
                            },
                        }),

                        new Paragraph({
                            text: "Demo 1",
                            spacing: {
                                after: 200,
                            },
                            heading: HeadingLevel.HEADING_1,
                        }),
                        new Paragraph({
                            text: extrasss == "" ? extra : extrasss,
                            spacing: {
                                after: 200,
                            },
                        }),

                        new Paragraph({
                            text: "Business Outcome 2",
                            spacing: {
                                after: 200,
                            },
                            heading: HeadingLevel.HEADING_1,
                        }),
                        new Paragraph({
                            text: SBO2,
                            spacing: {
                                after: 200,
                            },
                        }),

                        new Paragraph({
                            text: "Demo 2",
                            spacing: {
                                after: 200,
                            },
                            heading: HeadingLevel.HEADING_1,
                        }),
                        new Paragraph({
                            text: extrasss2 == "" ? extra2 : extrasss2,
                            spacing: {
                                after: 200,
                            },
                        }),

                        new Paragraph({
                            text: "Business Outcome 3",
                            spacing: {
                                after: 200,
                            },
                            heading: HeadingLevel.HEADING_1,
                        }),
                        new Paragraph({
                            text: SBO3,
                            spacing: {
                                after: 200,
                            },
                        }),

                        new Paragraph({
                            text: "Demo 3",
                            spacing: {
                                after: 200,
                            },
                            heading: HeadingLevel.HEADING_1,
                        }),
                        new Paragraph({
                            text: extrasss3 == "" ? extra3 : extrasss3,
                            spacing: {
                                after: 200,
                            },
                        }),

                        new Paragraph({
                            text: "Business Outcome 4",
                            spacing: {
                                after: 200,
                            },
                            heading: HeadingLevel.HEADING_1,
                        }),

                        new Paragraph({
                            text: SBO4,
                            spacing: {
                                after: 200,
                            },
                        }),

                        new Paragraph({
                            text: "Demo 4",
                            spacing: {
                                after: 200,
                            },
                            heading: HeadingLevel.HEADING_1,
                        }),
                        new Paragraph({
                            text: extrasss4 == "" ? extra4 : extrasss4,
                            spacing: {
                                after: 200,
                            },
                        }),

                        new Paragraph({
                            text: "Outro",
                            spacing: {
                                after: 200,
                            },
                            heading: HeadingLevel.HEADING_1,
                        }),
                        new Paragraph({
                            text: extrasss6 == "" ? newOutro : extrasss6,
                            spacing: {
                                after: 200,
                            },
                        }),
                    ],
                },
            ],
        });
        // }
    }
    function OnlyDownload(event) {
        event.preventDefault();

        let doc = new Document({
            sections: [
                {
                    children: [
                        new Paragraph({
                            text: "Final Script",
                            heading: HeadingLevel.TITLE,
                        }),
                        new Paragraph({
                            text: "Intro",
                            heading: HeadingLevel.HEADING_1,
                        }),
                        new Paragraph({ text: extrasss5 }),

                        new Paragraph({
                            text: "Business Outcome 1",
                            heading: HeadingLevel.HEADING_1,
                        }),
                        new Paragraph({ text: BO1 }),

                        new Paragraph({
                            text: "DEMO 1",
                            heading: HeadingLevel.HEADING_1,
                        }),
                        new Paragraph({ text: extrasss }),

                        new Paragraph({
                            text: "Business Outcome 2",
                            heading: HeadingLevel.HEADING_1,
                        }),
                        new Paragraph({ text: SBO2 }),

                        new Paragraph({
                            text: "DEMO 2",
                            heading: HeadingLevel.HEADING_1,
                        }),
                        new Paragraph({ text: extrasss2 }),

                        new Paragraph({
                            text: "Business Outcome 3",
                            heading: HeadingLevel.HEADING_1,
                        }),
                        new Paragraph({ text: SBO3 }),

                        new Paragraph({
                            text: "DEMO 3",
                            heading: HeadingLevel.HEADING_1,
                        }),
                        new Paragraph({ text: extrasss3 }),

                        new Paragraph({
                            text: "Business Outcome 4",
                            heading: HeadingLevel.HEADING_1,
                        }),
                        new Paragraph({ text: SBO4 }),

                        new Paragraph({
                            text: "DEMO 4",
                            heading: HeadingLevel.HEADING_1,
                        }),
                        new Paragraph({ text: extrasss4 }),

                        new Paragraph({
                            text: "Outro",
                            heading: HeadingLevel.HEADING_1,
                        }),
                        new Paragraph({ text: extrasss6 }),
                    ],
                },
            ],
        });
        saveDocumentToFile(doc, "New Document.docx");
    }
    const [NewDemoFilArrDiv, setNewDemoFilArrDiv] = useState(false);
    const [NewDemoFilArrDivDemo2One, setNewDemoFilArrDivDemo2One] = useState(
        false
    );
    const [NewDemoFilArrDivDemo3One, setNewDemoFilArrDivDemo3One] = useState(
        false
    );
    const [NewDemoFilArrDivDemo4One, setNewDemoFilArrDivDemo4One] = useState(
        false
    );
    const [NewDemoFilArrDivDemo4Two, setNewDemoFilArrDivDemo4Two] = useState(
        false
    );
    const [NewDemoFilArrDivDemo4Three, setNewDemoFilArrDivDemo4Three] = useState(
        false
    );
    const [NewDemoFilArrDivDemo3Two, setNewDemoFilArrDivDemo3Two] = useState(
        false
    );
    const [NewDemoFilArrDivDemo3Three, setNewDemoFilArrDivDemo3Three] = useState(
        false
    );
    const [NewDemoFilArrDivDemo2Two, setNewDemoFilArrDivDemo2Two] = useState(
        false
    );
    const [NewDemoFilArrDivDemo2Three, setNewDemoFilArrDivDemo2Three] = useState(
        false
    );
    const [NewDemoFilArrDivOne, setNewDemoFilArrDivOne] = useState(false);
    const [NewDemoFilArrDivTwo, setNewDemoFilArrDivTwo] = useState(false);
    const [NewDemoFilArr, setNewDemoFilArr] = useState([]);
    const [checkedState, setCheckState] = useState();
    const [CheckStateDemo2, setCheckStateDemo2] = useState();
    const [CheckStateDemo3, setCheckStateDemo3] = useState();
    const [CheckStateDemo4, setCheckStateDemo4] = useState();

    const selectNewDemo = (val) => {
        setDemo1(val);
        setNewDemoFilArrDiv(false);
    };
    const selectNewDemo2One = (val) => {
        setDemo2(val);
        setNewDemoFilArrDivDemo2One(false);
    };
    const selectNewDemo2Two = (val) => {
        setDemo2Two(val);
        setNewDemoFilArrDivDemo2Two(false);
    };
    const selectNewDemo2Three = (val) => {
        setDemo2Three(val);
        setNewDemoFilArrDivDemo2Three(false);
    };
    const selectNewDemo3One = (val) => {
        setDemo3(val);
        setNewDemoFilArrDivDemo3One(false);
    };
    const selectNewDemo3Two = (val) => {
        setDemo3Two(val);
        setNewDemoFilArrDivDemo3Two(false);
    };
    const selectNewDemo3Three = (val) => {
        setDemo3Three(val);
        setNewDemoFilArrDivDemo3Three(false);
    };
    const selectNewDemo4One = (val) => {
        setDemo4(val);
        setNewDemoFilArrDivDemo4One(false);
    };
    const selectNewDemo4Two = (val) => {
        setDemo4Two(val);
        setNewDemoFilArrDivDemo4Two(false);
    };
    const selectNewDemo4Three = (val) => {
        setDemo4Three(val);
        setNewDemoFilArrDivDemo4Three(false);
    };
    const selectNewDemoOne = (val) => {
        setDemo1Two(val);
        setNewDemoFilArrDivOne(false);
    };
    const selectNewDemoThree = (val) => {
        setDemo1Three(val);
        setNewDemoFilArrDivTwo(false);
    };
    const onChangeNewDemo1 = (e) => {
        if (checkedState == true) {
            setNewDemoFilArrDiv(true);
        }
        let val = e.target.value;
        setDemo1(val);
        setNewDemoFilArr([
            ...demoKeyPointOne.filter((e) => {
                if (e.name.toLowerCase().includes(val.toLowerCase())) {
                    return e;
                }
            }),
        ]);
        setDraftStatedata({
            ...draftStateData,
            screen1_highlight: e.target.value,
        });
    };
    const onChangeNewDemo2 = (e) => {
        if (CheckStateDemo2 == true) {
            setNewDemoFilArrDivDemo2One(true);
        }
        let val = e.target.value;
        setDemo2(val);
        setNewDemoFilArr([
            ...demoKeyPointOne.filter((e) => {
                if (e.name.toLowerCase().includes(val.toLowerCase())) {
                    return e;
                }
            }),
        ]);
    };
    const onChangeNewDemo2Two = (e) => {
        if (CheckStateDemo2 == true) {
            setNewDemoFilArrDivDemo2Two(true);
        }
        let val = e.target.value;
        setDemo2Two(val);
        setNewDemoFilArr([
            ...demoKeyPointOne.filter((e) => {
                if (e.name.toLowerCase().includes(val.toLowerCase())) {
                    return e;
                }
            }),
        ]);
    };
    const onChangeNewDemo2Three = (e) => {
        if (CheckStateDemo2 == true) {
            setNewDemoFilArrDivDemo2Three(true);
        }
        let val = e.target.value;
        setDemo2Three(val);
        setNewDemoFilArr([
            ...demoKeyPointOne.filter((e) => {
                if (e.name.toLowerCase().includes(val.toLowerCase())) {
                    return e;
                }
            }),
        ]);
    };
    const onChangeNewDemo3 = (e) => {
        if (CheckStateDemo3 == true) {
            setNewDemoFilArrDivDemo3One(true);
        }
        let val = e.target.value;
        setDemo3(val);
        setNewDemoFilArr([
            ...demoKeyPointOne.filter((e) => {
                if (e.name.toLowerCase().includes(val.toLowerCase())) {
                    return e;
                }
            }),
        ]);
    };
    const onChangeNewDemo3Two = (e) => {
        if (CheckStateDemo3 == true) {
            setNewDemoFilArrDivDemo3Two(true);
        }
        let val = e.target.value;
        setDemo3Two(val);
        setNewDemoFilArr([
            ...demoKeyPointOne.filter((e) => {
                if (e.name.toLowerCase().includes(val.toLowerCase())) {
                    return e;
                }
            }),
        ]);
    };
    const onChangeNewDemo3Three = (e) => {
        if (CheckStateDemo3 == true) {
            setNewDemoFilArrDivDemo3Three(true);
        }
        let val = e.target.value;
        setDemo3Three(val);
        setNewDemoFilArr([
            ...demoKeyPointOne.filter((e) => {
                if (e.name.toLowerCase().includes(val.toLowerCase())) {
                    return e;
                }
            }),
        ]);
    };
    const onChangeNewDemo4 = (e) => {
        if (CheckStateDemo4 == true) {
            setNewDemoFilArrDivDemo4One(true);
        }
        let val = e.target.value;
        setDemo4(val);
        setNewDemoFilArr([
            ...demoKeyPointOne.filter((e) => {
                if (e.name.toLowerCase().includes(val.toLowerCase())) {
                    return e;
                }
            }),
        ]);
    };
    const onChangeNewDemo4Two = (e) => {
        if (CheckStateDemo4 == true) {
            setNewDemoFilArrDivDemo4Two(true);
        }
        let val = e.target.value;
        setDemo4Two(val);
        setNewDemoFilArr([
            ...demoKeyPointOne.filter((e) => {
                if (e.name.toLowerCase().includes(val.toLowerCase())) {
                    return e;
                }
            }),
        ]);
    };
    const onChangeNewDemo4Three = (e) => {
        if (CheckStateDemo4 == true) {
            setNewDemoFilArrDivDemo4Three(true);
        }
        let val = e.target.value;
        setDemo4Three(val);
        setNewDemoFilArr([
            ...demoKeyPointOne.filter((e) => {
                if (e.name.toLowerCase().includes(val.toLowerCase())) {
                    return e;
                }
            }),
        ]);
    };
    const onChangeNewDemo1Two = (e) => {
        if (checkedState == true) {
            setNewDemoFilArrDivOne(true);
        }
        let val = e.target.value;
        setDemo1Two(val);
        setNewDemoFilArr([
            ...demoKeyPointOne.filter((e) => {
                if (e.name.toLowerCase().includes(val.toLowerCase())) {
                    return e;
                }
            }),
        ]);
        setDraftStatedata({
            ...draftStateData,
            screen2_highlight: e.target.value,
        });
    };
    const onChangeNewDemo1Three = (e) => {
        if (checkedState == true) {
            setNewDemoFilArrDivTwo(true);
        }
        let val = e.target.value;
        setDemo1Three(val);
        setNewDemoFilArr([
            ...demoKeyPointOne.filter((e) => {
                if (e.name.toLowerCase().includes(val.toLowerCase())) {
                    return e;
                }
            }),
        ]);
        setDraftStatedata({
            ...draftStateData,
            screen3_highlight: e.target.value,
        });
    };
    const onFoucusOut2 = () => {
        setTimeout(() => {
            setNewDemoFilArrDiv(false);
        }, 200);
    };
    const onFoucusOutDemo2One = () => {
        setTimeout(() => {
            setNewDemoFilArrDivDemo2One(false);
        }, 200);
    };
    const onFoucusOutDemo2Two = () => {
        setTimeout(() => {
            setNewDemoFilArrDivDemo2Two(false);
        }, 200);
    };
    const onFoucusOutDemo2Three = () => {
        setTimeout(() => {
            setNewDemoFilArrDivDemo2Three(false);
        }, 200);
    };
    const onFoucusOutDemo3One = () => {
        setTimeout(() => {
            setNewDemoFilArrDivDemo3One(false);
        }, 200);
    };
    const onFoucusOutDemo4One = () => {
        setTimeout(() => {
            setNewDemoFilArrDivDemo4One(false);
        }, 200);
    };
    const onFoucusOutDemo4Two = () => {
        setTimeout(() => {
            setNewDemoFilArrDivDemo4Two(false);
        }, 200);
    };
    const onFoucusOutDemo4Three = () => {
        setTimeout(() => {
            setNewDemoFilArrDivDemo4Three(false);
        }, 200);
    };
    const onFoucusOutDemo3Two = () => {
        setTimeout(() => {
            setNewDemoFilArrDivDemo3Two(false);
        }, 200);
    };
    const onFoucusOutDemo3Three = () => {
        setTimeout(() => {
            setNewDemoFilArrDivDemo3Three(false);
        }, 200);
    };
    const toggleBtn = (e) => {
        setCheckState(e.target.checked);
        if (e.target.checked == true) {
            onEnterDemo1();
        }
        if (e.target.checked == false) {
            setNewDemoFilArrDiv(false);
            setNewDemoFilArrDivOne(false);
            setNewDemoFilArrDivTwo(false);
        }
    };
    const toggleBtn2 = (e) => {
        setCheckStateDemo2(e.target.checked);
        if (e.target.checked == true) {
            onEnterDemo2();
        }
        if (e.target.checked == false) {
            setNewDemoFilArrDivDemo2One(false);
            setNewDemoFilArrDivOne(false);
            setNewDemoFilArrDivTwo(false);
        }
    };
    const toggleBtn3 = (e) => {
        setCheckStateDemo3(e.target.checked);
        if (e.target.checked == true) {
            onEnterDemo3();
        }
        if (e.target.checked == false) {
            setNewDemoFilArrDivDemo3One(false);
            setNewDemoFilArrDivOne(false);
            setNewDemoFilArrDivTwo(false);
        }
    };
    const toggleBtn4 = (e) => {
        setCheckStateDemo4(e.target.checked);
        if (e.target.checked == true) {
            onEnterDemo4();
        }
        if (e.target.checked == false) {
            setNewDemoFilArrDivDemo4One(false);
            setNewDemoFilArrDivOne(false);
            setNewDemoFilArrDivTwo(false);
        }
    };
    const onFoucusOut3 = () => {
        setTimeout(() => {
            setNewDemoFilArrDivOne(false);
        }, 200);
    };
    const onFoucusOut4 = () => {
        setTimeout(() => {
            setNewDemoFilArrDivTwo(false);
        }, 200);
    };

    const ShowProductTwo = () => {
        setShowProductNext(true);
    };

    const onImgClick = () => {
        // alert("Coming Soon");
        setmodal14(true);
        setModalMsg14("Coming Soon");
    };

    const onBackClick = () => {
        history.goBack();
        // CallingSaveDraftAPI();
    };

    const videoNameTooltip =
        "This is the final name of the video It should contain the Solution name, or if it is covering multiple solution you may name if Source to Pay in Retail.";
    const productNameTooltip =
        "Add all the solutions covered in the video and their product page from sap.com. This will improve the messaging and make me (Tori) a lot smarter.";
    const industryTooltip = "Add an industry, if applicable.";
    const lineOfBusinessTooltip =
        "Add the lines of businesses that are covered in the video.";
    const domainTooltip =
        "Please select the Reference Business Architecture Process that is covered in your video. This is another one that is making me (Tori) smarter.";
    const summaryTooltip =
        "This will end up being the description of the video once published, it also helps guide Tori on key thoughts and the ideal end state of the video. Do not worry, it doesn’t have to be perfect, copywriting will refine it as needed.";
    const businessOutcomsTooltip =
        "What is the value that the customer/company or end user will gain from the solution?";
    const roleTooltip =
        "In our videos, we give context to the demo by identifying the role of the person that does the task.  For example, As a Customer Service Representative, you…";
    const demoTooltip =
        "This should be the steps/topics that you cover in the short demo to back up the business outcome - prove it here..";
    let inDustryDefaultVal = [
        Indursty != null ? { value: "0", label: Indursty && Indursty } : null,
    ];
    let DomainDefaultVal = [
        Domain != null ? { value: "0", label: Domain && Domain } : null,
    ];

    return (
        <section>
            <section>
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        zIndex: 999,
                        width: "100%",
                        backgroundColor: "#F7FAFC",
                        marginLeft: "-85px",
                    }}
                >
                    <div
                        className="row m-0 pt-3 pb-2"
                        style={{ boxShadow: "0px 11px 10px -15px #111" }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                            className="col-10"
                        >
                            <div style={{ marginLeft: 25, display: "flex" }}>
                                <img
                                    onClick={onBackClick}
                                    style={{ cursor: "pointer" }}
                                    src={logo}
                                />
                                <p
                                    className="pt-3 pl-2"
                                    style={{
                                        fontSize: "22px",
                                        fontWeight: "bold",
                                        marginLeft: 12,
                                    }}
                                >
                                    New Draft - Spotlight Video
                                </p>
                            </div>
                            {isAutoSaved && (
                                <>
                                    {isSaved ? (
                                        <div
                                            style={{ display: "inline-block", marginLeft: "10px" }}
                                        >
                                            Saved
                                        </div>
                                    ) : (
                                        <div
                                            style={{ display: "inline-block", marginLeft: "10px" }}
                                        >
                                            Autosaving...
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                        <div className="col-2 mt-2" style={{ display: "flex" }}>
                            <WorldFile />
                            <button
                                style={{ height: 34 }}
                                className="btn cuss_btn"
                                onClick={onBackClick}
                            >
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {isLoading ? (
                <div
                    style={{
                        height: "100%",
                        position: "fixed",
                        left: "50%",
                        top: "45%",
                        textAlign: "center",
                    }}
                >
                    <img width={70} height={70} src={LoadingSpinner} />
                </div>
            ) : (
                <div>
                    <section>
                        <div className="row m-0">
                            <div className="col-6" style={{ backgroundColor: "#FFF" }}>
                                <div
                                    style={{
                                        paddingTop: 25,
                                        paddingBottom: 10,
                                        paddingLeft: 70,
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: 22,
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Spotlight Video
                                    </span>
                                </div>
                            </div>
                            <div className="col-6"></div>
                        </div>
                        {/* <div className="row m-0 pt-5">
                    <div className="col-1"></div>
                    <div className="col-4">
                        <p className="animation_text">Start New Draft</p>
                    </div>
                    <div className="col-7"></div>
                </div> */}
                    </section>
                    <section>
                        <div className="row m-0">
                            <div className="col-6" style={{ backgroundColor: "#fff" }}>
                                <div className="row top_pad">
                                    <div className="col-1"></div>
                                    <div className="col-10">
                                        <div style={{ display: "flex" }}>
                                            <span className="pName">Video Name</span>
                                            <Tooltip
                                                arrow
                                                placement="right"
                                                title={
                                                    <Typography fontSize={14}>
                                                        {videoNameTooltip}
                                                    </Typography>
                                                }
                                            >
                                                <img
                                                    style={{
                                                        marginLeft: 5,
                                                        width: 20,
                                                    }}
                                                    src={info}
                                                />
                                            </Tooltip>
                                        </div>
                                        <div className="top_input">
                                            <input
                                                disabled={draftStateData && !draftStateData.video_name_edit_permission}
                                                onBlur={CallingSaveDraftAPI}
                                                value={VideoName}
                                                onChange={onChangeVideoName}
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderRadius: "4px",
                                                }}
                                                className="InputFields"
                                                placeholder="Enter video name here"
                                                type="text"
                                            />
                                            {VideoName == "" && (
                                                <span style={{ color: "red" }}>
                                                    {errMessageCreateDraft && errMessageCreateDraft}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                                <div className="row top_pad">
                                    <div className="col-1"></div>
                                    <div className="col-10">
                                        <div className="row">
                                            <div className="col-6 p-0">
                                                <div style={{ display: "flex" }}>
                                                    <span className="pName">Product Name</span>
                                                    <Tooltip
                                                        arrow
                                                        placement="right"
                                                        title={
                                                            <Typography fontSize={14}>
                                                                {productNameTooltip}
                                                            </Typography>
                                                        }
                                                    >
                                                        <img
                                                            style={{
                                                                marginLeft: 5,
                                                                width: 20,
                                                            }}
                                                            src={info}
                                                        />
                                                    </Tooltip>
                                                </div>
                                            </div>
                                            <div className="col-6"></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-8 p-0">
                                                <div className="top_input">
                                                    <input
                                                        style={{
                                                            border: "1px solid #ccc",
                                                            borderRadius: "4px",
                                                        }}
                                                        onFocus={onFocusProductName}
                                                        onBlur={onFoucusOut}
                                                        disabled={disabledInputs}
                                                        onChange={onChangePname}
                                                        className="InputFields"
                                                        placeholder="Select 1st Product Name"
                                                        type="text"
                                                        value={pName}
                                                    />
                                                    {pName == "" && (
                                                        <span
                                                            style={{
                                                                color: "red",
                                                            }}
                                                        >
                                                            {errMessageCreateDraft && errMessageCreateDraft}
                                                        </span>
                                                    )}
                                                    {searchBox && (
                                                        <div
                                                            style={{
                                                                border: "1px solid #ccc",
                                                                padding: 20,
                                                                maxHeight: 380,
                                                                overflow: "auto",
                                                                marginTop: "1px",
                                                                borderRadius: "4px",
                                                            }}
                                                        >
                                                            {dummyArr &&
                                                                dummyArr.map((row) => (
                                                                    <div>
                                                                        <p
                                                                            style={{
                                                                                fontSize: 16,
                                                                                fontWeight: "bold",
                                                                            }}
                                                                        >
                                                                            {row.text}
                                                                        </p>
                                                                        {
                                                                            <div>
                                                                                {row.nodes &&
                                                                                    row.nodes.map((i) => (
                                                                                        <div>
                                                                                            {
                                                                                                <p
                                                                                                    onClick={
                                                                                                        i.isSelected
                                                                                                            ? () =>
                                                                                                                selectTextPN(i.text)
                                                                                                            : ""
                                                                                                    }
                                                                                                    className={
                                                                                                        i.isSelected
                                                                                                            ? "selected_text2"
                                                                                                            : "selected_text"
                                                                                                    }
                                                                                                >
                                                                                                    {i.text}
                                                                                                </p>
                                                                                            }
                                                                                            {i.nodes &&
                                                                                                i.nodes.map((e) => (
                                                                                                    <div>
                                                                                                        <p
                                                                                                            onClick={
                                                                                                                e.isSelected
                                                                                                                    ? () =>
                                                                                                                        selectTextPN(
                                                                                                                            e.text
                                                                                                                        )
                                                                                                                    : ""
                                                                                                            }
                                                                                                            className={
                                                                                                                e.isSelected
                                                                                                                    ? "selected_text4"
                                                                                                                    : "selected_text3"
                                                                                                            }
                                                                                                        >
                                                                                                            {e.text}
                                                                                                        </p>

                                                                                                        {e.nodes &&
                                                                                                            e?.nodes.map((j) => (
                                                                                                                <div>
                                                                                                                    <p
                                                                                                                        onClick={
                                                                                                                            j.isSelected
                                                                                                                                ? () =>
                                                                                                                                    selectTextPN(
                                                                                                                                        j.text
                                                                                                                                    )
                                                                                                                                : ""
                                                                                                                        }
                                                                                                                        className={
                                                                                                                            j.isSelected
                                                                                                                                ? "selected_text6"
                                                                                                                                : "selected_text5"
                                                                                                                        }
                                                                                                                    >
                                                                                                                        {j.text}
                                                                                                                    </p>
                                                                                                                    {j.nodes &&
                                                                                                                        j.nodes.map((l) => (
                                                                                                                            <p
                                                                                                                                onClick={() =>
                                                                                                                                    selectTextPN(
                                                                                                                                        l.text
                                                                                                                                    )
                                                                                                                                }
                                                                                                                                style={{
                                                                                                                                    paddingLeft: 100,
                                                                                                                                    cursor:
                                                                                                                                        "pointer",
                                                                                                                                }}
                                                                                                                            >
                                                                                                                                {l.text}
                                                                                                                            </p>
                                                                                                                        ))}
                                                                                                                </div>
                                                                                                            ))}
                                                                                                    </div>
                                                                                                ))}
                                                                                        </div>
                                                                                    ))}
                                                                            </div>
                                                                        }
                                                                    </div>
                                                                ))}
                                                        </div>
                                                    )}

                                                    {ShowProductNext && (
                                                        <div>
                                                            <input
                                                                style={{
                                                                    border: "1px solid #ccc",
                                                                    borderRadius: "4px",
                                                                }}
                                                                onFocus={onFocusProductName2}
                                                                onBlur={onFoucusOutP2}
                                                                disabled={disabledInputs}
                                                                onChange={onChangePname2}
                                                                className="InputFields mt-5"
                                                                placeholder="Select 2nd Product Name"
                                                                type="text"
                                                                value={pName2}
                                                            />
                                                            {searchBox2 && (
                                                                <div
                                                                    style={{
                                                                        border: "1px solid #ccc",
                                                                        padding: 20,
                                                                        maxHeight: 380,
                                                                        overflow: "auto",
                                                                        marginTop: "1px",
                                                                        borderRadius: "4px",
                                                                    }}
                                                                >
                                                                    {dummyArr &&
                                                                        dummyArr.map((row) => (
                                                                            <div>
                                                                                <p
                                                                                    style={{
                                                                                        fontSize: 16,
                                                                                        fontWeight: "bold",
                                                                                    }}
                                                                                >
                                                                                    {row.text}
                                                                                </p>
                                                                                {
                                                                                    <div>
                                                                                        {row.nodes &&
                                                                                            row.nodes.map((i) => (
                                                                                                <div>
                                                                                                    {
                                                                                                        <p
                                                                                                            onClick={
                                                                                                                i.isSelected
                                                                                                                    ? () =>
                                                                                                                        selectTextPN2(
                                                                                                                            i.text
                                                                                                                        )
                                                                                                                    : ""
                                                                                                            }
                                                                                                            className={
                                                                                                                i.isSelected
                                                                                                                    ? "selected_text2"
                                                                                                                    : "selected_text"
                                                                                                            }
                                                                                                        >
                                                                                                            {i.text}
                                                                                                        </p>
                                                                                                    }
                                                                                                    {i.nodes &&
                                                                                                        i.nodes.map((e) => (
                                                                                                            <div>
                                                                                                                <p
                                                                                                                    onClick={
                                                                                                                        e.isSelected
                                                                                                                            ? () =>
                                                                                                                                selectTextPN2(
                                                                                                                                    e.text
                                                                                                                                )
                                                                                                                            : ""
                                                                                                                    }
                                                                                                                    className={
                                                                                                                        e.isSelected
                                                                                                                            ? "selected_text4"
                                                                                                                            : "selected_text3"
                                                                                                                    }
                                                                                                                >
                                                                                                                    {e.text}
                                                                                                                </p>

                                                                                                                {e.nodes &&
                                                                                                                    e?.nodes.map((j) => (
                                                                                                                        <div>
                                                                                                                            <p
                                                                                                                                onClick={
                                                                                                                                    j.isSelected
                                                                                                                                        ? () =>
                                                                                                                                            selectTextPN2(
                                                                                                                                                j.text
                                                                                                                                            )
                                                                                                                                        : ""
                                                                                                                                }
                                                                                                                                className={
                                                                                                                                    j.isSelected
                                                                                                                                        ? "selected_text6"
                                                                                                                                        : "selected_text5"
                                                                                                                                }
                                                                                                                            >
                                                                                                                                {j.text}
                                                                                                                            </p>
                                                                                                                            {j.nodes &&
                                                                                                                                j.nodes.map(
                                                                                                                                    (l) => (
                                                                                                                                        <p
                                                                                                                                            onClick={() =>
                                                                                                                                                selectTextPN2(
                                                                                                                                                    l.text
                                                                                                                                                )
                                                                                                                                            }
                                                                                                                                            style={{
                                                                                                                                                paddingLeft: 100,
                                                                                                                                                cursor:
                                                                                                                                                    "pointer",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            {l.text}
                                                                                                                                        </p>
                                                                                                                                    )
                                                                                                                                )}
                                                                                                                        </div>
                                                                                                                    ))}
                                                                                                            </div>
                                                                                                        ))}
                                                                                                </div>
                                                                                            ))}
                                                                                    </div>
                                                                                }
                                                                            </div>
                                                                        ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-4 d-flex">
                                                <div className="top_input" style={{ marginLeft: 0 }}>
                                                    <input
                                                        onBlur={CallingSaveDraftAPI}
                                                        style={{
                                                            border: "1px solid #ccc",
                                                            borderRadius: "4px",
                                                        }}
                                                        className="InputFields "
                                                        placeholder="1st Product URL"
                                                        type="text"
                                                        onChange={onChangeFirstProductUrl}
                                                        value={firstProductUrl}
                                                    />
                                                    {ShowProductNext && (
                                                        <input
                                                            onBlur={CallingSaveDraftAPI}
                                                            style={{
                                                                border: "1px solid #ccc",
                                                                borderRadius: "4px",
                                                            }}
                                                            className="InputFields mt-5"
                                                            placeholder="2nd Product URL"
                                                            type="text"
                                                            onChange={onChangeSecondProductUrl}
                                                            value={SecondProductUrl}
                                                        />
                                                    )}
                                                </div>
                                                <div style={{ marginLeft: 5 }} onClick={ShowProductTwo}>
                                                    <img
                                                        src={plus}
                                                        style={{
                                                            cursor: "pointer",
                                                            width: "25px",
                                                            marginTop: 8,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row top_pad">
                                    <div className="col-1"></div>
                                    <div className="col-10">
                                        <div className="row">
                                            <div className="col-6 p-0">
                                                <div style={{ display: "flex" }}>
                                                    <span className="pName">Industry</span>
                                                    <Tooltip
                                                        arrow
                                                        placement="right"
                                                        title={
                                                            <Typography fontSize={14}>
                                                                {industryTooltip}
                                                            </Typography>
                                                        }
                                                    >
                                                        <img
                                                            style={{
                                                                marginLeft: 5,
                                                                width: 20,
                                                            }}
                                                            src={info}
                                                        />
                                                    </Tooltip>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <span className="pName">Line of Business</span>
                                                <Tooltip
                                                    arrow
                                                    placement="right"
                                                    title={
                                                        <Typography fontSize={14}>
                                                            {lineOfBusinessTooltip}
                                                        </Typography>
                                                    }
                                                >
                                                    <img
                                                        style={{
                                                            marginLeft: 5,
                                                            marginTop: -6,
                                                            width: 20,
                                                        }}
                                                        src={info}
                                                    />
                                                </Tooltip>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6 p-0">
                                                <div className="top_input">
                                                    {/* <Multiselect
                                                        disable={disabledInputs}
                                                        options={listOfInd} // Options to display in the dropdown
                                                        className=""
                                                        style={{
                                                            width: "90%",
                                                            padding: "8px",
                                                            padding: 30,
                                                            backgroundColor:
                                                                "#000",
                                                        }}
                                                        selectedValues={
                                                            selectedIndustryList
                                                        } // Preselected value to persist in dropdown
                                                        onSelect={onselectInd} // Function will trigger on select event
                                                        onRemove={onRemoveI} // Function will trigger on remove event
                                                        displayValue="name" // Property name to display in the dropdown options
                                                        groupBy="heads"
                                                        placeholder="Select or begin typing"
                                                        selectionLimit={1}
                                                        onBlur={
                                                            CallingSaveDraftAPI
                                                        }
                                                        closeOnSelect={true}
                                                    /> */}
                                                    <Select
                                                        styles={customStylesSelect}
                                                        onBlur={CallingSaveDraftAPI}
                                                        onChange={onselectInd}
                                                        placeholder="Select or begin typing"
                                                        defaultValue={inDustryDefaultVal}
                                                        options={groupedOptionsInd}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="top_input" style={{ marginLeft: 0 }}>
                                                    <Select
                                                        onBlur={CallingSaveDraftAPI}
                                                        onChange={onselectLOB}
                                                        options={listOfBo}
                                                        isMulti
                                                        placeholder="Select or begin typing"
                                                        defaultValue={valueLO}
                                                        isOptionDisabled={() => Lob1.length >= 3}
                                                    />
                                                    {/* <Multiselect
                                                        disable={disabledInputs}
                                                        options={listOfBo} // Options to display in the dropdown
                                                        className=""
                                                        style={{
                                                            width: "90%",
                                                            padding: "8px",
                                                        }}
                                                        placeholder="Select or begin typing"
                                                        selectedValues={
                                                            LineOfBUsiness
                                                        } // Preselected value to persist in dropdown
                                                        onSelect={onselect} // Function will trigger on select event
                                                        onRemove={onRemoveL} // Function will trigger on remove event
                                                        displayValue="name" // Property name to display in the dropdown options
                                                        selectionLimit={3}
                                                    /> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-1"></div>
                                </div>

                                {/* <div className="row top_pad">
                                        <div className="col-1"></div>
                                        <div className="col-10">
                                            <div style={{ display: "flex" }}>
                                                
                                                <span className="pName">Line of Business</span>
                                            </div>
                                            <div className="top_input">
                                                <Multiselect disable={disabledInputs}
                                                    options={listOfBo} // Options to display in the dropdown
                                                    className=""
                                                    style={{ width: "90%", padding: "8px" }}
                                                    // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                                    onSelect={onselect} // Function will trigger on select event
                                                    onRemove={onRemove} // Function will trigger on remove event
                                                    displayValue="name" // Property name to display in the dropdown options
                                                />
                                            </div>
                                        </div>
                                        <div className="col-1"></div>
                                    </div> */}
                                <div className="row top_pad">
                                    <div className="col-1"></div>
                                    <div className="col-10">
                                        <div style={{ display: "flex" }}>
                                            <span className="pName">Domain/RBA Process</span>
                                            <Tooltip
                                                arrow
                                                placement="right"
                                                title={
                                                    <Typography fontSize={14}>{domainTooltip}</Typography>
                                                }
                                            >
                                                <img
                                                    style={{
                                                        marginLeft: 5,
                                                        width: 20,
                                                    }}
                                                    src={info}
                                                />
                                            </Tooltip>
                                        </div>
                                        <div className="top_input">
                                            <Select
                                                onBlur={CallingSaveDraftAPI}
                                                onChange={onselectDomain}
                                                options={groupedOptionsDomain}
                                                placeholder="Select or begin typing"
                                                defaultValue={DomainDefaultVal}
                                            />
                                            {/* <Multiselect
                                                disable={disabledInputs}
                                                options={listOfDomain} // Options to display in the dropdown
                                                className=""
                                                style={{
                                                    width: "90%",
                                                    padding: "8px",
                                                }}
                                                placeholder="Select or begin typing"
                                                selectedValues={
                                                    ListOfDomainSelected
                                                } // Preselected value to persist in dropdown
                                                // onSelect={onselect} // Function will trigger on select event
                                                onRemove={onRemove} // Function will trigger on remove event
                                                displayValue="name" // Property name to display in the dropdown options
                                                groupBy="head"
                                            /> */}
                                        </div>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                                <div className="row top_pad">
                                    <div className="col-1"></div>
                                    <div className="col-10">
                                        <div style={{ display: "flex" }}>
                                            <span className="pName">Summary/Description</span>
                                            <Tooltip
                                                arrow
                                                placement="right"
                                                title={
                                                    <Typography fontSize={14}>
                                                        {summaryTooltip}
                                                    </Typography>
                                                }
                                            >
                                                <img
                                                    style={{
                                                        marginLeft: 5,
                                                        width: 20,
                                                    }}
                                                    src={info}
                                                />
                                            </Tooltip>
                                        </div>
                                        <div className="top_input">
                                            <textarea
                                                row="4"
                                                onBlur={CallingSaveDraftAPI}
                                                value={useCase}
                                                disabled={disabledInputs}
                                                onChange={onChangeUseCase}
                                                className="InputFields"
                                                placeholder="Write 2-3 sentences"
                                                type="text"
                                            />
                                            {useCase == "" && (
                                                <span style={{ color: "red" }}>
                                                    {errMessageCreateDraft && errMessageCreateDraft}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                                <hr className="mt-5" />

                                {
                                    <div>
                                        <div className="row top_pad">
                                            <div className="col-1"></div>
                                            <div className="col-10">
                                                <div style={{ display: "flex" }}>
                                                    <span className="pName">Business Outcome 1</span>
                                                    <Tooltip
                                                        arrow
                                                        placement="right"
                                                        title={
                                                            <Typography fontSize={14}>
                                                                {businessOutcomsTooltip}
                                                            </Typography>
                                                        }
                                                    >
                                                        <img
                                                            style={{
                                                                marginLeft: 5,
                                                                width: 20,
                                                            }}
                                                            src={info}
                                                        />
                                                    </Tooltip>
                                                </div>
                                                <div className="top_input">
                                                    <input
                                                        required={true}
                                                        value={BO1}
                                                        // value={draftStateData && draftStateData.business_outcomes}
                                                        onBlur={VerbCheckEv1 && CallingSaveDraftAPI}
                                                        disabled={disabledInputsOnNext}
                                                        onChange={onChangeBO1}
                                                        className="InputFields"
                                                        placeholder="e.g. Create successful projects"
                                                        type="text"
                                                    />
                                                    {bo1Er && (
                                                        <div style={{ color: "red" }}>
                                                            This field is required
                                                        </div>
                                                    )}

                                                    {bo1RES && (
                                                        <p
                                                            id="checkD"
                                                            style={{
                                                                color: "#0070D1",
                                                                fontSize: "14px",
                                                            }}
                                                        >
                                                            {bo1RES}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-1"></div>
                                        </div>
                                        <div className="row top_pad">
                                            <div className="col-1"></div>
                                            <div className="col-10">
                                                <div style={{ display: "flex" }}>
                                                    <span className="pName">Role 1</span>
                                                    <Tooltip
                                                        arrow
                                                        placement="right"
                                                        title={
                                                            <Typography fontSize={14}>
                                                                {roleTooltip}
                                                            </Typography>
                                                        }
                                                    >
                                                        <img
                                                            style={{
                                                                marginLeft: 5,
                                                                width: 20,
                                                            }}
                                                            src={info}
                                                        />
                                                    </Tooltip>
                                                </div>
                                                <div className="top_input">
                                                    <input
                                                        onBlur={CallingSaveDraftAPI}
                                                        value={Protagonist}
                                                        disabled={disabledInputsOnNext}
                                                        onChange={onChangeProtagonist}
                                                        className="InputFields"
                                                        placeholder="e.g. Project Planner"
                                                        type="text"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-1"></div>
                                        </div>
                                        <div className="row top_pad">
                                            <div className="col-1"></div>
                                            <div className="col-10">
                                                {demoKeyPointLoader && (
                                                    <div
                                                        class="d-flex justify-content-center"
                                                        style={{
                                                            paddingTop: 94,
                                                            position: "absolute",
                                                            left: "21%",
                                                        }}
                                                    >
                                                        <div class="spinner-border" role="status">
                                                            <span class="sr-only">Loading...</span>
                                                        </div>
                                                    </div>
                                                )}
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                        }}
                                                    >
                                                        <div>
                                                            <span className="pName">Demo 1</span>
                                                            <Tooltip
                                                                arrow
                                                                placement="right"
                                                                title={
                                                                    <Typography fontSize={14}>
                                                                        {demoTooltip}
                                                                    </Typography>
                                                                }
                                                            >
                                                                <img
                                                                    style={{
                                                                        marginLeft: 5,
                                                                        marginTop: -8,
                                                                        width: 20,
                                                                    }}
                                                                    src={info}
                                                                />
                                                            </Tooltip>
                                                        </div>
                                                    </div>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                        }}
                                                    >
                                                        <p
                                                            className="pt-2"
                                                            style={{
                                                                fontWeight: "bold",
                                                                fontSize: "18px",
                                                            }}
                                                        >
                                                            Demo Key Point Suggestions{" "}
                                                        </p>
                                                        <div
                                                            style={{
                                                                marginLeft: 10,
                                                            }}
                                                        >
                                                            <label class="switch">
                                                                <input type="checkbox" onChange={toggleBtn} />
                                                                <span class="slider round"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="top_input"
                                                    style={{
                                                        width: "100%",
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <div style={{ width: "80%" }}>
                                                        <textarea
                                                            rows="3"
                                                            onBlur={onFoucusOut2 || CallingSaveDraftAPI}
                                                            disabled={disabledInputsOnNext || disAbleDemoKey}
                                                            onChange={onChangeNewDemo1}
                                                            placeholder="Add 3 bullets or 2 sentences"
                                                            type="text"
                                                            className="InputFields"
                                                            value={Demo1}
                                                        />
                                                    </div>
                                                    <div>
                                                        <button
                                                            onClick={onImgClick}
                                                            style={{
                                                                marginLeft: 20,
                                                                height: 40,
                                                                width: 80,
                                                                color: "#75BE43",
                                                                borderRadius: 8,
                                                                background: "white",
                                                                Padding: "6px, 16px, 6px, 16px",
                                                                border: "1px solid #75BE43",
                                                                display: "flex",
                                                                alignItems: "center",
                                                            }}
                                                        >
                                                            <img
                                                                style={{
                                                                    marginRight: "4px",
                                                                }}
                                                                height={20}
                                                                width={20}
                                                                src={BtnPlus}
                                                            />
                                                            media
                                                        </button>
                                                    </div>
                                                    {NewDemoFilArrDiv && (
                                                        <div
                                                            style={{
                                                                border: "1px solid #ccc",
                                                                padding: 20,
                                                                maxHeight: 180,
                                                                overflow: "auto",
                                                                marginTop: "1px",
                                                                borderRadius: "4px",
                                                            }}
                                                        >
                                                            {NewDemoFilArr.slice(0, 8).map((e) => (
                                                                <div>
                                                                    <div
                                                                        onClick={() => selectNewDemo(e.name)}
                                                                        style={{
                                                                            paddingTop: 10,
                                                                            cursor: "pointer",
                                                                        }}
                                                                    >
                                                                        {e.name}
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                                {/* <div className="top_input">
                                                <input
                                                    onBlur={onFoucusOut3}
                                                    disabled={disabledInputsOnNext || disAbleDemoKey}
                                                    onChange={onChangeNewDemo1Two}
                                                    className="InputFields"
                                                    placeholder="Screen 2 highlight"
                                                    type="text"
                                                    value={Demo1Two}
                                                />
                                                {
                                                    NewDemoFilArrDivOne &&
                                                    <div style={{ border: "1px solid #ccc", padding: 20, maxHeight: 180, overflow: "auto", marginTop: "1px", borderRadius: "4px" }}>
                                                        {
                                                            NewDemoFilArr.slice(0, 8).map((e) => (
                                                                <div >
                                                                    <div onClick={() => selectNewDemoOne(e.name)} style={{ paddingTop: 10, cursor: "pointer" }}>{e.name}</div>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                }
                                            </div>
                                            <div className="top_input">
                                                <input
                                                    onBlur={onFoucusOut4}
                                                    disabled={disabledInputsOnNext || disAbleDemoKey}
                                                    onChange={onChangeNewDemo1Three}
                                                    className="InputFields"
                                                    placeholder="Screen 3 highlight"
                                                    type="text"
                                                    value={Demo1Three}
                                                />
                                                {
                                                    NewDemoFilArrDivTwo &&
                                                    <div style={{ border: "1px solid #ccc", padding: 20, maxHeight: 180, overflow: "auto", marginTop: "1px", borderRadius: "4px" }}>
                                                        {
                                                            NewDemoFilArr.slice(0, 8).map((e) => (
                                                                <div >
                                                                    <div onClick={() => selectNewDemoThree(e.name)} style={{ paddingTop: 10, cursor: "pointer" }}>{e.name}</div>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                }
                                            </div> */}
                                            </div>
                                            <div className="col-1"></div>
                                        </div>
                                        {/* demo one buttons */}
                                        {SaveDrftStateButtonOne && (
                                            <>
                                                {section1dis && (
                                                    <div id="section1dis">
                                                        {RegenerateDemoScript ? (
                                                            <div id="gen0disN">
                                                                {loading ? (
                                                                    <div className="row m-0 btn_section">
                                                                        <div className="col-2"></div>
                                                                        <div className="col-9">
                                                                            <div id="loading"></div>
                                                                        </div>
                                                                        <div className="col-1"></div>
                                                                    </div>
                                                                ) : (
                                                                    <div className="row m-0 btn_section">
                                                                        <div className="col-2"></div>
                                                                        <div className="col-9">
                                                                            <button
                                                                                onClick={() => {
                                                                                    if (!BO1) {
                                                                                        setBo1er(true);
                                                                                    } else {
                                                                                        generate1Press();
                                                                                        setBo1er(false);
                                                                                    }
                                                                                }}
                                                                                className="btn cus_btn"
                                                                                style={{
                                                                                    float: "right",
                                                                                }}
                                                                            >
                                                                                Generate Demo Script
                                                                            </button>
                                                                        </div>
                                                                        <div className="col-1"></div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ) : (
                                                            <div id="gen1disN">
                                                                {loading ? (
                                                                    <div className="row m-0 btn_section">
                                                                        <div className="col-2"></div>
                                                                        <div className="col-9">
                                                                            <div id="loading"></div>
                                                                        </div>
                                                                        <div className="col-1"></div>
                                                                    </div>
                                                                ) : (
                                                                    <div className="row m-0 btn_section">
                                                                        <div className="col-2"></div>
                                                                        <div className="col-9">
                                                                            <button
                                                                                onClick={regenerate1Press}
                                                                                className="btn cus_btn"
                                                                                style={{
                                                                                    float: "right",
                                                                                }}
                                                                            >
                                                                                Demo Script Re Generate
                                                                            </button>
                                                                        </div>
                                                                        <div className="col-1"></div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </div>
                                }

                                {/* State 1 Start */}
                                {state1 && (
                                    <section id="state1">
                                        <div
                                            style={{
                                                paddingTop: "50px",
                                                paddingBottom: "50px",
                                            }}
                                        >
                                            <div className="row m-0">
                                                <div className="col-1"></div>
                                                <div className="col-10">
                                                    <div>
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                            }}
                                                        >
                                                            <span className="pName1">Demo 1 Options</span>
                                                        </div>
                                                        <div className="custom-control custom-radio">
                                                            <textarea
                                                                id="A1"
                                                                rows="8"
                                                                cols="50"
                                                                onChange={onChangeDO1O}
                                                                value={resA1 == null || "" ? "" : resA1.trim()}
                                                                className="left_from"
                                                                type="text"
                                                            ></textarea>
                                                            <input
                                                                checked={isChecked}
                                                                onChange={OnchangeCheck}
                                                                id="female"
                                                                type="checkbox"
                                                                className="cus_radio"
                                                                value="female"
                                                                name="gender"
                                                                style={{
                                                                    height: "20px",
                                                                    width: "20px",
                                                                    marginTop: "70px",
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="mt-2">
                                                        <div className="custom-control custom-radio">
                                                            <textarea
                                                                id="A2"
                                                                rows="8"
                                                                cols="50"
                                                                onChange={onChangeDO1O1}
                                                                value={resA2 == null || "" ? "" : resA2.trim()}
                                                                className="left_from"
                                                                type="text"
                                                            ></textarea>
                                                            <input
                                                                checked={isChecked2}
                                                                onChange={OnchangeCheck2}
                                                                id="female"
                                                                type="checkbox"
                                                                className="cus_radio"
                                                                value="female"
                                                                name="gender"
                                                                style={{
                                                                    height: "20px",
                                                                    width: "20px",
                                                                    marginTop: "70px",
                                                                }}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-1"></div>
                                            </div>
                                        </div>
                                        <div className="row m-0 btn_section_next">
                                            <div className="col-2"></div>
                                            <div className="col-9">
                                                {next1None && (
                                                    <button
                                                        id="next1None"
                                                        onClick={onNextClick}
                                                        className="btn cus_btn"
                                                        style={{
                                                            float: "right",
                                                        }}
                                                    >
                                                        Next
                                                    </button>
                                                )}
                                            </div>
                                            <div className="col-1"></div>
                                        </div>
                                    </section>
                                )}

                                {/* State 2 Start */}
                                {SaveDrftStateOne && (
                                    <section>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="row top_pad">
                                                    <div className="col-1"></div>
                                                    <div className="col-10">
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                            }}
                                                        >
                                                            <span className="pName">Business Outcome 2</span>
                                                        </div>
                                                        <div className="top_input">
                                                            <input
                                                                value={SBO2}
                                                                onBlur={VerbCheckEv2 && CallingSaveDraftAPI}
                                                                onChange={onChangeSBO2}
                                                                disabled={disabledInputsd2}
                                                                className="InputFields"
                                                                placeholder="e.g. Make close estimates"
                                                                type="text"
                                                            />
                                                            {bo2Er && (
                                                                <div style={{ color: "red" }}>
                                                                    This field is required
                                                                </div>
                                                            )}
                                                            {bo1RES_1 && (
                                                                <p
                                                                    id="checkD"
                                                                    style={{
                                                                        color: "#0070D1",
                                                                        fontSize: "14px",
                                                                    }}
                                                                >
                                                                    {bo1RES_1}
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="col-1"></div>
                                                </div>
                                                <div className="row top_pad">
                                                    <div className="col-1"></div>
                                                    <div className="col-10">
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                            }}
                                                        >
                                                            <span className="pName">Role 2</span>
                                                        </div>
                                                        <div className="top_input">
                                                            <input
                                                                onBlur={CallingSaveDraftAPI}
                                                                onChange={onChangeProtagnest2}
                                                                disabled={disabledInputsd2}
                                                                className="InputFields"
                                                                placeholder="e.g. Project Planner"
                                                                type="text"
                                                                value={protagnist2}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-1"></div>
                                                </div>
                                                <div className="row top_pad">
                                                    <div className="col-1"></div>
                                                    <div className="col-10">
                                                        {demoKeyPointLoaderDemo2 && (
                                                            <div
                                                                class="d-flex justify-content-center"
                                                                style={{
                                                                    paddingTop: 94,
                                                                    position: "absolute",
                                                                    left: "21%",
                                                                }}
                                                            >
                                                                <div class="spinner-border" role="status">
                                                                    <span class="sr-only">Loading...</span>
                                                                </div>
                                                            </div>
                                                        )}
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                justifyContent: "space-between",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display: "flex",
                                                                }}
                                                            >
                                                                <div>
                                                                    <span className="pName">Demo 2</span>
                                                                </div>
                                                            </div>
                                                            <div
                                                                style={{
                                                                    display: "flex",
                                                                }}
                                                            >
                                                                <p
                                                                    className="pt-2"
                                                                    style={{
                                                                        fontWeight: "bold",
                                                                        fontSize: "18px",
                                                                    }}
                                                                >
                                                                    Demo Key Point Suggestions{" "}
                                                                </p>
                                                                <div
                                                                    style={{
                                                                        marginLeft: 10,
                                                                    }}
                                                                >
                                                                    <label class="switch">
                                                                        <input
                                                                            type="checkbox"
                                                                            onChange={toggleBtn2}
                                                                        />
                                                                        <span class="slider round"></span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="top_input"
                                                            style={{
                                                                width: "100%",
                                                                display: "flex",
                                                                alignItems: "center",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    width: "80%",
                                                                }}
                                                            >
                                                                <textarea
                                                                    rows="3"
                                                                    onBlur={CallingSaveDraftAPI}
                                                                    disabled={disabledInputsd2 || disAbleDemoKey2}
                                                                    onChange={onChangeNewDemo2}
                                                                    placeholder="Add 3 bullets or 2 sentences"
                                                                    type="text"
                                                                    className="InputFields"
                                                                    value={Demo2}
                                                                />
                                                            </div>
                                                            <div>
                                                                <button
                                                                    onClick={onImgClick}
                                                                    style={{
                                                                        marginLeft: 20,
                                                                        height: 40,
                                                                        width: 80,
                                                                        color: "#75BE43",
                                                                        borderRadius: 8,
                                                                        background: "white",
                                                                        Padding: "6px, 16px, 6px, 16px",
                                                                        border: "1px solid #75BE43",
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                    }}
                                                                >
                                                                    <img
                                                                        style={{
                                                                            marginRight: "4px",
                                                                        }}
                                                                        height={20}
                                                                        width={20}
                                                                        src={BtnPlus}
                                                                    />
                                                                    media
                                                                </button>
                                                            </div>
                                                            {NewDemoFilArrDivDemo2One && (
                                                                <div
                                                                    style={{
                                                                        border: "1px solid #ccc",
                                                                        padding: 20,
                                                                        maxHeight: 180,
                                                                        overflow: "auto",
                                                                        marginTop: "1px",
                                                                        borderRadius: "4px",
                                                                    }}
                                                                >
                                                                    {NewDemoFilArr.slice(0, 8).map((e) => (
                                                                        <div>
                                                                            <div
                                                                                onClick={() =>
                                                                                    selectNewDemo2One(e.name)
                                                                                }
                                                                                style={{
                                                                                    paddingTop: 10,
                                                                                    cursor: "pointer",
                                                                                }}
                                                                            >
                                                                                {e.name}
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="col-1"></div>
                                                </div>
                                                {/* demo two buttons */}
                                                {SaveDrftStateButtonTwo && (
                                                    <>
                                                        {section2dis && (
                                                            <div id="section2dis">
                                                                {isGenerateDemoScript ? (
                                                                    <div id="123disN123">
                                                                        {loading ? (
                                                                            <div className="row m-0 btn_section">
                                                                                <div className="col-2"></div>
                                                                                <div className="col-9">
                                                                                    <div id="loading"></div>
                                                                                </div>
                                                                                <div className="col-1"></div>
                                                                            </div>
                                                                        ) : (
                                                                            <div className="row m-0 btn_section">
                                                                                <div className="col-2"></div>
                                                                                <div className="col-9">
                                                                                    <button
                                                                                        onClick={() => {
                                                                                            if (!SBO2) {
                                                                                                setBo2er(true);
                                                                                            } else {
                                                                                                onRegenerate1();
                                                                                                setBo2er(false);
                                                                                            }
                                                                                        }}
                                                                                        className="btn cus_btn"
                                                                                        style={{
                                                                                            float: "right",
                                                                                            marginLeft: 10,
                                                                                        }}
                                                                                    >
                                                                                        Generate Demo Script
                                                                                    </button>
                                                                                    <button
                                                                                        onClick={onBackClick1}
                                                                                        className="btn cus_btn mr-2"
                                                                                        style={{
                                                                                            float: "right",
                                                                                        }}
                                                                                    >
                                                                                        Back
                                                                                    </button>
                                                                                </div>
                                                                                <div className="col-1"></div>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                ) : (
                                                                    <div id="disN123">
                                                                        {loading ? (
                                                                            <div className="row m-0 btn_section">
                                                                                <div className="col-2"></div>
                                                                                <div className="col-9">
                                                                                    <div id="loading"></div>
                                                                                </div>
                                                                                <div className="col-1"></div>
                                                                            </div>
                                                                        ) : (
                                                                            <div className="row m-0 btn_section">
                                                                                <div className="col-2"></div>
                                                                                <div className="col-9">
                                                                                    <button
                                                                                        onClick={onRegenerate1}
                                                                                        className="btn cus_btn"
                                                                                        style={{
                                                                                            float: "right",
                                                                                        }}
                                                                                    >
                                                                                        Re Generate Demo Script
                                                                                    </button>
                                                                                </div>
                                                                                <div className="col-1"></div>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        )}
                                                    </>
                                                )}
                                                {regenerate && (
                                                    <section id="regenerate">
                                                        <div
                                                            style={{
                                                                paddingTop: "50px",
                                                                paddingBottom: "50px",
                                                            }}
                                                        >
                                                            <div className="row m-0">
                                                                <div className="col-1"></div>
                                                                <div className="col-10">
                                                                    <div>
                                                                        <div
                                                                            style={{
                                                                                display: "flex",
                                                                            }}
                                                                        >
                                                                            <span className="pName1">
                                                                                Demo 2 Options
                                                                            </span>
                                                                        </div>
                                                                        <div className="custom-control custom-radio">
                                                                            <textarea
                                                                                id="B1"
                                                                                rows="8"
                                                                                cols="50"
                                                                                onChange={onChangeDO2O}
                                                                                value={
                                                                                    resB1 == null || ""
                                                                                        ? ""
                                                                                        : resB1.trim()
                                                                                }
                                                                                className="left_from"
                                                                                type="text"
                                                                            ></textarea>
                                                                            <input
                                                                                checked={isChecked3}
                                                                                onChange={OnchangeCheck3}
                                                                                id="female"
                                                                                type="checkbox"
                                                                                className="cus_radio"
                                                                                value="female"
                                                                                name="gender"
                                                                                style={{
                                                                                    height: "20px",
                                                                                    width: "20px",
                                                                                    marginTop: "70px",
                                                                                }}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="mt-2">
                                                                        <div className="custom-control custom-radio">
                                                                            <textarea
                                                                                id="B2"
                                                                                rows="8"
                                                                                cols="50"
                                                                                onChange={onChangeDO2O1}
                                                                                value={
                                                                                    resB2 == null || ""
                                                                                        ? ""
                                                                                        : resB2.trim()
                                                                                }
                                                                                className="left_from"
                                                                                type="text"
                                                                            ></textarea>
                                                                            <input
                                                                                checked={isChecked4}
                                                                                onChange={OnchangeCheck4}
                                                                                id="female"
                                                                                type="checkbox"
                                                                                className="cus_radio"
                                                                                value="female"
                                                                                name="gender"
                                                                                style={{
                                                                                    height: "20px",
                                                                                    width: "20px",
                                                                                    marginTop: "70px",
                                                                                }}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-1"></div>
                                                            </div>
                                                        </div>
                                                        <div className="row m-0 btn_section_next">
                                                            <div className="col-2"></div>
                                                            <div className="col-9">
                                                                {next2None && (
                                                                    <button
                                                                        id="next2None"
                                                                        onClick={OnNext2Clicked}
                                                                        className="btn cus_btn"
                                                                        style={{
                                                                            float: "right",
                                                                        }}
                                                                    >
                                                                        Next
                                                                    </button>
                                                                )}
                                                            </div>
                                                            <div className="col-1"></div>
                                                        </div>
                                                    </section>
                                                )}
                                            </div>
                                        </div>
                                    </section>
                                )}

                                {/* State 3 Start */}
                                {SaveDrftStateTwo && (
                                    <section>
                                        <div className="row">
                                            <div className="col-12">
                                                {
                                                    <div>
                                                        <div className="row top_pad">
                                                            <div className="col-1"></div>
                                                            <div className="col-10">
                                                                <div
                                                                    style={{
                                                                        display: "flex",
                                                                    }}
                                                                >
                                                                    <span className="pName">
                                                                        Business Outcome 3
                                                                    </span>
                                                                </div>
                                                                <div className="top_input">
                                                                    <input
                                                                        onBlur={VerbCheckEv3 && CallingSaveDraftAPI}
                                                                        onChange={onChangeSBO3}
                                                                        disabled={disabledInputsd4}
                                                                        className="InputFields"
                                                                        placeholder="e.g. Collaborate efficiently."
                                                                        type="text"
                                                                        value={SBO3}
                                                                    />
                                                                    {bo3Er && (
                                                                        <div style={{ color: "red" }}>
                                                                            This field is required
                                                                        </div>
                                                                    )}
                                                                    {bo1RES_2 && (
                                                                        <p
                                                                            id="checkD"
                                                                            style={{
                                                                                color: "#0070D1",
                                                                                fontSize: "14px",
                                                                            }}
                                                                        >
                                                                            {bo1RES_2}
                                                                        </p>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <div className="col-1"></div>
                                                        </div>
                                                        <div className="row top_pad">
                                                            <div className="col-1"></div>
                                                            <div className="col-10">
                                                                <div
                                                                    style={{
                                                                        display: "flex",
                                                                    }}
                                                                >
                                                                    <span className="pName">Role 3</span>
                                                                </div>
                                                                <div className="top_input">
                                                                    <input
                                                                        onBlur={CallingSaveDraftAPI}
                                                                        onChange={onChangeProtagnest3}
                                                                        disabled={disabledInputsd4}
                                                                        className="InputFields"
                                                                        placeholder="e.g. Project Planner"
                                                                        type="text"
                                                                        value={protagnist3}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-1"></div>
                                                        </div>
                                                        <div className="row top_pad">
                                                            <div className="col-1"></div>
                                                            <div className="col-10">
                                                                {demoKeyPointLoaderDemo3 && (
                                                                    <div
                                                                        class="d-flex justify-content-center"
                                                                        style={{
                                                                            paddingTop: 94,
                                                                            position: "absolute",
                                                                            left: "21%",
                                                                        }}
                                                                    >
                                                                        <div class="spinner-border" role="status">
                                                                            <span class="sr-only">Loading...</span>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                                <div
                                                                    style={{
                                                                        display: "flex",
                                                                        justifyContent: "space-between",
                                                                    }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            display: "flex",
                                                                        }}
                                                                    >
                                                                        <div>
                                                                            <span className="pName">Demo 3</span>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        style={{
                                                                            display: "flex",
                                                                        }}
                                                                    >
                                                                        <p
                                                                            className="pt-2"
                                                                            style={{
                                                                                fontWeight: "bold",
                                                                                fontSize: "18px",
                                                                            }}
                                                                        >
                                                                            Demo Key Point Suggestions{" "}
                                                                        </p>
                                                                        <div
                                                                            style={{
                                                                                marginLeft: 10,
                                                                            }}
                                                                        >
                                                                            <label class="switch">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    onChange={toggleBtn3}
                                                                                />
                                                                                <span class="slider round"></span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="top_input"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                    }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            width: "80%",
                                                                        }}
                                                                    >
                                                                        <textarea
                                                                            rows="3"
                                                                            onBlur={CallingSaveDraftAPI}
                                                                            disabled={
                                                                                disabledInputsd4 || disAbleDemoKey3
                                                                            }
                                                                            onChange={onChangeNewDemo3}
                                                                            placeholder="Add 3 bullets or 2 sentences"
                                                                            type="text"
                                                                            className="InputFields"
                                                                            value={Demo3}
                                                                        />
                                                                    </div>
                                                                    <div>
                                                                        <button
                                                                            onClick={onImgClick}
                                                                            style={{
                                                                                marginLeft: 20,
                                                                                height: 40,
                                                                                width: 80,
                                                                                color: "#75BE43",
                                                                                borderRadius: 8,
                                                                                background: "white",
                                                                                Padding: "6px, 16px, 6px, 16px",
                                                                                border: "1px solid #75BE43",
                                                                                display: "flex",
                                                                                alignItems: "center",
                                                                            }}
                                                                        >
                                                                            <img
                                                                                style={{
                                                                                    marginRight: "4px",
                                                                                }}
                                                                                height={20}
                                                                                width={20}
                                                                                src={BtnPlus}
                                                                            />
                                                                            media
                                                                        </button>
                                                                    </div>

                                                                    {NewDemoFilArrDivDemo3One && (
                                                                        <div
                                                                            style={{
                                                                                border: "1px solid #ccc",
                                                                                padding: 20,
                                                                                maxHeight: 180,
                                                                                overflow: "auto",
                                                                                marginTop: "1px",
                                                                                borderRadius: "4px",
                                                                            }}
                                                                        >
                                                                            {NewDemoFilArr.slice(0, 8).map((e) => (
                                                                                <div>
                                                                                    <div
                                                                                        onClick={() =>
                                                                                            selectNewDemo3One(e.name)
                                                                                        }
                                                                                        style={{
                                                                                            paddingTop: 10,
                                                                                            cursor: "pointer",
                                                                                        }}
                                                                                    >
                                                                                        {e.name}
                                                                                    </div>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                                {/* <div className="top_input">
                                                            <input
                                                                onBlur={onFoucusOutDemo3Two}
                                                                disabled={disabledInputsd4 || disAbleDemoKey3}
                                                                onChange={onChangeNewDemo3Two}
                                                                className="InputFields"
                                                                placeholder="Screen 2 highlight"
                                                                type="text"
                                                                value={Demo3Two}
                                                            />
                                                            {
                                                                NewDemoFilArrDivDemo3Two &&
                                                                <div style={{ border: "1px solid #ccc", padding: 20, maxHeight: 180, overflow: "auto", marginTop: "1px", borderRadius: "4px" }}>
                                                                    {
                                                                        NewDemoFilArr.slice(0, 8).map((e) => (
                                                                            <div >
                                                                                <div onClick={() => selectNewDemo3Two(e.name)} style={{ paddingTop: 10, cursor: "pointer" }}>{e.name}</div>
                                                                            </div>
                                                                        ))
                                                                    }
                                                                </div>
                                                            }
                                                        </div>
                                                        <div className="top_input">
                                                            <input
                                                                onBlur={onFoucusOutDemo3Three}
                                                                disabled={disabledInputsd4 || disAbleDemoKey3}
                                                                onChange={onChangeNewDemo3Three}
                                                                className="InputFields"
                                                                placeholder="Screen 3 highlight"
                                                                type="text"
                                                                value={Demo3Three}
                                                            />
                                                            {
                                                                NewDemoFilArrDivDemo3Three &&
                                                                <div style={{ border: "1px solid #ccc", padding: 20, maxHeight: 180, overflow: "auto", marginTop: "1px", borderRadius: "4px" }}>
                                                                    {
                                                                        NewDemoFilArr.slice(0, 8).map((e) => (
                                                                            <div >
                                                                                <div onClick={() => selectNewDemo3Three(e.name)} style={{ paddingTop: 10, cursor: "pointer" }}>{e.name}</div>
                                                                            </div>
                                                                        ))
                                                                    }
                                                                </div>
                                                            }
                                                        </div> */}
                                                            </div>
                                                            <div className="col-1"></div>
                                                        </div>
                                                        {/* demo three buttons */}
                                                        {SaveDrftStateButtonThree && (
                                                            <>
                                                                {finishClick && (
                                                                    <div id="finishClick">
                                                                        {isGenerateDemoScript1 ? (
                                                                            <div id="dis76546">
                                                                                {loading ? (
                                                                                    <div className="row m-0 btn_section">
                                                                                        <div className="col-2"></div>
                                                                                        <div className="col-9">
                                                                                            <div id="loading"></div>
                                                                                        </div>
                                                                                        <div className="col-1"></div>
                                                                                    </div>
                                                                                ) : (
                                                                                    <div className="row m-0 btn_section">
                                                                                        {/* <div className="col-2"></div> */}
                                                                                        <div className="col-1"></div>
                                                                                        <div className="col-10 p-0">
                                                                                            <button
                                                                                                onClick={() => {
                                                                                                    if (!SBO3) {
                                                                                                        setBo3er(true);
                                                                                                    } else {
                                                                                                        regenerate3();
                                                                                                        setBo3er(false);
                                                                                                    }
                                                                                                }}
                                                                                                className="btn cus_btn"
                                                                                                style={{
                                                                                                    float: "right",
                                                                                                }}
                                                                                            >
                                                                                                Generate Demo Script
                                                                                            </button>
                                                                                            <button
                                                                                                onClick={onFinishClick1}
                                                                                                className="btn cus_btn"
                                                                                                style={{
                                                                                                    float: "right",
                                                                                                    marginRight: 20,
                                                                                                }}
                                                                                            >
                                                                                                Skip Demo, Move to Intro
                                                                                            </button>
                                                                                            <button
                                                                                                onClick={onBackClick2}
                                                                                                className="btn cus_btn"
                                                                                                style={{
                                                                                                    float: "right",
                                                                                                    marginRight: 20,
                                                                                                }}
                                                                                            >
                                                                                                Back
                                                                                            </button>
                                                                                        </div>
                                                                                        <div className="col-1"></div>
                                                                                    </div>
                                                                                )}
                                                                            </div>
                                                                        ) : (
                                                                            <div id="dis0988">
                                                                                {loading ? (
                                                                                    <div className="row m-0 btn_section">
                                                                                        <div className="col-2"></div>
                                                                                        <div className="col-9">
                                                                                            <div id="loading"></div>
                                                                                        </div>
                                                                                        <div className="col-1"></div>
                                                                                    </div>
                                                                                ) : (
                                                                                    <div className="row m-0 btn_section">
                                                                                        <div className="col-2"></div>
                                                                                        <div className="col-9">
                                                                                            <button
                                                                                                onClick={regenerate3}
                                                                                                className="btn cus_btn"
                                                                                                style={{
                                                                                                    float: "right",
                                                                                                }}
                                                                                            >
                                                                                                Re Generate Demo Script
                                                                                            </button>
                                                                                        </div>
                                                                                        <div className="col-1"></div>
                                                                                    </div>
                                                                                )}
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                )}
                                                            </>
                                                        )}
                                                        <div id="intro1ReGen">
                                                            {loading ? (
                                                                <div className="row m-0 btn_section">
                                                                    <div className="col-2"></div>
                                                                    <div className="col-9">
                                                                        <div id="loading"></div>
                                                                    </div>
                                                                    <div className="col-1"></div>
                                                                </div>
                                                            ) : (
                                                                <div className="row m-0 btn_section">
                                                                    <div className="col-2"></div>
                                                                    <div className="col-9">
                                                                        <button onClick={onFinishClick1}>
                                                                            Re Generate Intro Script
                                                                        </button>
                                                                    </div>
                                                                    <div className="col-1"></div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                }
                                                {demo3dis && (
                                                    <section id="demo3dis">
                                                        <div
                                                            style={{
                                                                paddingTop: "50px",
                                                                paddingBottom: "50px",
                                                            }}
                                                        >
                                                            <div className="row m-0">
                                                                <div className="col-1"></div>
                                                                <div className="col-10">
                                                                    <div>
                                                                        <div
                                                                            style={{
                                                                                display: "flex",
                                                                            }}
                                                                        >
                                                                            <span className="pName1">
                                                                                Demo 3 Options
                                                                            </span>
                                                                        </div>
                                                                        <div className="custom-control custom-radio">
                                                                            <textarea
                                                                                id="C1"
                                                                                rows="8"
                                                                                cols="50"
                                                                                onChange={onChangeDO3O}
                                                                                value={
                                                                                    resC1 == null || ""
                                                                                        ? ""
                                                                                        : resC1.trim()
                                                                                }
                                                                                className="left_from"
                                                                                type="text"
                                                                            ></textarea>
                                                                            <input
                                                                                checked={isChecked5}
                                                                                onChange={OnchangeCheck5}
                                                                                id="female"
                                                                                type="checkbox"
                                                                                className="cus_radio"
                                                                                value="female"
                                                                                name="gender"
                                                                                style={{
                                                                                    height: "20px",
                                                                                    width: "20px",
                                                                                    marginTop: "70px",
                                                                                }}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="mt-2">
                                                                        <div className="custom-control custom-radio">
                                                                            <textarea
                                                                                id="C2"
                                                                                rows="8"
                                                                                cols="50"
                                                                                onChange={onChangeDO3O1}
                                                                                value={
                                                                                    resC2 == null || ""
                                                                                        ? ""
                                                                                        : resC2.trim()
                                                                                }
                                                                                className="left_from"
                                                                                type="text"
                                                                            ></textarea>
                                                                            <input
                                                                                checked={isChecked6}
                                                                                onChange={OnchangeCheck6}
                                                                                id="female"
                                                                                type="checkbox"
                                                                                className="cus_radio"
                                                                                value="female"
                                                                                name="gender"
                                                                                style={{
                                                                                    height: "20px",
                                                                                    width: "20px",
                                                                                    marginTop: "70px",
                                                                                }}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-1"></div>
                                                            </div>
                                                        </div>
                                                    </section>
                                                )}

                                                <div className="row m-0 btn_section_next">
                                                    <div className="col-2"></div>
                                                    <div className="col-9 mt-5">
                                                        {next3None && (
                                                            <button
                                                                id="next3None111"
                                                                onClick={onFinishClick}
                                                                className="btn cus_btn"
                                                                style={{
                                                                    float: "right",
                                                                }}
                                                            >
                                                                Generate Intro Script
                                                            </button>
                                                        )}
                                                    </div>
                                                    <div className="col-1"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                )}



                                {/* State 4 Start */}
                                <div>
                                    {lastDivNone && (
                                        <div id="lastDivNone">
                                            {FINALLAS && (
                                                <div id="FINALLAS">
                                                    {lastLoading ? (
                                                        <div className="row">
                                                            <div className="col-2"></div>
                                                            <div className="col-9">
                                                                <div id="loading"></div>
                                                            </div>
                                                            <div className="col-1"></div>
                                                        </div>
                                                    ) : (
                                                        <section>
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <section>
                                                                        <div
                                                                            style={{
                                                                                paddingTop: "50px",
                                                                                paddingBottom: "50px",
                                                                            }}
                                                                        >
                                                                            <div className="row m-0">
                                                                                <div className="col-1"></div>
                                                                                <div className="col-10">
                                                                                    <div>
                                                                                        <div
                                                                                            style={{
                                                                                                display: "flex",
                                                                                            }}
                                                                                        >
                                                                                            <span className="pName1">
                                                                                                Select Intro
                                                                                            </span>
                                                                                        </div>
                                                                                        <div className="custom-control custom-radio">
                                                                                            <textarea
                                                                                                id="AAA"
                                                                                                rows="5"
                                                                                                cols="50"
                                                                                                onChange={int1}
                                                                                                value={
                                                                                                    Fintro1 == null || ""
                                                                                                        ? ""
                                                                                                        : Fintro1.trim()
                                                                                                }
                                                                                                className="left_from"
                                                                                                type="text"
                                                                                            ></textarea>
                                                                                            <input
                                                                                                checked={isChecked7}
                                                                                                onChange={OnchangeCheck7}
                                                                                                id="female"
                                                                                                type="checkbox"
                                                                                                className="cus_radio"
                                                                                                value="female"
                                                                                                name="gender"
                                                                                                style={{
                                                                                                    height: "20px",
                                                                                                    width: "20px",
                                                                                                    marginTop: "70px",
                                                                                                }}
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="mt-2">
                                                                                        <div className="custom-control custom-radio">
                                                                                            <textarea
                                                                                                id="BBB"
                                                                                                rows="5"
                                                                                                cols="50"
                                                                                                onChange={int2}
                                                                                                value={
                                                                                                    Fintro2 == null || ""
                                                                                                        ? ""
                                                                                                        : Fintro2.trim()
                                                                                                }
                                                                                                className="left_from"
                                                                                                type="text"
                                                                                            ></textarea>
                                                                                            <input
                                                                                                checked={isChecked8}
                                                                                                onChange={OnchangeCheck8}
                                                                                                id="female"
                                                                                                type="checkbox"
                                                                                                className="cus_radio"
                                                                                                value="female"
                                                                                                name="gender"
                                                                                                style={{
                                                                                                    height: "20px",
                                                                                                    width: "20px",
                                                                                                    marginTop: "70px",
                                                                                                }}
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-1"></div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </section>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                    <div className="row m-0 btn_section_next">
                                        <div className="col-2"></div>
                                        <div className="col-9 ">
                                            {outNon1 && (
                                                <button
                                                    id="outNon1"
                                                    onClick={GenerateOutro}
                                                    className="btn cus_btn"
                                                    style={{ float: "right" }}
                                                >
                                                    Generate Outro Script
                                                </button>
                                            )}
                                            {outNon2 && (
                                                <button
                                                    id="outNon2"
                                                    onClick={GenerateOutro}
                                                    className="btn cus_btn"
                                                    style={{ float: "right" }}
                                                >
                                                    Re Generate Outro Script
                                                </button>
                                            )}
                                        </div>
                                        <div className="col-1"></div>
                                    </div>
                                </div>

                                {FOROutro && (
                                    <div id="FOROutro">
                                        {outroLoading ? (
                                            <div className="row">
                                                <div className="col-2"></div>
                                                <div className="col-9">
                                                    <div id="loading"></div>
                                                </div>
                                                <div className="col-1"></div>
                                            </div>
                                        ) : (
                                            <div>
                                                <div className="row m-0">
                                                    <div className="col-1"></div>
                                                    <div className="col-10">
                                                        <div className="mt-5">
                                                            <div
                                                                style={{
                                                                    display: "flex",
                                                                }}
                                                            >
                                                                <span className="pName1 ">Select Outro</span>
                                                            </div>
                                                            <div className="custom-control custom-radio">
                                                                <textarea
                                                                    onChange={out1}
                                                                    id="CCC"
                                                                    rows="5"
                                                                    cols="50"
                                                                    value={outroState1.trim()}
                                                                    className="left_from"
                                                                    type="text"
                                                                ></textarea>
                                                                <input
                                                                    checked={isChecked9}
                                                                    onChange={OnchangeCheck9}
                                                                    id="female"
                                                                    type="checkbox"
                                                                    className="cus_radio"
                                                                    value="female"
                                                                    name="gender"
                                                                    style={{
                                                                        height: "20px",
                                                                        width: "20px",
                                                                        marginTop: "70px",
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="mt-2">
                                                            <div className="custom-control custom-radio">
                                                                <textarea
                                                                    onChange={out2}
                                                                    id="DDD"
                                                                    rows="5"
                                                                    cols="50"
                                                                    value={outroState2.trim()}
                                                                    className="left_from"
                                                                    type="text"
                                                                ></textarea>
                                                                <input
                                                                    checked={isChecked10}
                                                                    onChange={OnchangeCheck10}
                                                                    id="female"
                                                                    type="checkbox"
                                                                    className="cus_radio"
                                                                    value="female"
                                                                    name="gender"
                                                                    style={{
                                                                        height: "20px",
                                                                        width: "20px",
                                                                        marginTop: "70px",
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-1"></div>
                                                </div>
                                                <div className="row m-0 btn_section_next">
                                                    <div className="col-2"></div>
                                                    <div className="col-9 mt-5">
                                                        <button
                                                            onClick={FinClick}
                                                            className="btn cus_btn"
                                                            style={{
                                                                float: "right",
                                                            }}
                                                        >
                                                            Finish
                                                        </button>
                                                    </div>
                                                    <div className="col-1"></div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            <div className="col-6">
                                <div>
                                    <div>
                                        <div className="row m-0">
                                            <div className="col-11">
                                                <div
                                                    style={{
                                                        height: "auto",
                                                        borderRadius: "8px",
                                                        padding: "20px",
                                                        paddingTop: "48px",
                                                    }}
                                                >
                                                    {Floading ? (
                                                        <div className="row m-0 btn_section">
                                                            <div className="col-2"></div>
                                                            <div className="col-8">
                                                                <div
                                                                    id="loading"
                                                                    style={{
                                                                        marginRight: "172px",
                                                                        marginTop: "170px",
                                                                    }}
                                                                ></div>
                                                            </div>
                                                            <div className="col-2"></div>
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            <div>
                                                                <div className="row">
                                                                    <div
                                                                        className="col-12"
                                                                        style={{
                                                                            fontSize: "18px",
                                                                            fontWeight: "600",
                                                                        }}
                                                                    >
                                                                        Grabber:
                                                                    </div>
                                                                </div>
                                                                {/* {
                                                                            StateFive &&
                                                                            <div className='row'>
                                                                                <Diff
                                                                                    inputA={newIntro}
                                                                                    inputB={extrasss5}
                                                                                    type="words"
                                                                                />
                                                                            </div>
                                                                        } */}
                                                                <div className="row">
                                                                    <div
                                                                        style={{
                                                                            display: "flex",
                                                                        }}
                                                                    >
                                                                        <div
                                                                            style={{
                                                                                width: "100%",
                                                                            }}
                                                                        >
                                                                            <textarea
                                                                                wrap="soft"
                                                                                rows="5"
                                                                                onChange={yess5}
                                                                                className={
                                                                                    StateFive == false
                                                                                        ? "right_side autosize"
                                                                                        : "check right_side autosize"
                                                                                }
                                                                                value={extrasss5 || newIntro}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <br></br>
                                                            </div>
                                                            <div>
                                                                <div className="row">
                                                                    <div
                                                                        className="col-12"
                                                                        style={{
                                                                            fontSize: "18px",
                                                                            fontWeight: "600",
                                                                        }}
                                                                    >
                                                                        Intro/Solution:
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div
                                                                        style={{
                                                                            display: "flex",
                                                                        }}
                                                                    >
                                                                        <div
                                                                            style={{
                                                                                width: "100%",
                                                                            }}
                                                                        >
                                                                            <textarea
                                                                                wrap="soft"
                                                                                rows="5"
                                                                                onChange={onChangeSolution}
                                                                                className={
                                                                                    StateFive == false
                                                                                        ? "right_side autosize"
                                                                                        : "check right_side autosize"
                                                                                }
                                                                                value={newIntro2}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <br></br>
                                                            </div>

                                                            <div className="row">
                                                                <div
                                                                    className="col-12"
                                                                    style={{
                                                                        fontSize: "18px",
                                                                        fontWeight: "600",
                                                                    }}
                                                                >
                                                                    Business Outcome 1:
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div
                                                                    style={{
                                                                        display: "flex",
                                                                    }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            width: "100%",
                                                                        }}
                                                                    >
                                                                        <textarea
                                                                            wrap="soft"
                                                                            rows="5"
                                                                            onChange={ONchangeboo1}
                                                                            className="right_side autosize"
                                                                            value={BO1}
                                                                        ></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <br></br>

                                                            <div className="row">
                                                                <div
                                                                    className="col-12"
                                                                    style={{
                                                                        fontSize: "18px",
                                                                        fontWeight: "600",
                                                                    }}
                                                                >
                                                                    Demo 1:
                                                                </div>
                                                            </div>
                                                            {/* {
                                                                        StateOne &&
                                                                        <div className='row'>
                                                                            <Diff
                                                                                inputA={extra}
                                                                                inputB={extrasss}
                                                                                type="words"
                                                                            />
                                                                        </div>
                                                                    } */}
                                                            <div className="row">
                                                                <div
                                                                    style={{
                                                                        display: "flex",
                                                                    }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            width: "100%",
                                                                        }}
                                                                    >
                                                                        <textarea
                                                                            className={
                                                                                StateOne == false
                                                                                    ? "right_side autosize"
                                                                                    : "check right_side autosize"
                                                                            }
                                                                            wrap="soft"
                                                                            rows="5"
                                                                            onChange={yess}
                                                                            value={extrasss || extra}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <br></br>
                                                            <div className="row">
                                                                <div
                                                                    className="col-12"
                                                                    style={{
                                                                        fontSize: "18px",
                                                                        fontWeight: "600",
                                                                    }}
                                                                >
                                                                    Business Outcome 2:
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div
                                                                    style={{
                                                                        display: "flex",
                                                                    }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            width: "100%",
                                                                        }}
                                                                    >
                                                                        <textarea
                                                                            onChange={OnChnageBof2}
                                                                            className="right_side autosize"
                                                                            value={SBO2}
                                                                        ></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <br></br>

                                                            <div className="row">
                                                                <div
                                                                    className="col-12"
                                                                    style={{
                                                                        fontSize: "18px",
                                                                        fontWeight: "600",
                                                                    }}
                                                                >
                                                                    Demo 2:
                                                                </div>
                                                            </div>
                                                            {/* {
                                                                        StateTwo &&
                                                                        <div className='row'>
                                                                            <Diff
                                                                                inputA={extra2}
                                                                                inputB={extrasss2}
                                                                                type="words"
                                                                            />
                                                                        </div>
                                                                    } */}
                                                            <div className="row">
                                                                <div
                                                                    style={{
                                                                        display: "flex",
                                                                    }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            width: "100%",
                                                                        }}
                                                                    >
                                                                        <textarea
                                                                            wrap="soft"
                                                                            rows="5"
                                                                            onChange={yess2}
                                                                            className={
                                                                                StateTwo == false
                                                                                    ? "right_side autosize"
                                                                                    : "check right_side autosize"
                                                                            }
                                                                            value={extrasss2 || extra2}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <br></br>

                                                            {SBO3 && (
                                                                <div>
                                                                    <div className="row">
                                                                        <div
                                                                            className="col-12"
                                                                            style={{
                                                                                fontSize: "18px",
                                                                                fontWeight: "600",
                                                                            }}
                                                                        >
                                                                            Business Outcome 3:
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div
                                                                            style={{
                                                                                display: "flex",
                                                                            }}
                                                                        >
                                                                            <div
                                                                                style={{
                                                                                    width: "100%",
                                                                                }}
                                                                            >
                                                                                <textarea
                                                                                    wrap="soft"
                                                                                    rows="5"
                                                                                    onChange={onChangeBoF3}
                                                                                    className="right_side autosize"
                                                                                    value={SBO3}
                                                                                ></textarea>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <br></br>
                                                                </div>
                                                            )}

                                                            {extra3 && (
                                                                <div>
                                                                    <div className="row">
                                                                        <div
                                                                            className="col-12"
                                                                            style={{
                                                                                fontSize: "18px",
                                                                                fontWeight: "600",
                                                                            }}
                                                                        >
                                                                            Demo 3:
                                                                        </div>
                                                                    </div>
                                                                    {/* {StateThree &&
                                                                                <div className='row'>
                                                                                    <Diff
                                                                                        inputA={extra3}
                                                                                        inputB={extrasss3}
                                                                                        type="words"
                                                                                    />
                                                                                </div>
                                                                            } */}
                                                                    {/* <div className="row">
                                                                        <div
                                                                            style={{
                                                                                display:
                                                                                    "flex",
                                                                            }}
                                                                        >
                                                                            <div
                                                                                style={{
                                                                                    width: "100%",
                                                                                }}
                                                                            >
                                                                                <textarea
                                                                                    wrap="soft"
                                                                                    rows="5"
                                                                                    onChange={
                                                                                        yess3
                                                                                    }
                                                                                    className={
                                                                                        StateThree ==
                                                                                            false
                                                                                            ? "right_side autosize"
                                                                                            : "check right_side autosize"
                                                                                    }
                                                                                    value={
                                                                                        extrasss3 ||
                                                                                        extra3
                                                                                    }
                                                                                ></textarea>
                                                                            </div>
                                                                        </div>
                                                                    </div> */}
                                                                    <div className="row">
                                                                        <div
                                                                            style={{
                                                                                display: "flex",
                                                                            }}
                                                                        >
                                                                            <div
                                                                                style={{
                                                                                    width: "100%",
                                                                                }}
                                                                            >
                                                                                <textarea
                                                                                    wrap="soft"
                                                                                    rows="5"
                                                                                    onChange={yess3}
                                                                                    className={
                                                                                        StateThree == false
                                                                                            ? "right_side autosize"
                                                                                            : "check right_side autosize"
                                                                                    }
                                                                                    value={extrasss3 || extra3}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <br></br>
                                                                </div>
                                                            )}

                                                            {SBO4 && (
                                                                <div>
                                                                    <div className="row">
                                                                        <div
                                                                            className="col-12"
                                                                            style={{
                                                                                fontSize: "18px",
                                                                                fontWeight: "600",
                                                                            }}
                                                                        >
                                                                            Business Outcome 4:
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div
                                                                            style={{
                                                                                display: "flex",
                                                                            }}
                                                                        >
                                                                            <div
                                                                                style={{
                                                                                    width: "100%",
                                                                                }}
                                                                            >
                                                                                <textarea
                                                                                    wrap="soft"
                                                                                    rows="5"
                                                                                    onChange={onChangeBoF55}
                                                                                    className="right_side autosize"
                                                                                    value={SBO4}
                                                                                ></textarea>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <br></br>
                                                                </div>
                                                            )}

                                                            {extra4 && (
                                                                <div>
                                                                    <div className="row">
                                                                        <div
                                                                            className="col-12"
                                                                            style={{
                                                                                fontSize: "18px",
                                                                                fontWeight: "600",
                                                                            }}
                                                                        >
                                                                            Demo 4:
                                                                        </div>
                                                                    </div>
                                                                    {/* {StateFour &&
                                                                                <div className='row'>
                                                                                    <Diff
                                                                                        inputA={extra4}
                                                                                        inputB={extrasss4}
                                                                                        type="words"
                                                                                    />
                                                                                </div>
                                                                            } */}
                                                                    <div className="row">
                                                                        <div
                                                                            style={{
                                                                                display: "flex",
                                                                            }}
                                                                        >
                                                                            <div
                                                                                style={{
                                                                                    width: "100%",
                                                                                }}
                                                                            >
                                                                                <textarea
                                                                                    wrap="soft"
                                                                                    rows="5"
                                                                                    onChange={yess4}
                                                                                    className={
                                                                                        StateFour == false
                                                                                            ? "right_side autosize"
                                                                                            : "check right_side autosize"
                                                                                    }
                                                                                    value={extrasss4 || extra4}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <br></br>
                                                                </div>
                                                            )}

                                                            <div>
                                                                <div className="row">
                                                                    <div
                                                                        className="col-12"
                                                                        style={{
                                                                            fontSize: "18px",
                                                                            fontWeight: "600",
                                                                        }}
                                                                    >
                                                                        Outro:
                                                                    </div>
                                                                </div>
                                                                {/* {
                                                                            StateSix &&
                                                                            <div className='row'>
                                                                                <Diff
                                                                                    inputA={newOutro}
                                                                                    inputB={extrasss6}
                                                                                    type="words"
                                                                                />
                                                                            </div>
                                                                        } */}
                                                                <div className="row">
                                                                    <div
                                                                        style={{
                                                                            display: "flex",
                                                                        }}
                                                                    >
                                                                        <div
                                                                            style={{
                                                                                width: "100%",
                                                                            }}
                                                                        >
                                                                            <textarea
                                                                                wrap="soft"
                                                                                rows="5"
                                                                                onChange={yess6}
                                                                                className={
                                                                                    StateSix == false
                                                                                        ? "right_side autosize"
                                                                                        : "check right_side autosize"
                                                                                }
                                                                                value={extrasss6 || newOutro}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <br></br>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-12 newpd">
                                                                    {/* <button
                                                                        className="btn cuss_btn"
                                                                        id="generate"
                                                                        onClick={
                                                                            generateWordDocument
                                                                        }
                                                                    >
                                                                        Save and
                                                                        Download
                                                                        Script
                                                                    </button> */}
                                                                    <button
                                                                        className="btn cuss_btn"
                                                                        id="generate"
                                                                        onClick={CallingSaveDraftAPI}
                                                                    >
                                                                        Save
                                                                    </button>
                                                                    <button
                                                                        className="btn cuss_btn"
                                                                        id="generate"
                                                                        disabled={canClear}
                                                                        onClick={() => {
                                                                            ClearDraft(
                                                                                localStorage.getItem("draftId")
                                                                            ).then((res) => {
                                                                                setCanClear(res.status);
                                                                                setShowclear(!res.status);

                                                                                res.status && ClearAll();
                                                                            });
                                                                        }}
                                                                    >
                                                                        Clear All
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-1"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            )}
            <div>
                <Modal
                    isOpen={modal1}
                    onRequestClose={() => {
                        setmodal1(false);
                    }}
                    style={customStyles}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                >
                    <div
                        class="modal-header"
                        style={{
                            borderBottom: 0,
                            padding: 40,
                            paddingBottom: 10,
                            paddingTop: 15,
                        }}
                    >
                        <h5
                            class="modal-title"
                            id="staticBackdropLabel"
                            style={{
                                position: "absolute",
                                left: 25,
                                fontSize: 18,
                                fontWeight: "bold",
                            }}
                        >
                            Tori says
                        </h5>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "20px",
                        }}
                    >
                        <img width={30} height={30} src={ToriLogo} />
                        <h5 style={{ marginLeft: "20px" }}>{`${modalMsg1}`}</h5>
                    </div>

                    <div className="pt-3" style={{ float: "right", display: "flex" }}>
                        <button
                            onClick={() => {
                                setmodal1(false);
                            }}
                            style={{
                                height: "34px",
                                fontWeight: "bold",
                                backgroundColor: "red",
                            }}
                            className="btn btn-primary primaryButton"
                        >
                            Close
                        </button>
                    </div>
                </Modal>
            </div>
            <div>
                <Modal
                    isOpen={showClear}
                    onRequestClose={() => {
                        setShowclear(false);
                    }}
                    style={customStyles}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                >
                    <div
                        class="modal-header"
                        style={{
                            borderBottom: 0,
                            padding: 40,
                            paddingBottom: 10,
                            paddingTop: 15,
                        }}
                    >
                        <h5
                            class="modal-title"
                            id="staticBackdropLabel"
                            style={{
                                position: "absolute",
                                left: 25,
                                fontSize: 18,
                                fontWeight: "bold",
                            }}
                        >
                            Tori says
                        </h5>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "20px",
                        }}
                    >
                        <img width={30} height={30} src={ToriLogo} />
                        <h5 style={{ marginLeft: "20px" }}>{`You Can Not Clear Draft`}</h5>
                    </div>

                    <div className="pt-3" style={{ float: "right", display: "flex" }}>
                        <button
                            onClick={() => {
                                setShowclear(false);
                            }}
                            style={{
                                height: "34px",
                                fontWeight: "bold",
                                backgroundColor: "red",
                            }}
                            className="btn btn-primary primaryButton"
                        >
                            Close
                        </button>
                    </div>
                </Modal>
            </div>
            <div>
                <Modal
                    isOpen={modal2}
                    onRequestClose={() => {
                        setmodal2(false);
                    }}
                    style={customStyles}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                >
                    <div
                        class="modal-header"
                        style={{
                            borderBottom: 0,
                            padding: 40,
                            paddingBottom: 10,
                            paddingTop: 15,
                        }}
                    >
                        <h5
                            class="modal-title"
                            id="staticBackdropLabel"
                            style={{
                                position: "absolute",
                                left: 25,
                                fontSize: 18,
                                fontWeight: "bold",
                            }}
                        >
                            Tori says
                        </h5>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "20px",
                        }}
                    >
                        <img width={30} height={30} src={ToriLogo} />
                        <h5 style={{ marginLeft: "20px" }}>{`${modalMsg2}`}</h5>
                    </div>

                    <div className="pt-3" style={{ float: "right", display: "flex" }}>
                        <button
                            onClick={() => {
                                setmodal2(false);
                            }}
                            style={{
                                height: "34px",
                                fontWeight: "bold",
                                backgroundColor: "red",
                            }}
                            className="btn btn-primary primaryButton"
                        >
                            Close
                        </button>
                    </div>
                </Modal>
            </div>
            <div>
                <Modal
                    isOpen={modal3}
                    onRequestClose={() => {
                        setmodal3(false);
                    }}
                    style={customStyles}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                >
                    <div
                        class="modal-header"
                        style={{
                            borderBottom: 0,
                            padding: 40,
                            paddingBottom: 10,
                            paddingTop: 15,
                        }}
                    >
                        <h5
                            class="modal-title"
                            id="staticBackdropLabel"
                            style={{
                                position: "absolute",
                                left: 25,
                                fontSize: 18,
                                fontWeight: "bold",
                            }}
                        >
                            Tori says
                        </h5>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "20px",
                        }}
                    >
                        <img width={30} height={30} src={ToriLogo} />
                        <h5 style={{ marginLeft: "20px" }}>{`${modalMsg3}`}</h5>
                    </div>

                    <div className="pt-3" style={{ float: "right", display: "flex" }}>
                        <button
                            onClick={() => {
                                setmodal3(false);
                            }}
                            style={{
                                height: "34px",
                                fontWeight: "bold",
                                backgroundColor: "red",
                            }}
                            className="btn btn-primary primaryButton"
                        >
                            Close
                        </button>
                    </div>
                </Modal>
            </div>
            <div>
                <Modal
                    isOpen={modal4}
                    onRequestClose={() => {
                        setmodal4(false);
                    }}
                    style={customStyles}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                >
                    <div
                        class="modal-header"
                        style={{
                            borderBottom: 0,
                            padding: 40,
                            paddingBottom: 10,
                            paddingTop: 15,
                        }}
                    >
                        <h5
                            class="modal-title"
                            id="staticBackdropLabel"
                            style={{
                                position: "absolute",
                                left: 25,
                                fontSize: 18,
                                fontWeight: "bold",
                            }}
                        >
                            Tori says
                        </h5>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "20px",
                        }}
                    >
                        <img width={30} height={30} src={ToriLogo} />
                        <h5 style={{ marginLeft: "20px" }}>{`${modalMsg4}`}</h5>
                    </div>

                    <div className="pt-3" style={{ float: "right", display: "flex" }}>
                        <button
                            onClick={() => {
                                setmodal4(false);
                            }}
                            style={{
                                height: "34px",
                                fontWeight: "bold",
                                backgroundColor: "red",
                            }}
                            className="btn btn-primary primaryButton"
                        >
                            Close
                        </button>
                    </div>
                </Modal>
            </div>
            <div>
                <Modal
                    isOpen={modal5}
                    onRequestClose={() => {
                        setmodal5(false);
                    }}
                    style={customStyles}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                >
                    <div
                        class="modal-header"
                        style={{
                            borderBottom: 0,
                            padding: 40,
                            paddingBottom: 10,
                            paddingTop: 15,
                        }}
                    >
                        <h5
                            class="modal-title"
                            id="staticBackdropLabel"
                            style={{
                                position: "absolute",
                                left: 25,
                                fontSize: 18,
                                fontWeight: "bold",
                            }}
                        >
                            Tori says
                        </h5>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "20px",
                        }}
                    >
                        <img width={30} height={30} src={ToriLogo} />
                        <h5 style={{ marginLeft: "20px" }}>{`${modalMsg5}`}</h5>
                    </div>

                    <div className="pt-3" style={{ float: "right", display: "flex" }}>
                        <button
                            onClick={() => {
                                setmodal5(false);
                            }}
                            style={{
                                height: "34px",
                                fontWeight: "bold",
                                backgroundColor: "red",
                            }}
                            className="btn btn-primary primaryButton"
                        >
                            Close
                        </button>
                    </div>
                </Modal>
            </div>
            <div>
                <Modal
                    isOpen={modal6}
                    onRequestClose={() => {
                        setmodal6(false);
                    }}
                    style={customStyles}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                >
                    <div
                        class="modal-header"
                        style={{
                            borderBottom: 0,
                            padding: 40,
                            paddingBottom: 10,
                            paddingTop: 15,
                        }}
                    >
                        <h5
                            class="modal-title"
                            id="staticBackdropLabel"
                            style={{
                                position: "absolute",
                                left: 25,
                                fontSize: 18,
                                fontWeight: "bold",
                            }}
                        >
                            Tori says
                        </h5>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "20px",
                        }}
                    >
                        <img width={30} height={30} src={ToriLogo} />
                        <h5 style={{ marginLeft: "20px" }}>{`${modalMsg6}`}</h5>
                    </div>

                    <div className="pt-3" style={{ float: "right", display: "flex" }}>
                        <button
                            onClick={() => {
                                setmodal6(false);
                            }}
                            style={{
                                height: "34px",
                                fontWeight: "bold",
                                backgroundColor: "red",
                            }}
                            className="btn btn-primary primaryButton"
                        >
                            Close
                        </button>
                    </div>
                </Modal>
            </div>
            <div>
                <Modal
                    isOpen={modal7}
                    onRequestClose={() => {
                        setmodal7(false);
                    }}
                    style={customStyles}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                >
                    <div
                        class="modal-header"
                        style={{
                            borderBottom: 0,
                            padding: 40,
                            paddingBottom: 10,
                            paddingTop: 15,
                        }}
                    >
                        <h5
                            class="modal-title"
                            id="staticBackdropLabel"
                            style={{
                                position: "absolute",
                                left: 25,
                                fontSize: 18,
                                fontWeight: "bold",
                            }}
                        >
                            Tori says
                        </h5>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "20px",
                        }}
                    >
                        <img width={30} height={30} src={ToriLogo} />
                        <h5 style={{ marginLeft: "20px" }}>{`${modalMsg7}`}</h5>
                    </div>

                    <div className="pt-3" style={{ float: "right", display: "flex" }}>
                        <button
                            onClick={() => {
                                setmodal7(false);
                            }}
                            style={{
                                height: "34px",
                                fontWeight: "bold",
                                backgroundColor: "red",
                            }}
                            className="btn btn-primary primaryButton"
                        >
                            Close
                        </button>
                    </div>
                </Modal>
            </div>
            <div>
                <Modal
                    isOpen={modal8}
                    onRequestClose={() => {
                        setmodal8(false);
                    }}
                    style={customStyles}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                >
                    <div
                        class="modal-header"
                        style={{
                            borderBottom: 0,
                            padding: 40,
                            paddingBottom: 10,
                            paddingTop: 15,
                        }}
                    >
                        <h5
                            class="modal-title"
                            id="staticBackdropLabel"
                            style={{
                                position: "absolute",
                                left: 25,
                                fontSize: 18,
                                fontWeight: "bold",
                            }}
                        >
                            Tori says
                        </h5>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "20px",
                        }}
                    >
                        <img width={30} height={30} src={ToriLogo} />
                        <h5 style={{ marginLeft: "20px" }}>{`${modalMsg8}`}</h5>
                    </div>

                    <div className="pt-3" style={{ float: "right", display: "flex" }}>
                        <button
                            onClick={() => {
                                setmodal8(false);
                            }}
                            style={{
                                height: "34px",
                                fontWeight: "bold",
                                backgroundColor: "red",
                            }}
                            className="btn btn-primary primaryButton"
                        >
                            Close
                        </button>
                    </div>
                </Modal>
            </div>
            <div>
                <Modal
                    isOpen={modal9}
                    onRequestClose={() => {
                        setmodal9(false);
                    }}
                    style={customStyles}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                >
                    <div
                        class="modal-header"
                        style={{
                            borderBottom: 0,
                            padding: 40,
                            paddingBottom: 10,
                            paddingTop: 15,
                        }}
                    >
                        <h5
                            class="modal-title"
                            id="staticBackdropLabel"
                            style={{
                                position: "absolute",
                                left: 25,
                                fontSize: 18,
                                fontWeight: "bold",
                            }}
                        >
                            Tori says
                        </h5>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "20px",
                        }}
                    >
                        <img width={30} height={30} src={ToriLogo} />
                        <h5 style={{ marginLeft: "20px" }}>{`${modalMsg9}`}</h5>
                    </div>

                    <div className="pt-3" style={{ float: "right", display: "flex" }}>
                        <button
                            onClick={() => {
                                setmodal9(false);
                            }}
                            style={{
                                height: "34px",
                                fontWeight: "bold",
                                backgroundColor: "red",
                            }}
                            className="btn btn-primary primaryButton"
                        >
                            Close
                        </button>
                    </div>
                </Modal>
            </div>
            <div>
                <Modal
                    isOpen={modal10}
                    onRequestClose={() => {
                        setmodal10(false);
                    }}
                    style={customStyles}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                >
                    <div
                        class="modal-header"
                        style={{
                            borderBottom: 0,
                            padding: 40,
                            paddingBottom: 10,
                            paddingTop: 15,
                        }}
                    >
                        <h5
                            class="modal-title"
                            id="staticBackdropLabel"
                            style={{
                                position: "absolute",
                                left: 25,
                                fontSize: 18,
                                fontWeight: "bold",
                            }}
                        >
                            Tori says
                        </h5>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "20px",
                        }}
                    >
                        <img width={30} height={30} src={ToriLogo} />
                        <h5 style={{ marginLeft: "20px" }}>{`${modalMsg10}`}</h5>
                    </div>

                    <div className="pt-3" style={{ float: "right", display: "flex" }}>
                        <button
                            onClick={() => {
                                setmodal10(false);
                            }}
                            style={{
                                height: "34px",
                                fontWeight: "bold",
                                backgroundColor: "red",
                            }}
                            className="btn btn-primary primaryButton"
                        >
                            Close
                        </button>
                    </div>
                </Modal>
            </div>
            <div>
                <Modal
                    isOpen={modal11}
                    onRequestClose={() => {
                        setmodal11(false);
                    }}
                    style={customStyles}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                >
                    <div
                        class="modal-header"
                        style={{
                            borderBottom: 0,
                            padding: 40,
                            paddingBottom: 10,
                            paddingTop: 15,
                        }}
                    >
                        <h5
                            class="modal-title"
                            id="staticBackdropLabel"
                            style={{
                                position: "absolute",
                                left: 25,
                                fontSize: 18,
                                fontWeight: "bold",
                            }}
                        >
                            Tori says
                        </h5>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "20px",
                        }}
                    >
                        <img width={30} height={30} src={ToriLogo} />
                        <h5 style={{ marginLeft: "20px" }}>{`${modalMsg11}`}</h5>
                    </div>

                    <div className="pt-3" style={{ float: "right", display: "flex" }}>
                        <button
                            onClick={() => {
                                setmodal11(false);
                            }}
                            style={{
                                height: "34px",
                                fontWeight: "bold",
                                backgroundColor: "red",
                            }}
                            className="btn btn-primary primaryButton"
                        >
                            Close
                        </button>
                    </div>
                </Modal>
            </div>
            <div>
                <Modal
                    isOpen={modal12}
                    onRequestClose={() => {
                        setmodal12(false);
                    }}
                    style={customStyles}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                >
                    <div
                        class="modal-header"
                        style={{
                            borderBottom: 0,
                            padding: 40,
                            paddingBottom: 10,
                            paddingTop: 15,
                        }}
                    >
                        <h5
                            class="modal-title"
                            id="staticBackdropLabel"
                            style={{
                                position: "absolute",
                                left: 25,
                                fontSize: 18,
                                fontWeight: "bold",
                            }}
                        >
                            Tori says
                        </h5>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "20px",
                        }}
                    >
                        <img width={30} height={30} src={ToriLogo} />
                        <h5 style={{ marginLeft: "20px" }}>{`${modalMsg12}`}</h5>
                    </div>

                    <div className="pt-3" style={{ float: "right", display: "flex" }}>
                        <button
                            onClick={() => {
                                setmodal12(false);
                            }}
                            style={{
                                height: "34px",
                                fontWeight: "bold",
                                backgroundColor: "red",
                            }}
                            className="btn btn-primary primaryButton"
                        >
                            Close
                        </button>
                    </div>
                </Modal>
            </div>
            <div>
                <Modal
                    isOpen={modal13}
                    onRequestClose={() => {
                        setmodal13(false);
                    }}
                    style={customStyles}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                >
                    <div
                        class="modal-header"
                        style={{
                            borderBottom: 0,
                            padding: 40,
                            paddingBottom: 10,
                            paddingTop: 15,
                        }}
                    >
                        <h5
                            class="modal-title"
                            id="staticBackdropLabel"
                            style={{
                                position: "absolute",
                                left: 25,
                                fontSize: 18,
                                fontWeight: "bold",
                            }}
                        >
                            Tori says
                        </h5>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "20px",
                        }}
                    >
                        <img width={30} height={30} src={ToriLogo} />
                        <h5 style={{ marginLeft: "20px" }}>{`${modalMsg13}`}</h5>
                    </div>

                    <div className="pt-3" style={{ float: "right", display: "flex" }}>
                        <button
                            onClick={() => {
                                setmodal13(false);
                            }}
                            style={{
                                height: "34px",
                                fontWeight: "bold",
                                backgroundColor: "red",
                            }}
                            className="btn btn-primary primaryButton"
                        >
                            Close
                        </button>
                    </div>
                </Modal>
            </div>
            <div>
                <Modal
                    isOpen={modal14}
                    onRequestClose={() => {
                        setmodal14(false);
                    }}
                    style={customStyles}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                >
                    <div
                        class="modal-header"
                        style={{
                            borderBottom: 0,
                            padding: 40,
                            paddingBottom: 10,
                            paddingTop: 15,
                        }}
                    >
                        <h5
                            class="modal-title"
                            id="staticBackdropLabel"
                            style={{
                                position: "absolute",
                                left: 25,
                                fontSize: 18,
                                fontWeight: "bold",
                            }}
                        >
                            Tori says
                        </h5>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "20px",
                        }}
                    >
                        <img width={30} height={30} src={ToriLogo} />
                        <h5 style={{ marginLeft: "20px" }}>{`${modalMsg14}`}</h5>
                    </div>

                    <div className="pt-3" style={{ float: "right", display: "flex" }}>
                        <button
                            onClick={() => {
                                setmodal14(false);
                            }}
                            style={{
                                height: "34px",
                                fontWeight: "bold",
                                backgroundColor: "red",
                            }}
                            className="btn btn-primary primaryButton"
                        >
                            Close
                        </button>
                    </div>
                </Modal>
            </div>{" "}
        </section>
    );
}

export default PageOne;
