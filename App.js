/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {getBrightness, setBrightness} from './Brightness';
import Counter from './Counter';

const App: () => Node = () => {
  const [value, setValue] = useState(-1);
  const onPress = async () => {
    // ToastModule.show('Hello World', ToastModule.SHORT);
    // Alert.alert('Hello World');
    // console.log({string: Alert.STRING_VALUE, number: Alert.NUMBER_VALUE});
    const brightness = await getBrightness();
    setValue(brightness);
  };

  const onPressLow = () => {
    setBrightness(0.25);
  };

  const onPressHigh = () => {
    setBrightness(1);
  };

  const onPressLeftButton = () => {
    setValue(value + 1);
  };

  const onPressRightButton = () => {
    setValue(value - 1);
  };

  return (
    <Counter
      style={styles.block}
      value={1}
      leftButtonText="+1"
      rightButtonText="-1"
      onPressLeftButton={onPressLeftButton}
      onPressRightButton={onPressRightButton}
    />
  );
};

const styles = StyleSheet.create({
  block: {flex: 1},
  textWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontSize: 24,
  },
});

export default App;
