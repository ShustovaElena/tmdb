import { PERSON_URL, PERSON_BY_ID_URL, API_KEY } from './../constants';
import { AppThunk } from './types';

export const getActors = (pageNumber: number = 1): AppThunk => {
  return (dispatch) => {
    dispatch({ type: 'SET_IS_LOADING', payload: true });
    fetch(`${PERSON_URL}&&page=${pageNumber}`)
    .then(res => res.json(), err => {throw new Error(err)})
    .then(
      data => {
        dispatch({ type: 'LOAD_ACTORS_SUCCESS', payload: data.results });
        dispatch({ type: 'SET_TOTAL_PAGES_ACTORS', payload: data.total_pages });
        dispatch({ type: 'SET_IS_LOADING', payload: false });
      }
    );}
}

export const getPersonById = (id: number): AppThunk => {
  return (dispatch) => {
    dispatch({ type: 'SET_IS_LOADING', payload: true });
    fetch(`${PERSON_BY_ID_URL}${id}?api_key=${API_KEY}&language=en-US`)
    .then(res => res.json(), err => {throw new Error(err)})
    .then(
      data => {
        dispatch({ type: 'LOAD_ACTOR_INFO_SUCCESS', payload: data });
        dispatch({ type: 'SET_IS_LOADING', payload: false });
      }
    );}
}

export const getMoviesPersonById = (id: number): AppThunk => {
  return (dispatch) => {
    fetch(`${PERSON_BY_ID_URL}${id}/movie_credits?api_key=${API_KEY}&language=en-US`)
    .then(res => res.json(), err => {throw new Error(err)})
    .then(
      data => {
        dispatch({ type: 'LOAD_ACTOR_MOVIES_SUCCESS', payload: data.cast });
      },
    );}
}