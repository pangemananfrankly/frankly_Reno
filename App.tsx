import React from 'react';
import { StyleSheet, Text, View, ColorPropType } from 'react-native';
import ComponentScreen from './screens/ComponentScreen';
import StudentScreen from './screens/StudentScreen';
import HomeScreen from './screens/HomeScreen';
import FlatList from './screens/FlatList';
import ImageScreen from './screens/ImageScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const navigator = createStackNavigator({
  Component: ComponentScreen,
  Student: StudentScreen,
  // Flat:FlatList,
  Home: HomeScreen
  
},{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerTitle: 'TarodaWanua_u'
  }
});

export default createAppContainer(navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
    
  },
});
