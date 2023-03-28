import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Main = (): JSX.Element => {
    const count = useSelector((state: RootState) => state.tokens.tokens)
    return ( 
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.text}>CryptoTrackerPro</Text>
            <View style={styles.img} />
          </View>
        </View>
     );
}
 

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  img: {
    borderRadius: 100,
    height: 50,
    width: 50,
    backgroundColor: 'white',
  },
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 130,
    padding: 25,
    backgroundColor: '#385775',
    boxShadow: '0 10px 15px -3px #000, 0 4px 6px -4px #000',
  },
});

export default Main;