import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {Picker} from '@react-native-picker/picker';
import Axios from 'axios';

const Form = () => {
  const [Currency, setCurrency] = useState('');
  const [Crypto, setCrypto] = useState('');
  const [Cryptos, setCryptos] = useState([]);

  const getCurrency = (currency) => {
    setCurrency(currency);
  };

  useEffect(() => {
    const fetchAPI = async () => {
      let url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

      let res = await Axios.get(url);
      setCryptos(res.data.Data);
    };
    fetchAPI();
  }, []);

  return (
    <>
      <View>
        <Text style={styles.label}>Moneda</Text>
        <Picker
          onValueChange={(currency) => getCurrency(currency)}
          selectedValue={Currency}>
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
