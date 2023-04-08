import { useAppSelector } from "../../store/hooks";
import { Box, Button, Container, Typography, IconButton } from "@mui/material";
import { IMG_URL } from '../../constants';
import { Header } from "../../components/Header";
import GradeIcon from '@mui/icons-material/Grade';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { useEffect, useState } from "react";
import { IActorMovie } from "../../store/reducers/types";
import { MovieCard } from "../../components/MovieCard";

export const ActorInfoPage = () => {
  const { actorInfo, actorMovie } = useAppSelector((state) => state.actors);
  const { name, biography, birthday, deathday, place_of_birth, popularity, profile_path } = actorInfo;
  const [overview, setOverview] = useState('');
  const [textButton, setTextButton] = useState('more');
  const [isOpen, setIsOpen] = useState(false);
  console.log(actorMovie);

  useEffect(() => {
    if (biography) {
      if (textButton === 'hidden') {
        setOverview(biography);
      }
      if (textButton === 'more') {
        setOverview((biography as string).slice(0, 400));
      }
    }
  }, [actorInfo, textButton])

  const handleMoreButtonClick = () => {
    if (textButton === 'more') {
      setTextButton('hidden');
    }
    if (textButton === 'hidden') {
      setTextButton('more');
    }
  }

  const handleDetailButtonClick = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <>
      <Box sx={{ background: `url(${IMG_URL}${profile_path}) no-repeat`, backgroundSize: '35% 100%', backgroundPosition: '100% 0', minHeight: '100vh'}}>
        <Header />
        <Container sx={{ display: 'flex', gap: '80px', alignItems: 'flex-end', height: '80vh'}}>
          <Box sx={{ width: '65%', display: 'flex', alignItems: 'center', gap: '10px', flexDirection: 'column', color: 'var(--text-color)' }}>
            <Typography 
              variant="h1" 
              component="h1" 
              sx={{ color: 'var(--title-color)', textTransform: 'uppercase', fontWeight: 900, minWidth: 400, maxWidth: 800, letterSpacing: '4px', fontSize: '5rem' }}
            >
              {name}
            </Typography>
            <Typography variant="h5" component="h5">Birthday: {birthday}</Typography>
            {deathday && <Typography variant="h5" component="h5">Deathday: {deathday}</Typography>}
            <Typography variant="h5" component="h5">Place of birth: {place_of_birth}</Typography>
            <Typography variant="h5" component="h5"><GradeIcon fontSize="small" sx={{ color: 'var(--title-color)' }} />{Math.round(popularity)}</Typography>
            <Typography variant="h5" component="p" sx={{ fontSize: "1rem", textAlign: 'justify' }}>
              {overview}
            {(biography && (biography as string).length > 400) && <Button variant="text" sx={{ padding: 0}} onClick={handleMoreButtonClick}>{`...${textButton}`}</Button>}
            </Typography>
            </Box>
        </Container>
        <IconButton sx={{ width: '100vw', margin: '0 auto', color: 'var(--title-color)' }} onClick={handleDetailButtonClick}>
          <KeyboardDoubleArrowDownIcon />
        </IconButton>
      </Box>
      {isOpen && <Box sx={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', gap: '10px', flexWrap: 'wrap' }}>
      {(actorMovie as IActorMovie[]).map((item: IActorMovie) => {
        return <MovieCard {...item}/>
      })}
    </Box>}
  </>
  );
}