import { MainPage } from "./pages/MainPage";
import { Header } from "./components/Header";
import { Box } from "@mui/material";

export const App = () => {
  return (
  <Box sx={{ backgroundColor: 'var(--background-color)' }}>
    <Header />
    <MainPage />
  </Box>
  );
}
