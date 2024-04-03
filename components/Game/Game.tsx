import PublicacionJuego from '@/types/PublicacionJuego'
import Image from 'next/image'

export default function Game(props: PublicacionJuego) {
  return (
    <div className="flex flex-col rounded-md my-2 mx-12 py-2 px-12 items-center">
      <DatosPost {...props} />
      <HeaderJuego {...props} />
      <Detalle {...props} />
      <ImagenPrincipal {...props} />
      <FichaTecnica {...props} />
      <Trama {...props} />
      <Galeria {...props} />
      <Descargas {...props} />
    </div>
  )
}
function DatosPost(props: PublicacionJuego) {
  const { escritor, subidoEl } = props
  return (
    <p className="text-right text-lg lg:text-lg sm:px-16 xl:px-32 opacity-25">
      Escrito por {escritor}, {subidoEl}
    </p>
  )
}

function HeaderJuego(props: PublicacionJuego) {
  const { titulo } = props
  return (
    <h1 className="text-center text-4xl my-2 font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
      {titulo}
    </h1>
  )
}

function Detalle(props: PublicacionJuego) {
  const { detalle } = props
  return (
    <p className="text-center font-medium text-lg lg:text-lg sm:px-16 xl:px-32 opacity-50 leading-relaxed">
      {detalle}
    </p>
  )
}
function ImagenPrincipal(props: PublicacionJuego) {
  return (
    <div className="mx-auto my-2 p-2">
      <Image src={props.imagen} width={600} height={600} alt={props.titulo} />
    </div>
  )
}
function FichaTecnica(props: PublicacionJuego) {
  const {
    creador,
    publicado,
    motor,
    categoria,
    origen,
    traduccion,
    finales,
    duracion,
  } = props

  return (
    <div className="mx-4 px-4 m-2 p-2 rounded-md text-center">
      <Item nombre="Creado por: " value={creador} />
      <Item nombre="Fecha de Publicación: " value={publicado} />
      <Item nombre="Creado con: " value={motor} />
      <Item nombre="Categoría: " value={categoria} />
      <Item nombre="Origen: " value={origen} />
      <Item nombre="Traducción: " value={traduccion || ''} />
      <Item nombre="Finales: " value={finales} />
      <Item nombre="Duración: " value={duracion} />
    </div>
  )
}

type ItemProps = { nombre: string; value: string | number }
function Item(props: ItemProps) {
  const { nombre, value } = props
  return (
    <h6 className="text-lg font-bold">
      {nombre}
      <span className="ms-2 font-bold opacity-75">{value}</span>
    </h6>
  )
}

function Trama(props: PublicacionJuego) {
  const { trama } = props
  return (
    <p className="text-justify text-lg lg:text-lg sm:px-16 xl:px-32">{trama}</p>
  )
}

function Galeria(props: PublicacionJuego) {
  const { imagenes } = props
  return (
    <div className="mx-auto my-2 p-2">
      {imagenes.map((img) => (
        <Image
          key={img}
          className="my-2"
          src={img}
          width={600}
          height={600}
          alt={img}
        />
      ))}
    </div>
  )
}

function Descargas(props: PublicacionJuego) {
  const { descargaEspañol, descargaIngles } = props
  return (
    <div className="grid grid-cols-2 gap-2 m-2 p-2">
      <BotonDescarga
        titulo="Descarga en Español"
        link={descargaEspañol || ''}
      />
      <BotonDescarga titulo="Download in English" link={descargaIngles || ''} />
    </div>
  )
}

function BotonDescarga(props: { titulo: string; link: string }) {
  const { link, titulo } = props
  return (
    <a href={link}>
      <button
        type="button"
        className="px-6 py-3.5 text-base font-bold text-black inline-flex items-center bg-yellow-400 hover:bg-neutral-500 focus:ring-4 focus:outline-none focus:ring-neutral-300 rounded-lg text-center"
      >
        {titulo}
      </button>
    </a>
  )
}
