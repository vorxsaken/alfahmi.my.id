import { gsap } from 'gsap'
import { useIsomorphic } from '@/lib/useIsomorphic';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useMediaQuery } from '@/lib/useMediaQuery';

function Particles({ isSmall }: { isSmall: boolean }) {

    const position: any = {
        0: {
            top: isSmall ? '13%' : '28%',
            left: isSmall ? '7%' : '10px'
        },
        1: {
            top: isSmall ? '32%' : '10%',
            left: isSmall ? '30%' : '28%'
        },
        2: {
            top: isSmall ? '20%' : '15%',
            left: isSmall ? '58%' : '70%'
        },
        3: {
            top: isSmall ? '35%' : '30%',
            left: isSmall ? '80%' : '100%'
        },
        4: {
            top: isSmall ? '65%' : '75%',
            left: '54%'
        },
        5: {
            top: isSmall ? '75%' : '80%',
            left: '15%'
        },
        6: {
            top: '72%',
            left: '76%'
        },
        7: {
            top: isSmall ? '85%' : '70%',
            left: isSmall ? '60%' : '-15%'
        },
        8: {
            top: isSmall ? '20%' : '25%',
            left: isSmall ? '85%' : '50%'
        },
        9: {
            top: isSmall ? '60%' : '90%',
            left: isSmall ? '10%' : '40%'
        }

    }

    const mouseMove = (e: any) => {
        gsap.to('#circle', {
            x: (e.clientX / 100) * 3,
            y: (e.clientY / 100) * 3,
            translateZ: ((e.clientX / 100) * 2) - ((e.clientY / 100) * 3),
            ease: 'elastic.out(1, 0.3)',
            duration: 1.6,
            stagger: 0.025,
        })

    }

    useIsomorphic(() => {
        gsap.registerPlugin(ScrollTrigger);
        // gsap.fromTo('#circles', { scale: 0 }, { scale: 1, duration: 1, ease: 'power4.out', delay: 0.7 });
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#circles',
                scrub: 0.5,
                start: 'center center',
                end: '+=1000px top',
            },
        });

        tl.to('#circles', {
            y: -100,
            scale: 1.5,
            duration: 2,
            ease: 'power2.out',
        });
    }, [])

    return (
        <div
            className='w-full h-full flex justify-center items-center opacity-40 absolute -top-[2%] md:-top-6 overflow-hidden xl:scale-125'
            onMouseMove={mouseMove}
        >
            <div id='circles' className='w-full h-full md:w-[800px] md:h-[500px] relative ml-0 md:ml-20'>
                <div
                    id='circle'
                    className='w-12 h-12 rounded-full bg-red-500 absolute'
                    style={{ top: position[0].top, left: position[0].left }}
                />
                <div
                    id='circle'
                    className='w-6 h-6 rounded-full bg-yellow-500 absolute'
                    style={{ top: position[1].top, left: position[1].left }}
                />
                <div
                    id='circle'
                    className='w-10 h-10 rounded-full bg-slate-500 absolute'
                    style={{ top: position[2].top, left: position[2].left }}
                />
                <div
                    id='circle'
                    className='w-6 h-6 rounded-full bg-pink-500 absolute'
                    style={{ top: position[3].top, left: position[3].left }}
                />
                <div
                    id='circle'
                    className='w-6 h-6 md:w-10 md:h-10 rounded-full bg-blue-500 absolute'
                    style={{ top: position[4].top, left: position[4].left }}
                />
                <div
                    id='circle'
                    className='w-12 h-12 md:w-16 md:h-16 rounded-full bg-purple-500 absolute'
                    style={{ top: position[5].top, left: position[5].left }}
                />
                <div
                    id='circle'
                    className='w-14 h-14 rounded-full bg-green-500 absolute'
                    style={{ top: position[6].top, left: position[6].left }}
                />
                <div
                    id='circle'
                    className='w-6 h-6 rounded-full bg-pink-400 absolute'
                    style={{ top: position[7].top, left: position[7].left }}
                />
                <div
                    id='circle'
                    className='w-3 h-3 rounded-full bg-green-300 absolute'
                    style={{ top: position[8].top, left: position[8].left }}
                />
                <div
                    id='circle'
                    className='w-4 h-4 rounded-full bg-amber-500 absolute'
                    style={{ top: position[9].top, left: position[9].left }}
                />
            </div>
        </div>
    )
}

export default Particles