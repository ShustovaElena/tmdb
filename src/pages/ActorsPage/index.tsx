import { useEffect } from "react";
import { CardsActors } from "../../components/CardsActors";
import { Header } from "../../components/Header";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getActors } from "../../api/actor";
import { Paginator } from "../../components/Paginator";
import { Preloader } from "../../components/Preloader";

export const ActorsPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(state => state.movies);

  useEffect(() => {
    dispatch(getActors());
  }, [dispatch])
  return (
    <>
      <Header />
      {isLoading ? <Preloader /> : <CardsActors />}
      <Paginator />
    </>
  );
}