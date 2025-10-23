const Brands = () => {
  const brands = [
    { name: "Audi", icon: "🅰️" },
    { name: "BMW", icon: "🔷" },
    { name: "Ford", icon: "🔵" },
    { name: "Mercedes", icon: "⭐" },
    { name: "Porsche", icon: "🏁" },
    { name: "Volkswagen", icon: "🔷" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            Explore Our Premium Brands
          </h2>
          <a href="#" className="text-primary hover:underline font-medium">
            View All →
          </a>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 animate-fade-in">
          {brands.map((brand, index) => (
            <div 
              key={brand.name}
              className="flex flex-col items-center justify-center p-6 bg-card rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-2">{brand.icon}</div>
              <span className="text-sm font-medium text-center">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
