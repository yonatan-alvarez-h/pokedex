import { StyleSheet, View, Text, TextInput, Button, Keyboard } from 'react-native';
import React from 'react';
import {useFormik} from "formik";
import * as Yup from "yup";


export default function LoginForm() {

    const formik = useFormik({
        initialValues: initiualValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: (formValue) => {
            console.log("Formulario enviado...");
            console.log(formValue);
        }
    })
  
  return (
    <View>
      <Text style={style.title}>Iniciar sesión</Text>
      <TextInput
        placeholder="Nombre usuario"
        style={style.input}
        autoCapitalize='none'
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue('username', text)}
      />
      <TextInput
        placeholder="Contraseña"
        style={style.input}
        autoCapitalize='none'
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue('password', text)}
      />
      <Button
        title='Entrar'
        onPress={formik.handleSubmit}
      />
      <Text style={style.error}>{formik.errors.username}</Text>
      <Text style={style.error}>{formik.errors.password}</Text>
    </View>
  )
}


function initiualValues() {
    return {
        username: "",
        password: ""
    }
}


function validationSchema(){
    return {
        username: Yup.string().required("El usuario es obligatorio"),
        password: Yup.string().required("La contraseña es obligatoria")
    }
}


const style = StyleSheet.create({
    title: {
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 50,
        marginBottom: 15
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    error: {
        textAlign: "center",
        color: "red",
        marginTop: 20
    }
})