import { Box, Divider, Typography } from "@mui/material";
import { Article } from "../../../lib/redux/news/common.ts";
import { Title } from "./title.tsx";
import { Subheader } from "./subheader.tsx";

type Props = {
  article: Article;
};

const ArticleDetails: React.FC<Props> = ({ article }) => {
  return (
    <>
      <Title content={article.title ?? ""} />
      <Subheader
        source={article.source.name ?? ""}
        publishedAt={article.publishedAt ?? ""}
      />
      <Typography fontWeight="bold">Description</Typography>

      <Typography>{article.description}</Typography>

      <Box
        sx={{
          width: "100vw",
          marginLeft: "50%",
          transform: "translate(-50%)",
        }}
      >
        <img
          src={article.urlToImage}
          alt={article.title}
          style={{ marginTop: "2rem" }}
          width="100%"
        />
      </Box>

      <Typography fontWeight="bold" my={2}>
        Content
      </Typography>

      <Typography>{article.content}</Typography>

      <Divider sx={{ my: 2 }} />

      <Typography color="dimgrey" fontSize="small">
        Authors: {article.author}
      </Typography>
    </>
  );
};

export { ArticleDetails };
