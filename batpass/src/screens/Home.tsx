import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StatusBar} from "expo-status-bar";

export default function Home() {
  return (
      <View style={styles.container}>
          <StatusBar style="auto" />
          <Text>Welcome to BatPass!</Text>
      </View>

  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#babaca',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
