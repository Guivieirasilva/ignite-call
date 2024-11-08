import { Calendar } from "../../../../../components/Calendar";
import {
  Container,
  TimePicker,
  TimePickerHeader,
  TimePickerItem,
  TimePickerList,
} from "./styles";

export function CalendarStep() {
  const isDateSelected = true;

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar />

      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>
            Terça-Feira <span>03 de Novembro</span>
          </TimePickerHeader>
          <TimePickerList>
            <TimePickerItem>01:00</TimePickerItem>
            <TimePickerItem>02:00</TimePickerItem>
            <TimePickerItem>03:00</TimePickerItem>
            <TimePickerItem>04:00</TimePickerItem>
            <TimePickerItem>05:00</TimePickerItem>
            <TimePickerItem>06:00</TimePickerItem>
            <TimePickerItem>07:00</TimePickerItem>
            <TimePickerItem>08:00</TimePickerItem>
            <TimePickerItem>09:00</TimePickerItem>
            <TimePickerItem>10:00</TimePickerItem>
            <TimePickerItem>11:00</TimePickerItem>
            <TimePickerItem>12:00</TimePickerItem>
          </TimePickerList>
        </TimePicker>
      )}
    </Container>
  );
}
