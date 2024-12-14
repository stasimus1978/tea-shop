import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { type SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { DASHBOARD_URL } from "@/config/url.config";

import { authService } from "@/services/auth/auth.service";

import type { AuthFormInput } from "@/shared/types/auth.type";

export const useAuthForm = (isReg: boolean) => {
  const router = useRouter();

  const form = useForm<AuthFormInput>({
    mode: "onChange"
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["auth user"],

    mutationFn: (data: AuthFormInput) =>
      authService.main(isReg ? "register" : "login", data),

    onSuccess() {
      form.reset();
      toast.success("Успішне авторизація");
      router.replace(DASHBOARD_URL.home());
    },

    onError(error) {
      if (error.message) {
        toast.error(error.message);
      } else {
        toast.error("Помилка авторизації");
      }
    }
  });

  const onSubmit: SubmitHandler<AuthFormInput> = data => {
    mutate(data);
  };

  return { onSubmit, isPending, form };
};
