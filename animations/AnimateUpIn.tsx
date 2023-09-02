import type { AnimateUpInType } from "@/lib/types"
import AnimateIn from "./AnimateIn"

export default function AnimateUpIn({ children, duration, delay, className, id }: AnimateUpInType) {
  return (
    <AnimateIn
      id={id}
      className={className}
      delay={delay}
      duration={duration}
      from={{yPercent: 100, opacity: 0}}
      to={{yPercent: 0, opacity: 1}}
    >
      {children}
    </AnimateIn>
    // <AnimateInOut
    //   id={id}
    //   className={className}
    //   ease="power4.out"
    //   durationOut={0}
    //   delayOut={0}
    //   to={{ yPercent: y, opacity: 1 }}
    //   delayIn={delay}
    //   durationIn={duration}
    //   skipOutro={true}
    // >
    //   { children }
    // </AnimateInOut>
  )
}
