import { createContext, ReactNode, useContext, useReducer } from "react";

const store = {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
    xObject: 0,
    yObject: 0,
    projectTransition: true
}

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'SET_PROJECT_POSITION': 
            return {
                x1: action.x1,
                x2: action.x2,
                y1: action.y1,
                y2: action.y2,
                xObject: action.xObject,
                yObject: action.yObject
            }
        case 'SET_PROJECT_TRANSITION':
            return {
                ...state,
                projectTransition: action.projectTransition
            }
        default: 
            return state
    }
}


const dispatcher = createContext<any>([]);
export const useTransitionReducer = () => useContext(dispatcher);

export default function TransitionDispatcher({children}: {children: ReactNode}) {
    return (
        <dispatcher.Provider value={useReducer(reducer, store)}>
            {children}
        </dispatcher.Provider>
    )
}