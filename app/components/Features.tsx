import {
    Snowflake,
    Monitor,
    Bus,
    GraduationCap,
    Shield,
    Gamepad2,
} from "lucide-react";

const features = [
    {
        icon: Snowflake,
        title: "AC Classrooms",
        description:
            "Comfortable air-conditioned classrooms for Nursery, LKG, and UKG students ensuring the best learning environment.",
        gradient: "from-cyan-500 to-blue-500",
        bgLight: "bg-cyan-50",
        delay: "",
    },
    {
        icon: Monitor,
        title: "Digital Classes",
        description:
            "Smart digital learning with visual teaching aids and interactive screens for enhanced understanding.",
        gradient: "from-violet-500 to-purple-600",
        bgLight: "bg-violet-50",
        delay: "delay-100",
    },
    {
        icon: Bus,
        title: "Transport Facility",
        description:
            "Safe and reliable bus and van transportation with experienced drivers and attendants.",
        gradient: "from-emerald-500 to-green-600",
        bgLight: "bg-emerald-50",
        delay: "delay-200",
    },
    {
        icon: GraduationCap,
        title: "Qualified Teachers",
        description:
            "Experienced and dedicated faculty who are passionate about teaching and student development.",
        gradient: "from-blue-500 to-indigo-600",
        bgLight: "bg-blue-50",
        delay: "delay-300",
    },
    {
        icon: Shield,
        title: "Discipline & Values",
        description:
            "Strong focus on character building, moral values, and discipline alongside academics.",
        gradient: "from-amber-500 to-orange-500",
        bgLight: "bg-amber-50",
        delay: "delay-400",
    },
    {
        icon: Gamepad2,
        title: "Play-way Method",
        description:
            "Fun-based, activity-oriented learning for Play Class and Kindergarten students.",
        gradient: "from-pink-500 to-rose-500",
        bgLight: "bg-pink-50",
        delay: "delay-500",
    },
];

export default function Features() {
    return (
        <section id="features" className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div
                    className="text-center max-w-3xl mx-auto mb-16 scroll-animate"
                    data-animation="animate-fade-in-up"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-semibold mb-6">
                        ✨ Why Choose JEMS
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                        Features That Make Us{" "}
                        <span className="bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">
                            Stand Out
                        </span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        We provide world-class facilities and a nurturing environment to help
                        your child excel in every aspect of life.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={feature.title}
                                className={`scroll-animate ${feature.delay}`}
                                data-animation="animate-fade-in-up"
                            >
                                <div className="feature-card group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:border-blue-200 h-full">
                                    {/* Icon */}
                                    <div
                                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        {feature.description}
                                    </p>

                                    {/* Subtle accent line */}
                                    <div
                                        className={`mt-6 h-1 w-12 rounded-full bg-gradient-to-r ${feature.gradient} opacity-40 group-hover:w-20 group-hover:opacity-100 transition-all duration-500`}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
