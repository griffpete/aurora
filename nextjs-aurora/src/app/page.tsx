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
  companyTitle: string;
  stats: Array<{ title: string; description: string }>;
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
        companyTitle,
        stats
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
  const title = data?.title || "Transform Your Home";
  const coloredTitle = data?.coloredTitle || "With Custom LED Lighting";
  const subTitle = data?.subTitle || "Permanent LED Lighting Solutions";
  const description =
    data?.description ||
    "Year-round elegance meets cutting-edge technology. Control millions of colors from your phone. No more ladders, no more hassle.";
  const ctaText = data?.CTAText || "Get Free Quote";
  const secondCtaText = data?.secondCTAText || "View Gallery";
  const companyTitle = data?.companyTitle || "View Gallery";
  const heroImageUrl = data?.heroImage
    ? imageUrl(data.heroImage).width(1920).height(1080).url()
    : "https://images.unsplash.com/photo-1669219905807-aa5aa1bb3447?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMHBlcm1hbmVudCUyMGxpZ2h0cyUyMG5pZ2h0fGVufDF8fHx8MTc2NTUxNDIzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const stats = data?.stats || [];

  return (
    <div className="bg-black">
      <Navigation companyTitle={companyTitle} />
      <TopFold
        title={title}
        coloredTitle={coloredTitle}
        subTitle={subTitle}
        description={description}
        ctaText={ctaText}
        secondCtaText={secondCtaText}
        heroImageUrl={heroImageUrl}
        stats={stats}
      />
      <Features />
      <Solutions />
      <Gallery />
      <About />
      <CTA />

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
