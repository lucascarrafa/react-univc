import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import VerificaImparPar from './componentes/VerificaImparPar'
import ValorMaxMin from './componentes/ValorMaxMin'
import Contator from './componentes/Contator'
import Pai from './componentes/comunicacao/Pai'
import ContadorV2 from './componentes/contador/ContadorV2'
import Produtos from './componentes/produtos/Produtos'
import EntradaDados from './componentes/EntradaDados'

export default () => (
    <View style={tela.App}>
        <EntradaDados></EntradaDados>
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