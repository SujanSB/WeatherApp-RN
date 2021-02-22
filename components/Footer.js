import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler'

export default function Footer () {
     let date = new Date()
     let day = date.getDate()
     let month = date.getMonth()+1
     let year = date.getFullYear()

    
        return (
            <ScrollView style={{padding:10,backgroundColor:"indigo",height:300,margin:20,marginTop:30,borderRadius:20}}>
                <View style={{justifyContent:"center",alignItems:"center"}}>
                    <Text style={{width:80,height:5,backgroundColor:"#dfe9ed",borderRadius:5}}></Text>
        <Text style={{color:"#fff",fontSize:16,marginTop:20}}>TODAY : {year}/{month}/{day}</Text>
                </View>
                
                <View style={{height:70,backgroundColor:"#fbb",display:"flex",flexDirection:"row",justifyContent:"space-between",margin:15,borderRadius:20,alignItems:"center",padding:15}}>
                    <Text>SunRise <Feather name="sunrise" size={24} color="black" /></Text>
                    <Text>6:22 AM</Text>
                </View>
                <View style={{height:70,backgroundColor:"#fbb",display:"flex",flexDirection:"row",justifyContent:"space-between",margin:15,borderRadius:20,alignItems:"center",padding:15}}>
                <Text>SunSet <Feather name="sunset" size={24} color="black" /></Text>
                    <Text>5:20 PM</Text>
                </View>
                <View style={{height:70,backgroundColor:"#fbb",display:"flex",flexDirection:"row",justifyContent:"space-between",margin:15,borderRadius:20,alignItems:"center",padding:15}}>
                <Text>STATUS</Text>
                <Text style={{fontSize:18,color:"#fff"}}>" Clear Sky "</Text>
                </View>
                <View style={{height:70,backgroundColor:"#fbb",display:"flex",flexDirection:"row",justifyContent:"space-between",margin:15,borderRadius:20,alignItems:"center",padding:15}}>
                <Text>Feels Like</Text>
                <Text>19.3&deg;c</Text>
                </View>
                <View style={{height:70,backgroundColor:"#fbb",margin:15,borderRadius:20}}>

                </View>
            </ScrollView>
        )
}
