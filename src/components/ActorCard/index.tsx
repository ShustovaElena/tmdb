import { CardActionArea, Typography, CardMedia, CardContent, Card } from '@mui/material';
import { IMG_URL } from '../../constants';
import { Link } from 'react-router-dom';
import { IActors } from '../../store/reducers/types';

export const ActorCard = (props: IActors) => {
  const { name, profile_path } = props;

  const posterUrl = `${IMG_URL}/${profile_path}`;

  return (
    <Card sx={{ width: 150, height: 280, margin: 2, position: 'relative' }}>
    <CardActionArea> 
       {/* component={Link} to={`/${title}`} */}
      <CardMedia
        component="img"
        image={posterUrl}
        alt={name}
        sx={{ height: 250 }}
      />
      <CardContent sx={{ backgroundColor: 'var(--card-color)', color: '#fff', padding: '10px'}}>
        <Typography gutterBottom variant="h6" component="p" sx={{ fontSize: 12, margin: 0 }}>
          {name}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  );
}