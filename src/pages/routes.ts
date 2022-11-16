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
          chat: (start: string, end: string) => (chatId: string) => ({
            path: `${start}/${chatId}${end}`,
            nested: {},
          }),
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
      resume: (start: string, end: string) => (resumeId: string) => ({
        path: `${start}/${resumeId}${end}`,
        nested: {},
      }),
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

type RouteObj = {
  path: string
  nested: Routes
}
type RouteFunc = (start: string, end: string) => (...args: any[]) => RouteObj

type Routes = {
  [Route in string]: RouteObj | RouteFunc
}

type GeneratedRoutes<T extends Routes> = {
  [Route in keyof T]: T[Route] extends RouteObj
    ? {
        exact: T[Route]['path']
        inexact: T[Route]['path']
        absoluteExact: T[Route]['path']
        absoluteInexact: T[Route]['path']
        nested: GeneratedRoutes<T[Route]['nested']>
      }
    : T[Route] extends RouteFunc
    ? (...args: Parameters<ReturnType<T[Route]>>) => {
        exact: ReturnType<ReturnType<T[Route]>>['path']
        inexact: ReturnType<ReturnType<T[Route]>>['path']
        absoluteExact: ReturnType<ReturnType<T[Route]>>['path']
        absoluteInexact: ReturnType<ReturnType<T[Route]>>['path']
        nested: GeneratedRoutes<ReturnType<ReturnType<T[Route]>>['nested']>
      }
    : never
}

type Entries<T extends Routes> = {
  [K in keyof T]: [K, T[K]]
}[keyof T][]

function generateRoutes<T extends Routes>(routes: T, parentPath: string): GeneratedRoutes<T> {
  return (Object.entries(routes) as Entries<T>).reduce((r, [routeName, route]) => {
    r[routeName] =
      typeof route === 'function'
        ? (((...args: Parameters<Exclude<typeof route, RouteObj>>) => ({
            exact: route('', '')(args).path,
            inexact: route('', '/*')(args).path,
            absoluteExact: route(parentPath, '')(args).path,
            absoluteInexact: route(parentPath, '/*')(args).path,
            nested: generateRoutes(route(parentPath, '')(args).nested, `${parentPath}${route('', '')(args).path}`),
          })) as any)
        : {
            exact: route.path,
            inexact: `${route.path}/*`,
            absoluteExact: `${parentPath}${route.path}`,
            absoluteInexact: `${parentPath}${route.path}/*`,
            nested: generateRoutes(route.nested, `${parentPath}${route.path}`),
          }

    return r
  }, {} as GeneratedRoutes<T>)
}

export const routes = generateRoutes(routesTree, '')
