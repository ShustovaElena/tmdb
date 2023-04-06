import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import { getMovies } from '../../api/movie';
import { Cards } from "../../components/Cards";
import { Filter } from "../../components/Filter";
import { Box } from "@mui/material";
import { Paginator } from "../../components/Paginator";

export const MainPage = () => {
  const dispatch = useAppDispatch();  
  const { filterName } = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovies(filterName));
  }, [dispatch, filterName])

  return (
    <Box sx={{ position: 'relative' }}>
      <Filter />
      <Cards />
      <Paginator />
    </Box>
  );
}