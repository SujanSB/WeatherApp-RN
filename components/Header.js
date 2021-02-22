import React from 'react'
import { View, Text } from 'react-native'

const Header = () => {
    return (
        <View>
            <Text style={{textAlign:"center",fontSize:30,color:"#dfe9ed",fontWeight:"bold",marginTop:10}}>Bharatpur <Text style={{fontSize:12,padding:10,borderRadius:20,color:"black"}}>NP</Text></Text>
            <Text style={{textAlign:"center",fontSize:15,color:"#fbb",marginTop:15,borderBottomWidth:0.5,borderBottomColor:"#fff"}}>Today's Weather</Text>
            <Text></Text>
        </View>
    )
}

export default Header
