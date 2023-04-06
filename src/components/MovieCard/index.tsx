import { CardActionArea, Box, Typography, CardMedia, CardContent, Card } from '@mui/material';
import { IMovie } from '../../store/reducers/types';
import { IMG_URL } from '../../constants';
import GradeIcon from '@mui/icons-material/Grade';
import { Link } from 'react-router-dom';

export const MovieCard = (props: IMovie) => {
  const {poster_path, title, vote_average, release_date} = props;
  const posterUrl = `${IMG_URL}/${poster_path}`;
  const releaseYear = release_date ? release_date.split('-')[0] : 'none';

  const handleMovieClick = () => {
    console.log('handleMovieClick');
    
  };

  return (
    <Card sx={{ width: 200, height: 310, margin: 2, position: 'relative' }}>
    <CardActionArea onClick={handleMovieClick} component={Link} to="/movie">
      <CardMedia
        component="img"
        image={posterUrl}
        alt={title}
        sx={{ height: 250 }}
      />
      <CardContent sx={{ backgroundColor: 'var(--card-color)', color: '#fff', padding: '10px'}}>
        <Typography gutterBottom variant="h6" component="p" sx={{ fontSize: 12, margin: 0 }}>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', position: 'absolute', top: 2, right: 5 }}>
          <GradeIcon sx={{ color: 'yellow' }} fontSize="large" />
          <Typography variant="body2" color="secondary" sx={{ fontSize: 9, fontWeight: 'bold', position: 'absolute', top: 12, left: 11 }}>{vote_average < 10 ? vote_average.toFixed(1) : vote_average}</Typography>
        </Box>
        <Typography variant="body2" color="secondary" sx={{ fontSize: 10, marginBottom: 3 }}>{releaseYear}</Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  );
}