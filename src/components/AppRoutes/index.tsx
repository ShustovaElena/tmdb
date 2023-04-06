import { Routes, Route } from 'react-router-dom';
import { MainPage } from '../../pages/MainPage';
import { MoviePage } from '../../pages/MoviePage';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="*" element={<PageNotFound />} /> */}
      <Route path="/" element={<MainPage />} />
      <Route path="/movie" element={<MoviePage />} />
    </Routes>
  );
};
