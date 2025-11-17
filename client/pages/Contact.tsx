import Layout from "@/components/Layout";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  MessageCircle,
  Clock,
} from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      value: "+94 778 090 900",
      link: "tel:+94778090900",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@villathus.com",
      link: "mailto:info@villathus.com",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+94 778 090 900",
      link: "https://wa.me/94778090900",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Ahangama, Galle, Sri Lanka",
      link: "/location",
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com",
      color: "hover:text-pink-500",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com",
      color: "hover:text-blue-600",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/94123456789",
      color: "hover:text-green-500",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen pb-20">
        {/* Hero Section */}
        <section className="pt-20 pb-12 bg-gradient-to-b from-blue-50 to-white">
          <div className="container-custom">
            <h1 className="text-5xl font-serif font-bold text-primary mb-4">
              Get in Touch
            </h1>
            <div className="w-16 h-1 bg-secondary mb-6"></div>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Have questions about your stay? Need more information? We're here to help!
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <a
                    key={index}
                    href={method.link}
                    target={method.title === "Location" ? undefined : "_blank"}
                    rel={
                      method.title === "Location"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="p-8 bg-gradient-to-br from-white to-blue-50 rounded-xl border border-border hover:shadow-lg hover:border-secondary transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-4 bg-secondary/10 rounded-lg group-hover:bg-secondary group-hover:text-white transition-all flex-shrink-0">
                        <Icon size={32} className="text-secondary group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-xl font-serif font-bold text-primary mb-2">
                          {method.title}
                        </h3>
                        <p className="text-foreground/70 text-lg font-semibold">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Operating Hours */}
            <div className="bg-gradient-to-r from-primary to-ocean text-white p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Clock size={32} />
                <h3 className="text-2xl font-serif font-bold">Operating Hours</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div>
                  <p className="font-semibold mb-2">Reception</p>
                  <p className="opacity-90">24/7 Available</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Phone Support</p>
                  <p className="opacity-90">8:00 AM - 10:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Concierge Service</p>
                  <p className="opacity-90">24/7 Available</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container-custom text-center">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">
              Follow Us
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto mb-12"></div>

            <div className="flex justify-center gap-8 mb-8">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-white rounded-lg border border-border hover:border-secondary transition-all duration-300 ${social.color}`}
                    title={social.name}
                  >
                    <Icon size={32} />
                  </a>
                );
              })}
            </div>

            <p className="text-foreground/70 max-w-2xl mx-auto">
              Stay updated with the latest news, special offers, and beautiful moments from Villa Thús. Follow us on social media for exclusive content and behind-the-scenes glimpses.
            </p>
          </div>
        </section>

        {/* Quick Contact Form */}
        <section className="py-20 bg-white">
          <div className="container-custom max-w-2xl">
            <h2 className="text-4xl font-serif font-bold text-primary mb-8">
              Send us a Message
            </h2>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tell us more..."
                ></textarea>
              </div>

              <button type="submit" className="button-primary w-full text-lg py-4">
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Owner Info */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container-custom max-w-2xl">
            <h2 className="text-4xl font-serif font-bold text-primary mb-8">
              Our Founder
            </h2>

            <div className="bg-white p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                Mr. Nalin Samarasinghe
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                With decades of hospitality expertise and a passion for creating extraordinary experiences, Mr. Nalin Samarasinghe founded Villa Thús as a testament to luxury, comfort, and Sri Lankan warmth. His vision is to provide guests with an unforgettable escape that combines the best of nature, service, and elegance.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
