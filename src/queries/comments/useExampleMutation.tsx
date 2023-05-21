import { useMutation, useQueryClient } from 'react-query'
import axios from 'axios'

const postExampleRequest = async _id => {
  const result = await axios.post('http://httpbin.org/post')
  return result.data
}

export const postExampleMutation = () => {
  const queryClient = useQueryClient()
  const completeLikeMutation = useMutation((data: { id: string }) => postExampleRequest(data.id), {
    onSuccess: (data, variables, context) => {
      console.log('mutation 성공')
      queryClient.invalidateQueries(['example'])
    },
    onError: (error, variables, context) => {
      console.log('mutation 실패')
    },
  })

  return { completeLikeMutation }
}
