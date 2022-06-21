import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return(
        <View style={style.FlexV4}>
            <View style={style.V0}></View>
            <View style={style.V1}></View>
            <View style={style.V2}></View>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV4: {
        flexGrow: 1,
        width: 100,
        backgroundColor: '#000'
    },
    V0: {
        height: 100,
        backgroundColor: '#36c9a7'
    },
    V1: {
        flexGrow: 3,
        backgroundColor: '#ff801a'
    },
    V2: {
        flexGrow: 1,
        backgroundColor: '#dd22c1'
    }
})