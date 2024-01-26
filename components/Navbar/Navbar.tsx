'use client'
import { useState } from 'react'

const categorias = [
  'Acción',
  'Aventura',
  'Simulación',
  'Estrategia',
  'Deportes',
  'Puzzles',
  'Música',
  'Carreras',
  'Lucha',
  'Horror',
  'Gore',
  'Casual',
  'Educativo',
  'Psicologico',
  'Drama',
  'Romance',
  'Comedia',
  'Novela Visual',
]
export default function Navbar() {
  const [isHidden, setIsHidden] = useState(true)
  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <HomeTitle />
        <MobileListButton />
        <div className="flex items-center p-4 gap-4">
          <SearchBar />
          <div className="hidden w-full md:block md:w-auto">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 md:flex-row md:mt-0">
              <li>
                <button
                  onClick={() => setIsHidden(!isHidden)}
                  className="flex items-center justify-between w-full py-2 px-3 rounded md:p-0 md:w-auto"
                >
                  Listado
                  <ArrowSVG />
                </button>
                <div
                  className={
                    isHidden
                      ? 'hidden'
                      : '' + 'absolute z-10 font-normal divide-y rounded-lg'
                  }
                >
                  <ul
                    className="py-2 text-sm"
                    aria-labelledby="dropdownLargeButton"
                  >
                    {categorias.map((c) => (
                      <DropDownListItem
                        key={c}
                        text={c}
                        href={'/listado/' + c.toLocaleLowerCase()}
                      />
                    ))}
                  </ul>
                </div>
              </li>
              <NavbarItem text="Noticias" href="/noticias" />
              <NavbarItem text="Nosotros" href="/nosotros" />
              <NavbarItem text="Contacto" href="/contacto" />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavbarItem(props: { text: string; href: string }) {
  return (
    <li>
      <a href={props.href} className="block py-2 px-3 rounded md:p-0">
        {props.text}
      </a>
    </li>
  )
}

function DropDownListItem(props: { text: string; href: string }) {
  return (
    <li>
      <a href={props.href} className="block px-4 py-2">
        {props.text}
      </a>
    </li>
  )
}

function ArrowSVG() {
  return (
    <svg
      className="w-2.5 h-2.5 ms-2.5"
      aria-hidden="true"
      fill="none"
      viewBox="0 0 10 6"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 1 4 4 4-4"
      />
    </svg>
  )
}

function HamburgerSVG() {
  return (
    <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=""
        d="M1 1h15M 7h15M1 13h15"
      />
    </svg>
  )
}

function MobileListButton() {
  return (
    <button
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden"
      aria-controls="navbar-dropdown"
      aria-expanded="false"
    >
      <span className="sr-only">Abrir Listado</span>
      <HamburgerSVG />
    </button>
  )
}

function HomeTitle() {
  return (
    <a href="#" className="flex items-center space-x-3">
      <span className="self-center text-2xl font-semibold whitespace-nowrap">
        The Indie Archive
      </span>
    </a>
  )
}

function SearchSVG() {
  return (
    <svg className="w-4 h-4" aria-hidden="true" fill="none" viewBox="0 0 20 20">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
      />
    </svg>
  )
}
function SearchBar() {
  return (
    <form>
      <label className="mb-2 text-sm font-medium sr-only">Search</label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <SearchSVG />
        </div>
        <input
          type="search"
          className="block w-full p-2 ps-10 text-sm rounded-lg focus:outline-none"
        />
      </div>
    </form>
  )
}
