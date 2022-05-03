import React, {useState} from 'react'
import { View, TextInput, Text } from 'react-native'
import Estilo from './estilo'
import VerificaImparPar from './ParImpar'
import produtos from './produtos/listaprodutos'

export default () => {
    const [valor, setValor] = useState('')
    function obterListaDesconto(){
        return produtos.map(p =>{
            return(
                <Text key={p.id}>
                    {p.id}) {p.nome} custa R$ {(p.preco-p.preco*(valor/100)).toFixed(2)} com {valor}% desconto
                </Text>
            )
        }
        )
    }

    return(
        <View>
            <TextInput 
            placeholder='Digite o desconto' 
            value={valor} 
            onChangeText={valor => setValor(valor)}>
            </TextInput>
            {obterListaDesconto()}
        </View>
    )
}

