import { GUEST_NUMBER_CHANGE } from '../actions/constants';

const initalState = {
  guestNumber: 0,
  numberGuess: 0
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case GUEST_NUMBER_CHANGE:
      return { ...state, guestNumber: action.payload };
    // case INCREASE_NUMBER_GUESS:
    //   const numberGuess = state.numberGuess++;
    //   return { ...state, numberGuess: numberGuess };
    default:
      return state;
  }
};

export default reducer;
