import { SEARCH_URL, SEARCH_PERSON_URL } from './../constants';
import { Action, Dispatch } from 'redux';

export const getDataBySearch = (searchName: string, pageNumber: number = 1) => {
  const search = searchName.split(' ').join('+');

  return (dispatch: Dispatch<Action>) => fetch(`${SEARCH_URL}&query=${search}&page=${pageNumber}`)
    .then(res => res.json(), err => {throw new Error(err)})
    .then(
      data => {
        dispatch({ type: 'LOAD_MOVIES_SUCCESS', payload: data.results });
        dispatch({ type: 'SET_TOTAL_PAGES', payload: data.total_pages });
      }
    )
}

export const getPersonBySearch = (searchName: string, pageNumber: number = 1) => {
  const search = searchName.split(' ').join('+');

  return (dispatch: Dispatch<Action>) => fetch(`${SEARCH_PERSON_URL}&query=${search}&page=${pageNumber}`)
    .then(res => res.json(), err => {throw new Error(err)})
    .then(
      data => {
        dispatch({ type: 'LOAD_ACTORS_SUCCESS', payload: data.results });
        dispatch({ type: 'SET_TOTAL_PAGES', payload: data.total_pages });
      }
    )
}