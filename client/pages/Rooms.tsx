import Layout from "@/components/Layout";
import { Wifi, Wind, Droplets, UtensilsCrossed, Shirt, Tv } from "lucide-react";

export default function Rooms() {
  const bedrooms = [
    {
      name: "Master Suite",
      image: "https://cdn.builder.io/api/v1/image/assets%2F21647635e9b5466fa9bbe9f38773f576%2F0533e91b2b7d4afa996cbe756142e7e5?format=webp&width=800",
      description: "Luxurious master bedroom with ensuite bathroom, premium bedding, and garden views",
      features: ["King Size Bed", "Ensuite Bathroom", "AC", "Garden View"],
    },
    {
      name: "Guest Bedroom 1",
      image: "https://cdn.builder.io/api/v1/image/assets%2F21647635e9b5466fa9bbe9f38773f576%2F14ef21a798e941ad9a2a338642ffc314?format=webp&width=800",
      description: "Comfortable guest bedroom with ensuite bathroom and modern amenities",
      features: ["Double Bed", "Ensuite Bathroom", "AC", "Work Desk"],
    },
    {
      name: "Guest Bedroom 2",
      image: "https://cdn.builder.io/api/v1/image/assets%2F21647635e9b5466fa9bbe9f38773f576%2F8203abc6245d4a2ba94b24295d99110b?format=webp&width=800",
      description: "Elegant guest bedroom with ensuite bathroom and premium furnishings",
      features: ["Double Bed", "Ensuite Bathroom", "AC", "Outdoor Access"],
    },
  ];

  const amenities = [
    {
      icon: Wifi,
      title: "Free WiFi",
      description: "High-speed internet throughout the villa",
    },
    {
      icon: Wind,
      title: "Air Conditioning",
      description: "Climate control in all bedrooms and living areas",
    },
    {
      icon: Droplets,
      title: "Private Pool",
      description: "Stunning infinity pool with ocean views",
    },
    {
      icon: UtensilsCrossed,
      title: "Full Kitchen",
      description: "Modern kitchenette with full cooking facilities",
    },
    {
      icon: Shirt,
      title: "Washing Machine",
      description: "In-villa laundry facilities",
    },
    {
      icon: Tv,
      title: "Entertainment",
      description: "TV, streaming services, and entertainment systems",
    },
  ];

  const facilities = [
    {
      title: "Pool & Garden",
      items: ["Private infinity pool", "Lush tropical garden", "Outdoor lounge seating", "Terrace dining area"],
    },
    {
      title: "Kitchen & Dining",
      items: ["Full kitchenette", "Dining area", "BBQ facilities", "Premium toiletries"],
    },
    {
      title: "Comfort & Convenience",
      items: ["Work desk", "Hair dryer", "Towels", "Free WiFi", "Air conditioning"],
    },
    {
      title: "Services",
      items: ["Housekeeping", "Airport transfers available", "Concierge service", "Local tours arrangement"],
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen pb-20">
        {/* Hero Section */}
        <section className="pt-20 pb-12 bg-gradient-to-b from-blue-50 to-white">
          <div className="container-custom">
            <h1 className="text-5xl font-serif font-bold text-primary mb-4">
              Rooms & Facilities
            </h1>
            <div className="w-16 h-1 bg-secondary mb-6"></div>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Discover our beautifully appointed bedrooms and world-class amenities designed for your ultimate comfort and relaxation.
            </p>
          </div>
        </section>

        {/* Bedrooms Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
                Three Luxury Bedrooms
              </h2>
              <div className="w-16 h-1 bg-secondary mx-auto"></div>
            </div>

            <div className="space-y-12">
              {bedrooms.map((bedroom, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "md:direction-rtl" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <img
                      src={bedroom.image}
                      alt={bedroom.name}
                      className="w-full h-80 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
                    />
                  </div>
                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <h3 className="text-3xl font-serif font-bold text-primary mb-4">
                      {bedroom.name}
                    </h3>
                    <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                      {bedroom.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {bedroom.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          <span className="text-foreground/80 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities Grid */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
                In-Villa Amenities
              </h2>
              <div className="w-16 h-1 bg-secondary mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {amenities.map((amenity, index) => {
                const Icon = amenity.icon;
                return (
                  <div
                    key={index}
                    className="p-6 bg-white rounded-xl border border-border hover:shadow-lg transition-shadow"
                  >
                    <div className="mb-4 inline-block p-3 bg-secondary/10 rounded-lg">
                      <Icon size={28} className="text-secondary" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-primary mb-2">
                      {amenity.title}
                    </h3>
                    <p className="text-foreground/70">{amenity.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Facilities Details */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
                Complete Facilities
              </h2>
              <div className="w-16 h-1 bg-secondary mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="p-8 bg-gradient-to-br from-white to-blue-50 rounded-xl border border-border"
                >
                  <h3 className="text-2xl font-serif font-bold text-primary mb-6">
                    {facility.title}
                  </h3>
                  <ul className="space-y-3">
                    {facility.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                        <span className="text-foreground/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bathrooms Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container-custom">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4 text-center">
              Luxury Bathrooms
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="p-8 bg-white rounded-xl border border-border">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F21647635e9b5466fa9bbe9f38773f576%2Fed524e451d5449259247ce3658852d8a?format=webp&width=800"
                  alt="Bathroom"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-serif font-bold text-primary mb-3">
                  Modern Design
                </h3>
                <p className="text-foreground/70">
                  Each bathroom features contemporary design with premium fixtures and high-quality amenities for maximum comfort.
                </p>
              </div>

              <div className="p-8 bg-white rounded-xl border border-border">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F21647635e9b5466fa9bbe9f38773f576%2F0c4192ebda7048999fac4558e741c8be?format=webp&width=800"
                  alt="Amenities"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-serif font-bold text-primary mb-3">
                  Premium Toiletries
                </h3>
                <p className="text-foreground/70">
                  All bathrooms are equipped with complimentary luxury toiletries, soft towels, and modern rainfall showers.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
