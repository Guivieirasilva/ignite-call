import {
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from "@ignite-ui/react";
import { Container, Header } from "../styles";
import {
  IntervalBox,
  IntervalDay,
  IntervalInput,
  IntervalItem,
  IntervalsContainer,
} from "./style";
import { ArrowRight } from "phosphor-react";
import { z } from "zod";
import { useFieldArray, useForm } from "react-hook-form";
import { getWeekDays } from "../../../utils/getWeekDays";

// interface timeIntervalFormSchema = z.object({

// })

// type timeIntervalFormData = z.infer<typeof timeIntervalFormSchema>

export default function TimeIntervals() {
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      intervals: [
        { weekDay: 0, enable: false, startTime: "08:00", endTime: "18:00" },
        { weekDay: 1, enable: true, startTime: "08:00", endTime: "18:00" },
        { weekDay: 2, enable: true, startTime: "08:00", endTime: "18:00" },
        { weekDay: 3, enable: true, startTime: "08:00", endTime: "18:00" },
        { weekDay: 4, enable: true, startTime: "08:00", endTime: "18:00" },
        { weekDay: 5, enable: true, startTime: "08:00", endTime: "18:00" },
        { weekDay: 6, enable: false, startTime: "08:00", endTime: "18:00" },
      ],
    },
  });

  const { fields } = useFieldArray({
    control,
    name: "intervals",
  });

  const weekDays = getWeekDays();

  async function handleSetTImeIntervals() {}

  return (
    <Container>
      <Header>
        <Heading as="strong">Quase lá</Heading>
        <Text>
          Defina o intervalo de horários que você está disponível em cada dia da
          semana.
        </Text>

        <MultiStep size={4} currentStep={3} />
      </Header>
      <IntervalBox as="form" onSubmit={handleSubmit(handleSetTImeIntervals)}>
        <IntervalsContainer>
          {fields.map((field, idx) => {
            return (
              <IntervalItem key={field.id}>
                <IntervalDay>
                  <Checkbox  />
                  <Text>{weekDays[field.weekDay]}</Text>{" "}
                </IntervalDay>
                <IntervalInput>
                  <TextInput
                    type="time"
                    size="sm"
                    step={60}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    crossOrigin={undefined}
                    {...register(`intervals.${idx}.startTime`)}
                  />
                  <TextInput
                    type="time"
                    size="sm"
                    step={60}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    crossOrigin={undefined}
                    {...register(`intervals.${idx}.endTime`)}
                  />
                </IntervalInput>
              </IntervalItem>
            );
          })}
        </IntervalsContainer>
        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </IntervalBox>
    </Container>
  );
}
