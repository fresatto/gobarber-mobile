import React, { useEffect, useState } from "react";
import Background from "../../../components/Background";
import { Alert, Text } from "react-native";
import api from "../../../services/api";
import { Container, ProviderList } from "./styles";

export interface ProviderProps {
  id: number;
  name: string;
  email: string;
  avatar: {
    url: string;
  };
}

const SelectProvider: React.FC = () => {
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
          renderItem={({ item: provider }) => <Text>{provider.name}</Text>}
        />
      </Container>
    </Background>
  );
};

export default SelectProvider;
