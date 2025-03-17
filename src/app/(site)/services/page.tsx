import { Metadata } from "next";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Nos Services | Horizon Écrit",
  description: "Découvrez nos services de rédaction web, stratégie de contenu et formation pour développer votre présence en ligne.",
};
export default function ServicesPage() {
  return <Services />;
}
