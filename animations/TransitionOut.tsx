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
                style={{width: '100%', height: '100vh', zIndex: 50, backgroundColor: '#BCE6EB'}}>
            </AnimateOut>
            <AnimateOut
                set={{yPercent: -100}}
                to={{ yPercent: 0 }}
                delay={0.6}
                duration={1}
                ease="power4.inOut"
                style={{width: '100%', height: '100vh', zIndex: 50, backgroundColor: '#FDCFDF'}}>
            </AnimateOut>
            <AnimateOut
                set={{yPercent: -100}}
                to={{ yPercent: 0 }}
                delay={0.7}
                duration={1}
                ease="power4.inOut"
                style={{width: '100%', height: '100vh', zIndex: 50, backgroundColor: '#FBBEDF'}}>
            </AnimateOut>
            <AnimateOut
                set={{yPercent: -100}}
                to={{ yPercent: 0 }}
                delay={0.8}
                duration={1}
                ease="power4.inOut"
                style={{width: '100%', height: '100vh', zIndex: 50, backgroundColor: '#FCA3CC'}}>
            </AnimateOut>
        </AnimateOut>
    )
}

export default TransitionOut