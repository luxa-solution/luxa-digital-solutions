import About from "@/components/About";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="">
        {/* About Content */}
        <About />
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
