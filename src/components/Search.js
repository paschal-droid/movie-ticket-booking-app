import React, {useRef, useState} from 'react'
import { Pressable, StyleSheet, TextInput, TouchableOpacity, useColorScheme } from 'react-native'
import propTypes from 'prop-types'
import { color, scaling, getFontFamily} from '../theme/themes'
import { Icon, IconExtra } from '.'
import { globalStyles } from '../theme'

const {horizontalScale, verticalScale, fontScale} = scaling


const Search = (props) => {
    const theme = useColorScheme() === 'dark'

    const textInputRef = useRef(null)
    // const [search, setSearch] = useState('')

    const handleFocus = () => {
        textInputRef.current.focus()
    }

    // const handleTextChange = searchValue => {
    //     setSearch(searchValue)
    //     props.onSearch(searchValue)
    //     props.onClose(searchValue)
    // }

  return (
   <Pressable onPress={handleFocus}  style={[styles.searchInputContainer, {borderColor: theme ? color.WhiteRGBA15 : color.Black}]}>
    <TextInput value={props.search} placeholderTextColor={theme ?  color.WhiteRGBA32 : color.Black} onChangeText={(value) => props.handleTextChange(value)} ref={textInputRef} placeholder='Search Your Movies...' style={[styles.searchInput, {color: theme ? color.WhiteRGBA32 : color.Black}]} />
    <TouchableOpacity onPress={props.onSearch}>
    <IconExtra name='search' size={fontScale(30)} color={props.search.length > 0 ? color.Purple : theme ? color.WhiteRGBA32 : color.Black} />
    </TouchableOpacity>
   </Pressable>
  )
}

Search.defaultProps = {
    onSearch: () => {},
    onClose: () => {},
}

Search.propTypes = {
    onSearch: propTypes.func,
    onClose: propTypes.func,
    handleTextChange: propTypes.func,
    search: propTypes.string
}


const styles = StyleSheet.create({
    searchInput: {
        flex: 1,
        marginLeft: horizontalScale(18),
        fontFamily: getFontFamily('Poppins', '400'),
        fontSize: fontScale(14),
        lineHeight: horizontalScale(14),
        alignItems: 'center',
        letterSpacing: .28,
    },
    searchInputContainer: {
        flexDirection: 'row',
        paddingRight: horizontalScale(18),
        height: verticalScale(45),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: horizontalScale(20),
        borderWidth: 1.5,
        textAlign: 'center'
    },
    // closeIcon: {
    //     color: Themes.COLOR.primaryLightWhiteHex,
    //     marginRight: horizontalScale(10)
    // },
})

export default Search