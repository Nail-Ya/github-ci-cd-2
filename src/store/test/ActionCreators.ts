import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { getRequest } from "utils/methods";

export const loadTestData = createAsyncThunk(
  'test/loadTestData',
  async (_, thunkAPI) => {
    try {
      const response: any = await getRequest('/todos/1');
      return response;
    } catch (e: any) {
      toast.error(`Ошибка при загрузке данных ${e.message}`);
      return thunkAPI.rejectWithValue(`Ошибка при загрузке данных ${e.message}`);
    }
  }
)
