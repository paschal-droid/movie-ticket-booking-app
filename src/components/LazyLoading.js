import { StyleSheet, Text, View, ActivityIndicator, Dimensions } from 'react-native'
import React from 'react'
import { color } from '../theme/themes'
import PropTypes from 'prop-types'

const LazyLoading = (props) => {
  const {width} = Dimensions.get('window')
  return (
    <View  style={[styles.loadingContainer, {height: width/props.widthNo}]}>
      <ActivityIndicator size={'large'} color={color.Purple} />
    </View>
  )
}

LazyLoading.propTypes = {
  widthNo: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})


export default LazyLoading