import React, {useState} from 'react';
import {Text, Pressable } from 'react-native';
import styles from './Style';
import Input from "../../components/Input/Index";
import generatePass from "../../services/passwordService";
import * as Clipboard from 'expo-clipboard';


export default function BatButton() {
    const [pass, setPass] = useState('');
    function handleGenerateButton(){
        let generateToken:string = generatePass()
        setPass(generateToken)
    }
    function handleCopyButton(){
        Clipboard.setStringAsync(pass)
    }
    return (
        <>
            <Input pass={pass}/>
            <Pressable onPress={handleGenerateButton}>
                <Text style={styles.button}>Generate Password</Text>
            </Pressable>
            <Pressable onPress={handleCopyButton}>
                <Text style={styles.button}>Copy Code</Text>
            </Pressable>
        </>

    )
}