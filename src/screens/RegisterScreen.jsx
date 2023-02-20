import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../const/colors'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native-paper';


export default function RegisterScreen() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigation();

    const onRegister = () => {
        console.log('Register');
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >

            <Text style={{ fontSize: 24, margin: 20, color: COLORS.primary, fontWeight: 'bold' }}>Registrarse</Text>

            <View style={{ width: "70%" }}>
                <TextInput
                    style={style.input}
                    placeholder="Nombres"
                    value={firstName}
                    onChangeText={setFirstName}
                />
                <TextInput
                    style={style.input}
                    placeholder="Apellidos"
                    value={lastName}
                    onChangeText={setLastName}
                />
                <TextInput
                    style={style.input}
                    placeholder="Número Celular"
                    value={phone}
                    onChangeText={setPhone}
                />
                <TextInput
                    style={style.input}
                    placeholder="Correo Electrónico"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={style.input}
                    placeholder="******"
                    value={password}
                    onChangeText={setPassword}
                />
            </View>

            <Button
                disabled={!email || !password || !phone || !firstName || !lastName}
                style={style.btn}
                onPress={onRegister}
            >
                <Text style={{ color: COLORS.white }}>Registrarse</Text>
            </Button>

            <Text style={{ marginTop: 20 }}>¿Ya tienes una cuenta?</Text>

            <TouchableOpacity onPress={() => navigate.navigate("login")}>
                <Text
                    style={{
                        color: COLORS.primary,
                        height: 30,
                        margin: 20
                    }}
                >
                    Inicia Sesión.
                </Text>
            </TouchableOpacity>

        </View>
    )
}

const style = StyleSheet.create({

    btn: {
        backgroundColor: COLORS.primary,
        padding: 5,
        width: "70%"
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
});