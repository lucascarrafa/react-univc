import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return(
        <View style={style.FlexV1}>
            <Quadrado cor="#9ed670"></Quadrado> 
            <Quadrado cor="#E3B6BD"></Quadrado>
            <Quadrado cor="#ade6f4"></Quadrado>
            <Quadrado cor="#f4a923"></Quadrado>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1: {
        flexGrow: 1,
        justifyContent: "space-around",
        backgroundColor: '#000'
    }
})