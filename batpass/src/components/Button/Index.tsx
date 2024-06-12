import React from 'react';
import { View, Button, Text, Pressable } from 'react-native';
import styles from './Style';

export default function BatButton() {
    return (
        <View>
            <Pressable onPress={() => console.log('salve')}>
                <Text style={styles.button}>Generate Password</Text>
            </Pressable>
            <Pressable onPress={() => console.log('salve')}>
                <Text style={styles.button}>Copy Code</Text>
            </Pressable>
        </View>

    )
}