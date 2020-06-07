import React from "react";
import { ActivityIndicator } from "react-native";

import { Container, Text } from "./styles";

interface Props {
  loading?: boolean;
}

const Button: React.FC<Props> = ({ children, loading }) => {
  return (
    <Container>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
};

export default Button;
