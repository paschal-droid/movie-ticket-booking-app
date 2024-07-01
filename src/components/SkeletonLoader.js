import React from 'react';
import { View, StyleSheet, ActivityIndicator, Dimensions, useColorScheme } from 'react-native';
import { color, scaling, getFontFamily} from '../theme/themes'
const {horizontalScale, verticalScale, fontScale} = scaling

const SkeletonLoader = (props) => {
    const {height, width} = Dimensions.get('window')
    const theme = useColorScheme() === 'dark'

  return (
    <View style={[styles.container,{height: height/3, width: width/2.4}, {borderColor: theme ? '#CCCC' : color.Black}]}>

        <View style={[styles.item, ]}>
          <ActivityIndicator size="small" color={theme ?  '#CCCC' : color.Black} />
        </View>
    </View>
)
};


const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: verticalScale(20)
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textContainer: {
    marginLeft: 10,
  },
  textPlaceholder: {
    backgroundColor: '#CCCCCC',
    height: 10,
    marginBottom: 5,
    borderRadius: 5,
  },
});

export default SkeletonLoader;