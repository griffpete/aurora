import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

async function getMetadata() {
  const METADATA_QUERY = `*[_type == "metadata"][0]{
    siteTitle,
    description,
    favicon
  }`;

  const metadata = await client.fetch(
    METADATA_QUERY,
    {},
    { next: { revalidate: 3600 } },
  );
  return metadata;
}

export async function generateMetadata(): Promise<Metadata> {
  const siteMetadata = await getMetadata();

  const faviconUrl = siteMetadata?.favicon
    ? urlFor(siteMetadata.favicon)?.width(32).height(32).url()
    : undefined;

  return {
    title: siteMetadata?.siteTitle || "Trimlight UT",
    description:
      siteMetadata?.description || "Change this to something usefull",
    icons: faviconUrl
      ? {
          icon: faviconUrl,
        }
      : undefined,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
