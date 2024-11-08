import { CaretLeft, CaretRight } from "phosphor-react";
import {
  CalendarActions,
  CalendarBody,
  CalendarContainer,
  CalendarDay,
  CalendarHeader,
  CalendarTitle,
} from "./styles";
import { getWeekDays } from "../../utils/get-week-days";

export function Calendar() {
  const shortWeekDays = getWeekDays({ short: true });

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          Novembro <span>2024</span>
        </CalendarTitle>
        <CalendarActions>
          <button>
            <CaretLeft />
          </button>
          <button>
            {" "}
            <CaretRight />{" "}
          </button>
        </CalendarActions>
      </CalendarHeader>
      <CalendarBody>
        <thead></thead>
        <tr>
          {shortWeekDays.map((weekday) => (
            <th key={weekday}>{weekday}.</th>
          ))}
        </tr>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <CalendarDay disabled >1</CalendarDay>
            </td>
            <td>
              <CalendarDay>2</CalendarDay>
            </td>
            <td>
              <CalendarDay>3</CalendarDay>
            </td>
          </tr>
        </tbody>
      </CalendarBody>
    </CalendarContainer>
  );
}
