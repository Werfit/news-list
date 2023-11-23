import { MenuItem, Select, Box, Typography } from "@mui/material";

const FilterSelect = () => {
  return (
    <Box>
      <Typography fontSize="small" letterSpacing={1.2} sx={{ mb: 1 }}>
        Category
      </Typography>
      <Select value="technology" labelId="filter-category-id" size="small">
        <MenuItem value="technology">Technology</MenuItem>
        <MenuItem value="asd">Asd</MenuItem>
      </Select>
    </Box>
  );
};

export { FilterSelect };
