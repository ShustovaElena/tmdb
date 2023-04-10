import { Link } from 'react-router-dom';
import { Button, Container } from "@mui/material";
import { Search } from '../Search';
import { useAppDispatch } from "../../store/hooks";

export const NavBar = () => {
  const dispatch = useAppDispatch();  

  const handleHomeClick = () => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: 'movies' });
    dispatch({ type: 'SET_SEARCH_NAME', payload: '' });
  }

  const handleActorClick = () => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: 'actors' });
    dispatch({ type: 'SET_SEARCH_NAME', payload: '' });
  }

  return (
    <Container sx={{ width: '60%', display: 'flex', justifyContent: 'flex-end' }}>
      <Search />
        <Button variant="text" color="secondary" component={Link} to="/" onClick={handleHomeClick}>Home</Button>
        <Button variant="text" color="secondary" component={Link} to="/actors" onClick={handleActorClick}>Popular actors</Button>
    </Container> 
  );
}