import Image from "next/image"
import HorizontalSwipe from "./HorizontalSwipe"
import { Inria_Serif } from 'next/font/google';
import { useIsomorphic } from "@/lib/useIsomorphic";
import { gsap } from "gsap";
import { ProjectBodyType } from "@/lib/types";

const InriaLight = Inria_Serif({ weight: "300", subsets: ["latin"] });

export default function ProjectBody({ content }: ProjectBodyType) {

    return (
        <div className={`w-full min-h-screen flex flex-col justify-start md:justify-center items-start md:items-center text-slate-900 
        font-light gap-4 md:gap-8 px-6 pb-20 -mt-20 md:mt-0 ${InriaLight.className}`}>
            <div dangerouslySetInnerHTML={{ __html: content }} className={`w-full md:w-1/2 markdown`}>
            </div>
        </div>
    )
}
