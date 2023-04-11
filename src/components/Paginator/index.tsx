import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import { getMovies } from '../../api/movie';
import { getDataBySearch, getPersonBySearch } from '../../api/search';
import { getActors } from '../../api/actor';
import { FIRST_ELEMENT } from '../../constants';

export const Paginator = () => {
  const [page, setPage] = useState(FIRST_ELEMENT);
  const dispatch = useAppDispatch();  
  const { filterName, totalPages, searchName } = useAppSelector((state) => state.movies);
  const { currentPage } = useAppSelector((state) => state.actors);

  useEffect(() => {   
    if (currentPage === 'movies') {
      if (searchName !== '') {
        dispatch(getDataBySearch(searchName, page));
      } else {
        dispatch(getMovies(filterName, page));
      }
    } 
    if (currentPage === 'actors') {
      if (searchName !== '') {
        dispatch(getPersonBySearch(searchName, page));
      } else {
        dispatch(getActors(page));
      }
    }
  }, [page]);

  useEffect(() => {
    setPage(FIRST_ELEMENT);
    dispatch(getMovies(filterName, FIRST_ELEMENT));
  }, [filterName]);

  useEffect(() => {
    setPage(FIRST_ELEMENT);
  }, [searchName]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box sx={{ margin: '0 auto', padding: '10px', width: '400px'}}>
      <Pagination 
        count={(totalPages > 500) ? 500 : totalPages} 
        color="secondary" 
        page={page} 
        onChange={handleChange}
     />
    </Box>
  );
}