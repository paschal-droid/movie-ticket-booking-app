import { Pressable, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'

import { color, scaling, getFontFamily} from '../theme/themes'

const {horizontalScale, verticalScale, fontScale} = scaling


const PaymentCard = (props) => {
    const theme = useColorScheme() === 'dark'
  return (
    <View style={styles.priceContainer}>
    {props.title ? 
      <View style={styles.price}>
      <Text style={styles.priceTitle}>{props.title}</Text>
      <Text style={[styles.priceText, {color: theme ? color.White : color.Marine}]}>
        <Text>$ </Text>
        {props?.price}
      </Text>
    </View> : null  
  }
    <TouchableOpacity onPress={props.onAction} style={[styles.addToCart, props.styles]}>
      <Text style={[styles.addToCartText]}>{props.actionText}</Text>
    </TouchableOpacity>
  </View>
  )
}

PaymentCard.propTypes = {
    title: PropTypes.string,
    actionText: PropTypes.string.isRequired,
    styles: PropTypes.object,
    onAction: PropTypes.func.isRequired,

}

PaymentCard.default = {
    // onAction: () => {},
    price: 0
}

const styles = StyleSheet.create({
    priceContainer: {
        marginTop: verticalScale(22),
        paddingBottom: verticalScale(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        textAlign: 'center',
        alignItems: 'center'
    },
    priceTitle: {
        fontFamily: getFontFamily("Poppins", "400"),
        fontSize: fontScale(14),
        color: color.Grey,
        lineHeight: fontScale(20)
 
    },
    priceText: {
        fontFamily: getFontFamily("Poppins", "600"),
        fontSize: fontScale(20),
    },
    addToCart: {
        width: horizontalScale(165),
        height: verticalScale(45),
        background: color.Purple,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: fontScale(20),
        backgroundColor: color.Purple
    },
    addToCartText: {
        fontFamily: getFontFamily('Poppins', "600"),
        fontSize: fontScale(16),
        color: color.White
    }
})


export default PaymentCard