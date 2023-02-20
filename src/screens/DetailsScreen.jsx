import { View, Text, SafeAreaView, StatusBar, ImageBackground, StyleSheet, Image, TextInput, TouchableOpacity, Button, ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../const/colors';
import { Dialog } from 'react-native-paper';


const { height } = Dimensions.get('window');

export default function DetailsScreen({ navigation, route }) {

    const pet = route.params;
    const [openDialog, setOpenDialog] = useState(false);

    const hideDialog = () => {
        setOpenDialog(!openDialog);
    }


    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
                <StatusBar backgroundColor={COLORS.background} />
                <View style={{ height: 400, backgroundColor: COLORS.background }}>
                    <ImageBackground
                        source={{ uri: pet?.img }}
                        resizeMode='contain'
                        style={{ height: 280, top: 20 }}>
                        <View style={style.header}>
                            <Icon
                                onPress={navigation.goBack}
                                name='arrow-left'
                                size={28}
                                color={COLORS.dark}
                            />
                        </View>
                    </ImageBackground>
                    <View style={style.detailsContainer}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Text style={{ fontSize: 20, color: COLORS.dark, fontWeight: 'bold' }}>{pet?.name}</Text>
                            <Icon
                                name={(pet?.gender.toUpperCase() === 'MACHO') ? 'gender-male' : 'gender-female'}
                                size={25}
                                color={COLORS.dark}
                            />
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 5,
                        }}
                        >
                            <Text style={{ fontSize: 12, color: COLORS.dark }}>{pet?.breed}</Text>
                            <Text style={{ fontSize: 13, color: COLORS.dark }}>{pet?.age + " años"}</Text>
                        </View>
                        <View
                            style={{
                                alignItems: 'center',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginTop: 5,
                            }}
                        >
                            <Icon
                                name='cake-variant-outline'
                                size={20}
                                color={COLORS.dark}
                            />
                            <Text style={{ fontSize: 15, color: COLORS.dark, alignSelf: 'flex-start', marginTop: 5 }}>01-02-2019</Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 80, justifyContent: 'space-between', flex: 1 }}>
                    <View>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 20 }}>
                            <Image
                                source={{ uri: 'https://toppng.com//public/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png' }}
                                style={{ height: 40, width: 40, borderRadius: 20 }}
                            />
                            <View style={{ flex: 1, paddingLeft: 10 }}>
                                <Text style={{ color: COLORS.dark, fontSize: 12, fontWeight: 'bold' }}>{pet?.owner}</Text>
                                <Text style={{ color: COLORS.grey, fontSize: 11, fontWeight: 'bold' }}>Dueño</Text>
                            </View>
                        </View>
                        <Text style={style.comment}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, fugiat. Nobis, soluta explicabo illum porro, sint minima reiciendis recusandae tempora ducimus cum voluptatum. Laudantium impedit ut eligendi ipsa deserunt dolorum.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, fugiat. Nobis, soluta explicabo illum porro, sint minima reiciendis recusandae tempora ducimus cum voluptatum. Laudantium impedit ut eligendi ipsa deserunt dolorum.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, fugiat. Nobis, soluta explicabo illum porro, sint minima reiciendis recusandae tempora ducimus cum voluptatum. Laudantium impedit ut eligendi ipsa deserunt dolorum.
                        </Text>
                    </View>
                    <View style={style.footer}>
                        <TouchableOpacity style={style.btn} onPress={hideDialog}>
                            <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>ADOPTAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>

            <Dialog visible={openDialog} onDismiss={hideDialog} style={{ height: height * 0.5 }}>
                <Dialog.Title style={style.titleDialog}>Responda las siguientes preguntas</Dialog.Title>
                <ScrollView>
                    <Dialog.Content>


                        <TextInput style={style.input}
                            placeholder="¿Por qué desea adoptar una mascota?"
                        />
                        <TextInput style={style.input}
                            placeholder="¿Quién será el responsable de la mascota?"
                        />
                        <TextInput style={style.input}
                            placeholder="¿Tiene una vivienda propia?"
                        />
                        <TextInput style={style.input}
                            placeholder="¿Dispone de tiempo para invertir en la mascota?"
                        />
                        <TextInput style={style.input}
                            placeholder="¿Es la primera vez que ha adoptado en su vida?"
                        />
                        <TextInput style={style.input}
                            placeholder="¿Usted tiene otras mascotas?"
                        />

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <TouchableOpacity onPress={hideDialog}>
                                <Text>Cancelar</Text>
                            </TouchableOpacity>
                            <Button color={COLORS.primary} title="Enviar">
                            </Button>
                        </View>

                    </Dialog.Content>
                </ScrollView>

            </Dialog>
        </>
    )
}

const style = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    detailsContainer: {
        height: 120,
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 20,
        marginHorizontal: 20,
        bottom: - 60,
        elevation: 10,
        borderRadius: 20,
        justifyContent: 'center',
    },
    comment: {
        marginTop: 10,
        fontSize: 12.5,
        color: COLORS.dark,
        lineHeight: 20,
        marginHorizontal: 20,
        textAlign: 'justify'
    },
    footer: {
        height: 100,
        backgroundColor: COLORS.light,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    btn: {
        backgroundColor: COLORS.primary,
        flex: 1,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
    },
    input: {
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.primary,
        padding: 10,
        paddingLeft: 15,
        borderRadius: 5,
        marginVertical: 15,
        fontSize: 15,
    },
    titleDialog: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: COLORS.primary
    }
});