// import { bsaeUrl } from '../envoirment'


const BaseUrl = "https://dev-tori.aidevlab.com"
export function Login(email, password) {
    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/login", {
            method: "POST",
            body: JSON.stringify({ email: email, password: password }),
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export function SignUp(name, email, password) {
    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/signup", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
            }),
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export function ClearDraft(draft_id) {
    let token = localStorage.getItem("token");

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/clear-draft-data", {
            method: "POST",
            body: JSON.stringify({
                draft_id
            }),
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {

                resolve(response.json());

            })
            .catch((error) => {
                reject(error);
            });
    });
}
export function GetUserData() {
    let token = localStorage.getItem("token");

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/getUserDetail", {
            method: "GET",
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}

export function DeleteComment(id) {
    let token = localStorage.getItem("token");

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/delete-comment", {
            method: "POST",
            body: JSON.stringify({ id: id }),
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export function ClearAllComment(id, name) {
    let token = localStorage.getItem("token");

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/close-comments", {
            method: "POST",
            body: JSON.stringify({ id: id, section: name }),
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}

export function GetDraftData(myDraftVal, shareVal) {
    let token = localStorage.getItem("token");

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/getDrafts", {
            method: "POST",
            body: JSON.stringify({ user: myDraftVal, shared: shareVal }),
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export function GetEditingDraftData(myDraftVal, shareVal) {
    let token = localStorage.getItem("token");

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/getEditingDrafts", {
            method: "POST",
            body: JSON.stringify({ user: myDraftVal, shared: shareVal }),
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export function GetFeedBackDraftData(myDraftVal, shareVal) {
    let token = localStorage.getItem("token");

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/get-feedback-drafts", {
            method: "POST",
            body: JSON.stringify({ user: myDraftVal, shared: shareVal }),
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export function GetSavedDraftDetails() {
    let token = localStorage.getItem("token");
    let id = localStorage.getItem("draftId");

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/getDraftById", {
            method: "POST",
            body: JSON.stringify({ id: id }),
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export function GetSavedDraftEditingDetails() {
    let token = localStorage.getItem("token");
    let id = localStorage.getItem("getDraftEditingbyid");

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/getDraftById", {
            method: "POST",
            body: JSON.stringify({ id: id }),
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export function GetSavedDraftFinalReview() {
    let token = localStorage.getItem("token");
    let id = localStorage.getItem("getDraftFinalReviewbyid");

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/getDraftById", {
            method: "POST",
            body: JSON.stringify({ id: id }),
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export function MovetoEditing(id) {
    let token = localStorage.getItem("token");

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/moveDraftToEditing", {
            method: "POST",
            body: JSON.stringify({ id: id }),
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export function DeleteDraft(id) {
    let token = localStorage.getItem("token");

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/deleteDraft", {
            method: "POST",
            body: JSON.stringify({ id: id }),
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export function DeleteDraftFinalReview(id) {
    let token = localStorage.getItem("token");

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/delete-final-review-draft", {
            method: "POST",
            body: JSON.stringify({ id: id }),
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export function DeleteDraftFeedBack(id) {
    let token = localStorage.getItem("token");

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/delete-feedback-draft", {
            method: "POST",
            body: JSON.stringify({ id: id }),
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export function DeleteDraftCopyWrite(id) {
    let token = localStorage.getItem("token");

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/delete-copywriter-draft", {
            method: "POST",
            body: JSON.stringify({ id: id }),
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export function AddDraft() {
    let token = localStorage.getItem("token");
    // var new1 = Lob1.slice(0, 1)[0] == null ? "" : Lob1.slice(0, 1)[0] + ","
    // var new2 = Lob1.slice(1, 2)[0] == null ? "" : Lob1.slice(1, 2)[0] + ","
    // var new3 = Lob1.slice(2, 3)[0] == null ? "" : Lob1.slice(2, 3)[0]
    // var IN = industry == "" ? "X-Industry" : industry.slice(0, 1)[0];

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/createDraft", {
            method: "POST",
            // body: JSON.stringify({ type: "spotlight", video_name: videoName, industry: IN, line_of_business: new1 + new2 + new3, first_product_name: pName, description: useCase }),
            body: JSON.stringify({ type: "spotlight" }),
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}

export function SaveDraftState(
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
) {
    var new1 = Lob1.slice(0, 1)[0] == null ? "" : Lob1.slice(0, 1)[0] + ",";
    var new2 = Lob1.slice(1, 2)[0] == null ? "" : Lob1.slice(1, 2)[0] + ",";
    var new3 = Lob1.slice(2, 3)[0] == null ? "" : Lob1.slice(2, 3)[0];
    var IN = Indursty == null ? "X-Industry" : Indursty;

    let token = localStorage.getItem("token");
    let id = localStorage.getItem("draftId");
    var bodyDate = JSON.stringify({
        id: id,
        video_name: VideoName,
        first_product_name: pName,
        first_product_url: firstProductUrl,
        second_product_name: pName2,
        second_product_url: SecondProductUrl,
        third_product_name: "",
        third_product_url: "",
        industry: IN,
        line_of_business: new1 + new2 + new3,
        domain: Domain,
        description: useCase,
        role1: Protagonist,
        business_outcomes: BO1,
        demo_keypoint_one: Demo1,
        demo_keypoint_two: Demo2,
        demo_keypoint_three: Demo3,
        demo_keypoint_four: Demo4,
        role2: protagnist2,
        role3: protagnist3,
        role4: protagnist4,
        selected_demo_one: extrasss || extra,
        business_outcomes_two: SBO2,
        selected_demo_two: extrasss2 || extra2,
        business_outcomes_three: SBO3,
        selected_demo_three: extrasss3 || extra3,
        business_outcomes_four: SBO4,
        selected_demo_four: extrasss4 || extra4,
        intro: extrasss5 || newIntro,
        intro_solution: newIntro2,
        outro: extrasss6 || newOutro,
    });

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/stateSave", {
            method: "POST",
            body: bodyDate,
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export function SaveScriptInEditing(
    intro,
    bo1,
    bo2,
    bo3,
    bo4,
    demo1,
    demo2,
    demo3,
    demo4,
    outro
) {
    let token = localStorage.getItem("token");
    let id = localStorage.getItem("getDraftEditingbyid");
    var bodyDate = JSON.stringify({
        id: id,
        selected_demo_one: demo1,
        selected_demo_two: demo2,
        selected_demo_three: demo3,
        selected_demo_four: demo4,
        business_outcomes: bo1,
        business_outcomes_two: bo2,
        business_outcomes_three: bo3,
        business_outcomes_four: bo4,
        intro: intro,
        outro: outro,
    });

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/state-save-feedback", {
            method: "POST",
            body: bodyDate,
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}

export function GetAllUsers() {
    let token = localStorage.getItem("token");

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/getAllUsers", {
            method: "GET",
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export function ApprovedDraftList() {
    let token = localStorage.getItem("token");

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/get-approved-drafts", {
            method: "GET",
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export function InviteUser(userName, email, lastName, role, permission) {
    let token = localStorage.getItem("token");

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/addUser", {
            method: "POST",
            body: JSON.stringify({
                first_name: userName,
                last_name: lastName,
                email: email,
                role: role,
                permission: permission,
            }),
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export function ApproveDraft() {
    let token = localStorage.getItem("token");
    let id = localStorage.getItem("getDraftFinalReviewbyid");

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/approve-draft", {
            method: "POST",
            body: JSON.stringify({ id: id }),
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export function SetPassword(password, confirm_password) {
    let token = localStorage.getItem("token");

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/resetPassword", {
            method: "POST",
            body: JSON.stringify({
                password: password,
                confirm_password: confirm_password,
            }),
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export function ForgotPass(email) {
    let token = localStorage.getItem("token");

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/forgotPassword", {
            method: "POST",
            body: JSON.stringify({ email: email }),
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export function DeleteUser(id) {
    let token = localStorage.getItem("token");

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/deleteUser", {
            method: "POST",
            body: JSON.stringify({ id: id }),
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export function ChangePermission(id, permission) {
    let token = localStorage.getItem("token");

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/changeUserPermission", {
            method: "POST",
            body: JSON.stringify({ id: id, permission: permission }),
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export function ChangeName(id, name) {
    let token = localStorage.getItem("token");

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/updateUser", {
            method: "POST",
            body: JSON.stringify({ id: id, name: name }),
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export function EditDraft(id, name) {
    let token = localStorage.getItem("token");

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/editDraft", {
            method: "POST",
            body: JSON.stringify({ id: id, video_name: name }),
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export function RequestUser(Fname, Lname, email) {
    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/request-user", {
            method: "POST",
            body: JSON.stringify({
                first_name: Fname,
                last_name: Lname,
                email: email,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export function AddComment(comment, section) {
    let id = localStorage.getItem("getDraftEditingbyid");
    let token = localStorage.getItem("token");

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/add-comment", {
            method: "POST",
            body: JSON.stringify({
                draft_id: id,
                comment: comment,
                section: section,
            }),
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export function ShareDraftHubLead(hubLead, draftId) {
    let token = localStorage.getItem("token");

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/move-draft-to-feedback", {
            method: "POST",
            body: JSON.stringify({ hub_lead: hubLead, draft_id: draftId }),
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export function MoveToFeefBack(draftId) {
    let token = localStorage.getItem("token");

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/move-draft-back-to-feedback", {
            method: "POST",
            body: JSON.stringify({ draft_id: draftId }),
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export function DownloadFile() {
    let token = localStorage.getItem("token");
    let id = localStorage.getItem("draftId");


    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/get-draft-data-for-documnet", {
            method: "POST",
            body: JSON.stringify({ draft_id: id }),
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export function MoveToFeefFinalReview(draftId) {
    let token = localStorage.getItem("token");

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/send-draft-for-approval", {
            method: "POST",
            body: JSON.stringify({ id: draftId }),
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export function ShareDraft(UserId, DraftId) {
    let id = localStorage.getItem("getDraftEditingbyid");
    let token = localStorage.getItem("token");

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/share-draft", {
            method: "POST",
            body: JSON.stringify({ user_id: UserId, draft_id: DraftId }),
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export function GetAPIkey() {
    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/getKey", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export function GetUserNameEmail() {
    let token = localStorage.getItem("token");

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/get-users-for-sharing", {
            method: "GET",
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export function GetHubLeadList() {
    let token = localStorage.getItem("token");

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + "/api/get-hub-leads", {
            method: "GET",
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status == 401) {
                    window.location = "/";
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}

export function logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("draftId");
    localStorage.removeItem("OutroModels");
    localStorage.removeItem("IntroModels");
    localStorage.removeItem("DemoModels");
    localStorage.removeItem("queryToken");
    localStorage.removeItem("API_key");
    localStorage.removeItem("role");
    window.location = "/";
}
export function isAuthenticated() {
    if (localStorage.getItem("token") && localStorage.getItem("userName")) {
        return true;
    }
    return false;
}
