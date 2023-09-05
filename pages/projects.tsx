import Navigation from "@/components/Navigation"
import Transition from "@/animations/Transition"
import { useIsomorphic } from "@/lib/useIsomorphic";
import { Bungee_Shade } from 'next/font/google';
import AnimateWordUpIn from "@/animations/AnimateWordUpIn";
import { useTransitionReducer } from "@/contexts/Reducer";
import Gallerys from "@/components/Gallerys";
import { getAllPosts } from "@/lib/utils";
import {Projects} from '@/lib/types'
import Lottie from 'lottie-react';
import Scroll from '../assets/scroll.json';
import Layout from "@/components/Layout";
const Inria = Bungee_Shade({ weight: "400", subsets: ["latin"] });

function Projects({allProjects}: {allProjects: Projects}) {

  const [data, dispatch] = useTransitionReducer();

  useIsomorphic(() => {
    dispatch({
      type: 'SET_PROJECT_TRANSITION',
      projectTransition: true
    })
  }, [])

  return (
    <Layout title="Projects" className="overflow-y-hidden">
      <div className="w-full h-screen flex justify-center items-center fixed">
        <div className={`md:w-3/5 h-2/3 flex flex-col justify-start items-start text-5xl md:text-8xl text-amber-900 gap-4 
          opacity-20 fixed pr-0 pl-0 ${Inria.className}`}
        >
          <AnimateWordUpIn delay={0.8} duration={0.5} className="w-full h-1/2 flex justify-start items-end overflow-hidden">
            PROJECTS /
          </AnimateWordUpIn>
          <AnimateWordUpIn delay={0.8} duration={0.5} className="w-full h-1/2 flex justify-end items-start overflow-hidden">
            / WORKS
          </AnimateWordUpIn>
        </div>
      </div>
      <div className="w-full h-[20%] md:w-20 md:h-screen fixed flex flex-col justify-center items-center top-0 md:top-0 md:right-0 overflow-hidden">
        <Lottie animationData={Scroll} className='w-full scale-[40%] md:scale-[250%]' />
      </div>
      <Gallerys projects={allProjects} />
    </Layout>
  )
}

export default Projects

export const getStaticProps = async () => {
  const allProjects = getAllPosts([
    'title',
    'slug',
    'coverImage'
  ])

  return {
    props: { allProjects }
  }
}