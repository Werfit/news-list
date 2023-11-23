import { Box, Typography } from "@mui/material";
import { theme } from "../../lib/mui/theme.tsx";

const Header = () => (
  <Box
    color="white"
    textAlign="center"
    py={2}
    mb={5}
    bgcolor={theme.palette.midnight.main}
  >
    <Typography variant="h4">Formula</Typography>
  </Box>
);

export { Header };
