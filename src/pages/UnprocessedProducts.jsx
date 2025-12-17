import React from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import ProductCards from '../components/ProductCards';
import { Leaf, Sun, Users, Heart, Check, Facebook, Instagram } from 'lucide-react';
import WhatsappIcon from '../components/WhatsappIcon';
import Footer from '../components/Footer';

const UnprocessedProducts = () => {
  const navigate = useNavigate();
  const features = [
    {
      icon: Leaf,
      color: 'bg-green-100',
      title: '100% Natural',
      description: 'No additives or chemicals, pure natural goodness.',
    },
    {
      icon: Sun,
      color: 'bg-orange-100',
      title: 'Farm Fresh',
      description: 'Harvested at peak ripeness for maximum nutrition.',
    },
    {
      icon: Users,
      color: 'bg-emerald-100',
      title: 'Direct from Farms',
      description: 'Support local farmers and community.',
    },
    {
      icon: Heart,
      color: 'bg-amber-100',
      title: 'Quality Assured',
      description: 'Rigorous testing and quality control.',
    },
  ];
  const trustPoints = [
    'Certified organic',
    'Rigorous testing',
    'Transparent sourcing',
  ];
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/1BYqXzx67X/', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/yes_foodandrecycling?igsh=MTAwNTMzMWszdG9zbw== ', label: 'Instagram' },
    { icon: WhatsappIcon, href: 'https://wa.me/message/MPULXYPLE7LOJ1 ', label: 'WhatsApp' },
  ];

  return (
    <>
      <Navbar />
      <div className="relative h-screen w-full bg-green-900 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/Cocoa.jpg')`,
          }}
        >
          {/* Warm cocoa gradient overlay for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/40 via-amber-700/25 to-amber-50/8" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-7xl ">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full border border-white/30 mb-8">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
            Unprocessed & Natural
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl">
            Unprocessed Agricultural<br />
            <span className="text-green-300">Products & Seeds</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg md:text-xl text-green-100 max-w-2xl leading-relaxed">
            Discover our premium selection of fresh, unprocessed agricultural products
            and high-quality seeds sourced directly from trusted farms.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => document.getElementById('product-cards')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Browse Products
            </button>
            <button onClick={() => navigate('/enquiry')} className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium rounded-full border border-white/30 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Optional subtle sun ray effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl animate-pulse" />
        </div>
      </div>
      <ProductCards />
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Choose Unprocessed Products?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Experience the natural goodness and authenticity of farm-fresh unprocessed agricultural
            products and premium quality seeds.
          </p>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Icon Circle */}
                <div className={`w-20 h-20 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <feature.icon className="w-10 h-10 text-gray-700" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-green-100 rounded-3xl overflow-hidden shadow-xl">
            {/* Left Content */}
            <div className="p-10 md:p-16 lg:p-20">
              <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6 leading-tight">
                Quality You Can Trust
              </h2>

              <p className="text-lg text-green-700 mb-10 leading-relaxed">
                Every product is carefully selected and quality-checked to ensure you receive the best nature has to offer.
              </p>

              <ul className="space-y-5">
                {trustPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-green-800 font-medium text-lg">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Image */}
            <div className="relative h-96 lg:h-full min-h-96">
              <img
                src="/Farmer.jpg"
                alt="Farmer watering fresh organic vegetables"
                className="absolute inset-0 w-full h-full object-cover rounded-tl-3xl lg:rounded-tr-none lg:rounded-r-3xl lg:rounded-l-none"
              />
              {/* Optional overlay for better text contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:hidden"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-6 leading-tight">
            Ready to Order Fresh Unprocessed Products?
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-green-700 mb-12 max-w-2xl mx-auto">
            Get in touch with us through your preferred channel. We're here to help with orders, requests, and enquiries.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a
              href="/enquiry"
              className="px-10 py-4 bg-green-600 text-white font-semibold text-lg rounded-full hover:bg-green-700 transition shadow-lg"
            >
              Place an Order
            </a>
            <a
              href="/enquiry"
              className="px-10 py-4 bg-white text-green-600 border-2 border-green-600 font-semibold text-lg rounded-full hover:bg-green-50 transition shadow-lg"
            >
              Request Quote
            </a>
          </div>

          {/* Divider Line */}
          <div className="w-full max-w-xs mx-auto border-t border-green-200 mb-10"></div>

          {/* Social Media Text */}
          <p className="text-green-700 font-medium mb-8">
            Connect with us on social media
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-14 h-14 rounded-full border-2 border-green-600 flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition group"
              >
                <social.icon className="w-6 h-6 group-hover:scale-110 transition" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default UnprocessedProducts
