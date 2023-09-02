import Card from "./Card"
import gsap from "gsap"
import { useIsomorphic } from "@/lib/useIsomorphic"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import Image from "next/image"
import Polygon2 from '../assets/Polygon 1.svg';
import Star2 from '../assets/Star 1.svg';
import Rectangle from '../assets/Rectangle 9.svg';
import Elips from '../assets/elips.svg';
import Star1 from '../assets/Star 2.svg';
import Triangle from '../assets/Polygon 2.svg';
import halfelips from '../assets/Ellipse 9.svg';
import { useMediaQuery } from "@/lib/useMediaQuery"
import type { Projects } from "@/lib/types"

function PinnedProjects({ projects, isSmall }: { projects: Projects, isSmall: boolean }) {

    useIsomorphic(() => {
        gsap.registerPlugin(ScrollTrigger)
        const tl = gsap.timeline();
        const tlLine = gsap.timeline();
        const particleTl = gsap.timeline({
            scrollTrigger: {
                trigger: '#projectContainer',
                start: 'top top',
                scrub: 1
            },
        });
        const lines = gsap.utils.toArray('#lineSvg') as any;
        const card = gsap.utils.toArray('#card') as any;
        const particles = gsap.utils.toArray('#particleShapeContainer');

        for (let i = 0; i < card.length; i++) {
            tl.to(card[i], {
                scrollTrigger: {
                    trigger: card[i],
                    start: isSmall ? 'top +=600' : 'top +=500px',
                    scrub: 0.5,
                },
                x: i % 2 == 0 ? isSmall ? 12 : 50 : isSmall ? -12 : -50,
                opacity: 1,
                duration: 1,
                ease: 'power4.out',
            }, '<0.3')
        }

        lines.forEach((line: any, index: number) => {
            tlLine.to(line, {
                scrollTrigger: {
                    trigger: line,
                    start: 'top +=400px',
                    scrub: 1,
                },
                strokeDashoffset: 700,
                duration: 1,
                ease: 'power4.out'
            }, '<0.3')
        })

        particles.forEach((particle: any) => {
            particleTl.to(particle, {
                y: -200,
                duration: 1,
                ease: 'power4.out'
            }, '<')
        })

    }, [])
    return (
        <div id="projectContainer" className="w-full h-auto flex flex-col justify-start items-center gap-64 md:gap-40 pb-56 relative mt-10 pt-10 md:pt-0 md:mt-0 overflow-x-hidden overflow-y-visible md:overflow-x-visible">
            {
                !isSmall && (
                    <>
                        <div id="particleShapeContainer" className="w-[45%] h-[85vh] absolute top-[15%] left-[1%]">
                            <div className="w-[90%] absolute h-36 flex flex-col justify-start items-start gap-2 uppercase rotate-90 right-40 top-64">
                                <span className="text-5xl md:text-[9rem] font-bold text-slate-900 text-start" style={{ lineHeight: '7rem' }}>
                                    second
                                </span>
                                <span className="text-xl font-bold text-slate-900 ml-3">
                                    project
                                </span>
                            </div>
                        </div>
                        <div id="particleShapeContainer" className="w-[45%] h-[85vh] absolute top-[0%] right-[1%] flex justify-center items-center">
                            <div className="w-[90%] absolute h-36 flex flex-col justify-start items-start gap-2 uppercase rotate-90 left-40 top-64">
                                <span className="text-[9rem] font-bold text-slate-900 text-start" style={{ lineHeight: '7rem' }}>
                                    first
                                </span>
                                <span className="text-xl font-bold text-slate-900 ml-3">
                                    project
                                </span>
                            </div>
                        </div>
                        <div id="particleShapeContainer" className="w-[45%] h-[85vh] absolute bottom-[28%] right-[1%]">
                            <div className="w-[90%] absolute h-36 flex flex-col justify-start items-start gap-2 uppercase rotate-90 left-40 top-64">
                                <span className="text-[9rem] font-bold text-slate-900 text-start" style={{ lineHeight: '7rem' }}>
                                    third
                                </span>
                                <span className="text-xl font-bold text-slate-900 ml-3">
                                    project
                                </span>
                            </div>
                        </div>
                        <div id="particleShapeContainer" className="w-[45%] h-[85vh] absolute bottom-[1%] left-[1%]">
                            <div className="w-[90%] absolute h-36 flex flex-col justify-start items-start gap-2 uppercase rotate-90 right-40 top-64">
                                <span className="text-[9rem] font-bold text-slate-900 text-start" style={{ lineHeight: '7rem' }}>
                                    fourth
                                </span>
                                <span className="text-xl font-bold text-slate-900 ml-3">
                                    project
                                </span>
                            </div>
                        </div>
                    </>
                )
            }
            {
                projects.map((project, index) => (
                    <div className="w-full" key={index}>
                        {
                            index % 2 === 0 ? (
                                <div className="w-full flex justify-start items-start relative">
                                    {
                                        index !== (projects.length - 1) && (
                                            <svg
                                                id="lineContainer"
                                                width="280"
                                                height={isSmall ? "200" : "330"}
                                                viewBox={isSmall ? "-20 100 280 160" : "-20 100 280 300"}
                                                fill="none"
                                                className="absolute right-[15%] top-[110%] md:right-[30%] md:top-40"
                                            >
                                                <path
                                                    id="lineSvg"
                                                    stroke="black"
                                                    fill="none"
                                                    strokeWidth={3}
                                                    strokeLinecap="round"
                                                    strokeMiterlimit={10}
                                                    strokeDasharray={1000}
                                                    strokeDashoffset={1000}
                                                    d={isSmall ? "M 40 100 L 40 260" : "M 40 130 C 180 170 180 290 150 380"}
                                                />
                                                <path
                                                    stroke="#FCE9F1"
                                                    fill="none"
                                                    strokeWidth={5}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeDasharray={15}
                                                    d={isSmall ? "M 40 100 L 40 260" : "M 40 130 C 180 170 180 290 150 380"}
                                                />
                                            </svg>
                                        )
                                    }
                                    <Card slug={project.slug as string} title={project.title} desc={project.excerpt as any} cover={project.coverImage} id="card" cardId={`redCard-${index}`} imageId={`red-${index}`} color="red" className="ml-0 md:ml-[18%] opacity-0" />
                                </div>
                            ) : (
                                <div className="w-full flex justify-end items-start relative">
                                    {
                                        index !== (projects.length - 1) && (
                                            <svg
                                                id="lineContainer"
                                                width="280"
                                                height={isSmall ? "200" : "380"}
                                                viewBox={isSmall ? "-20 100 280 160" : "-20 100 280 300"}
                                                fill="none"
                                                className="absolute right-[15%] top-[110%] md:left-[30%] md:top-40"
                                            >
                                                <path
                                                    id="lineSvg"
                                                    stroke="black"
                                                    fill="none"
                                                    strokeWidth={3}
                                                    strokeLinecap="round"
                                                    strokeMiterlimit={10}
                                                    strokeDasharray={1000}
                                                    strokeDashoffset={1000}
                                                    d={isSmall ? "M 40 100 L 40 260" : "M 200 110 C 50 170 50 310 100 380"}
                                                />
                                                <path
                                                    stroke="#FCE9F1"
                                                    fill="none"
                                                    strokeWidth={5}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeDasharray={16}
                                                    d={isSmall ? "M 40 100 L 40 260" : "M 200 110 C 50 170 50 310 100 380"}
                                                />
                                            </svg>
                                        )
                                    }
                                    <Card slug={project.slug as string} title={project.title} desc={project.excerpt as any} cover={project.coverImage} id="card" cardId={`yellowCard-${index}`} imageId={`yellow-${index}`} color="yellow" className="mr-0 md:mr-[18%] opacity-0" />
                                </div>
                            )
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default PinnedProjects