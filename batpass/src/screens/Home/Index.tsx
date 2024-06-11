import React from 'react';
import { Text, View} from 'react-native';
import {StatusBar} from "expo-status-bar";
import styles from './Style';
import Batlogo from "../../components/Batlogo/Index";


export default function Index() {
  return (
      <View style={styles.container}>
          <View >
              <StatusBar style="auto" />
          </View>
          <View style={styles.logoContainer}>
              <Batlogo/>
          </View>

          <View>
              <Text style={styles.mini}>Design by Me...</Text>
          </View>

      </View>

  )
}
