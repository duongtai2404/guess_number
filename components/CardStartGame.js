import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { COLOR_DANGER } from '../constants/color';

import Card from './Card';

const CardStartGame = ({ number, handleLess, handleHigher }) => {
  return (
    <Card>
      <View style={styles.numberContainer}>
        <Text style={styles.numberText}>{number}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title='Less' onPress={handleLess} />
        </View>
        <View style={styles.button}>
          <Button title='Higher' onPress={handleHigher} />
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    width: 80
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

export default CardStartGame;
