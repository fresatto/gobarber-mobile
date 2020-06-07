import React, { forwardRef } from "react";

import { Container, TInput } from "./styles";
import { TextInputProps, TextInput } from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons";

interface Props {
  style?: Object;
  icon?: string;
}

const Input: React.ForwardRefRenderFunction<
  TextInput,
  Props & TextInputProps
> = ({ style, icon, ...rest }, ref) => {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color="rgba(255,255,255,0.5)" />}
      <TInput {...rest} ref={ref} />
    </Container>
  );
};

export default forwardRef(Input);
