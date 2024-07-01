import { StyleSheet, useColorScheme } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home, Search, User, Ticket} from "../screens";
import { Icon } from "../components";
import { color, scaling } from "../theme/themes";
import { Routes } from "./Routes";



const Tab = createBottomTabNavigator()
const {horizontalScale, verticalScale, fontScale} = scaling

const TabNavigation = () => {
    const dark = useColorScheme() === 'dark'
    return ( 
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
            tabBarStyle: {
                height: verticalScale(90),
                position: 'absolute',
                borderTopWidth: 0,
                elevation: 0,
                backgroundColor: dark ? color.Black : color.White
            }
        }}>
        <Tab.Screen options={{tabBarIcon: ({focused}) => (<Icon style={[styles.iconBody, {backgroundColor: focused ? color.Purple: 'transparent'}]} name="video" color={focused? color.White : dark ? color.White : color.Black} size={fontScale(30)}/>)}} component={Home} name={Routes.Home} />
        <Tab.Screen options={{tabBarIcon: ({focused}) => (<Icon style={[styles.iconBody, {backgroundColor: focused ? color.Purple: 'transparent'}]} name="search" color={focused ? color.White :dark ? color.White : color.Black} size={fontScale(30)}/>)}} component={Search} name={Routes.Search} />
        <Tab.Screen options={{tabBarIcon: ({focused}) => (<Icon style={[styles.iconBody, {backgroundColor: focused ? color.Purple: 'transparent'}]} name="ticket" color={focused ? color.White : dark ? color.White : color.Black} size={fontScale(30)}/>)}} component={Ticket} name={Routes.Ticket} />
        <Tab.Screen options={{tabBarIcon: ({focused}) => (<Icon style={[styles.iconBody, {backgroundColor: focused ? color.Purple: 'transparent'}]} name="user" color={focused ? color.White : dark ? color.White : color.Black} size={fontScale(30)}/>)}} component={User} name={Routes.User} />
    </Tab.Navigator>
)}

const styles = StyleSheet.create({
    iconBody: {
        borderRadius: 100,
        padding: horizontalScale(15),
    },
})


export default TabNavigation
