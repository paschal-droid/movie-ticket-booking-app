import { Dimensions } from "react-native";
import DeviceInfo from "react-native-device-info";

const {width, height} = Dimensions.get('window');


//! THIS HELPS TO CHECK IF THE DEVICE HAS A SMALL WIDTH AND A NOTCH AT THE TOP OF THE SCREEN
const isSmall = width <= 375 && !DeviceInfo.hasNotch()

//* THIS HELPER FUNCTIONS HELPS SET ARBITARY NUMBERS FOR OUR MOBILE SCREEN WIDTH AND HEIGHT
//* FOR WHEN WE NEED TO CREATE STYLES FOR DIFFERENT SCREEN, THINK OF IT AS A CSS MEDIA SCREEN
//* QUERY BUT FOR MOBILE SCREEN IN REACT NATIVE


const guidelineBaseWidth = () => {
    if(isSmall) {
        return 330
    }

    return 350
}

const horizontalScale = (size) => (width/guidelineBaseWidth()) * size;

const guidelineBaseHeight = () => {
    if(isSmall) {
        return 550
    } else if(width > 410) return 620

    return 680
}


const verticalScale = (size) => (height / guidelineBaseHeight()) * size

const guidelineBaseFonts = () => {
    if (width > 410) {
        return 430;
    }
    return 400
}

const fontScale = (size) => Math.round((width /guidelineBaseFonts()) * size)


export const color = {
    Black: '#000000',
    BlackRGB10: 'rgba(0,0,0,0.1)',
    Purple: '#7F27FF',
    OrangeRGBA0: 'rgba(255,85,36,0)',
    Grey: '#333333',
    DarkGrey: '#0b0b0b',
    Grey2: '#948F85',
    Yellow: '#E1CD17',
    White: '#FFFFFF',
    WhiteRGBA75: 'rgba(255,255,255,0.75)',
    WhiteRGBA50: 'rgba(255,255,255,0.50)',
    WhiteRGBA32: 'rgba(255,255,255,0.32)',
    WhiteRGBA15: 'rgba(255,255,255,0.15)',
    Black2: 'rgba(0,0,0, 0.8)',
    BlackRGBA50: 'rgba(0,0,0, 0.7)',
    Marine: '#1C2B20'
}

export const getFontFamily = (baseFont = 'Poppins', weight) => {
    switch (weight) {
        case '100':
            return `${baseFont}-Thin`
        case '200':
            return `${baseFont}-ExtraLight`
        case '300':
            return `${baseFont}-Light`
        case 'normal':
        case '400':
            return `${baseFont}-Regular`
        case '500':
            return `${baseFont}-Medium`
        case '600':
            return `${baseFont}-SemiBold`
        case 'bold':
        case '700':
            return `${baseFont}-Bold`
        case '800':
            return `${baseFont}-ExtraBold`
        case '900':
            return `${baseFont}-Black`
        default:
            return `${baseFont}-Regular`
    }
}

export const scaling = {verticalScale, horizontalScale, fontScale}

export default Theme = {color, scaling, getFontFamily}