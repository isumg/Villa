import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

export default function Gallery() {
  return (
    <Layout>
      <div className="min-h-screen pt-20">
        <div className="container-custom py-20">
          <h1 className="text-5xl font-serif font-bold text-primary mb-8">
            Gallery
          </h1>
          <div className="w-16 h-1 bg-secondary mb-12"></div>

          <div className="max-w-3xl mx-auto space-y-8 text-foreground/80 text-lg leading-relaxed mb-12">
            <p>
              This page is currently being developed. It will showcase a beautiful gallery of villa interiors, exteriors, pool, and breathtaking sunset views.
            </p>
            <p>
              Coming soon: High-quality image gallery with sunset views, interior shots, pool and garden, and nearby beach scenes.
            </p>
          </div>

          <Link to="/" className="button-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
}
