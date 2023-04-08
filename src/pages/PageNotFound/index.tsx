import { Container } from "@mui/material";
import { Header } from "../../components/Header";

export const PageNotFound = () => {
  return (
    <>
      <Container sx={{background: `url(/img/404.jpg) no-repeat`, backgroundSize: '80% 100%', backgroundPositionX: '50%', height: '100vh'}}>
        <Header />
      </Container>
    </>
  );
}