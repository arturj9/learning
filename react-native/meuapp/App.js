import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [input, setInput] = useState('');
  const [nome, setNome] = useState('');
  const nomeInput = useRef(null);

  useEffect(() => {
    async function getStorage() {
      const nomeStorage = await AsyncStorage.getItem('nome');
      if (nomeStorage) {
        setNome(nomeStorage);
      }
    }
    getStorage();
  }, []);

  useEffect(() => {
    async function saveStorage() {
      await AsyncStorage.setItem('nome', nome);
    }
    saveStorage();
  }, [nome]);

  function alteraNome() {
    setNome(input);
    setInput('');
  }

  function novoNome(){
    nomeInput.current.focus();
  }

  const letrasNome = useMemo(() => {
    console.log('Mudou letra');
    return nome.length;
  }, [nome]);

  return (
    <View style={styles.container}>
      <TextInput ref={nomeInput} style={styles.input} value={input} onChangeText={setInput} />
      <TouchableOpacity style={styles.btn} onPress={alteraNome}>
        <Text style={styles.btnText}>Mudar nome</Text>
      </TouchableOpacity>
      <Text style={styles.texto}>{nome}</Text>
      <Text style={styles.texto}>Tem {letrasNome} letras.</Text>
      <TouchableOpacity style={styles.btn} onPress={novoNome}>
        <Text style={styles.btnText}>Novo nome</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 35,
    marginTop: 10,
  },
  btn: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    marginTop: 20,
  },
});
