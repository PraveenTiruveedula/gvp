import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function ListExample() {
  const [names, setNames] = useState([
    {
      id: 0,
      name: 'Ben',
    },
    {
      id: 1,
      name: 'Susan',
    },
    {
      id: 2,
      name: 'Robert',
    },
    {
      id: 3,
      name: 'Mary',
    }
   ]);

  alertItemName = (item) => {
    alert(item.name +" " +item.id);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {names.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style={styles.container}
            onPress={() => this.alertItemName(item)}>
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 14,
    margin: 2,
    borderColor: '#2a4914',
    borderWidth: 1,
  },
  text: {
    color: '#4f603c',
    fontSize: 14,
    textAlign: 'left',
  },
});
