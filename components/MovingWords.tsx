import { useIsomorphic } from "@/lib/useIsomorphic"
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger"

function MovingWords({ words, speed, id, revert }: { words: string, speed: number, id: string, revert?: boolean }) {

    useIsomorphic(() => {
        gsap.registerPlugin(ScrollTrigger);
        const row = document.getElementById(id) as any;
        const rowWidth = row.getBoundingClientRect().width;
        const rowItemWidth = row.children[0].getBoundingClientRect().width;
        const initialOffset = ((2 * rowItemWidth) / rowWidth) * 100 * -1;

        gsap.set(row, {
            xPercent: revert ? 0 : initialOffset,
        })


        let duration = 2 * (speed + 1);
        gsap.to(row, {
            scrollTrigger: {
                trigger: row,
                start: 'top bottom',
                end: '+=1500',
                scrub: 1,
                markers: true
            },
            ease: 'none',
            xPercent: revert ? initialOffset : 0,
        })

        ScrollTrigger.create({
            trigger: '#container',
            start: 'top top',
            end: '+=1000',
            pin: true,
        })
    }, [])

    return (
        <div id="container" className='w-full h-14 overflow-hidden cursor-default'>
            <div id={id} className='flex relative text-start whitespace-nowrap'>
                {
                    [...Array(13)].map((n, index) => (
                        <div key={index} className={`relative leading-[100%] text-3xl py-2 px-0 uppercase flex-[0_0_10%] font-bold 
                        ${index % 2 == 1 ? 'text-stroke' : 'text-color'}`}>
                            {words}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MovingWords