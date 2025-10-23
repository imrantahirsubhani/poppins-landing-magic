import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[hsl(222,47%,11%)] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Join CarHut</h3>
              <p className="text-white/70">Receive pricing updates, shopping tips & more!</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary w-full md:w-80"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white px-8">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Get in Touch</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Help center</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Live chat</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">How it works</a></li>
            </ul>
          </div>

          {/* Our Brands */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Brands</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Toyota</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Porsche</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Audi</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">BMW</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Ford</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Nissan</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Peugeot</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Volkswagen</a></li>
            </ul>
          </div>

          {/* Vehicles Type */}
          <div>
            <h4 className="font-bold text-lg mb-4">Vehicles Type</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Sedan</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Hatchback</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">SUV</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Hybrid</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Electric</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Coupe</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Truck</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Convertible</a></li>
            </ul>
          </div>

          {/* Our Mobile App */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Mobile App</h4>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-3">
                <div className="text-2xl">🍎</div>
                <div>
                  <div className="text-xs text-white/70">Download on the</div>
                  <div className="font-semibold">Apple Store</div>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-3">
                <div className="text-2xl">▶️</div>
                <div>
                  <div className="text-xs text-white/70">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </a>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-bold mb-3">Connect With Us</h5>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary transition-colors rounded-full flex items-center justify-center">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary transition-colors rounded-full flex items-center justify-center">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary transition-colors rounded-full flex items-center justify-center">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary transition-colors rounded-full flex items-center justify-center">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">
              © 2025 example.com. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                Privacy Notice
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary hover:bg-primary/90 text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
