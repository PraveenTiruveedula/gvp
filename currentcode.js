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
