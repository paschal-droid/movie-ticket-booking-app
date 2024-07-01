import { View, Text,  ScrollView, useColorScheme, ImageBackground, TouchableOpacity, StatusBar, FlatList, Pressable, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import styles from './seatStyles'
import { color, scaling } from '../../theme/themes'
import { globalStyles } from '../../theme'
import { Close, Icon, NoResultsFound, PaymentCard, PopupAnimation } from '../../components'
import LinearGradient from 'react-native-linear-gradient'
import { baseImagePath } from '../../api/apiCalls'
import EncryptedStorage from 'react-native-encrypted-storage'
import { Routes } from '../../navigation/Routes'
import Toast from 'react-native-toast-message'
import AsyncStorage from '@react-native-async-storage/async-storage'

const timeArray = [
  "10:30", "12:30", "15:00", '16:30', "19:30", "21:00"
]

const generateDate = () => {
  const date = new Date();
  let weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  let weekDays = []
  for(let i = 0; i < 7; i++) {
    let tempDate = {
      date: new Date(date.getTime() + i *24*60*60*1000).getDate(),
      day: weekDay[new Date(date.getTime() + i *24*60*60*1000).getDay()]
    };
    weekDays.push(tempDate)
  }
  return weekDays
}

const generateSeats = () => {
  let numRow = 8
  let numColumns = 3
  let rowArray= []
  let start = 1
  let reachNine = false
  for (let i = 0; i < numRow; i++) {
    let columnArray = []
    for (let j= 0; j < numColumns; j++) {
      let seatObject = {
        number: start, 
        hasBeenTaken: Boolean(Math.round(Math.random())),
        selected: false
      };
      columnArray.push(seatObject)
      start++
    }
    if(i === 3) {
      numColumns += 2
    }
    if(numColumns < 9 && !reachNine) {
      numColumns +=2
    }
    else {
      reachNine = true;
      numColumns -= 2;
    }
    rowArray.push(columnArray)
  }
  return rowArray;
}


const Seats = ({navigation, route}) => {
  const {bgImage, posterImage} = route.params
  
  const theme = useColorScheme() === 'dark'
  const [dateArray, setDateArray] = useState(generateDate())
  const [selectedDateIndex, setSelectedDateIndex] = useState()
  const [price, setPrice] = useState(0)

  //! SEAT FUNCTIONALITY
  const [seat2DArray, setSeat2DArray] = useState(generateSeats())
  const [selectedSeat2DArray, setSelectedSeat2DArray] = useState([])
  const [selectedTimeIndex, setSelectedTimeIndex] = useState()
  const [showAnimation, setShowAnimation] = useState(false)

  
  const selectSeat = (index, subindex, number) => {
    if(!seat2DArray[index][subindex].hasBeenTaken){
      let array = [...selectedSeat2DArray];
      let temp = [...seat2DArray]
      temp[index][subindex].selected = !temp[index][subindex].selected;
      if(!array.includes(number)){
        array.push(number);
        setSelectedSeat2DArray(array);
      } else {
        const tempIndex = array.indexOf(number);
        if(temp > -1) {
          array.splice(tempIndex, 1);
          setSelectedSeat2DArray(array)
        }
      }
      setPrice((array.length * 5.99).toFixed(2))
      setSeat2DArray(temp)
    }
  }

  const bookSeats = async () => {
    if(
      selectedSeat2DArray.length !== 0 && 
      timeArray[selectedTimeIndex] !== undefined && 
      dateArray[selectedDateIndex] !== undefined
      ){

        try {
          await EncryptedStorage.setItem("ticket", JSON.stringify({
            seatArray: selectedSeat2DArray,
            timeArray: timeArray[selectedTimeIndex],
            dateArray: dateArray[selectedDateIndex],
            ticketImage: posterImage,
          }))
          setShowAnimation(true);
        } catch (error) {
          console.log("Something Went Wrong while storing the bookseat func", error);
        }
        setTimeout(() => {
          setShowAnimation(false)
          navigation.navigate(Routes.Ticket, {
            seatArray: selectedSeat2DArray,
            timeArray: timeArray[selectedTimeIndex],
            dateArray: dateArray[selectedDateIndex],
            ticketImage: posterImage,
          })
        }, 3000)
    }else {
      ToastAndroid.showWithGravity(
        'Please choose a seat, date & time to watch the movie!',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      )
    }
  }
  
  return (
    <View style={[globalStyles.appScreen, {backgroundColor: color.Black}]}>
      {showAnimation && <PopupAnimation style={styles.lottieStyles} source={require('../../lottie/download.json')} />}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.seatSection}>
          <ImageBackground style={styles.backdrop} source={{uri: bgImage}}>
            <LinearGradient
              colors={[color.BlackRGB10, color.Black]}
              style={styles.gradient}>
              <Close navigation={navigation} />
            </LinearGradient>
          </ImageBackground>
          <Text
            style={[
              styles.screenText,
              {color: color.WhiteRGBA32},
            ]}>
            Screen this side
          </Text>
        </View>
        <View style={styles.seat2DContainer}>
          <View style={styles.seatRowContainer}>
            {seat2DArray.map((item, index) => {
              return (
                <View key={index} style={styles.seatRow}>
                  {item.map((subitem, subindex) => {
                    return (
                      <TouchableOpacity
                        key={subitem.number}
                        onPress={() => {
                          selectSeat(index, subindex, subitem.number);
                        }}>
                        <Icon
                          name="seat"
                          style={[
                            styles.seat,
                            subitem.hasBeenTaken && {color: color.Grey},
                            subitem.selected && {color: color.Purple},
                          ]}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              );
            })}
          </View>
        </View>
        <View style={styles.seatOptionIndicator}>
          <View style={styles.optionIndicator}>
            <Icon
              name="radio"
              style={[styles.indicator, {color: color.White}]}
            />
            <Text style={styles.indicatorText}>Available</Text>
          </View>
          <View style={styles.optionIndicator}>
            <Icon
              name="radio"
              style={[styles.indicator, {color: color.Grey}]}
            />
            <Text style={styles.indicatorText}>Taken</Text>
          </View>
          <View style={[styles.optionIndicator]}>
            <Icon
              name="radio"
              style={[styles.indicator, {color: color.Purple}]}
            />
            <Text style={styles.indicatorText}>Selected</Text>
          </View>
        </View>
        {/* Dates */}
        <View
          style={[
            styles.datePickerContainer,
            {backgroundColor: theme ? color.Black : color.White},
          ]}>
          <FlatList
            data={dateArray}
            keyExtractor={item => item.date}
            horizontal
            contentContainerStyle={styles.datePickerList}
            bounces={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <Pressable onPress={() => setSelectedDateIndex(index)}>
                <View
                  style={[
                    styles.datePicker,
                    index == 0
                      ? {marginLeft: scaling.horizontalScale(10)}
                      : index == dateArray.length - 1
                      ? {marginRight: scaling.horizontalScale(10)}
                      : {},
                    {backgroundColor: index == selectedDateIndex && theme ? color.Purple : index ==selectedDateIndex && !theme ? color.Grey2 : theme ? color.Grey : color.White },
                    {borderColor: theme ? color.White : color.Grey, borderWidth: .5}
                  ]}>
                  <Text style={[styles.dateText,  {color : index === selectedDateIndex ? color.White : theme ? color.White : color.Marine}] }>{item.date}</Text>
                  <Text style={[styles.dayText, {color : index === selectedDateIndex ? color.White : theme ? color.White : color.Marine}] }>{item.day}</Text>
                </View>
              </Pressable>
            )}
          />
          {/* Time Picker */}
          <FlatList
            data={timeArray}
            keyExtractor={item => item}
            horizontal
            contentContainerStyle={styles.timePickerList}
            bounces={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <Pressable onPress={() => setSelectedTimeIndex(index)}>
                <View
                  style={[
                    styles.timePicker,
                    index == 0
                      ? {marginLeft: scaling.horizontalScale(10)}
                      : index == dateArray.length - 1
                      ? {marginRight: scaling.horizontalScale(10)}
                      : {},
                    {backgroundColor: index == selectedTimeIndex && theme ? color.Purple : index ==selectedTimeIndex && !theme ? color.Grey2 : theme ? color.Grey : color.White },
                    {borderColor: theme ? color.White : color.Grey, borderWidth: .5}
                  ]}>
                  <Text style={[styles.timeText,  {color : index === selectedTimeIndex ? color.White : theme ? color.White : color.Marine}] }>{item}</Text>
                </View>
              </Pressable>
            )}
          />
          <View style={styles.payment}>
          <PaymentCard onAction={() => bookSeats()} title={'Total Price'} price={price} actionText='Buy Tickets'  />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Seats