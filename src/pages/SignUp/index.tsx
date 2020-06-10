import React, { useRef, useState } from "react";
import { Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import Background from "../../components/Background";

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from "./styles";
import { signUpRequest } from "../../store/modules/users/actions";
import { ApplicationState } from "../../store/modules/rootReducer";

const SignUp: React.FC = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector((state: ApplicationState) => state.users);

  const nameRef = useRef({} as TextInput);
  const emailRef = useRef({} as TextInput);
  const passwordRef = useRef({} as TextInput);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
  }

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
            value={name}
            onChangeText={setName}
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

          <SubmitButton onPress={handleSubmit} loading={user.loading}>
            Cadastrar
          </SubmitButton>
          <SignLink onPress={() => navigate("SignIn")}>
            <SignLinkText>Voltar</SignLinkText>
          </SignLink>
        </Form>
      </Container>
    </Background>
  );
};

export default SignUp;
