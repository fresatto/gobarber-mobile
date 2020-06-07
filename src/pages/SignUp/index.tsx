import React, { useRef } from "react";
import { Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Background from "../../components/Background";

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from "./styles";

const SignUp: React.FC = () => {
  const { navigate } = useNavigation();

  const nameRef = useRef({} as TextInput);
  const emailRef = useRef({} as TextInput);
  const passwordRef = useRef({} as TextInput);

  function handleSubmit() {}

  return (
    <Background>
      <Container>
        <Image source={require("../../assets/logo.png")} />
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            ref={nameRef}
            returnKeyType="next"
            onSubmitEditing={emailRef.current.focus}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite o seu e-mail"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={passwordRef.current.focus}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton onPress={handleSubmit}>Cadastrar</SubmitButton>
          <SignLink onPress={() => navigate("SignIn")}>
            <SignLinkText>Voltar</SignLinkText>
          </SignLink>
        </Form>
      </Container>
    </Background>
  );
};

export default SignUp;
