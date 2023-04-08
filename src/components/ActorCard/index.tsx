import { CardActionArea, Typography, CardMedia, CardContent, Card } from '@mui/material';
import { IMG_URL } from '../../constants';
import { Link } from 'react-router-dom';
import { IActors } from '../../store/reducers/types';
import { useAppDispatch } from '../../store/hooks';
import { getMoviesPersonById, getPersonById } from '../../api/actor';

export const ActorCard = (props: IActors) => {
  const dispatch = useAppDispatch();
  const { name, profile_path, id } = props;

  const posterUrl = `${IMG_URL}/${profile_path}`;

  const handleActorClick = () => {
    dispatch(getPersonById(id));
    dispatch(getMoviesPersonById(id));
  };

  return (
    <Card sx={{ width: 150, height: 280, margin: 2, position: 'relative' }}>
    <CardActionArea onClick={handleActorClick} component={Link} to={`/actors/${name}`} > 
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