import { BASE_URL } from './../constants';
import { Dispatch } from 'redux';

export const getMovies = (pageNumber: number) => {
  return (dispatch: Dispatch) => fetch(`${BASE_URL}/page=${pageNumber}`)
    .then(res => res.json())
    .then(
      data => dispatch({ type: 'LOAD_MOVIES_SUCCESS', payload: data.results }),
      err => dispatch({ type: 'LOAD_MOVIES_FAILURE', err })
    );
}