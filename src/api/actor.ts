import { PERSON_URL, PERSON_BY_ID_URL, API_KEY } from './../constants';
import { Action, Dispatch } from 'redux';

export const getActors = (pageNumber: number = 1) => {
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

export const getPersonById = (id: number) => {
  console.log(id)
  return (dispatch: Dispatch) => fetch(`${PERSON_BY_ID_URL}${id}?api_key=${API_KEY}&language=en-US`)
    .then(res => res.json())
    .then(
      data => {
        dispatch({ type: 'LOAD_ACTOR_INFO_SUCCESS', payload: data });
      },
      err => dispatch({ type: 'LOAD_ACTOR_INFO_FAILURE', err })
    );
}

export const getMoviesPersonById = (id: number) => {
  return (dispatch: Dispatch) => fetch(`${PERSON_BY_ID_URL}${id}/movie_credits?api_key=${API_KEY}&language=en-US`)
    .then(res => res.json())
    .then(
      data => {
        dispatch({ type: 'LOAD_ACTOR_MOVIES_SUCCESS', payload: data.cast });
      },
    );
}