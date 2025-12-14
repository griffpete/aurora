import { Navigation } from "@/components/Navigation";
import { TopFold } from "@/components/TopFold";
import { Features } from "@/components/Features";
import { Solutions } from "@/components/Solutions";
import { Gallery } from "@/components/Gallery";
import { About } from "@/components/About";
import { CTA } from "@/components/CTA";

import { client } from "@/sanity/client";
import { imageUrl } from "@/sanity/image";

interface HomePageData {
  // Top Fold
  title: string;
  coloredTitle: string;
  subTitle: string;
  description: string;
  heroImage: {
    asset: {
      _ref: string;
    };
  };
  CTAText: string;
  secondCTAText: string;
  stats: Array<{ title: string; description: string }>;

  // Features
  featureTitle: string;
  featureDescription: string;
  featureCard: Array<{
    title: string;
    description: string;
    lucideIconName: string;
  }>;

  // Solutions
  solutionTitle: string;
  solutionDescription: string;

  // Demo
  demoTitle: string;
  demoDescription: string;

  // Learn More
  learnMoreTitle: string;
  learnMoreDescription: string;
  learnMoreColorOptions: string;
  learnMoreBenefitList: string[];
  learnMoreButtonText: string;
  learnMoreSlug: {
    current: string;
  };

  // Contact
  contactTitle: string;
  contactDescription: string;
  contactCard: Array<{
    title: string;
    description: string;
    lucideIconName: string;
  }>;
  contactCTAText: string;
  contactPullBack: string;
}

async function getHomePageData(): Promise<HomePageData | null> {
  try {
    const data = await client.fetch<HomePageData>(
      `*[_type == "homePage"][0]{
        title,
        coloredTitle,
        subTitle,
        description,
        heroImage,
        CTAText,
        secondCTAText,
        stats,
        featureTitle,
        featureDescription,
        featureCard,
        solutionTitle,
        solutionDescription,
        demoTitle,
        demoDescription,
        learnMoreTitle,
        learnMoreDescription,
        learnMoreColorOptions,
        learnMoreBenefitList,
        learnMoreButtonText,
        learnMoreSlug,
        contactTitle,
        contactDescription,
        contactCard,
        contactCTAText,
        contactPullBack
      }`,
    );
    return data;
  } catch (error) {
    console.error("Failed to fetch home page data:", error);
    return null;
  }
}

export default async function Home() {
  const data = await getHomePageData();

  const heroImageUrl = data?.heroImage
    ? imageUrl(data.heroImage).width(1920).height(1080).url()
    : undefined;

  return (
    <div className="bg-black">
      <Navigation companyTitle="Trimlight" />
      <TopFold
        title={data?.title}
        coloredTitle={data?.coloredTitle}
        subTitle={data?.subTitle}
        description={data?.description}
        ctaText={data?.CTAText}
        secondCtaText={data?.secondCTAText}
        heroImageUrl={heroImageUrl}
        stats={data?.stats}
      />
      <Features
        title={data?.featureTitle}
        description={data?.featureDescription}
        cards={data?.featureCard}
      />
      <Solutions
        title={data?.solutionTitle}
        description={data?.solutionDescription}
      />
      <Gallery title={data?.demoTitle} description={data?.demoDescription} />
      <About
        title={data?.learnMoreTitle}
        description={data?.learnMoreDescription}
        colorOptions={data?.learnMoreColorOptions}
        benefits={data?.learnMoreBenefitList}
        buttonText={data?.learnMoreButtonText}
        slug={data?.learnMoreSlug?.current}
      />
      <CTA
        title={data?.contactTitle}
        description={data?.contactDescription}
        cards={data?.contactCard}
        ctaText={data?.contactCTAText}
        pullBack={data?.contactPullBack}
      />

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white/40">
            © 2025 Trimlight. Elevating homes with permanent LED lighting
            solutions.
          </p>
        </div>
      </footer>
    </div>
  );
}
