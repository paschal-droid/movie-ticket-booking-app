import { Dimensions, Image, Pressable, StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { color, scaling, getFontFamily} from '../../theme/themes'
import SkeletonLoader from '../SkeletonLoader'

const {horizontalScale, verticalScale, fontScale} = scaling




const SubMovieCard = (props) => {
    const theme = useColorScheme() === 'dark'

  return (
    <Pressable onPress={props.onPress} style={[styles.movieCardSection,
        props.marginAtEnd ? props.isFirst ? {marginLeft: horizontalScale(15)} : props.isLast ? {marginRight: horizontalScale(15)} : {} : {},
        props.maginAround ? {margin: verticalScale(10)} : {},
        {maxWidth: props.cardWidth}
    ]}>
      {props.posterPath == null ? (<SkeletonLoader />) : (<Image style={[styles.subMovieCardImage, {width: props.cardWidth}]} width={props.cardWidth} source={{uri: props.imagePath}} />)}
      
      <Text numberOfLines={1} style={[styles.subMovieCardText, {color: theme ? color.White: color.Black}]}>{props.title}</Text>
    </Pressable>
  )
}

SubMovieCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    posterPath: PropTypes.string,
    imagePath: PropTypes.string.isRequired,
    marginAtEnd: PropTypes.bool,
    marginAround: PropTypes.bool,
    isFirst: PropTypes.bool,
    isLast: PropTypes.bool,
    cardWidth: PropTypes.number.isRequired,
    onPress: PropTypes.func.isRequired
}

SubMovieCard.defaultProps = {
    onPress: () => {}
}

const styles = StyleSheet.create({
    movieCardSection: {
        gap: 10,
        textAlign: 'center'
    },

    subMovieCardImage: {
        aspectRatio: 2/3,
        borderRadius: horizontalScale(20)
    },
    subMovieCardText: {
        fontFamily: getFontFamily("Poppins", "600"),
        fontSize: fontScale(14),
        textAlign: 'center'
    },
})

export default SubMovieCard
