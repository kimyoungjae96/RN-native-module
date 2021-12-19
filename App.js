/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import React from 'react';
import {Button, SafeAreaView, StyleSheet} from 'react-native';
import ToastModule from './Toast';
import Alert from './Alert';

const App: () => Node = () => {
  const onPress = () => {
    // ToastModule.show('Hello World', ToastModule.SHORT);
    Alert.alert('Hello World');
    console.log({string: Alert.STRING_VALUE, number: Alert.NUMBER_VALUE});
  };

  return (
    <SafeAreaView>
      <Button title="press me" onPress={onPress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
