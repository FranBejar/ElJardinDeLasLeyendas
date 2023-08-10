import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Header from "../Components/Header"
import MyProfile from "../Screens/MyProfile"
import ImageSelector from "../Screens/ImageSelector"

const Stack = createNativeStackNavigator()

const MyProfileStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="My Profile"
            screenOptions={ () => ({
                header: () => {
                    return <Header/>
                }
            })}
        >
            <Stack.Screen name="My Profile" component={MyProfile}/>
            <Stack.Screen name="Image Selector" component={ImageSelector}/>
        </Stack.Navigator>
    )
}

export default MyProfileStack;