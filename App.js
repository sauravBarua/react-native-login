import {StyleSheet, Text, View, TextInput,Pressable } from 'react-native';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 
  const onSubmit = () => {
    if (password.length <= 6) {
      alert('Password minimum 6 characters');
    } else {
      alert('Form submited');
    }
  }
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={text => setEmail(text)}
        value={email}
        placeholder={'Email'}
        style={styles.inputStyle}
      />
      <TextInput
        onChangeText={value => setPassword(value)}
        placeholder={'Password'}
        style={styles.inputStyle}
        secureTextEntry={true}
      />
      <Pressable
        style={styles.inputStyle}
        onPress={onSubmit}>
        <Text style={{ textAlign: "center" }}> login </Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});
export default App;