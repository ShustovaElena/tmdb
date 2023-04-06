import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import { getMovies } from '../../api/movie';

export const Paginator = () => {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();  
  const { filterName } = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovies(filterName, page));
  }, [page]);

  useEffect(() => {
    setPage(1);
    dispatch(getMovies(filterName, 1));
  }, [filterName]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box sx={{ margin: '0 auto', padding: '10px', width: '35%'}}>
      <Pagination count={500} color="secondary" page={page} onChange={handleChange} />
    </Box>
  );
}