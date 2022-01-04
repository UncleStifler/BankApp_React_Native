import React, {FC, useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {styleCenter} from "../../layouts/Layout";
import tw from 'tailwind-rn'
import {useAuth} from "../../../hooks/useAuth";
import Loader from "../../ui/Loader";
import Field from "../../ui/Field";
import ButtonConfirm from "../../ui/ButtonConfirm";

interface IData {
    email: string
    password: string
}

const Auth: FC = () => {
    const {isLoading} = useAuth()
    const [data, setData] = useState<IData>({} as IData)
    const [isReg, setIsReg] = useState(false)

    const authHandler = () => {

    }

    return (
        <View style={styleCenter}>
            <View style={tw('mx-5 justify-center items-center h-full')}>
                <View style={tw('w-9/12')}>
                    <Text style={tw('text-center text-gray-800 text-2xl font-bold mb-2')}>
                        {isReg ? 'Sing Up' : 'Sing In'}
                    </Text>
                    {isLoading ? <Loader/> : <></>}
                    <Field value={data.email} placeholder='Enter email'
                           onChange={value => setData({...data, email: value})}/>
                    <Field value={data.password} placeholder='Enter password'
                           isSecure={true}
                           onChange={value => setData({...data, password: value})}/>
                    <ButtonConfirm onPress={authHandler} title={"Let's go"}/>
                    <Pressable onPress={() => setIsReg(!isReg)}>
                        <Text
                            style={tw('text-gray-800 opacity-30 text-right text-sm')}>{isReg ? 'Login' : 'Register'}
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
};

export default Auth

