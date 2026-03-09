import {
    MapPin,
    Sparkles,
    ArrowRight,
    Phone,
    BookOpen,
    Users,
    Award,
} from "lucide-react";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-600 animate-gradient" />
            <div className="absolute inset-0 hero-pattern" />

            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl" />

            {/* Floating shapes */}
            <div className="absolute top-32 right-20 hidden lg:block animate-float">
                <div className="w-16 h-16 rounded-2xl bg-yellow-400/20 backdrop-blur-sm rotate-12" />
            </div>
            <div className="absolute bottom-40 left-20 hidden lg:block animate-float delay-300">
                <div className="w-12 h-12 rounded-full bg-cyan-400/20 backdrop-blur-sm" />
            </div>
            <div className="absolute top-48 left-1/4 hidden lg:block animate-float delay-500">
                <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm rotate-45" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
                <div className="text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 text-yellow-200 text-sm font-semibold mb-8 animate-fade-in-up">
                        <Sparkles className="w-4 h-4" />
                        Admissions Open for Academic Year 2026–27
                        <Sparkles className="w-4 h-4" />
                    </div>

                    {/* School Name */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 animate-fade-in-up delay-100 tracking-tight leading-tight">
                        Janatha English Medium
                        <span className="block mt-2 bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent">
                            School (JEMS)
                        </span>
                    </h1>

                    {/* Tagline */}
                    <p className="text-xl sm:text-2xl text-blue-100 font-light mb-4 animate-fade-in-up delay-200 max-w-2xl mx-auto">
                        Empowering Minds from Nursery to Class 7
                    </p>

                    {/* Location */}
                    <div className="flex items-center justify-center gap-2 text-blue-200 mb-10 animate-fade-in-up delay-300">
                        <MapPin className="w-5 h-5" />
                        <span className="text-base sm:text-lg">
                            Venkannapalem, Kota Mandal
                        </span>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up delay-400">
                        <a
                            href="#admissions"
                            id="hero-apply-btn"
                            className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg flex items-center gap-3 shadow-2xl shadow-blue-900/30 w-full sm:w-auto justify-center"
                        >
                            Apply for Admission
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href="#contact"
                            id="hero-contact-btn"
                            className="btn-secondary px-8 py-4 rounded-full text-blue-900 font-semibold text-lg flex items-center gap-3 shadow-2xl shadow-yellow-500/20 w-full sm:w-auto justify-center"
                        >
                            <Phone className="w-5 h-5" />
                            Contact Us
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto animate-fade-in-up delay-500">
                        <div className="glass-card rounded-2xl p-4 text-center">
                            <BookOpen className="w-6 h-6 text-blue-300 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-white">Play–7</div>
                            <div className="text-xs text-blue-200">Classes</div>
                        </div>
                        <div className="glass-card rounded-2xl p-4 text-center">
                            <Users className="w-6 h-6 text-yellow-300 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-white">Expert</div>
                            <div className="text-xs text-blue-200">Faculty</div>
                        </div>
                        <div className="glass-card rounded-2xl p-4 text-center">
                            <Award className="w-6 h-6 text-cyan-300 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-white">A/C</div>
                            <div className="text-xs text-blue-200">Classrooms</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Wave divider */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg
                    viewBox="0 0 1440 120"
                    className="w-full h-auto"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#f8fafc"
                        d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
                    />
                </svg>
            </div>
        </section>
    );
}
