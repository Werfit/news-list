import { createTheme, Palette, Theme } from "@mui/material";

interface CustomPalette extends Palette {
  midnight: {
    main: string;
  };
}

interface CustomTheme extends Theme {
  palette: CustomPalette;
}

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
  },
  palette: {
    secondary: {
      main: "#ecf0f1",
    },
    midnight: {
      main: "#2c3e50",
    },
  },
} as CustomTheme) as CustomTheme;

export { theme };
