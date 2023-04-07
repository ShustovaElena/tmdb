import { PERSON_URL } from './../constants';
import { Dispatch } from 'redux';

export const getActors = (pageNumber: number = 1) => {
  console.log(pageNumber);
  
  return (dispatch: Dispatch) => fetch(`${PERSON_URL}&&page=${pageNumber}`)
    .then(res => res.json())
    .then(
      data => {
        dispatch({ type: 'LOAD_ACTORS_SUCCESS', payload: data.results });
        dispatch({ type: 'SET_TOTAL_PAGES_ACTORS', payload: data.total_pages });
      },
      err => dispatch({ type: 'LOAD_ACTORS_FAILURE', err })
    );
}