import styled from "styled-components/native";
import { FlatList } from "react-native";

import { ProviderProps } from "./";

export const Container = styled.View`
  flex: 1;
`;

export const ProviderList = styled(
  FlatList as new () => FlatList<ProviderProps>
)`
  margin-top: 60px;
  padding: 0 20px;
`;
