type PublicacionJuego = {
  id: number
  titulo: string
  origen: string
  categoria: string
  motor: string
  detalle: string
  creador: string
  publicado: number
  escritor: string
  traduccion: string | null
  subidoEl: string
  imagen: string
  trama: string
  imagenes: string[]
  finales: string
  duracion: string
  descargaOriginal: string | null
  descargaEspañol: string | null
  descargaIngles: string | null
}

export default PublicacionJuego
