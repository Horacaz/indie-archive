import Image from 'next/image'
import gameList from '../fixtures/list.json'

export default function List() {
  return (
    <>
      <h1 className="text-3xl"> Todos los Juegos </h1>
      <div className="grid grid-cols-1 divide-y divide-stone-700 bg-stone-900 rounded">
        {gameList.map((game) => (
          <GameEntry key={game.id} {...game} />
        ))}
      </div>
    </>
  )
}

function GameEntry(props: GameEntryProps) {
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
        <div className="text-xs md:text-sm">
          <span className="bg-yellow-400 p-1.5 mx-1 font-bold text-black rounded">
            {props.origin}
          </span>
          <span className="bg-yellow-400 p-1.5 mx-1 font-bold text-black rounded">
            {props.game_engine}
          </span>
          <span className="bg-yellow-400 p-1.5 mx-1 font-bold text-black rounded">
            {props.category}
          </span>
        </div>
        <p className="text-xs md:text-md font-bold text-pretty mx-1">
          {props.description}
        </p>
        <div className="flex flex-col md:flex-row gap-2 mx-1">
          <div>
            <p className="text-xs md:text-sm opacity-75">
              Creador: {props.creator}
            </p>
            <p className="text-xs md:text-sm opacity-75">
              Año de lanzamiento: {props.published}
            </p>
            <p className="text-xs md:text-sm opacity-75">
              Traducción al Español: {props.translation}
            </p>
            <p className="text-xs md:text-sm opacity-75">
              Agreagado el: {props.uploaded_on}
            </p>
          </div>
          <div className="ml-auto self-end">
            <a href={props.url} className="text-yellow-400 text-md font-bold">
              Ver más detalles...
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

type GameEntryProps = {
  id: number
  title: string
  description: string
  creator: string
  published: number
  translation: string | null
  uploaded_on: string
  image: string
  category: string
  game_engine: string
  origin: string
  url: string
}
