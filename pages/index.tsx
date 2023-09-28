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
    <Layout title="Start">
      <div className="w-full h-screen xl:h-[650px] 2xl:h-[800px] relative overflow-hidden">
        <Particles isSmall={isSmall} />
        <div className="w-full h-full flex items-center">
          <div className=" w-full flex flex-col gap-4 justify-center items-center relative bottom-[3%] md:bottom-0">
            <div className="font-bold text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#F31559] via-[#FF52A2] to-[#FFB07F]">
              Hello, Im Alfahmi
            </div>
            <p className="text-color text-sm md:text-lg font-semibold max-w-[340px] md:max-w-lg text-center opacity-70">
              Hi im fahmi, frontend developer from indonesia, welcome to my page.
            </p>
          </div>
        </div>
      </div>
      <PinnedProjects projects={allPost} isSmall={isSmall}/>
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
