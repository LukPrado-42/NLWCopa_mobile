import {Center, Text, Icon } from 'native-base';
import { Fontisto } from '@expo/vector-icons';
import Logo from '../assets/logo.svg';

import { useAuth } from '../hooks/useAuth'

import { Button } from "../components/Button";
import { useEffect } from 'react';

export function SignIn() {
    const { signIn, isUserLoading, signInWithStorageToken } = useAuth();

    useEffect(() => {
        signInWithStorageToken()
    }, [])

    return(
    <Center flex={1} bgColor="gray.900" p={7}>
        <Logo width={212} height={40} />

        <Button 
            type="SECONDARY"
            title="Entrar com google"
            leftIcon={<Icon as ={Fontisto} name="google" color="white" size="md" />}
            onPress={ signIn }
            isLoading={ isUserLoading }
            _loading={{ _spinner: { color: "white" } }}

            mt={12}
        />

        <Text color="white" textAlign="center" mt={4}  >
            Não utilizamos nenhuma informação além {"\n"}
            do seu e-mail para criação de sua conta.
        </Text>
    </Center>
    )
};