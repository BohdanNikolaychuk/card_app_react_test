import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios_config';
import { IArticle } from '../../@types/IArticle';

export const FetchAllArticles = createAsyncThunk(
  'arctile/fetchArctile',
  async function (_, { rejectWithValue }) {
    try {
      const response = await axios.get('/articles');

      return response.data;
    } catch (err: any) {
      let error = err;

      if (error.response) {
        throw rejectWithValue(error.response.data);
      }
    }
  },
);

export const FetchByIDArticle = createAsyncThunk(
  'arctile/fetchByID',
  async function (id: string, { rejectWithValue }) {
    try {
      const response = await axios.get<IArticle>(`articles/${id}`);
      return response.data;
    } catch (err: any) {
      let error = err;

      if (error.response) {
        throw rejectWithValue(error.response.data);
      }
    }
  },
);
