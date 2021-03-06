import React, {useState} from 'react'
import { View, TextInput, Text } from 'react-native'
import Estilo from './estilo'
import axios from 'axios'


export default () => {
    const [valor, setValor] = useState('0')
    const [lista, setLista] = useState([])

    function obterListaDesconto(){
        getAdvice()
        return lista.map(p =>{
            return(
                <Text style={Estilo.fontPequena} key={p.id}>
                    {p.id}) {p.nome} custa R$ {(p.preco-p.preco*(valor/100)).toFixed(2)} com {valor}% de desconto
                </Text>
            )
        }
        )
    }

    const getAdvice = () => {
        axios
            .get("http://10.200.108.218:8080/lista")
            .then((response) => {
                setLista(response.data.map(aux=>({id: aux.id, nome: aux.nome, preco: aux.preco})))
            });
    };

    return(
        <View>
            <Text style={Estilo.fontGrande}>Desconto:</Text>
            <TextInput 
            style={{ height: 25, borderColor: '#80dead', borderWidth: 2 }}
            placeholder='Digite o desconto' 
            value={valor} 
            onChangeText={valor => setValor(valor)}>
            </TextInput>
            <Text style={Estilo.fontGrande}>Lista</Text>
            {obterListaDesconto()}
        </View>
    )
}

