import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import MainNavigator from './navigation/MealsNavigator';
import * as Font from 'expo-font';
import { AppLoading } from 'expo-app-loading';

const fetchFonts = () => {
  Font.loadAsync({
    'open-sans': require('./assets/Fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/Fonts/OpenSans-Bold.ttf'),
  })
}

export default function App() {
  {/*const [fontLoaded, setfontLoaded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={setfontLoaded(true)} onError={console.warn+} />
  }*/}
  return (
    <MainNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
