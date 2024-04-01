'use client'
import { useParams } from "next/navigation"
import lista from "@/fixtures/list.json"
export default function Paginator() {
  const totalEntries = lista.length;
  const pages = Math.round(totalEntries / 5);
  const currentPage = Number(useParams<{ id: string }>());

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex space-x-px text-bold m-1 py-1 text-md">
        <PaginatorButton value={'Previous'} />
        <PaginatorButton value={currentPage} />
        <PaginatorButton value={currentPage} />
        <PaginatorButton value={currentPage} />
        <PaginatorButton value={currentPage} />
        <PaginatorButton value={currentPage} />
        <PaginatorButton value={'Next'} />
      </ul>
    </nav>
  )
}

function PaginatorButton(props: { value: string | number }) {
  return (
    <li>
      <a
        href="#"
        className="
        rounded-md flex items-center justify-center px-4 h-10
        border
        hover:bg-neutral-800 
        hover:text-white-800 
        bg-neutral-900 border-neutral-900 
        text-gray-400 hover:bg-gray-700 
        dark:hover:text-white"
      >
        {props.value}
      </a>
    </li>
  )
}
