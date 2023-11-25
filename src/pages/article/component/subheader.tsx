import { Box, Typography } from "@mui/material";
import moment from "moment";

type Props = {
  source: string;
  publishedAt: string;
};

const Subheader: React.FC<Props> = ({ source, publishedAt }) => {
  return (
    <Box display="flex" justifyContent="space-between" my={4}>
      <Typography fontSize="small" color="dimgrey">
        Source: {source}
      </Typography>
      <Typography fontSize="small" color="dimgray">
        Publication date: {moment(new Date(publishedAt)).format("YYYY-MM-DD")}
      </Typography>
    </Box>
  );
};

export { Subheader };
