import { Discipline } from "../interfaces/Discipline.js";

export function updateCompletedDisciplinesTable(completedDisciplines: Discipline[]){
  const tableBody: HTMLElement = document.getElementById("completedDisciplinesTableItems");
  tableBody.innerHTML = "";

  completedDisciplines.forEach(item => {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${item.semester}</td>
      <td>${item.name}</td>
      <td>${item.grade}</td>
      <td>${item.workload}h</td>
    `;
    tableBody.appendChild(newRow);
  })

}

export function updateLockedDisciplinesTable(lockedDisciplines: Discipline[]){
  const tableBody: HTMLElement = document.getElementById("lockedDisciplinesTableItems");
  tableBody.innerHTML = "";

  lockedDisciplines.forEach(item => {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${item.name}</td>
      <td>${item.workload}h</td>
    `;
    tableBody.appendChild(newRow);
  })

}
