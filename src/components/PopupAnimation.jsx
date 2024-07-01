import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import {getFontFamily, scaling, color} from '../theme/themes'
import LottieView from 'lottie-react-native';


const PopupAnimation = (props) => {
  const theme = useColorScheme() === 'dark'
  return (
    <View style={[styles.lottieAnimationContainer, {backgroundColor: theme ? color.WhiteRGBA32 : color.BlackRGBA50}]}>
      <LottieView autoPlay loop={false} style={props.style} source={props.source} />
    </View>
  )
}

PopupAnimation.propTypes = {
    style: PropTypes.object.isRequired,
    source: PropTypes.any.isRequired
}

export default PopupAnimation

const styles = StyleSheet.create({
    lottieAnimationContainer: {
        flex: 1,
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        justifyContent: 'center'
    },
})