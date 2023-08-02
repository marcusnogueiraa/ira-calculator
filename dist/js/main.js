import { calculateIRA } from "./utils/calculateIRA.js";
import { getOrCreateResultAlert, getOrCreateErrorAlert } from "./utils/getOrCreateAlert.js";
import { updateCompletedDisciplinesTable, updateLockedDisciplinesTable } from "./utils/updateTables.js";
const completedDisciplines = [];
const lockedDisciplines = [];
document.getElementById("completedDisciplinesFormItem").addEventListener("submit", function (event) {
    event.preventDefault();
    const form = event.target;
    const semester = parseInt(form.elements["semester"].value);
    const name = form.elements["name"].value || "Alguma Disciplina";
    const grade = parseFloat(form.elements["grade"].value);
    const workload = parseInt(form.elements["workload"].value);
    const itemObj = {
        semester,
        name,
        grade,
        workload
    };
    completedDisciplines.push(itemObj);
    updateCompletedDisciplinesTable(completedDisciplines);
    form.reset();
});
document.getElementById("lockedDisciplinesFormItem").addEventListener("submit", function (event) {
    event.preventDefault();
    const form = event.target;
    const name = form.elements["name"].value || "Alguma Disciplina";
    const workload = parseInt(form.elements["workload"].value);
    const itemObj = {
        semester: undefined,
        name,
        grade: undefined,
        workload
    };
    lockedDisciplines.push(itemObj);
    updateLockedDisciplinesTable(lockedDisciplines);
    form.reset();
});
document.getElementById("calc-btn").addEventListener("click", function (event) {
    event.preventDefault();
    if (completedDisciplines.length === 0)
        getOrCreateErrorAlert("Você precisa adicionar alguma disciplina!");
    else {
        const alert = getOrCreateResultAlert();
        alert.innerText = calculateIRA(completedDisciplines, lockedDisciplines).toString();
    }
});
