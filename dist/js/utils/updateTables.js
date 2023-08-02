export function updateCompletedDisciplinesTable(completedDisciplines) {
    const tableBody = document.getElementById("completedDisciplinesTableItems");
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
    });
}
export function updateLockedDisciplinesTable(lockedDisciplines) {
    const tableBody = document.getElementById("lockedDisciplinesTableItems");
    tableBody.innerHTML = "";
    lockedDisciplines.forEach(item => {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
      <td>${item.name}</td>
      <td>${item.workload}h</td>
    `;
        tableBody.appendChild(newRow);
    });
}
