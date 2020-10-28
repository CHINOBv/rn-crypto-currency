import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

const Header = () => (
  <View>
    <Text style={styles.header}>Cripto Monedas</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    paddingTop: Platform.OS === 'ios' ? 50 : 10,
    fontFamily: 'Lato-Black',
    backgroundColor: '#2e49e2',
    paddingBottom: 10,
    textTransform: 'uppercase',
    marginBottom: 30,
  },
});

export default Header;
