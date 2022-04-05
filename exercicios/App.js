import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Primeiro from './componentes/Primeiro'
import Monitor from './componentes/Monitor'
import ValorMaxMin from './componentes/ValorMaxMin'
import Contator from './componentes/Contator'
import Pai from './componentes/comunicacao/Pai'

export default () => (
    <View style={tela.App}>
        <ValorMaxMin min={10} max={23} nome="lucas"/>
        <Contator inicial={340} pulo_soma={5} pulo_diminuir={15}></Contator>
        <Pai></Pai>
    </View>
)

const tela = StyleSheet.create({
    App:{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
})