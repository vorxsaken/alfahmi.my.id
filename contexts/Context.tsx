import { createContext, ReactNode, useState } from "react";
import { gsap } from 'gsap';

export const TransitionContext = createContext({});

export default function TransitionProvider({children}: {children: ReactNode}) {
    const [timeline, setTimeLine] = useState(() => gsap.timeline({paused: true}));

    return (
        <TransitionContext.Provider value={{ timeline, setTimeLine}}>
            { children }
        </TransitionContext.Provider>
    )
}