import React, { useRef, useState } from "react";
import { TextInput, Text } from "react-native";

import Background from "../../components/Background";
import {
  Container,
  Title,
  Form,
  FormInput,
  SubmitButton,
  Separator,
} from "./styles";
import { ApplicationState } from "../../store/modules/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import { updateUserRequest } from "../../store/modules/user/actions";

const Profile: React.FC = () => {
  const dispatch = useDispatch();

  const nameRef = useRef({} as TextInput);
  const emailRef = useRef({} as TextInput);
  const oldPasswordRef = useRef({} as TextInput);
  const passwordRef = useRef({} as TextInput);
  const confirmPasswordRef = useRef({} as TextInput);

  const { profile, loading } = useSelector(
    (state: ApplicationState) => state.user
  );

  if (!profile)
    return (
      <Background>
        <Text>Não foi possivel carregar o seu perfil</Text>
      </Background>
    );

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit() {
    dispatch(
      updateUserRequest(name, email, password, oldPassword, confirmPassword)
    );
  }
  return (
    <Background>
      <Container>
        <Title>Meu perfil</Title>

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

          <Separator />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha antiga"
            ref={oldPasswordRef}
            returnKeyType="send"
            onSubmitEditing={passwordRef.current.focus}
            value={oldPassword}
            onChangeText={setOldPassword}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={confirmPasswordRef.current.focus}
            value={password}
            onChangeText={setPassword}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Confirmação de senha"
            ref={confirmPasswordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <SubmitButton onPress={handleSubmit} loading={loading}>
            Atualizar perfil
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
};

export default Profile;
