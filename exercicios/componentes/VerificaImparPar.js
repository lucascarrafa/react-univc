import React from 'react'
import { Text } from 'react-native'
import Font from './estilo'

export default (props) => {
    if(props.valor %2 === 0){
        return(
            <>
                <Text style={Font.fontGrande}>Par</Text>
            </>
        )
    }else{
        return(
            <>
                <Text style={Font.fontGrande}>Impar</Text>
            </>
        )
    }
}