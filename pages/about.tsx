import Image from "next/image"
import Clover from '../assets/clover.png'
import AnimateUpIn from "@/animations/AnimateUpIn"
import AnimateWordUpIn from "@/animations/AnimateWordUpIn"
import Layout from "@/components/Layout"

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
                    <div className="w-full h-full mt-[50%] md:mt-0 flex flex-col justify-start items-start gap-36 md:gap-6 z-50">
                        <div className={`w-full h-[10%] hidden md:flex justify-end items-end text-[#4A4A4A] relative font-inria-serif`}>
                            <AnimateUpIn
                                duration={1}
                                delay={0.9}
                                className="w-[300px] md:w-[400px] flex justify-start items-start gap-4 text-xs md:text-[0.7rem] mr-0 md:mr-40 top-36 absolute opacity-0"
                            >
                                <div className="w-2 h-2 rounded-full bg-[#4A4A4A] mt-2 opacity-60">
                                </div>
                                <p className="w-full">
                                    {`In my work as a frontend developer, I strive to make the web a better place one project at a time. While I've had the privilege of working on some exciting projects, I remain grounded in the knowledge that there's always more to discover and master in this ever-evolving field.`}
                                </p>
                            </AnimateUpIn>
                        </div>
                        <div className={`w-full h-[10%] flex justify-start items-end text-[#4A4A4A] font-inria-serif`}>
                            <div className="w-[400px] md:w-[500px] h-36 flex flex-col justify-start items-start gap-5 text-xs md:text-[0.7rem] ml-0 md:ml-8">
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
                                        {`Hello! I'm a frontend developer who's passionate about creating engaging and user-friendly web experiences. My journey in web development began with a curious exploration of HTML and CSS, and I've been hooked ever since. While I don't have all the answers, I'm always eager to learn and improve, and I find great satisfaction in solving design and coding challenges. I believe in the power of collaboration and am grateful for the opportunity to work with talented designers and developers who continuously inspire me to grow.`}
                                    </p>
                                </AnimateUpIn>
                            </div>
                        </div>
                        <div className="w-full flex justify-end items-start">
                            <div
                                className="w-full md:w-[80%] h-full flex flex-col justify-start items-end relative text-7xl md:text-[15rem] font-extrabold text-[#808080] font-coiny"
                                style={{ lineHeight: 1 }}
                            >
                                <AnimateWordUpIn
                                    className="w-full h-20 md:h-64 flex justify-end items-start gap-2 overflow-hidden"
                                    delay={0.8}
                                    duration={0.5}
                                >
                                    + I LOVE
                                </AnimateWordUpIn>
                                <AnimateWordUpIn
                                    className="w-full h-20 md:h-64 flex justify-end items-start gap-4 overflow-hidden relative -right-4 text-[#373737]"
                                    delay={0.8}
                                    duration={0.5}
                                >
                                    FRONT
                                </AnimateWordUpIn>
                                <AnimateWordUpIn
                                    className="w-full h-20 md:h-64 flex justify-end items-start gap-4 overflow-hidden relative right-8 md:right-20 text-[#373737]"
                                    delay={0.8}
                                    duration={0.5}
                                >
                                    END ---
                                </AnimateWordUpIn>
                                <AnimateWordUpIn
                                className="w-full h-20 md:h-64 flex justify-end items-start gap-4 overflow-hidden"
                                    delay={0.8}
                                    duration={0.5}
                                >
                                    STUFF
                                </AnimateWordUpIn>
                            </div>
                        </div>
                        <div className={`w-full h-auto md:h-[30%] flex md:justify-center justify-start items-center text-[#4A4A4A] font-inria-serif`}>
                            <AnimateUpIn
                                duration={1}
                                delay={0.9}
                                className="w-full md:w-[500px] flex justify-start items-start gap-4 text-xs md:text-[0.7rem] ml-0 md:ml-64 opacity-0"
                            >
                                <div className="w-2 h-2 rounded-full bg-[#4A4A4A] mt-2 opacity-60">
                                </div>
                                <p className="w-full">
                                    {`I enjoy the camaraderie of the development community and love sharing knowledge and experiences with others. As a frontend developer, I'm on a perpetual quest for improvement, and I'm genuinely excited about what the future holds in this dynamic and rewarding field.`}
                                </p>
                            </AnimateUpIn>
                        </div>
                        <div className={`w-full h-[10%] md:hidden flex justify-end items-end text-[#4A4A4A] relative font-inria-serif`}>
                            <AnimateUpIn
                                duration={1}
                                delay={0.9}
                                className="w-[300px] md:w-[400px] flex justify-start items-start gap-4 text-xs opacity-0 relative -top-36 -left-3"
                            >
                                <div className="w-2 h-2 rounded-full bg-[#4A4A4A] mt-2 opacity-60">
                                </div>
                                <p className="w-full">
                                    {`In my work as a frontend developer, I strive to make the web a better place one project at a time. While I've had the privilege of working on some exciting projects, I remain grounded in the knowledge that there's always more to discover and master in this ever-evolving field.`}
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