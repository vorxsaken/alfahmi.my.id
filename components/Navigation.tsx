import { useState } from 'react'
import { gsap } from 'gsap'
import { useIsomorphic } from '@/lib/useIsomorphic';
import Router from 'next/router';

function Navigation() {
    
    const movePile = (e: any, initialVisit?: boolean, path?: string) => {
        const parentLeft = document.getElementById('parentPile')?.getBoundingClientRect().left as any;
        const buttonLeft = (initialVisit ? e : e.currentTarget).getBoundingClientRect().left;
        const buttonPiles = document.querySelectorAll('#buttonPile');

        buttonPiles.forEach(buttonPile => {
            (buttonPile.childNodes[0] as any).classList.remove('opacity-0');
            (buttonPile.childNodes[1] as any).classList.add('opacity-0');
        });

        (initialVisit ? e : e.currentTarget).childNodes[0].classList.add('opacity-0');
        (initialVisit ? e : e.currentTarget).childNodes[1].classList.remove('opacity-0');

        if(initialVisit) {
            gsap.set('#pile', {
                x:(buttonLeft - parentLeft) -17
            })
        } else {
            gsap.to('#pile', {
                x: (buttonLeft - parentLeft) - 17,
                duration: 0.5,
                ease: 'power4.out'
            })
        }

        if(!initialVisit) {
            Router.push(path || '/')
        }
    }

    useIsomorphic(() => {
        const buttonPile = document.querySelectorAll('#buttonPile');

        switch (Router.pathname) {
            case '/':
                movePile(buttonPile[0], true)    
                break;
            case '/projects':
                movePile(buttonPile[1], true)
                break;
            case '/about':
                movePile(buttonPile[2], true)
                break;
            default:
                movePile(buttonPile[1], true)
                break;
        }

    }, [])
    return (
        <div className="w-full h-12 flex justify-center items-center fixed bottom-7 md:absolute md:top-7 z-30 select-none">
            <div id='parentPile' className='h-full flex justify-center items-center rounded-full text-color bg-[#fbfbff] shadow-inner drop-shadow-lg relative cursor-pointer
            text-sm font-semibold text-slate-400 px-4'>
                <div id='pile' className='absolute w-24 h-8 bg-white drop-shadow-md rounded-3xl -z-10 left-4 shadow-inner'>
                </div>
                <div id='buttonPile' onClick={(e) => movePile(e, false, '/')} className='w-24 h-full py-4 px-5 flex justify-center items-center relative'>
                    <span className='absolute transition-all duration-500 ease-in-out'>
                        Start
                    </span>
                    <span className='absolute text-transparent bg-clip-text bg-gradient-to-r from-[#F31559] via-[#FF52A2] to-[#FFB07F] font-extrabold opacity-0 transition-all duration-500 ease-in-out'>
                        Start
                    </span>
                </div>
                <div id='buttonPile' onClick={(e) => movePile(e, false, '/projects')} className='w-24 h-full py-4 px-5 flex justify-center items-center'>
                    <span className='absolute transition-all duration-500 ease-in-out'>Projects</span>
                    <span className='absolute text-transparent bg-clip-text bg-gradient-to-r from-[#F31559] via-[#FF52A2] to-[#FFB07F] font-extrabold opacity-0 transition-all duration-500 ease-in-out'>
                        Projects
                    </span>
                </div>
                <div id='buttonPile' onClick={(e) => movePile(e, false, '/about')} className='w-24 h-full py-4 px-5 flex justify-center items-center'>
                    <span className='absolute transition-all duration-500 ease-in-out'>About</span>
                    <span className='absolute text-transparent bg-clip-text bg-gradient-to-r from-[#F31559] via-[#FF52A2] to-[#FFB07F] font-extrabold opacity-0 transition-all duration-500 ease-in-out'>
                        About
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navigation