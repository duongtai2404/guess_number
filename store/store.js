import { configureStore } from '@reduxjs/toolkit';
import slice from '../reducers/reducer';

export default configureStore({
  reducer: {
    game: slice
  }
});
