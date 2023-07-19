import Image from 'next/image'
import Link from "next/link"
import TextElement from '@/components/StyleGuide/TextElement';
import ColourElement from '@/components/StyleGuide/ColourElement';
import ImageGrid from '@/components/Grids/ImageGrid';

export default function StyleGuide() {
  return (
    <>
      <section className="col-span-full md:col-span-4 md:sticky md:h-fit md:top-[4.5rem] lg:top-[7.5rem] mb-8">
        <h1>Style guide</h1>
        <p>Tokens, utilities, and a baseline for the visual approach of this portfolio.</p>
      </section>
      <section className="col-span-full md:col-span-8 lg:col-span-6 lg:col-end-13">
        <div className="element group mb-32">
          <h2>Typography</h2>
          <p>All typographic elements are set in <Link href="https://abcdinamo.com/typefaces/oracle" target="_blank">ABC Oracle</Link>&mdash;a clear and legible typeface with a less rigid construction.</p>
          <figure className="border-t border-grey-500 py-4 my-4">
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

        <div className="element group mb-32">
          <h2>Colour</h2>
          <p>Rather than pure black and white, a neutral palette of browns and beiges provides some warmth when describing the work.</p>
          <figure className="border-t border-grey-500 py-4 my-4">
            <ColourElement desc="Primary"/>
            <ColourElement desc="Primary"/>
            <ColourElement desc="Primary"/>
            <ColourElement desc="Primary"/>
            <ColourElement desc="Primary"/>
          </figure>
        </div>

        <div className="element group mb-32">
          <h2>Image</h2>
          <p>Rather than pure black and white, a neutral palette of browns and beiges provides some warmth when describing the work.</p>
          <figure className="border-t border-grey-500 py-4 my-4">
            <Image src="/img/portrait.png" width={1920} height={2560}></Image>
            <ImageGrid variant={undefined}></ImageGrid>
            <ImageGrid variant={undefined}></ImageGrid>
            <ImageGrid variant={undefined}></ImageGrid>
            <ImageGrid variant={undefined}></ImageGrid>
          </figure>
        </div>

        <div className="element group mb-32">
          <h2>Grid</h2>
          <p>A 12 column grid is loosely followed to structure all content on the site.</p>
          <figure className="border-t border-grey-500 py-4 my-4">
          </figure>
          <div className="fixed top-0 left-0 right-0 bottom-0 pointer-events-none bg-red-500 z-50 opacity-0">
            

            
          </div>
        </div>
        
      </section>
    </>
  )
}