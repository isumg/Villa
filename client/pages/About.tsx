import Layout from "@/components/Layout";
import { CheckCircle, Users, Leaf, Award } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Users,
      title: "Personalized Hospitality",
      description: "Every guest receives dedicated attention and customized service to ensure an unforgettable experience.",
    },
    {
      icon: Leaf,
      title: "Sustainable Living",
      description: "We're committed to maintaining the natural beauty of Ahangama while providing world-class comfort.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Every amenity and service is carefully curated to exceed expectations of discerning travelers.",
    },
  ];

  const highlights = [
    "3 en-suite bedrooms with premium furnishings",
    "3 luxurious bathrooms with modern fixtures",
    "Private infinity pool with ocean views",
    "Lush tropical garden and terrace",
    "Full kitchenette with dining area",
    "Free high-speed WiFi throughout",
    "Air conditioning in all rooms",
    "Professional housekeeping service",
  ];

  return (
    <Layout>
      <div className="min-h-screen pb-20">
        {/* Hero Section */}
        <section className="pt-20 pb-12 bg-gradient-to-b from-blue-50 to-white">
          <div className="container-custom">
            <h1 className="text-5xl font-serif font-bold text-primary mb-4">
              About Villa Thús
            </h1>
            <div className="w-16 h-1 bg-secondary mb-6"></div>
            <p className="text-lg text-foreground/70 max-w-2xl">
              A premium beachfront sanctuary in Ahangama Midigama, Sri Lanka, dedicated to providing unforgettable luxury experiences.
            </p>
          </div>
        </section>

        {/* Villa Story */}
        <section className="py-20 bg-white">
          <div className="container-custom max-w-3xl">
            <div className="mb-12">
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">
                The Villa Thús Experience
              </h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Villa Thús stands as one of the leading luxury villas in the Ahangama area, renowned for attracting discerning international guests seeking authentic Sri Lankan experiences with world-class comfort.
              </p>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Our property is meticulously designed to offer the perfect blend of contemporary elegance and tropical warmth. With three exquisitely appointed en-suite bedrooms, a private infinity pool, and immaculate gardens, Villa Thús provides an exclusive retreat by the sea.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-border">
                    <div className="flex items-start gap-4">
                      <Icon className="text-secondary flex-shrink-0 mt-1" size={28} />
                      <div>
                        <h3 className="text-xl font-serif font-bold text-primary mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-foreground/70">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Owner Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container-custom max-w-3xl">
            <h2 className="text-4xl font-serif font-bold text-primary mb-8">
              About Mr. Nalin Samarasinghe
            </h2>

            <div className="bg-white p-8 rounded-xl border border-border">
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Villa Thús is the vision of Mr. Nalin Samarasinghe, a seasoned hospitality entrepreneur with a passion for creating exceptional guest experiences. His dedication to quality and attention to detail is evident in every aspect of the villa.
              </p>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                With years of experience in the hospitality industry, Mr. Samarasinghe established Villa Thús as a premier destination for international travelers seeking luxury, comfort, and authentic Sri Lankan hospitality. His personal commitment ensures that every guest receives world-class service and unforgettable memories.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                The villa's success is built on his core values: excellence in service, respect for the environment, and genuine care for guest satisfaction. Every guest is treated not as a customer, but as a valued friend visiting their home.
              </p>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-20 bg-white">
          <div className="container-custom max-w-3xl">
            <h2 className="text-4xl font-serif font-bold text-primary mb-12 text-center">
              Villa Highlights
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg text-foreground/80">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Benefits */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container-custom max-w-3xl">
            <h2 className="text-4xl font-serif font-bold text-primary mb-12 text-center">
              Ahangama – The Perfect Destination
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-8 rounded-xl border border-border">
                <h3 className="text-2xl font-serif font-bold text-primary mb-3">
                  Strategic Location
                </h3>
                <p className="text-foreground/80">
                  Located in Ahangama Midigama on Sri Lanka's stunning South Coast, Villa Thús is just 10 km from Koggala Airport, making international travel seamless. Close to pristine beaches and cultural landmarks.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-border">
                <h3 className="text-2xl font-serif font-bold text-primary mb-3">
                  Beach Paradise
                </h3>
                <p className="text-foreground/80">
                  Within walking distance of Midigama Beach and just 1 km from the famous Ahangama Beach, renowned for world-class surfing and pristine coastal scenery.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-border">
                <h3 className="text-2xl font-serif font-bold text-primary mb-3">
                  Cultural & Historical Significance
                </h3>
                <p className="text-foreground/80">
                  Just 23 km away lie the UNESCO World Heritage Galle Fort and historic Galle Light House. Experience authentic Sri Lankan culture, traditions, and iconic stilt fishermen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary via-ocean to-teal text-white">
          <div className="container-custom text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">
              Ready to Experience Villa Thús?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Discover the ultimate in luxury beachfront living. Book your stay today and create unforgettable memories in paradise.
            </p>
            <a
              href="/booking"
              className="inline-block bg-white text-primary px-10 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity text-lg"
            >
              Plan Your Visit
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
