import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Ali TUFAN",
      role: "Designer",
      rating: 5.0,
      text: "I'd suggest Macklin Motors Nissan Glasgow South to a friend because I had great service from my salesman Patrick and all of the team.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "Sarah Johnson",
      role: "Business Owner",
      rating: 5.0,
      text: "Outstanding service! The team was professional, knowledgeable, and made the entire car buying process smooth and enjoyable.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      rating: 5.0,
      text: "Best car buying experience I've ever had. Transparent pricing, no pressure, and excellent customer service throughout.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">What our customers say</h2>
          <p className="text-muted-foreground">
            Rated <span className="font-semibold">4.7 / 5</span> based on <span className="font-semibold">28,370</span> reviews Showing our <span className="font-semibold">4 & 5</span> star reviews
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="grid md:grid-cols-[400px_1fr] gap-8 items-center animate-fade-in">
          {/* Image */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 bg-yellow-400 text-foreground px-3 py-1 rounded-full text-sm font-semibold">
                {testimonials[currentIndex].rating}
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-1">{testimonials[currentIndex].name}</h3>
              <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
            </div>

            <p className="text-lg text-foreground leading-relaxed">
              {testimonials[currentIndex].text}
            </p>

            {/* Navigation */}
            <div className="flex gap-4 pt-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
