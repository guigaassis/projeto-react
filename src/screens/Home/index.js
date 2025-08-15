import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import BannerFilmes from '../../components/bannerFilmes';
import Header from '../../components/header';
import SearchBar from '../../components/searchbar';
import CardMovies from '../../components/cardMovies';
import dados from '../../components/data/data.js'
 
 
export default function App() {
  return (
    <View style={styles.container}>
     <Header></Header>
     <SearchBar></SearchBar>
     <BannerFilmes></BannerFilmes>


     <View style = {{width:'90%'}}>
      <FlatList 
      data = {dados}

      horizontal = {true}

      keyExtractor={(item) => item.id}

      renderItem={({item}) => (
        <CardMovies titulo = {item.nome} nota = {item.nota} img = {item.img} sinopse = {item.sinopse}></CardMovies>
      )}
    />
     </View>


     
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#410287',
    alignItems:"center"
   
   
  },
});
 
 