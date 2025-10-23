import { Button } from "@/components/ui/button";
import { Car, DollarSign, ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Looking for a Car Card */}
          <div className="relative bg-blue-50 rounded-3xl p-12 overflow-hidden animate-fade-in">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 text-foreground">
                Are You Looking<br />For a Car ?
              </h3>
              <p className="text-muted-foreground mb-6">
                We are committed to providing our customers with exceptional service.
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="absolute bottom-8 right-8">
              <div className="w-32 h-32 bg-blue-200/50 rounded-full flex items-center justify-center">
                <Car className="w-16 h-16 text-primary" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Want to Sell a Car Card */}
          <div className="relative bg-pink-50 rounded-3xl p-12 overflow-hidden animate-fade-in animation-delay-200">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 text-foreground">
                Do You Want to<br />Sell a Car ?
              </h3>
              <p className="text-muted-foreground mb-6">
                We are committed to providing our customers with exceptional service.
              </p>
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="absolute bottom-8 right-8">
              <div className="w-32 h-32 bg-pink-200/50 rounded-full flex items-center justify-center">
                <DollarSign className="w-16 h-16 text-pink-500" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
