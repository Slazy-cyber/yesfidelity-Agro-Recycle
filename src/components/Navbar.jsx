import React from 'react'
import { ChevronRight, Mail, RefreshCw, Settings, Leaf } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <header className="sticky top-0 z-50 lg:px-16 px-4 bg-white/80 backdrop-blur-sm flex flex-wrap text-green-600 items-center py-4 shadow-md">
                <div className="flex-1 flex justify-between items-center">
                    <Link to="/" className="flex items-center text-xl">
                        <img src="/yes-image.jpg" alt="Yes" className="h-8 w-auto mr-3" />
                        Yes-Fidelity-Multipurpose
                    </Link>
                </div>

                <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
                    <svg className="fill-current text-gray-900"
                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <title>menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </label>
                <input className="peer hidden" type="checkbox" id="menu-toggle" />

                <div className="hidden peer-checked:flex md:flex md:items-center md:w-auto w-full flex-col md:flex-row" id="menu">
                    <nav>
                        <ul className="flex flex-col md:flex-row items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                            <li>
                                <Link to="/unprocessed" className="md:p-4 py-3 text-lg text-green-600 px-0 flex items-center">
                                    <Leaf className="w-4 h-4 mr-2 text-green-600" />
                                    UnprocessedProducts & Seeds
                                </Link>
                            </li>
                            <li>
                                <Link to="/processed" className="md:p-4 py-3 text-lg text-green-600 px-0 flex items-center">
                                    <Settings className="w-4 h-4 mr-2 text-green-600" />
                                    ProcessedProducts
                                </Link>
                            </li>
                            <li>
                                <Link to="/recycling" className="md:p-4 py-3 text-lg text-green-600 px-0 flex items-center">
                                    <RefreshCw className="w-4 h-4 mr-2 text-green-600" />
                                    RecyclingMaterials
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="md:p-4 py-3 text-lg text-green-600 px-0 md:mb-0 mb-2 flex items-center">
                                    <Mail className="w-4 h-4 mr-2 text-green-600" />
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            {/* spacer kept at zero height since sticky keeps navbar in flow */}
            <div className="h-0" aria-hidden="true" />
        </>
    )
}

export default Navbar