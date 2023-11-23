type Article = {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  source: {
    id: null;
    name: string;
  };
};

type Response = {
  status: string;
  totalResults: number;
  articles: Article[];
};

type InitialState = {
  isLoading: boolean;
  news: Article[];
};

export type { InitialState, Article, Response };
