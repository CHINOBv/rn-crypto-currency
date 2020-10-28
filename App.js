import React from 'react';
import {StyleSheet, ScrollView, View, Text, Image} from 'react-native';

import Header from './components/Header';
import Form from './components/Form';

const App = () => {
  return (
    <>
      <ScrollView>
        <Header />
        <Image
          style={styles.img}
          source={require('./assets/img/cryptomonedas.png')}
        />
        <View style={styles.container}>
          <Form />
        </View>
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
  container: {
    marginHorizontal: '2.5%',
  }
});

export default App;
