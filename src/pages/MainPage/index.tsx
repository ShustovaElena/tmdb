import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";

import { getMovies } from '../../api/movie';
import { Cards } from "../../components/Cards";

export const MainPage = () => {
  const dispatch = useAppDispatch();  

  useEffect(() => {
    dispatch(getMovies(1));
  }, [])

  return <Cards />;
}