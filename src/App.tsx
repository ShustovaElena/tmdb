import { AppRoutes } from "./components/AppRoutes";
import { Box } from "@mui/material";

export const App = () => {
  return (
  <Box sx={{ backgroundColor: 'var(--background-color)' }}>
    <AppRoutes />
  </Box>
  );
}
