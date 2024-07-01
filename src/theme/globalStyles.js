import { StyleSheet} from "react-native"
import { scaling, color, getFontFamily} from "./themes"
import PropTypes from 'prop-types'

const {horizontalScale, verticalScale, fontScale} = scaling
const styles = StyleSheet.create({
    appScreen: {
        flex: 1,
    },
    space: {
        marginTop: verticalScale(15),
        marginHorizontal: horizontalScale(18)
    },
    spacePadding: {
        paddingTop: verticalScale(15),
        paddingHorizontal: horizontalScale(18)
    },
    noView: {
        flex: 1,
        justifyContent: 'center'
    },
    noConnectionContainer: {
        flex: .7
    },
})


export default styles