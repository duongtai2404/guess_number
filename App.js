import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';

import store from './store/store';
import MainScreen from './screens/MainScreen';

export default function App() {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
}
