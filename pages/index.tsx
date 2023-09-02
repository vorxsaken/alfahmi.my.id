import { getAllPosts } from "@/lib/utils";
import type { Post } from "@/lib/types";
import Navigation from "@/components/Navigation";
import Particles from "@/components/Particles";
import TitleAlbum from "@/components/TitleAlbum";
import PinnedProjects from "@/components/PinnedProjects";
import Footer from "@/components/Footer";
import Transition from "@/animations/Transition";
import AnimateInOut from "@/animations/AnimateInOut";
import { useMediaQuery } from "@/lib/useMediaQuery";
import Layout from "@/components/Layout";
export default function Home({ allPost }: { allPost: Post[] }) {
  const isSmall = useMediaQuery('(max-width: 600px)')

  const toggleDarkMode = () => {
    if (localStorage.getItem('theme')) {
      document.documentElement.classList.remove('dark');
      localStorage.removeItem('theme');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }

  return (
    <Layout title="Start" className="relative">
      {/* <AnimateInOut
            from={{ yPercent: 0 }}
            to={{ yPercent: -100 }}
            delayIn={0.5}
            delayOut={0.5}
            durationIn={0.5}
            skipOutro={false}
            ease={'power4.inOut'}
            durationOut={0.5}
            className="w-screen h-screen flex flex-row fixed top-0 z-50"
        >
            <AnimateInOut
                from={{ yPercent: 0 }}
                to={{ yPercent: -100 }}
                delayIn={0}
                delayOut={0.6}
                durationIn={1}
                skipOutro={false}
                ease={'power2.inOut'}
                durationOut={1}
                className="w-[25%] h-screen z-50 bg-[#BCE6EB]">
            </AnimateInOut>
            <AnimateInOut
                from={{ yPercent: 0 }}
                to={{ yPercent: -100 }}
                delayIn={0.1}
                delayOut={0.7}
                durationIn={1}
                skipOutro={false}
                ease={'power2.inOut'}
                durationOut={1}
                className="w-[25%] h-screen z-50 bg-[#FDCFDF]">
            </AnimateInOut>
            <AnimateInOut
                from={{ yPercent: 0 }}
                to={{ yPercent: -100 }}
                delayIn={0.2}
                delayOut={0.8}
                durationIn={1}
                skipOutro={false}
                ease={'power2.inOut'}
                durationOut={1}
                className="w-[25%] h-screen z-50 bg-[#FBBEDF]">
            </AnimateInOut>
            <AnimateInOut
                from={{ yPercent: 0 }}
                to={{ yPercent: -100 }}
                delayIn={0.3}
                delayOut={0.9}
                durationIn={1}
                skipOutro={false}
                ease={'power2.inOut'}
                durationOut={1}
                className="w-[25%] h-screen z-50 bg-[#FCA3CC]">
            </AnimateInOut>
        </AnimateInOut> */}
      <Particles isSmall={isSmall} />
      <div className="w-full h-full flex flex-col justify-center items-center gap-6 md:gap-10">
        <div className="font-bold text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#F31559] via-[#FF52A2] to-[#FFB07F]">
          Hello, Im Alfahmi
        </div>
        <p className="text-color text-sm md:text-lg font-semibold max-w-[340px] md:max-w-lg text-center opacity-70">
          Hi im fahmi, frontend developer from indonesia, welcome to my page.
        </p>
      </div>
      <PinnedProjects projects={allPost} isSmall={isSmall} />
      <Footer />
    </Layout>
  )
}


export const getStaticProps = async () => {
  const allPost = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt'
  ])

  return {
    props: { allPost }
  }
}
