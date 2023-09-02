import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { TransitionContext } from "@/contexts/Context";
import { useContext } from "react";
import { useTransitionReducer } from "@/contexts/Reducer";
import Router from 'next/router';

export default function ProjectGallery({ id, image, title, route }: { id: string, route: string, image: StaticImageData, title: string }) {

    var galleryXPosition: number;
    var galleryYPosition: number;
    var galleryTitleXPosition: number;
    var galleryTitleYPosition: number;
    var objectXPosition: number;
    var objectYPosition: number;

    const [data, dispatch] = useTransitionReducer();
    const { timeline } = useContext(TransitionContext) as any;

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

    const project = () => {
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

        Router.push('/project/123');

    }
    return (
        <div id="galleryContainer" className="w-full h-[600px] flex justify-center items-center absolute opacity-0 md:top-[9%] ">
            <span id="galleryTitleOutside" className="absolute -z-10 text-center flex justify-center items-center rounded-sm font-extrabold md:text-5xl 
             text-3xl top-[52px] md:top-16 py-4 px-2"
            >
                <span className="text-red-700">
                    #1 CAR RENTAL
                </span>
            </span>
            <span id="galleryTitleOutsideDelay" className="absolute -z-10 text-center flex justify-center items-center rounded-sm font-extrabold md:text-5xl 
            text-3xl top-14 md:top-16 py-4 px-2"
            >
                <span className="text-black">
                    #1 CAR RENTAL
                </span>
            </span>
            <div onClick={project} id="gallery" className={`w-72 h-96 md:w-72 md:h-96 bg-red-300 relative overflow-hidden flex justify-center items-start`}>
                <Image id="galleryImage" fill src={image} alt='image' className="object-cover md:object-none" style={{ objectPosition: '50% 60%' }} />
                <span id="galleryTitleInside" className="w-[400px] absolute z-10 text-center flex justify-center items-center rounded-sm font-extrabold md:text-5xl 
              text-3xl -top-[12rem] md:-top-[11.5%] py-4 px-2"
                >
                    <span className="text-red-700">
                        #1 CAR RENTAL
                    </span>
                </span>
            </div>
        </div>
    )
}
