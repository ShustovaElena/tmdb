import { useAppSelector } from "../../store/hooks";
import { Box, Button, Container, Link, Typography } from "@mui/material";
import { IMG_URL } from '../../constants';
import { Header } from "../../components/Header";
import { IGenres } from "../../store/reducers/types";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HourglassFullIcon from '@mui/icons-material/HourglassFull';
import GradeIcon from '@mui/icons-material/Grade';
import PaidIcon from '@mui/icons-material/Paid';

export const MoviePage = () => {
  const { movie } = useAppSelector(state => state.movies);
  const { backdrop_path, poster_path, title, genres, release_date, runtime, budget, vote_average, overview, homepage } = movie;
  const releaseYear = release_date ? (release_date as string).split('-')[0] : 'none';
  
  return (
    <Box sx={{ background: `url(${IMG_URL}${backdrop_path ? backdrop_path : poster_path}) no-repeat`, backgroundSize: 'cover', height: '100vh'}}>
      <Header />
      <Container sx={{ display: 'flex', justifyContent: 'space-between', gap: '80px', alignItems: 'flex-end', height: '80vh'}}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '10px', flexDirection: 'column' }}>
          <Typography 
            variant="h1" 
            component="h1" 
            sx={{ color: 'var(--title-color)', textTransform: 'uppercase', fontWeight: 900, minWidth: 400, maxWidth: 800, letterSpacing: '4px', fontSize: '6rem' }}
          >
            {title}
          </Typography>
          <Box sx={{ minWidth: '70%', display: 'flex', gap: '15px', justifyContent: 'flex-start', flexWrap: 'wrap', color: 'var(--text-color)', fontSize: '0.8rem', paddingBottom: '20px' }}>
            {genres && (genres as IGenres[]).map(({name, id}) => {
              return <Typography 
              variant="h5" 
              component="h5" 
              sx={{ display: 'inline', fontSize: '1.3rem' }}
              key={id}
            >
              {`${name}  `} 
            </Typography>
            })}
            <Typography variant="h5" component="h5"><CalendarMonthIcon fontSize="small" sx={{ color: 'var(--title-color)'}}/>{releaseYear}</Typography>
            <Typography variant="h5" component="h5"><HourglassFullIcon fontSize="small" sx={{ color: 'var(--title-color)'}} />{runtime}</Typography>
          </Box>
          <Box sx={{ maWidth: '60%', display: 'flex', gap: '25px', justifyContent: 'flex-start', color: 'var(--text-color)', fontSize: '0.8rem' }}>
              <Typography variant="h5" component="h5"><GradeIcon fontSize="small" sx={{ color: 'var(--title-color)' }} />{vote_average}</Typography>
              {budget !== 0 && <Typography variant="h5" component="h5"><PaidIcon fontSize="small" sx={{ color: 'var(--title-color)' }} />{budget}</Typography>}
            </Box>
        </Box>
        <Box sx={{ width: '50%', color: 'var(--text-color)'}}>
          <Typography variant="h5" component="p" sx={{ fontSize: "1rem", paddingBottom: '20px', textAlign: 'justify' }}>{overview}</Typography>
          <Button variant="contained" color="secondary" sx={{ width: '100px' }}>
            <Link target="_blank" sx={{ color: 'var(--text-color)', textDecoration: 'none' }} href={homepage}>
              Homepage
            </Link>
          </Button>
        </Box>
      </Container>
    </Box>
  );
} 