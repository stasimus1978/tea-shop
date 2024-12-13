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

export const StoreSchema = z.object({
  title: z.string().nonempty("Название магазина не может быть пустым"),
  description: z.string(),
}) satisfies z.ZodType<Prisma.StoreCreateInput>;

export type StoreDto = z.infer<typeof StoreSchema>;
