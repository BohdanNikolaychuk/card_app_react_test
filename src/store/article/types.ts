import { IArticle } from '../../@types/IArticle';

export enum Status {
  MAIN = '',
  LOADING = 'loading',
  SUCCESS = 'completed',
}

export type State = {
  acticle: IArticle[];
  status: string;
  arcticleByID?: IArticle | undefined | null;
  error: string;
  filteredUsers: IArticle[];
};
