"use client";

import { useState, useEffect } from "react";
import {
    GraduationCap,
    Menu,
    X,
    Phone,
} from "lucide-react";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Facilities", href: "#facilities" },
    { label: "Admissions", href: "#admissions" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("#home");

    useEffect(() => {
        const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Find the section closest to the top of the viewport
            const scrollY = window.scrollY + 120; // offset for navbar height
            let currentSection = "#home";

            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (el && el.offsetTop <= scrollY) {
                    currentSection = `#${id}`;
                }
            }

            // If near bottom of page, activate the last nav link
            if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 100) {
                currentSection = navLinks[navLinks.length - 1].href;
            }

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // run once on mount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            id="navbar"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? "bg-white/95 backdrop-blur-md shadow-lg shadow-blue-900/5 py-2"
                : "bg-transparent py-4"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-3 group">
                        <div
                            className={`p-2 rounded-xl transition-all duration-300 ${isScrolled
                                ? "bg-gradient-to-br from-blue-600 to-blue-800"
                                : "bg-white/20 backdrop-blur-sm"
                                }`}
                        >
                            <GraduationCap
                                className={`w-7 h-7 transition-colors ${isScrolled ? "text-white" : "text-white"
                                    }`}
                            />
                        </div>
                        <div>
                            <span
                                className={`text-lg font-bold tracking-tight transition-colors ${isScrolled ? "text-blue-900" : "text-white"
                                    }`}
                            >
                                JEMS
                            </span>
                            <span
                                className={`hidden sm:block text-xs transition-colors ${isScrolled ? "text-blue-600" : "text-blue-100"
                                    }`}
                            >
                                Janatha English Medium School
                            </span>
                        </div>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href;
                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${isActive
                                        ? isScrolled
                                            ? "text-blue-700 bg-blue-50 font-semibold"
                                            : "text-white bg-white/20 font-semibold"
                                        : isScrolled
                                            ? "text-slate-700 hover:text-blue-700 hover:bg-blue-50"
                                            : "text-white/90 hover:text-white hover:bg-white/10"
                                        }`}
                                >
                                    {link.label}
                                </a>
                            );
                        })}
                        <a
                            href="#admissions"
                            className="ml-3 btn-primary px-5 py-2.5 rounded-full text-sm font-semibold text-white flex items-center gap-2"
                        >
                            <Phone className="w-4 h-4" />
                            Enquire Now
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        id="mobile-menu-toggle"
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled
                            ? "text-slate-700 hover:bg-slate-100"
                            : "text-white hover:bg-white/10"
                            }`}
                        aria-label="Toggle menu"
                    >
                        {isMobileOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden transition-all duration-300 overflow-hidden ${isMobileOpen ? "max-h-96 mt-4" : "max-h-0"
                        }`}
                >
                    <div className="bg-white rounded-2xl shadow-xl p-4 space-y-1 border border-slate-100">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileOpen(false)}
                                className={`block px-4 py-3 rounded-xl font-medium transition-colors ${activeSection === link.href
                                    ? "bg-blue-50 text-blue-700 font-semibold"
                                    : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#admissions"
                            onClick={() => setIsMobileOpen(false)}
                            className="block text-center btn-primary px-4 py-3 rounded-xl text-white font-semibold mt-2"
                        >
                            Enquire Now
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
