import { Typography, Box } from "@mui/material";
import { NavBar } from "../NavBar";

export const Header = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' ,height: '80px'}}>
      <Typography variant="h5" component="h5" align="left" sx={{ width: '30%', color: 'var(--text-color)', textAlign: 'center'}}>
        TMDB Portal
      </Typography>
      <NavBar />
  </Box> 
  );
}