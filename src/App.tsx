import { AppRoutes } from "./components/AppRoutes";
import { Header } from "./components/Header";
import { Box } from "@mui/material";

export const App = () => {
  return (
  <Box sx={{ backgroundColor: 'var(--background-color)' }}>
    <Header />
    <AppRoutes />
  </Box>
  );
}
