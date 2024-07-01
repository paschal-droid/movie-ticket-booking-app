import { StyleSheet} from "react-native"
import { scaling, color, getFontFamily } from "../../theme/themes"
import PropTypes from 'prop-types'

const {horizontalScale, verticalScale, fontScale} = scaling
const styles = StyleSheet.create({
    ticketSection: {
        justifyContent: 'center',
        flex:  1
    },
    backdrop: {
        alignSelf: 'center',
        width: horizontalScale(280),
        aspectRatio: 200/300,
        borderTopLeftRadius: horizontalScale(25),
        borderTopRightRadius: horizontalScale(25),
        overflow: 'hidden',
        justifyContent: 'flex-end'
    },
    gradient: {
        height: '60%'
    },
    liner: {
        borderTopColor: color.Black,
        borderTopWidth: 2,
        width: horizontalScale(280),
        alignSelf: 'center',
        backgroundColor: color.Purple,
        borderStyle: 'dashed'
    },
    ticketFooterSection: {
        backgroundColor: color.Purple,
        width: horizontalScale(280),
        alignItems: 'center',
        paddingBottom: verticalScale(30),
        alignSelf: 'center',
        borderBottomLeftRadius: horizontalScale(25),
        borderBottomRightRadius: horizontalScale(25),
    },
    timeAndDateInfo: {
        flexDirection: 'row',
        gap: verticalScale(30),
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: verticalScale(10)
    },
    dateInfo: {
        fontFamily: getFontFamily("Poppins", "500"),
        fontSize: fontScale(24),
        color: color.White,
        alignItems: 'center'
    },
    dayText: {
        fontFamily: getFontFamily("Poppins", "400"),
        fontSize: fontScale(14),
        color: color.White,

    },
    dateText: {
        fontFamily: getFontFamily("Poppins", "500"),
        fontSize: fontScale(24),
        color: color.White,

    },
    timeInfo: {
        alignItems: 'center', 
        justifyContent: 'center'
    },
    timeIcon: {
        fontSize: fontScale(24),
        color: color.White,
        paddingBottom: verticalScale(10)
    },
    timeText: {
        fontSize: fontScale(14),
        color: color.White,
        fontFamily: getFontFamily("Poppins", "400"),
    },
    seatAndRowInfo: {
        flexDirection: 'row',
        gap: verticalScale(40),
        justifyContent: 'center',
        marginVertical: verticalScale(10)

    },
    hallInfo: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    hallTitle: {
        fontFamily: getFontFamily("Poppins", "500"),
        fontSize: fontScale(18),
        color: color.White,

    },
    hallText: {
        fontFamily: getFontFamily("Poppins", "400"),
        fontSize: fontScale(14),
        color: color.White,

    },
    barcodeInfo: {},
    barcodeImage: {
        height: verticalScale(50),
        aspectRatio: 158/52,
    },
    blackCircle: {
        height: horizontalScale(75),
        width: horizontalScale(75),
        borderRadius: horizontalScale(80),
        
    },
})


export default styles