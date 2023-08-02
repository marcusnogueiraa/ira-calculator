import { Discipline } from "./interfaces/Discipline.js";
import { calculateIRA } from "./utils/calculateIRA.js";
import { getOrCreateResultAlert, getOrCreateErrorAlert } from "./utils/getOrCreateAlert.js";
import { updateCompletedDisciplinesTable, updateLockedDisciplinesTable } from "./utils/updateTables.js";

const completedDisciplines: Discipline[] = []
const lockedDisciplines: Discipline[] = []

document.getElementById("completedDisciplinesFormItem").addEventListener("submit", function(event){
  event.preventDefault();

  const form = event.target as HTMLFormElement;

  const semester: number = parseInt((form.elements["semester"] as HTMLInputElement).value);
  const name: string = (form.elements["name"] as HTMLInputElement).value || "Alguma Disciplina";
  const grade: number = parseFloat((form.elements["grade"] as HTMLInputElement).value);
  const workload: number = parseInt((form.elements["workload"] as HTMLInputElement).value);

  const itemObj: Discipline = {
    semester,
    name,
    grade,
    workload
  }

  completedDisciplines.push(itemObj);

  updateCompletedDisciplinesTable(completedDisciplines);
  form.reset();
})

document.getElementById("lockedDisciplinesFormItem").addEventListener("submit", function(event){
  event.preventDefault();

  const form = event.target as HTMLFormElement;

  const name: string = (form.elements["name"] as HTMLInputElement).value || "Alguma Disciplina";
  const workload: number = parseInt((form.elements["workload"] as HTMLInputElement).value);

  const itemObj: Discipline = {
    semester: undefined,
    name,
    grade: undefined,
    workload
  }

  lockedDisciplines.push(itemObj);

  updateLockedDisciplinesTable(lockedDisciplines);
  form.reset();
})

document.getElementById("calc-btn").addEventListener("click", function(event){
  event.preventDefault();

  if (completedDisciplines.length === 0) getOrCreateErrorAlert("Você precisa adicionar alguma disciplina!");
  else {
    const alert: HTMLElement = getOrCreateResultAlert();
    alert.innerText = calculateIRA(completedDisciplines, lockedDisciplines).toString();
  }
})


