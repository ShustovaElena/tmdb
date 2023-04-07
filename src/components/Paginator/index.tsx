import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import { getMovies } from '../../api/movie';
import { getDataBySearch } from '../../api/search';
import { getActors } from '../../api/actor';

export const Paginator = () => {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();  
  const { filterName, totalPages, searchName } = useAppSelector((state) => state.movies);
  const { pagePagination } = useAppSelector((state) => state.actors);

  useEffect(() => {    
    console.log('pagePagination', pagePagination);
    
    if (pagePagination === 'movies') {
      if (searchName !== '') {
        dispatch(getDataBySearch(searchName, page));
      } else {
        dispatch(getMovies(filterName, page));
      }
    } 
    if (pagePagination === 'actors') {
      dispatch(getActors(page));
    }
  }, [page]);

  useEffect(() => {
    setPage(1);
    dispatch(getMovies(filterName, 1));
  }, [filterName]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box sx={{ margin: '0 auto', padding: '10px', width: '400px'}}>
      <Pagination count={(totalPages > 500) ? 500 : totalPages} color="secondary" page={page} onChange={handleChange} />
    </Box>
  );
}