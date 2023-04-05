import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";

import { getMovies } from '../../api/movie';
import { Cards } from "../../components/Cards";
import { Filter } from "../../components/Filter";
import { Box } from "@mui/material";

export const MainPage = () => {
  const dispatch = useAppDispatch();  

  useEffect(() => {
    dispatch(getMovies('popularity.desc'));
  }, [])

  return (
    <Box sx={{ position: 'relative' }}>
      <Filter />
      <Cards />
    </Box>
  );
}