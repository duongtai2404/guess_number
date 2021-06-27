import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { finishGame } from '../reducers/reducer';

import CardStartGame from '../components/CardStartGame';
import CardSuccessGame from '../components/CardSuccessGame';

const randomNumberBetweenTwoNumber = (min, max) => {
  const range = max - min;
  const randomNumber = Math.floor(Math.random() * range);
  return min + (randomNumber === 0 ? 1 : randomNumber);
};

const StartGame = () => {
  const dispatch = useDispatch();

  const guestNumber = useSelector(state => state.game.guestNumber);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [numberRandom, setNumberRandom] = useState(() => {
    const initialState = randomNumberBetweenTwoNumber(min, max);
    return initialState;
  });
  const [numberGuess, setNumberGuess] = useState(1);

  const handleLess = () => {
    setMax(numberRandom);
    setNumberRandom(randomNumberBetweenTwoNumber(min, numberRandom));
    setNumberGuess(numberGuess + 1);
  };

  const handleHigher = () => {
    setMin(numberRandom);
    setNumberRandom(randomNumberBetweenTwoNumber(numberRandom, max));
    setNumberGuess(numberGuess + 1);
  };

  const handleFinish = () => {
    dispatch(finishGame());
  };

  return (
    <View style={styles.container}>
      {guestNumber === numberRandom ? (
        <View>
          <CardSuccessGame
            numberGuess={numberGuess}
            handleFinish={handleFinish}
          />
        </View>
      ) : (
        <View style={styles.cardGame}>
          <CardStartGame
            number={numberRandom}
            handleLess={handleLess}
            handleHigher={handleHigher}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  cardGame: {
    width: '100%'
  }
});

export default StartGame;
