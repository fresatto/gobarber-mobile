import styled from "styled-components/native";
import { FlatList } from "react-native";
import { AppointmentResponse } from "../../components/Appointment";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  font-weight: bold;
  color: #fff;
  font-size: 16px;
  margin-top: 20px;
  text-align: center;
`;

export const List = styled(
  FlatList as new () => FlatList<AppointmentResponse>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
})``;
