import { configureStore, Store } from '@reduxjs/toolkit';
import introductionReducer from '../features/introductionSlice';
import { RootState } from '../types/types';
import blogReducer from '../features/blogSlice';

const store: Store<RootState> = configureStore({
  reducer: {
    introduction: introductionReducer,
    blog: blogReducer,
  },
});

export default store;
