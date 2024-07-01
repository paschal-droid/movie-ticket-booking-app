import { StyleSheet} from "react-native"
import { scaling, color, getFontFamily } from "../../theme/themes"
import PropTypes from 'prop-types'

const {horizontalScale, verticalScale, fontScale} = scaling
const styles = StyleSheet.create({
    lottieStyles: {
        justifyContent: 'center',
        flex: 1
    },
    backdrop: {
        aspectRatio: 3072/1727,
        width: '100%'
    },
    gradient: {
        height: '100%'
    },
    screenText: {
        fontFamily: getFontFamily("Poppins", "400"),
        fontSize: fontScale(10),
        textAlign: 'center'
    },
    seat2DContainer: {
        marginHorizontal: horizontalScale(14),
        marginVertical: verticalScale(15),
    },
    seatRowContainer: {
        gap: 12
    },
    seatRow: {
        flexDirection: 'row',
        gap: 15,
        justifyContent: 'center'
    },
    seat: {
        fontSize: fontScale(24),
        color: color.White
    },
    seatOptionIndicator: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 60,
        marginHorizontal: horizontalScale(14),
        marginTop: verticalScale(20),
        marginBottom: verticalScale(25),

    },
    optionIndicator: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    indicator: {
       fontSize: fontScale(20)
    },
    indicatorText: {
        fontSize: fontScale(10),
        fontFamily: getFontFamily("Poppins", '500'),
        color: color.White
    },
    datePickerContainer: {
        borderTopRightRadius: fontScale(25),
        borderTopLeftRadius: fontScale(25),
        paddingHorizontal: horizontalScale(10),

    },
    datePicker: {
        width: horizontalScale(75),
        height: horizontalScale(90),
        borderRadius: horizontalScale(30),
        backgroundColor: color.Grey2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    datePickerList: {
        gap: 15,
        marginTop: verticalScale(30),
        marginBottom: verticalScale(10)
    },
    dateText: {
        fontFamily: getFontFamily("Poppins", "600"),
        fontSize: fontScale(24),
    },
    dayText: {
        fontFamily: getFontFamily("Poppins", "600"),
        fontSize: fontScale(12)
    },
    timePickerList: {
        gap: 15,
        marginTop: verticalScale(5),
        marginBottom: verticalScale(12)
    },
    timePicker: {
        width: horizontalScale(80),
        height: horizontalScale(40),
        borderRadius: horizontalScale(30),
        alignItems: 'center',
        justifyContent: 'center'
    },
    timeText: {
        fontFamily: getFontFamily("Poppins", "600"),
        fontSize: fontScale(14)
    },
    payment: {
        marginHorizontal: horizontalScale(14),
        marginVertical: verticalScale(15),
    }
})


export default styles