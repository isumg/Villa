import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ChevronDown, Waves, Users, UtensilsCrossed, Wifi, Wind, Star, Quote } from "lucide-react";

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
    { number: "3", label: "En-Suite Bedrooms" },
    { number: "3", label: "Luxury Bathrooms" },
    { number: "Private", label: "Pool & Garden" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://cdn.builder.io/api/v1/image/assets%2F21647635e9b5466fa9bbe9f38773f576%2F569c529c2c4647ee922917416dd909f0?format=webp&width=1280')",
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/45 to-black/55"></div>

        {/* Content */}
        <div className="relative z-10 container-custom text-center max-w-3xl mx-auto px-4">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6">
              Experience Luxury Living
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 font-light">
              by the Sea – Ahangama
            </p>
            <p className="text-base md:text-lg text-white/80 mb-12 max-w-2xl mx-auto">
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
                href="https://wa.me/94778090900?text=Hello%20Villa%20Thús"
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
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F21647635e9b5466fa9bbe9f38773f576%2Fdd4174cbd7e64e80840d9e4701adcd6f?format=webp&width=800"
                alt="Villa Thús Pool and Garden"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                Welcome to Villa Thús
              </h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Villa Thús in Ahangama Midigama features three elegant en-suite bedrooms and three luxury bathrooms. Our exclusive beachfront property offers a private infinity pool, lush garden, and spacious terrace overlooking the ocean.
              </p>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Just a short walk from Midigama Beach and 1 km from the renowned Ahangama Beach, Villa Thús combines contemporary elegance with Sri Lankan warmth. Every detail is designed for the discerning traveler seeking authentic luxury and unforgettable coastal experiences.
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
                Modern Comfort & Connectivity
              </h3>
              <p className="text-foreground/70 mb-4">
                Air-conditioned bedrooms, free WiFi throughout the villa, work desk, and kitchenette. Perfect for both relaxation and productivity.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                Dining & Housekeeping
              </h3>
              <p className="text-foreground/70 mb-4">
                Full dining area, modern kitchen facilities, and professional housekeeping service to ensure your comfort throughout your stay.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                Beach Proximity
              </h3>
              <p className="text-foreground/70 mb-4">
                Just 10 km from Koggala Airport. A short walk to Midigama Beach and only 1 km from the famous Ahangama Beach.
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
              href="https://wa.me/94778090900"
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
