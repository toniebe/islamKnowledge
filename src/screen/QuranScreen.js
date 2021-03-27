import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  StatusBar,
} from 'react-native';
import QuranLogo from '../assets/icon/quranWhite.png';
import SuratCard from '../components/SuratCard';
import SearchInput, {createFilter} from 'react-native-search-filter';
import axios from 'axios';

const KEYS_TO_FILTERS = ['name', 'place'];

const QuranScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getData = () => {
    axios
      .get(
        'https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json',
      )
      .then(function (response) {
        setData(response.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const searchUpdated = (term) => {
    setSearchTerm({searchTerm: term});
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="rgba(0,0,0,0)"
      />
      <View style={styles.header}>
        <Image source={QuranLogo} style={styles.quranLogo} />
      </View>
      <View style={styles.body}>
        <SearchInput
          onChangeText={(term) => {
            searchUpdated(term);
          }}
          style={styles.searchInput}
          placeholder="Type a message to search"
        />

        <FlatList
          data={data}
          contentContainerStyle={styles.list}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('QuranDetail', {
                  key: item.number_of_surah,
                  surah: item.name,
                })
              }>
              <SuratCard
                number={item.number_of_surah}
                surat={item.name}
                ayat={item.number_of_ayah}
                city={item.place}
                arabic={item.name_translations.ar}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default QuranScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5C68D3',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  quranLogo: {
    width: 200,
    height: 200,
  },

  body: {
    flex: 2,
    backgroundColor: 'white',
  },
  searchInput: {
    marginHorizontal: 20,
    borderRadius: 20,
    marginTop: -20,
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1,
    backgroundColor: 'white',
  },
});
