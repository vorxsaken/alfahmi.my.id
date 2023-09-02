import { useRef, useContext, ReactNode } from 'react'
import { TransitionContext } from '@/contexts/Context'
import { useIsomorphic } from '@/lib/useIsomorphic';
import { gsap } from 'gsap';

function AnimateOut({children, to, set, delay, duration, ease, className}: {children: ReactNode, to: any, set: any, delay: number, duration: number, className: string, ease?: string}) {
    
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
        <div ref={ref} className={className}>
            { children }
        </div>
    )
}

export default AnimateOut