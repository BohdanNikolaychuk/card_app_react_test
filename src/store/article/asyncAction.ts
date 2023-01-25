import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios_config';

export const FetchAllArticles = createAsyncThunk(
  'arctile/fetchArctile',
  async function (start: number = 0, { rejectWithValue }) {
    try {
      const response = await axios.get(`/articles?_start=${start}&_limit=100`);

      return response.data;
    } catch (err: any) {
      let error = err;

      if (error.response) {
        throw rejectWithValue(error.response.data);
      }
    }
  },
);
