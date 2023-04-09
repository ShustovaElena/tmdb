import { Container } from "@mui/material";
import { Header } from "../../components/Header";

export const PageNotFound = () => {
  return (
    <>
      <Container sx={{minWidth: '100vw', margin: 0, padding: 0, background: `url(/img/404Error.jpg) no-repeat`, backgroundSize: 'cover', height: '100vh'}}>
        <Header />
      </Container>
    </>
  );
}