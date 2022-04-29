import React from 'react'
import { View, Text } from 'react-native'
import Estilo from '../estilo'

import produtossupermercado from './listaprodutos' 

export default () => {
    function obterLista(){
        return produtossupermercado.map(p =>{
            return(
                <Text key={p.id}>
                    {p.id}) {p.nome} custa R$ {p.preco}
                </Text>
            )
        }
        )
    }
    return(
        <>
            <Text style={Estilo.fontGrande}>Carrinho de compras:</Text>
            {obterLista()}
        </>
    )
}