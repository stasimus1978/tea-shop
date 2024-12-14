"use client";

import Image from "next/image";
import { useState } from "react";

import { Button } from "@/react/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/react/ui/card";
import { Form } from "@/react/ui/form";

import { AuthFields } from "./auth-fields";
import styles from "./auth.module.scss";
import { Social } from "./social";
import { useAuthForm } from "./use-auth-form";

export function Auth() {
  const [isReg, setIsReg] = useState(false);

  const { form, onSubmit, isPending } = useAuthForm(isReg);

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <Image
          src="/images/auth.svg"
          alt="Auth image"
          width={100}
          height={100}
        />
      </div>
      <div className={styles.right}>
        <Card className={styles.card}>
          <CardHeader className={styles.header}>
            <CardTitle>
              {isReg ? "Створити обліковий запис" : "Увійти"}
            </CardTitle>
            <CardDescription>
              Увійдіть або створіть обліковий запис для розміщення замовлень!
            </CardDescription>
          </CardHeader>

          <CardContent className={styles.content}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <AuthFields form={form} isPending={isPending} isReg={isReg} />

                <Button disabled={isPending}>Продовжити</Button>
              </form>
            </Form>

            <Social />
          </CardContent>

          <CardFooter className={styles.footer}>
            {isReg ? "Вже є рахунок" : "Немає жодного рахунку"}

            <button onClick={() => setIsReg(!isReg)}>
              {isReg ? "Увійти" : "Зареєструватися"}
            </button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
