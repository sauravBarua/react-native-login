import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import Home from "./components/Home"
import Login from "./components/Login"

export default function App() {
    return (
        <View style={styles.container}>
            <NativeRouter>
            <Route exact path="/" component={Login} />
            <Route exact path="/Home" component={Home} />
            </NativeRouter>;
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
