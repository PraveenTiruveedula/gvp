import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import MovieCard from './MovieCard.js';

export default function MoviesListPage({ navigation }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch JSON data from a URL
    fetch('https://raw.githubusercontent.com/PraveenTiruveedula/gvp/refs/heads/main/movies.json') // Example API
      .then((response) => response.json())
      .then((json) => {
        setData(json); // Save fetched data to state
        setIsLoading(false); // Stop loading
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        // Show a loading spinner while data is being fetched
        <ActivityIndicator size="large" color="#313131" />
      ) : (
        // Display the data in a FlatList
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()} // Use unique ID as key
          renderItem={({ item }) => (
            <View style={styles.item}>
            <MovieCard movieItem={item}/>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  item: {
    padding: 16,
    marginVertical: 8,
    borderColor: '#313131',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#313131',
  },
  body: {
    fontSize: 14,
    color: '#555555',
    marginTop: 5,
  },
});
