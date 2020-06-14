import React, { useMemo } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { formatRelative, parseISO } from "date-fns";
import pt from "date-fns/locale/pt";

import Background from "../../../components/Background";
import { RootStackParamList } from "../../../routes";
import { Container, Avatar, Name, Time, SubmitButton } from "./styles";
import api from "../../../services/api";

type NavigationProp = StackNavigationProp<
  RootStackParamList,
  "ConfirmAppointment"
>;

type RouteConfirmProp = RouteProp<RootStackParamList, "ConfirmAppointment">;

type Props = {
  navigation: NavigationProp;
  route: RouteConfirmProp;
};

const ConfirmAppointment: React.FC<Props> = ({ navigation, route }) => {
  const { provider, time } = route.params;

  const dateFormatted = useMemo(() => {
    return formatRelative(parseISO(time), new Date(), { locale: pt });
  }, [time]);

  async function handleAddAppointment() {
    await api.post(`appointments`, {
      provider_id: provider.id,
      date: time,
    });

    navigation.reset({
      index: 0,
      routes: [{ name: "Dashboard" }],
    });
  }

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: provider.avatar
              ? provider.avatar.url.replace("localhost", "192.168.0.36")
              : `https://api.adorable.io/avatar/50/${provider.name}.png`,
          }}
        />

        <Name>{provider.name}</Name>
        <Time>{dateFormatted}</Time>
        <SubmitButton onPress={handleAddAppointment}>Confirmar</SubmitButton>
      </Container>
    </Background>
  );
};

export default ConfirmAppointment;
