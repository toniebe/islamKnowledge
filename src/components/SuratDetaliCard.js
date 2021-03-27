import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import pentagon from '../assets/icon/pentagonW.png';
import play from '../assets/icon/play.png';

const SuratDetaliCard = ({no, surat, arti}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={pentagon} style={styles.pentagon}>
        <Text style={styles.fontAyat}>{no}</Text>
      </ImageBackground>
      <View style={styles.bodySurat}>
        <Text style={styles.fontSurat}>{surat}</Text>
        <Text style={styles.fontSurat}>{arti}</Text>
      </View>
      <TouchableOpacity style={styles.bodyPlay}>
        <Image source={play} style={styles.play} />
      </TouchableOpacity>
    </View>
  );
};

export default SuratDetaliCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5C68D3',
    padding: 40,
    marginHorizontal: 30,
    borderRadius: 20,
    flexDirection: 'row',
  },
  pentagon: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontAyat: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  bodySurat: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontSurat: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  bodyPlay: {
    flex: 1,
  },
  bodyPlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  play: {
    width: 30,
    height: 30,
  },
});
