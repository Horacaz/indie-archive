import Navbar from '../components/Navbar/Navbar'
import PopularGames from '@/components/Popular'
import List from '@/components/List'

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="grid md:grid-cols-4">
        <div className="md:col-span-3 mx-1 px-2">
          <List />
        </div>
        <div className="mx-1 px-2">
          <PopularGames />
        </div>
      </main>
    </>
  )
}
