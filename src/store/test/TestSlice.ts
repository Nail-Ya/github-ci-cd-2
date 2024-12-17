import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TestData } from "models/Test";
import { loadTestData } from "./ActionCreators";

interface TestState {
  testData?: TestData;
}

const initialState: TestState = {
  testData: undefined,
}

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    resetTestData(state) {
      state.testData = undefined;
    },
  },
  extraReducers: {
    [loadTestData.fulfilled.type]: (state, action: PayloadAction<TestData>) => {
      state.testData = action.payload;
    },
    [loadTestData.pending.type]: (state) => {},
    [loadTestData.rejected.type]: (state) => {},
  }
})

export const {
  resetTestData,
} = testSlice.actions;

export default testSlice.reducer;
