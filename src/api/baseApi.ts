import { createApi } from '@reduxjs/toolkit/query/react'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'
import { GraphQLClient } from 'graphql-request'

export const client = new GraphQLClient('http://localhost:3000/graphql', { credentials: 'include' })
export const api = createApi({
  tagTypes: ['GroupSchedule'],
  baseQuery: graphqlRequestBaseQuery({ client }),
  endpoints: () => ({}),
})
