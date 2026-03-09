import { MapPin, Navigation } from "lucide-react";

export default function Location() {
    return (
        <section id="location" className="py-20 lg:py-28 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div
                    className="text-center max-w-3xl mx-auto mb-16 scroll-animate"
                    data-animation="animate-fade-in-up"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        Our Location
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                        Find Us{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                            Easily
                        </span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Conveniently located on Vakadu Main Road for easy access from
                        surrounding areas.
                    </p>
                </div>

                <div
                    className="grid lg:grid-cols-5 gap-8 scroll-animate"
                    data-animation="animate-fade-in-up"
                >
                    {/* Address Card */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 h-full">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg">
                                <Navigation className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">
                                School Address
                            </h3>
                            <div className="space-y-3 text-slate-600">
                                <p className="text-lg font-medium text-slate-800">
                                    Janatha English Medium School
                                </p>
                                <div className="space-y-1">
                                    <p>Venkannapalem</p>
                                    <p>Vakadu Main Road</p>
                                    <p>Kota Mandal</p>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-slate-100">
                                <a
                                    href="https://maps.google.com/?q=Venkannapalem+Kota+Mandal"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
                                >
                                    <MapPin className="w-5 h-5" />
                                    Open in Google Maps
                                    <span className="group-hover:translate-x-1 transition-transform">
                                        →
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Map Embed */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 h-full min-h-[350px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15264.07!2d79.95!3d13.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDU3JzAwLjAiTiA3OcKwNTcnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: "350px" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Janatha English Medium School Location"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
