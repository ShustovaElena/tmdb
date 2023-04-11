import { initialState } from './initialState';
import { Action, IActorInfo, IActorMovie, IActors, IState } from './types';

export const actorReducer = (state: IState = initialState, action: Action<string, IActorInfo | IActors | number | IActorMovie>) => {
  switch (action.type) {
    case 'LOAD_ACTORS_SUCCESS': {
      return {
        ...state,
        actors: action.payload,
      }
    }
    case 'SET_CURRENT_PAGE': {
      return {
        ...state,
        currentPage: action.payload,
      }
    }
    case 'LOAD_ACTOR_INFO_SUCCESS': {
      return {
        ...state,
        actorInfo: action.payload,
      }
    }
    case 'LOAD_ACTOR_MOVIES_SUCCESS': {
      return {
        ...state,
        actorMovie: action.payload,
      }
    }
    default:
      return state
  }
}