import Transition from "@/animations/Transition"
import { Inria_Serif } from 'next/font/google'
import Image from "next/image"
import Clover from '../assets/clover.png'
import Navigation from "@/components/Navigation"
import AnimateUpIn from "@/animations/AnimateUpIn"
import AnimateWordUpIn from "@/animations/AnimateWordUpIn"
import Layout from "@/components/Layout"
const Inria = Inria_Serif({ weight: "300", subsets: ["latin"] });

function About() {
    return (
        <Layout title="About" className="overflow-y-auto">
            <div className="w-full h-[150vh] md:h-[250vh] relative">
                {/* background */}
                <div className="w-full h-full relative top-0 overflow-hidden px-8 py-4">
                    <div className="w-[95%] h-full fixed scale-125 md:scale-100 md:absolute flex justify-between items-start opacity-25">
                        {
                            [...Array(3)].map((i, index) => (
                                <div key={index} className="w-[30%] h-full border border-blue-300">
                                </div>
                            ))
                        }
                    </div>
                    <div className="w-[95%] h-full fixed scale-125 md:scale-100 md:absolute flex flex-col justify-between items-start opacity-25">
                        {
                            [...Array(4)].map((i, index) => (
                                <div key={index} className="w-full h-[22%] border border-blue-300">
                                </div>
                            ))
                        }
                    </div>
                    <div className="w-full h-full mt-[30%] md:mt-0 flex flex-col justify-start items-start gap-20 md:gap-6 z-50">
                        <div className={`w-full h-[10%] hidden md:flex justify-end items-end text-[#4A4A4A] relative ${Inria.className}`}>
                            <AnimateUpIn
                                duration={1}
                                delay={0.9}
                                className="w-[300px] flex justify-start items-start gap-4 text-xs mr-0 md:mr-40 top-36 absolute opacity-0"
                            >
                                <div className="w-2 h-2 rounded-full bg-[#4A4A4A] mt-2 opacity-60">
                                </div>
                                <p className="w-full">
                                    i like anime stuff and game. for game, MOBA genre get my interest. especially mobile legends, always get me stressing and emotional
                                </p>
                            </AnimateUpIn>
                        </div>
                        <div className={`w-full h-[10%] flex justify-start items-end text-[#4A4A4A] ${Inria.className}`}>
                            <div className="w-[400px] h-36 flex flex-col justify-start items-start gap-5 text-xs ml-0 md:ml-8">
                                <AnimateUpIn
                                    className="opacity-0"
                                    duration={0.5}
                                    delay={0.8}
                                >
                                    <div className="w-11 h-11 relative overflow-hidden opacity-40">
                                        <Image src={Clover} alt='clover' fill className="object-cover select-none pointer-events-none" />
                                    </div>
                                </AnimateUpIn>
                                <AnimateUpIn
                                    className="opacity-0"
                                    duration={0.5}
                                    delay={0.9}
                                >
                                    <p>
                                        Hi i am fahmi, frontend developer from indonesia, undergraduated from one of university from sleman city indonesia, in programming world i love frontend things, like design, and doing javascript things, althougt frontend world is cover soooo many things i love to keep learning.
                                    </p>
                                </AnimateUpIn>
                            </div>
                        </div>
                        <div className="w-full h-auto md:h-[50%] flex justify-end items-start">
                            <div
                                className="w-full md:w-[70%] h-full flex flex-col justify-start items-end relative text-5xl md:text-[11rem] font-extrabold text-[#808080]"
                                style={{ lineHeight: 1 }}
                            >
                                <AnimateWordUpIn
                                    className="w-full h-14 md:h-40 flex justify-end items-start gap-4 overflow-hidden"
                                    delay={0.8}
                                    duration={0.5}
                                >
                                    + I LOVE
                                </AnimateWordUpIn>
                                <AnimateWordUpIn
                                    className="w-full h-14 md:h-40 flex justify-end items-start gap-4 overflow-hidden relative -right-4 text-[#373737]"
                                    delay={0.8}
                                    duration={0.5}
                                >
                                    FRONT
                                </AnimateWordUpIn>
                                <AnimateWordUpIn
                                    className="w-full h-14 md:h-40 flex justify-end items-start gap-4 overflow-hidden relative right-8 md:right-20 text-[#373737]"
                                    delay={0.8}
                                    duration={0.5}
                                >
                                    END ---
                                </AnimateWordUpIn>
                                <AnimateWordUpIn
                                    className="w-full h-14 md:h-40 flex justify-end items-start gap-4 overflow-hidden"
                                    delay={0.8}
                                    duration={0.5}
                                >
                                    STUFF
                                </AnimateWordUpIn>
                            </div>
                        </div>
                        <div className={`w-full h-auto md:h-[30%] flex md:justify-center justify-start items-center text-[#4A4A4A] ${Inria.className}`}>
                            <AnimateUpIn
                                duration={1}
                                delay={0.9}
                                className="w-full md:w-[400px] flex justify-start items-start gap-4 text-xs ml-0 md:ml-64 opacity-0"
                            >
                                <div className="w-2 h-2 rounded-full bg-[#4A4A4A] mt-2 opacity-60">
                                </div>
                                <p className="w-full">
                                    at first, i really confused how do i start programming, but as time goes on, programming become easier, but i still have so many things to learn
                                </p>
                            </AnimateUpIn>
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default About