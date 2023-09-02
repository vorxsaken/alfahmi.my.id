import { useIsomorphic } from "@/lib/useIsomorphic"
import { useMediaQuery } from "@/lib/useMediaQuery";
import { gsap } from "gsap";
import { Inria_Serif } from 'next/font/google'
import { AiFillGithub, AiFillTwitterCircle, AiFillInstagram} from 'react-icons/ai'
const inria = Inria_Serif({weight: "700", subsets: ["latin"]});

function Footer() {
    const isSmall = useMediaQuery('(max-width: 600px');

    useIsomorphic(() => {
        const wave = document.querySelector('#wave')
        const title = document.querySelector('#title');

        const shape2 = 'M 0 100 V 50 Q 50 0 100 50 V 100 z';
        const shape2Small = 'M 0 100 V 50 Q 50 30 100 50 V 100 z';
        const shape3 = 'M 0 100 V 0 Q 50 0 100 0 V 100 z'

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#circleContainer',
                start: 'top +=400px',
                end: 'top top',
                scrub: 1
            }
        });

        tl.to(wave, {
            attr: { d: isSmall ? shape2Small : shape2 },
            duration: 0.8,
            ease: 'power2.easeIn'
        })

        tl.to(wave, {
            attr: {
                d: shape3
            },
            duration: 0.8,
            ease: 'power2.In',

        })
        
    }, [isSmall])

    return (
        <div id="circleContainer" className="w-full h-screen flex justify-center items-center -mt-20 relative overflow-hidden">
            <svg id="waveSvg" className="w-full h-full absolute top-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path id="wave" fill="#080202" d="M 0 100 V 100 Q 50 100 100 100 V 100 z" />
            </svg>
            <div className="w-full h-full top-0 absolute font-extrabold text-[#FCE9F1] flex flex-col justify-start items-center gap-[7.5rem] md:gap-[6.5rem] py-10 opacity-5 md:opacity-10">
                {
                    [...Array(5)].map((i, index) => (
                        <div className="flex justify-start items-start gap-[3.5rem] md:gap-56" key={index}>
                            {
                                [...Array(6)].map((n, nIndex) => (
                                    <span key={nIndex}>
                                        +
                                    </span>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
            <div id="title" className={`w-full h-full absolute top-0 flex flex-col justify-center items-center gap-14 z-10 text-7xl md:text-9xl font-extrabold text-[#FCE9F1] ${inria.className}`}>
                <div className="">
                    Lets <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Get In <br />
                    Touch <br />
                </div>
                <div className="flex justify-center items-center gap-6 px-16 md:px-0 flex-wrap md:flex-nowrap md:gap-20 text-sm">
                    <div className="flex gap-4 relative cursor-pointer after:w-0 after:h-[1.5px] after:absolute after:-bottom-4 after:left-0 after:rounded-full
                        after:bg-gradient-to-r after:from-[#FCE9F1] after:to-transparent after:hover:w-28 after:transition-all after:duration-500 
                        after:ease-in-out">
                        <AiFillGithub className="text-xl" />
                        <span className="">
                            Github
                        </span>
                    </div>
                    <div className="w-[6px] h-[6px] bg-[#FCE9F1] rounded-full"></div>
                    <div className="flex gap-4 relative cursor-pointer after:w-0 after:h-[1.5px] after:absolute after:-bottom-4 after:left-0 after:rounded-full
                        after:bg-gradient-to-r after:from-[#FCE9F1] after:to-transparent after:hover:w-28 after:transition-all after:duration-500 
                        after:ease-in-out">
                        <AiFillInstagram className="text-xl" />
                        <span>Instagram</span>
                    </div>
                    <div className="w-[6px] h-[6px] bg-[#FCE9F1] rounded-full"></div>
                    <div className="flex gap-4 relative cursor-pointer after:w-0 after:h-[1.5px] after:absolute after:-bottom-4 after:left-0 after:rounded-full
                        after:bg-gradient-to-r after:from-[#FCE9F1] after:to-transparent after:hover:w-28 after:transition-all after:duration-500 
                        after:ease-in-out">
                        <AiFillTwitterCircle className="text-xl" />
                        <span>Twitter</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer