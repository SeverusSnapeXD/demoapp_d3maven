import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/screens/Home';
import SignIn from './src/screens/SignIn';
import Navigation from './src/navigation';
import AppProvider from './src/store/AppContext';

const App = () => {
  return (
    <AppProvider>
      <Navigation />
    </AppProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
