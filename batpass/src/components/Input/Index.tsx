import React from "react";
import { TextInput, View } from "react-native";
import style from "./Style";

export default function Input() {
    return(
        <View style={style.container}>
            <TextInput style={style.input} placeholder="Generate Password" />
        </View>
    )
}