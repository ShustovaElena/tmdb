import { IState } from "./types";

export const initialState: IState = {
  movies: null,
  filterName: 'popularity.desc',
  searchName: '',
  totalPages: 0,
  movie: {},
  actors: [],
  currentPage: 'movies',
  actorInfo: {},
  actorMovie: []
};