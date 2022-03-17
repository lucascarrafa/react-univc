import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Primeiro from './componentes/Primeiro'
import Monitor from './componentes/Monitor'


export default () => (
    <View style={tela.App}>
        <Primeiro />
        <Primeiro />
        <Monitor />
    </View>
)

const tela = StyleSheet.create({
    App:{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#33d0ff",
    },
})