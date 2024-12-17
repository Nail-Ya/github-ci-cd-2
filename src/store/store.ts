import { combineReducers, configureStore } from '@reduxjs/toolkit';
import testReducer from './test/TestSlice';

const rootReducer = combineReducers({
  testReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
