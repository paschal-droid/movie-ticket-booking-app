import { StyleSheet} from "react-native"
import { scaling, color, getFontFamily } from "../../theme/themes"
import PropTypes from 'prop-types'

const {horizontalScale, verticalScale, fontScale} = scaling
const styles = StyleSheet.create({
    nowPlayingMoviesSection: {
        marginTop: verticalScale(15)
    },
    popularMoviesSection: {
    },
    upcomingMoviesSection: {
        marginVertical: verticalScale(25)
    },
    nowPlayingListContainer: {
        flexGrow: 1,
        gap: verticalScale(28),
        paddingLeft: 10
    },
    popularListContainer: {
        gap: verticalScale(15),
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
    },
})


export default styles