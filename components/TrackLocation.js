
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function TrackLocation() {
  const [location, setLocation] = useState(null);
  const [lat,setLat]=useState(null)
  const [long,setLong]=useState(null)
  const [errorMsg, setErrorMsg] = useState(null);

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
  
  // let text = 'Waiting..';
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = JSON.stringify(location);
  // }

  return (
    <View style={styles.container}>
        <Text>hjhsd</Text>
        <Text>hjhsd</Text>
        <Text>hjhsd</Text>
        <Text>{long}</Text>
      <Text>{lat}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
