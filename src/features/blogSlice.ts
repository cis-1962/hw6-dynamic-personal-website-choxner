import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BlogPostType, RootState } from '../types/types';

const initialState: BlogPostType[] = [];

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<BlogPostType>) => {
      state.push(action.payload);
    },
    editPost: (state, action: PayloadAction<BlogPostType>) => {
      const index = state.findIndex((post) => post.id === action.payload.id);

      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deletePost: (state, action: PayloadAction<BlogPostType>) => {
      const index = state.findIndex((post) => post.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addPost, editPost, deletePost } = blogSlice.actions;
export default blogSlice.reducer;

// Selector to get all blog posts
export const selectAllBlogPosts = (state: RootState): BlogPostType[] =>
  state.blog;
export const selectPostById = (state: RootState, postId: string) =>
  state.blog.find((post: BlogPostType) => post.id === postId);
