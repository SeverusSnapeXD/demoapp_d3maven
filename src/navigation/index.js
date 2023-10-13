import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView} from 'react-native';
import SignIn from '../screens/SignIn';
import MyTabs from './bottomTabs';

const Stack = createNativeStackNavigator();

const options = {
  headerShown: false,
};

const Navigation = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={options}>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Tabs" component={MyTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Navigation;
