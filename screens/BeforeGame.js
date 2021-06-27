import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Card from '../components/Card';
import Input from '../components/Input';

import { COLOR_DANGER } from '../constants/color';

import { startGame } from '../reducers/reducer';

const BeforeGame = () => {
  const dispatch = useDispatch();
  const guestNumber = useSelector(state => state.game.guestNumber);

  const handleStartGame = () => {
    dispatch(startGame());
  };
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Card>
          <Input />
        </Card>
      </View>
      {guestNumber === '' ? (
        <React.Fragment />
      ) : (
        <View>
          <Card>
            <Text>You Number</Text>
            <View style={styles.numberContainer}>
              <Text style={styles.numberText}>{guestNumber}</Text>
            </View>
            <Button title='Start game' onPress={handleStartGame} />
          </Card>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center'
  },
  cardContainer: {
    marginBottom: 20
  },
  numberContainer: {
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLOR_DANGER,
    borderWidth: 2,
    borderRadius: 50,
    marginVertical: 20
  },
  numberText: {
    fontSize: 20
  }
});

export default BeforeGame;
