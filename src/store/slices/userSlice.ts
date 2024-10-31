import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types';

interface UserState {
  currentUser: User | null;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  currentUser: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
    },
    toggleFavorite: (state, action: PayloadAction<string>) => {
      if (!state.currentUser) return;

      const favorites = state.currentUser.favorites;
      const index = favorites.indexOf(action.payload);

      if (index === -1) {
        favorites.push(action.payload);
      } else {
        favorites.splice(index, 1);
      }
    },
    logout: state => {
      state.currentUser = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, toggleFavorite, logout } = userSlice.actions;
export default userSlice.reducer;