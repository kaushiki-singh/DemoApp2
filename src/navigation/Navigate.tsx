import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../views/HomeScreen/index';
import RepoScreen from '../views/RepoScreen/index';

const Stack = createStackNavigator();

function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Repo" component={RepoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;