import Header from "@repo/ui/components/Header";
import Hero from "@repo/ui/components/Hero";
import ProfessionalShowcase from "@repo/ui/components/ProfessionalShowcase";
import HowItWorks from "@repo/ui/components/HowItWorks";
import Categories from "@repo/ui/components/Categories";
import Features from "@repo/ui/components/Features";
import Testimonials from "@repo/ui/components/Testimonials";
import Contact from "@repo/ui/components/Contact";
import Footer from "@repo/ui/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProfessionalShowcase />
      <HowItWorks />
      <Categories />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
