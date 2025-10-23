import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import VehicleGrid from "@/components/VehicleGrid";
import StatsSection from "@/components/StatsSection";
import Features from "@/components/Features";
import PopularMakes from "@/components/PopularMakes";
import ShopByWay from "@/components/ShopByWay";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Hero />
        <Brands />
        <VehicleGrid />
        <StatsSection />
        <Features />
        <PopularMakes />
        <ShopByWay />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
