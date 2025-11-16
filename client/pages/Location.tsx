import Layout from "@/components/Layout";
import { MapPin, Compass, Waves, Utensils, Camera } from "lucide-react";

export default function Location() {
  const nearbyAttractions = [
    {
      icon: Waves,
      title: "Midigama Beach",
      description: "Short walk from the villa, perfect for morning swims",
      distance: "Walking distance",
    },
    {
      icon: Waves,
      title: "Ahangama Beach",
      description: "Famous surf beach just 1 km away",
      distance: "1 km away",
    },
    {
      icon: Camera,
      title: "Stilt Fishermen",
      description: "Iconic Sri Lankan fishing tradition photo opportunity",
      distance: "15 mins drive",
    },
    {
      icon: Compass,
      title: "Galle Fort",
      description: "UNESCO World Heritage fortress and historic landmark",
      distance: "23 km away",
    },
    {
      icon: Compass,
      title: "Galle Light House",
      description: "Historic lighthouse with panoramic ocean views",
      distance: "23 km away",
    },
    {
      icon: Utensils,
      title: "Local Restaurants",
      description: "Authentic Sri Lankan and international cuisine nearby",
      distance: "Walking distance",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen pb-20">
        {/* Hero Section */}
        <section className="pt-20 pb-12 bg-gradient-to-b from-blue-50 to-white">
          <div className="container-custom">
            <h1 className="text-5xl font-serif font-bold text-primary mb-4">
              Our Location
            </h1>
            <div className="w-16 h-1 bg-secondary mb-6"></div>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Villa Thús is situated in Ahangama Midigama, Galle, Sri Lanka – a premier beachfront destination just 10 km from Koggala Airport, within walking distance of pristine beaches and local attractions.
            </p>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12">
          <div className="container-custom">
            <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl overflow-hidden shadow-lg h-96 flex items-center justify-center border border-border">
              <div className="text-center">
                <MapPin size={48} className="mx-auto text-primary mb-4" />
                <p className="text-foreground/60">
                  Google Maps embed will be placed here
                </p>
                <p className="text-foreground/50 text-sm mt-2">
                  Ahangama, Galle, Sri Lanka
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Attractions */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
                Nearby Attractions
              </h2>
              <div className="w-16 h-1 bg-secondary mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nearbyAttractions.map((attraction, index) => {
                const Icon = attraction.icon;
                return (
                  <div
                    key={index}
                    className="p-8 bg-gradient-to-br from-white to-blue-50 rounded-xl border border-border hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="mb-4 inline-block p-4 bg-secondary/10 rounded-lg group-hover:bg-secondary group-hover:text-white transition-all">
                      <Icon size={32} className="text-secondary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-primary mb-2">
                      {attraction.title}
                    </h3>
                    <p className="text-foreground/70 text-sm mb-3">
                      {attraction.description}
                    </p>
                    <p className="text-secondary font-semibold text-sm">
                      {attraction.distance}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Area Highlights */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-serif font-bold text-primary mb-8">
                Why Ahangama?
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-border">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-3">
                    Coastal Charm
                  </h3>
                  <p className="text-foreground/70">
                    Ahangama is a hidden gem on Sri Lanka's South Coast, known for its pristine beaches, dramatic cliffs, and authentic fishing village atmosphere. It offers the perfect balance between natural beauty and accessibility.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-border">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-3">
                    Adventure Hub
                  </h3>
                  <p className="text-foreground/70">
                    Experience world-class surfing, whale watching tours, hiking, and water sports. The area is a paradise for adventure seekers and nature lovers alike.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-border">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-3">
                    Cultural Gateway
                  </h3>
                  <p className="text-foreground/70">
                    Visit historic Galle Fort, explore traditional fishing techniques, and experience warm Sri Lankan hospitality. The region offers authentic cultural experiences that will enrich your journey.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-border">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-3">
                    Culinary Delights
                  </h3>
                  <p className="text-foreground/70">
                    Discover fresh seafood, authentic curry restaurants, and world-class dining establishments. Our villa's private chef also crafts bespoke menus featuring local and international cuisine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Directions */}
        <section className="py-20 bg-white">
          <div className="container-custom max-w-3xl">
            <h2 className="text-4xl font-serif font-bold text-primary mb-8">
              Getting Here
            </h2>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-xl border border-blue-200">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  From Colombo International Airport
                </h3>
                <p className="text-foreground/70 mb-2">
                  <span className="font-semibold">Distance:</span> Approximately 145 km
                </p>
                <p className="text-foreground/70">
                  <span className="font-semibold">Travel Time:</span> 3-3.5 hours by car
                </p>
                <p className="text-foreground/70 mt-4">
                  We arrange airport transfers and ground transportation for all guests.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-xl border border-blue-200">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  From Galle City
                </h3>
                <p className="text-foreground/70 mb-2">
                  <span className="font-semibold">Distance:</span> Approximately 20 km
                </p>
                <p className="text-foreground/70">
                  <span className="font-semibold">Travel Time:</span> 30-40 minutes by car
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
