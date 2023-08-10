import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Header from "../Components/Header"
import SignupScreen from "../Screens/SignupScreen"
import LoginScreen from "../Screens/LoginScreen"

const Stack = createNativeStackNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Signup"
            screenOptions={() => ({
                header: () => {
                    return <Header/>
                }
            })}
        >
            <Stack.Screen name="Signup" component={SignupScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
        </Stack.Navigator>
    )
}

export default AuthStack