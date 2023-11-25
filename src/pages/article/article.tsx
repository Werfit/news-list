import { useParams } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { Header } from "../../layout/header/header.tsx";
import { Footer } from "../../layout/footer/footer.tsx";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks.ts";
import { useEffect, useMemo } from "react";
import { getNews } from "../../lib/redux/news/thunk.ts";
import { ArticleDetails } from "./component/details.tsx";

const Article = () => {
  const dispatch = useAppDispatch();
  const { title } = useParams();

  const { news } = useAppSelector((state) => state.news);

  const article = useMemo(
    () =>
      news.find((article) => (title ? article.title.startsWith(title) : null)),
    [news],
  );

  useEffect(() => {
    if (!news.length) {
      dispatch(getNews());
    }
  }, []);

  return (
    <Box p={0} m={0}>
      <Header />
      <Container>{article && <ArticleDetails article={article} />}</Container>
      <Footer />
    </Box>
  );
};

export { Article };
