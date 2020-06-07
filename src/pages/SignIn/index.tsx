import React from "react";
import { Text } from "react-native";
import Background from "../../components/Background";
import Input from "../../components/Input";

const SignIn: React.FC = () => {
  return (
    <Background>
      <Text>SignIn</Text>

      <Input placeholder="Insira seu nome" icon="call" />
    </Background>
  );
};

export default SignIn;
