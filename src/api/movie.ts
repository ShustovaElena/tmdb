import { BASE_URL, MOVIE_BY_ID_URL, API_KEY } from './../constants';
import { Action, Dispatch } from 'redux';

export const getMovies = (filterName: string, pageNumber: number = 1) => {
  return (dispatch: Dispatch<Action>) => fetch(`${BASE_URL}&sort_by=${filterName}&page=${pageNumber}`)
    .then(res => res.json())
    .then(
      data => {
        dispatch({ type: 'LOAD_MOVIES_SUCCESS', payload: data.results });
        dispatch({ type: 'SET_TOTAL_PAGES', payload: data.total_pages });
      },
      err => dispatch({ type: 'LOAD_MOVIES_FAILURE', err })
    );
}

export const getMovieById = (id: number) => {
  console.log('getMovieById', id);
  
  return (dispatch: Dispatch<Action>) => fetch(`${MOVIE_BY_ID_URL}${id}?api_key=${API_KEY}`)
    .then(res => res.json())
    .then(
      data => {
        dispatch({ type: 'LOAD_MOVIE_SUCCESS', payload: data });
      },
      err => dispatch({ type: 'LOAD_MOVIE_FAILURE', err })
    );
}