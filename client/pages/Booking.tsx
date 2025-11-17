import Layout from "@/components/Layout";
import { useState } from "react";
import { MessageCircle, Star, Check, Users, DoorOpen, Wifi, Wind } from "lucide-react";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking request:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        whatsapp: "",
        checkIn: "",
        checkOut: "",
        guests: "1",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  const amenities = [
    { icon: Wifi, label: "Free WiFi" },
    { icon: Wind, label: "Air Conditioning" },
    { icon: DoorOpen, label: "3 Bedrooms" },
    { icon: Users, label: "Up to 8 Guests" },
  ];

  return (
    <Layout>
      <div className="min-h-screen pb-20">
        {/* Header Section */}
        <section className="pt-20 pb-12 bg-gradient-to-b from-blue-50 to-white">
          <div className="container-custom">
            <h1 className="text-5xl font-serif font-bold text-primary mb-4">
              Reserve Your Stay
            </h1>
            <div className="w-16 h-1 bg-secondary mb-6"></div>
            <p className="text-lg text-foreground/70">
              Book Villa Thús for your perfect tropical escape in Ahangama
            </p>
          </div>
        </section>

        {/* Booking Section */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Booking Form - Left Side */}
              <div className="lg:col-span-2">
                {submitted && (
                  <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-xl">
                    <div className="flex items-center gap-3 text-green-800">
                      <Check size={24} className="text-green-600" />
                      <div>
                        <h3 className="font-semibold mb-1">Booking Request Received!</h3>
                        <p className="text-sm">We'll contact you within 24 hours to confirm your reservation.</p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Your Details Section */}
                  <div className="bg-white p-8 rounded-xl border border-border">
                    <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                      Your Details
                    </h2>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="John Smith"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          WhatsApp / Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="whatsapp"
                          value={formData.whatsapp}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="+44 123 456 7890"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Dates & Guests Section */}
                  <div className="bg-white p-8 rounded-xl border border-border">
                    <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                      Your Dates & Guests
                    </h2>

                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Check-in *
                          </label>
                          <input
                            type="date"
                            name="checkIn"
                            value={formData.checkIn}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Check-out *
                          </label>
                          <input
                            type="date"
                            name="checkOut"
                            value={formData.checkOut}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          Number of Guests
                        </label>
                        <select
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="1">1 Guest</option>
                          <option value="2">2 Guests</option>
                          <option value="3">3 Guests</option>
                          <option value="4">4 Guests</option>
                          <option value="5">5 Guests</option>
                          <option value="6">6 Guests</option>
                          <option value="7">7 Guests</option>
                          <option value="8">8 Guests</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div className="bg-white p-8 rounded-xl border border-border">
                    <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                      Special Requests
                    </h2>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Message (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Tell us about any special requests, dietary preferences, or additional services you need..."
                      ></textarea>
                      <p className="text-xs text-foreground/60 mt-2">
                        Let us know about late check-in, airport transfers, special celebrations, or any other requests!
                      </p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full button-primary text-lg py-4 font-semibold"
                  >
                    Request Booking
                  </button>
                </form>
              </div>

              {/* Right Sidebar */}
              <div className="space-y-6">
                {/* Property Summary Card */}
                <div className="bg-white rounded-xl border border-border overflow-hidden sticky top-24">
                  <div className="p-6 border-b border-border bg-gradient-to-r from-primary/5 to-ocean/5">
                    <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                      Villa Thús
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {Array(5)
                          .fill(null)
                          .map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className="fill-secondary text-secondary"
                            />
                          ))}
                      </div>
                      <span className="text-sm font-semibold text-primary">4.9/5</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-6">
                    {/* Amenities */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">What's included:</h4>
                      <div className="space-y-2">
                        {amenities.map((amenity, idx) => {
                          const Icon = amenity.icon;
                          return (
                            <div key={idx} className="flex items-center gap-3">
                              <Check size={18} className="text-secondary flex-shrink-0" />
                              <span className="text-sm text-foreground/80">
                                {amenity.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Pricing Info */}
                    <div className="border-t border-border pt-4">
                      <h4 className="font-semibold text-foreground mb-3">Pricing Information:</h4>
                      <div className="space-y-2 text-sm text-foreground/70">
                        <p>✓ Seasonal rates available</p>
                        <p>✓ Early bird discounts (3+ months)</p>
                        <p>✓ Group & corporate packages</p>
                        <p>✓ Flexible cancellation policy</p>
                      </div>
                    </div>

                    {/* Quick Contact */}
                    <div className="border-t border-border pt-4">
                      <h4 className="font-semibold text-foreground mb-3">Quick Contact:</h4>
                      <div className="space-y-2">
                        <a
                          href="https://wa.me/94778090900?text=Hi%20Villa%20Thús%2C%20I%20have%20a%20question%20about%20booking"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors text-sm"
                        >
                          💬 Chat on WhatsApp
                        </a>
                        <a
                          href="tel:+94778090900"
                          className="block w-full text-center border-2 border-primary text-primary hover:bg-primary hover:text-white py-3 rounded-lg font-semibold transition-colors text-sm"
                        >
                          📞 Call Us
                        </a>
                      </div>
                    </div>

                    {/* Booking.com Link */}
                    <div className="border-t border-border pt-4">
                      <p className="text-xs text-foreground/60 mb-2">Also available on:</p>
                      <a
                        href="https://www.booking.com/hotel/lk/villa-thus-3-ensuit-villa-with-private-pool.en-gb.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center bg-blue-50 text-primary border border-blue-200 py-2 rounded-lg text-sm font-semibold hover:bg-blue-100 transition-colors"
                      >
                        Booking.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Property Features */}
                <div className="bg-white p-6 rounded-xl border border-border">
                  <h4 className="font-semibold text-foreground mb-4">Property Highlights:</h4>
                  <ul className="space-y-3 text-sm text-foreground/70">
                    <li className="flex gap-2">
                      <Check size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                      <span>3 en-suite bedrooms</span>
                    </li>
                    <li className="flex gap-2">
                      <Check size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                      <span>Private infinity pool</span>
                    </li>
                    <li className="flex gap-2">
                      <Check size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                      <span>Lush tropical garden</span>
                    </li>
                    <li className="flex gap-2">
                      <Check size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                      <span>Direct beach access</span>
                    </li>
                    <li className="flex gap-2">
                      <Check size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                      <span>Housekeeping service</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
