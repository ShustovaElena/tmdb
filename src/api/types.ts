import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../store/store';

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState, 
  null,
  AnyAction
>