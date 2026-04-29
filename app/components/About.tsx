import { Heart, Target, Lightbulb } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-20 lg:py-28 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left - Content */}
                    <div className="scroll-animate" data-animation="animate-fade-in-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
                            <Heart className="w-4 h-4" />
                            About Our School
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            Building{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                                Strong Foundations
                            </span>{" "}
                            for Tomorrow
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            Janatha English Medium School (JEMS) is dedicated to nurturing
                            young minds with quality education, discipline, and modern teaching
                            methods. Our mission is to create a strong foundation for students
                            from Play Class to Grade 7 through innovative and engaging learning
                            experiences.
                        </p>

                        {/* Mission cards */}
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white interactive-card border border-slate-100 shadow-sm">
                                <div className="p-3 rounded-xl bg-blue-100 text-blue-600 shrink-0">
                                    <Target className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">
                                        Our Mission
                                    </h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        To create a nurturing environment that fosters academic
                                        excellence, creativity, and strong moral values in every child.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white interactive-card border border-slate-100 shadow-sm">
                                <div className="p-3 rounded-xl bg-yellow-100 text-yellow-600 shrink-0">
                                    <Lightbulb className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">
                                        Our Vision
                                    </h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        To be the leading school in the region, recognized for
                                        innovative teaching and holistic student development.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Visual */}
                    <div
                        className="scroll-animate"
                        data-animation="animate-fade-in-right"
                    >
                        <div className="relative">
                            {/* Main image placeholder */}
                            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 bg-gradient-to-br from-blue-100 via-blue-50 to-cyan-50 aspect-[4/3] flex items-center justify-center relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-yellow-500/10" />
                                <div className="text-center p-8 relative z-10">
                                    <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg">
                                        <span className="text-4xl font-black text-white">J</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-blue-900 mb-2">JEMS</h3>
                                    <p className="text-blue-600 font-medium">
                                        Excellence in Education
                                    </p>
                                    <p className="text-blue-500 text-sm mt-1">Since Inception</p>
                                </div>
                            </div>

                            {/* Floating accent card */}
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-slate-100 animate-float">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-white font-bold text-lg">
                                    🎓
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-slate-900">
                                        Play Class – Grade 7
                                    </div>
                                    <div className="text-xs text-slate-500">
                                        Complete Primary Education
                                    </div>
                                </div>
                            </div>

                            {/* Floating accent card 2 */}
                            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-3 border border-slate-100 animate-float delay-200">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white text-sm">
                                        ✓
                                    </div>
                                    <span className="text-sm font-semibold text-slate-700">
                                        Quality Education
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
