import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import statsImage from "@/assets/stats-car.jpg";

const StatsSection = () => {
  const stats = [
    { value: "836M", label: "CARS FOR SALE" },
    { value: "738M", label: "DEALER REVIEWS" },
    { value: "100M", label: "VISITORS PER DAY" },
    { value: "238M", label: "VERIFIED DEALERS" }
  ];

  const features = [
    "Affordable prices & transparent pricing",
    "Comprehensive vehicle inspections",
    "Extended warranty options"
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-2xl overflow-hidden animate-fade-in">
            <img 
              src={statsImage} 
              alt="Luxury car on scenic road" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="grid grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div 
                    key={stat.label}
                    className="text-center animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/90">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6 animate-fade-in-up animation-delay-200">
            <h2 className="text-3xl md:text-4xl font-bold">
              Get A Fair Price For Your Car Sell To Us Today
            </h2>
            
            <p className="text-muted-foreground text-lg">
              We are committed to providing our customers with exceptional service while offering competitive prices for all vehicles.
            </p>
            
            <div className="space-y-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button size="lg" className="mt-6">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
