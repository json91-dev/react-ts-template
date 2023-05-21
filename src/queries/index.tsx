import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { defaultQueryOptions } from '@/queries/options'
// import {ReactQueryDevtools} from "react-query/devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      ...defaultQueryOptions,
    },
  },
})

const ReactQueryProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient} contextSharing>
      {children}
    </QueryClientProvider>
  )
}

export { ReactQueryProvider, queryClient }
