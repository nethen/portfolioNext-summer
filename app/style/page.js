'use client'
import React from 'react';
import { useState, useRef } from 'react';
import Image from 'next/image'
import Link from "next/link"
import AnimatedLink from '@/components/Nav/AnimatedLink';
import TextElement from '@/components/StyleGuide/TextElement';
import ColourElement from '@/components/StyleGuide/ColourElement';
import ImageGrid from '@/components/Grids/ImageGrid';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import GridOverlay from '@/components/Grids/GridOverlay';

export default function StyleGuide() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });
  const [hookedYPosition, setHookedYPosition] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // console.log(latest);
    setHookedYPosition(latest);
  })

  return (
    <>
      <section className="col-span-full md:col-span-4 md:sticky md:h-fit md:top-[4.5rem] lg:top-[7.5rem] mb-8">
        <h1>Style guide</h1>
        <p>Baseline visual components of this portfolio including <Link href="#type" className="underline">type</Link>, <Link  href="#colour" className="underline">colour</Link>, <Link  href="#image" className="underline">image</Link>, and <Link  href="#grid" className="underline">grid</Link>.</p>
      </section>
      <section className="col-span-full md:col-span-6 lg:col-span-6 md:col-end-13 lg:col-end-13">
        <div className="pt-8 lg:pt-7 group mb-16" id="type">
          <div className="sticky top-[3.5rem] py-2 lg:pt-16 border-b border-grey-500 bg-white z-40">
            <h2>Typography</h2>
            {/* <AnimatedLink href="https://google.com"></AnimatedLink> */}
            <p>All typographic elements are set in <Link href="https://abcdinamo.com/typefaces/oracle" target="_blank">ABC Oracle</Link>&mdash;a clear and legible typeface with a less rigid construction.</p>
          </div>
          <figure className="py-4 my-8">
            <TextElement type="H1" size="3" text="Global Type"/>
            <TextElement type="H2" size="2" text="100 foundries showcasing the power of the letterform"/>
            <TextElement type="H3" size="1.875" text="100 emerging and more established independent foundries and designers"/>
            <TextElement 
              type="Paragraph" 
              size="1.25" 
              text="Global Type was developed by It’s Nice That’s Creative Insights team, a new department that carries out research and analyses visual trends in the creative world."
            />
            <figcaption className="border-t border-grey-500 py-2">Excerpts taken from It&apos;s Nice That&apos;s article on Global Type (March 15, 2023)</figcaption>
          </figure>
        </div>

        <div className="pt-8 lg:pt-7 group mb-16" id="colour">
          <div className='sticky top-[3.5rem] py-2 lg:pt-16 border-b border-grey-500 bg-white z-40'>
            <h2>Colour</h2>
            <p>Rather than pure black and white, a neutral palette of browns and beiges provides some warmth when describing the work.</p>
          </div>
          <figure className="py-4 my-8">
            <ColourElement desc="Primary"/>
            <ColourElement desc="Primary"/>
            <ColourElement desc="Primary"/>
            <ColourElement desc="Primary"/>
            <ColourElement desc="Primary"/>
          </figure>
        </div>

        <div className="pt-8 lg:pt-7 group mb-16" id="image">
          <div className='sticky top-[3.5rem] py-2 lg:pt-16 border-b border-grey-500 bg-white z-40'>
            <h2>Image</h2>
            <p>Images are placed structurally within the grid</p>
          </div>
          <figure className="py-4 my-8">
            <Image src="/img/portrait.png" width={1920} height={2560} alt="it&apos;s me"></Image>
            <ImageGrid variant={undefined}></ImageGrid>
            <ImageGrid variant={undefined}></ImageGrid>
            <ImageGrid variant={undefined}></ImageGrid>
            <ImageGrid variant={undefined}></ImageGrid>
          </figure>
        </div>

        {/* https://codesandbox.io/s/framer-motion-track-element-position-wnzctr?from-embed=&file=/src/App.tsx:23-106 */}
        <div className="pt-8 lg:pt-7 group mb-8" ref={ref} id="grid">
          <div className="sticky top-[3.5rem] py-2 lg:pt-16 border-b border-grey-500 bg-white z-40">
            <h2>Grid</h2>
            <p>A 12 column grid is loosely followed to structure all content on the site.</p>
          </div>
          <figure className="py-4 my-8">
          </figure>
          {<GridOverlay isVisible={hookedYPosition > 0.05}/>}
        </div>
        
      </section>
    </>
  )
}