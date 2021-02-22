import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'

export default class Content extends PureComponent {
    render() {
        return (
            <View>
               <Text style={{textAlign:"center",fontSize:120,fontWeight:"bold",color:"#fff"}}>19&deg;<Text style={{fontSize:25}}>c</Text></Text>
            <Text style={{textAlign:"center",fontSize:25,color:"#fbb",margin:15,textTransform:"uppercase"}}>Clear</Text>
               <View style={{display:"flex",justifyContent:"space-between",flexDirection:"row",paddingLeft:30,paddingRight:30,fontSize:10}}>
                        <View style={{display:"flex",textAlign:"center",flexDirection:"column",color:"indigo"}}>
                            <Text style={{textAlign:"center",fontSize:12}} >
                                Wind
                            </Text>
                            <Text style={{textAlign:"center",fontSize:12}}>
                                5km/hr
                            </Text>
                        </View>
                        <View style={{display:"flex",textAlign:"center",flexDirection:"column",color:"indigo",justifyContent:"center"}}>
                            <Text style={{textAlign:"center",fontSize:12}}>
                                Humidity
                            </Text>
                            <Text style={{textAlign:"center",fontSize:12}}>
                                85%
                            </Text>
                        </View>
               </View>



            </View>
        )
    }
}
