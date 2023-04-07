import { Link } from 'react-router-dom';
import { Button, Container } from "@mui/material";
import { Search } from '../Search';
import { useAppDispatch, useAppSelector } from "../../store/hooks";

export const NavBar = () => {
  const dispatch = useAppDispatch();  
  const { currentPage } = useAppSelector((state) => state.actors);

  const handleClick = () => {
    if (currentPage === 'movies') {
      dispatch({ type: 'SET_CURRENT_PAGE', payload: 'actors' });
      dispatch({ type: 'SET_SEARCH_NAME', payload: '' });
    } 
    if (currentPage === 'actors') {
      dispatch({ type: 'SET_CURRENT_PAGE', payload: 'movies' });
      dispatch({ type: 'SET_SEARCH_NAME', payload: '' });
    }
  }
  return (
    <Container sx={{ width: '60%', display: 'flex', justifyContent: 'flex-end' }}>
      <Search />
      <Button variant="text" color="secondary" component={Link} to="/" onClick={handleClick}>Home</Button>
      <Button variant="text" color="secondary" component={Link} to="/actors" onClick={handleClick}>Popular actors</Button>
    </Container> 
  );
}