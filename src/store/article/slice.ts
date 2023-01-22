import { createSlice } from '@reduxjs/toolkit';
import { FetchAllArticles, FetchByIDArticle } from './asyncAction';
import { State, Status } from './types';

const initialState: State = {
  acticle: [],
  filteredUsers: [],
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
    searchByTitle: (state, action) => {
      const filteredUsers = state.acticle.filter(
        (acticle) =>
          acticle.title.toLowerCase().includes(action.payload.toLowerCase()) ||
          acticle.summary.toLowerCase().includes(action.payload.toLowerCase()),
      );
      return {
        ...state,
        filteredUsers: action.payload.length > 0 ? filteredUsers : [...state.acticle],
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(FetchAllArticles.pending, (state) => {
      state.status = Status.LOADING;
      state.acticle = [];
    });

    builder.addCase(FetchAllArticles.fulfilled, (state, action) => {
      state.acticle = action.payload;
      state.filteredUsers = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(FetchAllArticles.rejected, (state) => {
      state.acticle = [];
    });

    builder.addCase(FetchByIDArticle.pending, (state) => {
      state.status = Status.LOADING;
      state.acticle = [];
    });

    builder.addCase(FetchByIDArticle.fulfilled, (state, action) => {
      state.acticle = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(FetchByIDArticle.rejected, (state) => {
      state.acticle = [];
    });
  },
});

export const { addActicle, searchByTitle } = ArticleSlice.actions;

export default ArticleSlice.reducer;
