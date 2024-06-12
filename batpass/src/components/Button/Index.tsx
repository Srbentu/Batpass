import React, {useState} from 'react';
import {Text, Pressable } from 'react-native';
import styles from './Style';
import Input from "../../components/Input/Index";
import generatePass from "../../services/passwordService";


export default function BatButton() {
    const [pass, setPass] = useState('');
    function handleGenerateButton(){
        let generateToken:string = generatePass()
        setPass(generateToken)
    }
    return (
        <>
            <Input pass={pass}/>
            <Pressable onPress={handleGenerateButton}>
                <Text style={styles.button}>Generate Password</Text>
            </Pressable>
            <Pressable onPress={() => console.log('salve')}>
                <Text style={styles.button}>Copy Code</Text>
            </Pressable>
        </>

    )
}