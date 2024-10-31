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

export default function TimeIntervals() {
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
      <IntervalBox as="form">
        <IntervalsContainer>
          <IntervalItem>
            <IntervalDay>
              <Checkbox /> <Text>Segunda-feira</Text>{" "}
            </IntervalDay>
            <IntervalInput>
              <TextInput
                type="time"
                size="sm"
                step={60}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
              <TextInput
                type="time"
                size="sm"
                step={60}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </IntervalInput>
          </IntervalItem>
          <IntervalItem>
            <IntervalDay>
              <Checkbox /> <Text>Terça-feira</Text>{" "}
            </IntervalDay>
            <IntervalInput>
              <TextInput
                type="time"
                size="sm"
                step={60}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
              <TextInput
                type="time"
                size="sm"
                step={60}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </IntervalInput>
          </IntervalItem>
          <IntervalItem>
            <IntervalDay>
              <Checkbox /> <Text>Quarta-feira</Text>{" "}
            </IntervalDay>
            <IntervalInput>
              <TextInput
                type="time"
                size="sm"
                step={60}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
              <TextInput
                type="time"
                size="sm"
                step={60}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </IntervalInput>
          </IntervalItem>
        </IntervalsContainer>
        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </IntervalBox>
    </Container>
  );
}
