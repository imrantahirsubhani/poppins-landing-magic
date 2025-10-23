import { Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-primary">
              CarMarket
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Buy Cars
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Sell Cars
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                About
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Contact
              </a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="hidden md:flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Sign In</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
