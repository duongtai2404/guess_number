import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'game',
  initialState: {
    guestNumber: '',
    numberGuess: 0,
    startGame: false
  },
  reducers: {
    changeGuestNumber: (state, action) => {
      state.guestNumber = parseInt(action.payload);
    },
    incrementNumberGuess: state => {
      state.numberGuess++;
    },
    startGame: state => {
      state.startGame = true;
    },
    finishGame: state => {
      state.guestNumber = '';
      state.numberGuess = 0;
      state.startGame = false;
    }
  }
});

export const {
  changeGuestNumber,
  incrementNumberGuess,
  startGame,
  finishGame
} = slice.actions;

export default slice.reducer;
