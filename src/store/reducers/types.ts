export interface IState {
  movies: IMovies[] | [],
  filterName: string,
  totalPages: number,
  searchName: string,
  movie: IMovie | {},
  actors: IActors[],
  currentPage: string,
  actorInfo: IActorInfo | {},
  actorMovie: IActorMovie[]
}

export type IMovies = {
  adult: boolean;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IAction {
  type: string;
  payload: IMovies[];
}

export type IMovie = {
  adult: boolean,
  backdrop_path: string,
  belongs_to_collection: IBelongsToCollection,
  budget: number,
  genres: IGenres[],
  homepage: string
  id: number,
  imdb_id: string
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  production_companies: IProductionCompanies[],
  production_countries: IProductionContries[],
  release_date: string,
  revenue: number,
  runtime: number,
  spoken_languages: ISpokenLanguages[],
  status: string,
  tagline: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

type IBelongsToCollection = {
  id: number,
  name: string,
  poster_path: string,
  backdrop_path: string
}

export type IGenres = {
  id: number,
  name: string
}

export type IProductionCompanies = {
  id: number,
  logo_path: string,
  name: string,
  origin_country: string,
}

type IProductionContries = {
  iso_3166_1: string,
  name: string
}

type ISpokenLanguages = {
  english_name: string,
  iso_639_1: string,
  name: string
}

export type IActors = {
  adult: boolean,
  gender: number,
  id: number,
  known_for: IActorsKnownFor[],
  known_for_department: string,
  name: string,
  popularity: number,
  profile_path: string
}

type IActorsKnownFor = {
  adult: boolean,
  backdrop_path: string,
  genre_ids: number[],
  id: number,
  media_type: string,
  original_language: string,
  original_title: string,
  overview: string,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

export type IActorInfo = {
  birthday: string,
  known_for_department: string,
  deathday: string,
  id: number,
  name: string,
  also_known_as: string[],
  gender: number, 
  biography: string,
  popularity: number,
  place_of_birth: string,
  profile_path: string,
  adult: boolean,
  imdb_id: string,
  homepage: string
}

export type IActorMovie = {
  adult: boolean,
  backdrop_path: string,
  genre_ids: number[],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
  character: string,
  credit_id: string,
  order: number
}