import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableHighlight, Alert} from 'react-native';

import {Picker} from '@react-native-picker/picker';
import Axios from 'axios';

const Form = ({Currency, Crypto, setCrypto, setCurrency, setFetchAPI}) => {
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

  const quotizateCurrency = () => {
    //Validate The Fields
    if (!Crypto.trim() || !Currency.trim()) {
      Alert.alert(
        'Error',
        'No se Permiten Campos Vacios, Porfavor Selecciona un Valor',
        [{text: 'OK'}],
      );
      return;
    }

    setFetchAPI(true);
  };

  return (
    <>
      <View>
        <Text style={styles.label}>Moneda</Text>
        <Picker
          onValueChange={(currency) => getCurrency(currency)}
          selectedValue={Currency}
          itemStyle={{height: 120}}>
          <Picker.Item label="- Selecciona -" value="" />
          <Picker.Item label="USD" value="USD" />
          <Picker.Item label="MXN" value="MXN" />
          <Picker.Item label="EUR" value="EUR" />
          <Picker.Item label="GBP" value="GBP" />
        </Picker>
        <Text style={styles.label}>Crypto Moneda</Text>
        <Picker
          selectedValue={Crypto}
          onValueChange={(crypto) => setCrypto(crypto)}
          itemStyle={{height: 120}}>
          <Picker.Item label="- Selecciona -" value="" />
          {Cryptos.map((crypto) => (
            <Picker.Item
              key={crypto.CoinInfo.Id}
              label={crypto.CoinInfo.FullName}
              value={crypto.CoinInfo.Internal}
            />
          ))}
        </Picker>
        <TouchableHighlight
          style={styles.btnQuotizate}
          onPress={() => quotizateCurrency()}>
          <Text style={styles.txtQuotizate}>Cotizar</Text>
        </TouchableHighlight>
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
  btnQuotizate: {
    backgroundColor: '#2e70e2',
    padding: 10,
    marginTop: 20,
  },
  txtQuotizate: {
    color: '#FFF',
    fontFamily: 'Lato-Black',
    fontSize: 18,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default Form;
