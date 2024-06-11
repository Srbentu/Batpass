import React from 'react';
import { Text, View} from 'react-native';
import {StatusBar} from "expo-status-bar";
import styles from './Style';

export default function Index() {
  return (
      <View style={styles.container}>
          <StatusBar style="auto" />
          <Text>Welcome to BatPass!</Text>
      </View>

  )
}
