export function getOrCreateResultAlert() {
    let resultAlert = document.getElementById("calcAlert");
    if (resultAlert == null) {
        resultAlert = document.createElement("div");
        resultAlert.id = "calcAlert";
        resultAlert.role = "alert";
        const iraContentDiv = document.getElementById("ira-content");
        iraContentDiv.appendChild(resultAlert);
    }
    resultAlert.classList.add("alert", "alert-primary");
    resultAlert.classList.remove("alert-danger");
    return resultAlert;
}
export function getOrCreateErrorAlert(errorMessage) {
    let errorAlert = document.getElementById("calcAlert");
    if (errorAlert == null) {
        errorAlert = document.createElement("div");
        errorAlert.id = "calcAlert";
        errorAlert.role = "alert";
        const iraContentDiv = document.getElementById("ira-content");
        iraContentDiv.appendChild(errorAlert);
    }
    errorAlert.classList.add("alert", "alert-danger");
    errorAlert.classList.remove("alert-primary");
    errorAlert.innerText = errorMessage;
    return errorAlert;
}
