type Article = {
  author: string;
  title: string;
  description?: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content?: string;
  source: {
    id: null;
    name: string;
  };
};

type NewsResponse = {
  status: string;
  totalResults: number;
  articles: Article[];
};

type InitialState = {
  isLoading: boolean;
  news: Article[];
  totalSize: number;
  pageSize: number;
  page: number;
  filters: {
    category: string;
    country: string;
    keywords: string;
  };
};

type FilterAddition = {
  filterName: keyof InitialState["filters"];
  filterValue: string;
};

type ArticleResponse = {
  data: string;
};

export type {
  InitialState,
  Article,
  NewsResponse,
  ArticleResponse,
  FilterAddition,
};
