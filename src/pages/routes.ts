export const routes = {
  main: '/',
  allVacancies: '/all-vacancies',
  allResumes: '/all-resumes',
  resume: (resumeId: string) => `/all-resumes/${resumeId}`,
}
