import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {BOOKITEMS} from '../data/bookItem-dummy';

const SecondScreen = (props) => {
  const bookId = props.navigation.getParam('bookId');
  const selectedBookItem = BOOKITEMS.find((book) => book.id === bookId);
  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={{marginBottom: 20, marginTop: 20, fontSize: 18}}>
          {selectedBookItem.content}
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
});

export default SecondScreen;
