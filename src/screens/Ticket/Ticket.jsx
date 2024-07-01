import { View, Text, ScrollView, useColorScheme, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './ticketStyles'
import { scaling, color, getFontFamily } from "../../theme/themes"

import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { globalStyles } from '../../theme'
import { Close, Icon, NoResultsFound } from '../../components'
import { Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import AsyncStorage from '@react-native-async-storage/async-storage'
import EncryptedStorage from 'react-native-encrypted-storage'


const Ticket = ({navigation, route}) => {
  const [ticketData, setTicketData] = useState(route.params)
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    (async () => {
      setLoading(true)
      try {
        const ticket = await EncryptedStorage.getItem("ticket");
        if(ticket !== undefined && ticket !== null){
          setTicketData(JSON.parse(ticket))
        }
      } catch (error) {
        console.error('Something went wrong while getting ticket info', error);
      }
      finally {
        setLoading(false);
      }
    })()
  },[])

  if (ticketData !== route.params && route.params !== undefined ) {
    setTicketData(route.params)
  }

  const tabBarHeight = useBottomTabBarHeight()
  const theme = useColorScheme() === 'dark'

  return (
    <View style={[globalStyles.appScreen, { backgroundColor: theme ? color.Black : color.White }]}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
        <Close navigation={navigation} />
        {ticketData === undefined ? (
          <NoResultsFound title={'Oops, You have no booked tickets here' }/>

        ) : (
          <View style={[styles.ticketSection, {marginBottom: tabBarHeight}]}>
          <ImageBackground source={{uri: ticketData?.ticketImage}} style={styles.backdrop}>
            <LinearGradient style={styles.gradient} colors={[color.OrangeRGBA0, color.Purple]}>
              <View style={[styles.blackCircle, {backgroundColor: theme ? color.Black : color.White, position: 'absolute', bottom: scaling.horizontalScale(-35), left: scaling.horizontalScale(-35)}]} />
              <View style={[styles.blackCircle, {backgroundColor: theme ? color.Black : color.White,  position: 'absolute', bottom: scaling.horizontalScale(-35), right: scaling.horizontalScale(-35),}]} />
            </LinearGradient>
          </ImageBackground>

          <View style={styles.liner}>

          </View>
          <View style={styles.ticketFooterSection}>
          <View style={[styles.blackCircle, {backgroundColor: theme ? color.Black : color.White, position: 'absolute', top: scaling.horizontalScale(-35), left: scaling.horizontalScale(-35)}]} />
            <View style={[styles.blackCircle, {backgroundColor: theme ? color.Black : color.White,  position: 'absolute', top: scaling.horizontalScale(-35), right: scaling.horizontalScale(-35),}]} />

            <View style={styles.timeAndDateInfo}>
              <View style={styles.dateInfo}>
                <Text style={styles.dateText}>{ticketData?.dateArray.date}</Text>
                <Text style={styles.dayText}>{ticketData?.dateArray.day}</Text>
              </View>
              <View style={styles.timeInfo}>
                <Icon name={'clock'} style={styles.timeIcon} />
                <Text style={styles.timeText}>{ticketData?.timeArray}</Text>
              </View>
            </View>

            <View style={styles.seatAndRowInfo}>
              <View style={styles.hallInfo}>
                <Text style={styles.hallTitle}>Hall</Text>
                <Text style={styles.hallText} >{`0${Math.floor(Math.random() * 5) + 1}`}</Text>
              </View>
              <View style={styles.hallInfo}>
                <Text style={styles.hallTitle}>Row</Text>
                <Text style={styles.hallText} >{`0${Math.floor(Math.random() * 9) + 1}`}</Text>
              </View>
              <View style={styles.hallInfo}>
                <Text style={styles.hallTitle}>Seats</Text>
                <Text style={styles.hallText} >{
                  ticketData?.seatArray.slice(0,4).map((item, index, arr) => {
                    return item + (index === arr.length-1 ? '' : ', ')
                  })
                }</Text>
              </View>
            </View>

            <View style={styles.barcodeInfo}>
              <Image style={styles.barcodeImage} source={require('../../assets/image/barcode.png')} />
            </View>
          </View>
        </View>

        )}
      </ScrollView>
    </View>
  )
}

export default Ticket