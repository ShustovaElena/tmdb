import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import { getMovies } from '../../api/movie';
import { Cards } from "../../components/Cards";
import { Filter } from "../../components/Filter";
import { Box } from "@mui/material";
import { Paginator } from "../../components/Paginator";
import { Header } from "../../components/Header";

export const MainPage = () => {
  const dispatch = useAppDispatch();  
  const { filterName } = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovies(filterName));
  }, [dispatch, filterName])

  return (
    <Box sx={{ position: 'relative' }}>
      <Header />
      <Filter />
      <Cards />
      <Paginator />
    </Box>
  );
}