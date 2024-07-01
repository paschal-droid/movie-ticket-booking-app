import { StyleSheet} from "react-native"
import { scaling, color, getFontFamily } from "../../theme/themes"
import PropTypes from 'prop-types'

const {horizontalScale, verticalScale, fontScale} = scaling
const styles = StyleSheet.create({
    resultsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 22,
    },
    resultsItem: {
    },
    resultsSection: {
        flex: 1,
        paddingVertical: verticalScale(40),
    }
})


export default styles