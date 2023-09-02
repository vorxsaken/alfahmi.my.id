import { gsap } from 'gsap'
import { useContext, useRef } from 'react'
import { useIsomorphic } from '@/lib/useIsomorphic'
import { TransitionContext } from '@/contexts/Context'
import { AnimateInOutType } from '@/lib/types'

function AnimateInOut(props: AnimateInOutType) {
    const { timeline } = useContext(TransitionContext) as any;
    const ref = useRef(null);

    const addTimeline = () => {
        timeline.add(
            gsap.to(ref.current, {
                ...props.from,
                duration: props.durationOut,
                delay: props.delayOut,
                ease: props.ease
            }), 0
        )
    }

    useIsomorphic(() => {
        if(props.set) {
            gsap.set(ref.current, {...props.set})
        }
        gsap.to(ref.current, {
            ...props.to,
            duration: props.durationIn,
            delay: props.delayIn,
            ease: props.ease
        })
    }, [])

    useIsomorphic(() => {
        if(!props.skipOutro) addTimeline()
    }, [props.skipOutro])

    return (
        <div ref={ref} className={props.className} id={props.id}>
            {props.children}
        </div>
    )
}

export default AnimateInOut