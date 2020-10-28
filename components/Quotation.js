import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Quotation = ({Response}) => {
  if (Object.keys(Response).length === 0) return null;
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.label}>
          <Text style={[styles.label, styles.price]}>{Response.PRICE}</Text>
        </Text>
        <Text style={styles.label}>
          Precio mas Alto del Dia:{'\n'}
          <Text style={styles.span}>{Response.HIGHDAY}</Text>
        </Text>
        <Text style={styles.label}>
          Precio Mas Bajo del Dia:{'\n'}
          <Text style={styles.span}>{Response.LOWDAY}</Text>
        </Text>
        <Text style={styles.label}>
          Variacion Durante las Ultimas 24 Horas:{'\n'}
          <Text style={styles.span}>{Response.CHANGEPCT24HOUR}%</Text>
        </Text>
        <Text style={styles.label}>
          Ultima Actualizacion:{'\n'}
          <Text style={styles.span}>{Response.LASTUPDATE}</Text>
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    color: '#FFF',
    fontFamily: 'Lato-Regular',
    marginBottom: 10,
  },
  container: {
    backgroundColor: '#2e49e2',
    marginTop: 40,
    padding: 20,
    width: '100%',
    borderTopEndRadius: 19,
    borderTopStartRadius: 19,
  },
  price: {
    fontSize: 38,
    textAlign: 'center',
    fontFamily: 'Lato-Black',
  },
  span: {
    fontFamily: 'Lato-Black',
  },
});

export default Quotation;
