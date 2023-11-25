import { InputAdornment, OutlinedInput } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

type Props = {
  onChange?: (value: string) => void;
};

const Search: React.FC<Props> = ({ onChange }) => {
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
      onChange={(event) => onChange && onChange(event.target.value)}
    />
  );
};

export { Search };
