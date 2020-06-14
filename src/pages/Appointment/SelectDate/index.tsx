import React, { useState, useEffect } from "react";
import { Alert, ActivityIndicator } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

import { Container, HoursList, Hour, HourText } from "./styles";
import api from "../../../services/api";
import { RootStackParamList } from "../../../routes";
import DateInput from "../../../components/DateInput";
import Background from "../../../components/Background";

type NavigationProp = StackNavigationProp<RootStackParamList, "SelectDate">;

type RouteSelectDateProp = RouteProp<RootStackParamList, "SelectDate">;

type Props = {
  navigation: NavigationProp;
  route: RouteSelectDateProp;
};

export type HoursProps = {
  time: string;
  value: string;
  available: boolean;
};

const SelectDate: React.FC<Props> = ({ navigation, route }) => {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState<HoursProps[]>([]);
  const [loading, setLoading] = useState(false);

  const { provider } = route.params;

  useEffect(() => {
    async function getHoursAvailable() {
      try {
        setLoading(true);
        const { data } = await api.get(`providers/${provider.id}/available`, {
          params: {
            date: date.getTime(),
          },
        });

        setHours(data);
        setLoading(false);
      } catch (err) {
        Alert.alert(
          "Erro",
          "Não foi possível carregar os horários, tente novamente."
        );
        setLoading(false);
      }
    }

    getHoursAvailable();
  }, [date]);

  function handleSelectHour(time: number) {
    navigation.navigate("ConfirmAppointment", {
      provider,
      time,
    });
  }

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />

        {loading ? (
          <ActivityIndicator size={30} color="#fff" />
        ) : (
          <HoursList
            data={hours}
            keyExtractor={(item) => String(item.time)}
            renderItem={({ item }) => (
              <Hour
                enabled={item.available}
                onPress={() => handleSelectHour(item.value)}
              >
                <HourText>{item.time}</HourText>
              </Hour>
            )}
          />
        )}
      </Container>
    </Background>
  );
};

export default SelectDate;
