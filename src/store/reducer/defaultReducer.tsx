import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  description: '테스트입니다.',
}

const defaultReducerSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    setDescriptionAction: (state, { payload }) => {
      return { ...state, description: payload.description }
    },
  },
})

export const { setDescriptionAction } = defaultReducerSlice.actions

export const commentModalSelector = state => state.example

export default defaultReducerSlice.reducer
