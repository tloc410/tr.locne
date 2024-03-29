import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ ref });
    const y = useParallax(scrollYProgress, 300);

    return (
        <section className="image">
            <div ref={ref}>
                <img src={`../asset/img/about${id}.jpg`} alt={`${id}.jpg`} />
            </div>
            <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
        </section>
    );
}

export default function App() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            {[1, 2, 3, 4, 5].map((image) => (
                <Image key={image} id={image} />
            ))}
            <motion.div className="progress" style={{ scaleX }} />
        </>
    );
}