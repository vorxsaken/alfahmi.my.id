import Transition from "@/animations/Transition"
import { ReactNode } from "react"
import Navigation from "./Navigation"
import Head from "next/head"

export default function Layout({ children, id, className, title }: { children: ReactNode, id?: string, className?: string, title: string }) {
  const headTitle = `${title} - Alfahmi`
  return (
    <>
      <Transition />
      <div className="flex flex-col items-center">
        <div id={id} className={`w-full h-screen lg:max-w-[1366px] xl:max-w-[1920px] md:h-auto md:max-h-[2160px] relative ${className}`}>
          <Head>
            <title>{headTitle}</title>
            <meta property="og:title" content={`${title} - Alfahmi`} key={title} />
          </Head>

          <Navigation />
          {children}
        </div>
      </div>
    </>
  )
}
