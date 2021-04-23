import React from 'react';
import {Container, FormH1,Form, FormButton, FormContent, FormInput, FormLabel, FormWrap,Text, Icon} from "./SigninElements";

const SignIn = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <FormContent>
                    <Form action="#">
                        <FormH1>Login</FormH1>
                        <FormLabel htmlFor='for'>E-Mail</FormLabel>
                        <FormInput type='email' required/>
                        <FormLabel htmlFor='for'>Passwort</FormLabel>
                        <FormInput type='password' required/>
                        <FormButton type='submit'>Weiter</FormButton>
                        <Text>Passwort vergessen</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
        </>
    );
};

export default SignIn