import { Search, MapPin, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-car.jpg";

const Hero = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Find Your Perfect Car
          </h1>
          
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 shadow-2xl animate-fade-in-up animation-delay-200">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-1 flex items-center space-x-2 border border-border rounded-lg px-4 py-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Location" 
                  className="border-0 focus-visible:ring-0 p-0"
                />
              </div>
              
              <div className="md:col-span-1 flex items-center space-x-2 border border-border rounded-lg px-4 py-3">
                <Search className="h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Type" 
                  className="border-0 focus-visible:ring-0 p-0"
                />
              </div>
              
              <div className="md:col-span-1 flex items-center space-x-2 border border-border rounded-lg px-4 py-3">
                <DollarSign className="h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Price Range" 
                  className="border-0 focus-visible:ring-0 p-0"
                />
              </div>
              
              <Button className="md:col-span-1 h-full text-base font-semibold">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
