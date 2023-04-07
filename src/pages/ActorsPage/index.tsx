import { useEffect } from "react";
import { CardsActors } from "../../components/CardsActors";
import { Header } from "../../components/Header";
import { useAppDispatch } from "../../store/hooks";
import { getActors } from "../../api/actor";

export const ActorsPage = () => {
  const dispatch = useAppDispatch();  

  useEffect(() => {
    dispatch(getActors());
  }, [dispatch])
  return (
    <>
      <Header />
      <CardsActors />
    </>
  );
}