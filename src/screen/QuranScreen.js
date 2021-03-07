import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import QuranLogo from '../assets/icon/quranWhite.png';
import SuratCard from '../components/SuratCard';
import axios from 'axios';

const QuranScreen = () => {
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  const getData = () => {
    axios
      .get(
        'https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json',
      )
      .then(function (response) {
        setMasterDataSource(response.data);
        setFilteredDataSource(response.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const searchUpdate = (term) => {
    setSearchTerm({searchTerm: term});
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={QuranLogo} style={styles.quranLogo} />
      </View>
      <View style={styles.body}>
        <TextInput
          style={styles.searchInput}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />

        <FlatList
          data={filteredDataSource}
          contentContainerStyle={styles.list}
          renderItem={({item}) => (
            <TouchableOpacity>
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
