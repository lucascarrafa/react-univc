import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import VerificaImparPar from './componentes/VerificaImparPar'
import ValorMaxMin from './componentes/ValorMaxMin'
import Contator from './componentes/Contator'
import Pai from './componentes/comunicacao/Pai'
import ContadorV2 from './componentes/contador/ContadorV2'

export default () => (
    <View style={tela.App}>
        <ContadorV2></ContadorV2>
        <ValorMaxMin min={90}></ValorMaxMin>
        <Contator inicial={340} pulo_soma={5} pulo_diminuir={15}></Contator>
        <Pai></Pai>
        <VerificaImparPar valor={45}></VerificaImparPar>
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