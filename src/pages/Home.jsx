import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { MessageCircle, Handshake, Leaf, Check, ArrowRight, Facebook, Instagram } from 'lucide-react';
import WhatsappIcon from '../components/WhatsappIcon';
import { useNavigate, Link } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();

    const stats = [
        { value: "500+", label: "Sustainable Products" },
        { value: "98%", label: "Customer Satisfaction" },
        { value: "50+", label: "Partner Farms" },
        { value: "24/7", label: "Customer Support" },
    ];

    const socialLinks = [
        { icon: Facebook, href: 'https://www.facebook.com/share/1BYqXzx67X/', label: 'Facebook' },
        { icon: Instagram, href: 'https://www.instagram.com/yes_foodandrecycling?igsh=MTAwNTMzMWszdG9zbw== ', label: 'Instagram' },
        { icon: WhatsappIcon, href: 'https://wa.me/message/MPULXYPLE7LOJ1 ', label: 'WhatsApp' },
    ];

    const features = [
        "Organic farming support & certification",
        "Zero-waste packaging solutions",
        "Carbon-neutral shipping options",
        "Local community partnerships",
    ];

    const cards = [
        {
            title: "Unprocessed Products & Seeds",
            desc: "Fresh agricultural products directly from farms, including raw grains, seeds, and organic produce",
            img: '/Cocoa.jpg',
            icon: "leaf",
            path: "/unprocessed" // Add path for navigation
        },
        {
            title: "Processed Agricultural Products",
            desc: "Value-added agricultural products, processed foods, and packaged goods ready for market",
            img: '/Garri.jpg',
            icon: "box",
            path: "/processed" // optional: you can set different routes
        },
        {
            title: "Recycling & Recyclable Materials",
            desc: "Sustainable materials and recycling solutions for agricultural and commercial use",
            img: '/Recycle.jpg',
            icon: "recycle",
            path: "/recycling"
        },
    ];


    const Icon = ({ name }) => {
        if (name === "leaf")
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 15s6-6 12-6c0 0-1 6-6 11C6 20 3 15 3 15z" />
                </svg>
            );
        if (name === "box")
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9-4 9 4v10l-9 4-9-4V7z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 4 9-4" />
                </svg>
            );
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.49 9.37A9 9 0 1112 3v4l3-3-3-3v4a5 5 0 100 10h1" />
            </svg>
        );
    };
    return (
        <>
            <Navbar />

            <section className="relative w-full h-screen overflow-hidden">
                {/* Background image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://i.pinimg.com/736x/f7/a5/2e/f7a52eead032efa466b40ed61c7475e6.jpg')",
                        filter: 'brightness(1.08) contrast(1.03)'
                    }}
                    aria-hidden="true"
                />


                {/* Green tinted overlay to match mockup (reduced opacity so image shows through more) */}
                <div className="absolute inset-0 bg-green-500/30 justify-center" />


                {/* Content container */}
                <div className="relative z-10 max-w-6xl mt-16 lg:px-16 h-full flex flex-col ">
                    {/* badge */}
                    <div className="mb-8">
                        <span className="inline-block bg-green-100/40 text-green-900 rounded-full px-4 py-2 text-sm font-medium backdrop-blur">
                            Sustainable • Trusted • Natural
                        </span>
                    </div>


                    {/* Heading */}
                    <h1 className="text-white font-extrabold leading-tight tracking-tight text-4xl sm:text-5xl lg:text-6xl max-w-4xl">
                        Your Trusted Partner in
                        <span className="block mt-2 text-green-100 text-5xl sm:text-6xl lg:text-7xl font-extrabold">
                            Agro & Recycling
                        </span>
                        <span className="block text-green-100 text-5xl sm:text-6xl lg:text-7xl font-extrabold">Marketplace</span>
                    </h1>


                    {/* Subheading */}
                    <p className="mt-6 text-green-50 max-w-2xl text-lg sm:text-xl">
                        Connect with quality unprocessed & processed agricultural products, seeds, and sustainable recyclable
                        materials.
                    </p>


                    {/* Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link
                            to="/unprocessed"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-green-500 text-white font-semibold shadow-md hover:brightness-105 transition"
                        >
                            Explore Products
                        </Link>


                        <button
                            onClick={() => navigate('/enquiry')}
                            className="inline-flex items-center justify-center px-6 py-3 rounded-2xl border border-green-200 text-green-100 font-semibold bg-white/5 backdrop-blur hover:bg-white/10 transition"
                        >
                            Learn More
                        </button>
                    </div>


                    {/* Spacer so the small scroll indicator sits lower like the mockup */}
                    <div className="flex-1" />

                </div>

                {/* Scroll indicator centered within the content container */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="flex flex-col items-center text-green-100/80">
                        <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        <span className="text-sm mt-2">Scroll to explore</span>
                    </div>
                </div>


                {/* Decorative gradient at the bottom to fade the image into content below */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/40 via-transparent to-transparent pointer-events-none" />
            </section>

            <div className="text-center my-8">
                <p className=' text-lg mt-4 text-green-400'>Our Categories</p>
                <h1 className=' text-5xl mt-5 font-extrabold text-green-600'>Explore Our Three Main Sections</h1>
                <p className=' text-lg mt-5 text-green-400'>From farm to table, seeds to solutions</p>
            </div>



            <div className="py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {cards.map((c, idx) => (
                            <article
                                key={idx}
                                className="bg-white rounded-2xl shadow-sm overflow-hidden border border-transparent hover:shadow-lg transition-shadow duration-200 flex flex-col cursor-pointer"
                                onClick={() => c.path && navigate(c.path)} // Optional: make whole card clickable
                            >
                                {/* Image */}
                                <div className="relative h-56 sm:h-64 md:h-48 lg:h-56 w-full overflow-hidden">
                                    <img
                                        src={c.img}
                                        alt={c.title}
                                        className="w-full h-full object-cover rounded-t-2xl"
                                    />
                                </div>
                                {/* Content */}
                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="inline-flex items-center gap-3 mb-4">
                                            <span className="bg-green-100 text-green-700 p-3 rounded-lg inline-flex">
                                                <Icon name={c.icon} />
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-semibold text-green-800 mb-3">
                                            {c.title}
                                        </h3>
                                        <p className="text-green-600 leading-relaxed">
                                            {c.desc}
                                        </p>
                                    </div>
                                    <div className="mt-6">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation(); // Prevents double navigation if card is also clickable
                                                navigate(c.path || '/');
                                            }}
                                            className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full shadow-sm hover:bg-green-700 transition-colors"
                                        >
                                            <span>Explore</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>






            <p className=' text-5xl mt- text-center my-8 font-extrabold text-green-600'>Why Choose Our Marketplace</p>

            <section className="py-16 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="w-full h-full overflow-hidden rounded-2xl">
                        <img
                            src="/FreshCo.jpg"
                            alt="Fresh produce"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>


                    {/* Text Content */}
                    <div>
                        {/* Icon */}
                        <div className="bg-green-100 p-4 rounded-xl inline-flex mb-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-8 h-8 text-green-600"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>


                        <h2 className="text-3xl font-semibold text-green-700 mb-4">
                            Quality Guaranteed
                        </h2>


                        <p className="text-gray-600 leading-relaxed mb-6">
                            Every product meets rigorous standards. We partner directly with certified
                            suppliers to ensure freshness, authenticity, and safety for all agricultural
                            goods and materials.
                        </p>


                        {/* Bullet Points */}
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex gap-3 items-start">
                                <span className="text-green-600 mt-1">•</span>
                                <span>Certified quality inspection process</span>
                            </li>


                            <li className="flex gap-3 items-start">
                                <span className="text-green-600 mt-1">•</span>
                                <span>Direct sourcing from trusted farms</span>
                            </li>


                            <li className="flex gap-3 items-start">
                                <span className="text-green-600 mt-1">•</span>
                                <span>Freshness guarantee on all products</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>


            <div className="min-h-screen py-6 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Text Content */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-orange-100 rounded-xl">
                                    <MessageCircle className="w-8 h-8 text-orange-600" />
                                </div>
                                <h2 className="text-4xl font-bold text-gray-900">Direct Connect</h2>
                            </div>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                Seamlessly connect with suppliers and buyers through integrated social channels.
                                Order, enquire, and request quotes instantly via your preferred platform.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "Real-time communication channels",
                                    "Quick response guarantee",
                                    "Multi-platform integration"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-4">
                                        <div className="w-2 h-2 bg-green-600 rounded-full" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Column - Image with Caption */}
                        <div className="relative">
                            <div className="rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="/Handshake.jpg"
                                    alt="Farmers shaking hands at market"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                                    {/* <p className="text-white text-xl font-semibold flex items-center gap-3">
                                        <Handshake className="w-7 h-7" />
                                        Farmers & Suppliers: Building Community Together
                                    </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="min-h-screen py-8 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Left: Image with rounded green background */}
                        <div className="order-2 lg:order-1">
                            <div className="relative">
                                <div className="absolute inset-0 bg-green-200 rounded-3xl blur-3xl opacity-60 -z-10 translate-y-10 translate-x-6"></div>
                                <div className="bg-gradient-to-br rounded-3xl p-12 shadow-xl">
                                    <img
                                        src="/Ecoo.jpg"
                                        alt="Hands holding a seedling in biodegradable pot"
                                        className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right: Text Content */}
                        <div className="order-1 lg:order-2 space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-green-100 rounded-2xl">
                                    <Leaf className="w-8 h-8 text-green-600" />
                                </div>
                                <h2 className="text-4xl font-bold text-gray-900">
                                    Eco-Friendly Approach
                                </h2>
                            </div>

                            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                                Committed to sustainability. Our recycling section promotes circular economy,
                                while all packaging and logistics prioritize environmental responsibility.
                            </p>

                            <ul className="space-y-5">
                                {[
                                    "Recycled and recyclable materials support",
                                    "Carbon-neutral shipping options",
                                    "Sustainable farming partnerships"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <div className="mt-2 w-2.5 h-2.5 bg-green-600 rounded-full flex-shrink-0" />
                                        <span className="text-gray-700 font-medium text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <section className="relative bg-gradient-to-b from-green-50 to-white py-20 overflow-hidden">
                {/* Subtle wavy background pattern */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-green-200 rounded-full blur-3xl"></div>
                    <div className="absolute top-32 right-20 w-96 h-96 bg-emerald-200 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-teal-100 rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                        <Leaf className="w-4 h-4" />
                        Sustainability Commitment
                    </div>

                    {/* Heading & Description */}
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-8">
                            <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                                Committed to <span className="text-green-600">Sustainable Growth</span>
                            </h2>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                We partner with local farmers and recycling initiatives to promote sustainable agricultural practices
                                and circular economy principles, ensuring a healthier planet for future generations.
                            </p>

                            {/* Features with checkmarks */}
                            <ul className="space-y-4">
                                {features.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="mt-1 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Check className="w-4 h-4 text-green-600" />
                                        </div>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <button onClick={() => navigate('/enquiry')} className="mt-8 inline-flex items-center gap-2 bg-green-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-700 transition shadow-lg hover:shadow-xl">
                                Learn More
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    <div className="text-5xl font-bold text-green-600 mb-2">
                                        {stat.value}
                                    </div>
                                    <p className="text-gray-600 font-medium">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative bg-gradient-to-br from-green-200 to-green-400 rounded-3xl overflow-hidden mx-4 md:mx-8 lg:mx-16 my-16 shadow-2xl">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 right-20 w-96 h-96 bg-green-300 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 left-32 w-80 h-80 bg-emerald-300 rounded-full blur-3xl"></div>
                </div>

                <div className="relative px-8 py-16 md:py-20 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10">
                    {/* Left: Text Content */}
                    <div className="text-center lg:text-left max-w-2xl">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Ready to Start Your <br />
                            <span className="text-green-700">Agricultural Journey?</span>
                        </h2>

                        <p className="mt-6 text-lg md:text-xl text-gray-700 font-medium">
                            Join our community today and explore quality products, sustainable solutions,
                            and trusted partnerships.
                        </p>
                    </div>

                    {/* Right: Buttons + Social */}
                    <div className="flex flex-col items-center lg:items-end gap-10">
                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="/"
                                className="inline-flex items-center gap-2 bg-green-600 text-white font-bold px-8 py-4 rounded-full hover:bg-green-700 transition shadow-lg hover:shadow-xl"
                            >
                                Get Started
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <Link
                                to="/enquiry"
                                className="inline-flex items-center gap-2 text-green-800 font-semibold px-8 py-4 rounded-full border-2 border-green-800 hover:bg-green-800 hover:text-white transition"
                            >
                                Contact Us
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>

                        {/* Social Media */}
                        <div className="text-center">
                            <p className="text-gray-700 text-sm mb-4">Connect with us on social media</p>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={social.href}
                                            aria-label={social.label}
                                            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-green-700 hover:bg-green-600 hover:text-white transition shadow-md hover:shadow-lg"
                                        >
                                            <Icon className="w-6 h-6" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    )
}

export default Home