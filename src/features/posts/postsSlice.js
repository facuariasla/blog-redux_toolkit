import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: 1,
    title: "Learning redux toolkit",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus orci vel velit pellentesque bibendum. Ut auctor, est id eleifend interdum, elit justo euismod augue, eu egestas leo nibh ac enim.",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 1,
      wow: 0,
      heart: 0,
      rocket: 4,
      coffee: 0,
    },
  },
  {
    id: 2,
    title: "Slices...",
    content:
      "Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum ut libero et nisi commodo consectetur et a dolor. Donec eu ipsum est. Nulla vestibulum viverra augue a egestas.",
    date: sub(new Date(), { minutes: 60 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      // Accion que 'prepara' el payload para posteriormente hacer algo con el
      // En este caso le agrega el id, y despues el reducer lo agrega al state
      prepare: (title, content, userId) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            date: new Date().toISOString(),
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },

      reducer: (state, action) => {
        state.push(action.payload);
      },
    },
    reactionAdded: (state, action) => {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export const selectAllPosts = (state) => state.posts;
export const { postAdded, reactionAdded } = postsSlice.actions;
export default postsSlice.reducer;
