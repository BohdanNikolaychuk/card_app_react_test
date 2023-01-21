import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ALL } from '../../utils/axios_config';

export const FetchAllArticles = createAsyncThunk(
  'arctile/fetchArctile',
  async function (_, { rejectWithValue, dispatch }) {
    try {
      const response = await axios.get(ALL);

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
  async function (id: string, { rejectWithValue, dispatch }) {
    try {
      const response = await axios.get(`https://api.spaceflightnewsapi.net/v3/articles/${id}`);
      return response.data;
    } catch (err: any) {
      let error = err;

      if (error.response) {
        throw rejectWithValue(error.response.data);
      }
    }
  },
);
