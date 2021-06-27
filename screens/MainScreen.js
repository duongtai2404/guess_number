import React from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { useSelector } from 'react-redux';

import Header from '../components/Header';
import BeforeGame from '../screens/BeforeGame';
import StartGame from '../screens/StartGame';

const MainScreen = () => {
  const startGame = useSelector(state => state.game.startGame);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Header title='Guess Number' />
        {startGame ? <StartGame /> : <BeforeGame />}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  }
});

export default MainScreen;
