import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IArticle } from '../../@types/IArticle';
import { FetchAllArticles, FetchByIDArticle } from './asyncAction';
import { State, Status } from './types';

const initialState: State = {
  acticle: [],
  filteredUsers: [],
  arcticleByID: null,
  status: Status.MAIN,
  error: '',
};

const ArticleSlice = createSlice({
  name: 'acticle',
  initialState,
  reducers: {
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

    builder.addCase(FetchAllArticles.fulfilled, (state, action: PayloadAction<IArticle[]>) => {
      state.acticle = action.payload;
      state.filteredUsers = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(FetchAllArticles.rejected, (state, action) => {
      state.error = action.payload as string;
      state.acticle = [];
      state.status = Status.MAIN;
    });
    // FETCH BY ID
    builder.addCase(FetchByIDArticle.pending, (state) => {
      state.status = Status.LOADING;
    });

    builder.addCase(FetchByIDArticle.fulfilled, (state, action) => {
      state.arcticleByID = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(FetchByIDArticle.rejected, (state, action) => {
      state.error = action.payload as string;
    });
  },
});

export const { searchByTitle } = ArticleSlice.actions;

export default ArticleSlice.reducer;
