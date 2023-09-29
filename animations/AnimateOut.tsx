import { useRef, useContext, ReactNode } from 'react'
import { TransitionContext } from '@/contexts/Context'
import { useIsomorphic } from '@/lib/useIsomorphic';
import { gsap } from 'gsap';
import { AnimateOutType, divType } from '@/lib/types';

function AnimateOut({children, to, set, delay, duration, ease, className, ...props}: AnimateOutType & divType) {
    
    const ref = useRef(null);
    const { timeline } = useContext(TransitionContext) as any;

    useIsomorphic(() => {
        gsap.set(ref.current, {
            ...set
        })

        timeline.add( 
            gsap.to(ref.current, {
                ...to,
                duration: duration,
                delay: delay,
                ease: ease || 'power4.out'
            }), 0
        )
    }, [])

    return (
        <div ref={ref} className={className} {...props}>
            { children }
        </div>
    )
}

export default AnimateOut