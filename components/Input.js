import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Keyboard } from 'react-native';
import { useDispatch } from 'react-redux';

import { COLOR_DANGER, COLOR_PRIMARY } from '../constants/color';
import { changeGuestNumber } from '../reducers/reducer';

const Input = () => {
  const dispatch = useDispatch();
  const [guestNumberState, changeGuestNumberState] = useState('');

  const handlerConfirm = () => {
    changeGuestNumberState('');
    Keyboard.dismiss();
    dispatch(changeGuestNumber(guestNumberState));
  };

  return (
    <React.Fragment>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='number'
          autoFocus
          maxLength={2}
          autoCompleteType='off'
          textAlign='center'
          value={guestNumberState}
          keyboardType='number-pad'
          onChangeText={value => changeGuestNumberState(value)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title='Reset'
            color={COLOR_DANGER}
            onPress={() => changeGuestNumberState('')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title='Confirm'
            color={COLOR_PRIMARY}
            onPress={handlerConfirm}
          />
        </View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10
  },
  input: {
    borderBottomWidth: 1,
    justifyContent: 'center'
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {}
});

export default Input;
