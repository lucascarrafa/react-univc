import React from 'react'
import { Text } from 'react-native'
import Filho from './Filho'

export default (props) => {
    let x = 9
    let y = 200

    return(
        <>
            <Filho a={x} b={y}></Filho>
            <Filho a={x+7} b={y+5}></Filho>
        </>
    )
}