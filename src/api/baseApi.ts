import { createApi } from '@reduxjs/toolkit/query/react'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'
import { GraphQLClient } from 'graphql-request'

export const client = new GraphQLClient('http://89.223.125.241/graphql')
export const api = createApi({
  tagTypes: ['GroupSchedule'],
  baseQuery: graphqlRequestBaseQuery({ client }),
  endpoints: () => ({}),
})
