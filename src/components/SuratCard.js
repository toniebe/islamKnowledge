import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import PentagonLogo from '../assets/icon/pentagon.png';

const SuratCard = ({number, surat, city, ayat, arabic}) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.left}>
          <ImageBackground source={PentagonLogo} style={styles.pentagon}>
            <Text>{number}</Text>
          </ImageBackground>
        </View>
        <View style={styles.mid}>
          <Text>{surat}</Text>
          <Text style={styles.fontHistory}>
            {city} | {ayat} ayat
          </Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.fontArabic}>{arabic}</Text>
        </View>
      </View>
    </View>
  );
};

export default SuratCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 10,
  },
  body: {
    flexDirection: 'row',
  },
  left: {
    flex: 1,
    // backgroundColor: 'red',
  },
  mid: {
    flex: 5,
    // backgroundColor: 'green',
  },
  fontHistory: {
    fontSize: 12,
    color: '#5C68D3',
  },
  right: {
    flex: 3,
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  fontArabic: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  pentagon: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
