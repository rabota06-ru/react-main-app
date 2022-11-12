// type Routes = Record<Paths, Route<string | ((...args: any[]) => string)>>

export interface Route<T extends 'str' | 'func' = 'str'> {
  exact: T extends 'str' ? string : (...args: any[]) => string
  inexact: T extends 'str' ? string : (...args: any[]) => string
  absoluteExact: T extends 'str' ? string : (...args: any[]) => string
  absoluteInexact: T extends 'str' ? string : (...args: any[]) => string
}

export const routes = {
  main: {
    exact: '/',
    inexact: '/*',
    absoluteExact: '/',
    absoluteInexact: '/*',
  },
  personalAccount: {
    exact: '/personal-account',
    inexact: '/personal-account/*',
    absoluteExact: '/personal-account',
    absoluteInexact: '/personal-account/*',
  },
  personalAccountAllResumes: {
    exact: '/all-resumes',
    inexact: '/all-resumes/*',
    absoluteExact: '/personal-account/all-resumes',
    absoluteInexact: '/personal-account/all-resumes/*',
  },
  personalAccountMyVacancies: {
    exact: '/my-vacancies',
    inexact: '/my-vacancies/*',
    absoluteExact: '/personal-account/my-vacancies',
    absoluteInexact: '/personal-account/my-vacancies/*',
  },
  personalAccountMessages: {
    exact: '/messages',
    inexact: '/messages/*',
    absoluteExact: '/personal-account/messages',
    absoluteInexact: '/personal-account/messages/*',
  },
  personalAccountChat: {
    exact: (profileId: string) => `/messages/${profileId}`,
    inexact: (profileId: string) => `/messages/${profileId}*`,
    absoluteExact: (profileId: string) => `/personal-account/messages/${profileId}`,
    absoluteInexact: (profileId: string) => `/personal-account/messages/${profileId}/*`,
  },
  personalAccountSettings: {
    exact: '/settings',
    inexact: '/settings/*',
    absoluteExact: '/personal-account/settings',
    absoluteInexact: '/personal-account/settings/*',
  },
  allVacancies: {
    exact: '/all-vacancies',
    inexact: '/all-vacancies/*',
    absoluteExact: '/personal-account/all-vacancies',
    absoluteInexact: '/personal-account/all-vacancies/*',
  },
  allResumes: {
    exact: '/all-resumes',
    inexact: '/all-resumes/*',
    absoluteExact: '/personal-account/all-resumes',
    absoluteInexact: '/personal-account/all-resumes/*',
  },
  resume: {
    exact: (resumeId: string) => `/all-resumes/${resumeId}`,
    inexact: (resumeId: string) => `/all-resumes/${resumeId}/*`,
    absoluteExact: (resumeId: string) => `/personal-account/all-resumes/${resumeId}`,
    absoluteInexact: (resumeId: string) => `/personal-account/all-resumes/${resumeId}/*`,
  },
}
