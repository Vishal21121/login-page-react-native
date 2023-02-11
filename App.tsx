/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Pressable,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{backgroundColor: 'rgb(1,8,30)', height: 1000}}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'}></StatusBar>
      <View style={[styles.container]}>
        <Text style={styles.text}>Sign in</Text>
        <Text style={styles.paraText}>
          Stay updated on your professional world
        </Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Email or Phone"
            keyboardType="email-address"></TextInput>
        </View>
        <View>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Password"></TextInput>
        </View>
        <View>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </View>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            marginVertical: 20,
            justifyContent: 'space-between',
          }}>
          <Pressable style={styles.btn}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 16,
                fontWeight: '400',
              }}>
              Sign in
            </Text>
          </Pressable>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            OR
          </Text>
          <Pressable style={styles.btn}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 16,
                fontWeight: '400',
              }}>
              Sign up
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
  },
  container: {
    display: 'flex',
    marginTop: 120,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: 'black',
    height: 500,
    borderRadius: 8,
    backgroundColor: '#153772',
  },
  text: {
    color: 'white',
    fontSize: 28,
    margin: 20,
    fontWeight: 'bold',
  },
  paraText: {
    color: 'white',
    fontSize: 14,
    marginLeft: 20,
  },
  input: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 30,
    padding: 10,
    borderRadius: 5,
    color: 'black',
  },
  forgot: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 20,
  },
  btn: {
    backgroundColor: '#10C2F7',
    borderRadius: 20,
    width: 300,
    height: 50,
    paddingVertical: 12,
    marginVertical: 10,
  },
});

export default App;
