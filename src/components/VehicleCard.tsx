import { Heart, Gauge, Fuel, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VehicleCardProps {
  image: string;
  name: string;
  year: number;
  price: number;
  transmission: string;
  fuelType: string;
  mileage: string;
}

const VehicleCard = ({ image, name, year, price, transmission, fuelType, mileage }: VehicleCardProps) => {
  return (
    <div className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 group">
      <div className="relative overflow-hidden h-56">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
          <Heart className="h-5 w-5 text-muted-foreground hover:text-red-500 transition-colors" />
        </button>
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-muted-foreground">{year}</p>
        </div>
        
        <div className="grid grid-cols-3 gap-3 py-3 border-y border-border">
          <div className="flex items-center space-x-2">
            <Settings className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{transmission}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Fuel className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{fuelType}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Gauge className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{mileage}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <div>
            <p className="text-2xl font-bold text-primary">${price.toLocaleString()}</p>
          </div>
          <Button>View Details</Button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
