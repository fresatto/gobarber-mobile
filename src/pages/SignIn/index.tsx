import React from "react";
import { Text } from "react-native";
import Background from "../../components/Background";

import Input from "../../components/Input";
import Button from "../../components/Button";

const SignIn: React.FC = () => {
  return (
    <Background>
      <Text>SignIn</Text>

      <Input placeholder="Insira seu nome" icon="call" />

      <Button>Entrar</Button>
      <Button loading={true}>Entrar</Button>
    </Background>
  );
};

export default SignIn;
