import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Layout>
      <div className="min-h-screen pt-20">
        <div className="container-custom py-20">
          <h1 className="text-5xl font-serif font-bold text-primary mb-8">
            About Villa Thús
          </h1>
          <div className="w-16 h-1 bg-secondary mb-12"></div>

          <div className="max-w-3xl mx-auto space-y-8 text-foreground/80 text-lg leading-relaxed mb-12">
            <p>
              This page is currently being developed. It will showcase the villa's history, the owner Mr. Nalin Samarasinghe's vision, and the location benefits of Ahangama.
            </p>
            <p>
              Coming soon: Villa heritage, owner's story, Ahangama's charm, nearby attractions, and what makes us special.
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
