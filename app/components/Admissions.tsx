import { ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
    "Play Class to Grade 7",
    "AC Classrooms for Kindergarten",
    "Smart Digital Learning",
    "Experienced & Caring Faculty",
    "Safe Transport Facility",
    "Activity-Based Learning",
];

export default function Admissions() {
    return (
        <section id="admissions" className="py-20 lg:py-28 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-50 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left - Visual */}
                    <div
                        className="scroll-animate"
                        data-animation="animate-fade-in-left"
                    >
                        <div className="relative">
                            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden">
                                {/* Pattern */}
                                <div className="absolute inset-0 hero-pattern opacity-50" />
                                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-yellow-400/20" />
                                <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-cyan-400/20" />

                                <div className="relative z-10">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm text-yellow-300 text-sm font-semibold mb-6 border border-white/20">
                                        📚 Academic Year 2026-27
                                    </div>
                                    <h3 className="text-4xl sm:text-5xl font-black text-white mb-4">
                                        Admissions
                                        <span className="block text-yellow-400">Open!</span>
                                    </h3>
                                    <p className="text-blue-200 text-lg mb-6">
                                        Limited seats available
                                    </p>
                                    <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-yellow-400 to-amber-400" />
                                </div>
                            </div>

                            {/* Floating card */}
                            <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-white rounded-2xl shadow-xl p-4 border border-slate-100 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                                        <span className="text-2xl">🎉</span>
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-slate-900">
                                            Enroll Today
                                        </div>
                                        <div className="text-xs text-green-600 font-medium">
                                            Seats Filling Fast!
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div
                        className="scroll-animate"
                        data-animation="animate-fade-in-right"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-6">
                            🎓 Admissions Open
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            Admissions Open –{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                                2026-27
                            </span>
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            Enroll your child in Janatha English Medium School and give them a
                            strong academic foundation with modern learning methods and
                            experienced teachers.
                        </p>

                        {/* Highlights */}
                        <div className="grid sm:grid-cols-2 gap-3 mb-10">
                            {highlights.map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                    <span className="text-slate-700 text-sm font-medium">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <a
                            href="#contact"
                            id="admissions-apply-btn"
                            className="inline-flex items-center gap-3 btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg shadow-2xl shadow-blue-600/20 animate-pulse-glow"
                        >
                            Apply Now
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
