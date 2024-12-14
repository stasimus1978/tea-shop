// export const errorCatch = (error: any): string => {
//   const message = error?.response?.data?.message;
//   return message
//     ? typeof error.response.data.message === "object"
//       ? message[0]
//       : message
//     : error.message;
// };
import { AxiosError } from "axios";

export const getContentType = () => ({
  "Content-Type": "application/json"
});

export const errorCatch = (error: unknown): string => {
  // const message = error?.response?.data?.message;

  if (error instanceof AxiosError) {
    const message = error.response?.data?.message;
    return typeof message === "object" ? message[0] : message;
  }

  return (error as Error).message;
};
