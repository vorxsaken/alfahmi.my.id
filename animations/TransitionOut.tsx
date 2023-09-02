import AnimateOut from "./AnimateOut"

function TransitionOut() {
    return (
        <AnimateOut
            set={{yPercent: -100}}
            to={{ yPercent: 0 }}
            delay={0.5}
            duration={1}
            ease="power4.inOut"
            className="w-screen h-screen flex flex-row fixed top-0 z-50"
        >
            <AnimateOut
                set={{ypercent: -100}}
                to={{ yPercent: 0 }}
                delay={0.5}
                duration={1}
                ease="power4.inOut"
                className="w-[25%] h-screen z-50 bg-[#BCE6EB] ">
            </AnimateOut>
            <AnimateOut
                set={{yPercent: -100}}
                to={{ yPercent: 0 }}
                delay={0.6}
                duration={1}
                ease="power4.inOut"
                className="w-[25%] h-screen z-50 bg-[#FDCFDF]">
            </AnimateOut>
            <AnimateOut
                set={{yPercent: -100}}
                to={{ yPercent: 0 }}
                delay={0.7}
                duration={1}
                ease="power4.inOut"
                className="w-[25%] h-screen z-50 bg-[#FBBEDF]">
            </AnimateOut>
            <AnimateOut
                set={{yPercent: -100}}
                to={{ yPercent: 0 }}
                delay={0.8}
                duration={1}
                ease="power4.inOut"
                className="w-[25%] h-screen z-50 bg-[#FCA3CC]">
            </AnimateOut>
        </AnimateOut>
    )
}

export default TransitionOut