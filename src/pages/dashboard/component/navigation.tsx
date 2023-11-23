import { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import { Subheader } from "./subheader.tsx";
import { Search } from "./search.tsx";
import { FilterAltOutlined } from "@mui/icons-material";
import { FilterSelect } from "./select.tsx";

const Navigation = () => {
  const [extraFiltersVisible, setExtraFiltersVisible] =
    useState<boolean>(false);

  return (
    <>
      <Grid display="flex" alignItems="center" justifyContent="space-between">
        <Subheader />
        <Box display="flex" gap={2}>
          <Search />
          <Button
            variant="contained"
            color="secondary"
            size="small"
            sx={{ boxShadow: "none" }}
            onClick={() => setExtraFiltersVisible(!extraFiltersVisible)}
          >
            <FilterAltOutlined /> Filters
          </Button>
        </Box>
      </Grid>
      {extraFiltersVisible && (
        <Box display="flex" gap={2} mt={2}>
          <FilterSelect />
          <FilterSelect />
        </Box>
      )}
    </>
  );
};

export { Navigation };
