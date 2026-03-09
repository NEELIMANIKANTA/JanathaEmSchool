import {
    GraduationCap,
    MapPin,
    Instagram,
    Phone,
    Heart,
    ArrowUp,
} from "lucide-react";

const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Facilities", href: "#facilities" },
    { label: "Admissions", href: "#admissions" },
    { label: "Contact", href: "#contact" },
];

export default function Footer() {
    return (
        <footer className="bg-slate-900 relative overflow-hidden">
            {/* Top wave */}
            <div className="absolute top-0 left-0 right-0">
                <svg
                    viewBox="0 0 1440 60"
                    className="w-full h-auto"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#ffffff"
                        d="M0,30 C360,0 720,60 1080,20 C1260,5 1380,30 1440,30 L1440,0 L0,0 Z"
                    />
                </svg>
            </div>

            {/* Background decorations */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full -translate-x-1/2 translate-y-1/2" />
            <div className="absolute top-20 right-0 w-72 h-72 bg-yellow-500/5 rounded-full translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 relative z-10">
                {/* Main Footer Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700">
                                <GraduationCap className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <span className="text-lg font-bold text-white block">JEMS</span>
                                <span className="text-xs text-slate-400">
                                    Janatha English Medium School
                                </span>
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Empowering young minds with quality education, modern teaching
                            methods, and strong values from Play Class to Grade 7.
                        </p>
                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            <a
                                href="https://www.instagram.com/janathaenglishmediumschoolkota"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-400 hover:text-white hover:border-transparent transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="tel:+919999999999"
                                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-700 hover:text-white hover:border-transparent transition-all duration-300"
                                aria-label="Phone"
                            >
                                <Phone className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-5">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-slate-400 text-sm hover:text-white transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-5">Contact Info</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                                <div className="text-slate-400 text-sm">
                                    <p>Venkannapalem</p>
                                    <p>Vakadu Main Road</p>
                                    <p>Kota Mandal</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                                <span className="text-slate-400 text-sm">
                                    Contact for Admissions
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Instagram className="w-5 h-5 text-pink-400 shrink-0" />
                                <a
                                    href="https://www.instagram.com/janathaenglishmediumschoolkota"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-400 text-sm hover:text-pink-400 transition-colors"
                                >
                                    @janathaenglishmediumschoolkota
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Admissions */}
                    <div>
                        <h4 className="text-white font-semibold mb-5">Admissions</h4>
                        <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                            <p className="text-yellow-400 font-semibold text-sm mb-2">
                                🎓 Now Enrolling!
                            </p>
                            <p className="text-slate-400 text-sm mb-4">
                                Academic Year 2026-27. Play Class to Grade 7.
                            </p>
                            <a
                                href="#admissions"
                                className="btn-primary block text-center px-5 py-2.5 rounded-xl text-white text-sm font-semibold"
                            >
                                Apply Now
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-slate-500 text-sm text-center sm:text-left">
                            © {new Date().getFullYear()} Janatha English Medium School (JEMS).
                            All rights reserved.
                        </p>
                        <div className="flex items-center gap-1 text-slate-500 text-sm">
                            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> for
                            <span className="text-white font-medium ml-1">JEMS</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Back to top */}
            <a
                href="#home"
                id="back-to-top-btn"
                className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300 z-50"
                aria-label="Back to top"
            >
                <ArrowUp className="w-5 h-5" />
            </a>
        </footer>
    );
}
