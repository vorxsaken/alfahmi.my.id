import { useIsomorphic } from '@/lib/useIsomorphic';
import Image from "next/image";
import AnimateWordUpIn from "@/animations/AnimateWordUpIn";
import AnimateUpIn from "@/animations/AnimateUpIn";
import { useTransitionReducer } from "@/contexts/Reducer"
import { gsap } from 'gsap';
import { ProjectHeadType } from '@/lib/types';
export default function ProjectHead({ title, date, coverImage, excerpt, demo }: ProjectHeadType) {
    const [data, dispatch] = useTransitionReducer();

    const setElement = () => {
        gsap.set('#gallery', {
            x: data.x1,
            y: data.y1
        });

        gsap.set('#galleryImage', {
            objectPosition: `${data.xObject}% ${data.yObject}%`
        });

        gsap.set('#galleryTitleOutside', {
            x: data.x2,
            y: data.y2,
        })

        gsap.set('#galleryTitleOutsideDelay', {
            x: data.x2,
            y: data.y2,
        });

        gsap.set("#galleryTitleInside", {
            x: data.x2 * 0.7,
            y: data.y2 * 0.7
        })
    }

    const animateELement = () => {
        const tl = gsap.timeline({
            defaults: {
                duration: 1,
                ease: 'power4.out'
            }
        });

        tl.to('#galleryTitleOutside', {
            yPercent: -50,
            opacity: 0,
        }, '<')

        tl.to('#galleryTitleOutsideDelay', {
            yPercent: -50,
            opacity: 0
        }, '<')

        tl.to('#galleryTitleInside', {
            yPercent: -100,
            opacity: 0
        }, '<')

        tl.to('#gallery', {
            width: '100%',
            height: '100%',
            x: 0,
            yPercent: -3
        }, '<')

        tl.to('#projectCoverContainer', {
            yPercent: -11
        }, '<')

        tl.to('#projectDescContainer', {
            opacity: 1,
        }, '<')

    }

    useIsomorphic(() => {
        setElement();
        animateELement();

    }, [])

    return (
        <div id="projectCoverContainer" className="w-full flex flex-col justify-start items-start mt-[10%] md:mt-[5%] gap-8">
            <div id="galleryContainer" className="w-full h-[110vh] md:h-[600px] xl:h-[100vh] flex justify-center items-center relative">
                <span
                    id="galleryTitleOutside"
                    className="absolute -z-10 text-center flex justify-center items-center rounded-sm font-extrabold md:text-5xl 
                    text-3xl top-[52px] md:top-16 py-4 px-2 uppercase"
                >
                    <span className="text-yellow-400 font-coiny">
                        {title}
                    </span>
                </span>
                <span
                    id="galleryTitleOutsideDelay"
                    className="absolute -z-10 text-center flex justify-center items-center rounded-sm font-extrabold md:text-5xl 
                    text-3xl top-14 md:top-16 py-4 px-2 uppercase"
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F31559] via-[#FF52A2] to-[#FFB07F] font-bungee-shade">
                        {title}
                    </span>
                </span>
                <div id="gallery" className={`w-72 h-96 md:w-[500px] md:h-96 relative flex justify-center items-start rounded-md`}>
                    <Image
                        id="galleryImage"
                        fill
                        src={coverImage}
                        alt='image'
                        className="object-cover md:object-cover"
                        style={{ objectPosition: '50% 60%' }}
                    />
                    <span
                        id="galleryTitleInside"
                        className="absolute z-20 text-center flex justify-center items-center rounded-sm font-extrabold md:text-5xl 
                        text-3xl -top-[12rem] md:-top-[11.5%] py-4 px-2 uppercase"
                    >
                        <span className="text-yellow-400 opacity-0">
                            {title}
                        </span>
                    </span>
                    <div
                        id="projectDescContainer"
                        className="w-full h-full bg-gradient-to-b from-transparent to-bright absolute opacity-0 flex justify-end
                        items-start flex-col gap-10 md:gap-8 px-6 md:px-12 backdrop-blur-sm pb-10 -bottom-1"
                    >
                        <AnimateWordUpIn
                            delay={0.5}
                            duration={1.5}
                            className="md:h-20 flex justify-start md:justify-end items-start gap-0 md:gap-0 overflow-hidden text-2xl 
                            md:text-6xl font-extrabold z-20 flex-wrap font-bungee-shade "
                        >
                            {title}
                        </AnimateWordUpIn>
                        <div className="w-full md:w-1/3 flex flex-col justify-center items-center gap-4 z-20">
                            <div id="projectDesc" className=" w-full text-sm font-thin flex flex-col justify-start items-start gap-1">
                                <AnimateWordUpIn
                                    delay={0.5}
                                    duration={1.5}
                                    className="h-6 md:h-8 flex justify-end items-start overflow-hidden text-base md:text-2xl 
                                    font-bold font-inria-serif md:font-bungee-shade "
                                >
                                    About
                                </AnimateWordUpIn>
                                <AnimateUpIn delay={0.5} duration={1} className='text-xs md:text-sm'>
                                    {excerpt}
                                </AnimateUpIn>
                            </div>
                            <div
                                id="projectDate"
                                className=" w-full text-sm font-thin flex flex-col justify-start items-start gap-1"
                            >
                                <AnimateWordUpIn
                                    delay={0.5}
                                    duration={1.5}
                                    className="h-6 md:h-8 flex justify-end items-start overflow-hidden text-base md:text-2xl 
                                    font-bold font-inria-serif md:font-bungee-shade"
                                >
                                    Date
                                </AnimateWordUpIn>
                                <AnimateUpIn
                                    delay={0.5}
                                    duration={1}
                                    className='text-xs md:text-sm'
                                >
                                    {date}
                                </AnimateUpIn>
                            </div>
                            <div
                                id="projectDate"
                                className=" w-full text-sm font-thin flex flex-col justify-start items-start gap-1"
                            >
                                <AnimateWordUpIn
                                    delay={0.5}
                                    duration={1.5}
                                    className="h-6 md:h-8 flex justify-end items-start overflow-hidden text-base md:text-2xl 
                                    font-bold font-inria-serif md:font-bungee-shade"
                                >
                                    Demo
                                </AnimateWordUpIn>
                                <AnimateUpIn
                                    delay={0.5}
                                    duration={1}
                                    className='text-xs md:text-sm'
                                >
                                    <a href={demo} target="_blank" rel="noopener noreferrer">{title}</a>
                                </AnimateUpIn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

