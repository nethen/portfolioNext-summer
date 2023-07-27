'use client'
import Image from 'next/image'
import AnimLink from '@/components/Nav/AnimLink';

export default function Home() {
  return (
    <>
    <section className="col-span-full md:col-span-4 lg:mt-8">
      <h1 className="text-2xl lg:text-3xl">Nathan Lew&mdash;product designer crafting spaces on the internet with a love for solving for logic, new aesthetics and strategy</h1>
      <p>Incoming at <AnimLink href="https://invokedigital.co/" target="_blank">Invoke Digital</AnimLink> for product UX/UI. Previously at <AnimLink href="https://guusto.com" target="_blank">Guusto</AnimLink> for visual design/dev.</p>
      <div className="mt-auto">
        <p>Feel free to shoot me an <AnimLink href="mailto:nathan_lew@sfu.ca" target="_blank">email</AnimLink>, connect with me on <AnimLink href="https://linkedin.com/in/nlew" target="_blank">LinkedIn</AnimLink> or check out my  <AnimLink href="https://google.com" target="_blank">resume</AnimLink>.</p>
      </div>
    </section>
    <section className="col-span-full md:col-span-6 md:col-end-13 lg:mt-8">
      
    </section>
    </>
  )
}
