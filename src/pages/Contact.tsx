import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="">
        {/* Contact Content */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
