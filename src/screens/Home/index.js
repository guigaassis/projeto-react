import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import BannerFilmes from '../../components/bannerFilmes';
import Header from '../../components/header';
import SearchBar from '../../components/searchbar';
import CardMovies from '../../components/cardMovies';
import dados from '../../components/data/data.js'
import {useState, useEffect} from 'react';


 
export default function App() {

  const [movies,setMovies] = useState([]);
  useEffect(()=>{
    async function buscarFilmes(){
      const url = 'https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjg5MzQ4ZmI5ZGIzZWE5MmY0ZjZiZjNmMzNiYjc0ZSIsIm5iZiI6MTc1NjIyNjUwNC4wNjMsInN1YiI6IjY4YWRlM2M4Y2JmNzM4YTZhOTFlNWFjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hmwZO2uDvU4XpSlizGwTT_Q3dprbVFDq_wk1296HCd8'
        }
      };
      const response = await fetch(url,options);
      const data = await response.json();
      console.log(data);
      setMovies(data.results);
    }
    buscarFilmes();
  },[])

  return (
    <View style={styles.container}>
     <Header></Header>
     <SearchBar></SearchBar>
     <BannerFilmes></BannerFilmes>


     <View style = {{width:'90%'}}>
      <FlatList 
      data = {movies}

      horizontal = {true}

      keyExtractor={(item) => item.id}

      renderItem={({item}) => (
        <CardMovies titulo = {item.title} nota = {item.vote_average} img = {item.poster_path} sinopse = {item.overview}></CardMovies>
      )}
    />
     </View>


     
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#003',
    alignItems:"center"
   
   
  },
  
});
 
 