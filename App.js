import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView, View, Text, Image} from 'react-native';

import Header from './components/Header';
import Form from './components/Form';

import Axios from 'axios';
import Quotation from './components/Quotation';

const App = () => {
  const [Currency, setCurrency] = useState('');
  const [Crypto, setCrypto] = useState('');
  const [FetchAPI, setFetchAPI] = useState(false);
  const [Response, setResponse] = useState({});

  useEffect(() => {
    const quotizateCrypto = async () => {
      if (FetchAPI) {
        let url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${Crypto}&tsyms=${Currency}`;
        let res = await Axios.get(url);

        setResponse(res.data.DISPLAY[Crypto][Currency]);
      }
      setFetchAPI(false);
    };
    quotizateCrypto();
  }, [FetchAPI]);

  return (
    <>
      <ScrollView>
        <Header />
        <Image
          style={styles.img}
          source={require('./assets/img/cryptomonedas.png')}
        />
        <View style={styles.container}>
          <Form
            setFetchAPI={setFetchAPI}
            Currency={Currency}
            Crypto={Crypto}
            setCurrency={setCurrency}
            setCrypto={setCrypto}
          />
          <Quotation Response={Response} />
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
  },
});

export default App;
