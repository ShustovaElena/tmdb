import { legacy_createStore as createStore, applyMiddleware, AnyAction} from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { IState } from './reducers/types';

type  DispatchFunctionType = ThunkDispatch<IState, undefined, AnyAction>
export const store = createStore(rootReducer, applyMiddleware<DispatchFunctionType, IState>(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
