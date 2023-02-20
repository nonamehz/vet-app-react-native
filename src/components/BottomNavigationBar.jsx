import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../const/colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native'


export default function BottomNavigationBar() {

    const navigation = useNavigation();

    return (
        <View
            style={{
                padding: 20,
                backgroundColor: COLORS.white,
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}
        >

            <TouchableOpacity onPress={() => navigation.navigate('home')}>
                <Icon name='paw' size={30} color={COLORS.primary} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('login')}>
                <Icon name='account' size={30} color={COLORS.primary} />
            </TouchableOpacity>

        </View>
    )
}