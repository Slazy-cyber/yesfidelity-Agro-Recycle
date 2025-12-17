import React from 'react'
import Navbar from '../components/Navbar'
import ProcessedCards from '../components/ProcessedCards'
import Footer from '../components/Footer'

const ProcessedProducts = () => {
  return (
    <>
      <Navbar />
      <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/Garri.jpg')`,
        }}
      >
        {/* Warm Garri overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/40 via-amber-700/30 to-amber-50/8"></div>

        <div className="relative z-10 max-w-7xl  px-6 py-24 lg:flex  lg:justify-between">
          <div className="max-w-3xl">
            {/* Badge */}
            <span className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-full text-sm  shadow-lg">
              Processed Products
            </span>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
              Quality Processed
              <br />
              Agricultural Products
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-100 mb-12 max-w-2xl leading-relaxed">
              From farm to table, explore our selection of carefully processed agricultural goods ready for market.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <a
                href="#browse-products"
                className="px-10 py-4 bg-green-600 text-white font-semibold text-lg rounded-full hover:bg-green-700 transition shadow-xl hover:shadow-2xl"
              >
                Browse Products
              </a>
              <a
                href="/enquiry"
                className="px-10 py-4 bg-transparent text-white border-2 border-white font-semibold text-lg rounded-full hover:bg-white hover:text-gray-900 transition shadow-xl"
              >
                Make Enquiry
              </a>
            </div>
          </div>
        </div>
      </section>
      <ProcessedCards />
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          {/* Chat Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-full mb-8 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 2.66 1.29 5.02 3.28 6.48l-1.28 4.52 4.72-1.24C10.2 21.9 11.08 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
              <path fill="none" d="M0 0h24v24H0z" />
            </svg>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Can’t Find What You Need?
          </h2>

          {/* Description */}
          <p className="text-lg text-green-700 max-w-2xl mx-auto mb-12 leading-relaxed">
            We’re here to help. Get in touch with your specific requirements and our team will provide personalized assistance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a
              href="/enquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-green-600 text-white font-semibold text-lg rounded-full hover:bg-green-700 transition shadow-lg flex items-center gap-3"
            >
              Make Enquiry
            </a>
            <a
              href="/contact"
              className="px-10 py-4 bg-white text-green-600 border-2 border-green-600 font-semibold text-lg rounded-full hover:bg-green-50 transition shadow-lg flex items-center gap-3"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Contact Us
            </a>
          </div>

          {/* Feature Highlights */}
          <div className="flex flex-col sm:flex-row justify-center gap-10 text-green-700 font-medium">
            <div className="flex items-center gap-3">

              <span>Quick Response</span>
            </div>
            <div className="flex items-center gap-3">

              <span>Expert Support</span>
            </div>
            <div className="flex items-center gap-3">

              <span>Custom Orders</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ProcessedProducts
