'use client'
import React, { useEffect } from 'react';
import { useState, useRef } from 'react';
import Image from 'next/image'
import Navbar from '/components/Nav/Navbar'
import AnimLink from '/components/Nav/AnimLink';
import {TextElement, LinkElement}  from '/components/StyleGuide/TextElement';
import ColourElement from '/components/StyleGuide/ColourElement';
import ImageGrid from '/components/Grids/ImageGrid';
import { motion, useScroll, useMotionValueEvent, useInView } from 'framer-motion';
import GridOverlay from '/components/Grids/GridOverlay';
import { Header } from '/components/Layouts/Header';
import SideContainer from '/components/Layouts/SideContainer';

export default function StyleGuide() {
  const ref = useRef(null);
  const isInView = useInView(ref, {amount: 0.25});
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["end end", "start start"]
  // });
  const [hookedYPosition, setHookedYPosition] = useState(0);
  const [hookedView, setHookedView] = useState(false);
  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   setHookedYPosition(latest);
  // })

  useEffect(() => {
    setHookedView(isInView);
    console.log(isInView);
  }, [isInView])

  return (
    <>
      <Navbar/>
      <section className="col-span-full md:col-span-4 md:sticky md:h-fit md:top-[4.5rem] lg:top-[7.5rem] mb-8">
        <h1>Style guide</h1>
        <p>Baseline visual components of this portfolio including <AnimLink href="#type">type</AnimLink>, <AnimLink href="#colour">colour</AnimLink>, <AnimLink href="#grid">grid</AnimLink>, and <AnimLink href="#motion">motion</AnimLink>.</p>
      </section>
      <section className="col-span-full md:col-span-6 md:col-end-13">
        
        <SideContainer paddingTop={true} id="type">
          <Header header="Typography" sticky={true}>
            <p>All typographic elements are set in <AnimLink href="https://abcdinamo.com/typefaces/oracle" target="_blank">ABC Oracle</AnimLink>&mdash;a clear and legible typeface with a less rigid construction.</p>
          </Header>
          <figure className="py-4 mb-4 lg:my-8">
            <TextElement type="H1" size="3" text="Global Type"/>
            <TextElement type="H2" size="2" text="100 foundries showcasing the power of the letterform"/>
            <TextElement type="H3" size="1.875" text="100 emerging and more established independent foundries and designers"/>
            <TextElement 
              type="Paragraph" 
              size="1.25" 
              text="Global Type was developed by It’s Nice That’s Creative Insights team, a new department that carries out research and analyses visual trends in the creative world."
            />
            <figcaption className="border-t border-grey-500 py-2">Excerpts taken from <AnimLink href="https://www.itsnicethat.com/features/global-type-around-the-world-in-100-foundries-insights-graphic-design-150323" target="_blank">It&apos;s Nice That&apos;s article on Global Type</AnimLink> (March 15, 2023)</figcaption>
          </figure>
        </SideContainer>

        <SideContainer paddingTop={true} id="colour">
          <Header header="Colour" sticky={true}>
            <p>Rather than pure black and white, a neutral palette of browns and beiges provides some warmth when describing the work.</p>    
          </Header>
          <figure className="py-4 mb-4 lg:my-8">
            <ColourElement desc="Primary&mdash;body text, headings, hover for secondary" colour="#615245"/>
            <ColourElement desc="Secondary&mdash;captions and labels" colour="#BAAFA6" />
            <ColourElement desc="Placeholder&mdash;low contrast text" colour="#DBD3CD" />
            <ColourElement desc="Background&mdash;layers ands figures" colour="#EFEDEB" darkText={true}/>
          </figure>
        </SideContainer>

        {/* https://codesandbox.io/s/framer-motion-track-element-position-wnzctr?from-embed=&file=/src/App.tsx:23-106 */}
        <SideContainer paddingTop={true} passRef={ref} id="grid">
          <Header header="Grid" sticky={true}>
            <p>A 12 column grid is loosely followed to structure a two column layout, showcasing both page overviews and content.</p>
          </Header>
          <figure className="py-4 mb-4 lg:my-8">
            <ImageGrid variant={undefined}></ImageGrid>
            <ImageGrid variant={undefined}></ImageGrid>
            <ImageGrid variant={undefined}></ImageGrid>
            <ImageGrid variant={undefined}></ImageGrid>
          </figure>
          {<GridOverlay isVisible={isInView}/>}
        </SideContainer>

        <SideContainer paddingTop={true} id="Motion">
          <Header header="Motion" sticky={true}>
            <p>Using Framer Motion, most interactive elements in motion ease out on a circular curve for a more dynamic appearance.</p>
          </Header>
          <figure className="py-4 mb-4 lg:my-8">
            <Image src="/img/portrait.png" width={1920} height={2560} alt="it&apos;s me"></Image>
            <LinkElement text="A sample link" href="#type"/>
          </figure>
        </SideContainer>
        
      </section>
    </>
  )
}