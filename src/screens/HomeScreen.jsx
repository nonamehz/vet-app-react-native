import { View, Text, SafeAreaView, Platform, StatusBar, FlatList, ScrollView, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Card from '../components/Card';
// import { pets } from '../data/pets';
import COLORS from '../const/colors';
import { usePetStore } from '../hooks/usePetStore';


const { height } = Dimensions.get('window');

export default function HomeScreen() {

    const navigation = useNavigation();

    const { pets, startLoadingPets, setActivePet } = usePetStore();

    useEffect(() => {
        startLoadingPets();
    }, []);

    return (
        <View style={{ backgroundColor: "#FFF", flex: 1, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>
            <SafeAreaView>
                {/* <ScrollView showsVerticalScrollIndicator={false}> */}
                <View style={style.mainContainer}>
                    <Text style={style.title}>MedicVet Delgado</Text>
                    <Text style={style.subtitle}>Mascotas en Adopción</Text>
                    <View style={{ marginTop: 20 }}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            scrollEnabled={true}
                            data={pets}
                            renderItem={({ item }) => <Card pet={item} navigation={navigation} />}
                        />
                    </View>
                </View>
                {/* </ScrollView> */}
            </SafeAreaView>
        </View>
    )
}

const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: COLORS.light,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginTop: 20,
        paddingHorizontal: 20,
        paddingVertical: 40,
        minHeight: height,
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        color: COLORS.dark,
        fontWeight: 'bold'
    },
    subtitle: {
        textTransform: 'uppercase',
        fontSize: 20,
        color: COLORS.dark,
        fontWeight: 'bold',
        marginTop: 20,
    }
})