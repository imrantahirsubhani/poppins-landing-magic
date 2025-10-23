import { Shield, Award, Headphones, TrendingUp } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted By Thousands",
      description: "We offer a wide range of vehicles to suit every need and budget."
    },
    {
      icon: Award,
      title: "Best Price Guaranteed",
      description: "Get the best deals with transparent pricing and no hidden fees."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Our dedicated team is here to help you anytime, anywhere."
    },
    {
      icon: TrendingUp,
      title: "Easy Financing",
      description: "Flexible payment options to make your dream car affordable."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Us?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title}
                className="text-center space-y-4 p-6 rounded-xl hover:bg-secondary/50 transition-colors animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
