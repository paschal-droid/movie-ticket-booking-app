import { View, Text, ScrollView, useColorScheme, Image, Dimensions, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import styles from './detailStyles'
import { color, scaling } from '../../theme/themes'
import { globalStyles } from '../../theme'
import { Close, Icon, LazyLoading } from '../../components'
import { baseImagePath, getCastDetailsList, getDetailsList } from '../../api/apiCalls'
import { ImageBackground } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Pressable } from 'react-native'
import { Routes } from '../../navigation/Routes'

 

const Details = ({navigation, route}) => {
  const theme = useColorScheme() === 'dark'
  const id = route.params?.movieId || ''
  const [details, setDetails] = useState(undefined)
  const [loading, setLoading] = useState(false)
  const {width, height} = Dimensions.get('window')

  function convertTime(runtime) {
    const hours = Math.floor(runtime / 60);
    const remainingMinutes = runtime % 60;
    return `${hours}h ${remainingMinutes}m`;
  }
  
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
  }

  const [zoomedIndex, setZoomedIndex] = useState(0);

  const handleProfileZoom = (index) => {
    setZoomedIndex(index);
  };
// baseImagePath('w780', item.poster_path)

  useEffect(() => {
    (async () => { 
      if(id != null) {
        setLoading(true)
        try {
          let tempDetails = await getDetailsList(id)
          let tempCastDetails = await getCastDetailsList(id)
          setDetails({cast: tempCastDetails.cast.splice(0, 5), ...tempDetails})
        } catch (error) {
          console.error('Error fetching the movie Details: ', error);
        } finally {
          setLoading(false);
        }
      }

     })()
  }, [id])

  return (
    <View style={[
        globalStyles.appScreen,{backgroundColor: theme ? color.Black : color.White},]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{flexGrow: 1}}
        >
        {loading ? (
          <LazyLoading widthNo={1} />
        ) : (
          <View style={[styles.detailSection]}>
            <ImageBackground style={styles.detailInfoBackdrop} source={{uri: baseImagePath('w780', details?.backdrop_path)}}>
              <LinearGradient colors={[color.BlackRGB10, color.Black]} style={styles.detailInfoGradient}>
              <Close navigation={navigation} />
              </LinearGradient>
            </ImageBackground>
              <View style={styles.detailInfoBackdrop}>
                <Image style={styles.detailImage} source={{ uri: baseImagePath('w342', details?.poster_path) }} />
              </View>
              <View style={styles.detailImageSection}>
                    <View style={styles.detailMovieInfo}>
                      <View style={styles.detailMovieRuntime}>
                        <Icon name='clock' size={scaling.fontScale(18)} style={{ color: theme ? color.WhiteRGBA50 : color.Black }} />
                        <Text style={[styles.detailMovieRuntimeText, {color: theme ?  color.White : color.Black}]}>{convertTime(details?.runtime)}</Text>
                      </View>
                      <Text style={[styles.detailMovieTitle, {color: theme ?  color.White : color.Black}]}>{details?.original_title}</Text>
                      <View style={[styles.genreContainer]}>
                        {details?.genres.splice(0,4).map((item, i) => (
                          <View key={i.toString()} style={[styles.genreItem, { borderColor: theme ? color.WhiteRGBA50 : color.Black }]}>
                            <Text style={[styles.genreText, { color: theme ? color.WhiteRGBA75 : color.Black }]}>{item.name}</Text>
                          </View>
                        ))}
                      </View>
                      <Text style={styles.detailMovieTagline}>{details?.tagline}</Text>
                    </View>
                </View>
                <View style={styles.movieDetails}>
                  <View style={styles.movieDetailsRating}>
                    <View style={styles.ratingsContainer}>
                      <Icon name='star' color={color.Yellow} size={scaling.fontScale(20)} />
                      <Text style={[styles.ratingsText, { color: theme ? color.White : color.Black }]}>({details?.vote_average.toFixed(1)})</Text>
                      <Text style={[styles.ratingsText, { color: theme ? color.White : color.Black }]}>{details?.vote_count.toLocaleString()}</Text>
                    </View>
                    <Text style={[styles.ratingsText, { color: theme ? color.White : color.Black }]}>{formatDate(details?.release_date)}</Text>
                  </View>
                  <View style={styles.movieDetailOverview}>
                    <Text style={[styles.movieDetailOverviewText, { color: theme ? color.White : color.Black }]}>{details?.overview}</Text>
                  </View>
                </View>
                <View style={styles.movieCastDetails}>
                  <Text style={[styles.movieCastDetailsTitle, { color: theme ? color.White : color.Black }]}>Top Cast</Text>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}  contentContainerStyle={styles.movieCastProfile}>
                  {details?.cast.map((item, i) => (
                    <Pressable onPress={() => handleProfileZoom(i)} key={i.toString()} style={[styles.castProfile]}>
                      <Image source={{uri: baseImagePath('w300', item.profile_path)}} style={[styles.castProfileImage, zoomedIndex === i && styles.zoomedItem]} />
                      <Text style={[styles.castProfileTextCharacter, zoomedIndex === i && styles.zoomedTextCharacter]}>{item.character}</Text>
                      <Text numberOfLines={1} style={[styles.castProfileText, zoomedIndex === i && styles.zoomedText, { color: theme ? color.White : color.Black }]}>{item.name}</Text>
                    </Pressable>
                  ))}
                  </ScrollView>
                </View>
              <View style={styles.detailActionContainer}>
                <TouchableOpacity onPress={() => navigation.push(Routes.Seats, {bgImage: baseImagePath('w780', details.backdrop_path), posterImage: baseImagePath('original', details.poster_path)})} style={styles.actionButton}>
                  <Text style={styles.actionButtonText}>Select Seats</Text>
                </TouchableOpacity>
              </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

export default Details