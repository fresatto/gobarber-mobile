import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons as Icon } from "@expo/vector-icons";

import { Container, Left, Avatar, Info, Name, Time } from "./styles";

const Appointment: React.FC = () => {
  return (
    <Container>
      <Left>
        <Avatar
          source={{ uri: "https://api.adorable.io/avatar/50/teste.png" }}
        />
        <Info>
          <Name>Gabriel Fresatto</Name>
          <Time>em 3 horas</Time>
        </Info>
      </Left>

      <TouchableOpacity onPress={() => {}}>
        <Icon name="event-busy" size={20} color="#f64c75" />
      </TouchableOpacity>
    </Container>
  );
};

export default Appointment;
