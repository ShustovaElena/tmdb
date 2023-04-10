import { Action, Dispatch } from 'redux';
import { BASE_URL, MOVIE_BY_ID_URL, API_KEY } from './../constants';

export const getMovies = (filterName: string, pageNumber: number = 1) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: 'SET_IS_LOADING', payload: true });
    fetch(`${BASE_URL}&sort_by=${filterName}&page=${pageNumber}`)
    .then(res => res.json(), err => {throw new Error(err)})
    .then(
      data => {
        dispatch({ type: 'LOAD_MOVIES_SUCCESS', payload: data.results });
        dispatch({ type: 'SET_TOTAL_PAGES', payload: data.total_pages });
        dispatch({ type: 'SET_IS_LOADING', payload: false });
      }
    );
  }
}

export const getMovieById = (id: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: 'SET_IS_LOADING', payload: true });
    fetch(`${MOVIE_BY_ID_URL}${id}?api_key=${API_KEY}`)
    .then(res => res.json(), err => {throw new Error(err)})
    .then(
      data => {
        dispatch({ type: 'LOAD_MOVIE_SUCCESS', payload: data });
        dispatch({ type: 'SET_IS_LOADING', payload: false });
      }
    );
  }
}