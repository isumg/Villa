import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ChevronDown, Waves, Users, UtensilsCrossed, Wifi, Wind } from "lucide-react";

export default function Home() {
  const highlights = [
    {
      icon: Waves,
      title: "Beachfront Paradise",
      description: "Direct access to pristine Ahangama beach with turquoise waters",
    },
    {
      icon: Users,
      title: "Private Spaces",
      description: "Exclusive villa accommodations for intimate retreats",
    },
    {
      icon: UtensilsCrossed,
      title: "Premium Dining",
      description: "World-class chef service with international cuisine",
    },
    {
      icon: Wifi,
      title: "Modern Amenities",
      description: "High-speed WiFi, air conditioning, and full comfort",
    },
    {
      icon: Wind,
      title: "Infinity Pool",
      description: "Stunning private pool with ocean views",
    },
    {
      icon: Users,
      title: "Expert Concierge",
      description: "24/7 personalized service and local guidance",
    },
  ];

  const stats = [
    { number: "50+", label: "Luxury Rooms & Suites" },
    { number: "20+", label: "Years of Excellence" },
    { number: "1000+", label: "Satisfied Guests" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-blue-100 to-teal-50 flex items-center justify-center">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1440 320%22><path fill=%22%23ffffff%22 fill-opacity=%220.1%22 d=%22M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,128C672,128,768,160,864,160C960,160,1056,128,1152,128C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z%22></path></svg>')] bg-no-repeat bg-cover opacity-20 absolute bottom-0 w-full h-96"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-ocean/10"></div>

        {/* Content */}
        <div className="relative z-10 container-custom text-center max-w-3xl mx-auto px-4">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary mb-6">
              Experience Luxury Living
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 font-light">
              by the Sea – Ahangama
            </p>
            <p className="text-base md:text-lg text-foreground/70 mb-12 max-w-2xl mx-auto">
              Discover Villa Thús, an exclusive beachfront sanctuary offering premium accommodations, world-class amenities, and personalized hospitality in Sri Lanka's most coveted coastal destination.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/booking"
                className="button-primary text-lg px-10 py-4 w-full sm:w-auto"
              >
                Book Now
              </Link>
              <a
                href="https://wa.me/94123456789?text=Hello%20Villa%20Thús"
                target="_blank"
                rel="noopener noreferrer"
                className="button-outline text-lg px-10 py-4 w-full sm:w-auto"
              >
                WhatsApp Inquiry
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce mt-16">
            <ChevronDown className="text-primary mx-auto" size={32} />
          </div>
        </div>
      </section>

      {/* Quick Highlights Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Why Choose Villa Thús?
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-gradient-to-br from-white to-blue-50 rounded-xl border border-border hover:border-secondary transition-all duration-300 hover:shadow-lg"
                >
                  <div className="mb-4 inline-block p-4 bg-secondary/10 rounded-lg group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                    <Icon size={32} className="text-secondary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-ocean text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-4xl md:text-5xl font-serif font-bold mb-2">
                  {stat.number}
                </p>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-video bg-gradient-to-br from-blue-200 to-teal-100 rounded-xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              <div className="w-full h-full flex items-center justify-center text-white">
                <span className="text-center text-foreground/50">Villa Image</span>
              </div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                Welcome to Villa Thús
              </h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Nestled on the pristine shores of Ahangama, Villa Thús stands as a beacon of luxury and tranquility. Our villa combines contemporary elegance with Sri Lankan warmth, offering an unforgettable experience for discerning travelers.
              </p>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Founded by the visionary Mr. Nalin Samarasinghe, Villa Thús has become one of the most sought-after destinations for foreign guests seeking the perfect blend of comfort, beauty, and adventure.
              </p>
              <Link
                to="/about"
                className="inline-block button-primary"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Amenities */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              World-Class Amenities
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                Infinity Pool & Garden
              </h3>
              <p className="text-foreground/70 mb-4">
                Relax by our stunning infinity pool overlooking the Indian Ocean. Lush tropical gardens provide privacy and natural beauty.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                Private Chef Service
              </h3>
              <p className="text-foreground/70 mb-4">
                Enjoy gourmet meals prepared by our world-class chef. Customized menus featuring international and Sri Lankan cuisine.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                24/7 Concierge
              </h3>
              <p className="text-foreground/70 mb-4">
                Our dedicated team is available round-the-clock to arrange tours, dining reservations, and special experiences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                Prime Location
              </h3>
              <p className="text-foreground/70 mb-4">
                Direct beach access with proximity to Ahangama's best surf spots, restaurants, and natural attractions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-ocean to-teal text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready for Your Dream Escape?
          </h2>
          <p className="text-lg opacity-90 mb-12 max-w-2xl mx-auto">
            Book your stay at Villa Thús and experience the ultimate in luxury beachfront living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/booking"
              className="bg-white text-primary px-10 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity text-lg w-full sm:w-auto"
            >
              Reserve Your Dates
            </Link>
            <a
              href="https://wa.me/94123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors text-lg w-full sm:w-auto"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
