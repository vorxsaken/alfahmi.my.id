import Router from "next/router";
import { TransitionContext } from "@/contexts/Context";
import { useContext } from "react";
import Image from "next/image";
import { useTransitionReducer } from "@/contexts/Reducer";
import { useIsomorphic } from "@/lib/useIsomorphic";
import gsap from 'gsap'
import Observer from "gsap/dist/Observer";
import { Projects } from "@/lib/types";

export default function Gallerys({ projects }: { projects: Projects }) {

    var galleryXPosition: number;
    var galleryYPosition: number;
    var galleryTitleXPosition: number;
    var galleryTitleYPosition: number;
    var objectXPosition: number;
    var objectYPosition: number;
    var currentIndex = -1;
    var galleryContainer: any[];
    var animating = false;
    var wrap: any;

    const [data, dispatch] = useTransitionReducer();
    const { timeline } = useContext(TransitionContext) as any;

    const goToProject = (url: string) => {
        timeline.clear();
        dispatch({
            type: 'SET_PROJECT_TRANSITION',
            projectTransition: false
        })
        dispatch({
            type: 'SET_PROJECT_POSITION',
            x1: galleryXPosition,
            y1: galleryYPosition,
            x2: galleryTitleXPosition,
            y2: galleryTitleYPosition,
            xObject: objectXPosition,
            yObject: objectYPosition
        })

        Router.push(url);

    }

    const linear = (value: number, oldMin: number, oldMax: number, newMin: number, newMax: number) => {
        return ((value - oldMin) / (oldMax - oldMin)) * (newMax - newMin) + newMin;
    }

    const mouseMove = (e: any) => {
        let moveX = linear(e.clientX, 0, window.innerWidth, - (window.innerWidth * 0.15), (window.innerWidth * 0.15));
        let moveY = linear(e.clientY, 0, window.innerHeight, - (window.innerHeight * 0.15), (window.innerHeight * 0.15));
        galleryXPosition = moveX / 5;
        galleryYPosition = moveY / 10;
        galleryTitleXPosition = moveX / 1.5;
        galleryTitleYPosition = moveY / 2.5;
        objectXPosition = 50 + (moveX / 15);
        objectYPosition = 60 + (moveY / 6);
        const gallerys = gsap.utils.toArray('#gallery') as any;
        const galleryImages = gsap.utils.toArray('#galleryImage') as any;
        const galleryTitleOutside = gsap.utils.toArray('#galleryTitleOutside') as any;
        const galleryTitleOutsideDelay = gsap.utils.toArray('#galleryTitleOutsideDelay') as any;
        const galleryTitleInside = gsap.utils.toArray('#galleryTitleInside') as any;

        for (let i = 0; i < gallerys.length; i++) {
            gsap.to(gallerys[i], {
                x: galleryXPosition,
                y: galleryYPosition,
                ease: 'power4.out',
                duration: 1
            })

            gsap.to(galleryImages[i], {
                ease: 'power4.out',
                duration: 1,
                objectPosition: `${objectXPosition}% ${objectYPosition}%`
            })

            gsap.to(galleryTitleOutside[i], {
                x: galleryTitleXPosition,
                y: galleryTitleYPosition,
                ease: 'power4.out',
                duration: 1
            })

            gsap.to(galleryTitleOutsideDelay[i], {
                x: galleryTitleXPosition,
                y: galleryTitleYPosition,
                ease: 'power4.out',
                delay: 0.005,
                duration: 1
            })

            gsap.to(galleryTitleInside[i], {
                x: galleryTitleXPosition * 0.7, // smaller gallerys x offside , smaller galleryTitleInside x offside multiplier
                y: galleryTitleYPosition * 0.7, // smaller gallerys y offside , smaller galleryTitleInside y offside multiplier
                delay: 0.005,
                ease: 'power4.out',
                duration: 1
            })
        }
    }

    const scroll = (index: number, direction: number) => {
        index = wrap(index);
        animating = true;

        let dOut = direction === -1 ? 1 : -1;

        const tl = gsap.timeline({
            defaults: {
                duration: 0.5,
                ease: 'power1.out'
            },
            onComplete: () => {
                animating = false
            }
        })

        if (currentIndex >= 0) {
            gsap.set(galleryContainer[currentIndex], { zIndex: 0 });
            tl.to(galleryContainer[currentIndex], { opacity: 0, yPercent: 100 * dOut });
        }

        gsap.set(galleryContainer[index], { zIndex: 1, opacity: 0 });
        tl.fromTo(galleryContainer[index],
            { yPercent: 100 * direction },
            {
                yPercent: 0,
                opacity: 1,
            }, '<'
        )

        currentIndex = index;
    }

    useIsomorphic(() => {
        gsap.registerPlugin(Observer);
        galleryContainer = gsap.utils.toArray('#galleryContainer');
        wrap = gsap.utils.wrap(0, galleryContainer.length);

        Observer.create({
            target: '#projectsContainer',
            type: "wheel, touch, pointer",
            wheelSpeed: -1,
            onUp: () => !animating && scroll(currentIndex + 1, 1),
            onDown: () => !animating && scroll(currentIndex - 1, -1),
            tolerance: 10,
            preventDefault: true
        })

        const timeout = setTimeout(() => {
            scroll(0, 1);
        }, 800)

        return () => {
            clearTimeout(timeout);
        }

    }, []);

    return (
        <div id="projectsContainer" onMouseMove={(e) => mouseMove(e)} className="w-full h-screen flex justify-center items-start overflow-hidden relative">
            {
                projects.map((project) => (
                    <div key={project.slug} id="galleryContainer" className={`w-full h-[600px] flex justify-center items-center absolute opacity-0 md:top-[9%] top-[4%]  select-none font-coiny`}>
                        <span id="galleryTitleOutside" className="absolute -z-10 text-center flex justify-center items-center rounded-sm font-extrabold md:text-5xl 
                        text-3xl top-14 md:top-16 py-4 px-2"
                        >
                            <span className="text-[#CA4E79]">
                                {project.title}
                            </span>
                        </span>
                        <span id="galleryTitleOutsideDelay" className="absolute -z-10 text-center flex justify-center items-center rounded-sm font-extrabold md:text-5xl 
                        text-3xl top-14 md:top-16 py-4 px-2"
                        >
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F31559] via-[#FF52A2] to-[#FFB07F]">
                                {project.title}
                            </span>
                        </span>
                        <div onClick={() => goToProject(`/project/${project.slug}`)} id="gallery" className={`w-72 h-96 md:w-[500px] md:h-96 bg-red-300 relative overflow-hidden flex justify-center items-start rounded-md`}>
                            <Image id="galleryImage" fill src={project.coverImage} alt='image' className="object-cover md:object-cover" style={{ objectPosition: '50% 60%' }} />
                            <span id="galleryTitleInside" className="w-[100vw] absolute z-10 text-center flex justify-center items-center rounded-sm font-extrabold md:text-5xl 
                            text-3xl -top-[3.2rem] md:-top-[11.5%] py-4 px-2"
                            >
                                <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#F31559] via-[#FF52A2] from-[#FFB07F]">
                                    {project.title}
                                </span>
                            </span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
