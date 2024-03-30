'use client'
import juego from '@/fixtures/juego.json'
import PublicacionJuego from '@/types/PublicacionJuego'
import Image from 'next/image'
import { useParams } from 'next/navigation'

export default function Juego() {
  const params = useParams<{ id: string }>()
  const datosJuego: PublicacionJuego = juego[Number(params.id) - 1]
  return (
    <div className="flex flex-col rounded-md my-2 mx-12 py-2 px-12 items-center">
      <DatosPost data={datosJuego} />
      <HeaderJuego data={datosJuego} />
      <Detalle data={datosJuego} />
      <ImagenPrincipal data={datosJuego} />
      <FichaTecnica data={datosJuego} />
      <Trama data={datosJuego} />
      <Galeria data={datosJuego} />
      <Descargas data={datosJuego} />
    </div>
  )
}

function HeaderJuego(props: { data: PublicacionJuego }) {
  return (
    <h1 className="text-center text-4xl my-2 font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
      {props.data.titulo}
    </h1>
  )
}

function ImagenPrincipal(props: { data: PublicacionJuego }) {
  return (
    <div className="mx-auto my-2 p-2">
      <Image
        src={props.data.imagen}
        width={600}
        height={600}
        alt={props.data.titulo}
      />
    </div>
  )
}

function Galeria(props: { data: PublicacionJuego }) {
  return (
    <div className="mx-auto my-2 p-2">
      {props.data.imagenes.map((imagen) => (
        <Image
          className="my-2"
          src={imagen}
          width={600}
          height={600}
          alt={imagen}
        />
      ))}
    </div>
  )
}

function FichaTecnica(props: { data: PublicacionJuego }) {
  return (
    <div className="mx-4 px-4 m-2 p-2 rounded-md text-center">
      <FichaTecnicaItem nombre="Creado por: " value={props.data.creador} />
      <FichaTecnicaItem
        nombre="Fecha de Publicación: "
        value={props.data.publicado}
      />
      <FichaTecnicaItem nombre="Creado con: " value={props.data.motor} />
      <FichaTecnicaItem nombre="Categoría: " value={props.data.categoria} />
      <FichaTecnicaItem nombre="Origen: " value={props.data.origen} />
      <FichaTecnicaItem
        nombre="Traducción: "
        value={props.data.traduccion || ''}
      />
      <FichaTecnicaItem nombre="Finales: " value={props.data.finales} />
      <FichaTecnicaItem nombre="Duración: " value={props.data.duracion} />
    </div>
  )
}

function FichaTecnicaItem(props: { nombre: string; value: string | number }) {
  return (
    <h6 className="text-lg font-bold">
      {props.nombre}
      <span className="ms-2 font-bold opacity-75">{props.value}</span>
    </h6>
  )
}
function Trama(props: { data: PublicacionJuego }) {
  return (
    <p className="text-justify text-lg lg:text-lg sm:px-16 xl:px-32">
      {props.data.trama}
    </p>
  )
}

function Descargas(props: { data: PublicacionJuego }) {
  return (
    <div className="grid grid-cols-2 gap-2 m-2 p-2">
      <BotonDescarga
        titulo="Descarga en Español"
        link={props.data.descargaEspañol || ''}
      />
      <BotonDescarga
        titulo="Download in English"
        link={props.data.descargaIngles || ''}
      />
    </div>
  )
}

function BotonDescarga(props: { titulo: string; link: string }) {
  return (
    <a href={props.link}>
      <button
        type="button"
        className="px-6 py-3.5 text-base font-bold text-black inline-flex items-center bg-yellow-400 hover:bg-neutral-500 focus:ring-4 focus:outline-none focus:ring-neutral-300 rounded-lg text-center"
      >
        {props.titulo}
      </button>
    </a>
  )
}

function Detalle(props: { data: PublicacionJuego }) {
  return (
    <p className="text-center font-medium text-lg lg:text-lg sm:px-16 xl:px-32 opacity-50 leading-relaxed">
      {props.data.detalle}
    </p>
  )
}

function DatosPost(props: { data: PublicacionJuego }) {
  return (
    <p className="text-right text-lg lg:text-lg sm:px-16 xl:px-32 opacity-25">
      Escrito por {props.data.escritor}, {props.data.subidoEl}
    </p>
  )
}
