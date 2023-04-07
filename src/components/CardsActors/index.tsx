import { ActorCard } from "../ActorCard";
import { useAppSelector } from "../../store/hooks";
import { Box } from "@mui/material";
import { IActors } from "../../store/reducers/types";

export const CardsActors = () => {
  const { actors } = useAppSelector((state) => state.actors);

  return(
    <Box sx={{ minWidth: '100vw', margin: '0 auto', padding: 2, minHeight: '100vh', display: 'flex', justifyContent: 'space-between',  flexWrap: 'wrap' }}>
      {(actors as IActors[]).map((actors: IActors) => {
      return <ActorCard key={actors.id} {...actors} />
      })}
  </Box>
  );
}