import { IArticle } from '../../@types/IArticle';

export enum Status {
  MAIN = '',
  LOADING = 'loading',
  SUCCESS = 'completed',
}

export type State = {
  article: IArticle[];
  status: string;

  error: string;
  filteredArticle: IArticle[];
};
