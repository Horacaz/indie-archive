import popularList from '../fixtures/popularGames.json'
import Image from 'next/image'
export default function PopularGames() {
  return (
    <>
      <h1 className="text-xl text-center"> Juegos más populares </h1>
      <div className="grid grid-cols-1 bg-stone-900 rounded my-2 py-2 ">
        {popularList.map((game) => (
          <PopularGameEntry key={game.url} {...game} />
        ))}
      </div>
    </>
  )
}

function PopularGameEntry(props: PopularListItem) {
  return (
    <div className="flex items-center m-1 p-1 gap-2">
      <div>
        <p className="text-lg font-bold">{props.position}</p>
      </div>
      <div className="flex gap-2 items-center">
        <Image
          width={80}
          height={80}
          src={props.image}
          className="border-black border-2"
          alt=""
        />
        <div>
          <h3 className="text-md font-bold text-yellow-300 line-clamp-2">
            {props.title}
          </h3>
          <p className="text-xs opacity-75">Origen: {props.origin}</p>
          <p className="text-xs opacity-75">Genero: {props.category}</p>
          <p className="text-xs opacity-75">Autor: {props.author}</p>
          <p className="text-xs opacity-75">Traducción: {props.translation}</p>
        </div>
      </div>
    </div>
  )
}

type PopularListItem = {
  position: number
  title: string
  origin: string
  category: string
  author: string
  translation: string | null
  image: string
  url: string
}
