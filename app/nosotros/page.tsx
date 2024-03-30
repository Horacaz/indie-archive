import EnConstruccion from '@/components/Building/Building'
export default function Nosotros() {
  return <EnConstruccion />
}

/* 


import Image from 'next/image'
import members from './members'
import { heading, CTA } from './items'

export default function Nosotros() {
  return (
    <>
      <AboutUsHeading />
      <MemberShowcase />
      <section className="grid grid-cols-4 gap-4 px-4 py-4 mx-auto sm:px-6 lg:px-8">
        {members.map((member) => (
          <MemberCard
            name={member.name}
            description={member.description}
            imageUrl={member.imageUrl}
          />
        ))}
      </section>
    </>
  )
}

function AboutUsHeading() {
  return (
    <section className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8 text-center">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {heading}
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        {CTA}
      </p>
    </section>
  )
}

function MemberShowcase() {
  return (
    <section className="max-w-screen-xl px-4 py-2 mx-auto sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold dark:text-white">
        ¡Conoce a nuestro equipo!
      </h2>
    </section>
  )
}

function MemberCard(props: MemberCardProps) {
  return (
    <article className="flex flex-col items-center p-2 m-2 text-center">
      <div className="relative w-[150px] h-[150px] rounded">
        <Image src={props.imageUrl} fill alt="" />
      </div>
      <h3 className="text-md font-extrabold leading-none tracking-tight  md:text-xl lg:text-2xl">
        {props.name}
      </h3>
      <p className="text-sm font-normal text-pretty">{props.description}</p>
    </article>
  )
}

type MemberCardProps = {
  name: string
  imageUrl: string
  description: string
}





*/
