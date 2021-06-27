import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import Card from '../components/Card';

import { COLOR_DANGER } from '../constants/color';

const CardSuccessGame = ({ numberGuess, handleFinish }) => {
  return (
    <Card>
      <View>
        <Text style={styles.title}>Number Guess : </Text>
      </View>
      <View style={styles.numberContainer}>
        <Text style={styles.numberText}>{numberGuess}</Text>
      </View>
      <View>
        <Button title='Finish' onPress={handleFinish} />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: '600'
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

export default CardSuccessGame;
