import React from 'react';
import {StyleSheet, ScrollView, View, Text, Image} from 'react-native';

import Header from './components/Header';

const App = () => {
  return (
    <>
      <ScrollView>
        <Header />
        <Image
          style={styles.img}
          source={require('./assets/img/cryptomonedas.png')}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%',
  },
});

export default App;
