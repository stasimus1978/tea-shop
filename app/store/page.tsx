import type { Metadata } from "next";

import { NO_INDEX_PAGE } from "@/constants/seo.constants";

import { Store } from "./store";

export const metadata: Metadata = {
  title: "Управління магазином",
  ...NO_INDEX_PAGE
};

export default function StorePage() {
  return <Store />;
}
