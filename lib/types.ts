import { ReactNode } from 'react';

export type AnimateInOutType = {
    children: ReactNode,
    set?: any,
    to: any,
    from?: any,
    durationIn: number,
    durationOut: number,
    delayIn: number,
    delayOut: number,
    className?: string,
    skipOutro?: boolean,
    ease: string,
    onCompleate?: string,
    id?: string
}

export type AnimateInType = {
    id?: string,
    from: any,
    to: any,
    duration: number,
    delay: number,
    className?: string,
    children: ReactNode
}
export type AnimateWordUpIn = {
    children: ReactNode, 
    duration: number, 
    delay: number, 
    className?: string
}

export type AnimateUpInType = { 
    children: ReactNode,  
    duration: number, 
    delay: number,
    className?: string
    id?: string
}

export type Author = {
    name: string
    picture: string
}

export type Post = {
    slug: string
    title: string
    date: string
    coverImage: string
    author: Author
    excerpt: string
    ogImage: {
        url: string
    }
    content: string
}

export type Projects = {
    title: string,
    date?: string,
    excerpt?: string,
    coverImage: string,
    slug?: string,
}[]

export type Project = {
    title: string,
    date: string,
    slug: string,
    author?: string,
    coverImage: string,
    excerpt: string,
    content: string,
    landscape: string[],
    portrait: string[],
}

export type ProjectParams = {
    slug: string
}

export type ProjectHeadType ={
    title: string,
    date: string,
    author?: string,
    coverImage: string,
    excerpt: string,
}

export type ProjectBodyType = {
    content: string,
    slug: string,
    landscape: string[],
    portrait: string[]
}

export type CardType = { 
    slug: string,
    color?: string, 
    className?: string, 
    id?: string, 
    cardId: string, 
    imageId: string, 
    title: string, 
    desc: string, 
    cover: string 
}
