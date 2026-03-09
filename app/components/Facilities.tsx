import {
    Snowflake,
    Monitor,
    Bus,
    TreePine,
} from "lucide-react";

const facilities = [
    {
        icon: Snowflake,
        title: "AC Classrooms",
        description: "Temperature-controlled learning spaces for maximum comfort and focus.",
        gradient: "from-cyan-400 via-blue-500 to-indigo-500",
        pattern: "radial-gradient(circle at 30% 70%, rgba(255,255,255,0.15) 0%, transparent 50%)",
    },
    {
        icon: Monitor,
        title: "Digital Learning",
        description: "Interactive smart boards and digital content for engaging education.",
        gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
        pattern: "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.15) 0%, transparent 50%)",
    },
    {
        icon: Bus,
        title: "School Transport",
        description: "Safe, reliable door-to-door transportation with trained staff.",
        gradient: "from-emerald-400 via-green-500 to-teal-500",
        pattern: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 50%)",
    },
    {
        icon: TreePine,
        title: "Play Area",
        description: "Spacious outdoor play areas for physical development and recreation.",
        gradient: "from-amber-400 via-orange-500 to-red-400",
        pattern: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15) 0%, transparent 50%)",
    },
];

export default function Facilities() {
    return (
        <section id="facilities" className="py-20 lg:py-28 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div
                    className="text-center max-w-3xl mx-auto mb-16 scroll-animate"
                    data-animation="animate-fade-in-up"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
                        🏫 Our Facilities
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                        World-Class{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                            Infrastructure
                        </span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        State-of-the-art facilities designed to provide the best learning
                        experience for every student.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                    {facilities.map((facility, index) => {
                        const Icon = facility.icon;
                        return (
                            <div
                                key={facility.title}
                                className={`scroll-animate ${index % 2 === 0 ? "" : "delay-200"}`}
                                data-animation="animate-fade-in-up"
                            >
                                <div className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-slate-100 hover:border-transparent">
                                    {/* Image placeholder with gradient */}
                                    <div
                                        className={`relative h-48 sm:h-56 bg-gradient-to-br ${facility.gradient} flex items-center justify-center overflow-hidden`}
                                    >
                                        <div
                                            className="absolute inset-0"
                                            style={{ backgroundImage: facility.pattern }}
                                        />
                                        {/* Decorative circles */}
                                        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
                                        <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-white/5" />

                                        <div className="relative z-10 text-center">
                                            <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-500">
                                                <Icon className="w-10 h-10 text-white" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                                            {facility.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {facility.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
