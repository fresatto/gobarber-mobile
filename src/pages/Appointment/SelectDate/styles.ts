import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { HoursProps } from ".";
import { FlatList } from "react-native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const HoursList = styled(
  FlatList as new () => FlatList<HoursProps>
).attrs({
  numColumns: 2,
})`
  padding: 0 20px;
`;

export const Hour = styled(RectButton)`
  background: #fff;
  border-radius: 4px;
  flex: 1;
  padding: 15px;
  margin: 10px;

  opacity: ${(props) => (props.enabled ? 1 : 0.6)};
`;

export const HourText = styled.Text`
  align-items: center;
  text-align: center;
  font-size: 14px;
  color: #333;
  font-weight: bold;
`;
