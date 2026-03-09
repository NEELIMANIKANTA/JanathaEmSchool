"use client";

import { useEffect } from "react";

export default function ScrollAnimator() {
    useEffect(() => {
        const observerCallback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animated");
                    const animClass = entry.target.getAttribute("data-animation");
                    if (animClass) {
                        entry.target.classList.add(animClass);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
        });

        const elements = document.querySelectorAll(".scroll-animate");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return null;
}
