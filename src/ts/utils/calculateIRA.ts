import { Discipline } from "../interfaces/Discipline.js";

export function calculateIRA(completedDisciplines: Discipline[], lockedDisciplines: Discipline[]): number{
  const lockedDisciplinesTotalGrade: number = lockedDisciplines.reduce((total, discipline) =>
    total + discipline.workload, 0);

  const totalWorkload: number = completedDisciplines.reduce((total, discipline) =>
    total + discipline.workload, 0) + lockedDisciplinesTotalGrade;

  const summationDenominator: number = completedDisciplines.reduce((total, disciplina) =>
    total + disciplina.workload * Math.min(disciplina.semester, 6), 0);

  const summationNumerator: number = completedDisciplines.reduce((total, disciplina) =>
    total + disciplina.workload * Math.min(disciplina.semester, 6) * disciplina.grade, 0);

  return (1 - (0.5 * lockedDisciplinesTotalGrade) / totalWorkload) * (summationNumerator / summationDenominator);
}
