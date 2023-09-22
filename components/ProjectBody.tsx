import Image from "next/image"
import image2 from '../assets/2.jpg'
import HorizontalSwipe from "./HorizontalSwipe"
import { Inria_Serif } from 'next/font/google';
import { useIsomorphic } from "@/lib/useIsomorphic";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ProjectBodyType } from "@/lib/types";
import ProjectStyles from './project-style.module.css';

const InriaLight = Inria_Serif({ weight: "300", subsets: ["latin"] });

export default function ProjectBody({ content, landscape, portrait, slug }: ProjectBodyType) {

    useIsomorphic(() => {
        gsap.registerPlugin(ScrollTrigger);
        const projectImages = gsap.utils.toArray('#projectImages');

        projectImages.forEach((projectImage: any) => {
            gsap.to(projectImage, {
                scrollTrigger: {
                    scroller: '#projectContainer',
                    trigger: projectImage,
                    start: '-200px 300px',
                    end: '900px top',
                    scrub: 1
                },
                objectPosition: '50% 25%',
                duration: 1,
            })
        })
    }, [])

    return (
        <div className={`w-full min-h-screen flex flex-col justify-start items-start text-slate-900 font-light gap-4 md:gap-8 
        px-6 pb-20 -mt-20 md:mt-0 ${InriaLight.className}`}>
            <div dangerouslySetInnerHTML={{ __html: content }} className={`${ProjectStyles['markdown']}`}>
            </div>
            {
                portrait.length > 0 && (
                    <HorizontalSwipe images={portrait} slug={slug} />
                )
            }
            {
                landscape.map(image => (
                    <div key={image} className="w-full h-56 md:h-[90vh] relative">
                        <Image
                            id="projectImages"
                            fill
                            src={`/projects/${slug}/landscape/${image}`}
                            className="object-cover md:object-cover"
                            alt="images1"
                            style={{ objectPosition: '50% 0%' }}
                        />
                    </div>
                ))
            }
        </div>
    )
}
