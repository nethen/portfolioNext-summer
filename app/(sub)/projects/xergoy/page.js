'use client'
import React from 'react';
import { useState, useRef } from 'react';
import Image from 'next/image'
import Navbar from '/components/Nav/Navbar'
import AnimLink from '/components/Nav/AnimLink';
import {TextElement, LinkElement}  from '/components/StyleGuide/TextElement';
import ColourElement from '/components/StyleGuide/ColourElement';
import ImageGrid from '/components/Grids/ImageGrid';
import { motion, useScroll, useMotionValueEvent, useInView } from 'framer-motion';
import { useWindowDimensions } from "/hooks/useWindowDimensions"
import GridOverlay from '/components/Grids/GridOverlay';
import { Header, Header3 } from '/components/Layouts/Header';
import SideContainer from '/components/Layouts/SideContainer';


export default function ProjectPage({ params }) {
  const viewport = useWindowDimensions();

  const { scrollYProgress } = useScroll();
  const [hookedYPosition, setHookedYPosition] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setHookedYPosition(latest);
  })


  return (
    <>
      {/* <section className="col-span-full md:mt-[4.5rem] lg:mt-[7.5rem] mb-4">
        <h1>Dictionary+</h1>
        <p>A 3 week UX design project, serving skincare science to the uninitiated</p> */}
        {/* <Image src="/img/deciem/header2.png" width={2880} height={1620}/> */}
      {/* </section> */}
      <motion.section 
        initial={false}
        animate={{
          // width: hookedYPosition > 0 ?  "100%" : `calc(100vw - ${viewport.width < 1024 ? 2 : 4 }rem)`
          // paddingRight: "1000px"
        }}
        className="col-span-full md:col-span-5 md:sticky md:h-[calc(100vh-4rem)] md:top-[4.5rem] lg:top-[7.5rem] mb-4 overflow-y-auto pointer-events-none">
        <h1
          style={{
            width: "calc(100vw - 2rem)"
          }}
        >
          X ergo Y
        </h1>
        <p 
        style={{
          // width: `calc((5 * (100vw - ${viewport.width < 1024 ? 12 : 24 }rem) / 12))`
        }}
        className="text-base text-theme-caption">3 weeks of graphic exploration for the Stedelijk Museum Amsterdam</p>
        <Image src="/img/xergoy.png" full={true} width={4096} height={2731} alt="Image credit to Jimmy deSana"/>
       
      </motion.section>
      <section className="col-span-full md:col-span-6 md:col-end-13">
        
        <SideContainer>
          {/* <p className="md:pt-6 lg:pt-8 mb-4">In a world jam-packed with make-up, cosmetics and skincare routines, The Ordinary stands out for their</p> */}
          <Header 
          header="
          Hosted from late 2014 to early 2015, X Ergo Y was a projection installation in collaboration between American media artist, Tony Oursler and the Stedelijk Museum Amsterdam. 
          "
          >
            <p className="md:pt-6 lg:pt-8 mb-4">
            Encompassing 5 weeks of visual experimentation, this project reimagined the exhibit&apos;s identity, investigating the artwork&apos;s themes of human philosophy and reasons for what we believe in.
            </p>
          </Header>
          <p className="pt-4 my-4">
              All of this work was designed in early 2022 with my friends, Fran, Sahar and <AnimLink href="https://elsasinuhaji.framer.website/" target="_blank">Elsa</AnimLink> as part of a junior information design course.
          </p>
          <motion.figure 
          className="@container flex justify-center items-center bg-theme-background mb-4"> 
            <div className="p-4 @sm:p-8 @lg:p-12 grid sm:grid-cols-2 gap-4">
              <Image src="/img/xergoy/poster_a.png" width={1684} height={2380}/>
              <Image src="/img/xergoy/poster_b.png" width={1684} height={2380}/>
              <Image src="/img/xergoy/poster_c.png" width={1684} height={2380}/>
            </div>
          </motion.figure>
          
        </SideContainer>

        <SideContainer>
          <Header header="Direction 1: innate duality"/>
          <p className="pt-4 my-4">
            Information is presented in both bleeding and constrained spaces&mdash;the stark constrast between vast and enclosed zones creates layers of intrigue.
            With varied opacities and overlapping imagery, new textural zones are surfaced to explore pieces of the work.
          </p>
          <p className="pt-4 my-4">
          This particular exploration touches upon layered narratives and revealing meaning. By experimenting with the interactions in color, new compositions are introduced that extend this identity. 
          </p>
          <motion.figure 
          className="@container flex justify-center items-center bg-theme-background mb-4"> 
            <div className="p-4 @sm:p-8 @lg:p-12">
              <Image src="/img/xergoy/poster_c.png" width={1684} height={2380} alt="Poster: overlapping shapes to create textural zones"/>
              {/* <Image src="/img/xergoy/poster_c_alt.png" width={1684} height={2380} alt="Poster: overlapping shapes to create textural zones (alt colorway)"/> */}
            </div>
          </motion.figure>
          <motion.figure 
          className="@container flex justify-center items-center bg-theme-background mb-4"> 
            <div className="p-4 @sm:p-8 @lg:p-12">
              {/* <Image src="/img/xergoy/poster_c.png" width={1684} height={2380} alt="Poster: overlapping shapes to create textural zones"/> */}
              <Image src="/img/xergoy/poster_c_alt.png" width={1684} height={2380} alt="Poster: overlapping shapes to create textural zones (alt colorway)"/>
            </div>
          </motion.figure>
          <motion.figure 
          className="@container flex justify-center items-center bg-theme-background mb-4"> 
              <Image src="/img/xergoy/poster_c_pass.png" full={true} width={4096} height={2731} alt="Weekly passes that I designed"/>
          </motion.figure>
        </SideContainer>

        <SideContainer>
          <Header header="Direction 2: reconstructing imagery"/>
          <p className="pt-4 my-4">
          Transparency, texture and new perspectives towards composing with organic shapes were considered by reconstructing imagery of hyphae, mycelium and fungi. 
          By having this contrast of fluid imagery with a rigid grid, we explored a systematic approach to building out assets
          </p>
          <motion.figure 
          className="@container flex justify-center items-center bg-theme-background mb-4"> 
            <div className="p-4 @sm:p-8 @lg:p-12">
              <Image src="/img/xergoy/poster_b.png" width={1684} height={2380} alt="Poster: reconstructing cropped images along the grid to build a new whole"/>
            </div>
          </motion.figure>
          <motion.figure 
          className="@container flex justify-center items-center bg-theme-background mb-4"> 
              <Image src="/img/xergoy/poster_b_pamphlet.png" full={true} width={4096} height={2731} alt="Corresponding pamphlet that I designed"/>
          </motion.figure>
          <motion.figure 
          className="@container flex justify-center items-center bg-theme-background mb-4"> 
              <Image src="/img/xergoy/poster_b_cup.png" full={true} width={4096} height={2731} alt="Cafe touchpoints via cups that I designed"/>
          </motion.figure>
          
        </SideContainer>

        <SideContainer>
          <Header header="Direction 3: obscuring form"/>
          <p className="pt-4 my-4">
            Going outside of conventionally geometric shapes to reveal content allowed us to lean into more skeletal structures to obscure experimental photography of the disfigured human form.
          </p>
          <p className="pt-4 my-4">
          Playing up the eerieness of the imagery promotes the wild and fantastical ways that we can reimagine ourselves.
          </p>
          <motion.figure 
          className="@container flex justify-center items-center bg-theme-background mb-4"> 
            <div className="p-4 @sm:p-8 @lg:p-12">
              <Image src="/img/xergoy/poster_a.png" width={1684} height={2380} alt="Poster: obscuring unsettling photos with organic shapes as intrigue"/>
            </div>
          </motion.figure>
          <motion.figure 
          className="@container flex justify-center items-center bg-theme-background mb-4"> 
              <Image src="/img/xergoy/poster_a_invite.png" full={true} width={4096} height={2731} alt="Corresponding invites that I designed"/>
          </motion.figure>
          <motion.figure 
          className="@container flex justify-center items-center bg-theme-background mb-4"> 
              <Image src="/img/xergoy/poster_a_nav.png" full={true} width={4096} height={2731} alt="Large supergraphics as museum navigation that I designed"/>
          </motion.figure>
          
        </SideContainer>
      </section>
    </>
  )
}