var demoModel = localStorage.getItem("DemoModels")
var introModel = localStorage.getItem("IntroModels")
var outroModel = localStorage.getItem("OutroModels")
// import { bsaeUrl } from './envoirment'

let demoModelName = "davinci:ft-ai-derivatives-2022-08-02-07-54-09"

export function scriptOne(pName, pName2, useCase, Indursty, Protagonist, BO1, extra, demo2, demo3, Lob1) {
    let API_KEY_GET = localStorage.getItem("API_key")
    let productNameTwo = pName2 == "" ? "" : " and " + pName2
    let finalProduct = pName + productNameTwo

    const finalSentence = Protagonist && Protagonist.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    let finalDemo = extra + " " + demo2 + " " + demo3
    let PNAME = finalProduct.trim();
    let USECASE = useCase && useCase.trim();
    let INDUSRTY = Indursty;
    let PROTAGONIST = finalSentence && finalSentence.trim();

    var US = USECASE == "" ? "nan" : USECASE
    var IN = INDUSRTY == null ? "X-Industry" : INDUSRTY;
    var PN = PROTAGONIST == "" ? "nan" : PROTAGONIST;

    var new1 = Lob1 && Lob1.slice(0, 1)[0] == null ? "nan" : Lob1 && Lob1.slice(0, 1)[0]
    var new2 = Lob1 && Lob1.slice(1, 2)[0] == null ? "nan" : Lob1 && Lob1.slice(1, 2)[0]
    var new3 = Lob1 && Lob1.slice(2, 3)[0] == null ? "nan" : Lob1 && Lob1.slice(2, 3)[0]



    var body = JSON.stringify({
        "prompt": "PN:" + " " + PNAME + " " + "$ Industry:" + " " + IN + " " + "$ Summary:" + " " + US + " " + "$ Line of Business 1:" + " " + new1 + " " + "$ Line of Business 2:" + " " + new2 + " " + "$ Line of Business 3:" + " " + new3 + " " + "$ Protagonist:" + " " + PN + " " + "$ BO: " + BO1 + " " + "$ Demo:" + " " + finalDemo + " " + "\n\n###\n\n",
        "model": demoModelName,
        "temperature": 0.8,
        "max_tokens": 1000,
        "best_of": 3,
        "stop": "END",
        "n": 2,
        "frequency_penalty": 0.00
    })

    return new Promise((resolve, reject) => {
        fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            body: body,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + API_KEY_GET,
                "OpenAI-Organization": "org-uAm5KJBKbuyoDzkPF6r67bFB",
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {

                resolve(responseJson);
            })
            .catch((error) => {

                reject(error);
            });
    });
}
export function scriptTwo(pName, pName2, useCase, Indursty, Protagonist, SBO2, extra2, demo2, demo3, Lob2) {
    let API_KEY_GET = localStorage.getItem("API_key")
    let productNameTwo = pName2 == "" ? "" : " and " + pName2
    let finalProduct = pName + productNameTwo

    const finalSentence = Protagonist && Protagonist.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    let finalDemo = extra2 + " " + demo2 + " " + demo3
    let PNAME = finalProduct && finalProduct.trim();
    let USECASE = useCase && useCase.trim();
    let INDUSRTY = Indursty;
    let PROTAGONIST = finalSentence && finalSentence.trim();

    var US = USECASE == "" ? "nan" : USECASE
    var IN = INDUSRTY == null ? "X-Industry" : INDUSRTY;
    var PN = PROTAGONIST == "" ? "nan" : PROTAGONIST;

    var new1 = Lob2.slice(0, 1)[0] == null ? "nan" : Lob2.slice(0, 1)[0]
    var new2 = Lob2.slice(1, 2)[0] == null ? "nan" : Lob2.slice(1, 2)[0]
    var new3 = Lob2.slice(2, 3)[0] == null ? "nan" : Lob2.slice(2, 3)[0]

    var body = JSON.stringify({
        "prompt": "PN:" + " " + PNAME + " " + "$ Industry:" + " " + IN + " " + "$ Summary:" + " " + US + " " + "$ Line of Business 1:" + " " + new1 + " " + "$ Line of Business 2:" + " " + new2 + " " + "$ Line of Business 3:" + " " + new3 + " " + "$ Protagonist:" + " " + PN + " " + "$ BO: " + SBO2 + " " + "$ Demo:" + " " + finalDemo + " " + "\n\n###\n\n",
        "model": demoModelName,
        "temperature": 0.8,
        "max_tokens": 1000,
        "best_of": 3,
        "stop": "END",
        "n": 2,
        "frequency_penalty": 0.00
    })

    return new Promise((resolve, reject) => {
        fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            body: body,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + API_KEY_GET,
                "OpenAI-Organization": "org-uAm5KJBKbuyoDzkPF6r67bFB",
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {

                resolve(responseJson);
            })
            .catch((error) => {

                reject(error);
            });
    });
}
export function scriptThree(pName, pName2, useCase, Indursty, Protagonist, SBO3, extra3, demo2, demo3, Lob3) {
    let API_KEY_GET = localStorage.getItem("API_key")
    let productNameTwo = pName2 == "" ? "" : " and " + pName2
    let finalProduct = pName + productNameTwo

    const finalSentence = Protagonist && Protagonist.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    let finalDemo = extra3 + " " + demo2 + " " + demo3
    let PNAME = finalProduct && finalProduct.trim();
    let USECASE = useCase && useCase.trim();
    let INDUSRTY = Indursty;
    let PROTAGONIST = finalSentence && finalSentence.trim();

    var US = USECASE == "" ? "nan" : USECASE
    var IN = INDUSRTY == null ? "X-Industry" : INDUSRTY;
    var PN = PROTAGONIST == "" ? "nan" : PROTAGONIST;

    var new1 = Lob3.slice(0, 1)[0] == null ? "nan" : Lob3.slice(0, 1)[0]
    var new2 = Lob3.slice(1, 2)[0] == null ? "nan" : Lob3.slice(1, 2)[0]
    var new3 = Lob3.slice(2, 3)[0] == null ? "nan" : Lob3.slice(2, 3)[0]

    var body = JSON.stringify({
        "prompt": "PN:" + " " + PNAME + " " + "$ Industry:" + " " + IN + " " + "$ Summary:" + " " + US + " " + "$ Line of Business 1:" + " " + new1 + " " + "$ Line of Business 2:" + " " + new2 + " " + "$ Line of Business 3:" + " " + new3 + " " + "$ Protagonist:" + " " + PN + " " + "$ BO: " + SBO3 + " " + "$ Demo:" + " " + finalDemo + " " + "\n\n###\n\n",
        "model": demoModelName,
        "temperature": 0.8,
        "max_tokens": 1000,
        "best_of": 3,
        "stop": "END",
        "n": 2,
        "frequency_penalty": 0.00
    })
    return new Promise((resolve, reject) => {
        fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            body: body,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + API_KEY_GET,
                "OpenAI-Organization": "org-uAm5KJBKbuyoDzkPF6r67bFB",
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {

                resolve(responseJson);
            })
            .catch((error) => {

                reject(error);
            });
    });
}
export function scriptFour(pName, pName2, useCase, Indursty, Protagonist, SBO3, extra3, demo2, demo3, Lob4) {
    let API_KEY_GET = localStorage.getItem("API_key")
    let productNameTwo = pName2 == "" ? "" : " and " + pName2
    let finalProduct = pName + productNameTwo

    const finalSentence = Protagonist && Protagonist.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    let finalDemo = extra3 + " " + demo2 + " " + demo3

    let PNAME = finalProduct && finalProduct.trim();
    let USECASE = useCase && useCase.trim();
    let INDUSRTY = Indursty;
    let PROTAGONIST = finalSentence && finalSentence.trim();

    var US = USECASE == "" ? "nan" : USECASE
    var IN = INDUSRTY == null ? "X-Industry" : INDUSRTY;
    var PN = PROTAGONIST == "" ? "nan" : PROTAGONIST;

    var new1 = Lob4.slice(0, 1)[0] == null ? "nan" : Lob4.slice(0, 1)[0]
    var new2 = Lob4.slice(1, 2)[0] == null ? "nan" : Lob4.slice(1, 2)[0]
    var new3 = Lob4.slice(2, 3)[0] == null ? "nan" : Lob4.slice(2, 3)[0]

    var body = JSON.stringify({
        "prompt": "PN:" + " " + PNAME + " " + "$ Industry:" + " " + IN + " " + "$ Summary:" + " " + US + " " + "$ Line of Business 1:" + " " + new1 + " " + "$ Line of Business 2:" + " " + new2 + " " + "$ Line of Business 3:" + " " + new3 + " " + "$ Protagonist:" + " " + PN + " " + "$ BO: " + SBO3 + " " + "$ Demo:" + " " + finalDemo + " " + "\n\n###\n\n",
        "model": demoModelName,
        "temperature": 0.8,
        "max_tokens": 1000,
        "best_of": 3,
        "stop": "END",
        "n": 2,
        "frequency_penalty": 0.00
    })
    return new Promise((resolve, reject) => {
        fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            body: body,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + API_KEY_GET,
                "OpenAI-Organization": "org-uAm5KJBKbuyoDzkPF6r67bFB",
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {

                resolve(responseJson);
            })
            .catch((error) => {

                reject(error);
            });
    });
}
export function FinalOutPut(pName1, pName2, useCase1, Indursty1, Protagonist1, BO1, SBO2, SBO3, SBO4, extra1, demo12, demo13, extra2, demo22, demo23, extra3, demo32, demo33, extra4, demo42, demo43, Lob1) {
    let API_KEY_GET = localStorage.getItem("API_key")
    let productNameTwo = pName2 == "" ? "" : " and " + pName2
    let finalProduct = pName1 + productNameTwo

    let finalDemo1 = extra1 + " " + demo12 + " " + demo13
    let finalDemo2 = extra2 + " " + demo22 + " " + demo23
    let finalDemo3 = extra3 + " " + demo32 + " " + demo33
    let finalDemo4 = extra4 + " " + demo42 + " " + demo43

    let PNAME = finalProduct && finalProduct.trim();
    let USECASE = useCase1 && useCase1.trim();
    let INDUSRTY = Indursty1;
    let Bo1 = BO1 && BO1.trim();
    let Bo2 = SBO2 && SBO2.trim();
    let Bo3 = SBO3 && SBO3.trim();
    let Bo4 = SBO4 && SBO4.trim();
    let D1 = finalDemo1 && finalDemo1.trim();
    let D2 = finalDemo2 && finalDemo2.trim();
    let D3 = finalDemo3 && finalDemo3.trim();
    let D4 = finalDemo4 && finalDemo4.trim();

    var PN = PNAME == "" ? "nan" : PNAME
    var US = USECASE == "" ? "nan" : USECASE
    var IN = INDUSRTY == null ? "X-Industry" : INDUSRTY
    var BoONE = Bo1 == "" ? "nan" : Bo1
    var BoTWO = Bo2 == "" ? "nan" : Bo2
    var BoThree = Bo3 == "" ? "nan" : Bo3
    var BoFour = Bo4 == "" ? "nan" : Bo4
    var DEMO1 = D1 == "" ? "nan" : D1
    var DEMO2 = D2 == "" ? "nan" : D2
    var DEMO3 = D3 == "" ? "nan" : D3
    var DEMO4 = D4 == "" ? "nan" : D4

    var new1 = Lob1 != "" ? Lob1.slice(0, 1)[0] == null ? "nan" : Lob1.slice(0, 1)[0] : "nan"
    var new2 = Lob1 != "" ? Lob1.slice(1, 2)[0] == null ? "nan" : Lob1.slice(1, 2)[0] : "nan"
    var new3 = Lob1 != "" ? Lob1.slice(2, 3)[0] == null ? "nan" : Lob1.slice(2, 3)[0] : "nan"

    var body = JSON.stringify({

        "prompt": "PN:" + " " + PN + " " + "$ Industry:" + " " + IN + " $ Summary:" + " " + US + " " + "$ Line of Business 1:" + " " + new1 + " " + "$ Line of Business 2:" + " " + new2 + " " + "$ Line of Business 3:" + " " + new3 + " " + "$ BO-1:" + " " + BoONE + " " + "$ Demo-1: " + DEMO1 + " " + "$ BO-2:" + " " + BoTWO + " " + "$ Demo-2: " + DEMO2 + " " + "$ BO-3: " + BoThree + " " + "$ Demo-3: " + DEMO3 + " " + "$ BO-4: " + BoFour + " " + "$ Demo-4: " + DEMO4 + " \n\n###\n\n",
        "model": "davinci:ft-ai-derivatives-2022-08-02-12-47-15",
        "temperature": 0.7,
        "max_tokens": 1000,
        "stop": "END",
        "n": 2
    })

    return new Promise((resolve, reject) => {
        fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            body: body,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + API_KEY_GET,
                "OpenAI-Organization": "org-uAm5KJBKbuyoDzkPF6r67bFB",
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {

                resolve(responseJson);
            })
            .catch((error) => {

                reject(error);
            });
    });

}
export function FinalOutro(pName1, pName2, useCase1, intro, BO1, SBO2, SBO3, SBO4) {
    let API_KEY_GET = localStorage.getItem("API_key")

    let productNameTwo = pName2 == "" ? "" : " and " + pName2
    let finalProduct = pName1 + productNameTwo

    let PNAME = finalProduct && finalProduct.trim();
    let USECASE = useCase1 && useCase1.trim();

    var PN = PNAME == "" ? "nan" : PNAME
    var US = USECASE == "" ? "nan" : USECASE
    var IN = intro == "" ? "nan" : intro

    var body = JSON.stringify({
        "prompt": "PN: " + PN + " " + "$ Summary: " + US + " " + "$ Intro: " + IN + " \n\n###\n\n",
        "model": "davinci:ft-ai-derivatives-2022-07-27-13-20-07",
        "temperature": 0.9,
        "stop": "END",
        "n": 2
    })

    return new Promise((resolve, reject) => {
        fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            body: body,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + API_KEY_GET,
                "OpenAI-Organization": "org-uAm5KJBKbuyoDzkPF6r67bFB",
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {

                resolve(responseJson);
            })
            .catch((error) => {

                reject(error);
            });
    });
}

export function verbs(BO1) {
    var body = JSON.stringify({
        "BO": BO1
    })
    return new Promise((resolve, reject) => {
        fetch("https://oe0golgl24.execute-api.us-west-2.amazonaws.com/beta/sap_bo", {
            method: "POST",
            body: body,
            headers: { "Content-type": "application/json" }
        })
            .then((response) => response.json())
            .then((responseJson) => {

                resolve(responseJson);
            })
            .catch((error) => {

                reject(error);
            });
    });
}
export function gettingDemo(pName, pName2, Indursty, Lob1) {
    let productNameTwo = pName2 == "" ? "" : "and" + pName2
    let finalProduct = pName + productNameTwo

    var new1 = Lob1.slice(0, 1)[0] == null ? "nan" : Lob1.slice(0, 1)[0]

    var IN = Indursty == null ? "X-Industry" : Indursty;
    var PN = finalProduct == "" ? "nan" : finalProduct;

    var body = JSON.stringify({
        "Product_Industry_lob": PN + "_" + IN + "_" + new1
        // "Product_Industry_lob": "SAP Experience Management_Utilities_nan"
    })

    return new Promise((resolve, reject) => {
        fetch("https://8bmy2kh5q0.execute-api.us-west-2.amazonaws.com/key-points", {
            method: "POST",
            body: body,
            headers: { "Content-type": "application/json" }
        })
            .then((response) => response.json())
            .then((responseJson) => {

                resolve(responseJson);
            })
            .catch((error) => {

                reject(error);
            });
    });
}
export function SaveScripts(pName, pName2, useCase, Indursty, Protagonist, BO1, SBO2, SBO3, SBO4, Demo1, Demo2, Demo3, Demo4, protagnist2, protagnist3, protagnist4, extra, extra2, extra3, extra4, newIntro, extrasss5, newOutro, extrasss, extrasss2, extrasss3, extrasss4, extrasss6, Lob1) {
    let productNameTwo = pName2 == "" ? "" : "and" + pName2
    let finalProduct = pName + productNameTwo

    var new1 = Lob1 != "" ? Lob1.slice(0, 1)[0] == null ? "nan" : Lob1.slice(0, 1)[0] : ""
    var new2 = Lob1 != "" ? Lob1.slice(1, 2)[0] == null ? "nan" : Lob1.slice(1, 2)[0] : ""
    var new3 = Lob1 != "" ? Lob1.slice(2, 3)[0] == null ? "nan" : Lob1.slice(2, 3)[0] : ""

    var body = JSON.stringify({
        "Ind": Indursty == null ? "X-Industry" : Indursty,
        "PN": finalProduct.trim(),
        "Summary": useCase.trim(),
        "LOB1": new1,
        "LOB2": new2,
        "LOB3": new3,
        "Intro": extrasss5 == "" ? newIntro.trim() : extrasss5.trim(),
        "Protagonist_1": Protagonist.trim(),
        "BO_1": BO1.trim(),
        "Demo_1": extrasss == "" ? extra.trim() : extrasss.trim(),
        "Demo_1_key_points": Demo1.trim(),
        "Protagonist_2": protagnist2.trim(),
        "BO_2": SBO2.trim(),
        "Demo_2": extrasss2 == "" ? extra2.trim() : extrasss2.trim(),
        "Demo_2_key_points": Demo2.trim(),
        "Protagonist_3": protagnist3.trim(),
        "BO_3": SBO3.trim(),
        "Demo_3": extrasss3 == "" ? extra3.trim() : extrasss3.trim(),
        "Demo_3_key_points": Demo3.trim(),
        "Protagonist_4": protagnist4.trim(),
        "BO_4": SBO4.trim(),
        "Demo_4": extrasss4 == "" ? extra4.trim() : extrasss4.trim(),
        "Demo_4_key_points": Demo4.trim(),
        "Outro": extrasss6 == "" ? newOutro.trim() : extrasss6.trim(),
    })
    return new Promise((resolve, reject) => {
        fetch("/api/storeScripts", {
            method: "POST",
            body: body,
            headers: { "Content-type": "application/json" }
        })
            .then((response) => response.json())
            .then((responseJson) => {

                resolve(responseJson);
            })
            .catch((error) => {

                reject(error);
            });
    });
}
export function GraphsData() {

    return new Promise((resolve, reject) => {
        fetch("https://dev-tori.aidevlab.com/api/readScripts", {
            method: "GET",
            headers: { "Content-type": "application/json" }
        })
            .then((response) => response.json())
            .then((responseJson) => {

                resolve(responseJson);
            })
            .catch((error) => {

                reject(error);
            });
    });
}