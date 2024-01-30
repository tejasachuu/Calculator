
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Calculator from './src/calci';

const App = () => {
  return (
    <View style={styles.container}>
      <Calculator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Set the background color to black
  },
});

export default App;
