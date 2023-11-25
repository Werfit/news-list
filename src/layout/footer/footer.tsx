import { Box, Container, Typography } from "@mui/material";
import { MailRounded } from "@mui/icons-material";
import { theme } from "../../lib/mui/theme.tsx";

const hexToRgba = (hex: string, alpha: number): string => {
  // Remove the hash character, if present
  hex = hex.replace(/^#/, "");

  // Parse the hex values for red, green, and blue
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  // Validate alpha value and set default if not provided
  alpha = alpha || 1.0;
  if (alpha < 0 || alpha > 1) {
    alpha = 1.0;
  }

  // Create the RGBA string
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const Footer = () => (
  <Box
    bgcolor="white"
    width="100vw"
    mt={8}
    sx={{
      boxShadow: `0px -0.1rem 0.2rem ${hexToRgba(
        theme.palette.midnight.main,
        0.25,
      )}`,
    }}
  >
    <Container>
      <Box display="flex" justifyContent="space-between" alignItems="end" p={3}>
        <Box>
          <Typography variant="h5">Formula</Typography>
          <Typography fontSize="small">
            ©Formula 2023. All Rights Reserved
          </Typography>
        </Box>
        <Typography fontSize="small" display="flex" alignItems="center" gap={1}>
          <MailRounded fontSize="small" /> info@formula.com
        </Typography>
      </Box>
    </Container>
  </Box>
);

export { Footer };
