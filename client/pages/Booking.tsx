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
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - for now just log
    console.log("Booking request:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      whatsapp: "",
      checkIn: "",
      checkOut: "",
      message: "",
    });
    alert("Thank you for your inquiry! We will contact you soon.");
  };

  return (
    <Layout>
      <div className="min-h-screen pt-20 pb-20">
        <div className="container-custom">
          <h1 className="text-5xl font-serif font-bold text-primary mb-4 mt-8">
            Book Your Stay
          </h1>
          <div className="w-16 h-1 bg-secondary mb-12"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl border border-border shadow-lg"
              >
                <div className="mb-6">
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
                    placeholder="Your name"
                  />
                </div>

                <div className="mb-6">
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
                    placeholder="your@email.com"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+94 123 456 789"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Check-in Date *
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
                      Check-out Date *
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

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Special Requests or Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us about your preferences or special requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="button-primary w-full text-lg py-4 mb-4"
                >
                  Send Booking Request
                </button>

                <p className="text-sm text-foreground/60 text-center">
                  We'll get back to you within 24 hours
                </p>
              </form>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              {/* WhatsApp Contact */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-green-500 rounded-lg text-white">
                    <MessageCircle size={24} />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-green-900">
                    WhatsApp Booking
                  </h3>
                </div>
                <p className="text-green-800 mb-4">
                  Get instant responses and quick booking confirmation
                </p>
                <a
                  href="https://wa.me/94778090900?text=Hi%20Villa%20Thús%2C%20I%20would%20like%20to%20book%20a%20stay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>

              {/* Pricing Info */}
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-xl border border-blue-200">
                <h3 className="text-xl font-serif font-bold text-primary mb-4">
                  Pricing
                </h3>
                <div className="space-y-3 text-foreground/70">
                  <p className="text-sm">
                    Seasonal rates and package deals available. Contact us for custom quotes.
                  </p>
                  <p className="text-sm">
                    Early bird discounts for bookings made 3+ months in advance.
                  </p>
                  <p className="text-sm">
                    Group and corporate packages available.
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white p-8 rounded-xl border border-border">
                <h3 className="text-xl font-serif font-bold text-primary mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-foreground/60 mb-1">Phone</p>
                    <a
                      href="tel:+94778090900"
                      className="text-primary font-semibold hover:text-ocean"
                    >
                      +94 778 090 900
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60 mb-1">Email</p>
                    <a
                      href="mailto:booking@villathus.com"
                      className="text-primary font-semibold hover:text-ocean break-all"
                    >
                      booking@villathus.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
