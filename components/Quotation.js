import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Quotation = ({Response}) => {
  return (
    <>
      <View>
        <Text>Precio: </Text>
        <Text>{Response.PRICE}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default Quotation;
