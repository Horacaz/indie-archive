import Image from 'next/image'
import newsList from '../../fixtures/news.json'
import NewsEntryProps from '@/types/NewsEntryProps'

export default function List() {
  return (
    <div className="grid grid-cols-1 divide-y divide-stone-700 bg-neutral-900 rounded">
      {newsList.map((article: NewsEntryProps) => (
        <NewsEntry key={article.title} {...article} />
      ))}
    </div>
  )
}

function NewsEntry(props: NewsEntryProps) {
  return (
    <div className="flex gap-4 m-2 p-4">
      <div className="relative min-w-[100px] md:min-w-[300px]">
        <Image
          fill
          src={props.image}
          className="border-black border-2"
          alt=""
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-md mx-1 font-bold text-pretty md:text-2xl">
          {props.title}
        </h3>
        <p className="text-xs md:text-md font-bold text-pretty mx-1">
          {props.brief}
        </p>
        <div className="flex flex-col md:flex-row gap-2 mx-1">
          <div>
            <p className="text-xs md:text-sm opacity-75">
              Escrito por: {props.postedBy}
            </p>
            <p className="text-xs md:text-sm opacity-75">
              Agregado el: {props.postedAt}
            </p>
          </div>
          <div className="ml-auto self-end">
            <a href={props.title} className="text-yellow-400 text-md font-bold">
              Ver más...
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
