import { Routes, Route } from 'react-router-dom';
import { MainPage } from '../../pages/MainPage';
import { MoviePage } from '../../pages/MoviePage';
import { ActorsPage } from '../../pages/ActorsPage';
import { ActorInfoPage } from '../../pages/ActorInfoPage';
import { PageNotFound } from '../../pages/PageNotFound';
import { useAppSelector } from '../../store/hooks';
import { Preloader } from '../Preloader';

export const AppRoutes = () => {
  const { isLoading } = useAppSelector(state => state.movies);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/actors" element={<ActorsPage />} />
      <Route path="/:title" element={isLoading ? <Preloader /> : <MoviePage />}/>
      <Route path="/actors/:name" element={isLoading ? <Preloader /> : <ActorInfoPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
