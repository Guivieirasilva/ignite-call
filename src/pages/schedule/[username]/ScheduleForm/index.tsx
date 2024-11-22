import { useState } from "react";
import { CalendarStep } from "./CalendarStep";
import { ConfirmStep } from "./ConfirmStep";

export function ScheduleForm ( ) {
  const [selectDateTime, setSelectDateTime] = useState<Date | null>(null)

  function handleClearSelectedDateTime() {
    setSelectDateTime(null)
  }

  if(selectDateTime){
    return <ConfirmStep onCancelConfirmation={handleClearSelectedDateTime} schedulingDate={selectDateTime} />;
  }

  return(
    <CalendarStep onSelectDateTime={setSelectDateTime} />
  )
}