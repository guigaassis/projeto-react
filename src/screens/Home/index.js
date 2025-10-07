import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import BannerFilmes from '../../components/bannerFilmes';
import Header from '../../components/header';
import SearchBar from '../../components/searchbar';
import CardMovies from '../../components/cardMovies';
import dados from '../../components/data/data.js';
import { useState, useEffect } from 'react';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    async function buscarFilmes() {
      const urlNowPlaying = 'https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1';
      const urlPopular = 'https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjg5MzQ4ZmI5ZGIzZWE5MmY0ZjZiZjNmMzNiYjc0ZSIsIm5iZiI6MTc1NjIyNjUwNC4wNjMsInN1YiI6IjY4YWRlM2M4Y2JmNzM4YTZhOTFlNWFjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hmwZO2uDvU4XpSlizGwTT_Q3dprbVFDq_wk1296HCd8'
        }
      };

      const responseNowPlaying = await fetch(urlNowPlaying, options);
      const dataNowPlaying = await responseNowPlaying.json();
      setMovies(dataNowPlaying.results);

      const responsePopular = await fetch(urlPopular, options);
      const dataPopular = await responsePopular.json();
      setPopularMovies(dataPopular.results);
    }

    buscarFilmes();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Header />
        <SearchBar />
        <BannerFilmes />

        <Text style={styles.sectionTitle}>🎬 Em Cartaz</Text>
        <View style={styles.carouselContainer}>
          <FlatList
            data={movies}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <CardMovies
                titulo={item.title}
                nota={item.vote_average}
                img={item.poster_path}
                sinopse={item.overview}
              />
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>

       
        <Text style={styles.sectionTitle}>🔥 Populares</Text>
        <View style={styles.carouselContainer}>
          <FlatList
            data={popularMovies}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <CardMovies
                titulo={item.title}
                nota={item.vote_average}
                img={item.poster_path}
                sinopse={item.overview}
              />
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003',
  },
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  carouselContainer: {
    width: '100%',
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 10,
  },
});
