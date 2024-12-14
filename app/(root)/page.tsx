import type { Metadata } from "next";

import { NO_INDEX_PAGE } from "@/constants/seo.constants";

import { Home } from "./home";

export const metadata: Metadata = {
  title: "Ваші покупки, ваше задоволення - все в одному місці.",
  ...NO_INDEX_PAGE
};

export default function HomePage() {
  return <Home />;
}
