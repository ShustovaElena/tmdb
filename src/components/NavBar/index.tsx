import { Button, Container } from "@mui/material";

export const NavBar = () => {
  return (
    <Container sx={{ width: '60%', display: 'flex', justifyContent: 'flex-end' }}>
      <Button variant="text" color="secondary">Home</Button>
      <Button variant="text" color="secondary">Popular actors</Button>
    </Container> 
  );
}