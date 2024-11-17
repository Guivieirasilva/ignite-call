import { useEffect, useState } from "react";
import { Calendar } from "../../../../../components/Calendar";
import {
  Container,
  TimePicker,
  TimePickerHeader,
  TimePickerItem,
  TimePickerList,
} from "./styles";
import dayjs from "dayjs";
import { api } from "../../../../../lib/axios";
import { useRouter } from "next/router";

interface Availability {
  possibleTimes: number[];
  availableTimes: number[];
}

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [availability, setAvailability] = useState<Availability | null>(null);
  const router = useRouter();
  const username = String(router.query.username);

  const isDateSelected = !!selectedDate;

  const weekDay = selectedDate ? dayjs(selectedDate).format("dddd") : null;
  const describedDate = selectedDate
    ? dayjs(selectedDate).format("DD [de] MMMM")
    : null;

  const dateFormatResquest = dayjs(selectedDate).format("YYYY-MM-DD");

  async function getHoursAvailability() {
    if (!selectedDate) {
      return;
    }
    try {
      const response = await api.get(`/users/${username}/availability`, {
        params: {
          date: dateFormatResquest,
        },
      });
      setAvailability(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getHoursAvailability();
  }, [selectedDate, username]);

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />

      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>
            {weekDay} <span>{describedDate}</span>
          </TimePickerHeader>
          <TimePickerList>
            {availability?.possibleTimes.map((hour) => {
              return (
                <TimePickerItem
                  key={hour}
                  disabled={!availability.availableTimes.includes(hour)}
                >
                  {" "}
                  {String(hour).padStart(2, "0")}:00h{" "}
                </TimePickerItem>
              );
            })}
          </TimePickerList>
        </TimePicker>
      )}
    </Container>
  );
}
