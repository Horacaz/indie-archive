import List from '@/components/GameList/List'
import PopularGames from '@/components/PopularGames/Popular'

export default function Listado() {
  return (
    <main className="grid md:grid-cols-4">
      <div className="md:col-span-3 mx-1 px-2">
        <List />
      </div>
      <div className="mx-1 px-2">
        <PopularGames />
      </div>
    </main>
  )
}
