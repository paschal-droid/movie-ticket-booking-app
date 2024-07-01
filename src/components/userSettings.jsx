import { StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { color, scaling, getFontFamily} from '../theme/themes'
import { Icon } from '.'

const {horizontalScale, verticalScale, fontScale} = scaling



const userSettings = (props) => {
    const theme = useColorScheme() === 'dark'
  return (
   <TouchableOpacity>
     <View style={styles.userSettings}>
      <View style={styles.section1}>
        <View style={styles.iconContainer}>
            <Icon style={[styles.settingIcon, {color: theme ? color.White : color.Black}]} name={props.settingIcon} />
        </View>
        <View style={styles.settingNameContainer}>
            <Text style={[styles.settingTitle, {color: theme ? color.White : color.Black}]}>{props.settingName}</Text>
            <Text style={[styles.settingSubtitle, {color: theme ? color.WhiteRGBA32 : color.Grey2}]}>{props.settingsubName1}</Text>
            <Text style={[styles.settingSubtitle, {color: theme ? color.WhiteRGBA32 : color.Grey2}]}>{props.settingsubName2}</Text>
        </View>
      </View>
      <View style={styles.arrowContainer}>
        <Icon style={[styles.arrowIcon, {color: theme ? color.White : color.Black}]} name='arrow-right' />
      </View>
    </View>
   </TouchableOpacity>
  )
}

userSettings.propTypes =  {
    settingIcon: PropTypes.string.isRequired,
    settingName: PropTypes.string.isRequired,
    settingsubName1: PropTypes.string.isRequired,
    settingsubName2: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
    userSettings: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: horizontalScale(15)
    },
    section1: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'flex-start'
    },
    iconContainer: {
    },
    settingIcon: {
        fontSize: fontScale(20)
    },
    settingNameContainer: {

    },
    settingTitle: {
        fontFamily: getFontFamily("Poppins", "500"),
        fontSize: fontScale(16)
    },
    settingSubtitle: {
        fontFamily: getFontFamily("Poppins", "500"),
        fontSize: fontScale(12),
    },
    arrowContainer: {
    },
    arrowIcon: {
        fontSize: fontScale(20)
    }
})

export default userSettings
