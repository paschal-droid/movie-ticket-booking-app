import { StyleSheet} from "react-native"
import { scaling, color, getFontFamily } from "../../theme/themes"
import PropTypes from 'prop-types'

const {horizontalScale, verticalScale, fontScale} = scaling
const styles = StyleSheet.create({
    appHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    appHeaderText: {
        fontFamily: getFontFamily("Poppins", "500"),
        fontSize: fontScale(20)
    },
    profileSection: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: verticalScale(25),
        gap: horizontalScale(10)
    },
    profileImage: {
        width: horizontalScale(80),
        height: horizontalScale(80),
        borderRadius: horizontalScale(80)
    },
    profileText: {
        fontFamily: getFontFamily("Poppins", "500"),
        fontSize: fontScale(16)
    },
    userSettingsSection: {
        marginHorizontal: horizontalScale(20),
        marginTop: verticalScale(15),
        gap: 40
    }
})


export default styles