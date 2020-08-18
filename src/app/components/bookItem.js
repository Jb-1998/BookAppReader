import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Card, CardItem} from 'native-base';

const assets = require('../data/assetsObjects');
const bookCardItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onReadingView} style={styles.bookTitle}>
      <Card style={styles.cardDesign}>
        <CardItem cardBody>
          <ImageBackground
            style={styles.image}
            source={assets[props.image]}></ImageBackground>
        </CardItem>
      </Card>
      <Text style={{paddingLeft: 5, fontSize: 15, width: '80%'}}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 240,
    width: 150,
    flex: 1,
  },
  cardDesign: {
    margin: 0,
    marginRight: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 5,
    shadowRadius: 10,
    elevation: 15,
    width: 150,
  },
  bookTitle: {
    alignItems: 'flex-start',
  },
});

export default bookCardItem;
