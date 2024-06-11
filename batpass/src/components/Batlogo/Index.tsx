import React from 'react';
import { Text, View, Image} from 'react-native';
import style from './Style';
import Logo from '../../../assets/batman.png';
export default function Batlogo() {
    return (
        <>
            <Image style={style.img} source={Logo} />
            <Text style={style.title}>Password Generator</Text>
        </>

    )
}
