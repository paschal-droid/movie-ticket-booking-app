import { View, Text, StatusBar, useColorScheme, ScrollView, Pressable, FlatList, Dimensions} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import styles from './homeStyles'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { color } from '../../theme/themes'
import { globalStyles } from '../../theme'
import { Routes } from '../../navigation/Routes'
import { Header, LazyLoading, InputSearch, SubMovieCard, MovieCard  } from '../../components'
import {baseImagePath, getNowPlayingMoviesList, getPopularMoviesList, getUpcomingMoviesList } from '../../api/apiCalls'

const Home = ({navigation}) => {
  const {width} = Dimensions.get('window')

  const [nowPlayingMoviesList, setNowPlayingMoviesList] = useState(undefined)
  const [popularMoviesList, setPopularMoviesList] = useState(undefined)
  const [upcomingMoviesList, setUpcomingMoviesList] = useState(undefined)

  const [search, setSearch] = useState('')
  const handleTextChange = searchValue => {
    setSearch(searchValue)
  }

  const tabBarHeight = useBottomTabBarHeight()
  const theme = useColorScheme() === 'dark'

  // API calls
  const movieSearchFunction = () => {
    navigation.navigate(Routes.Search, {query: search})
    setTimeout(() => {
      setSearch('')
    }, 5000);
  }

  useEffect(() => {
    (async () => {

        let tempNowPlaying = await getNowPlayingMoviesList()
        setNowPlayingMoviesList(tempNowPlaying.results)
  
        let tempPopular = await getPopularMoviesList()
        setPopularMoviesList(tempPopular.results)
  
        let tempUpcoming = await getUpcomingMoviesList()
        setUpcomingMoviesList(tempUpcoming.results)
      }
    )()
  }, [])


  
  return (
    <View
      style={[
        globalStyles.appScreen,
        {backgroundColor: theme ? color.Black : color.White},
      ]}>
      <StatusBar backgroundColor={theme ? color.Black : color.White} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{flexGrow: 1}, globalStyles.space]}>
        {/* Now Playing Movies Section */}
        <InputSearch
          onSearch={() => {
            navigation.navigate(Routes.Search, { query: search });
            setSearch('');
          }}
          search={search}
          handleTextChange={handleTextChange}
        />

        <View style={styles.nowPlayingMoviesSection}>
          <Header title="Now Playing" />
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={nowPlayingMoviesList}
            ListEmptyComponent={<LazyLoading widthNo={2} />}
            contentContainerStyle={styles.nowPlayingListContainer}
            keyExtractor={(item) => item.id.toString()}
            snapToInterval={width * 0.7 + 36}
            bounces={false}
            decelerationRate={0}
            renderItem={({ item, index }) => {
              if (!item.original_title) {
                return <View style={{ width: (width - (width * 0.7 + 36 * 2)) / 3,  left: 100 }}></View>;
              }
              return (
                <MovieCard
                  title={item.original_title}
                  imagePath={baseImagePath('w780', item.poster_path)}
                  id={item.id}
                  marginAtEnd={true}
                  marginAround={true}
                  genre={item.genre_ids.slice(1, 4)}
                  rating={item.vote_average}
                  ratingCount={item.vote_count}
                  cardWidth={width * 0.7}
                  onPress={() => navigation.push(Routes.Details, { movieId: item.id })}
                  // isFirst={index === 0}
                  // isLast={index === nowPlayingMoviesList.length - 1}
                />
              );
            }}
          />
        </View>

        {/* Popular Movies Section */}
        <View style={styles.popularMoviesSection}>
          <Header title='Popular' />
          <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={popularMoviesList}
            ListEmptyComponent={<LazyLoading widthNo={3} />}
            contentContainerStyle={styles.popularListContainer}
            keyExtractor={(item) => item.id}
            renderItem={({item, index}) => (
              <SubMovieCard 
                title={item.original_title}
                imagePath={baseImagePath('w342', item.poster_path)}
                id={item.id}
                marginAtEnd={true}
                cardWidth={width/3}
                posterPath={item.poster_path}
                onPress={() => navigation.push(Routes.Details, {movieId: item.id})}
                isFirst={index == 0 ? true : false}
                isLast={index == popularMoviesList.length -1 ? true : false}
              />
            )}
          />

        </View>


        {/* Upcoming Movies section */}
        <View style={styles.upcomingMoviesSection}>
          <Header title='Upcoming' />
          <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={upcomingMoviesList}
            ListEmptyComponent={<LazyLoading widthNo={3} />}
            contentContainerStyle={[styles.popularListContainer, {marginBottom: tabBarHeight}]}
            keyExtractor={(item) => item.id}
            renderItem={({item, index}) => (
              <SubMovieCard 
                title={item.original_title}
                imagePath={baseImagePath('w342', item.poster_path)}
                id={item.id}
                marginAtEnd={true}
                cardWidth={width/3}
                posterPath={item.poster_path}
                onPress={() => navigation.push(Routes.Details, {movieId: item.id})}
                isFirst={index == 0 ? true : false}
                isLast={index == upcomingMoviesList.length -1 ? true : false}
              />
            )}
          />

        </View>

      </ScrollView>
    </View>
  );
}

export default Home