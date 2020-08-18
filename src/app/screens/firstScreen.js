import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import BookItem from '../components/bookItem';

import {BOOKITEMS} from '../data/bookItem-dummy';

const FirstScreen = (props) => {
  const selectItemHandler = (id) => {
    props.navigation.navigate('Second', {
      bookId: id,
    });
  };
  return (
    <View>
      <Text
        style={{
          paddingLeft: 30,
          marginTop: 30,
          fontSize: 18,
          fontWeight: '700',
        }}>
        Purchased Books
      </Text>
      <FlatList
        data={BOOKITEMS}
        renderItem={(itemData) => (
          <BookItem
            title={itemData.item.title}
            image={itemData.item.imagePath}
            onReadingView={() => selectItemHandler(itemData.item.id)}
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: 20,
          paddingTop: 30,
          paddingBottom: 20,
        }}
      />
    </View>
  );
};

export default FirstScreen;
