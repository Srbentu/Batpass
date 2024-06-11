import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#babaca',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logoContainer:{
        flexDirection:"column",
        backgroundColor:'grey',
        justifyContent:'center',
        alignSelf:'center',
        margin:60,
        padding:60,
    },
    mini:{
        marginBottom:20
    },
    input:{
        width: '100%',
    }
});

export default styles;