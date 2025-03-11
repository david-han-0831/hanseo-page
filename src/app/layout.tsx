import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "한서 건축 | 당신의 공간을 특별하게",
    template: "%s | 한서 건축"
  },
  description: "최고의 디자인과 시공 품질로 당신만의 특별한 공간을 만들어 드립니다",
  keywords: ["한서 건축", "인테리어", "리모델링", "건축 설계", "공간 디자인", "주거공간", "상업공간"],
  authors: [{ name: "한서 건축" }],
  creator: "한서 건축",
  publisher: "한서 건축",
  openGraph: {
    title: "한서 건축 | 당신의 공간을 특별하게",
    description: "최고의 디자인과 시공 품질로 당신만의 특별한 공간을 만들어 드립니다",
    url: "https://hanseo-page.vercel.app",
    siteName: "한서 건축",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "https://hanseo-page.vercel.app/img/room-8.jpg",
        width: 1200,
        height: 630,
        alt: "한서 건축 대표 이미지"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "한서 건축 | 당신의 공간을 특별하게",
    description: "최고의 디자인과 시공 품질로 당신만의 특별한 공간을 만들어 드립니다",
    images: ["https://hanseo-page.vercel.app/img/room-8.jpg"]
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
