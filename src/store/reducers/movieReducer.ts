import { initialState } from './initialState';
import { IState, IMovie, Action, IMovies } from './types';

export const movieReducer = (state: IState = initialState, action: Action<string, IMovies | IMovie | string | number | boolean>) => {
  switch (action.type) {
    case 'LOAD_MOVIES_SUCCESS': {
      return {
        ...state,
        movies: action.payload,
      }
    }
    case 'SET_FILTER_NAME': {
      return {
        ...state,
        filterName: action.payload,
      }
    }
    case 'SET_TOTAL_PAGES': {
      return {
        ...state,
        totalPages: action.payload,
      }
    }
    case 'SET_SEARCH_NAME': {
      return {
        ...state,
        searchName: action.payload,
      }
    }
    case 'LOAD_MOVIE_SUCCESS': {
      return {
        ...state,
        movie: action.payload,
      }
    }
    case 'SET_IS_LOADING': {
      return {
        ...state,
        isLoading: action.payload,
      }
    }
    default:
      return state
  }
}