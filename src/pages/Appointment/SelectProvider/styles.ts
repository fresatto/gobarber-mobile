import styled from "styled-components/native";
import { FlatList } from "react-native";

import { ProviderProps } from "./";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
`;

export const ProviderList = styled(
  FlatList as new () => FlatList<ProviderProps>
).attrs({
  numColumns: 2,
})`
  margin-top: 60px;
  padding: 0 20px;
`;

export const Provider = styled(RectButton)`
  background: #fff;
  border-radius: 4px;
  padding: 10px;
  align-items: center;
  flex: 1;
  margin: 5px;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-bottom: 10px;
`;

export const Name = styled.Text`
  color: #333;
  font-weight: bold;
`;
