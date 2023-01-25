import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IArticle } from '../../@types/IArticle';
import { FetchAllArticles } from './asyncAction';
import { State, Status } from './types';

const initialState: State = {
  article: [],
  filteredArticle: [],
  status: Status.MAIN,
  error: '',
};

const ArticleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    searchByTitleAndDisc: (state, action) => {
      const filteredArticle = state.article.filter(
        (article) =>
          article.title.toLowerCase().includes(action.payload.toLowerCase()) ||
          article.summary.toLowerCase().includes(action.payload.toLowerCase()),
      );
      return {
        ...state,
        filteredArticle: action.payload.length > 0 ? filteredArticle : [...state.article],
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(FetchAllArticles.pending, (state) => {
      state.status = Status.LOADING;
      state.article = [];
    });

    builder.addCase(FetchAllArticles.fulfilled, (state, action: PayloadAction<IArticle[]>) => {
      state.article = action.payload;
      state.filteredArticle = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(FetchAllArticles.rejected, (state, action) => {
      state.error = action.payload as string;
      state.article = [];
      state.status = Status.MAIN;
    });
  },
});

export const { searchByTitleAndDisc } = ArticleSlice.actions;

export default ArticleSlice.reducer;
