import { ThunkAction, Action, PayloadAction } from '@reduxjs/toolkit';

export type BlogPostType = {
  id: string;
  title?: string;
  description?: string;
  imgUrl?: string;
};

export type RootState = {
  introduction: IntroductionState;
  blog: BlogState;
};

export type PayloadActionType = PayloadAction<string>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export interface IntroductionState {
  imgUrl: string;
  description: string;
}

export type BlogState = BlogPostType[];
