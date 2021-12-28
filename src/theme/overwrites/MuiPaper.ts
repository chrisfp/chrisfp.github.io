import { Theme } from "@mui/material";

export const MuiPaper = (theme: Theme) => ({
  styleOverrides: {
    rounded: {
      borderRadius: theme.spacing(2),
    },
  },
});
