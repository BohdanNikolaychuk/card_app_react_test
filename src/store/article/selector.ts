import { createSelector } from '@reduxjs/toolkit';
import { IArticle } from '../../@types/IArticle';
import { RootState } from '../store';

export const selectActicleData = (state: RootState) => state.article;

export const selectIdEntity = (id: number) => {
  return createSelector(selectActicleData, (state) =>
    state.article.find((art: IArticle) => art.id === id),
  );
};
