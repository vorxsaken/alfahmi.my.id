import { TransitionContext } from "@/contexts/Context"
import { ReactNode, useContext, useState } from 'react'
import { useIsomorphic } from "@/lib/useIsomorphic"
import { useRouter } from "next/router";
import { useRef } from 'react'

function TransitionLayout({ children }: { children: ReactNode }) {
    const [displayChildren, setdisplayChildren] = useState(children);
    const { timeline } = useContext(TransitionContext) as any;
    const router = useRouter();
    const [scrolll, setScrolll] = useState(0);

    useIsomorphic(() => {
        
        if (children !== displayChildren) {
            if (timeline.duration() === 0) {
                setdisplayChildren(children);
            } else {
                timeline.play().then(() => {
                    timeline.pause().clear();
                    setdisplayChildren(children);
                })
            }
        }
    }, [children])

    return (
        <>
            {displayChildren}
        </>
    )
}

export default TransitionLayout