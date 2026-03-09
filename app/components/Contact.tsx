import { Phone, Instagram, MessageCircle, Mail } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div
                    className="text-center max-w-3xl mx-auto mb-16 scroll-animate"
                    data-animation="animate-fade-in-up"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-6">
                        <Phone className="w-4 h-4" />
                        Get In Touch
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                        Contact{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                            Us Today
                        </span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Have questions about admissions? We&apos;d love to hear from you.
                        Reach out through any of the channels below.
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {/* Phone Card */}
                    <div
                        className="scroll-animate"
                        data-animation="animate-fade-in-up"
                    >
                        <div className="feature-card group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:border-blue-200 text-center h-full">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <Phone className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">
                                Call Us
                            </h3>
                            <p className="text-slate-600 text-sm mb-4">
                                Contact for admissions and enquiries
                            </p>
                            <a
                                href="tel:+919999999999"
                                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                            >
                                <MessageCircle className="w-4 h-4" />
                                Contact for Admissions
                            </a>
                        </div>
                    </div>

                    {/* Instagram Card */}
                    <div
                        className="scroll-animate delay-200"
                        data-animation="animate-fade-in-up"
                    >
                        <div className="feature-card group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:border-pink-200 text-center h-full">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <Instagram className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">
                                Follow on Instagram
                            </h3>
                            <p className="text-slate-600 text-sm mb-4">
                                Stay updated with school activities and events
                            </p>
                            <a
                                href="https://www.instagram.com/janathaenglishmediumschoolkota"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-pink-600 font-semibold hover:text-pink-700 transition-colors"
                            >
                                <Instagram className="w-4 h-4" />
                                @janathaenglishmediumschoolkota
                            </a>
                        </div>
                    </div>

                    {/* Email Card */}
                    <div
                        className="scroll-animate delay-400 sm:col-span-2 lg:col-span-1"
                        data-animation="animate-fade-in-up"
                    >
                        <div className="feature-card group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:border-emerald-200 text-center h-full">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <Mail className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">
                                Visit Us
                            </h3>
                            <p className="text-slate-600 text-sm mb-4">
                                Come visit our campus for a tour
                            </p>
                            <a
                                href="#location"
                                className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                            >
                                Venkannapalem, Kota Mandal
                                <span className="group-hover:translate-x-1 transition-transform">
                                    →
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Banner */}
                <div
                    className="mt-16 scroll-animate"
                    data-animation="animate-fade-in-up"
                >
                    <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
                        <div className="absolute inset-0 hero-pattern opacity-30" />
                        <div className="relative z-10">
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                Ready to Give Your Child the Best Education?
                            </h3>
                            <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
                                Join the JEMS family today. Admissions are open for the academic
                                year 2026–27.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a
                                    href="https://www.instagram.com/janathaenglishmediumschoolkota"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary px-8 py-4 rounded-full text-blue-900 font-bold text-lg flex items-center gap-3 shadow-xl w-full sm:w-auto justify-center"
                                >
                                    <Instagram className="w-5 h-5" />
                                    Message on Instagram
                                </a>
                                <a
                                    href="tel:+919999999999"
                                    className="px-8 py-4 rounded-full text-white font-semibold text-lg flex items-center gap-3 border-2 border-white/30 hover:bg-white/10 transition-colors w-full sm:w-auto justify-center"
                                >
                                    <Phone className="w-5 h-5" />
                                    Call Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
