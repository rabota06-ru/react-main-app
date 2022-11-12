export const routes = {
  main: '/',
  allVacancies: '/all-vacancies',
  allResumes: '/all-resumes',
  createVacancy: '/create-vacancy',
  createResume: '/create-resume',
  resume: (resumeId: string) => `/all-resumes/${resumeId}`,
}
