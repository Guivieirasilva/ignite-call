import { Button, Heading, MultiStep, Text } from "@ignite-ui/react";
import { Container, Form, Header } from "../styles";
import { z } from "zod";
import { ArrowRight } from "phosphor-react";
import { ConnectBox, ConnectItem } from "./styles";

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: "O usuário precisa ter pelo menos 3 caracteres" })
    .regex(/^([a-z\\-]+)$/i, {
      message: "O usuário precisa ter apenas letras e hifens",
    })
    .transform((username) => username.toLocaleLowerCase()),
  name: z
    .string()
    .min(3, { message: "O nome precisa ter pelo menos 3 caracteres" }),
});

type RegisterFormData = z.infer<typeof registerFormSchema>;

export default function Register() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>
      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          <Button size="sm" variant="secondary">
            Conectar
            <ArrowRight />
          </Button>
        </ConnectItem>
        <Button>
          Próximo passo
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  );
}
