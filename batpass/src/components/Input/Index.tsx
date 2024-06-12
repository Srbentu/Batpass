import React from "react";
import { TextInput, View } from "react-native";
import style from "./Style";

interface InputProps{
    pass:string
}

export default function Input(props: InputProps) {
    return(
        <>
            <TextInput value={props.pass} style={style.input} placeholder="Generate Password" />
        </>
    )
}