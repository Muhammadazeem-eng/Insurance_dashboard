import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Stats from "@/components/Stats";
import Coverage from "@/components/Coverage";
import Showcase from "@/components/Showcase";
import HowItWorks from "@/components/HowItWorks";
import CustomerLogos from "@/components/CustomerLogos";
import WhyWeExist from "@/components/WhyWeExist";
import AiHumansBand from "@/components/AiHumansBand";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <TrustBar />
      <Stats />
      <Coverage />
      <Showcase />
      <HowItWorks />
      <CustomerLogos />
      <WhyWeExist />
      <AiHumansBand />
      <Comparison />
      <Testimonials />
      <FAQ />
      <CtaBanner />
      <Footer />
    </main>
  );
}
