import { Prisma } from "@prisma/client";
import { z } from "zod";

export const AuthSchema = z.object({
  name: z.string().optional(),
  email: z
    .string({
      required_error: "Почта обязательна для заполнения",
    })
    .email("Некорректный формат электронной почты"),
  password: z
    .string({
      required_error: "Пароль обязателен для заполнения",
    })
    .min(6, {
      message: "Пароль должен содержать минимум 6 символов",
    }),
}) satisfies z.ZodType<Prisma.UserCreateInput>;

export type AuthDto = z.infer<typeof AuthSchema>;

export type FormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;
