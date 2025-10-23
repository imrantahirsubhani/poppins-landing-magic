import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import VehicleGrid from "@/components/VehicleGrid";
import StatsSection from "@/components/StatsSection";
import Features from "@/components/Features";
import PopularMakes from "@/components/PopularMakes";

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
      </main>
    </div>
  );
};

export default Index;
