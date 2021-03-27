import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import backLogo from '../assets/icon/back.png';
import AyatCard from '../components/AyatCard';
import SuratDetaliCard from '../components/SuratDetaliCard';
import axios from 'axios';

const QuranDetailScreen = ({route, navigation}) => {
  const {key, surah} = route.params;

  const [data, setData] = useState([]);
  const [surat, setSurat] = useState([]);
  const [arti, setArti] = useState('');
  const getData = () => {
    axios
      .get(
        `https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/` +
          key +
          `.json`,
      )
      .then(function (response) {
        // console.log(response.data);
        setSurat(response.data.verses);
        setData(response.data);
        setArti(response.data.name_translations.id);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  // console.log(key);
  // console.log(surah);
  // console.log(arti);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="rgba(0,0,0,0)"
      />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={backLogo} style={styles.backLogo} />
        </TouchableOpacity>
        <Text style={styles.fontJudul}>{surah}</Text>
      </View>
      <View style={styles.cardPlay}>
        <SuratDetaliCard
          no={data.number_of_surah}
          surat={data.name}
          arti={arti}
        />
      </View>

      <FlatList
        data={surat}
        contentContainerStyle={styles.cardAyat}
        renderItem={({item}) => (
          <AyatCard
            no={item.number}
            ayat={item.text}
            en={item.translation_en}
            ind={item.translation_id}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default QuranDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  backLogo: {
    width: 50,
    height: 50,
    marginTop: 10,
  },
  fontJudul: {
    fontSize: 20,
    color: '#5C68D3',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  cardPlay: {
    marginVertical: 20,
  },
  cardAyat: {
    marginHorizontal: 20,
  },
});
