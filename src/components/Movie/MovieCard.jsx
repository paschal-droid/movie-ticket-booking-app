import React, { memo, useEffect, useState } from 'react'
import { Image, Pressable, StyleSheet, Text, View, useColorScheme } from 'react-native'
import PropTypes from 'prop-types'
import { color, scaling, getFontFamily } from '../../theme/themes'
import { Icon } from '..'
import { genreUrl } from '../../api/apiCalls'

const { horizontalScale, verticalScale, fontScale } = scaling

const MovieCard = (props) => {

  // State to store genre names
  const [genreName, setGenreName] = useState([])

  // Function to process genre IDs and fetch genre names
  const processAllGenresIds = () => {
    fetch(genreUrl)
      .then(response => response.json())
      .then(data => {
        const genreMap = {};
        data.genres.forEach(genre => {
          genreMap[genre.id] = genre.name;
        });
        // Convert genre IDs to genre names
        const genres = props.genre.map(genreId => genreMap[genreId]);
        setGenreName(genres)
      })
      .catch(error => {
        console.error(error, 'Something went wrong in fetching the genre list');
      });
  }

  useEffect(() => {
    processAllGenresIds()
  }, [])

  // Get the current color scheme
  const theme = useColorScheme() === 'dark'

  return (
    <Pressable onPress={props.onPress} style={[
      styles.movieCardSection,
      props.marginAtEnd ? props.isFirst ? { marginLeft: horizontalScale(15) } : props.isLast ? { marginRight: horizontalScale(15) } : {} : {},
      props.maginAround ? { margin: verticalScale(10) } : {},
      { maxWidth: props.cardWidth + 50}
    ]}>
      <Image style={[styles.subMovieCardImage, { width: props.cardWidth }]} source={{ uri: props.imagePath }} />
      <View style={styles.infoSection}>
        <View>
          <View style={styles.ratingsContainer}>
            <Icon name='star' color={color.Yellow} size={fontScale(20)} />
            <Text style={[styles.ratingsText, { color: theme ? color.White : color.Black }]}>({props.rating.toFixed(1)})</Text>
            <Text style={[styles.ratingsText, { color: theme ? color.White : color.Black }]}>{props.ratingCount.toLocaleString()}</Text>
          </View>
        </View>
        <Text style={[styles.movieCardText, { color: theme ? color.White : color.Black }]}>{props.title}</Text>
        <View style={[styles.genreContainer]}>
          {genreName.map((item, i) => (
            <View key={i.toString()} style={[styles.genreItem, {borderColor: theme ? color.White: color.Black}]}>
              <Text style={[styles.genreText, { color: theme ? color.White : color.Black }]}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  movieCardSection: {
    gap: 20,
    textAlign: 'center',
    alignItems: 'center'
  },

  subMovieCardImage: {
    aspectRatio: 2 / 3,
    borderRadius: horizontalScale(20)
  },
  infoSection: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  },
  movieCardText: {
    fontFamily: getFontFamily("Poppins", "400"),
    fontSize: fontScale(24)
  },
  ratingsContainer: {
    flexDirection: 'row',
    gap: 4
  },
  ratingsText: {
    fontFamily: getFontFamily("Poppins", "500"),
    fontSize: fontScale(12)
  },
  genreContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  genreItem: {
    borderWidth: 1,
    padding: verticalScale(6),
    borderRadius: horizontalScale(14)

  },
  genreText: {
    fontFamily: getFontFamily("Poppins", "400"),
    fontSize: fontScale(10),
    letterSpacing: 0.28
  }
})

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  marginAtEnd: PropTypes.bool.isRequired,
  marginAround: PropTypes.bool,
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool,
  cardWidth: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
  rating: PropTypes.number,
  ratingCount: PropTypes.number,
  genre: PropTypes.array
}



MovieCard.defaultProps = {
  onPress: () => {}
}


export default MovieCard
