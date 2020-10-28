import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';

import Header from './components/Header';
import Form from './components/Form';

import Axios from 'axios';
import Quotation from './components/Quotation';

const App = () => {
  const [Currency, setCurrency] = useState('');
  const [Crypto, setCrypto] = useState('');
  const [FetchAPI, setFetchAPI] = useState(false);
  const [Response, setResponse] = useState({});
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    const quotizateCrypto = async () => {
      if (FetchAPI) {
        let url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${Crypto}&tsyms=${Currency}`;
        let res = await Axios.get(url);

        setLoading(true);

        setTimeout(() => {
          setResponse(res.data.DISPLAY[Crypto][Currency]);
          setFetchAPI(false);
          setLoading(false);
        }, 3000);
      }
    };
    quotizateCrypto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        </View>

        {Loading ? (
          <ActivityIndicator
            size="large"
            color="#2e49e2"
            style={{marginTop: 40}}
          />
        ) : (
          <Quotation Response={Response} />
        )}
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
