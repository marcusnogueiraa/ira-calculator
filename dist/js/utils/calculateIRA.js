export function calculateIRA(completedDisciplines, lockedDisciplines) {
    const lockedDisciplinesTotalGrade = lockedDisciplines.reduce((total, discipline) => total + discipline.workload, 0);
    const totalWorkload = completedDisciplines.reduce((total, discipline) => total + discipline.workload, 0) + lockedDisciplinesTotalGrade;
    const summationDenominator = completedDisciplines.reduce((total, disciplina) => total + disciplina.workload * Math.min(disciplina.semester, 6), 0);
    const summationNumerator = completedDisciplines.reduce((total, disciplina) => total + disciplina.workload * Math.min(disciplina.semester, 6) * disciplina.grade, 0);
    return (1 - (0.5 * lockedDisciplinesTotalGrade) / totalWorkload) * (summationNumerator / summationDenominator);
}
