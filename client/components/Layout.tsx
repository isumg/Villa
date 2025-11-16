import { ReactNode, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Rooms", path: "/rooms" },
    { name: "Gallery", path: "/gallery" },
    { name: "Location", path: "/location" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-white/80 backdrop-blur-md"
        }`}
      >
        <div className="container-custom flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-serif font-bold text-primary">
              Villa Thús
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-foreground hover:text-primary transition-colors font-medium text-sm"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/booking"
              className="button-primary text-sm py-2 px-6"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-border">
            <div className="container-custom py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/booking"
                className="block button-primary text-center py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">Villa Thús</h3>
              <p className="text-sm opacity-90 mb-4">
                Experience luxury living by the sea in beautiful Ahangama, Galle, Sri Lanka.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://wa.me/94778090900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="hover:text-secondary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-secondary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/rooms" className="hover:text-secondary transition-colors">
                    Rooms & Facilities
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:text-secondary transition-colors">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>

            {/* More Links */}
            <div>
              <h4 className="font-semibold mb-4">More</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/location" className="hover:text-secondary transition-colors">
                    Location
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-secondary transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/booking" className="hover:text-secondary transition-colors">
                    Book Now
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2 items-start">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                  <span>Ahangama, Galle, Sri Lanka</span>
                </li>
                <li className="flex gap-2 items-center">
                  <Phone size={16} className="flex-shrink-0" />
                  <a href="tel:+94123456789" className="hover:text-secondary transition-colors">
                    +94 123 456 789
                  </a>
                </li>
                <li className="flex gap-2 items-center">
                  <Mail size={16} className="flex-shrink-0" />
                  <a href="mailto:info@villathus.com" className="hover:text-secondary transition-colors">
                    info@villathus.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2024 Villa Thús. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
