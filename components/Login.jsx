import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Link } from "react-router-native";
import { color } from 'react-native-reanimated';
const Login = () => {

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={'Email'}
        style={styles.inputStyle}
      />
      <TextInput
        placeholder={'Password'}
        style={styles.inputStyle}
      />
      <Link to="/Home" style={styles.button} >
        <Text style={styles.loginText}> login </Text>
      </Link>
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
  button: {
    width: 200,
    marginTop: 20,
    backgroundColor: '#20639B',
    padding: 15,
    borderRadius: 50,
  },
  loginText:{
    textAlign: "center", 
    color: 'white'

  }
});
export default Login;