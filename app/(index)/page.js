'use client'
import Image from 'next/image'
import Link from 'next/link'
import AnimLink from '/components/Nav/AnimLink';

export default function Home() {
  return (
    <>
    <section className="col-span-full md:col-span-4 2xl:col-span-3 4xl:col-span-2 md:sticky md:h-[calc(100vh-4rem)] lg:mt-8 md:top-8 flex flex-col overflow-y-auto">
      <h1 className="text-2xl md:text-2xl lg:text-[1.75rem] mb-8">Nathan Lew&mdash;product designer crafting spaces on the internet, solving for logic and aesthetics with strategy</h1>
      <p>Incoming at <AnimLink href="https://invokedigital.co/" target="_blank">Invoke Digital</AnimLink> for product UX/UI. Previously at <AnimLink href="https://guusto.com" target="_blank">Guusto</AnimLink> for visual design/dev.</p>
      <div className="mt-auto">
        <p>Feel free to shoot me an <AnimLink href="mailto:nathan_lew@sfu.ca" target="_blank">email</AnimLink>, connect with me on <AnimLink href="https://linkedin.com/in/nlew" target="_blank">LinkedIn</AnimLink> or check out my  <AnimLink href="/resume.pdf" target="_blank">resume</AnimLink>.</p>
      </div>
    </section>
    <section className="col-span-full md:col-span-6 md:col-end-13 lg:mt-8">
      <Link href="/projects/dictionaryplus" className="hover:opacity-50 duration-300 ease-out" scroll={false}>
        <Image 
          src={"/img/deciem.png"}
          width={1440} 
          height={1024}
          alt="Deciem"/>
        <h2 className="text-base mt-4 mb-1">Dictionary+</h2>
        <p className="text-base text-theme-caption mb-16">A 3 week UX design project</p>
      </Link>
      <Link href="/projects/xergoy" scroll={false} className="hover:opacity-50 duration-300 ease-out">
        <Image 
          src={"/img/xergoy.png"}
          width={1440} 
          height={1024}
          alt="X Ergo Y"/>
        <h2 className="text-base mt-4 mb-1">X ergo Y</h2>
        <p className="text-base text-theme-caption mb-16">Explorations in art direction</p>
      </Link>
    </section>
    </>
  )
}
