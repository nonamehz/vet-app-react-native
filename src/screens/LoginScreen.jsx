import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../const/colors'

export default function LoginScreen() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = () => {
        console.log('Login');
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
            <Text style={{ fontSize: 20, margin: 20 }}>MedicVet Delgado</Text>
            <View style={{ width: "70%" }}>

                <TextInput
                    style={style.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    secureTextEntry
                    style={style.input}
                    placeholder="******"
                    value={password}
                    onChangeText={setPassword}
                />
            </View>


            <Button
                disabled={!email || !password}
                style={style.btn}
                onPress={onLogin}
                title="Iniciar Sesión"
            >
            </Button>

            <Text style={{ marginTop: 20 }}>¿No tienes una cuenta?</Text>

            <TouchableOpacity onPress={() => navigate.navigate("register")}>
                <Text
                    style={{
                        color: COLORS.primary,
                        height: 30,
                        margin: 20
                    }}
                >
                    Registrate.
                </Text>
            </TouchableOpacity>

        </View>
    )
}

const style = StyleSheet.create({

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
});