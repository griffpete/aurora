import { HeroClient } from "@/components/HeroClient";

interface HeroProps {
  title: string;
  coloredTitle: string;
  subTitle: string;
  description: string;
  ctaText: string;
  secondCtaText: string;
  heroImageUrl: string;
}

export function Hero({
  title,
  coloredTitle,
  subTitle,
  description,
  ctaText,
  secondCtaText,
  heroImageUrl,
}: HeroProps) {
  return (
    <HeroClient
      title={title}
      coloredTitle={coloredTitle}
      subTitle={subTitle}
      description={description}
      ctaText={ctaText}
      secondCtaText={secondCtaText}
      heroImageUrl={heroImageUrl}
    />
  );
}
