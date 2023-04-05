import { CardActionArea, Box, Typography, CardMedia, CardContent, Card } from '@mui/material';
import { IMovie } from '../../store/reducers/types';
import { IMG_URL } from '../../constants';
import GradeIcon from '@mui/icons-material/Grade';

export const MovieCard = (props: IMovie) => {
  const {poster_path, title, vote_average} = props;
  const posterUrl = `${IMG_URL}/${poster_path}`;

  return (
    <Card sx={{ width: 180, height: 320, margin: 2, position: 'relative' }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={posterUrl}
        alt={title}
        sx={{ height: 250 }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="p" sx={{ fontSize: 12, margin: 0, width: 170 }}>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', position: 'absolute', top: 2, left: 140 }}>
          <GradeIcon sx={{ color: 'yellow' }} fontSize="large" />
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: 9, paddingBottom: 2, position: 'absolute', top: 12, left: 11 }}>{vote_average}</Typography>
        </Box>
      </CardContent>
    </CardActionArea>
  </Card>
  );
}