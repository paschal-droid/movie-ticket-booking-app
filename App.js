import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { MainNavigation } from './src/navigation/mainNavigation'
import BootSplash from "react-native-bootsplash";
import NetInfo from '@react-native-community/netinfo'


import { NoResultsFound } from './src/components'
import styles from './src/theme/globalStyles'
import { View, useColorScheme } from 'react-native'
import { color } from './src/theme/themes'


const App = () => {
    // ! TO CHECK FOR INTERNET CONNECTIVITY
    const [isConnected, setIsConnected] = useState(true);
    const theme = useColorScheme() === 'dark'

    useEffect(() => {
      const unsubscribe = NetInfo.addEventListener(state => {
        setIsConnected(state.isConnected);
      });
    
      return () => {
        unsubscribe();
      };
      }, [isConnected]);
    
  return (
    <NavigationContainer onReady={() => {BootSplash.hide()}}>
     {!isConnected && <View style={[styles.noView, {backgroundColor: theme ? color.Black : color.White}]}><NoResultsFound styles={styles.noConnectionContainer} title='Oops, No Internet Connection' source={require('./src/lottie/ticket loading.json')} /></View>}
     {isConnected &&  <MainNavigation />}
    </NavigationContainer>
  )
}

export default App