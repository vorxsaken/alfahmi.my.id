import image from '../assets/1.jpg';
import Image from 'next/image';
import { useIsomorphic } from '@/lib/useIsomorphic';
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import TitleAlbum from './TitleAlbum';

function CardAlbum() {
    useIsomorphic(() => {
        gsap.registerPlugin(ScrollTrigger)
        const cards = gsap.utils.toArray('#card');
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#cardContainer',
                start: 'top top',
                end: '+=4000',
                scrub: 1,
                pin: true
            }
        });

        let yOffset = 0;

        cards.forEach((card: any) => {
            tl.to(card, {
                y: yOffset,
                opacity: 1,
                duration: 3,
            }, '>')

            yOffset -= 275
        })

    }, [])

    return (
        <div id='cardContainer' className='w-full h-screen'>
            <TitleAlbum />
            <div className='w-full h-full flex flex-col justify-start items-center gap-2 relative'>
                {
                    [...Array(5)].map((card, index) => (
                        <div id='card' key={index} className={`w-1/2 p-2 flex flex-col justify-center items-center gap-2 rounded-xl border-t border-slate-200 shadow-lg background
                        opacity-0`}>
                            <div className='w-full h-64 relative overflow-hidden rounded-lg'>
                                <Image src={image} fill alt='image' className='object-cover' />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CardAlbum