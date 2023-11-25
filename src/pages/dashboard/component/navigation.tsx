import { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import { Subheader } from "./subheader.tsx";
import { Search } from "./search.tsx";
import { FilterAltOutlined } from "@mui/icons-material";
import { FilterSelect } from "./select.tsx";
import {
  NEWS_CATEGORIES,
  NEWS_COUNTRIES,
} from "../../../common/constants/filters.ts";
import { useAppDispatch } from "../../../lib/redux/hooks.ts";
import { addFilter, changeKeywords } from "../../../lib/redux/news/slice.ts";

const Navigation = () => {
  const [extraFiltersVisible, setExtraFiltersVisible] =
    useState<boolean>(false);
  const dispatch = useAppDispatch();

  return (
    <>
      <Grid display="flex" alignItems="center" justifyContent="space-between">
        <Subheader />
        <Box display="flex" gap={2}>
          <Search
            onChange={(value) => dispatch(changeKeywords({ keywords: value }))}
          />
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
          <FilterSelect
            name="Category"
            options={NEWS_CATEGORIES}
            defaultValue={NEWS_CATEGORIES[0]}
            onChange={(value) =>
              dispatch(
                addFilter({
                  filterName: "category",
                  filterValue: value,
                }),
              )
            }
          />
          <FilterSelect
            name="Country"
            options={NEWS_COUNTRIES}
            defaultValue={NEWS_COUNTRIES[0]}
            onChange={(value) =>
              dispatch(
                addFilter({
                  filterName: "country",
                  filterValue: value,
                }),
              )
            }
          />
        </Box>
      )}
    </>
  );
};

export { Navigation };
