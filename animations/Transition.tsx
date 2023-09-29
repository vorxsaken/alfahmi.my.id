import AnimateInOut from "@/animations/AnimateInOut"

export default function Transition({skipOutro}: {skipOutro?: boolean}) {
    return (
        // <div></div>
        <AnimateInOut
            from={{ yPercent: 0 }}
            to={{ yPercent: -100 }}
            delayIn={0.5}
            delayOut={0}
            durationIn={0.5}
            skipOutro={skipOutro || false}
            ease={'power4.inOut'}
            durationOut={0.1}
            className="w-screen h-screen flex flex-row fixed top-0 z-50"
        >
            <AnimateInOut
                from={{ yPercent: 0 }}
                to={{ yPercent: -100 }}
                delayIn={0}
                delayOut={0.15}
                durationIn={1}
                skipOutro={skipOutro || false}
                ease={'power2.inOut'}
                durationOut={0.5}
                style={{width: '100%', height: '100vh', zIndex: 50, backgroundColor: '#BCE6EB'}}
            >
            </AnimateInOut>
            <AnimateInOut
                from={{ yPercent: 0 }}
                to={{ yPercent: -100 }}
                delayIn={0.1}
                delayOut={0.2}
                durationIn={1}
                skipOutro={skipOutro || false}
                ease={'power2.inOut'}
                durationOut={0.5}
                style={{width: '100%', height: '100vh', zIndex: 50, backgroundColor: '#FDCFDF'}}
            >
            </AnimateInOut>
            <AnimateInOut
                from={{ yPercent: 0 }}
                to={{ yPercent: -100 }}
                delayIn={0.2}
                delayOut={0.25}
                durationIn={1}
                skipOutro={skipOutro || false}
                ease={'power2.inOut'}
                durationOut={0.5}
                style={{width: '100%', height: '100vh', zIndex: 50, backgroundColor: '#FBBEDF'}}
            >
            </AnimateInOut>
            <AnimateInOut
                from={{ yPercent: 0 }}
                to={{ yPercent: -100 }}
                delayIn={0.3}
                delayOut={0.3}
                durationIn={1}
                skipOutro={skipOutro || false}
                ease={'power2.inOut'}
                durationOut={0.5}
                style={{width: '100%', height: '100vh', zIndex: 50, backgroundColor: '#FCA3CC'}}
            >
            </AnimateInOut>
        </AnimateInOut>
    )
}