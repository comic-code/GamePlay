import React from "react";
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';

import Background from "./src/components/Background";
import SignIn from "./src/Screens/SignIn";
import Home from "./src/Screens/Home";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular, Inter_500Medium,
    Rajdhani_500Medium, Rajdhani_700Bold
  })

  return (<Background>
    <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
    {fontsLoaded ? <Home /> : <AppLoading />}
  </Background>)
}