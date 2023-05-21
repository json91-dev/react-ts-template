import { combineReducers, configureStore } from '@reduxjs/toolkit'
import defaultReducer from '@/store/reducer/defaultReducer'

const rootReducer = combineReducers({
  default: defaultReducer,
})

export default configureStore({
  reducer: rootReducer,
})
