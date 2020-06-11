import React, { useMemo } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { parseISO, formatRelative } from "date-fns";
import pt from "date-fns/locale/pt";

import { Container, Left, Avatar, Info, Name, Time } from "./styles";

export interface AppointmentResponse {
  past: boolean;
  id: number;
  date: string;
  canceled_at: string | null;
  cancelable: boolean;
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
  const avatarUrl = data.provider.avatar
    ? data.provider.avatar.url.replace("localhost", "192.168.0.36")
    : `https://api.adorable.io/avatar/50/${data.provider.name}.png`;

  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.date), new Date(), {
      locale: pt,
    });
  }, [data.date]);

  return (
    <Container past={data.past}>
      <Left>
        <Avatar
          source={{
            uri: avatarUrl,
          }}
        />
        <Info>
          <Name>{data.provider.name}</Name>
          <Time>{dateParsed}</Time>
        </Info>
      </Left>

      {data.cancelable && (
        <TouchableOpacity onPress={() => {}}>
          <Icon name="event-busy" size={20} color="#f64c75" />
        </TouchableOpacity>
      )}
    </Container>
  );
};

export default Appointment;
