import Image from 'next/image'
import Link from "next/link"
import TextElement from '@/components/StyleGuide/TextElement';

export default function StyleGuide() {
  return (
    <>
      <section className="col-span-full lg:col-span-4 lg:sticky lg:h-fit lg:top-[7.5rem]">
        <h1>Style guide</h1>
        <p>This is a descriptor</p>
      </section>
      <section className="col-span-full lg:col-span-6 lg:col-end-13 lg:h-[200vh]">
        <div className="element group mb-32">
          <h2>Typography</h2>
          <p>All typographic elements are set in <Link href="https://abcdinamo.com/typefaces/oracle" target="_blank">ABC Oracle</Link>, with a less rigid construction.</p>
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
          <h2>Typography</h2>
          <p>Various typographic elements</p>
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
      </section>
    </>
  )
}