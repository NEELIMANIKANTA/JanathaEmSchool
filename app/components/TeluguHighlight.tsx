import { Star, Sparkles } from "lucide-react";

export default function TeluguHighlight() {
    return (
        <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 hero-pattern" />
            <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div
                    className="scroll-animate"
                    data-animation="animate-scale-in"
                >
                    {/* Card */}
                    <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl">
                        {/* Corner accents */}
                        <div className="absolute top-4 left-4">
                            <Star className="w-6 h-6 text-yellow-400 animate-float" />
                        </div>
                        <div className="absolute top-4 right-4">
                            <Star className="w-6 h-6 text-yellow-400 animate-float delay-200" />
                        </div>
                        <div className="absolute bottom-4 left-4">
                            <Star className="w-5 h-5 text-yellow-300 animate-float delay-400" />
                        </div>
                        <div className="absolute bottom-4 right-4">
                            <Star className="w-5 h-5 text-yellow-300 animate-float delay-300" />
                        </div>

                        {/* Badge */}
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-400/20 border border-yellow-400/30 text-yellow-300 text-sm font-semibold">
                                <Sparkles className="w-4 h-4" />
                                ప్రవేశాలు ప్రారంభం
                                <Sparkles className="w-4 h-4" />
                            </div>
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-6">
                            JEMS – Admissions{" "}
                            <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
                                2026-27
                            </span>
                        </h2>

                        {/* Divider */}
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-400/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                            <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-400/50" />
                        </div>

                        {/* Telugu Content */}
                        <div className="text-center space-y-6">
                            <p className="telugu-text text-xl sm:text-2xl text-blue-100 leading-relaxed">
                                మీ పిల్లల ఉజ్వల భవిష్యత్తు కోసం అత్యాధునిక వసతులతో మీ ముందుకు!
                            </p>

                            <div className="py-4">
                                <p className="telugu-text text-2xl sm:text-3xl font-bold text-white mb-3">
                                    జనతా ఇంగ్లీష్ మీడియం స్కూల్ (JEMS)
                                </p>
                                <p className="telugu-text text-lg sm:text-xl text-yellow-300 font-medium">
                                    Play Class నుండి 7వ తరగతి వరకు
                                </p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="text-center mt-8">
                            <a
                                href="#admissions"
                                className="inline-flex items-center gap-3 btn-secondary px-8 py-4 rounded-full text-blue-900 font-bold text-lg shadow-xl shadow-yellow-500/20"
                            >
                                ఇప్పుడే దరఖాస్తు చేయండి
                                <span className="text-xl">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
