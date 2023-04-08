import { Routes, Route } from 'react-router-dom';
import { MainPage } from '../../pages/MainPage';
import { MoviePage } from '../../pages/MoviePage';
import { ActorsPage } from '../../pages/ActorsPage';
import { ActorInfoPage } from '../../pages/ActorInfoPage';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="*" element={<PageNotFound />} /> */}
      <Route path="/" element={<MainPage />} />
      <Route path="/actors" element={<ActorsPage />} />
      <Route path="/:title" element={<MoviePage />} />
      <Route path="/actors/:name" element={<ActorInfoPage />} />
    </Routes>
  );
};
