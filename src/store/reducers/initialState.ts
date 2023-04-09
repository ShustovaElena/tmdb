import { IState } from "./types";

export const initialState: IState = {
  movies: [],
  filterName: 'popularity.desc',
  searchName: '',
  totalPages: 0,
  movie: {},
  actors: [],
  currentPage: 'movies',
  actorInfo: {},
  actorMovie: []
};