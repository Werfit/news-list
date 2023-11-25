import { Article as ArticleType } from "../../../lib/redux/news/common.ts";
import { TableCell, TableRow, Typography } from "@mui/material";
import { Link as LinkIcon } from "@mui/icons-material";
import moment from "moment";
import { useNavigate } from "react-router-dom";

type Props = {
  article: ArticleType;
  cellSymbolLimit: number;
};

const limitTextLength = (text: string | undefined, limit: number): string => {
  if (!text) {
    return "-";
  }

  return text.length < limit ? text : `${text.substring(0, limit)}...`;
};

const Article: React.FC<Props> = ({ article, cellSymbolLimit }) => {
  const navigate = useNavigate();

  return (
    <TableRow>
      <TableCell>
        <img
          src={article.urlToImage}
          alt={article.title}
          loading="lazy"
          width="100px"
        />
      </TableCell>
      <TableCell>
        <Typography>
          {limitTextLength(article.title, cellSymbolLimit)}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography>
          {limitTextLength(article.author, cellSymbolLimit)}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography>
          {limitTextLength(article.description, cellSymbolLimit)}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography noWrap>
          {moment(new Date(article.publishedAt)).format("YYYY-MM-DD")}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <LinkIcon
          sx={{ cursor: "pointer" }}
          onClick={() => navigate(`/${article.title}`)}
        />
      </TableCell>
    </TableRow>
  );
};

export { Article };
