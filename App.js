import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import Login from "./components/Login"
import Home from "./components/Home"

export default function App() {
    return (
        <NativeRouter>
            <Route exact path="/" component={Login} />
            <Route exact path="/Home" component={Home} />

        </NativeRouter>
    );
}

