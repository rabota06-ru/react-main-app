const routesTree = {
  main: {
    path: '/',
    nested: {},
  },
  personalAccount: {
    path: '/personal-account',
    nested: {
      allResumes: {
        path: '/all-resumes',
        nested: {},
      },
      myVacancies: {
        path: '/my-vacancies',
        nested: {},
      },
      messages: {
        path: '/messages',
        nested: {
          chat: {
            path: (chatId: string) => `/${chatId}`,
            nested: {},
          },
        },
      },
      settings: {
        path: '/settings',
        nested: {},
      },
    },
  },
  allVacancies: {
    path: '/all-vacancies',
    nested: {},
  },
  allResumes: {
    path: '/all-resumes',
    nested: {
      resume: {
        path: (resumeId: string) => `/:${resumeId}`,
        nested: {},
      },
    },
  },
  createVacancy: {
    path: '/create-vacancy',
    nested: {},
  },
  createResume: {
    path: '/create-resume',
    nested: {},
  },
}

type Routes = {
  [Route in string]: {
    path: string | ((...args: any[]) => string)
    nested: Routes
  }
}

type GeneratedRoutes<T extends Routes> = {
  [Route in keyof T]: {
    exact: T[Route]['path']
    inexact: T[Route]['path']
    absoluteExact: T[Route]['path']
    absoluteInexact: T[Route]['path']
    nested: GeneratedRoutes<T[Route]['nested']>
  }
}

function generateRoutes<T extends Routes>(routes: T, parentPath: string): GeneratedRoutes<T> {
  return Object.entries(routes).reduce((r, [route, { path, nested }]) => {
    r[route as keyof T] = {
      exact: path,
      inexact: `${path}/*`,
      absoluteExact: `${parentPath}${path}`,
      absoluteInexact: `${parentPath}${path}/*`,
      nested: generateRoutes(nested, `${parentPath}${path}`),
    }

    return r
  }, {} as GeneratedRoutes<T>)
}
console.log(generateRoutes(routesTree, ''))

export const routes = generateRoutes(routesTree, '')
