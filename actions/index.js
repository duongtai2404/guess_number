import { GUEST_NUMBER_CHANGE } from './constants';

export const changeGuestNumber = number => {
  return {
    type: GUEST_NUMBER_CHANGE,
    payload: number
  };
};
