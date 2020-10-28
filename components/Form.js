import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Form = () => {
  return (
    <>
      <View>
        <Text style={styles.label}>Moneda</Text>
        <Picker>
          <Picker.Item label="- Selecciona -" value="" />
          <Picker.Item label="USD" value="USD" />
          <Picker.Item label="MXN" value="MXN" />
          <Picker.Item label="EUR" value="EUR" />
          <Picker.Item label="GBP" value="GBP" />
        </Picker>
        <Text style={styles.label}>Crypto Moneda</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 22,
    fontFamily: 'Lato-Black',
    textTransform: 'uppercase',
    marginVertical: 20,
  },
});

export default Form;
