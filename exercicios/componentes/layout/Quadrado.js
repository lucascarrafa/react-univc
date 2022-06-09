import React from 'react'
import { View, StyleSheet } from 'react-native'

export default props => {
    return(
        <View style={{height: 40, width: 40, backgroundColor: props.cor || '#000'}}/>
    )
}