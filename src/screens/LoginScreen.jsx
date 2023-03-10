import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../const/colors'
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import { useAuthStore } from '../hooks/useAuthStore';

export default function LoginScreen() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { startLogin } = useAuthStore();

    const navigate = useNavigation();

    const onLogin = () => {
        startLogin({ email, password })
        navigate.navigate("home");
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
            <Text style={{ fontSize: 24, margin: 20, color: COLORS.primary, fontWeight: 'bold' }}>Iniciar Sesión</Text>
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
            >
                <Text style={{ color: COLORS.white }}>Ingresar</Text>
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