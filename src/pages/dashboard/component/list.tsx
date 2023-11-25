import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { theme } from "../../../lib/mui/theme.tsx";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks.ts";
import { Article } from "./article.tsx";
import { changePage, changePageSize } from "../../../lib/redux/news/slice.ts";

const List = () => {
  const { news, pageSize, totalSize, page } = useAppSelector(
    (state) => state.news,
  );
  const dispatch = useAppDispatch();

  return (
    <Table>
      <TableHead sx={{ bgcolor: theme.palette.secondary.main }}>
        <TableRow>
          <TableCell>Image</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Authors</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Publication date</TableCell>
          <TableCell>Original URL</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {news.map((article, index) => (
          <Article key={index} article={article} cellSymbolLimit={50} />
        ))}
      </TableBody>
      <TableFooter>
        <TablePagination
          count={totalSize}
          page={page - 1}
          rowsPerPage={pageSize}
          onRowsPerPageChange={(event) =>
            dispatch(changePageSize({ pageSize: Number(event.target.value) }))
          }
          onPageChange={(_, page) => dispatch(changePage({ page: page + 1 }))}
        />
      </TableFooter>
    </Table>
  );
};

export { List };
