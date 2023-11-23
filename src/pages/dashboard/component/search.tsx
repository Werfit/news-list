import { InputAdornment, OutlinedInput } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const Search = () => {
  return (
    <OutlinedInput
      placeholder="Search article"
      color="primary"
      size="small"
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
    />
  );
};

export { Search };
