import VehicleCard from "./VehicleCard";
import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import car4 from "@/assets/car-4.jpg";

const VehicleGrid = () => {
  const vehicles = [
    {
      image: car1,
      name: "Mercedes Benz E-Class",
      year: 2023,
      price: 45900,
      transmission: "Auto",
      fuelType: "Petrol",
      mileage: "15k"
    },
    {
      image: car2,
      name: "BMW X5 Sport",
      year: 2024,
      price: 67500,
      transmission: "Auto",
      fuelType: "Diesel",
      mileage: "8k"
    },
    {
      image: car3,
      name: "Ford F-150 Raptor",
      year: 2023,
      price: 58900,
      transmission: "Auto",
      fuelType: "Petrol",
      mileage: "12k"
    },
    {
      image: car4,
      name: "Porsche 911 Carrera",
      year: 2024,
      price: 125900,
      transmission: "Auto",
      fuelType: "Petrol",
      mileage: "3k"
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            Explore All Vehicles
          </h2>
          <a href="#" className="text-primary hover:underline font-medium">
            View All →
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((vehicle, index) => (
            <div 
              key={vehicle.name}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <VehicleCard {...vehicle} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleGrid;
