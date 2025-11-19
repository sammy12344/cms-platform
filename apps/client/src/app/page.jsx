import { Header } from "@/components/header";
import { HeroCarousel } from "@/components/hero-carousel";
import { NewsGrid } from "@/components/news-grid";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Providers } from "@/components/providers";

export default function Home() {
  return (
    <Providers>
      <main className="min-h-screen bg-gray-50">
        <Header />
        <HeroCarousel />
        <NewsGrid />
        <Footer />
        <ScrollToTop />
      </main>
    </Providers>
  );
}