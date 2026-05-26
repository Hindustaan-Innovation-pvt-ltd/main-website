import type { Metadata } from "next";
import { notFound } from "next/navigation";
import servicesData from "@/services.json";
import { ServiceDetailView } from "@/components/services/ServiceDetailView";

interface Props {
  params: Promise<{ serviceId: string }>;
}

export async function generateStaticParams() {
  return servicesData.categories.flatMap((cat) =>
    cat.cards.map((card) => ({ serviceId: card.id }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { serviceId } = await params;
  let card: any = null;
  for (const cat of servicesData.categories) {
    const found = cat.cards.find((c: any) => c.id === serviceId);
    if (found) { card = found; break; }
  }
  if (!card) return {};
  return {
    title: `${card.title} | Hindustaan Innovations`,
    description: card.description,
    icons: { icon: "/logo.png" },
    alternates: {
      canonical: `/services/${serviceId}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { serviceId } = await params;
  let found = false;
  for (const cat of servicesData.categories) {
    if (cat.cards.find((c: any) => c.id === serviceId)) { found = true; break; }
  }
  if (!found) notFound();

  return <ServiceDetailView serviceId={serviceId} />;
}
