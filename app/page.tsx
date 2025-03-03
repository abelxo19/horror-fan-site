import Hero from "../components/hero";
import Features from "@/components/features";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import HeaderWrapper from "@/components/header-wrapper";

export default function Home() {
  return (
    <div>
      <main className="bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat h-screen">
        <HeaderWrapper />
        <Hero />
      </main>
      <Features/>
      <CTA/>
      <Footer/>
    </div>
  );
}
