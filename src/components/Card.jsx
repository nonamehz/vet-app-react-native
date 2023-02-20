import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import COLORS from '../const/colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Card({ pet, navigation }) {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('details', pet)}
        >
            <View style={style.cardContainer}>
                <View style={style.cardImageContainer}>
                    <Image source={{ uri: pet?.img }} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                </View>
                <View style={style.cardDetailsContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text
                            style={{ fontWeight: 'bold', color: COLORS.dark, fontSize: 20 }}
                        >
                            {pet?.name}
                        </Text>
                        <Icon name={(pet?.gender.toUpperCase() === 'MACHO') ? 'gender-male' : 'gender-female'} size={22} color={COLORS.grey} />
                    </View>
                    <Text style={{ fontSize: 12, marginTop: 5, color: COLORS.dark }}>{pet?.breed}</Text>
                    <Text style={{ fontSize: 12, marginTop: 5, color: COLORS.dark }}>{"Color: " + pet?.color}</Text>
                    <Text style={{ fontSize: 10, marginTop: 5, color: COLORS.grey }}>{pet?.age + " años"}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    cardImageContainer: {
        height: 150,
        width: 140,
        backgroundColor: COLORS.background,
        borderRadius: 20
    },
    cardDetailsContainer: {
        height: 120,
        backgroundColor: COLORS.white,
        flex: 1,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        padding: 20,
        justifyContent: 'center'
    }
})