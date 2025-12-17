import React from 'react';
import { Leaf, Facebook, Instagram } from 'lucide-react';
import WhatsappIcon from './WhatsappIcon';
import { Link } from 'react-router-dom';

export default function Footer() {
    const socialLinks = [
        { href: 'https://www.facebook.com/share/1BYqXzx67X/', Icon: Facebook, label: 'Facebook' },
        { href: ' https://www.instagram.com/yes_foodandrecycling?igsh=MTAwNTMzMWszdG9zbw== ', Icon: Instagram, label: 'Instagram' },
        { href: ' https://wa.me/message/MPULXYPLE7LOJ1 ', Icon: WhatsappIcon, label: 'WhatsApp' },
    ];
        // Twitter and LinkedIn removed as requested
    return (
        <footer className="bg-green-50 border-t border-green-100">
            <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">

                    {/* Brand & Description */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-100 rounded-lg">
                                <Leaf className="w-7 h-7 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-green-700">Agro & Recycling</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            Your trusted marketplace for agricultural products and recyclable materials.
                        </p>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-5">Products</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/unprocessed" className="text-gray-600 hover:text-green-600 transition">
                                    Unprocessed Products
                                </Link>
                            </li>
                            <li>
                                <Link to="/processed" className="text-gray-600 hover:text-green-600 transition">
                                    Processed Products
                                </Link>
                            </li>
                            <li>
                                <Link to="/recycling" className="text-gray-600 hover:text-green-600 transition">
                                    Recycling Materials
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-5">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Home',].map((item) => (
                                <li key={item}>
                                    <a href="/" className="text-gray-600 hover:text-green-600 transition">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div className="space-y-5">
                        <div>
                            <h4 className="font-bold text-gray-900 mb-3">Contact</h4>
                            <p className="text-gray-600">
                                Reach us via social media for orders, requests, and enquiries.
                            </p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-3">
                            {socialLinks.map(({ href, Icon, label }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-green-600 hover:text-white text-green-700 transition"
                                    aria-label={label}
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-green-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© 2025 Agro & Recycling Marketplace. All rights reserved.</p>
                    <p className="mt-3 md:mt-0">Made with love for a greener future</p>
                </div>
            </div>
        </footer>
    );
}