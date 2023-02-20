import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import LoginScreen from './src/screens/LoginScreen';
import BottomNavigationBar from './src/components/BottomNavigationBar';
import RegisterScreen from './src/screens/RegisterScreen';


const Stack = createNativeStackNavigator();

export default function Main() {
    return (
        <NavigationContainer>

            <Stack.Navigator initialRouteName='home'>

                <Stack.Screen name='home' component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name='details' component={DetailsScreen} options={{ headerShown: false }} />
                <Stack.Screen name='login' component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name='register' component={RegisterScreen} options={{ headerShown: false }} />

            </Stack.Navigator>

            <BottomNavigationBar />

        </NavigationContainer>
    )
}