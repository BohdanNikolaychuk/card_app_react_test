export const ROUTES = {
  articles: '',
  article: (articleId = null) => (articleId ? `/article/:${articleId}` : `/article/:articleId`),
};
