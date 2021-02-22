import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home'
import SearchGet from './SearchGet'



function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
     <Home/>
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <SearchGet/>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home':'md-home';
            } else if (route.name === 'Search') {
              iconName = focused ? 'ios-search' : 'md-search';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />
            // <AntDesign name={iconName} size={size} color="black" />
            ;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'indigo',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
