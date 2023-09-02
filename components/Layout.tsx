import Transition from "@/animations/Transition"
import { ReactNode } from "react"
import Navigation from "./Navigation"
import Head from "next/head"

export default function Layout({children, id, className, title}: {children: ReactNode, id?: string, className?: string, title: string}) {
  return (
    <div id={id} className={`w-full h-screen ${className}`}>
        <Head>
            <title>{`${title} - Alfahmi 😉`}</title>
            <meta property="og:title" content={`${title} - Alfahmi`} key={title} />
        </Head>

        <Navigation />
        <Transition />
        { children }
    </div>
  )
}
