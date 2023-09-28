import image from '../assets/1.jpg';
import Image from 'next/image';
import { AiFillEye } from 'react-icons/ai'
import { gsap } from 'gsap';
import { useIsomorphic } from '@/lib/useIsomorphic';
import Link from 'next/link';
import { CardType } from '@/lib/types';

function Card(props: CardType) {
    const tlImage = gsap.timeline({paused: true});
    const tlCard = gsap.timeline({paused: true});
    const { color, className, id, cardId, imageId, title, desc, cover, slug } = props;
    const titleSub = title.length > 30 ? title.substring(0, 30) + ' ...' : title;
    const description = desc.length > 100 ? desc.substring(0, 100) + ' ...' : desc;

    const colors = {
        red: 'bg-red-200',
        yellow: 'bg-yellow-200',
        green: 'bg-green-200',
        blue: 'bg-blue-200'
    }

    const Color = color == 'red' ? colors.red : color == 'yellow' ? colors.yellow : color == 'green' ? colors.green : color == 'blue' ? colors.blue : 'bg-slate-300';
    const showImage = () => {
        tlImage.add(
            gsap.to(`#${imageId}`, {
                y: -100,
                x: 100,
                rotate: 25,
                duration: 0.5,
                ease: 'power1.inOut',
                onComplete: () => {
                    document.getElementById(imageId)?.classList.toggle('z-10');
                    document.getElementById(imageId)?.classList.toggle('opacity-40');
                    document.getElementById(`${imageId + 'eye'}`)?.classList.toggle('opacity-0');
                }
            })
        )
        tlImage.add(
            gsap.to(`#${imageId}`, {
                y: 0,
                x: 0,
                duration: 0.5,
                rotate: -12,
                ease: 'power1.inOut',
                onReverseComplete: () => {
                    document.getElementById(imageId)?.classList.toggle('z-10');
                    document.getElementById(imageId)?.classList.toggle('opacity-40');
                    document.getElementById(`${imageId + 'eye'}`)?.classList.toggle('opacity-0');
                }
            }), '>'
        )
        
        tlCard.add(
            gsap.to(`#${cardId}`, {
                y: 100,
                x: -100,
                rotate: 25,
                duration: 0.5,
                ease: 'power1.inOut',
                onComplete: () => {
                    document.getElementById(cardId)?.classList.toggle('z-0');
                    document.getElementById(cardId)?.classList.toggle('opacity-60');
                    document.getElementById(`${cardId + 'eye'}`)?.classList.toggle('opacity-0');
                }
            })
        )
        
        tlCard.add(
            gsap.to(`#${cardId}`, {
                y: -10,
                x: 0,
                duration: 0.5,
                rotate: 10,
                ease: 'power1.inOut',
                onReverseComplete: () => {
                    document.getElementById(cardId)?.classList.toggle('z-0');
                    document.getElementById(cardId)?.classList.toggle('opacity-60');
                    document.getElementById(`${cardId + 'eye'}`)?.classList.toggle('opacity-0');
                }
            }), '>'
        )

        tlImage.play()
        tlCard.play();
    }

    const reverseShow = () => {
        tlImage.reverse().then(() => {
            tlImage.clear();
        })
        tlCard.reverse().then(() => {
            tlCard.clear();
        })
    }

    useIsomorphic(() => {
        
    }, [])

    return (
        <div id={id} className={`w-72 h-60 xl:w-[25vw] md:w-1/4 md:h-[400px] flex justify-center items-center ${className}`}>
            <div id={imageId} className='w-full h-full md:w-96 md:h-60 xl:w-full xl:h-64 absolute overflow-hidden rounded-2xl -rotate-12 shadow-xl opacity-40 transition-opacity duration-100 ease-in'>
                <Image className='object-cover' src={cover} fill alt='image' />
                <div
                    id={imageId + 'eye'}
                    className='w-7 h-7 bg-white  flex justify-center items-center rounded-full shadow-sm hover:bg-black hover:text-white 
                    cursor-pointer transition-all duration-200 ease-in-out absolute right-4 top-3 opacity-0'
                    onClick={reverseShow}

                >
                    <AiFillEye />
                </div>
            </div>
            <div id={cardId} className={`w-full h-full md:w-full md:h-60 xl:h-64 rounded-2xl flex flex-col justify-start items-start gap-3 px-5 py-4 shadow-xl absolute rotate-12 
            transition-opacity duration-100 ease-in ${Color}`}>
                <span className='font-extrabold text-base uppercase text-black flex justify-between items-center w-full'>
                    <span>project</span>
                    <div
                        className='w-7 h-7 bg-white  flex justify-center items-center rounded-full shadow-sm hover:bg-black hover:text-white 
                        cursor-pointer transition-all duration-200 ease-in-out'
                        id={cardId + 'eye'}
                        onClick={showImage}

                    >
                        <AiFillEye />
                    </div>
                </span>
                <span title={title} className='font-extrabold text-xl text-black '>
                    {titleSub}
                </span>
                <span title={desc} className=' text-slate-800 text-[0.65rem] md:text-xs'>
                    {description}
                </span>
                <div className='w-full h-1 bg-gray-600 opacity-20'>
                </div>
                <div className='w-full h-full flex justify-end items-center gap-2'>
                    <Link href={`/project/${slug}`} scroll={false} className='w-32 md:w-36 p-2 md:p-3 text-center rounded-full bg-black text-white font-bold text-base uppercase select-none 
                    hover:bg-white hover:text-black cursor-pointer transition-all duration-200 ease-in-out'>
                        visit
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card