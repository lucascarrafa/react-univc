import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return(
        <View style={style.FlexV3}>
            <Quadrado cor="#9ed670" lado={20}></Quadrado> 
            <Quadrado cor="#E3B6BD" lado={30}></Quadrado>
            <Quadrado cor="#ade6f4" lado={40}></Quadrado>
            <Quadrado cor="#f4a923" lado={50}></Quadrado>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV3: {
        flexDirection: "row",
        width: '100%',
        height: 350,
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        backgroundColor: '#000'
    }
})