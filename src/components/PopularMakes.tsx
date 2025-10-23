import { Heart } from "lucide-react";
import car5 from "@/assets/car-5.jpg";
import car6 from "@/assets/car-6.jpg";
import car1 from "@/assets/car-1.jpg";

const PopularMakes = () => {
  const vehicles = [
    {
      image: car5,
      name: "Audi A8 L 2022",
      year: "2022",
      price: "$89,900"
    },
    {
      image: car6,
      name: "BMW X7 2023",
      year: "2023", 
      price: "$95,500"
    },
    {
      image: car1,
      name: "Mercedes S-Class",
      year: "2024",
      price: "$105,900"
    }
  ];

  return (
    <section className="py-16 bg-[hsl(var(--dark-navy))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Popular Makes
          </h2>
          <a href="#" className="text-primary hover:underline font-medium">
            View All →
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {vehicles.map((vehicle, index) => (
            <div 
              key={vehicle.name}
              className="bg-card/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                  <Heart className="h-5 w-5 text-muted-foreground hover:text-red-500 transition-colors" />
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-1">{vehicle.name}</h3>
                <p className="text-white/60 text-sm mb-3">{vehicle.year}</p>
                <p className="text-2xl font-bold text-primary">{vehicle.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularMakes;
