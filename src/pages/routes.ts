export const routes = {
  main: '/',
  personalAccount: '/personal-account/*',
  personalAccountAllResumes: '/all-resumes',
  personalAccountMyVacancies: '/my-vacancies',
  personalAccountMessages: '/messages',
  personalAccountSettings: '/settings',
  allVacancies: '/all-vacancies',
  allResumes: '/all-resumes',
  resume: (resumeId: string) => `/all-resumes/${resumeId}`,
}
