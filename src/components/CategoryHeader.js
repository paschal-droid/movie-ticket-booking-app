import { StyleSheet, Text, View,  useColorScheme } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { color, scaling, getFontFamily} from '../theme/themes'

const {horizontalScale, verticalScale, fontScale} = scaling

const CategoryHeader = (props) => {
    const theme = useColorScheme() === 'dark'

  return (
    <View style={styles.headerContainer}>
      <Text style={[styles.headerTitle, {color: theme ? color.White: color.Black}]}>{props.title}</Text>
    </View>
  )
}

CategoryHeader.propTypes = {
    title: PropTypes.string.isRequired
}


const styles = StyleSheet.create({
    headerContainer: {
        marginVertical: verticalScale(15),
        justifyContent: 'center'
    },
    headerTitle: {
        fontFamily: getFontFamily('Poppins', '600'),
        fontSize: fontScale(20),
    }
})


export default CategoryHeader