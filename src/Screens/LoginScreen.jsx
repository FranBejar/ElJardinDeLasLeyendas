import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import InputForm from '../Components/InputForm'
import SubmitButton from '../Components/SubmitButton'
import { colors } from '../Global/Colors'
import { useSignInMutation } from '../Services/authServices'
import { isAtLeastSixCharacters, isValidEmail } from '../Validations/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../Features/User/userSlice'
import { insertSession } from '../SQLite'
import { Toast } from 'react-native-toast-message/lib/src/Toast'


const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMail, setErrorMail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')

    const dispatch = useDispatch()

    const [triggerSignIn, resultSignIn] = useSignInMutation()

    const onSubmit = () => {

        const isAnEmail = isValidEmail(email)
        const isCorrectPassword = isAtLeastSixCharacters(isCorrectPassword)

        if(isAnEmail && isCorrectPassword){
            triggerSignIn({
                email,
                password,
                returnSecureToken: true
            })
        }

        if(!isAnEmail){setErrorMail("Email no valido")}else{setErrorMail("")}
        if(!isCorrectPassword){setErrorPassword("Contraseña no valida, minimo 6 caracteres")}else{setErrorPassword("")}
    }

    useEffect(()=> {
        (async ()=> {
            try {
                if(resultSignIn.isSuccess) {
                    const response = await insertSession({
                        email: resultSignIn.data.email,
                        localId: resultSignIn.data.localId,
                        idToken: resultSignIn.data.idToken
                    })

                    dispatch(setUser({
                        email: resultSignIn.data.email,
                        idToken: resultSignIn.data.idToken,
                        localId: resultSignIn.data.localId,
                        profileImage: "",
                        location: {
                            latitude: "",
                            longitude: "",
                        }
                    }))
                }
            } catch (error) {
                Toast.show({
                    type: "error",
                    text1: "Hubo un error",
                    autoHide: true,
                    visibilityTime: 3000
                  })
            }
        })()
    }, [resultSignIn])

  return (
    <View style={styles.main}>
        <View style={styles.container}>
            <Text style={styles.title}>Inicia Sesion</Text>
            <Toast/>
            <InputForm 
                label={"email"}
                onChange={(email) => setEmail(email)}
                error={errorMail}
            />
            <InputForm 
                label={"contraseña"}
                onChange={(password) => setPassword(password)}
                error={errorPassword}
                isSecure={true}
            />
            <SubmitButton 
                onPress={onSubmit}
                title = "Send"
            />
            <Text style={styles.sub}>No tienes una cuenta?</Text>
            <Pressable onPress={()=> navigation.navigate('Signup')}>
                <Text style={styles.subLink}>Registrate</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.clearViolet
    },
    container: {
        width: '90%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: colors.violet,
        backgroundColor: colors.borderViolet,
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 25,
        fontFamily: 'DancingScript-Bold',
        color: 'white'
    },
    sub: {
        fontSize: 18,
        color: 'black',
        fontFamily: 'DancingScript-Bold',
        color: 'white'
    },
    subLink: {
        fontSize: 20,
        color: 'lightblue',
        fontFamily: 'DancingScript-Bold'
    }
})