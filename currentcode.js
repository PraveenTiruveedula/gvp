import * as React from 'react';
import { SafeAreaView, ScrollView, Text, Image } from 'react-native';
import { PaperProvider, Card, Button } from 'react-native-paper';

export default function MovieCard({movieItem}) {
  const leftComponent = ({ size }: { size: number }) => (
    <Image
      resizeMode="cover"
      style={{ width: size, height: size, borderRadius: size / 2 }}
      source={{
        uri: 'https://raw.githubusercontent.com/PraveenTiruveedula/gvp/refs/heads/main/movieLogo.png',
      }}
    />
  );
  return (
    <ScrollView>
      <Card style={{ margin: 20 }}>
        <Card.Title
          title={movieItem.movieName}
          subtitle={movieItem.movieType}
          titleStyle={{ fontSize: 18, fontWeight: 'bold' }}
          subtitleStyle={{ fontSize: 14 }}
          left={leftComponent}
        />
        <Card.Cover
          style={{ margin: 1, borderRadius: 10, height:300 }}
          source={{
          uri: movieItem.posterImage
          }}
        />
        <Card.Actions>
          <Button>Book</Button>
          <Button>Share</Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}
