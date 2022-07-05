import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./app/config/firebase.js";

export default function App() {
  // Para conocer si es Login o el Registro
  // Hook de Estado
  const [currentUser, setCurrentUser] = useState(auth.currentUser);
  const [esNuevo, setEsNuevo] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setCurrentUser(null);
      })
      .catch((error) => {
        Alert.alert(`Error al cerrar sesión: ${error}`);
        // An error happened.
      });

    setEmail(null);
    setPassword(null);
    setEsNuevo(false);
  };

  if (currentUser) {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Bienvenido {currentUser.email}</Text>
        <View style={styles.buttonContainer}>
          <Button title="Cerrar sesión" onPress={logOut} />
        </View>
      </View>
    );
  }

  const inicioSesion = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setCurrentUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        Alert.alert(`Error al iniciar sesión: ${errorMessage}`);
      });
  };

  const registroUsuario = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setCurrentUser(user);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        Alert.alert(`Error al registrar usuario: ${errorMessage}`);
        // ..
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {!esNuevo ? "INICIO DE SESIÓN" : "REGISTRO"}
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        keyboardType="email-address"
        onChangeText={(value) => setEmail(value)}
        value={email}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        keyboardType="default"
        onChangeText={(value) => setPassword(value)}
        value={password}
        secureTextEntry={true}
      />

      <View style={styles.buttonContainer}>
        <Button
          title={!esNuevo ? "Iniciar Sesión" : "Registrar Usuario"}
          onPress={!esNuevo ? inicioSesion : registroUsuario}
        />
      </View>

      {!esNuevo ? (
        <Button title="No tienes cuenta?" onPress={() => setEsNuevo(true)} />
      ) : (
        <Button title="Ya tienes cuenta" onPress={() => setEsNuevo(false)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 20,
  },
  input: {
    width: 300,
    padding: 10,
    borderWidth: 1,
    margin: 10,
  },
  text: {
    fontSize: 20,
  },
  welcomeText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  buttonContainer: {
    padding: 20,
  },
});
