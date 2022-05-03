import React, {useState} from 'react'
import { View, TextInput, Text } from 'react-native'
import Estilo from './estilo'
import VerificaImparPar from './ParImpar'

export default () => {
    const [valor, setValor] = useState('')
    function multiplica(){
        return valor*7
    }
    return(
        <View>
            <Text style={Estilo.fontGrande}>Saida: {multiplica()}</Text>
            <VerificaImparPar num={valor}></VerificaImparPar>
            <TextInput 
            placeholder='Digite seu valor' 
            value={valor} 
            onChangeText={valor => setValor(valor)}>
            </TextInput>
        </View>
    )
}

