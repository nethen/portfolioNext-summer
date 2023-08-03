'use client'
import Image from 'next/image'
import Link from 'next/link'
import AnimLink from '@/components/Nav/AnimLink';

export default function Home() {
  return (
    <>
<<<<<<< Updated upstream
    <section className="col-span-full md:col-span-4 md:sticky md:h-fit lg:mt-8">
      <h1 className="text-4xl md:text-2xl lg:text-3xl 3xl:text-4xl mb-8">Nathan Lew is a product designer crafting spaces on the internet with a love for solving for logic, new aesthetics and strategy</h1>
=======
    <section className="col-span-full md:col-span-4 2xl:col-span-3 md:sticky md:h-fit md:top-8 mb-8">
      <h1 className="text-2xl lg:text-3xl">Nathan Lew&mdash;product designer crafting spaces on the internet with a love for solving for logic, new aesthetics and strategy</h1>
>>>>>>> Stashed changes
      <p>Incoming at <AnimLink href="https://invokedigital.co/" target="_blank">Invoke Digital</AnimLink> for product UX/UI. Previously at <AnimLink href="https://guusto.com" target="_blank">Guusto</AnimLink> for visual design/dev.</p>
      <div className="mt-auto">
        <p>Feel free to shoot me an <AnimLink href="mailto:nathan_lew@sfu.ca" target="_blank">email</AnimLink>, connect with me on <AnimLink href="https://linkedin.com/in/nlew" target="_blank">LinkedIn</AnimLink> or check out my  <AnimLink href="https://google.com" target="_blank">resume</AnimLink>.</p>
      </div>
    </section>
    <section className="col-span-full md:col-span-6 md:col-end-13 lg:mt-8">
      <Link href="https://google.com">
        <Image 
          className='mb-4'
          src={"/img/deciem.png"}
          width={1440} 
          height={1024}
          alt="Deciem"/>
      </Link>
      <Link href="https://google.com">
        <Image 
          className='mb-4'
          src={"/img/xergoy.png"}
          width={1440} 
          height={1024}
          alt="X Ergo Y"/>
      </Link>
    </section>
    </>
  )
}
