import { Box } from "@mui/material";

import { MovieCard } from "../MovieCard";
import { useAppSelector } from "../../store/hooks";
import { IMovies } from "../../store/reducers/types";

export const Cards = () => {
  const { movies } = useAppSelector((state) => state.movies);
  
  return (
    <Box sx={{ minWidth: '100vw', margin: '0 auto', padding: 2, minHeight: '100vh', display: 'flex', justifyContent: 'space-between',  flexWrap: 'wrap' }}>
      {(movies as IMovies[]).map((movie: IMovies) => {
          return <MovieCard key={movie.id} {...movie} />
      })}
    </Box>
  );
}