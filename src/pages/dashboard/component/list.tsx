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

const List = () => {
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
        <TableRow>
          <TableCell>asd</TableCell>
          <TableCell>asd</TableCell>
          <TableCell>asd</TableCell>
          <TableCell>asd</TableCell>
          <TableCell>asd</TableCell>
          <TableCell>asd</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TablePagination
          count={10}
          page={1}
          rowsPerPage={10}
          onPageChange={() => {}}
        />
      </TableFooter>
    </Table>
  );
};

export { List };
