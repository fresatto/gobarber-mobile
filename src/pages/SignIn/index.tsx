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
import { useDispatch } from "react-redux";
import { loginRequest } from "../../store/modules/users/actions";

const SignIn: React.FC = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const passwordRef = useRef({} as TextInput);

  function handleSubmit() {
    dispatch(loginRequest("gabrielfresatto@gmail.com", "12345678"));
  }

  return (
    <Background>
      <Container>
        <Image source={require("../../assets/logo.png")} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite o seu e-mail"
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

          <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>
          <SignLink onPress={() => navigate("SignUp")}>
            <SignLinkText>Criar conta gratuita</SignLinkText>
          </SignLink>
        </Form>
      </Container>
    </Background>
  );
};

export default SignIn;
