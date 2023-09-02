import { useIsomorphic } from '@/lib/useIsomorphic';
import { useRef } from 'react'
import { gsap } from 'gsap'
import { AnimateInType } from '@/lib/types';

export default function AnimateIn({ id, children, to, from, duration, delay, className }: AnimateInType) {

    const ref = useRef(null);

    useIsomorphic(() => {
        gsap.fromTo(ref.current, {
            ...from
        }, {
            ...to,
            duration: duration,
            delay: delay,
            ease: 'power4.out'
        })
    }, [])

    return (
        <div ref={ref} className={className} id={id}>
            {children}
        </div>
    )
}
