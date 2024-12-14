import { type Order, type Prisma } from "@prisma/client";

import type { ICartItem } from "./cart.type";

export type OrderItem = Order;

export type OrderIncludes = Prisma.OrderGetPayload<{
  include: { items: true; user: true };
}>;

interface IAmount {
  value: string;
  currency: string;
}

interface IRecipient {
  account_id: string;
  gateway_id: string;
}

interface IPaymentMethod {
  type: string;
  id: string;
  saved: boolean;
}

interface IConfirmation {
  type: string;
  return_url: string;
  confirmation_url: string;
}

export interface IPaymentsResponse {
  id: string;
  status: string;
  amount: IAmount;
  recipient: IRecipient;
  payment_method: IPaymentMethod;
  created_at: Date;
  confirmation: IConfirmation;
}

export enum EnumOrderStatus {
  PENDING = "Pending",
  PAYED = "Payed"
}

export interface IOrder extends OrderItem {
  items: ICartItem[];
}
