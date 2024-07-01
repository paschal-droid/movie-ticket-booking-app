import { View, Text, ScrollView, useColorScheme, Image } from 'react-native'
import React from 'react'
import styles from './userStyles'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { color } from '../../theme/themes'
import { globalStyles } from '../../theme'
import { Close, Settings } from '../../components'


const User = ({navigation}) => {
  const tabBarHeight = useBottomTabBarHeight()
  const theme = useColorScheme() === 'dark'
  const settingsList = [
    {
      icon: 'user',
      name: 'Account',
      subName1: 'Edit Profile',
      subName2: 'Change Password',
    },
    {
      icon: 'setting',
      name: 'Settings',
      subName1: 'Themes',
      subName2: 'Permissions',
    },
    {
      icon: 'dollar',
      name: 'Offers & Referrals',
      subName1: 'Offers',
      subName2: 'Referrals',
    },
    {
      icon: 'info',
      name: 'About',
      subName1: 'About NeptuneMoviez',
      subName2: 'More',
    },
  ]

  return (
    <View style={[globalStyles.appScreen, {backgroundColor: theme ? color.Black: color.White}]}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.appHeader}>
          <Close navigation={navigation} />
          <Text style={[styles.appHeaderText, {color: theme ? color.White : color.Black}]}>My Profile</Text>
          <View style={{flex: .3}} />
        </View>

        {/* profile */}
        <View style={styles.profileSection}>
          <Image style={styles.profileImage} source={require("../../assets/image/avatar.png")} />
          <Text style={[styles.profileText, {color: theme ? color.White : color.Black}]}>Joshua Bennett</Text>
        </View>

        {/* User settings */}
        <View style={[styles.userSettingsSection, {marginBottom: tabBarHeight}]}>
          {settingsList.map((item, index) => (
            <Settings key={index} settingIcon={item.icon} settingsubName1={item.subName1} settingsubName2={item.subName2} settingName={item.name} />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default User