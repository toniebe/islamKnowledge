import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import pentagon from '../assets/icon/pentagon.png';
const AyatCard = ({no, ayat, en, ind}) => {
  return (
    <View style={styles.container}>
      <View style={styles.ayatContainer}>
        <ImageBackground source={pentagon} style={styles.pentagon}>
          <Text style={styles.fontPentagon}>{no}</Text>
        </ImageBackground>
        <Text style={styles.fontAyat}>{ayat}</Text>
      </View>
      <View style={styles.artiContainer}>
        <Text style={styles.fontInggris}>{en}</Text>
        <Text style={styles.fontIndo}>{ind}</Text>
      </View>
    </View>
  );
};

export default AyatCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  ayatContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pentagon: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontPentagon: {
    fontSize: 15,
  },
  fontAyat: {
    fontSize: 18,
    fontWeight: '700',
  },
  artiContainer: {
    marginVertical: 10,
  },
  fontInggris: {
    color: '#5C68D3',
    fontSize: 16,
  },
  fontIndo: {
    color: '#858585',
    fontSize: 16,
  },
});
