// Calculator.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { eval as evaluateExpression } from 'react-native-eval';

const Calculator = () => {
  const [expression, setExpression] = useState('');

  const handlePress = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const handleCalculate = () => {
    try {
      const result = eval(expression);
      setExpression(result.toString());
    } catch (error) {
      setExpression('Error');
    }
  };
  

  const handleClear = () => {
    setExpression('');
  };

  const handleBackspace = () => {
    setExpression((prevExpression) =>
      prevExpression.length > 0
        ? prevExpression.slice(0, prevExpression.length - 1)
        : prevExpression
    );
  };


  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text style={styles.expression}>{expression}</Text>
      </View>
      <View style={styles.buttonsContainer}>
      <TouchableOpacity style={[styles.button, {backgroundColor: '#87CEFA'}]} onPress={handleClear}>
          <Text style={[styles.buttonText, {color: 'white'},{fontSize:30}]}>C</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handlePress('%')}>
          <Text style={[styles.buttonText, {color: 'white'},{fontSize:30}]}>%</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleBackspace}>
          <Text style={[styles.buttonText, {color: 'white'},{fontSize:50},{bottom:10}]}>←</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handlePress('/')}>
          <Text style={[styles.buttonText, {color: 'white'},{fontSize:30}]}>/</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handlePress('7')}>
          <Text style={[styles.buttonText, {color: 'white'},{fontSize:30}]}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('8')}>
          <Text style={[styles.buttonText, {color: 'white'},{fontSize:30}]}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('9')}>
          <Text style={[styles.buttonText, {color: 'white'},{fontSize:30}]}>9</Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.button} onPress={() => handlePress('*')}>
          <Text style={[styles.buttonText, {color: 'white'},{fontSize:30}]}>*</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handlePress('4')}>
          <Text style={[styles.buttonText, {color: 'white'},{fontSize:30}]}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('5')}>
          <Text style={[styles.buttonText, {color: 'white'},{fontSize:30}]}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('6')}>
          <Text style={[styles.buttonText, {color: 'white'},{fontSize:30}]}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handlePress('-')}>
          <Text style={[styles.buttonText, {color: 'white'},{fontSize:30}]}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handlePress('1')}>
          <Text style={[styles.buttonText, {color: 'white'},{fontSize:30}]}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('2')}>
          <Text style={[styles.buttonText, {color: 'white'},{fontSize:30}]}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('3')}>
          <Text style={[styles.buttonText, {color: 'white'},{fontSize:30}]}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handlePress('+')}>
          <Text style={[styles.buttonText, {color: 'white'},{fontSize:30}]}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handlePress('00')}>
          <Text style={[styles.buttonText, {color: 'white'},{fontSize:30}]}>00</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handlePress('0')}>
          <Text  style={[styles.buttonText, {color: 'white'},{fontSize:30}]}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('.')}>
          <Text style={[styles.buttonText, {color: 'white'},{fontSize:40}]}>.</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.button, {backgroundColor: '#87CEFA'}]}  onPress={handleCalculate}>
          <Text style={[styles.buttonText, {color: 'white'},{fontSize:30}]}>=</Text>
        </TouchableOpacity>









       
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Align the container to the bottom
    backgroundColor: 'black',   // Set the background color to black
  },
  screen: {
   
    backgroundColor: 'black',
    alignItems: 'flex-end',
  },
  expression: {
    fontSize: 64,
    color: 'white',
    right:10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    bottom:10,
  },
  button: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    margin: 10,
    borderRadius: 40,  // Make the button circular
    backgroundColor: '#555',  // Light grey background for numerics
  },
  buttonText: {
    fontSize: 25,
    color: '#fff',  // Set the text color to black for better visibility
  },
});

export default Calculator;
