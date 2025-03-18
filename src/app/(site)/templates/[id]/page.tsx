import { Metadata } from "next";
import { templates } from "@/data/templatesData";
import TemplateDetail from "@/components/Templates/TemplateDetail";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const template = templates.find((t) => t.id === params.id);

  if (!template) {
    return {
      title: "Template non trouvé | Horizon Écrit",
      description: "Le template demandé n'existe pas.",
    };
  }

  return {
    title: `${template.title} | Horizon Écrit`,
    description: template.description,
  };
}

export default function TemplatePage({ params }: Props) {
  const template = templates.find((t) => t.id === params.id);

  if (!template) {
    notFound();
  }

  return <TemplateDetail template={template} />;
}