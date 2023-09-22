import { useTransitionReducer } from "@/contexts/Reducer"
import Navigation from "@/components/Navigation";
import Transition from "@/animations/Transition";
import { useIsomorphic } from "@/lib/useIsomorphic";
import { Fredericka_the_Great } from 'next/font/google';
import TransitionOut from "@/animations/TransitionOut";
import ProjectHead from "@/components/ProjectHead";
import ProjectBody from "@/components/ProjectBody";
import { getPostBySlug, getAllPosts, markdownToHtml, getProjectImages } from '../../lib/utils';
import { Project, ProjectParams } from "@/lib/types";
import Head from "next/head";

const Inria = Fredericka_the_Great({ weight: "400", subsets: ["latin"] });

function Project({ project }: { project: Project }) {
    const [data, dispatch] = useTransitionReducer();

    useIsomorphic(() => {
        return () => {
            dispatch({
                type: 'SET_PROJECT_TRANSITION',
                projectTransition: true
            })
        }

    }, [])

    return (
        <div id="projectContainer" className="w-full h-screen overflow-y-auto" >
            <Head>
                <title>{project.title} | Alfahmi</title>
            </Head>
            {
                data.projectTransition && (
                    <Transition skipOutro={true} />
                )
            }
            <TransitionOut />
            <div className="w-full flex flex-col justify-center items-center gap-0 md:gap-8 relative">
                <Navigation />
                <div className="w-full h-screen flex justify-center items-center absolute top-0">
                    <div className={`w-5/6 md:w-1/2 h-2/3 flex flex-col justify-start items-start text-5xl md:text-8xl font-extrabold text-amber-900 gap-4 
                    opacity-20 absolute ${Inria.className}`}
                    >
                        <div className="w-full h-1/2 flex justify-start items-end overflow-hidden relative ">
                            PROJECTS //
                        </div>
                        <div className="w-full h-1/2 flex justify-end items-start overflow-hidden relative">
                            WORKS
                        </div>
                    </div>
                </div>
                <ProjectHead title={project.title} coverImage={project.coverImage} date={project.date} excerpt={project.excerpt} />
                <ProjectBody content={project.content} landscape={project.landscape} portrait={project.portrait} slug={project.slug} />
            </div>

        </div>
    )
}

export default Project


export const getStaticPaths = () => {
    const projects = getAllPosts(['slug']);
    return {
        paths: projects.map(project => {
            return {
                params: {
                    slug: project.slug
                }
            }
        }),
        fallback: false
    }
}

export const getStaticProps = async ({ params }: { params: ProjectParams }) => {
    const project = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'coverImage',
        'excerpt',
        'content'
    ])

    const galleryImages = getProjectImages(project.slug);
    const content = await markdownToHtml(project.content || '');

    return {
        props: {
            project: {
                ...project,
                landscape: galleryImages.landscapeImages,
                portrait: galleryImages.portraitImages,
                content
            }
        }
    }
}