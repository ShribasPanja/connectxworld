import Header from "./components/Header";
import Hero from "./components/Hero";
import ProfessionalShowcase from "./components/ProfessionalShowcase";
import HowItWorks from "./components/HowItWorks";
import Categories from "./components/Categories";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
