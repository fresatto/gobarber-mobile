import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons as Icon } from "@expo/vector-icons";

import { Container, Left, Avatar, Info, Name, Time } from "./styles";

export interface AppointmentResponse {
  past: boolean;
  id: number;
  date: string;
  canceled_at: string | null;
  provider: {
    id: number;
    name: string;
    avatar: {
      url: string;
    };
  };
}

interface AppointmentProps {
  data: AppointmentResponse;
}

const Appointment: React.FC<AppointmentProps> = ({ data }) => {
  console.log(data);
  return (
    <Container>
      <Left>
        <Avatar
          source={{
            uri: data.provider.avatar
              ? data.provider.avatar.url
              : `https://api.adorable.io/avatar/50/${data.provider.name}.png`,
          }}
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
