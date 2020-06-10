import React, { useRef, useState } from "react";
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const passwordRef = useRef({} as TextInput);

  function handleSubmit() {
    dispatch(loginRequest(email, password));
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
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
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
