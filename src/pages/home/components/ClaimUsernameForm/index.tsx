import { Button, Text, TextInput } from "@ignite-ui/react";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { Form, FormAnnotation } from "./styles";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const clainUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: "O usuário precisa ter pelo menos 3 caracteres" })
    .regex(/^([a-z\\-]+)$/i, {
      message: "O usuário precisa ter apenas letras e hifens",
    })
    .transform((username) => username.toLocaleLowerCase()),
});

type ClainUsernameFormData = z.infer<typeof clainUsernameFormSchema>;

export function ClaimUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClainUsernameFormData>({
    resolver: zodResolver(clainUsernameFormSchema),
  });

  function handleClainUsername(data: ClainUsernameFormData) {
    console.log(data);
  }

  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleClainUsername)}>
        <TextInput
          size="sm"
          prefix="ignite.com/ "
          placeholder="your-user"
          {...register("username")}
        />
        <Button size="sm" type="submit">
          Reservar
          <ArrowRight />
        </Button>
      </Form>
      <FormAnnotation>
        <Text size="sm">
          {errors.username
            ? errors.username.message
            : "Digite o nome do usuário desejado"}
        </Text>
      </FormAnnotation>
    </>
  );
}
