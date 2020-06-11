import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import produce from "immer";

import { Container, Title, List } from "./styles";
import Background from "../../components/Background";
import Appointment, { AppointmentResponse } from "../../components/Appointment";
import api from "../../services/api";

const Dashboard: React.FC = () => {
  const [appointments, setAppointments] = useState<AppointmentResponse[]>([]);

  useEffect(() => {
    async function loadAppointments() {
      try {
        const { data } = await api.get("/appointments");

        setAppointments(data);
      } catch (err) {
        Alert.alert("Erro", "Não foi possível carregar os agendamentos");
      }
    }

    loadAppointments();
  }, []);
  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>

        <List
          data={appointments}
          keyExtractor={(item: any) => String(item.id)}
          renderItem={({ item }) => <Appointment data={item} />}
        />
      </Container>
    </Background>
  );
};

export default Dashboard;
