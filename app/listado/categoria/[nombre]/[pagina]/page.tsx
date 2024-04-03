import List from '@/components/GameList/List'
import Updates from '@/components/Updates/Updates'
import PopularGames from '@/components/PopularGames/Popular'

export default function Listado() {
  return (
    <main className="grid md:grid-cols-4">
      <div className="md:col-span-3 mx-1 px-2">
        <List />
      </div>
      <div className="mx-1 px-2">
        <Updates />
        <PopularGames />
      </div>
    </main>
  )
}
