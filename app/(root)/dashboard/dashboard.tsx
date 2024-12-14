import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { saveTokenStorage } from "@/services/auth/auth-token.service";

export function Dashboard() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const accessToken = searchParams.get("access_token");

    if (accessToken) saveTokenStorage(accessToken);
  }, [searchParams]);

  return (
    <div className="">
      <h1>Личный кабинет</h1>
    </div>
  );
}
