import type { AnimateWordUpIn } from "@/lib/types"
import AnimateIn from "./AnimateIn"

function AnimateWordUpIn({ children, duration, delay, className }: AnimateWordUpIn) {
    const words = children?.toString().split('')

    return (
        <div className={className}>
            {
                words?.map((word, index) => (
                    <AnimateIn
                        key={index}
                        from={{ yPercent: 100, opacity: 0 }}
                        to={{yPercent: 0, opacity: 1}}
                        delay={delay + (index / 30)}
                        duration={duration}
                    >
                        { word }
                    </AnimateIn>
                ))
            }
        </div>
    )
}

export default AnimateWordUpIn