import { Pressable, StyleSheet, Text, View } from "react-native"
import React, { useEffect, useState } from "react"
import InputForm from "../Components/InputForm"
import SubmitButton from "../Components/SubmitButton"
import { colors } from "../Global/Colors"
import { useSignUpMutation } from "../Services/authServices"
import { useDispatch } from "react-redux"
import { setUser } from "../Features/User/userSlice"
import { isAtLeastSixCharacters, isValidEmail } from "../Validations/auth"
import { insertSession } from "../SQLite"
import { Toast } from "react-native-toast-message/lib/src/Toast"

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [errorMail, setErrorMail] = useState("")
    const [password, setPassword] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("")

    const [triggerSignUp, result] = useSignUpMutation()
    const dispatch = useDispatch()
    
    useEffect(() => {
        (async ()=> {
            try{
                if(result.isSuccess){
                    const response = await insertSession({
                        email: result.data.email,
                        localId: result.data.localId,
                        idToken: result.data.idToken
                    })
                }

                dispatch(
                    setUser({
                        email: result.data.email,
                        idToken: result.data.idToken,
                        localId: result.data.localId,
                        profileImage: ""
                    })
                )
            } catch(error){
                Toast.show({
                    type: "error",
                    text1: "Hubo un error",
                    autoHide: true,
                    visibilityTime: 3000
                })
            }
        })
    },[result])

    const onSubmit = () => {
        try {

            const isAnEmail = isValidEmail(email)
            
            const isCorrectPassword = isAtLeastSixCharacters(isCorrectPassword)

            const isRepeatedPasswordCorrect = password === confirmPassword

            if (isAnEmail && isCorrectPassword && isRepeatedPasswordCorrect){
                const request = {
                    email,
                    password, //Minimo 6 caracteres o da error
                    returnSecureToken: true
                }
                triggerSignUp(request)
            }
            if(!isAnEmail){setErrorMail("Email no valido")}else{setErrorMail("")}
            if(!isCorrectPassword){setErrorPassword("Contraseña no valida, minimo 6 caracteres")}else{setErrorPassword("")}
            if(!isRepeatedPasswordCorrect){setErrorConfirmPassword("No coinciden las contraseñas")}else{setErrorConfirmPassword("")}
            
            

        } catch (err) {
            Toast.show({
                type: "error",
                text1: "Hubo un error",
                autoHide: true,
                visibilityTime: 3000
            })
        }
    };

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Toast/>
                <Text style={styles.title}>Registrate</Text>
                <InputForm label={"email"} onChange={setEmail} error={errorMail} />
                <InputForm
                    label={"contraseña"}
                    onChange={setPassword}
                    error={errorPassword}
                    isSecure={true}
                />
                <InputForm
                    label={"confirmar contraseña"}
                    onChange={setconfirmPassword}
                    error={errorConfirmPassword}
                    isSecure={true}
                />
                <SubmitButton onPress={onSubmit} title="Send" />
                <Text style={styles.sub}>Tienes una cuenta?</Text>
                <Pressable onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.subLink}>Inicia Sesion</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default SignupScreen;

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.clearViolet
    },
    container: {
        width: "90%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
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
});