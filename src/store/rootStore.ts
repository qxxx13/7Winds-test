import { configureStore } from '@reduxjs/toolkit';

import { projectsApi } from '../services/apiService';
import { createRootReducer } from './rootReducer';

const reducer = createRootReducer();

export const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(projectsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
