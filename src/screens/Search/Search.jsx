import { View, Text, useColorScheme, ScrollView, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './searchStyles'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { color } from '../../theme/themes'
import { globalStyles } from '../../theme'
import { InputSearch, LazyLoading, NoResultsFound, SubMovieCard } from '../../components'
import { baseImagePath, getSearchQueryList } from '../../api/apiCalls'
import { Routes } from '../../navigation/Routes'

const Search = ({navigation, route}) => {
  const query = route.params?.query || ''
  const [search, setSearch] = useState(query)
  const [searchQueryList, setSearchQueryList] = useState([])
  const [loading, setLoading] = useState(false)
  const handleTextChange = searchValue => {
    setSearch(searchValue)
  }

  const tabBarHeight = useBottomTabBarHeight()
  const theme = useColorScheme() === 'dark'
  const {width} = Dimensions.get('window')

  const handleSearchQuery = async () => {
    if (search !== '') {
      setLoading(true);
      try {
        let tempResults = await getSearchQueryList(search);
        setSearchQueryList(tempResults.results);
        navigation.setParams({ query: '' })
      } catch (error) {
        console.error('Error fetching search results: ', error);
        navigation.setParams({ query: '' })
      } finally {
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    setSearch(query);
    const handleQueryFromHomeSearch = async () => {
      if (query !== '') {
        setLoading(true);
        try {
          let tempResults = await getSearchQueryList(query);
          setSearchQueryList(tempResults.results);
          navigation.setParams({ query: '' })
        } catch (error) {
          console.error('Error fetching search results: ', error);
          navigation.setParams({ query: '' })
        } finally {
          setLoading(false);
        }
      }
    }

    handleQueryFromHomeSearch()


  }, [query]);


  return (
    <View
      style={[
        globalStyles.appScreen,
        {backgroundColor: theme ? color.Black : color.White},
      ]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[globalStyles.space, {flexGrow: 1}]}>
        <InputSearch
          onSearch={() => {
            handleSearchQuery();
          }}
          search={search}
          handleTextChange={handleTextChange}
        />
       <View style={[styles.resultsSection, {marginBottom: tabBarHeight}]}>
       {loading ? (
          <LazyLoading widthNo={3} />
        ) : (
          <>
            {searchQueryList.length === 0 ? (
              <NoResultsFound title={'No Movie was found, Please try another'} />
            ) : (
              <View style={[styles.resultsContainer, {flex: 1}]}>
                {searchQueryList.map((item, index) => (
                  <View style={styles.resultsItem} key={index.toString() + item.id}>
                    <SubMovieCard
                      title={item.original_title}
                      imagePath={baseImagePath('w342', item.poster_path)}
                      posterPath={item.poster_path}
                      id={item.id}
                      cardWidth={width / 2.5}
                      onPress={() => navigation.push(Routes.Details, {movieId: item.id})}
                      isFirst={index == 0 ? true : false}
                      isLast={
                        index == searchQueryList.length - 1 ? true : false
                      }
                      />
                    </View>
                ))}
              </View>
            )}
          </>
        )}
       </View>
      </ScrollView>
    </View>
  );
}

export default Search 