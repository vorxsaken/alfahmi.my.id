import type { AnimateWordUpIn } from "@/lib/types"
import AnimateIn from "./AnimateIn"

function AnimateWordUpIn({ children, duration, delay, className }: AnimateWordUpIn) {
    const splitSpace = children?.toString().split(' ');
    const TwoDimension = splitSpace?.map(text => text.split(''));
    var count = -1;

    const animationElement = (
        <div className="flex gap-4">
            {
                TwoDimension?.map((oneD, oneIndex) => (
                    <div key={oneIndex} className="flex justify-start items-start">
                        {
                            oneD.map((twoD) => {
                                count++;

                                return (
                                    <AnimateIn
                                        key={count}
                                        from={{ yPercent: 100, opacity: 0 }}
                                        to={{ yPercent: 0, opacity: 1 }}
                                        delay={delay + (count / 30)}
                                        duration={duration}
                                    >
                                        {twoD}
                                    </AnimateIn>
                                )
                            })
                        }
                    </div>
                ))
            }
        </div>
    )

    return (
        <div className={className}>
            {animationElement}
        </div>
    )
}

export default AnimateWordUpIn