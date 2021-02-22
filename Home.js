import React,{useState,useEffect} from 'react'
import { View, Text, Button,TextInput,StyleSheet } from 'react-native'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import * as Location from 'expo-location';
import { ScrollView } from 'react-native-gesture-handler'
const api = {
    key: "040a79f08ee2480537dabb1b24196a6e",
    base: "https://api.openweathermap.org/data/2.5/"
  }

const Home = () => {
    const [location, setLocation] = useState(null);
    const [lat,setLat]=useState(null)
    const [lon,setLong]=useState(null)
    const [errorMsg, setErrorMsg] = useState(null);
    const [weather, setWeather] = useState({});
    const cnt = 1
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLat(location.coords.latitude);
        setLong(location.coords.longitude);
      })();
    }, []);



    const search = async() => {
      const response = await fetch(`${api.base}/find?lat=${lat}&lon=${lon}&cnt=${cnt}&appid=${api.key}
          `)
          const responseJson = await response.json();
         setWeather(responseJson);
              console.log(responseJson);
              console.log(responseJson.main.temp)
            
         
      }
    return (
        <View style={styles.container}>
            <Header/>
          {/* <Button  title="Press" onPress={search}/> */}
            <Content/>
          {/* <Text>{Math.round(weather.main.temp)}°c</Text> */}
          <Footer/>


        </View>
    )
}

export default Home

const styles =StyleSheet.create({
    container:{
        paddingTop:35,
        backgroundColor:"#0aaef5",
    }

})




    