import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Primeiro from './componentes/Primeiro'
import Monitor from './componentes/Monitor'
import ValorMaxMin from './componentes/ValorMaxMin'

export default () => (
    <View style={tela.App}>
        <Primeiro />
        <Primeiro />
        <Monitor />
        <ValorMaxMin min={10} max={23} nome="lucas"/>
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