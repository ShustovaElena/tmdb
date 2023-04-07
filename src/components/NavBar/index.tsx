import { Link } from 'react-router-dom';
import { Button, Container } from "@mui/material";
import { Search } from '../Search';
import { useAppDispatch, useAppSelector } from "../../store/hooks";

export const NavBar = () => {
  const dispatch = useAppDispatch();  
  const { pagePagination } = useAppSelector((state) => state.actors);

  const handleClick = () => {
    console.log('handleClick');
    if (pagePagination === 'movies') {
      dispatch({ type: 'SET_PAGINATION_PAGE', payload: 'actors' });
    } else {
      dispatch({ type: 'SET_PAGINATION_PAGE', payload: 'movies' });
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