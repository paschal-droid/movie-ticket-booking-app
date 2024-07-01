import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from '.'
import { color, scaling } from '../theme/themes'

const CloseIcon = ({navigation}) => {
  return (
    <Pressable style={styles.closeContainer} onPress={() => navigation.goBack()}>
    <Icon
      name={'close'}
      color={color.White}
      size={scaling.fontScale(28)}
    />

  </Pressable>
  )
}

export default CloseIcon

const styles = StyleSheet.create({
    closeContainer: {
        borderRadius: scaling.horizontalScale(100),
        backgroundColor: color.Purple,
        width: scaling.horizontalScale(38),
        height: scaling.horizontalScale(38),
        alignItems: 'center',
        justifyContent: 'center',
        margin: scaling.horizontalScale(15)
    },
})