import React from "react";
import { View, TextInput, Button, Text, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Login</Text>

            <View style = {styles.inputContainer}>
            <TextInput style = {styles.input} placeholder="Usuário" />
            <TextInput style = {styles.input} placeholder="Senha" secureTextEntry={true}/>
            </View>

            <View style = {styles.buttonContainer}>
                <Button title = "Entrar"
                onPress = {() => navigation.navigate('Home')}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#D0CFCF', //Cor de fundo da tela
    },

    title: {
        fontSize: 24,
        marginBottom: 20,
    },

    buttonContainer: {
        backgroundColor: '#add8e6', // Cor de fundo do container do botão
        margin: 10,
        width: windowWidth * 0.5, //50% da largura da tela
        boderRadius: 5,
    },

    inputContainer: {
        width: windowWidth * 0.5,
    },

    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        backgroundColor: '#fff',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});
