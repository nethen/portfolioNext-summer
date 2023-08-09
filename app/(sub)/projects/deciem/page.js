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
import GridOverlay from '/components/Grids/GridOverlay';
import { Header, Header3 } from '/components/Layouts/Header';
import SideContainer from '/components/Layouts/SideContainer';


export default function ProjectPage({ params }) {
  return (
    <>
      <Navbar/>
      {/* <section className="col-span-full md:mt-[4.5rem] lg:mt-[7.5rem] mb-4">
        <h1>Dictionary+</h1>
        <p>A 3 week UX design project, serving skincare science to the uninitiated</p> */}
        {/* <Image src="/img/deciem/header2.png" width={2880} height={1620}/> */}
      {/* </section> */}
      <section className="col-span-full md:col-span-5 md:sticky md:h-[calc(100vh-4rem)] md:top-14 md:pt-6 lg:pt-8 mb-4 overflow-y-auto">
        <motion.figure 
          className="@container flex justify-center items-center bg-theme-background mb-4"> 
                <motion.video 
                className="p-4 @sm:p-8 @lg:p-12"
                disablePictureInPicture playsInline muted autoPlay loop src="https://www.sfu.ca/~nla61/videos/deciem/micro_intro.mp4"></motion.video>
        </motion.figure>
        <h1>Dictionary+</h1>
        <p>A 3 week UX design project, serving skincare science to the uninitiated</p>
      </section>
      <section className="col-span-full md:col-span-6 md:col-end-13">
        
        <SideContainer>
          {/* <p className="md:pt-6 lg:pt-8 mb-4">In a world jam-packed with make-up, cosmetics and skincare routines, The Ordinary stands out for their</p> */}
          <Header 
          header="
          When it comes to skincare brands, The Ordinary knows essentials:
          simple solutions, clear ingredients, all backed by strong science.
          "
          >
            <p className="md:pt-6 lg:pt-8 mb-4">
              Dictionary+ is a feature proposal for The Ordinary&apos;s online store, clarifying how specific active ingredients help achieve long-term goals.
            </p>
          </Header>
          <p className="pt-4 my-4">
              I designed Dictionary+ in early 2022 with my friends, Fran, Sahar and <AnimLink href="https://elsasinuhaji.framer.website/" target="_blank">Elsa</AnimLink> as part of a junior information design course.
          </p>
          <p className="my-4">
              As the project lead, I oversaw and conducted our secondary research, content & interaction design.
              After submission, I took some time to refine these alongside the visual design.
          </p>
        </SideContainer>

        <SideContainer>
          <p className="pt-4 my-4">
            The initial insight for this project was a question of &quot;how much information is too much information?&quot;
            Despite all ingredients listed on the side of each product box, we wanted to see if chemical jargon was being understood by skincare consumers.
          </p>
          <p className="pt-4 my-4">
            We started unpacking the problem space by learning about online shopping behaviors based on online journals and a case study by Engine Digital. 
            At this early research stage, I also led a survey to get a better sense of how users from ages 18 to 23 select their skincare. 
          </p>
          <p className="pt-4 my-4">
            With 88 responses and a variety of readings, here&apos;s what we learned:
          </p>
          <Header3 header="The benefit needs to be clear">
            <p className="text-base text-theme-caption">
              Customers actively look into skincare and related in, especially effectiveness and results.
            </p>
          </Header3>
          <Header3 header="A second opinion always helps">
            <p className="text-base text-theme-caption">
              Users build buyer confidence when items are recommended based on their concerns.
            </p>
          </Header3>
          <Header3 header="There needs to be an open slot">
            <p className="text-base text-theme-caption">
              On top of function, products need to be visibly compatible with other solutions in use.
            </p>
          </Header3>
          <p className="pt-4 my-4">
            These three insights helped reframe our assumption that the main issue was new customers getting tripped up by the science. 
            Instead, the project shifted into a more thoughtful approach of optimizing an existing behavior in the user journey.
          </p>
          <p className="pt-4 my-4">
            With this pivot, I took it upon myself to map out touchpoints where we could surface these details. 
            By highlighting where we could assist in the user journey, it helped align the team in our interaction design studies.
          </p>
        </SideContainer>

        <SideContainer>
          <p className="pt-4 my-4">
            One popular implementation of online recommendations was the questionnaire: a guided process of indicating the severity of a skincare concern and matching up with the right product.
          </p>
          <p className="pt-4 my-4">
           However, there appeared to be some disconnect between getting a solid recommendation and filling out a quiz.
           Not only did these forms feel separate from the browsing process, but also felt surface-level in highlighting how a product connected with a customer&apos;s lifestyle.
           With more thematic analysis of our research, we came to a revelation.
          </p>

          <Header3 header="Not all ingredients are made equal.">
            <p className="text-base text-theme-caption">
              By revisting our insights, we realized that each product comprises of a mix of active ingredients and other components&mdash;some parts actually treating a concern while others might keep the solution together.
            </p>
          </Header3>

          <p className="pt-4 my-4">
            This provided our final framing for the project:
          </p>
          <Header header="How might we relay active ingredients more effectively for novice consumers of The Ordinary?"/>
        </SideContainer>

        <SideContainer id="solution">
          <p className="pt-4 my-4">
            Knowing that customers are relatively aware of different ingredients, Dictionary+ is a feature proposal to natively search for pr
          </p>
        </SideContainer>
      </section>
    </>
  )
}