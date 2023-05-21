import { useQuery } from 'react-query'
import axios from 'axios'
import { defaultQueryOptions } from '@/queries/options'

const getExampleRequest = async () => {
  const result = await axios.get('http://httpbin.org/delay/3')
  return result.data
}

export const useExample = () => {
  const { data, status } = useQuery(['example'], getExampleRequest, {
    ...defaultQueryOptions,
    enabled: true,
  })

  return {
    url: data ? data.url : null,
    status,
  }
}
