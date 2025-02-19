import Hero from "../components/hero";
import Header from "../components/header";
import Features from "@/components/features";
import CTA from "@/components/cta";

export default function Home() {
  return (
    <div>
      <main className="bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat h-screen">
        <Header />
        <Hero />
      </main>
      <Features/>
      <CTA/>
    </div>
  );
}
