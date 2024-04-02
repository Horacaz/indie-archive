'use client'
import Image from 'next/image'
import gameList from '../../fixtures/list.json'
import GameEntryProps from '@/types/GameEntryProps'
import Paginator from '../Paginator/Paginator'
import { useParams } from 'next/navigation'

export default function List() {
  const totalEntries = gameList.length
  const currentPage = Number(useParams<{ pagina: string }>().pagina)
  const entriesToShow = gameList.slice(currentPage * 5 - 5, currentPage * 5)
  return (
    <>
      <div className="text-white m-1 grid grid-cols-1 divide-y divide-stone-700  bg-neutral-900 rounded">
        {entriesToShow.map((game) => (
          <GameEntry key={game.id} {...game} />
        ))}
      </div>
      <Paginator listAmount={totalEntries} currentPage={currentPage} />
    </>
  )
}
function GameEntry(props: GameEntryProps) {
  return (
    <div className="flex gap-4 m-2 p-4">
      <div className="relative min-w-[100px] md:min-w-[300px]">
        <a href={`juego/${props.id}`}>
          <Image
            fill
            src={props.image}
            className="border-black border-2 hover:opacity-50"
            alt=""
          />
        </a>
      </div>

      <div className="flex flex-col gap-2">
        <a href={`juego/${props.id}`}>
          <h3 className="text-md mx-1 font-bold text-pretty md:text-2xl hover:text-yellow-400">
            {props.title}
          </h3>
        </a>
        <div className="text-xs md:text-sm">
          <span className="bg-yellow-400 p-1.5 mx-1 font-bold text-black rounded">
            {props.origin}
          </span>
          <span className="bg-yellow-400 p-1.5 mx-1 font-bold text-black rounded">
            {props.game_engine}
          </span>
          <a
            href={`listado/${props.category.toLocaleLowerCase()}`}
            className="bg-yellow-400 p-1.5 mx-1 font-bold text-black rounded hover:bg-neutral-800 hover:text-white"
          >
            {props.category}
          </a>
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
              Agregado el: {props.uploaded_on}
            </p>
          </div>
          <div className="ml-auto self-end">
            <a
              href={`juego/${props.id}`}
              className="text-yellow-400 text-md font-bold hover:text-white"
            >
              Ver más detalles...
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
