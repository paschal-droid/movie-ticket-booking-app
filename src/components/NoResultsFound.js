import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { color, scaling, getFontFamily} from '../theme/themes'
import PropTypes from 'prop-types'


const {horizontalScale, verticalScale, fontScale} = scaling


const NoResultsFound = (props) => {
    const theme = useColorScheme() === 'dark'

  return (
    <View style={[styles.emptyCartContainer, props.styles]}>
    <LottieView autoPlay loop style={[styles.lottieStyles]} source={props.source || require("../lottie/LoadingMovie.json" )} />
    <Text style={[styles.lottieText, {color: theme ?  color.White : color.Black}]}>{props.title}</Text>
  </View>
  )
}

NoResultsFound.propTypes = {
    title: PropTypes.string.isRequired,
    source: PropTypes.any,
    styles: PropTypes.object
}

export default NoResultsFound

const styles = StyleSheet.create({
    emptyCartContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    lottieStyles: {
        height: '40%',
    },
    lottieText: {
        fontFamily: getFontFamily("Poppins", "700"),
        fontSize: fontScale(20),
        textAlign: 'center'
    },
})