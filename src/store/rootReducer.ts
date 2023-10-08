import { CombinedState, combineReducers, Reducer } from 'redux';

import { projectsApi } from '../services/apiService';

export const initialState = {};

export type RootStoreType = typeof initialState;

export const createRootReducer = (): Reducer<CombinedState<RootStoreType>> =>
    combineReducers<RootStoreType>({
        [projectsApi.reducerPath]: projectsApi.reducer,
    });
