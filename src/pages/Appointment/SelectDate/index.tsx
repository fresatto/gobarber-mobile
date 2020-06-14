import React, { useState, useEffect } from "react";
import Background from "../../../components/Background";
import DateInput from "../../../components/DateInput";
import { Container } from "./styles";
import { Text } from "react-native";
import api from "../../../services/api";
import { useNavigation, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../routes";

type NavigationProp = StackNavigationProp<RootStackParamList, "SelectDate">;

type RouteSelectDateProp = RouteProp<RootStackParamList, "SelectDate">;

type Props = {
  navigation: NavigationProp;
  route: RouteSelectDateProp;
};

const SelectDate: React.FC<Props> = ({ navigation, route }) => {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([]);

  const { provider } = route.params;

  useEffect(() => {
    async function getHoursAvailable() {
      try {
        const { data } = await api.get(`providers/${provider.id}/available`, {
          params: {
            date: date.getTime(),
          },
        });
      } catch (err) {}
    }

    getHoursAvailable();
  }, [date]);

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />
      </Container>
    </Background>
  );
};

export default SelectDate;
