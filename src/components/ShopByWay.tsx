import { useState } from "react";
import { ArrowRight } from "lucide-react";

const ShopByWay = () => {
  const [activeTab, setActiveTab] = useState("new");

  const tabs = [
    { id: "new", label: "New Cars For Sale" },
    { id: "used", label: "Used Cars For Sale" },
    { id: "type", label: "Browse By Type" },
    { id: "brand", label: "Browse By Brand" }
  ];

  const carBrands = [
    ["Ford Cars", "Honda Cars", "Hyundai Cars", "Infiniti Cars", "Jaguar Cars", "Jeep Cars"],
    ["Chrysler Cars", "Citroen Cars", "Cupra Cars", "Dacia Cars", "DS Cars", "Fiat Cars"],
    ["Land Rover Cars", "Lexus Cars", "Mercedes-Benz Cars", "Mazda Cars", "MG Cars", "Kia Cars"],
    ["Abarth Cars", "Romeo Cars", "Audi Cars", "Bentley Cars", "BMW Cars", "Chevrolet Cars"],
    ["Mini Cars", "Mitsubishi Cars", "Nissan Cars", "Peugeot Cars", "Porsche Cars", "Renault Cars"]
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Shop BoxCar Your Way</h2>
          <button className="flex items-center text-primary hover:underline">
            View More <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 mb-8 border-b border-border">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 font-medium transition-colors relative ${
                activeTab === tab.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          ))}
        </div>

        {/* Car Brands Grid */}
        <div className="grid grid-cols-5 gap-x-12 gap-y-4">
          {carBrands.map((column, colIndex) => (
            <div key={colIndex} className="space-y-4">
              {column.map((brand, brandIndex) => (
                <div
                  key={brand}
                  className="animate-fade-in"
                  style={{ animationDelay: `${(colIndex * column.length + brandIndex) * 0.02}s` }}
                >
                  <a
                    href="#"
                    className="text-foreground hover:text-primary transition-colors block"
                  >
                    {brand}
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByWay;
