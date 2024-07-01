import { StyleSheet} from "react-native"
import { scaling, color, getFontFamily } from "../../theme/themes"
import PropTypes from 'prop-types'

const {horizontalScale, verticalScale, fontScale} = scaling
const styles = StyleSheet.create({
    detailSection: {
        flex: 1,
    },
    
    detailInfoBackdrop: {
        aspectRatio: 3072/1727,
        width: '100%'
    },
    detailInfoGradient: {
        height: '100%'
    },
    detailImageSection: {
        alignItems: 'center',
        paddingTop: verticalScale(10),
        gap: 15,
        marginBottom: verticalScale(15),
        marginHorizontal: horizontalScale(14),
    },
    detailImage: {
        aspectRatio: 2/3,
        width: '60%',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
    },
    detailMovieInfo: {
        alignItems: 'center',
        gap: 10
    },
    detailMovieRuntime: {
        flexDirection: 'row',
        gap: 8
    },
    detailMovieRuntimeText: {
        fontFamily: getFontFamily('Poppins', '500'),
        fontSize: fontScale(12)
    },
    detailMovieTitle: {
        fontFamily: getFontFamily('Poppins', '400'),
        fontSize: fontScale(24),
        textAlign: 'center'

    },
    genreContainer: {
        flexDirection: 'row',
        gap: 20,
      },
      genreItem: {
        borderWidth: 1,
        padding: verticalScale(8),
        borderRadius: horizontalScale(15)
    
      },
      genreText: {
        fontFamily: getFontFamily("Poppins", "400"),
        fontSize: fontScale(10),
        letterSpacing: 0.28
      },
    detailMovieTagline: {
        fontFamily: getFontFamily('Poppins', '300'),
        fontSize: fontScale(12),
        fontStyle: 'italic',
        marginTop: verticalScale(6)
    },

    ratingsContainer: {
        flexDirection: 'row',
        gap: 2
      },
      ratingsText: {
        fontFamily: getFontFamily("Poppins", "400"),
        fontSize: fontScale(12)
      },
    movieDetails: {
        marginHorizontal: horizontalScale(20),
        gap: 5
    },
    movieDetailsRating: {
        flexDirection: 'row',
        gap: 20
    },
    movieDetailOverview: {

    },
    movieDetailOverviewText: {
        fontFamily: getFontFamily('Poppins', '300'),
        fontSize: fontScale(12),
        lineHeight: fontScale(20)

    },
    movieCastDetails: {
        marginHorizontal: horizontalScale(14),
        marginVertical: verticalScale(15),
        gap: 10
    },
    movieCastDetailsTitle: {
        fontFamily: getFontFamily('Poppins', '600'),
        fontSize: fontScale(20),

    },
    movieCastProfile: {
        flexDirection: 'row',
        gap: 20

    },
    castProfile: {
        alignItems: 'center'
    },
    castProfileImage: {
        width: horizontalScale(75),
        aspectRatio: 1920/2880,
        borderRadius: horizontalScale(50*2),
        marginBottom: verticalScale(10)
    },
    castProfileText: {
        fontFamily: getFontFamily('Poppins', '600'),
        fontSize: fontScale(8),

    },
    castProfileTextCharacter: {
        fontFamily: getFontFamily('Poppins', '600'),
        fontSize: fontScale(10),
        color: color.Purple,
        flexWrap: 'wrap'
    },
    zoomedItem: {
        width: horizontalScale(95),
    },
    zoomedText: {
        fontFamily: getFontFamily('Poppins', '600'),
        fontSize: fontScale(10),
    },
    zoomedTextCharacter: {
        fontFamily: getFontFamily('Poppins', '600'),
        fontSize: fontScale(12),
    },
    detailActionContainer: {
        marginHorizontal: horizontalScale(14),
        marginVertical: verticalScale(15),
        alignItems: 'center',
        justifyContent: 'center'

    },
    actionButton: {
        backgroundColor: color.Purple,
        width: horizontalScale(150),
        height: horizontalScale(36),
        borderRadius: horizontalScale(25),
        alignItems: 'center',
        justifyContent: 'center'

    },
    actionButtonText: {
        fontFamily: getFontFamily('Poppins', '500'),
        fontSize: fontScale(12),
        color: color.White

    }
})


export default styles