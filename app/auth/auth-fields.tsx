import type { UseFormReturn } from "react-hook-form";

import { FormControl, FormField, FormItem, FormMessage } from "@/react/ui/form";
import { Input } from "@/react/ui/input";

import { validEmail } from "@/shared/regex";
import type { AuthFormInput } from "@/shared/types/auth.type";

interface AuthFieldsProps {
  form: UseFormReturn<AuthFormInput, any, undefined>;
  isPending: boolean;
  isReg?: boolean;
}

export function AuthFields({
  form,
  isPending,
  isReg = false
}: AuthFieldsProps) {
  return (
    <>
      {isReg && (
        <FormField
          control={form.control}
          name="name"
          rules={{
            required: "Це поле обов'язкове"
          }}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input disabled={isPending} {...field} placeholder="Ім'я" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}

      <FormField
        control={form.control}
        name="email"
        rules={{
          required: "Потрібна пошта",
          pattern: {
            value: validEmail,
            message: "Некоректна пошта"
          }
        }}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                type="email"
                placeholder="email@exaple.com"
                disabled={isPending}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="password"
        rules={{
          required: "Це поле обов'язкове",
          minLength: {
            value: 6,
            message: "Мінімум 6 символів"
          }
        }}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                disabled={isPending}
                {...field}
                placeholder="•••••"
                type="password"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
