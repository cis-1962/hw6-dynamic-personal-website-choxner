import { createSlice } from '@reduxjs/toolkit';
import { IntroductionState, PayloadActionType } from '../types/types';

const initialState: IntroductionState = {
  imgUrl: 'https://picsum.photos/200/300',
  description: '',
};

export const introductionSlice = createSlice({
  name: 'introduction',
  initialState,
  reducers: {
    updateDescription: (state, action: PayloadActionType) => {
      state.description = action.payload;
    },
    updateImgUrl: (state, action: PayloadActionType) => {
      state.imgUrl = action.payload;
    },
  },
});

export const { updateDescription, updateImgUrl } = introductionSlice.actions;

export const selectIntroduction = (state: {
  introduction: IntroductionState;
}) => state.introduction;

export default introductionSlice.reducer;
