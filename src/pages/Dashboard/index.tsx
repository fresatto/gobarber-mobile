import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { Container, Title, List } from "./styles";
import Background from "../../components/Background";
import Appointment, { AppointmentResponse } from "../../components/Appointment";
import api from "../../services/api";

const Dashboard: React.FC = () => {
  const [appointments, setAppointments] = useState<AppointmentResponse[]>([]);
  let focused = useIsFocused();
  async function loadAppointments() {
    try {
      const { data } = await api.get("/appointments");

      setAppointments(data);
    } catch (err) {
      Alert.alert("Erro", "Não foi possível carregar os agendamentos");
    }
  }
  useEffect(() => {
    if (focused) {
      loadAppointments();
    }
  }, [focused]);

  async function handleCancel(id: number) {
    const response = await api.delete(`appointments/${id}`);

    setAppointments(
      appointments.map((appointment) =>
        appointment.id === id
          ? {
              ...appointment,
              canceled_at: response.data.canceled_at,
            }
          : appointment
      )
    );
  }

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>

        <List
          data={appointments}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Appointment data={item} onCancel={() => handleCancel(item.id)} />
          )}
        />
      </Container>
    </Background>
  );
};

export default Dashboard;
