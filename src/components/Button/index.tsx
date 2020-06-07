import React from "react";
import { ActivityIndicator } from "react-native";
import { RectButtonProperties } from "react-native-gesture-handler";

import { Container, Text } from "./styles";

interface Props {
  loading?: boolean;
}

const Button: React.FC<Props & RectButtonProperties> = ({
  children,
  loading,
  ...rest
}) => {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
};

export default Button;
