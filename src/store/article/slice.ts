import { createSlice } from '@reduxjs/toolkit';
import { FetchAllArticles } from './asyncAction';
import { State, Status } from './types';

const initialState: State = {
  acticle: [],
  status: Status.MAIN,
  error: '',
};

const ArticleSlice = createSlice({
  name: 'acticle',
  initialState,
  reducers: {
    addActicle(state, action) {
      state.acticle.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(FetchAllArticles.pending, (state) => {
      state.status = Status.LOADING;
      state.acticle = [];
    });

    builder.addCase(FetchAllArticles.fulfilled, (state, action) => {
      state.acticle = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(FetchAllArticles.rejected, (state) => {
      state.acticle = [];
    });
  },
});

export const { addActicle } = ArticleSlice.actions;

export default ArticleSlice.reducer;
