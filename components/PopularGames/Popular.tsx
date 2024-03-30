import popularList from '../../fixtures/popularGames.json'
import Image from 'next/image'
import PopularListItem from '@/types/PopularListItem'
import Link from 'next/link'
export default function PopularGames() {
  return (
    <div className="bg-neutral-900 rounded m-1 p-1">
      <h2 className="text-center text-xl font-bold my-1 py-1">
        Juegos más populares
      </h2>
      <div className="grid grid-cols-1 divide-y divide-stone-700">
        {popularList.map((game) => (
          <PopularGameEntry key={game.url} {...game} />
        ))}
      </div>
    </div>
  )
}

function PopularGameEntry(props: PopularListItem) {
  return (
    <div className="m-2 p-2">
      <div className="flex flex-col items-center">
        <a href={`juego/${props.position}`}>
          <h3 className="text-xl font-bold text-pretty text-center text-yellow-400 hover:text-white">
            {props.title}
          </h3>
        </a>
        <a href={`juego/${props.position}`}>
          <Image
            width={250}
            height={250}
            src={props.image}
            className="border-black border-2 m-auto hover:opacity-50"
            alt={props.title}
          />
        </a>

        <div className="flex text-xs md:text-sm m-1 p-1">
          <span className="bg-yellow-400 p-1.5 mx-1 font-bold text-black rounded">
            {props.origin}
          </span>
          <a
            href={`listado/${props.category.toLocaleLowerCase()}`}
            className="bg-yellow-400 p-1.5 mx-1 font-bold text-black rounded hover:bg-neutral-800 hover:text-white"
          >
            {props.category}
          </a>
        </div>
      </div>
    </div>
  )
}
