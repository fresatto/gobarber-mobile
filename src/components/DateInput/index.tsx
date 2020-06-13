import React, { useState, useMemo } from "react";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { format } from "date-fns";
import pt from "date-fns/locale/pt";
import DateTimePicker from "@react-native-community/datetimepicker";

import { Container, DateButton, DateText } from "./styles";

interface DateInputProps {
  onChange: (date: Date) => void;
  date: Date;
}

const DateInput: React.FC<DateInputProps> = ({ date, onChange }) => {
  const [opened, setOpened] = useState(false);

  const dateFormatted = useMemo(() => {
    return format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt });
  }, [date]);

  return (
    <Container>
      <DateButton onPress={() => setOpened(true)}>
        <Icon name="event" color="#fff" size={20} />
        <DateText>{dateFormatted}</DateText>
      </DateButton>

      {opened && (
        <DateTimePicker
          date={date}
          minimumDate={new Date()}
          onChange={(e, selectedDate) => {
            if (selectedDate) {
              setOpened(false);
              onChange(selectedDate);
            }
          }}
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
        />
      )}
    </Container>
  );
};

export default DateInput;
