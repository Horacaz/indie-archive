'use client'
import juego from '@/fixtures/juego.json'
import { useParams } from 'next/navigation'
import Game from '@/components/Game/Game'
import PublicacionJuego from '@/types/PublicacionJuego'

export default function Juego() {
  const datosJuego = RecuperarJuego()
  return <Game {...datosJuego} />
}

function RecuperarJuego() {
  const params = useParams<{ id: string }>()
  const datosJuego = juego.find(
    (obj) => obj.id === Number(params.id),
  ) as PublicacionJuego

  return datosJuego
}
