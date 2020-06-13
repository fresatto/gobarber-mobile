import React, { useEffect, useState } from "react";
import Background from "../../../components/Background";
import { Alert, Text } from "react-native";
import api from "../../../services/api";
import { Container, ProviderList, Provider, Avatar, Name } from "./styles";
import { useNavigation } from "@react-navigation/native";

export interface ProviderProps {
  id: number;
  name: string;
  email: string;
  avatar: {
    url: string;
  };
}

const SelectProvider: React.FC = () => {
  const navigation = useNavigation();
  const [providers, setProviders] = useState<ProviderProps[]>([]);

  useEffect(() => {
    async function getProviders() {
      try {
        const { data } = await api.get("/providers");
        setProviders(data);
      } catch (err) {
        Alert.alert(
          "Erro",
          "Não foi possível carregar os prestadores, tente novamente mais tarde"
        );
      }
    }
    getProviders();
  }, []);

  return (
    <Background>
      <Container>
        <ProviderList
          data={providers}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item: provider }) => (
            <Provider
              onPress={() => navigation.navigate("SelectDate", { provider })}
            >
              <Avatar
                source={{
                  uri: provider.avatar
                    ? provider.avatar.url.replace("localhost", "192.168.0.36")
                    : `https://api.adorable.io/avatar/50/${provider.name}.png`,
                }}
              />
              <Name>{provider.name}</Name>
            </Provider>
          )}
        />
      </Container>
    </Background>
  );
};

export default SelectProvider;
