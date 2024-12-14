"use client";

import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { Button } from "@/react/ui/button";

import { SERVER_URL } from "@/config/api.config";

import styles from "./auth.module.scss";

export function Social() {
  const router = useRouter();

  return (
    <div className={styles.social}>
      <Button
        variant="outline"
        onClick={() => router.push(`${SERVER_URL}/auth/google`)}
      >
        <FcGoogle />
        Продовжити через Google
      </Button>

      <Button
        variant="outline"
        onClick={() => router.push(`${SERVER_URL}/auth/github`)}
      >
        <FaGithub />
        Продовжити через Github
      </Button>
    </div>
  );
}
