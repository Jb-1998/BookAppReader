import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

//Navigation
import {createAppContainer} from 'react-navigation';

// Navigation-stack
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';

//Screens
import FirstScreen from '../screens/firstScreen';
import SecondScreen from '../screens/secondScreen';

//Data
import {BOOKITEMS} from '../data/bookItem-dummy';

SecondScreen.navigationOptions = (navData) => {
  const bookId = navData.navigation.getParam('bookId');
  const selectedBookTitle = BOOKITEMS.find((book) => book.id === bookId);
  return {
    headerTitle: selectedBookTitle.title,
  };
};
const MainNavigation = createStackNavigator(
  {
    First: {
      screen: FirstScreen,
      navigationOptions: {
        headerTitle: 'Book List',
      },
    },
    Second: {
      screen: SecondScreen,
      headerTitle: SecondScreen.navigationOptions.headerTitle,
    },
  },
  {
    initialRouteName: 'First',
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
);

export default createAppContainer(MainNavigation);
