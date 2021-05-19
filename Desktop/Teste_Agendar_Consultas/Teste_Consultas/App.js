import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { useState } from 'react';
import { AppRegistry, SafeAreaView, StyleSheet, Text, View } from 'react-native'


import Calendar from "./components/Calendar"
import Icon from 'react-native-vector-icons/MaterialIcons';

import 'moment';
import 'moment/locale/pt-br';

export default function App() {

  return (
    <SafeAreaView style={{ paddingTop: 30 }}>
      <View style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{ fontSize: 30, color: '#2A323C', paddingBottom: 60 }}>Cardiologista<Icon name="info" size={20} /></Text>
      </View>

      <View className='Dates' style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
      }} >
        <Icon name="event" size={30} color="#2A323C" />
        <Text style={{ fontSize: 25, color: '#2A323C' }}> Datas disponíveis </Text>
      </View>
      <View style={{ paddingTop: 10 }}>
        <Calendar />
      </View>

      <View className="Hours" style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
      }} >
        <Icon name="schedule" size={30} color="#2A323C" />
        <Text style={{ fontSize: 25, color: '#2A323C' }} > Horas disponíveis </Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({

});