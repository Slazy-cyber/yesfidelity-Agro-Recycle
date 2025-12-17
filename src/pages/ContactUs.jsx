import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const phoneNumber = "2347075205181"; 

    const whatsappText = `Hello, my name is ${name}.%0AEmail: ${email}.%0A%0A${message}`;

    window.open(
      `https://wa.me/${phoneNumber}?text=${whatsappText}`,
      "_blank"
    );
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 px-3 sm:px-4 py-6 sm:py-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden"
      >
        {/* LEFT SIDE */}
        <div className="bg-green-700 text-white p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold mb-3 sm:mb-4">Contact Us</h2>
            <p className="text-sm sm:text-base text-green-100 mb-4 sm:mb-6 leading-relaxed">
              Reach out for agro products, recycling services, or partnerships.
            </p>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start sm:items-center gap-3">
                <Phone size={16} className="flex-shrink-0 mt-1 sm:mt-0" />
                <span className="text-sm sm:text-base break-words">+2348135502388</span>
              </div>
              <div className="flex items-start sm:items-center gap-3">
                <Mail size={16} className="flex-shrink-0 mt-1 sm:mt-0" />
                <span className="text-sm sm:text-base break-all">fidelitymultiresourcesconcept@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="flex-shrink-0" />
                <span className="text-sm sm:text-base">Nigeria</span>
              </div>
            </div>
          </div>

          {/* SOCIALS */}
          <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8">
            <a
              href="https://wa.me/message/MPULXYPLE7LOJ1"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-green-700 p-2 sm:p-3 rounded-full hover:scale-110 transition"
            >
              <FaWhatsapp size={18} />
            </a>
            <a
              href="https://www.facebook.com/share/1BYqXzx67X/"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-green-700 p-2 sm:p-3 rounded-full hover:scale-110 transition"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/yes_foodandrecycling?igsh=MTAwNTMzMWszdG9zbw=="
              target="_blank"
              rel="noreferrer"
              className="bg-white text-green-700 p-2 sm:p-3 rounded-full hover:scale-110 transition"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
            Send a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full text-sm sm:text-base border border-gray-300 rounded-lg p-2.5 sm:p-3 focus:outline-none focus:ring-2 focus:ring-green-600 transition"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full text-sm sm:text-base border border-gray-300 rounded-lg p-2.5 sm:p-3 focus:outline-none focus:ring-2 focus:ring-green-600 transition"
            />

            <textarea
              name="message"
              rows="4"
              required
              placeholder="Your Message"
              className="w-full text-sm sm:text-base border border-gray-300 rounded-lg p-2.5 sm:p-3 focus:outline-none focus:ring-2 focus:ring-green-600 transition resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full text-sm sm:text-base bg-green-700 text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-green-800 transition active:scale-95"
            >
              Send Message on WhatsApp
            </button>
          </form>
        </div>
      </motion.div>
    </div>
    </>
  );
}
