import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center">
        <div className="container-custom text-center">
          <h1 className="text-6xl md:text-7xl font-serif font-bold text-primary mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Page Not Found
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            We couldn't find the page you're looking for. It might have been moved or doesn't exist yet.
          </p>
          <Link to="/" className="button-primary inline-block">
            Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
