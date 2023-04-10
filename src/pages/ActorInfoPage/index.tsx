import { useAppSelector } from "../../store/hooks";
import { Box, Button, Container, Typography, IconButton, Breadcrumbs, Link } from "@mui/material";
import { IMG_URL } from '../../constants';
import { Header } from "../../components/Header";
import GradeIcon from '@mui/icons-material/Grade';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { useEffect, useState } from "react";
import { IActorMovie } from "../../store/reducers/types";
import { MovieCard } from "../../components/MovieCard";
import { PageNotFound } from "../PageNotFound";

export const ActorInfoPage = () => {
  const { actorInfo, actorMovie } = useAppSelector((state) => state.actors);
  const { id, name, biography, birthday, deathday, place_of_birth, popularity, profile_path } = actorInfo;
  const [overview, setOverview] = useState('');
  const [textButton, setTextButton] = useState('more');
  const [isOpen, setIsOpen] = useState(false);

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

  useEffect(() => {
    if (isOpen) {
      window.scrollTo({
        top: window.innerHeight,
        left: 0,
        behavior: "smooth"
      });
    }
  }, [isOpen])

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
  
  if (id) {
  return (
    <>
      <Box sx={{ background: `url(${IMG_URL}${profile_path}) no-repeat`, backgroundSize: '35% 100%', backgroundPosition: '100% 0', minHeight: '100vh', maxWidth: '100vw'}}>
        <Header />
        <Breadcrumbs separator="›" aria-label="breadcrumb" color="secondary" sx={{ marginLeft: '120px' }}>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/actors">
            Popular actors
          </Link>
          <Typography color="secondary">{name}</Typography>
        </Breadcrumbs>
        <Container sx={{ display: 'flex', gap: '80px', alignItems: 'flex-end', height: '75vh', maxWidth: '100vw'}}>
          <Box sx={{ width: '65%', display: 'flex', alignItems: 'center', gap: '10px', flexDirection: 'column', color: 'var(--text-color)' }}>
            <Typography 
              variant="h1" 
              component="h1" 
              sx={{ color: 'var(--title-color)', textTransform: 'uppercase', fontWeight: 900, minWidth: 400, maxWidth: 800, letterSpacing: '4px', fontSize: '4rem' }}
            >
              {name}
            </Typography>
            <Typography variant="h5" component="p">Birthday: {birthday}</Typography>
            {deathday && <Typography variant="h5" component="p">Deathday: {deathday}</Typography>}
            <Typography variant="h5" component="p">Place of birth: {place_of_birth}</Typography>
            <Typography variant="h5" component="p"><GradeIcon fontSize="small" sx={{ color: 'var(--title-color)' }} />{Math.round(popularity)}</Typography>
            <Typography variant="h5" component="p" sx={{ fontSize: "0.8rem", textAlign: 'justify' }}>
              {overview}
            {(biography && (biography as string).length > 400) && <Button color="secondary" variant="text" sx={{ padding: 0}} onClick={handleMoreButtonClick}>{`...${textButton}`}</Button>}
            </Typography>
            </Box>
        </Container>
        <IconButton id="scroll" sx={{ width: '100vw', margin: '0 auto', color: 'var(--title-color)' }} onClick={handleDetailButtonClick}>
          <KeyboardDoubleArrowDownIcon />
        </IconButton>
      </Box>
      {isOpen && <Box sx={{ maxWidth: '100vw', marginTop: '20px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      {(actorMovie as IActorMovie[]).map((item: IActorMovie) => {
        return <MovieCard key={item.id} {...item}/>
      })}
    </Box>}
  </>
  );
  } else {
    return <PageNotFound />
  }
}