import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "./Routes";
import {  Details, Seats} from "../screens";
import TabNavigation from "./TabNavigation";

const Stack = createNativeStackNavigator()

export const MainNavigation = () => {
    return (
        <Stack.Navigator screenOptions={options}>
            <Stack.Screen options={{animation: 'default'}} component={TabNavigation} name={Routes.Tab} />
            <Stack.Screen options={{animation: 'slide_from_right'}} component={Details} name={Routes.Details} />
            <Stack.Screen options={screenOptions} component={Seats} name={Routes.Seats} />
    </Stack.Navigator>
)}


const options = {
    header: ()=> null,
    headerShown: false,
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    animation: 'slide_from_bottom',
}

const screenOptions = {
    animation: 'slide_from_bottom'
}