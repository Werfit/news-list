import { useState } from "react";
import {
  MenuItem,
  Select,
  Box,
  Typography,
  SelectChangeEvent,
} from "@mui/material";

type Options = {
  name: string;
  options: string[];
  defaultValue: string;
  onChange?: (value: string) => void;
};

const FilterSelect: React.FC<Options> = ({
  name,
  defaultValue,
  options,
  onChange,
}) => {
  const [select, setSelect] = useState<string>(defaultValue);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelect(event.target.value);
    onChange && onChange(event.target.value);
  };

  return (
    <Box>
      <Typography fontSize="small" letterSpacing={1.2} sx={{ mb: 1 }}>
        {name}
      </Typography>
      <Select
        defaultValue={select}
        value={select}
        labelId="filter-category-id"
        size="small"
        onChange={handleChange}
      >
        {options.map((option) => (
          <MenuItem value={option.toLowerCase()}>
            {option.substring(0, 1).toUpperCase()}
            {option.substring(1)}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export { FilterSelect };
