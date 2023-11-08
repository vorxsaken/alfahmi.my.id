import Card from "./Card"
import gsap from "gsap"
import { useIsomorphic } from "@/lib/useIsomorphic"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import type { Projects } from "@/lib/types"

function PinnedProjects({ projects, isSmall }: { projects: Projects, isSmall: boolean }) {

    useIsomorphic(() => {
        gsap.registerPlugin(ScrollTrigger)
        const tl = gsap.timeline();
        const tlLine = gsap.timeline();
        const particleTl = gsap.timeline();
        const lines = gsap.utils.toArray('#lineSvg') as any;
        const card = gsap.utils.toArray('#card') as any;
        const particles = gsap.utils.toArray('#particleShapeContainer');
        
        for (let i = 0; i < card.length; i++) {
            tl.to(card[i], {
                scrollTrigger: {
                    trigger: card[i],
                    start: isSmall ? 'top +=600' : 'top +=600px',
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
                    start: 'top +=500px',
                    scrub: 1,
                },
                strokeDashoffset: 700,
                duration: 1,
                ease: 'power4.out'
            }, '<0.3')
        })

        particles.forEach((particle: any) => {
            particleTl.fromTo(particle, {
                y: 300
            }, {
                scrollTrigger: {
                    trigger: particle,
                    start: 'top +=600px',
                    scrub: 1
                },
                y: -100,
                duration: 1,
                ease: 'power4.out'
            }, '<')
        })

        const circle1Tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#circle-1-2-1',
                start: '-=150 +=500',
                end: '-=150 +=250',
                toggleActions: 'restart resume restart resume',
            }
        });

        const circle2Tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#circle-2-1-1',
                start: '-=300 +=500',
                end: '-=300 +=250',
                toggleActions: 'restart resume restart resume',
            }
        })

        const circle3Tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#circle-3-2-1',
                start: '-=150 +=500',
                end: '-=150 +=250',
                toggleActions: 'restart resume restart resume',
            }
        });

        const circle4Tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#circle-4-2-1',
                start: '-=300 +=500',
                end: '-=300 +=250',
                toggleActions: 'restart resume restart resume',
            }
        });

        for (let i = 1; i < 5; i++) {
            circle1Tl.fromTo(`#circle-1-${i}-1`, { scale: 0 }, { scale: 1, duration: 1, ease: 'power4.out' }, 0.1 * i);
            circle1Tl.fromTo(`#circle-1-${i}-2`, { scale: 0 }, { scale: 1, duration: 0.7, ease: 'power4.out' }, `<0.1`);
        }

        for (let i = 1; i < 5; i++) {
            circle2Tl.fromTo(`#circle-2-${i}-1`, { scale: 0 }, { scale: 1 }, 0.1 * i);
            circle2Tl.fromTo(`#circle-2-${i}-2`, { scale: 0 }, { scale: 1, duration: 0.7, ease: 'power4.out' }, `<0.1`);
        }

        for (let i = 1; i < 5; i++) {
            circle3Tl.fromTo(`#circle-3-${i}-1`, { scale: 0 }, { scale: 1, duration: 1, ease: 'power4.out' }, 0.1 * i);
            circle3Tl.fromTo(`#circle-3-${i}-2`, { scale: 0 }, { scale: 1, duration: 0.7, ease: 'power4.out' }, `<0.1`);
        }

        for (let i = 1; i < 5; i++) {
            circle4Tl.fromTo(`#circle-4-${i}-1`, { scale: 0 }, { scale: 1, duration: 1, ease: 'power4.out' }, 0.1 * i);
            circle4Tl.fromTo(`#circle-4-${i}-2`, { scale: 0 }, { scale: 1, duration: 0.7, ease: 'power4.out' }, `<0.1`);
        }
    }, [])

    return (
        <div id="projectContainer" className="w-full md:h-full flex flex-col justify-start items-center gap-56 md:gap-40 pb-56 relative mt-10 pt-10 
        md:pt-0 md:mt-0 overflow-x-hidden overflow-y-visible md:overflow-x-visible">
            {
                !isSmall && (
                    <div className="font-bungee-shade">
                        <div id="particleShapeContainer" className="w-[45%] h-[700px] absolute top-[25%] left-[0%]">
                            {/* circle 2 */}
                            <div className="w-[25vw] h-[25vw] rounded-full bg-lime-300 absolute top-10 flex justify-center items-center" id="circle-2-1-1">
                                <div className="w-[26vw] h-[26vw] rounded-full bg-bright" id="circle-2-1-2">
                                </div>
                            </div>
                            <div className="w-[20vw] h-[20vw] rounded-full bg-sky-300 absolute right-32 top-44 flex justify-center items-center" id="circle-2-2-1">
                                <div className="w-[21vw] h-[21vw] rounded-full bg-bright" id="circle-2-2-2">
                                </div>
                            </div>
                            <div className="w-[18vw] h-[18vw] rounded-full bg-pink-300 absolute left-2 bottom-36 flex justify-center items-center" id="circle-2-3-1">
                                <div className="w-[19vw] h-[19vw] rounded-full bg-bright" id="circle-2-3-2">
                                </div>
                            </div>
                            <div className="w-[20vw] h-[20vw] rounded-full bg-purple-300 absolute right-44 bottom-10 flex justify-center items-center" id="circle-2-4-1">
                                <div className="w-[21vw] h-[21vw] rounded-full bg-bright" id="circle-2-4-2">
                                </div>
                            </div>
                            {/* circle 2 */}
                            <div className="w-[90%] absolute h-36 flex flex-col justify-start items-start gap-1 uppercase rotate-90 right-40 top-64">
                                <span className="text-5xl md:text-[7rem] font-bold text-start text-grad-red-purple" style={{ lineHeight: '7rem' }}>
                                    second
                                </span>
                                <span className="text-xl font-bold ml-3 text-grad-red-purple">
                                    project
                                </span>
                            </div>
                        </div>
                        <div id="particleShapeContainer" className="w-[45%] h-[700px] absolute top-[6%] right-[0%] flex justify-center items-center">
                            {/* circle 1 */}
                            <div className="absolute w-[50vh] h-[50vh] rounded-full bg-pink-300 right-32 top-28 flex justify-center items-center" id="circle-1-1-1" >
                                <div className="w-[51vh] h-[51vh] rounded-full bg-bright" id="circle-1-1-2">
                                </div>
                            </div>
                            <div className="absolute w-[25vh] h-[25vh] rounded-full bg-purple-300 right-32 top-0 flex justify-center items-center" id="circle-1-2-1" >
                                <div className="w-[26vh] h-[26vh] rounded-full bg-bright" id="circle-1-2-2">
                                </div>
                            </div>
                            <div className="absolute w-[40vh] h-[40vh] rounded-full bg-red-300 right-0 bottom-40 flex justify-center items-center" id="circle-1-3-1" >
                                <div className="w-[41vh] h-[41vh] rounded-full bg-bright" id="circle-1-3-2">
                                </div>
                            </div>
                            <div className="absolute w-[40vh] h-[40vh] rounded-full bg-yellow-300 right-0 top-20 flex justify-center items-center" id="circle-1-4-1" >
                                <div className="w-[41vh] h-[41vh] rounded-full bg-bright" id="circle-1-4-2">
                                </div>
                            </div>
                            {/* circle 1 */}
                            <div className="w-[90%] absolute h-36 flex flex-col justify-start items-start gap-1 uppercase rotate-90 left-40 top-64">
                                <span className="text-[7rem] font-bold text-start text-grad-red-yellow" style={{ lineHeight: '7rem' }}>
                                    first
                                </span>
                                <span className="text-xl font-bold text-grad-red-yellow ml-3">
                                    project
                                </span>
                            </div>
                        </div>
                        <div id="particleShapeContainer" className="w-[45%] h-[700px] absolute bottom-[24%] right-[1%]">
                            {/* circle 3 */}
                            <div className="absolute w-[50vh] h-[50vh] rounded-full bg-pink-300 right-32 top-28 flex justify-center items-center" id="circle-3-1-1" >
                                <div className="w-[51vh] h-[51vh] rounded-full bg-bright" id="circle-3-1-2">
                                </div>
                            </div>
                            <div className="absolute w-[25vh] h-[25vh] rounded-full bg-purple-300 right-32 top-0 flex justify-center items-center" id="circle-3-2-1" >
                                <div className="w-[26vh] h-[26vh] rounded-full bg-bright" id="circle-3-2-2">
                                </div>
                            </div>
                            <div className="absolute w-[40vh] h-[40vh] rounded-full bg-red-300 right-0 bottom-40 flex justify-center items-center" id="circle-3-3-1" >
                                <div className="w-[41vh] h-[41vh] rounded-full bg-bright" id="circle-3-3-2">
                                </div>
                            </div>
                            <div className="absolute w-[40vh] h-[40vh] rounded-full bg-yellow-300 right-0 top-20 flex justify-center items-center" id="circle-3-4-1" >
                                <div className="w-[41vh] h-[41vh] rounded-full bg-bright" id="circle-3-4-2">
                                </div>
                            </div>
                            {/* circle 3 */}
                            <div className="w-[90%] absolute h-36 flex flex-col justify-start items-start gap-2 uppercase rotate-90 left-40 top-64">
                                <span className="text-[7rem] font-bold text-grad-red-yellow text-start" style={{ lineHeight: '7rem' }}>
                                    third
                                </span>
                                <span className="text-xl font-bold text-grad-red-yellow ml-3">
                                    project
                                </span>
                            </div>
                        </div>
                        <div id="particleShapeContainer" className="w-[45%] h-[700px] absolute bottom-[2%] left-[1%]">
                            {/* circle 4 */}
                            <div className="w-[25vw] h-[25vw] rounded-full bg-lime-300 absolute top-10 flex justify-center items-center" id="circle-4-1-1">
                                <div className="w-[26vw] h-[26vw] rounded-full bg-bright" id="circle-4-1-2">
                                </div>
                            </div>
                            <div className="w-[20vw] h-[20vw] rounded-full bg-sky-300 absolute right-32 top-44 flex justify-center items-center" id="circle-4-2-1">
                                <div className="w-[21vw] h-[21vw] rounded-full bg-bright" id="circle-4-2-2">
                                </div>
                            </div>
                            <div className="w-[18vw] h-[18vw] rounded-full bg-pink-300 absolute left-2 bottom-36 flex justify-center items-center" id="circle-4-3-1">
                                <div className="w-[19vw] h-[19vw] rounded-full bg-bright" id="circle-4-3-2">
                                </div>
                            </div>
                            <div className="w-[20vw] h-[20vw] rounded-full bg-purple-300 absolute right-44 bottom-10 flex justify-center items-center" id="circle-4-4-1">
                                <div className="w-[21vw] h-[21vw] rounded-full bg-bright" id="circle-4-4-2">
                                </div>
                            </div>
                            {/* circle 4 */}
                            <div className="w-[90%] absolute h-36 flex flex-col justify-start items-start gap-2 uppercase rotate-90 right-40 top-64">
                                <span className="text-[7rem] font-bold text-grad-red-purple text-start" style={{ lineHeight: '7rem' }}>
                                    fourth
                                </span>
                                <span className="text-xl font-bold text-grad-red-purple ml-3">
                                    project
                                </span>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                projects.map((project, index) => (
                    <div className="w-full" key={index}>
                        {
                            index % 2 === 0 ? (
                                <div className="w-full h-[280px] md:h-[400px] flex justify-start items-start relative">
                                    {
                                        index !== (projects.length - 1) && (
                                            <svg
                                                id="lineContainer"
                                                width="280"
                                                height={isSmall ? "200" : "330"}
                                                viewBox={isSmall ? "-20 100 280 160" : "-20 100 280 300"}
                                                fill="none"
                                                className="absolute right-[15%] top-[90%] md:right-[30%] 2xl:right-[35%] md:top-[71%] 2xl:top-[70%]"
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
                                    <Card
                                        slug={project.slug as string}
                                        title={project.title}
                                        desc={project.excerpt as any}
                                        cover={project.coverImage}
                                        id="card"
                                        cardId={`redCard-${index}`}
                                        imageId={`red-${index}`}
                                        color="red"
                                        className="-ml-2 xl:ml-[23%] opacity-0 absolute top-0"
                                    />
                                </div>
                            ) : (
                                <div className="w-full h-[280px] md:h-[400px] flex justify-end items-start relative">
                                    {
                                        index !== (projects.length - 1) && (
                                            <svg
                                                id="lineContainer"
                                                width="280"
                                                height={isSmall ? "200" : "380"}
                                                viewBox={isSmall ? "-20 100 280 160" : "-20 100 280 300"}
                                                fill="none"
                                                className="absolute right-[15%] top-[92%] md:left-[35%] md:top-[69%] 2xl:top-[75%] 2xl:left-[40%]"
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
                                    <Card
                                        slug={project.slug as string}
                                        title={project.title}
                                        desc={project.excerpt as any}
                                        cover={project.coverImage}
                                        id="card"
                                        cardId={`yellowCard-${index}`}
                                        imageId={`yellow-${index}`}
                                        color="yellow"
                                        className="mr-0 md:mr-[18%] opacity-0 absolute md:top-0 -top-7"
                                    />
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