import React, {useState} from 'react'
import { Text,Button } from 'react-native'
import Font from './estilo'

export default (props) => {
    const [valor, setValor] = useState(props.inicial) 

    const somar = () => setValor(valor+props.pulo_soma)
    const diminuir = () => setValor(valor-props.pulo_diminuir)

    return(
        <>
            <Text style={Font.fontGrande}>{valor}</Text>
            <Button title='Somar' onPress={somar}></Button>
            <Button title='Diminuir' onPress={diminuir}></Button>
        </>
    )
}