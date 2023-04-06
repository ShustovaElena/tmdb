import { Box } from "@mui/material";

import { MovieCard } from "../MovieCard";
import { useAppSelector } from "../../store/hooks";
import { IMovie } from "../../store/reducers/types";

export const Cards = () => {
  const { movies } = useAppSelector((state) => state.movies);

  return (
    <Box sx={{ width: '90%', margin: '0 auto', padding: 2, minHeight: '100vh', display: 'flex', justifyContent: 'space-between',  flexWrap: 'wrap' }}>
      {(movies as IMovie[]).map((movie: IMovie) => {
      return <MovieCard key={movie.id} {...movie} />
      })}
    </Box>
  );
}