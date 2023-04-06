import { SEARCH_URL } from './../constants';
import { Dispatch } from 'redux';

export const getDataBySearch = (searchName: string) => {
  const search = searchName.split(' ').join('+');
  console.log('search', search);
  
  return (dispatch: Dispatch) => fetch(`${SEARCH_URL}&query=${search}`)
    .then(res => res.json())
    .then(
      data => dispatch({ type: 'LOAD_MOVIES_SUCCESS', payload: data.results }),
      err => dispatch({ type: 'LOAD_MOVIES_FAILURE', err })
    );
}