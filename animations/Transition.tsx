import AnimateInOut from "@/animations/AnimateInOut"

export default function Transition({skipOutro}: {skipOutro?: boolean}) {
    return (
        // <div></div>
        <AnimateInOut
            from={{ yPercent: 0 }}
            to={{ yPercent: -100 }}
            delayIn={0.5}
            delayOut={0.5}
            durationIn={0.5}
            skipOutro={skipOutro || false}
            ease={'power4.inOut'}
            durationOut={0.5}
            className="w-screen h-screen flex flex-row fixed top-0 z-50"
        >
            <AnimateInOut
                from={{ yPercent: 0 }}
                to={{ yPercent: -100 }}
                delayIn={0}
                delayOut={0.6}
                durationIn={1}
                skipOutro={skipOutro || false}
                ease={'power2.inOut'}
                durationOut={1}
                className="w-[25%] h-screen z-50 bg-[#BCE6EB]">
            </AnimateInOut>
            <AnimateInOut
                from={{ yPercent: 0 }}
                to={{ yPercent: -100 }}
                delayIn={0.1}
                delayOut={0.7}
                durationIn={1}
                skipOutro={skipOutro || false}
                ease={'power2.inOut'}
                durationOut={1}
                className="w-[25%] h-screen z-50 bg-[#FDCFDF]">
            </AnimateInOut>
            <AnimateInOut
                from={{ yPercent: 0 }}
                to={{ yPercent: -100 }}
                delayIn={0.2}
                delayOut={0.8}
                durationIn={1}
                skipOutro={skipOutro || false}
                ease={'power2.inOut'}
                durationOut={1}
                className="w-[25%] h-screen z-50 bg-[#FBBEDF]">
            </AnimateInOut>
            <AnimateInOut
                from={{ yPercent: 0 }}
                to={{ yPercent: -100 }}
                delayIn={0.3}
                delayOut={0.9}
                durationIn={1}
                skipOutro={skipOutro || false}
                ease={'power2.inOut'}
                durationOut={1}
                className="w-[25%] h-screen z-50 bg-[#FCA3CC]">
            </AnimateInOut>
        </AnimateInOut>
    )
}
